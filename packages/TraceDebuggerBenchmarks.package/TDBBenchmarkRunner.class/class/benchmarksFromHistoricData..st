historic data
benchmarksFromHistoricData: data

	| benchmarks |
	benchmarks := Dictionary new.
	data do: [:entry |
		entry benches do: [:bench |
			benchmarks at: bench name put: bench benchmark]].
	^ benchmarks