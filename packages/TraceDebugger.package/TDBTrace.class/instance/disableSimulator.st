simulation
disableSimulator

	self flag: #todo. "It would be nice to honor previous customizations of context..."
	context becomeForward: (context decustomize: context) copyHash: true.
	self children do: [:child |
		child disableSimulator].