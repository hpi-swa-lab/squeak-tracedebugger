tests - ui
testExplorer

	| debugger window snapshot |
	debugger := self newDebuggerOn:
		(Process forBlock: [TDBTestLogic new wiffyPlus]).
	debugger stepOver; stepInto; stepOver.
	self should: debugger selectedContext willReallyStore.
	
	"Spawn explorer"
	window := self newWindow:
		[debugger contextVariablesInspector
			selectFieldNamed: #thisContext;
			inspectSelection].
	snapshot := window model.
	self assert: (window label includesSubstring: 'snapshot').
	self assert: 29 equals: (snapshot evaluateExpression: 'pc' requestor: nil).
	
	"Spawned explorer will not update"
	debugger stepOver.
	self should: debugger selectedContext willReallySend.
	self assert: 29 equals: (snapshot evaluateExpression: 'pc' requestor: nil).
	
	"Spawn nested explorer"
	window := self newWindow:
		[snapshot exploreObject: (snapshot evaluateExpression: 'sender' requestor: nil)].
	snapshot := window model.
	self assert: (window label includesSubstring: 'snapshot').
	self assert: self selector equals: (snapshot evaluateExpression: 'self selector' requestor: nil).
	
	"Switch to inspector"
	window := self newWindow: [snapshot inspectObject].
	snapshot := window model.
	self assert: (window label includesSubstring: 'snapshot').
	self assert: self selector equals: (snapshot evaluateExpression: 'self selector' requestor: nil).
	
	"Switch to explorer"
	window := self newWindow:
		[snapshot
			selectFieldNamed: 'sender';
			exploreSelection].
	snapshot := window model.
	self assert: (window label includesSubstring: 'snapshot').
	self assert: #newProcess equals: (snapshot evaluateExpression: 'self selector' requestor: nil).
	
	self flag: #todo. "Evaluation will also be covered by #testViewUpdatesHisotry et al. once InspectorFields dispatch back to inspectors. See comment in TDBInspector>>#fieldListMenu:shifted:."