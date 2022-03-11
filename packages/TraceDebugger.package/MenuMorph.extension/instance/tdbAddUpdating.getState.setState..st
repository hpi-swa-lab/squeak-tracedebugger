*TraceDebugger-UI-construction
tdbAddUpdating: label getState: getter setState: setter

	^ self
		tdbAddUpdating: label
		target: self defaultTarget
		getState: getter
		setState: setter