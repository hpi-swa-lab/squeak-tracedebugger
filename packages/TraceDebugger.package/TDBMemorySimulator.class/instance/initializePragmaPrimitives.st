initialize-release
initializePragmaPrimitives

	pragmaPrimitives := Dictionary new.
	self shouldIsolate ifTrue:
		[self flag: #todo. "Support further plugins here, e.g., B2DPlugin and BitBlt"
		pragmaPrimitives
			at: #CroquetPlugin put: [:context :primitiveName :receiver :compiledMethod :arguments :doBlock |
				"allowed"
				doBlock value];
			at: #FilePlugin put: [:context | self forbiddenOperationForContext: context];
			at: #FloatArrayPlugin put: [:context |
				"use image implementation"
				self context: context primitiveFailTokenFor: nil];
			at: #Float64ArrayPlugin put: [:context |
				"use image implementation"
				self context: context primitiveFailTokenFor: nil];
			at: #LargeIntegers put: [:context :primitiveName :receiver :compiledMethod :arguments :doBlock |
				"allowed"
				doBlock value];
			at: #MiscPrimitivePlugin put: [:context |
				"use image implementation"
				self context: context primitiveFailTokenFor: nil];
			at: #SimulationStudio put: [:context :primitiveName :receiver :compiledMethod :arguments :doBlock |
				"allowed"
				doBlock value];
			at: #UUIDPlugin put: [:context :primitiveName :receiver :compiledMethod :arguments :doBlock |
				"allowed"
				doBlock value];
			at: nil put: [:context :primitiveName :receiver :compiledMethod :arguments :doBlock |
				(#('primitiveHighResClock' 'primitiveUtcWithOffset' 'primitiveUtcWithOffset') includes: primitiveName)
					ifTrue:
						["allowed"
						doBlock value]
					ifFalse:
						[self forbiddenOperationForContext: context]]].