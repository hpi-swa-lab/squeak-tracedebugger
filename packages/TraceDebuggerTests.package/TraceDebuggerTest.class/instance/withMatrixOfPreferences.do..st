running
withMatrixOfPreferences: allPreferences do: aBlock

	allPreferences tdbAllSubsetsDo: [:preferences |
		self
			setPreferences: (allPreferences
				collect: [:preference | preference -> (preferences includes: preference)]
				as: Dictionary)
			during: aBlock].