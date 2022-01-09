exporting
resultAsJson: benches

	| timesToRun |
	timesToRun := benches collect: [:ea | ea timeToRun asMilliSeconds].
	^ JsonObject new
		name: benches anyOne shortPrintString;
		unit: 'Milliseconds';
		value: timesToRun average asFloat;
		range: ('stdev: {1}' format: {timesToRun tdbSampleVariance asFloat});
		extra: (JsonObject new
			totalTime: (benches collect: [:ea | ea totalTime asMilliSeconds]) average asFloat;
			preparationTime: (benches collect: [:ea | ea preparationTime asMilliSeconds]) average asFloat;
			postparationTime: (benches collect: [:ea | ea postparationTime asMilliSeconds]) average asFloat;
			asJsonString);
		yourself