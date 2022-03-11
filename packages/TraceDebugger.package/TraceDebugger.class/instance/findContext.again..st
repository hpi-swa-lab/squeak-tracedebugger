private
findContext: signature again: again

	^ self
		findContextPerforming: #findContextForSignature:startingAtTime:
		with: signature
		again: again