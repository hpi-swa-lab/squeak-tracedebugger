toolbuilder
buildContents

	| builder specs |
	builder := ToolBuilder default.
	
	specs := self buildContentsWith: builder.
	
	^ specs collect: [:spec | builder build: spec]