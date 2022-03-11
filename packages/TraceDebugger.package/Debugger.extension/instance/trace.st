*TraceDebugger-UI
trace

	| currentBounds process context oldInspectors traceDebugger window postBuild |
	self okToChange ifFalse: [^ self changed: #flash].
	
	"Save current state"
	currentBounds := ToolBuilder default class getBoundsForWindow: self containingWindow.
	
	"Close first because MVC fiddles around with processes."
	process := self interruptedProcess.
	interruptedProcess := nil. "Before delete, so release doesn't terminate it"
	context := self selectedContext.
	oldInspectors := #(receiverInspector contextVariablesInspector)
		collect: [:path | path -> (path value: self)]
		as: Dictionary.
	self close.
	
	traceDebugger := (TraceDebugger newOn: process context: process suspendedContext)
		messageText: message;
		yourself.
	(self respondsTo: #errorWasInUIProcess) ifTrue:
		[traceDebugger errorWasInUIProcess: self errorWasInUIProcess].
	postBuild := nil.
	"Copy old state to new window"
	traceDebugger selectContext: context.
	oldInspectors keysAndValuesDo: [:path :oldInspector | | newInspector |
		newInspector := path value: traceDebugger.
		oldInspector customFields do: [:field |
			newInspector addCustomField: field].
		newInspector selectFieldNamed: oldInspector selectedFieldName.
		oldInspector contentsTyped ifNotNil: [:contents | | previousBuild |
			newInspector contentsTyped: contents.
			"Updating strings is only possible after toolbuilding"
			previousBuild := postBuild.
			postBuild := [previousBuild value.
				newInspector changed: #editString with: contents]]].
	
	"Open"
	window := traceDebugger openFull: true label: self labelString.
	"---- In MVC, the lines after this will not be executed ---"
	ToolBuilder default class setBoundsForWindow: window to: currentBounds.
	
	postBuild value.
	^ window