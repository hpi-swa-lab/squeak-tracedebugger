running
newExplorer: aBlock

	| window |
	window := self newWindow: aBlock.
	explorer := window model.