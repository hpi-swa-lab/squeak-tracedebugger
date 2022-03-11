private
iconForValue: value
	"Copied from ObjectExplorerWrapper."

	^ ([value iconOrThumbnailOfSize: 12] on: Error do: [nil])
		ifNil: [self showMessageIcons
			ifTrue: [ToolIcons iconNamed: (value perform: #class) theNonMetaClass toolIcon]
			ifFalse: [self class showContentsInColumns
				ifTrue: [ToolIcons iconNamed: #blank] 
				ifFalse: [nil]]]