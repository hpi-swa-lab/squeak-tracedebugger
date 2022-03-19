*TraceDebugger-UI-accessing-override
selectedIndex: anInt
	selectedIndex := anInt.
	self changed: #selectedIndex.
	
	"if nothing was selected initially"
	self changed: #canAcceptOrAdd.
	self changed: #acceptColor.