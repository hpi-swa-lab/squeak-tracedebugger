private
context: aContext doNamedPrimitiveIn: aCompiledMethod for: rcvr withArgs: arguments ifHit: aBlock

	| literal primitiveName |
	literal := aCompiledMethod literalAt: 1.
	literal isArray ifFalse: [^ self].
	primitiveName := literal second.
	
	literal first
		caseOf:
			{[#MiscPrimitivePlugin] ->
				["Mostly optional primitives that read state."
				^ aBlock value:
					(self context: aContext primitiveFailTokenFor: nil "use image implementation")]}
		otherwise: [].