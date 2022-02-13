private
basicDoStep: aBlock

	^ aBlock ensure:
		["Update the tree structure even if the operation was interrupted."
		selectedContext := self cursor object: selectedContext tdbproxyYourself.
		self changed: #cursorPosition]