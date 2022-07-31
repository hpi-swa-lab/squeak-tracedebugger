preferences
themeProperties

	^ super themeProperties ,
		#((colorForHistory 'Colors' 'Window color to indicate history mode.')
		(#colorForPresent 'Colors' 'Window color to indicate present mode.')
		
		(styleForAliveContext 'Styles' 'Text style of alive contexts ({color[. emphasis]}).')
		(styleForDeadContext 'Styles' 'Text style of dead contexts ({color[. emphasis]}).')
		(styleForSignalContext 'Styles' 'Text style of signal contexts ({color[. emphasis]}).')
		(styleForNextContext 'Styles' 'Text style of the next context that is reached via stepInto ({color[. emphasis]}).')
		(styleForPreviousContext 'Styles' 'Text style of the previous context that is reached via stepBack; stepInto ({color[. emphasis]}).'))