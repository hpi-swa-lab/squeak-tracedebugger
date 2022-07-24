toolbuilder - constants
windowColorToUse

	^ Color colorFrom: (self class useColorfulWindows
		ifTrue: [self defaultWindowColor]
		ifFalse: [self uniformWindowColor])