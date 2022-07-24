*TraceDebugger-UI-comparing
tdbContentEquals: anotherObject

	self = anotherObject ifFalse: [^ false].
	^ self runs = anotherObject runs