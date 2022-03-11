support
setPreferences: aDictionary

	aDictionary keysAndValuesDo:
		[:preference :value | self classUnderTest
			perform: preference asSimpleSetter
			with: value].