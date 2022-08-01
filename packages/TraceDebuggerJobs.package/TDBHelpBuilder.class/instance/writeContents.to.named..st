writing
writeContents: aText to: aFileDirectory named: key

	^ aFileDirectory
		newFileNamed: ('{1}.html' format: {key})
		do: [:stream |
			aText printHtmlOn: stream.
			stream localName]