construction
addChild: childSlice

	children add: childSlice.
	childSlice parent: self.
	^ childSlice