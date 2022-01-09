exporting
writeResults: results toFile: filePath

	FileStream forceNewFileNamed: filePath do: [:file |
		file nextPutAll: results asJsonString].