running
runDebuggerFrom: homeContext assertionsAndSteps: assertionsAndSteps
	"assertionsAndSteps:
		#(assertions0
		steps1
		assertions1
		...)
			- assertions:
				#(expectedContextSelector 'expected contents selection' expectedTree rcvrInspectorChecks ctxtInspectorChecks)
				- expectedTree: Nested selectors.
				- inspectorChecks:
					#('field name 1' 'expected contents 1' 'field name 2' 'expected contents 2' ...)
						- field name: name of existing inspector field or expression for a custom field
			- steps:
				#(steppingSelectorOrBlock1 steppingSelectorOrBlock2 ...)
	Assertions and steps are performed in their read order.
	"

	| debugger process |
	process := Process forContext: homeContext.
	debugger := self newDebuggerOn: process.
	
	self assert: process equals: debugger process.
	self should: (debugger selectedContext tdbIdentical: homeContext).
	
	(assertionsAndSteps copyWith: nil)
		pairsDo: [:expected :steps | | nodeCheck roots |
			self should: debugger selectedContext selector = expected first.
			
			"check code pane"
			self assert: expected first equals: (debugger selectedClassOrMetaClass newParser parseSelector: debugger contents asString lines first).
			expected second ifNotNil: [:expectedSelection |
				self assert: debugger selectedContents = expectedSelection].
			
			"check inspectors"
			self should: (debugger contextVariablesInspector object tdbIdentical: debugger selectedContext).
			self should: (debugger receiverInspector object tdbIdentical: debugger selectedContext receiver).
			
			"check tree"
			expected third in: [:expectedTree |
				roots := debugger rootContexts.
				self assert: 1 equals: roots size.
				nodeCheck := nil.
				nodeCheck := [:expectedNode :actualNode | | expectedSelector expectedChildren actualChildren |
					expectedSelector := expectedNode first.
					expectedChildren := expectedNode allButFirst.
					actualChildren := debugger childContextsFor: actualNode.
					self assert: expectedChildren size equals: actualChildren size.
					expectedChildren with: actualChildren do: [:expectedChild :actualChild |
						nodeCheck 
							value: expectedChild
							value: actualChild]].
				expectedTree ifNotNil:
					[nodeCheck value: expectedTree value: roots first]].
			
			"check inspectors"
			(expected at: 4 ifAbsent: []) ifNotNil: [:expectedValues |
				(expectedValues forceTo: 2 paddingWith: nil)
					with: {debugger receiverInspector. debugger contextVariablesInspector}
					do: [:expectedInspectorValues :inspector |
						expectedInspectorValues pairsDo: [:key :expectedValue | | contents |
							contents := inspector fields
								detect: [:field | field name = key]
								ifFound: [:field | inspector
									selectField: field;
									contents]
								ifNone: [(inspector newCustomField
									setGetterFor: inspector to: key ifFail: [self fail];
									getValueFor: inspector) printString].
							self assert: (contents in: [:actualValue |
								expectedValue match: actualValue])]]].
			
			"step"
			steps ifNotNil: [steps do: [:step | step value: debugger]]].