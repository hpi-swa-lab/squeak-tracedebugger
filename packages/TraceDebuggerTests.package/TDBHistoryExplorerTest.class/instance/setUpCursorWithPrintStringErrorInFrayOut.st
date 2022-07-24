running
setUpCursorWithPrintStringErrorInFrayOut

	logic := TDBTestLogic new.
	cursor := self cursorClass traceForBlock:
		[logic
			doYinYang;
			yin: 3;
			yin: #printError].