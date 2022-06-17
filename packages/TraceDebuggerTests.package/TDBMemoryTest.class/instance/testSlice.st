tests - private
testSlice

	| values |
	self assertObject: object atSlot: #plonk hasValues: #().
	
	#(2 wiffy
	4 ziffy
	5 zonk
	5 goo
	7 goo)
		groupsDo: [:timeIndex :newValue |
			memory object: object priorTo: timeIndex atSlot: #plonk put: newValue].
	values := #(wiffy wiffy ziffy ziffy goo goo goo now now).
	
	0 to: values size - 1 do: [:start |
		0 to: values size - 1 do: [:stop |
			self
				assert: (values copyFrom: start + 1 to: (stop + 1 max: start))
				equals: (memory object: object atTimes: (start to: stop) atSlot: #plonk getCurrent: [#now] ifAbsent: [self fail]) rawPointValues].
		self shouldRaiseError: [memory object: object atTimes: (-1 to: start - 1) atSlot: #plonk getCurrent: [#now] ifAbsent: [#fail]]].