accessing - code pane
selectedMessage

	contents ifNotNil: [^ contents copy].
	
	self selectedContext ifNil: [^ self emptyContents].
	
	self showingDecompile ifTrue: [^ self decompiledSourceIntoContents].
	
	contents := (self showingDocumentation
		ifFalse: [self sourceStringPrettifiedAndDiffed]
		ifTrue: [self commentContents])
			copy asText.
	self selectedClassOrMetaClass ifNotNil: [:class |
		contents makeSelectorBoldIn: class].
	^ contents