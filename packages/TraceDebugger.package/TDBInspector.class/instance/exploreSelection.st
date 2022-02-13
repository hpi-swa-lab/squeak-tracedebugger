field list menu
exploreSelection

	| object |
	object := self inspector selectionOrObject.
	^ self
		decorateView: (ToolSet explore: object)
		forObject: object