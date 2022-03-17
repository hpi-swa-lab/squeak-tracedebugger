examples
example
	<tdbNotebook>

	| cursor |
	cursor := TDBCursor forContext: [#(2 1 3) max] asContext. "a TDBCursor on [] in TDBCursor class>>example"
	cursor doStepOver. "a TDBCursor on [] in TDBCursor class>>example"
	cursor doStepInto. "a TDBCursor on Array(Collection)>>max"
	cursor doStepOver. "a TDBCursor on Array(Collection)>>max"
	cursor doStepThrough. cursor context tempsAndValues condensedIntoOneLine. "'max: 2 each: 2 '"
	cursor doStepThroughUntil: [:ctx | ctx willReturn and: [ctx top = 3]]. "true"
	cursor doStepBack; doStepInto. "a TDBCursor on SmallInteger(Magnitude)>>max:" 
	cursor returnValueFor: cursor context ifPresent: #yourself. "3"
	cursor doStepOver: cursor context sender home. "a TDBCursor on Array(Collection)>>max"