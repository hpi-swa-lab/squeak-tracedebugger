tests - private
testSlots

	self assertObject: object atSlot: #plonk hasValues: #().
	self assertObject: object atSlot: #griffle hasValues: #().
	
	#(1 plonk wiffy (wiffy) ()
	2 plonk ziffy (wiffy ziffy) ()
	2 griffle zonk (wiffy ziffy) (zonk zonk)
	4 griffle goo (wiffy ziffy) (zonk zonk goo goo)
	5 plonk zoo (wiffy ziffy zoo zoo zoo) (zonk zonk goo goo))
		groupsDo: [:timeIndex :slot :newValue :plonkValues :griffleValues |
			memory object: object priorTo: timeIndex atSlot: slot put: newValue.
			self
				assertObject: object atSlot: #plonk hasValues: plonkValues;
				assertObject: object atSlot: #griffle hasValues: griffleValues].