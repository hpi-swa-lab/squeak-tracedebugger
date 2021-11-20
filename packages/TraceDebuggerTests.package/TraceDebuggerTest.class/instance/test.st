tests
test

	| block process debugger children root roots |
	block := ['\w+' asRegex].
	process := block newProcess.
	debugger := self classUnderTest "forBlock:"newOn: process.
	
	self assert: process equals: debugger process.
	
	roots := debugger rootContexts.
	self assert: roots size = 1.
	root := roots anyOne.
	self
		assert: (root receiver perform: #== with: block);
		assert: root selector = #newProcess.
	
	children := debugger childContextsFor: root.
	self assert: children isEmpty.
	
	self assert: (debugger contents beginsWith: 'newProcess\' withCRs).
	self assert: debugger selectedContents isNil.
	
	self assert: (debugger selectedContext perform: #== with: root).
	self assert: (debugger selectedReceiver perform: #== with: block).