private - stepping
basicDoStep: aBlock

	^ aBlock ensure:
		["Update the tree structure even if the operation was interrupted. Rudimentary support for cmd + dot only, users still might invalidate the context through hard interrupts. See #64."
		selectedContext := self cursor object: selectedContext.
		self changed: #cursorPosition]