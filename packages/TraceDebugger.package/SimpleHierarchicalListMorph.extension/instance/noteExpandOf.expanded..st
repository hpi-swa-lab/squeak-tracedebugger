*TraceDebugger-UI-private-pseudo override
noteExpandOf: aMorph expanded: aBoolean

	model 
		perform: (self noteExpandSelector ifNil: [^ self]) 
		with: aMorph complexContents item
		with: aBoolean.