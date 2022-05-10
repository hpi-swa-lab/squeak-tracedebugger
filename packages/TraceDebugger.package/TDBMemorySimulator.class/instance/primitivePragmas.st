initialize-release
primitivePragmas

	| pragmas |
	pragmas := (Pragma allNamed: #simPrimitive: from: self class to: thisContext methodClass)
		, (Pragma allNamed: #simRawPrimitive: from: self class to: thisContext methodClass)
			"reject: [:pragma |
				(self class lookupSelector: pragma selector) methodClass == pragma methodClass])".
	
	pragmas := self filterRequiredPragmas: pragmas.
	
	^ pragmas