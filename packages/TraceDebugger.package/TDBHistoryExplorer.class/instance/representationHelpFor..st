accessing - toolbuilder
representationHelpFor: aSymbol

	^ aSymbol
		caseOf:
			{[#list] -> ['show a list of all historic values'].
			[#details] -> ['show a detail text or image of the selected historic value']}
		otherwise: []