*TraceDebugger-UI-accessing
tdbSelectedValues: objects

	self values withIndexDo: [:object :index |
		self selectionAt: index put: (objects includes: object)].