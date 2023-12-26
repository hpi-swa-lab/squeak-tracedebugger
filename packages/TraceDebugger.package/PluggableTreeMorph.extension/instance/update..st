*TraceDebugger-UI-updating-override
update: what
	what ifNil:[^self].
	what == getRootsSelector ifTrue:[
		self wrapRoots: (model perform: getRootsSelector).
		^ self].
	
	what == getSelectedPathSelector ifTrue:[
		self updateSelectedPath.
		^ self].
	
	what == getLabelSelector ifTrue: [
		self updateAllLabels.
		^ self].
	
	what == getIconSelector ifTrue: [ "<-- TraceDebugger"
		self updateAllIcons.
		^ self].
		
	what == #expandRootsRequested ifTrue: [
		self expandRoots.
		^ self].
	
	super update: what.
