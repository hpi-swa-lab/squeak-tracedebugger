running
setUpCursor

	logic := TDBTestLogic new.
	cursor := self cursorClass traceForBlock:
		[logic doYinYang].