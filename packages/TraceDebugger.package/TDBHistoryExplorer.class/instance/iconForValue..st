private
iconForValue: value

	self shouldShowIcons ifFalse: [^ nil].
	
	^ (([value iconOrThumbnailOfSize: 12] on: Error, Warning, Halt do: [nil])
		ifNil: [ToolIcons iconNamed: (value perform: #class) theNonMetaClass toolIcon])
			ifNil: [ToolIcons iconNamed: #blank]