running
runDebuggerFrom: homeContext assertionsAndSteps: assertionsAndSteps

	| debugger process |
	process := Process forContext: homeContext.
	debugger := self classUnderTest newOn: process.
	
	self assert: process equals: debugger process.
	self should: (debugger selectedContext tdbIdentical: homeContext).
	
	(assertionsAndSteps copyWith: nil)
		pairsDo: [:expected :steps | | nodeCheck roots |
			self should: debugger selectedContext selector = expected first.
			
			"check code pane"
			self assert: (debugger selectedClassOrMetaClass newParser parseSelector: debugger contents asString lines first) = expected first.
			self assert: debugger selectedContents = expected second.
			
			"check inspectors"
			self should: (debugger contextVariablesInspector object tdbIdentical: debugger selectedContext).
			self should: (debugger receiverInspector object tdbIdentical: debugger selectedContext  receiver).
			
			"check tree"
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
			nodeCheck value: {expected third} value: roots.
			
			"step"
			steps ifNotNil: [steps do: [:step | step value: debugger]]].