support
setPreferences: aDictionary during: aBlock

	| previousPreferences |
	previousPreferences := aDictionary keys
		collect:
			[:preference | preference -> (self classUnderTest perform: preference)]
		as: Dictionary.
	self setPreferences: aDictionary.
	^ aBlock ensure: [self setPreferences: previousPreferences]