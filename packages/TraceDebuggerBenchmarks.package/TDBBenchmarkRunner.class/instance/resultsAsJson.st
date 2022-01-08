exporting
resultsAsJson

	^ results values select: [:benches | benches allSatisfy: #hasRun] thenCollect: [:benches |
		(benches allSatisfy: #hasRun) ifTrue:
			[ | timesToRun |timesToRun := benches collect: [:ea | ea timeToRun asMilliSeconds].
			JsonObject new
				name: benches anyOne shortPrintString;
				unit: 'Milliseconds';
				value: timesToRun average asFloat;
				range: timesToRun tdbSampleVariance asFloat;
				yourself]]