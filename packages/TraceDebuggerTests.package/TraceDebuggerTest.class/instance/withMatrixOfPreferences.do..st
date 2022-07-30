running
withMatrixOfPreferences: allPreferences do: aBlock
	"Evaluate aBlock for each combination of enablements of allPreferences."

	allPreferences tdbAllSubsetsDo: [:preferences |
		self
			setPreferences: (allPreferences
				collect: [:preference | preference -> (preferences includes: preference)]
				as: Dictionary)
			during: aBlock].