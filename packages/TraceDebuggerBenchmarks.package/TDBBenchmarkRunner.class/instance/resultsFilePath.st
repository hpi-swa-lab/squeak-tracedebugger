accessing
resultsFilePath

	^ self configAt: #TDBBenchmarkResultsPath ifAbsent: ['TDBBenchmarkResults.json']