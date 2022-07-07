*TraceDebugger-UI-updating-override
update: what with: anObject

	what == self getLabelSelector ifTrue: [ "<-- TraceDebugger"
		(self morphForObject: anObject) ifNotNil: [:morph |
			morph
				refreshLabel;
				refreshIcon "rearrange icon"].
		self adjustSubmorphPositions.
		^ self "do not refresh remaining items in #update:"].
	
	super update: what with: anObject.
	
	what == #objectChanged ifTrue: [
		self updateFromChangedObject: anObject].