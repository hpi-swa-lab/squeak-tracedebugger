pages - private
basicBasicNavigation
	"This method was automatically generated. Edit it using:"
	"TraceDebuggerHelp edit: #basicBasicNavigation"
	<generated>
	^(HelpTopic
		title: 'Basic Navigation'
		contents: 
'Basic Navigation

You can use the stepping buttons to navigate through the program trace. The TraceDebugger uses lazy stepping, i.e., the program will be only executed up to the currently watched position. If you step forward, the program will be advanced accordingly (just like in the regular debugger). If you step back, the TraceDebugger displays the recorded historic state of the program execution. This includes the selected context and the selected expression, the variables in the inspectors, and even the result of print-its in the inspectors.

<#figureButtonProceed> Close the debugger and proceed the program normally.
<#figureButtonRestart> Rewind the selected context to its start. Other than in the normal debugger, the code will not be executed again, but the historic execution will be displayed again.
<#figureButtonInto> Step into the next message send.
<#figureButtonOver> Step over the next message send.
<#figureButtonThrough> Step to the next expression in the same method, including expressions in blocks.
<#figureButtonBack> Step back the previous message send.
<#figureButtonWhere> Select the expression that will be executed next.
<#figureButtonUp> Jump to the sender of the current context.

Alternatively to the stepping buttons, you can also navigate through the context tree: Red-click any context to jump to the time where it was active. Shift + red-click any context to select its sender at its activation time.!
]style[(16 1 96 13 1317)a0b,a0,,i,!' readStream nextChunkText)
			key: #basicBasicNavigation;
			shouldStyle: false;
			yourself