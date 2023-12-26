*TraceDebugger-UI-updating-pseudo override
updateAllIcons

	self items do: [:ea | ea refreshIcon].
	"self adjustSubmorphPositions. --- not required"