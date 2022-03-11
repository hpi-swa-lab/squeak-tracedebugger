*TraceDebugger-UI-construction
tdbMakeSubmenuForTarget: anObject

	^ self class new
		defaultTarget: anObject;
		yourself