pages - private
basicStructure
	"This method was automatically generated. Edit it using:"
	"TraceDebuggerHelp edit: #basicStructure"
	<generated>
	^(HelpTopic
		title: 'Structure'
		contents: 
'Structure of the TraceDebugger

The user interface of the Trace Debugger is largely inspired by Squeak''s default debugger, so we will only describe the differences here:

<#figureStart>

In the title of the window, you can see the current time index. This is the point in time of the trace where the program has halted. As you step through the trace, this index will update.

On the top of the window, you can see the context tree. This tree displays all methods that are active or have been activated at an early point in the program trace. Red-click on any context to inspect its execution in the debugger. By hovering any context, you can also see a quick preview of its invocation. If you have enabled the "Balloon help in message lists" preference, you will also see a preview of the method source. By yellow-clicking on any context, you can also find many other commands which will be discussed in the following pages.

<#figureContextToolTip>

Below the context tree, there is the button bar which provides options to step through the program trace. If you have enabled the "Extra debugger buttons" preference, you will also find further buttons for browsing the code here.

The third view is the code pane which displays the source of the current activated method. The initial selection marks the expression that will executed next when you move forward the program.

The final view at the bottom is the inspectors which allow you to inspect the state of the receiver and the context interactively. Red-click any field to view its value, or yellow-click the field and choose inspect/explore to spawn a separate tool on the selected value. This tool displays a snapshot of the value that will not change when you continue the program.

<#figureSnapshotInspectors>

You can also perform do-its and print-its in the inspector/explorer value panes. You can add a custom inspector field by typing and selecting an expression into the value pane, yellow-clicking it, and choosing "add as field":

<#figureAddAsField>

As you continue stepping, the values in the inspector panes will be updated automatically.!
]style[(30 1 208 11 168 13 278 43 236 10 83 35 88 9 199 10 161 7 1 7 70 8 117 6 5 9 54 22 221)a0b,a0,,b,,b,,Rcode:// PreferenceBrowser open searchPattern: #balloonHelpInMessageLists;,,b,,Rcode:// PreferenceBrowser open searchPattern: #extraDebuggerButtons;,,b,,b,,i,,i,,i,,i,,i,,i,!' readStream nextChunkText)
			key: #basicStructure;
			shouldStyle: false;
			yourself