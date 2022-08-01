writing
writeHelpForSubtopic: aHelpTopic to: aFileDirectory

	^ self
		writeContents: (self cleanContents: aHelpTopic contents)
		to: aFileDirectory
		named: aHelpTopic key