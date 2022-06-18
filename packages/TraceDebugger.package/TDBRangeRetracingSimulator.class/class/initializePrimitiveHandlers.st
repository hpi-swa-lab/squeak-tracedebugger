class initialization
initializePrimitiveHandlers

	PrimitiveHandlers := Array new: 2047.
	
	PrimitiveHandlers
		atAll:
			(1 to: 18 "Integer primitives")
				, (20 to: 37 "LargeInteger primitives")
				, (38 to: 59 "Float primitives")
				, (60 to: 67 "subscript and stream primitives")
				, (68 to: 79 "storage management primitives")
				,
					#(110 "primitiveIdentical"
					111 "primitiveClass"
					139 "primitiveNextObject"
					143 "primitiveShortAt"
					149 "primitiveGetAttribute"
					158 "primitiveCompareWith"
					159 "primitiveHashMultiply"
					163 "primitiveGetImmutability"
					165 "primitiveIntegerAt"
					169 "primitiveNotIdentical"
					170 "primitiveAsCharacter"
					171 "primitiveImmediateAsInteger"
					173 "primitiveSlotAt"
					175 "primitiveBehaviorHash"
					177 "primitiveAllInstances"
					210 "primitiveContextAt"
					212 "primitiveContextSize")
				, (264 to: 519 "primitiveLoadInstVar")
				, (541 to: 559 "SmallFloat primitives")
		put: #context:doReadPrimitive:method:receiver:args:do:.
	
	PrimitiveHandlers
		atAll:
			#(39 "primitiveFloatAtPut"
			61 "primitiveAtPut"
			64 "primitiveStringAtPut"
			69 "primitiveObjectAtPut"
			74 "primitiveInstVarAtPut"
			76 "primitiveStoreStackp"
			105 "primitiveStringReplace"
			145 "primitiveConstantFill"
			148 "primitiveClone"
			166 "primitiveIntegerAtPut"
			168 "primitiveCopyObject"
			174 "primitiveSlotAtPut")
		put: #context:doWritePrimitive:method:receiver:args:do:.
	
	PrimitiveHandlers beReadOnlyObject.