tests - ui
testExplorer

	| debugger window snapshot |
	debugger := self newDebuggerOn:
		(Process forBlock: [TDBTestLogic new wiffyPlus]).
	debugger stepOver; stepInto; stepOver.
	self should: debugger selectedContext willReallyStore.
	
	"Spawn explorer"
	window := debugger contextVariablesInspector
		selectFieldNamed: #thisContext;
		inspectSelection.
	window in: [:w | self addTearDown: [w delete]].
	snapshot := window model.
	self assert: (window label includesSubstring: 'snapshot').
	self assert: 29 equals: (snapshot evaluateExpression: 'pc' requestor: nil).
	
	"Spawned explorer will not update"
	debugger stepOver.
	self should: debugger selectedContext willReallySend.
	self assert: 29 equals: (snapshot evaluateExpression: 'pc' requestor: nil).
	
	"Spawn nested explorer"
	window := snapshot exploreObject: (snapshot evaluateExpression: 'sender' requestor: nil).
	window in: [:w | self addTearDown: [w delete]].
	snapshot := window model.
	self assert: (window label includesSubstring: 'snapshot').
	self assert: self selector equals: (snapshot evaluateExpression: 'self selector' requestor: nil).
	
	"Switch to inspector"
	window := snapshot inspectObject.
	window in: [:w | self addTearDown: [w delete]].
	snapshot := window model.
	self assert: (window label includesSubstring: 'snapshot').
	self assert: self selector equals: (snapshot evaluateExpression: 'self selector' requestor: nil).
	
	"Switch to explorer"
	window := snapshot
		selectFieldNamed: 'sender';
		exploreSelection.
	window in: [:w | self addTearDown: [w delete]].
	snapshot := window model.
	self assert: (window label includesSubstring: 'snapshot').
	self assert: #newProcess equals: (snapshot evaluateExpression: 'self selector' requestor: nil).
	
	self flag: #todo. "Evaluation will also be covered by #testViewUpdatesHisotry et al. once InspectorFields dispatch back to inspectors. See comment in TDBInspector>>#fieldListMenu:shifted:."