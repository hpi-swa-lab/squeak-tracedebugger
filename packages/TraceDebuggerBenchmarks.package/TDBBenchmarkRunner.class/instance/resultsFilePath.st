accessing
resultsFilePath

	^ resultsFilePath ifNil:
		[self configAt: #TDBBenchmarkResultsPath ifAbsent: ['TDBBenchmarkResults.json']]