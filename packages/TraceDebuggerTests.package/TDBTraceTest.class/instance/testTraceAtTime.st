tests
testTraceAtTime

	{{0. trace1}.
	{10. trace2}.
	{20. trace3}.
	{26. trace1}.
	{30. trace4}.
	{41. trace1}.
	{46. nil}.
	{100. nil}}
		overlappingPairsDo: [:current :next |
			current first to: next first - 1 do: [:time |
				self assert: current second equals:
					(trace1 traceAtTime: time ifAbsent: [])]].