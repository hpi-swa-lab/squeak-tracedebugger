enumerating
withAllDescendants

	| all |
	all := Set new.
	self withAllDescendantsAddTo: all.
	^ all