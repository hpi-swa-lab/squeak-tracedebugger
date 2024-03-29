toolbuilder
buildWith: builder
	"Copied from ObjectExplorer and justed to install the receiver as an intermediator."

	| windowSpec treeSpec textSpec buttonSpec buttonOffset tool |
	windowSpec := builder pluggableWindowSpec new.
	windowSpec
		model: self;
		children: OrderedCollection new;
		label: #label;
		extent: self initialExtent.
	
	treeSpec := self buildTreeWith: builder.
	treeSpec frame: (0@0 corner: 1@0.71).
	windowSpec children add: treeSpec.

	buttonOffset := (Preferences standardButtonFont widthOfString: 'inspect' translated) * 3/2.

	textSpec := self buildValuePaneWith: builder.
	textSpec frame: (LayoutFrame fractions: (0@0.71 corner: 1@1) offsets: (0@0 corner: buttonOffset negated@0)).
	windowSpec children add: textSpec.

	buttonSpec := builder pluggableButtonSpec new
		model: self;
		label: 'inspect' translated;
		action: #inspectObject;
		help: 'Switch to an inspector tool' translated;
		frame: (LayoutFrame fractions: (1@0.71 corner: 1@1) offsets: (buttonOffset negated@0 corner: 0 @ 0)).
	windowSpec children add: buttonSpec.
	
	tool := builder build: windowSpec.
	self changed: #expandRootsRequested.
	^ tool