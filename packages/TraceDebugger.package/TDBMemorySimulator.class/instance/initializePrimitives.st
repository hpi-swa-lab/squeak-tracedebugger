initialize-release
initializePrimitives

	| pragmas |
	pragmas := self primitivePragmas.
	
	primitives := Array new: 575.
	pragmas do: [:pragma |
		| index numArgs selector |
		index := pragma argumentAt: 1.
		selector := pragma selector.
		numArgs := selector numArgs.
		self assert: (primitives at: index) isNil.
		primitives at: index put:
			(pragma keyword caseOf:
				{[#simPrimitive:] ->
					[[:context :compiledMethod :receiver :arguments :doBlock |
						| argArray |
						argArray := Array new: numArgs.
						argArray at: 1 put: context.
						arguments size < (numArgs - 2)
							ifTrue:
								[argArray at: 2 put: receiver.
								argArray replaceFrom: 3 to: numArgs - 1 with: arguments startingAt: 1]
							ifFalse:
								[argArray replaceFrom: 2 to: numArgs - 1 with: arguments startingAt: 1].
						argArray at: numArgs put: doBlock.
						self perform: selector withArguments: argArray]].
				[#simRawPrimitive:] ->
					[[:context :compiledMethod :receiver :arguments :doBlock |
						self
							perform: selector
							with: context
							with: receiver
							with: compiledMethod
							with: arguments
							with: doBlock]]})].