initialize-release
initializePragmaPrimitives

	pragmaPrimitives := Dictionary new.
	
	(self wantsToControlReads or: [self wantsToControlWrites]) ifTrue:
		[pragmaPrimitives
			at: #BitBltPlugin put: [:context :primitiveName :receiver :compiledMethod :arguments :doBlock |
				self context: context primitiveBitBlt: primitiveName method: compiledMethod receiver: receiver arguments: arguments do: doBlock];
			at: #FloatArrayPlugin put: [:context |
				"use image implementation"
				self context: context primitiveFailTokenFor: nil];
			at: #Float64ArrayPlugin put: [:context |
				"use image implementation"
				self context: context primitiveFailTokenFor: nil];
			at: #MiscPrimitivePlugin put: [:context |
				"use image implementation"
				self context: context primitiveFailTokenFor: nil]].
		
	self shouldIsolate ifTrue:
		[self flag: #todo. "Support further plugins here, e.g., B2DPlugin"
		pragmaPrimitives
			at: #CroquetPlugin put: [:context :primitiveName :receiver :compiledMethod :arguments :doBlock |
				"allowed"
				doBlock value];
			at: #FilePlugin put: [:context | self forbiddenOperationForContext: context];
			at: #LargeIntegers put: [:context :primitiveName :receiver :compiledMethod :arguments :doBlock |
				"allowed"
				doBlock value];
			at: #SimulationStudio put: [:context :primitiveName :receiver :compiledMethod :arguments :doBlock |
				"allowed"
				doBlock value];
			at: #TraceDebugger put: [:context :primitiveName :receiver :compiledMethod :arguments :doBlock |
				self context: context primitiveTraceDebugger: primitiveName receiver: receiver arguments: arguments];
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