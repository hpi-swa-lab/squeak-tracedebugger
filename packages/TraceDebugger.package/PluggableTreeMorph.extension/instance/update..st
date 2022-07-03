*TraceDebugger-UI-updating-override
update: what
	what ifNil:[^self].
	what == getRootsSelector ifTrue:[
		self wrapRoots: (model perform: getRootsSelector).
		^ self].
	
	what == getSelectedPathSelector ifTrue:[
		self selectPath: self getSelectedPath.
		^ self].
		
	what == #expandRootsRequested ifTrue: [
		self expandRoots.
		^ self].
	
	what == self getLabelSelector ifTrue: [ "<-- TraceDebugger"
		self items do: [:morph |
			morph
				refreshLabel;
				refreshIcon "rearrange icon"].
		self adjustSubmorphPositions].
	
	super update: what.
