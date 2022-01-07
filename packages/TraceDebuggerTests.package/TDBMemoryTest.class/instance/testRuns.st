tests - private
testRuns

	self assertObject: object atSlot: #plonk hasSeries: #().
	
	#(2 wiffy (wiffy wiffy)
	4 ziffy (wiffy wiffy ziffy ziffy)
	5 zonk (wiffy wiffy ziffy ziffy zonk)
	5 goo (wiffy wiffy ziffy ziffy goo))
		groupsDo: [:timeIndex :value :series |
			memory object: object priorTo: timeIndex atSlot: #plonk put: value.
			self assertObject: object atSlot: #plonk hasSeries: series].