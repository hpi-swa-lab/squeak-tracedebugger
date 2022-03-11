*TraceDebugger-UI-construction
tdbAddUpdating: label action: aBlock

	^ self
		tdbAddUpdating: label
		target: self defaultTarget
		getState: nil
		setState: aBlock