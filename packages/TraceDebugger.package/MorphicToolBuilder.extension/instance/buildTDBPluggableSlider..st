*TraceDebugger-UI-ToolBuilder-widgets required
buildTDBPluggableSlider: spec

	| widget |
	widget := self tdbSliderClass
		on: spec model
		getValue: spec getValue
		setValue: spec setValue
		min: spec minValue
		max: spec maxValue
		quantum: spec quantum.
	self register: widget id: spec name.
	
	spec interval ifNotNil: [:interval | widget interval: interval].
	spec color ifNotNil: [:color | widget color: color].
	self buildHelpFor: widget spec: spec.
	self setFrame: spec frame in: widget.
	self setLayoutHintsFor: widget spec: spec.
	parent ifNotNil: [self add: widget to: parent].
	^ widget