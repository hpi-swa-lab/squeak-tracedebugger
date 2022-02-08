*TraceDebugger-UI
trace

	| currentBounds process traceDebugger window |
	self okToChange ifFalse: [^ self changed: #flash].
	
	"Save current state"
	currentBounds := ToolBuilder default class getBoundsForWindow: self containingWindow.
	
	"Close first because MVC fiddles around with processes."
	process := self interruptedProcess.
	interruptedProcess := nil. "Before delete, so release doesn't terminate it"
	self close.
	
	traceDebugger := (TraceDebugger newOn: process context: process suspendedContext)
		messageText: message;
		errorWasInUIProcess: self errorWasInUIProcess;
		yourself.
	"Copy old state to new window"
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
	
	"Open"
	window := traceDebugger openFull: true label: self labelString.
	"---- In MVC, the lines after this will not be executed ---"
	ToolBuilder default class setBoundsForWindow: window to: currentBounds.