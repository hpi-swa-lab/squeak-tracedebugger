updating
modelWakeUpIn: aWindow

	super modelWakeUpIn: aWindow.
	{receiverInspector. contextVariablesInspector} do: [:inspector |
		inspector modelWakeUpIn: aWindow].