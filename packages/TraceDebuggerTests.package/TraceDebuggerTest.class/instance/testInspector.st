tests - ui
testInspector

	| debugger window snapshot |
	debugger := self newDebuggerOn:
		(Process forBlock: [TDBTestLogic new wiffyPlus]).
	debugger stepOver; stepInto; stepOver.
	self should: debugger selectedContext willReallyStore.
	
	"Spawn inspector"
	window := debugger contextVariablesInspector
		selectFieldNamed: #thisContext;
		inspectSelection.
	window in: [:w | self addTearDown: [w delete]].
	snapshot := window model.
	self assert: (window label includesSubstring: 'snapshot').
	snapshot selectFieldNamed: '[y]'.
	self assert: 'nil' equals: snapshot contents.
	snapshot selectFieldNamed: '[x]'.
	self assert: '1' equals: snapshot contents.
	
	"Spawned inspector will not update"
	debugger stepOver.
	self should: debugger selectedContext willReallySend.
	snapshot selectFieldNamed: '[y]'.
	self assert: 'nil' equals: snapshot contents.
	
	"Spawn nested inspector"
	window := snapshot
		selectFieldNamed: 'sender';
		inspectSelection.
	window in: [:w | self addTearDown: [w delete]].
	snapshot := window model.
	self assert: (window label includesSubstring: 'snapshot').
	snapshot selectFieldNamed: 'pc'.
	self assert: '36' equals: snapshot contents.
	
	"Switch to explorer"
	window := snapshot replaceInspectorWithExplorer.
	window in: [:w | self addTearDown: [w delete]].
	snapshot := window model.
	self assert: (window label includesSubstring: 'snapshot').
	self assert: 36 equals: (snapshot evaluateExpression: 'pc' requestor: nil).
	
	self flag: #todo. "Evaluation will also be covered by #testViewUpdatesHisotry et al. once InspectorFields dispatch back to inspectors. See comment in TDBInspector>>#fieldListMenu:shifted:."