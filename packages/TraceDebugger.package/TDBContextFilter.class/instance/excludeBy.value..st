accessing
excludeBy: property value: value

	^ self
		perform: ('exclude{1}:' format: {property capitalized}) asSymbol
		with: value