historic data
historicRawData

	| jsonString regex request |
	request := WebClient httpGet: self historicDataUrl.
	request isSuccess ifFalse: [self error: request response].
	jsonString := nil.
	(regex := '^window\.BENCHMARK_DATA = (.*)$' asRegex)
		matchesIn: request content do: [:match |
			jsonString ifNotNil: [self error: 'Unexpected raw data format'].
			jsonString := (regex subexpression: 2) readStream].
	jsonString ifNil: [self error: 'Unexpected raw data format'].
	^ Json readFrom: jsonString readStream