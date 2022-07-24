tests - private
testRuns

	self assertObject: object atSlot: #plonk hasValues: #().
	
	#(2 wiffy (wiffy wiffy)
	4 ziffy (wiffy wiffy ziffy ziffy)
	5 zonk (wiffy wiffy ziffy ziffy zonk)
	5 goo (wiffy wiffy ziffy ziffy goo)
	7 goo (wiffy wiffy ziffy ziffy goo goo goo))
		groupsDo: [:timeIndex :newValue :values |
			memory object: object priorTo: timeIndex atSlot: #plonk put: newValue.
			self assertObject: object atSlot: #plonk hasValues: values].