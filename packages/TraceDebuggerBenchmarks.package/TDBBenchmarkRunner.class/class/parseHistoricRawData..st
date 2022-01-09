historic data
parseHistoricRawData: rawData

	"parse dates"
	| benchmarks |
	rawData lastUpdate:
		(DateAndTime utcMicroseconds: rawData lastUpdate * 1000 offset: 0).
	rawData entries do: [:entries |
		entries do: [:entry |
			(entry includesKey: #date) ifTrue:
				[entry date:
					(DateAndTime utcMicroseconds: entry date * 1000 offset: 0)]]].
	
	"parse benchmark objects"
	benchmarks := Dictionary new.
	rawData entries do: [:entries |
		entries withIndexDo: [:entry :index |
			entry index: index]].
	rawData entries do: [:entries |
		entries do: [:entry |
			entry benches do: [:bench | | benchmark |
				benchmark := self parseHistoricBench: bench.
				benchmarks at: bench name put: benchmark.
				bench benchmark: benchmark]]].