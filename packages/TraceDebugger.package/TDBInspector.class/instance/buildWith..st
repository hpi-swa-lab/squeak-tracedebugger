toolbuilder
buildWith: builder
	"Copied from Inspector to activate toolbuilder methods on the receiver."
	
	| windowSpec buttonOffset |
	buttonOffset := (Preferences standardButtonFont widthOfString: 'explore' translated) * 3/2.
	windowSpec := self buildWindowWith: builder specs: {
		(0@0 corner: 0.3@0.71)
			-> [self buildFieldListWith: builder].
		(0.3@0.0 corner: 1@0.71)
			-> [self buildValuePaneWith: builder].
		(LayoutFrame fractions: (0@0.71 corner: 1@1) offsets: (0@0 corner: buttonOffset negated@0))
			-> [self buildCodePaneWith: builder].
		(LayoutFrame fractions: (1@0.71 corner: 1@1) offsets: (buttonOffset negated@0 corner: 0 @ 0))
			-> [self buildExploreButtonWith: builder].
	}.
	^ builder build: windowSpec