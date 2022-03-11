running
runDebuggerFrom: homeContext assertionsAndSteps: assertionsAndSteps

	| debugger process |
	process := Process forContext: homeContext.
	debugger := self newDebuggerOn: process.
	
	self assert: process equals: debugger process.
	self should: (debugger selectedContext tdbIdentical: homeContext).
	
	(assertionsAndSteps copyWith: nil)
		pairsDo: [:expected :steps | | nodeCheck roots |
			self should: debugger selectedContext selector = expected first.
			
			"check code pane"
			self assert: (debugger selectedClassOrMetaClass newParser parseSelector: debugger contents asString lines first) = expected first.
			expected second ifNotNil: [:expectedSelection |
				self assert: debugger selectedContents = expectedSelection].
			
			"check inspectors"
			self should: (debugger contextVariablesInspector object tdbIdentical: debugger selectedContext).
			self should: (debugger receiverInspector object tdbIdentical: debugger selectedContext receiver).
			
			"check tree"
			expected third in: [:expectedTree |
				roots := debugger rootContexts.
				nodeCheck := nil.
				nodeCheck := [:expectedNodes :actualNodes |
					self assert: actualNodes size = expectedNodes size.
					actualNodes readStream in: [:nodeStream |
						expectedNodes pairsDo: [:expectedSelector :expectedChildren | | node |
							node := nodeStream next.
							self assert: node selector = expectedSelector.
							nodeCheck 
								value: expectedChildren
								value: (debugger childContextsFor: node)]]].
				nodeCheck value: {expectedTree} value: roots].
			
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