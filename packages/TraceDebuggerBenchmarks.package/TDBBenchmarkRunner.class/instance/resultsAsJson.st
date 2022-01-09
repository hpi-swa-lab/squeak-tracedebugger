exporting
resultsAsJson

	^ (results withKeysSorted: #shortPrintString ascending)
		values
			select: [:benches | benches allSatisfy: #hasCompletedOrTimedOut]
			thenCollect: [:benches | self resultAsJson: benches]