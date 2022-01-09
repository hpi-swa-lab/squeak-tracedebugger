exporting
resultsAsJson

	^ results values select: [:benches | benches allSatisfy: #hasRun] thenCollect: [:benches |
		(benches allSatisfy: #hasRun) ifTrue:
			[self resultAsJson: benches]]