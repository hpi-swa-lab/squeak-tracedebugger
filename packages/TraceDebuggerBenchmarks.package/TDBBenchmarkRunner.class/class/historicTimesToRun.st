historic data
historicTimesToRun
	"Answer all historic benchmark times from the CI-maintained GitHub repository database. See my class comment for further details."

	| benchmarks data |
	data := self historicData.
	benchmarks := self benchmarksFromHistoricData: data.
	^ benchmarks values
		collect: [:benchmark |
			benchmark ->
				((data
					collect: [:entry |
						entry "date" index ->
							(entry benches
								detect: [:bench | bench benchmark shortPrintString = benchmark shortPrintString]
								ifFound: [:bench | bench benchmark timeToRun])]
					as: Dictionary)
						reject: #isNil)]
		as: Dictionary