private
basicDoStep: aBlock

	^ aBlock ensure:
		["Update the tree structure even if the operation was interrupted."
		self changed: #cursorPosition]