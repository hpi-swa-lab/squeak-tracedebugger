running
runNotebook

	| receiver selector |
	receiver := Smalltalk classNamed: testSelector key.
	selector := testSelector value.
	^ receiver perform: selector