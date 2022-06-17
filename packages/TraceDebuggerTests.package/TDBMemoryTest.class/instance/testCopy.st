tests - copying
testCopy

	| copy |
	memory object: object priorTo: 1 atSlot: #plonk put: #wiffy.
	memory object: object priorTo: 2 atSlot: #plonk put: {#wiffy}.
	self assertObject: object atSlot: #plonk hasValues: #(wiffy (wiffy)).
	
	copy := memory copy.
	
	self assertIn: copy object: object atSlot: #plonk hasValues: #(wiffy (wiffy)).
	
	"Isolated modifications:"
	"modify value"
	(memory object: object atTime: 1 atSlot: #plonk ifAbsent: [self fail]) at: 1 put: #ziffy.
	self assertIn: memory object: object atSlot: #plonk hasValues: #(wiffy (ziffy)).
	self assertIn: copy object: object atSlot: #plonk hasValues: #(wiffy (ziffy)).
	
	"modify run"
	memory object: object priorTo: 2 atSlot: #plonk put: #zonk.
	self assertIn: memory object: object atSlot: #plonk hasValues: #(wiffy zonk).
	self assertIn: copy object: object atSlot: #plonk hasValues: #(wiffy (ziffy)).
	
	"modify slot"
	memory object: object priorTo: 2 atSlot: #griffle put: #goo.
	self assertIn: memory object: object atSlot: #griffle hasValues: #(goo goo).
	self assertIn: copy object: object atSlot: #griffle hasValues: #().
	
	"modify objects"
	memory object: self priorTo: 2 atSlot: #plonk put: 42.
	self assertIn: memory object: self atSlot: #plonk hasValues: #(42 42).
	self assertIn: copy object: self atSlot: #plonk hasValues: #().