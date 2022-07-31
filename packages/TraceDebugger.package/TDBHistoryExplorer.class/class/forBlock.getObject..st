instance creation
forBlock: aBlock getObject: objectBlock

	| explorer |
	explorer := self forBlock: aBlock.
	explorer object: (objectBlock cull: explorer object).
	^ explorer