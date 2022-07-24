private
filterRequiredPragmas: pragmas

	^ pragmas select: [:pragma |
		((self class lookupSelector: pragma selector) pragmasAt: #tdbRequiredIf:)
			ifEmpty: [true]
			ifNotEmpty: [:conditionPragmas |
				conditionPragmas anySatisfy: [:conditionPragma |
					| condition |
					condition := conditionPragma argumentAt: 1.
					condition value: self]]]