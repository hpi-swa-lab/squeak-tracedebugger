*TraceDebugger-UI-collections - enumerating
tdbDetect: aBlock ifFound: foundBlock ifNone: exceptionBlock 
	
	self do: [:each | (aBlock value: each) ifTrue: [^ foundBlock value: each]].
	^ exceptionBlock value