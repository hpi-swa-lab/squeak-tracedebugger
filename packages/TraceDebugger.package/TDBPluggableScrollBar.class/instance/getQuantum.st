model access
getQuantum
	
	self getQuantumSelector ifNotNil: [:selector |
		self quantum: (model perform: selector)].
	^ self quantum