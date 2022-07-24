tests - private
testObjects

	| second |
	second := object copy.
	
	self assertObject: object atSlot: #plonk hasValues: #().
	self assertObject: second atSlot: #plonk hasValues: #().
	
	#(1 1 wiffy (wiffy) ()
	2 1 ziffy (wiffy ziffy) ()
	2 2 zonk (wiffy ziffy) (zonk zonk)
	4 2 goo (wiffy ziffy) (zonk zonk goo goo)
	5 1 zoo (wiffy ziffy zoo zoo zoo) (zonk zonk goo goo))
		groupsDo: [:timeIndex :objectId :value :firstValues :secondValues |
			memory object: ({object. second} at: objectId) priorTo: timeIndex atSlot: #plonk put: value.
			self
				assertObject: object atSlot: #plonk hasValues: firstValues;
				assertObject: second atSlot: #plonk hasValues: secondValues].