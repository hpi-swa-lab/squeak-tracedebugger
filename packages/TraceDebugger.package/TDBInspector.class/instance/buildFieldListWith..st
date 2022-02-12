toolbuilder
buildFieldListWith: aBuilder

	^ (self inspector buildFieldListWith: aBuilder)
		model: self; "for monkey-patching the behavior of the original inspector"
		yourself