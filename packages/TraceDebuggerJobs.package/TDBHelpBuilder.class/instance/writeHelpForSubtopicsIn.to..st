writing
writeHelpForSubtopicsIn: aHelpTopic to: aFileDirectory

	^ (self class on: aHelpTopic)
		writeHelpTo: (aFileDirectory directoryNamed: aHelpTopic key)