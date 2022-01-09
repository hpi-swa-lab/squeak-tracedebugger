simulation
enableSimulator: aSimulator

	context becomeForward: (aSimulator customize: context) copyHash: true.
	self children do: [:child |
		child enableSimulator: aSimulator].