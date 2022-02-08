*TraceDebugger-UI
trace

	| currentBounds process traceDebugger |
	self okToChange ifFalse: [^ self changed: #flash].
	
	"Save current states"
	currentBounds := ToolBuilder default class getBoundsForWindow: self containingWindow.
	
	"Close first because MVC fiddles around with processes."
	process := self interruptedProcess.
	interruptedProcess := nil. "Before delete, so release doesn't terminate it"
	self close.
	
	traceDebugger := TraceDebugger openOn: process context: process suspendedContext label: self labelString contents: nil fullView: true.
	"---- In MVC, the lines after this will not be executed ---"
	"Copy old states to new window"
	ToolBuilder default class setBoundsForWindow: traceDebugger containingWindow to: currentBounds.
	traceDebugger selectContext: self selectedContext.
	#(receiverInspector contextVariablesInspector) do: [:path | | newInspector oldInspector |
		oldInspector := path value: self.
		newInspector := path value: traceDebugger.
		oldInspector customFields do: [:field |
			newInspector addCustomField: field].
		newInspector selectFieldNamed: oldInspector selectedFieldName.
		oldInspector contentsTyped ifNotNil: [:contents |
			newInspector
				contentsTyped: contents;
				changed: #editString with: contents]].
	