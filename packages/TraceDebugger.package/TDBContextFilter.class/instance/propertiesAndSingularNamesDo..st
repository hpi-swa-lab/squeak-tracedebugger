accessing
propertiesAndSingularNamesDo: propertyAndNameBlock

	^ self propertiesAndNames keysAndValuesDo: [:property :names |
		propertyAndNameBlock value: property value: names first]