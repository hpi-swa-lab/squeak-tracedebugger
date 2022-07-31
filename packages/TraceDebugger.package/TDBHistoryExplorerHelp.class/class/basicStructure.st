pages
basicStructure
	"This method was automatically generated. Edit it using:"
	"TDBHistoryExplorerHelp edit: #basicStructure"
	<generated>
	^(HelpTopic
		title: 'Structure'
		contents: 
'Structure

A history explorer consts of three regions:

<#figureHistoryExplorerSmall>

In the title bar, the explored object instance is revealed.

The control bar on top of the window contains a code pane for the current expression. You can enter any Smalltalk expression here whose changes over the recorded time you are interested in. When you accept it (Cmd + S), the expression is evaluated against all historic versions of the explored object instance (that is mapped to the receiver, self). You can also print it, inspect it, explore it, or debug it (experimental) the expression from here through the yellow button menu or the usual shortcuts.

Next to the code pane, you can find two buttons for managing the appearance of the history:

Spawn brings up the currently viewed history in another history explorer, where you can ask follow-up questions about the result.
The representation button in the corner lets you choose an alternative representation mode for the history. Currently supported representations are a list of values (default) and a details view that shows an expanded form of the current selection. The latter can be used for viewing longer printStrings, images, or formatted texts.

The contents pane below the control bar displays the history of the expression evaluated against the explored object instance.

On the right side, you can see all results of the expression for all recorded points in time if you have chosen the list representation in the control bar, or a single result if you are in details mode.

In the yellow-button menu of the list, you can inspect or explore a snapshot of the selection or debug the snapshot to observe how it was created. You can also choose debug here to open a new trace debugger on the selected context causing the selected change.

On the left side, you can find a reduced context tree that only contains all contexts that are responsible for any change of the explored expression. By default, this tree is displayed in a compact form. You can alternate the tree display from the yellow-button menu under compact labels. Fiddling around with these options is a great way to understand the tree display.

Note that each inner node in the tree can be collapsed or expanded and only shows a value from the slice on its own when it is collapsed. When you select an expanded node while in details mode, the details pane displays all values from all leaves within the selected node.

<#figureHistoryExplorerCompactionMenu>

A note on fray outs: Even if the results of a query contains of multiple values, it is possible that the representation (e.g., the printString) of some values varies within the associated time range of the value. In this case, the history explorer will display a fray out error for the relevant items. In the details mode, all frayed out elements will be displayed on top of each other. See exampleDrawing for an example.!
]style[(9 47 29 9 9 49 11 184 9 135 4 16 8 2 10 2 10 5 8 190 5 125 4 14 7 125 4 27 7 144 5 13 111 35 7 74 4 69 7 55 7 4 7 32 18 52 5 130 12 220 14 368 30 11 9 372 14 16)b,,I1,,b,,b,,i,,c116000000,,i,,i,,i,,i,,iI1b,I1,I1b,iI1b,I1b,I1,iI1,I1,iI1,I1,,b,,I1,bI1,I1,iI1,I1,iI1,I1,iI1,I1,iI1,I1,iI1,I1,iI1,I1,bI1,I1,I1i,I1,,I1,I1i,I1,Rcode:// TDBHistoryExplorer class >> #exampleDrawing;,I1!' readStream nextChunkText)
			key: #basicStructure;
			shouldStyle: false;
			yourself