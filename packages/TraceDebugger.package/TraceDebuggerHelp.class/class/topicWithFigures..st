private
topicWithFigures: aHelpTopic

	aHelpTopic contents:
		(self figures inject: aHelpTopic contents into: [:contents :figureSelector |
			contents
				copyReplaceAll: ('%<<1p>>' expandMacrosWith: figureSelector)
				with: (self getFigure: figureSelector) tdbAsText]).
	^ aHelpTopic