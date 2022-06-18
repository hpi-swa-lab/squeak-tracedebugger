context classes
requiredCapabilities

	| pragmas |
	pragmas := self capabilityPragmas.
	
	pragmas := self filterRequiredPragmas: pragmas.
	
	^ pragmas
		collect: [:pragma | pragma argumentAt: 1 "capabilitySelector"]
		as: Set