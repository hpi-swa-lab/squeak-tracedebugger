primitives
context: aContext primitiveBitBlt: primitiveName method: aCompiledMethod receiver: receiver arguments: arguments do: aBlock
	"Overridden to eliminate vectors in the receiver or the form parameters."

	| destForm forms sourceForm destVars sourceVars vars varsIndex |
	(self wantsToControlReads or: [self wantsToControlWrites]) ifFalse: [^ aBlock value].
	
	primitiveName = #primitiveCopyBits ifFalse:
		[^ self forbiddenOperationForContext: aContext].
	
	
	"Fork if the receiver is a vector."
	((self context: aContext isVector: receiver)
		and: [receiver hasSingleValue not])
			ifTrue:
				[^ self fork: aContext for: receiver collect: [:eachContext :eachReceiver |
					self
						context:  eachContext
						runPrimitive: 117 "primitiveExternalCall"
						method: aCompiledMethod
						receiver: eachReceiver
						args: arguments]].
	
	"Fork for any forms that are vectors."
	(self context: aContext simulatedObject: receiver instVarAt: 1 "destForm" ifHit: [:value |
		destForm := value. true])
			ifNil: [destForm := aContext object: receiver instVarAt: 1].
	self wantsToControlReads ifTrue:
		[(self context: aContext simulatedObject: receiver instVarAt: 2 "sourceForm" ifHit: [:value |
			sourceForm := value. true])
				ifNil: [sourceForm := aContext object: receiver instVarAt: 2]].
	forms := self context: aContext combineArguments: {destForm. sourceForm} collect: [:eachSourceDest | eachSourceDest].
	(self context: aContext isVector: forms) ifTrue:
		[^ self fork: aContext for: forms collect: [:eachContext :eachForms |
			self
				context:  eachContext
				runPrimitive: 117 "primitiveExternalCall"
				method: aCompiledMethod
				receiver: receiver
				args: arguments]].
	
	"Fork for any form variables that are vectors."
	destVars := (1 to: (aContext objectClass: destForm) instSize) collect: [:index |
		| var |
		(self context: aContext simulatedObject: destForm instVarAt: index ifHit: [:value |
			var := value. true])
				ifNil: [var := aContext object: destForm instVarAt: index].
		var].
	sourceVars := sourceForm
		ifNotNil:
			[(1 to: (aContext objectClass: sourceForm) instSize) collect: [:index |
				| var |
				(self context: aContext simulatedObject: sourceForm instVarAt: index ifHit: [:value |
					var := value. true])
						ifNil: [var := aContext object: sourceForm instVarAt: index].
				var]]
		ifNil: [#()].
	vars := self context: aContext combineArguments: destVars , sourceVars collect: [:eachVars | eachVars].
	(self context: aContext isVector: vars) ifTrue:
		[^ self fork: aContext for: vars collect: [:eachContext :eachVars |
			self
				context:  eachContext
				runPrimitive: 117 "primitiveExternalCall"
				method: aCompiledMethod
				receiver: receiver
				args: arguments]].
	
	"Eliminate unary vectors in form variables."
	varsIndex := 0.
	{destForm. destVars size. sourceForm. sourceVars  size} pairsDo: [:object :instSize |
		1 to: instSize do: [:index |
			| var |
			varsIndex := varsIndex + 1.
			var := vars at: varsIndex.
			(self context: aContext simulatedObject: object instVarAt: index tryPut: var)
				ifFalse: [aContext object: object instVarAt: index put: var]]].
	
	"Now pass on to super with a time range that does not contain critical vectors."
	^ super
		context: aContext
		primitiveBitBlt: primitiveName
		method: aCompiledMethod
		receiver: receiver
		arguments: arguments
		do: aBlock