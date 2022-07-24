tests - primitives
testBitBlt1
	<timeout: 30 "seconds">

	| cursor screenshot screenshots |
	cursor := TDBCursor traceForBlock: [screenshot := RectangleMorph new imageForm].
	screenshots := (cursor
		object: screenshot
		collect: [:ea | [ea copy: ea relativeRectangle] ifError: []])
			values.
	#(nil nil nil 1 1 2 3 3 3 2 2) with: screenshots do: [:expected :eachScreenshot |
		expected
			ifNil: [self assert: eachScreenshot isNil]
			ifNotNil: [self assert: expected equals: eachScreenshot colorsUsed size]].