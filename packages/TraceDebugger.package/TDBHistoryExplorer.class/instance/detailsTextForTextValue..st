labels & details
detailsTextForTextValue: aText

	^ 'a {1} ({2}, {3}):\{4}' withCRs asText format:
		{aText class.
		'character' tdbAsTimesStringBasedOn: aText.
		'run' tdbAsTimesStringBasedOn: aText runs runs.
		aText}