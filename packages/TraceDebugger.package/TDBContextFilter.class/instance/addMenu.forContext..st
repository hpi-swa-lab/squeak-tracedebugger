*TraceDebugger-UI-menus
addMenu: menu forContext: aContext

	self propertiesAndSingularNamesDo: [:property :name |
		| value |
		value := self getProperty: property for: aContext.
		menu
			add: ('Hide {1} "{2}"' format: {name. value})
			target: self
			selector: #excludeBy:value:
			argumentList: {property. value}].
	^ menu