running
newDebuggerOn: aProcess

	^ (self classUnderTest newOn: aProcess)
		addDependent: self;
		yourself