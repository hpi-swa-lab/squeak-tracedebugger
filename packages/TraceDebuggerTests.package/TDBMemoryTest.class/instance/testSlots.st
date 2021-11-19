tests - private
testSlots

	self assertObject: object atSlot: #plonk hasSeries: #().
	self assertObject: object atSlot: #griffle hasSeries: #().
	
	#(1 plonk wiffy (wiffy) ()
	2 plonk ziffy (wiffy ziffy) ()
	2 griffle zonk (wiffy ziffy) (zonk zonk)
	4 griffle goo (wiffy ziffy) (zonk zonk goo goo)
	5 plonk zoo (wiffy ziffy zoo zoo zoo) (zonk zonk goo goo))
		groupsDo: [:timeIndex :slot :value :plonkSeries :griffleSeries |
			memory object: object priorTo: timeIndex atSlot: slot put: value.
			self
				assertObject: object atSlot: #plonk hasSeries: plonkSeries;
				assertObject: object atSlot: #griffle hasSeries: griffleSeries].