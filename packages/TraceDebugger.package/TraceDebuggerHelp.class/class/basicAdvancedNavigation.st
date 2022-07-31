pages - private
basicAdvancedNavigation
	"This method was automatically generated. Edit it using:"
	"TraceDebuggerHelp edit: #basicAdvancedNavigation"
	<generated>
	^(HelpTopic
		title: 'Advanced Navigation'
		contents: 
'Advanced Navigation

Besides the basic navigation language, the context tree also supports some advanced operators.

Jumps bring you directly to the sender context or the current callee context of the selection. With jump to present, you can also return to the tail of the program trace.

<#figureJumpMenu>

With the spawn option, you can open a second trace debugger on the selected subtree of the trace. Both debuggers will operate on the same instance of the program trace, allowing you to view different contexts at the same time. You can also drag any context from the tree into the world to spawn another trace debugger.

<#figureSpawn>

By marking a context as border context, you can reduce the complexity of the tree and hide all senders of the context. You can also define multiple border contexts. As you as you step out of a border contexts, the remainder of the tree will be visible again. You can also press space on a context to toggle whether it is a border context.

<#figureBorderMenu>!
]style[(19 1 97 5 95 15 85 5 346 14 321)a0b,a0,,i,,i,,i,,i,!' readStream nextChunkText)
			key: #basicAdvancedNavigation;
			shouldStyle: false;
			yourself