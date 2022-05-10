initialize-release
initializePragmaPrimitives

	super initializePragmaPrimitives.
	
	pragmaPrimitives
		at: #FloatArrayPlugin ifPresent: [:block |] ifAbsentPut: [[:context |
			"Only optional primitives that write state."
			"use image implementation"
			self context: context primitiveFailTokenFor: nil]];
		at: #Float64ArrayPlugin ifPresent: [:block |] ifAbsentPut: [[:context |
			"Only optional primitives that write state."
			"use image implementation"
			self context: context primitiveFailTokenFor: nil]];
		at: #MiscPrimitivePlugin ifPresent: [:block |] ifAbsentPut: [[:context |
			"Most optional primitives that read state."
			self flag: #optimize. "Allow-list read-only primitives"
			"use image implementation"
			self context: context primitiveFailTokenFor: nil]].