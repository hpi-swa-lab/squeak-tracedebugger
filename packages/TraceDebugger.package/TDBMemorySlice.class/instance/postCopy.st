copying
postCopy

	intervals := intervals copy.
	rawValues := rawValues copy.
	sideEffects := sideEffects copy. self flag: #suspicious. "Why does removing this line not break the tests?"