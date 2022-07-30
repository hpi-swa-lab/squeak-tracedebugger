actions
openScriptingAPIWorkspace

	| source lines workspace |
	source := TDBCursor class sourceCodeAt: #exampleScriptingAPIs.
	lines := source asString lines allButFirst: 5.
	lines := lines asOrderedCollection
		insert: '"cursor exploreProtocol."' before: 2;
		yourself.
	source := lines joinSeparatedBy: Character cr.
	source := source copyWithRegex: ' "[^"]+"' matchesReplacedWith: ''.
	workspace := Workspace new
		contents: source;
		shouldStyle: true;
		openLabel: 'TraceDebugger scripting examples'.
	workspace model codeTextPane
		selectAll;
		doIt;
		setSelection: (1 to: 0).