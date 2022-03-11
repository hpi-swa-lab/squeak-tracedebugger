accessing
propertiesAndPluralNamesDo: propertyAndNameBlock

	^ self propertiesAndNames keysAndValuesDo: [:property :names |
		propertyAndNameBlock value: property value: names second]