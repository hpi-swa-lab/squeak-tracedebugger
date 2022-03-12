accessing - toolbuilder
listSelectContext: aContext

	| context |
	context := self cursor object: aContext.
	
	self basicSelectContext: context.
	
	self changed: #listSelectedContext.