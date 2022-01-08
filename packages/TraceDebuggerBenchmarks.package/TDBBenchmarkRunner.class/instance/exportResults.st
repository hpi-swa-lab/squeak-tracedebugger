exporting
exportResults

	| results |
	results := self resultsAsJson.
	self writeResults: results toFile: self resultsFilePath.