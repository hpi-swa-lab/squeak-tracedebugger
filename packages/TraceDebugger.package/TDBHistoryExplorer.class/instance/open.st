toolbuilder
open

	| widget |
	widget := ToolBuilder open: self.
	
	self changed: #style.
	self flag: #workaround. "MorphicToolBuilder>>#buildPluggableText: registers the code pane with its name only after sending #okToStyle. Should this be reverted?"
	
	^ widget