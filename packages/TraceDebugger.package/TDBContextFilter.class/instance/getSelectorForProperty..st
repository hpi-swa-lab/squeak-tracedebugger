properties
getSelectorForProperty: property

	^ ('get{1}:' format: {property capitalized}) asSymbol