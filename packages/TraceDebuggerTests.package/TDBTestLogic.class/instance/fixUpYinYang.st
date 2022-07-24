as yet unclassified
fixUpYinYang

	yin isInteger ifFalse:
		[self yin: yin asInteger].
	yang isInteger ifFalse:
		[self yang: yang asInteger].