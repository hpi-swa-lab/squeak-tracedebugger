running
setUpCursorWithText

	| text |
	logic := TDBTestLogic new.
	cursor := self cursorClass traceForBlock:
		[text := 'plonk griffle' asText.
		text addAttribute: TextEmphasis bold from: 1 to: 5.
		text addAttribute: TextEmphasis italic from: 7 to: 15].
	^ text