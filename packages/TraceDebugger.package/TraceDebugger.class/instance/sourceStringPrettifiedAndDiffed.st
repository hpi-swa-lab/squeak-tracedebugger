accessing - code pane
sourceStringPrettifiedAndDiffed

	| class selector sourceString |
	class := self selectedClassOrMetaClass.
	selector := self selectedMessageName.
	(class isNil or: [selector isNil]) ifTrue: [^ 'missing'].
	sourceString := (self selectedContext ifNil: [^ 'error']) debuggerMap sourceText tdbproxyYourself.
	
	self validateMessageSource: sourceString forSelector: selector inClass: class.
	(#(#prettyPrint #prettyDiffs) 
		includes: contentsSymbol) 
			ifTrue: [sourceString := class prettyPrinterClass 
				format: sourceString
				in: class
				notifying: nil].
	self showingAnyKindOfDiffs 
		ifTrue: [sourceString := self diffFromPriorSourceFor: sourceString].
	^ sourceString