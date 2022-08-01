writing
writeHelpTo: aFileDirectory

	| subFiles summary name |
	aFileDirectory assureExistence.
	
	subFiles := OrderedDictionary new.
	self helpTopic subtopics
		reject: [:subtopic | subtopic tdbIsTemplateTopic]
		thenDo: [:subtopic |
			subFiles at: subtopic put:
				(subtopic hasSubtopics
					ifTrue:
						[self writeHelpForSubtopicsIn: subtopic to: aFileDirectory]
					ifFalse:
						[self writeHelpForSubtopic: subtopic to: aFileDirectory])].
	
	summary := Text streamContents: [:stream |
		stream withAttribute: TextEmphasis bold do:
			[stream nextPutAll: self helpTopic title].
		stream cr; cr.
		subFiles associations
			do: [:subtopicAndFile |
				stream
					nextPutAll: '- ';
					withAttribute: (TextURL url: ('./{1}' format: {subtopicAndFile value})) do:
						[stream nextPutAll: subtopicAndFile key title]]
			separatedBy: [stream cr]].
	name := self writeContents: summary to: aFileDirectory named: 'index'.
	^ '{1}/{2}' format: {aFileDirectory localName. name}