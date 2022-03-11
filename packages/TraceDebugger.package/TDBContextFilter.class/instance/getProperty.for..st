properties
getProperty: property for: aContext

	^ self
		perform: ('get{1}:' format: {property capitalized}) asSymbol
		with: aContext