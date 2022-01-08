historic data
historicTimesToRun

	| benchmarks data |
	data := self historicData.
	benchmarks := self benchmarksFromHistoricData: data.
	^ benchmarks values
		collect: [:benchmark |
			benchmark ->
				(data
					collect: [:entry |
						entry "date" index ->
							(entry benches
								detect: [:bench | bench benchmark shortPrintString = benchmark shortPrintString]
								ifFound: [:bench | bench benchmark timeToRun])]
					as: Dictionary)]
		as: Dictionary.