support
makeTreeSlice: spec
 
	| childSpecs path slice |
	path := spec first.
	childSpecs := spec allButFirst.
	
	slice := self classUnderTest new.
	slice prependPath: path.
	childSpecs do: [:childSpec |
		slice addChild: (self makeTreeSlice: childSpec)].
	
	^ slice