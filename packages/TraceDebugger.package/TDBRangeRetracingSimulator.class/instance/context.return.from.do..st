instruction processing
context: aContext return: value from: sender do: aBlock

	contextCopies ifNotNil:
		[contextCopies at: sender ifPresent: [:copiedSender |
			"aContext has been forked earlier, but the forked stack still holds any reference to a context from the original stack. Replace it with its copy from the fork to keep the fork isolated. See #90 on current limitations of this approach."
			self flag: #suspicious. "Why do we have recursive copies here?"
			^ self context: aContext return: value from: copiedSender do: aBlock]].
	
	^ super context: aContext return: value from: sender do: aBlock