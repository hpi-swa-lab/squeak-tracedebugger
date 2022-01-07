opening
openOn: aProcess context: aContext label: titleOrNil contents: aStringOrTextOrNil fullView: full
	"Open a notifier or a full debugger in response to an error, halt, or notify. Decorates that invocation with (1) recursive-error detection and (2) error logging."

	| activeProcess |
	Smalltalk isMorphic
		ifFalse: [^ Debugger openOn: aProcess context: aContext label: titleOrNil contents: aStringOrTextOrNil fullView: full].
	
	activeProcess := Processor activeProcess.
	
	"If the active process re-enters this method again, something went wrong with invoking the debugger."
	(activeProcess hasTdbRecursiveError) ifTrue:
		[activeProcess clearTdbErrorRecursionFlag.
		^ Debugger openOn: aProcess context: aContext label: titleOrNil contents: aStringOrTextOrNil fullView: full].
	
	"Explicitely handle logging exceptions. No need to bother the recursion mechanism here."
	[Preferences logDebuggerStackToFile
		ifTrue: [Smalltalk logSqueakError: (titleOrNil ifNil: [self name]) inContext: aContext]]
			on: Error do: [:ex |
				Preferences disable: #logDebuggerStackToFile.
				ToolSet debugException: ex].
	
	"If project-specific debuggers mess up, we have to flag that recursion here. Se above."
	[| debugger |
	activeProcess setTdbErrorRecursionFlag.
	debugger := (self newOn: aProcess context: aContext)
		messageText: aStringOrTextOrNil;
		errorWasInUIProcess: (Project current spawnNewProcessIfThisIsUI: aProcess);
		yourself.
	^ debugger morphicOpenFull: full label: titleOrNil]
		ensure: [activeProcess clearTdbErrorRecursionFlag].