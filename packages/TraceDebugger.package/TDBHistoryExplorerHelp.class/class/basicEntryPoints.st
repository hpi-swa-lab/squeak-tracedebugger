pages
basicEntryPoints
	"This method was automatically generated. Edit it using:"
	"TDBHistoryExplorerHelp edit: #basicEntryPoints"
	<generated>
	^(HelpTopic
		title: 'Entry points'
		contents: 
'Entry points

There are two entry points to the history explorer:

1. From a running trace debugger, yellow-click any field in one of the inspectors. Select "explore field history" to explore all values that have been assigned to the field, or select "explore value history" to explore the history of the current value.

<#figureExploreFieldHistory>

Alternatively, you can enter any expression into the inspector''s code pane and select "explore expression history" from the yellow button menu.

Tip: These items are also available from any spawned snapshot inspector (see Structure).

2. Record and explore an object history using the opening protocol of TDBHistoryExplorer:

TDBHistoryExplorer
	openForBlock:
		[(Array new: 3)
			at: 1 put: #one;
			at: 2 put: #two;
			at: 3 put: #three;
			yourself]
	expression: ''self copy''.

For more inspiration, browse all invocation examples.!
]style[(12 2 56 30 221 29 223 9 7 36 31 18 1 2 20 13 4 1 6 4 1 1 1 4 3 1 1 1 4 1 4 5 3 1 1 1 4 1 4 5 3 1 1 1 4 1 6 5 8 3 11 1 11 2 23 31)b,,a0,a0b,a0,I1,a0,a0u,a0,a0b,a0,Rcode://
ToolSet browseClass: TDBHistoryExplorer class category: ''opening'';,,a0,I1,c000000122I1,I1,c000122000I1,I1,c000000122I1,I1,c122000000I1,c000122000I1,I1,c000000122I1,I1,c122000000I1,I1,c000000122I1,I1,c000000122I1,I1,c000000122I1,I1,c122000000I1,I1,c000000122I1,I1,c000000122I1,I1,c000000122I1,I1,c122000000I1,I1,c000000122I1,I1,c000000122I1,I1,c000000122I1,I1,c000000122I1,I1,c122000122nI1,I1,,Rcode://
ToolSet browseClass: TDBHistoryExplorer class category: ''examples'';!' readStream nextChunkText)
			key: #basicEntryPoints;
			shouldStyle: false;
			yourself