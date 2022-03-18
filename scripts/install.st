"Install TraceDebugger"
workspacePath := [| dir |
	dir := (Smalltalk globals at: #CIPrepareImageDirectory) directoryEntry.
	[(dir / '.project') exists] whileFalse: [
		dir = (dir := dir containingDirectory) ifTrue: [
			self error: 'repository not found']].
	dir fullName] value.
Transcript showln: ('Installing TraceDebugger from {1}... ' format: {workspacePath}).
Metacello new
	baseline: 'TraceDebugger';
	repository: 'filetree://' , workspacePath , '/packages';
	onConflictUseIncoming;
	load: (Smalltalk globals at: #CIMCRequired ifAbsent: [#default]).
Transcript showln: 'TraceDebugger was installed'.
