historic data
historicData
	
	| rawData |
	rawData := self historicRawData.
	self parseHistoricRawData: rawData.
	^ rawData entries Benchmark