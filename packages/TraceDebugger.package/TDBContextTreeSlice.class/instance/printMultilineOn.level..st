printing
printMultilineOn: aStream level: level

	level timesRepeat: [aStream nextPut: Character tab].
	aStream print: self path asArray.
	self hasChildren ifTrue:
		[aStream
			nextPut: $:;
			cr].
	
	self children
		do: [:child | child printMultilineOn: aStream level: level + 1]
		separatedBy: [aStream cr].