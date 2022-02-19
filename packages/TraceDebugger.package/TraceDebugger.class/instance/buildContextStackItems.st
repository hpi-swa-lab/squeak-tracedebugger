toolbuilder
buildContextStackItems

	| builder specs |
	builder := ToolBuilder default.
	specs := OrderedCollection new.
	
	self shouldShowContextTree ifTrue:
		[specs addLast: ((self buildContextTreeWith: builder)
			frame: LayoutFrame fullFrame;
			yourself)].
	self shouldShowContextStack ifTrue:
		[specs addLast: ((self buildContextStackListWith: builder)
			frame: LayoutFrame fullFrame;
			yourself).
		specs size > 1 ifTrue:
			[specs last frame: (0 @ 0 corner: 1 / 3 @ 1).
			(specs atLast: 2) frame: (1 / 3 @ 0 corner: 1 @ 1)]].
	
	^ specs collect: [:spec | builder build: spec]