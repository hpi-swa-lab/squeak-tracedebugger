running
withMatrixOfPreferences: allPreferences do: aBlock
	"Evaluate aBlock for each combination of enablements of allPreferences."

	Smalltalk garbageCollect. "Reduce number of debuggers that will need to be updated"
	
	allPreferences tdbAllSubsetsDo: [:preferences |
		self
			setPreferences: (allPreferences
				collect: [:preference | preference -> (preferences includes: preference)]
				as: Dictionary)
			during: aBlock].