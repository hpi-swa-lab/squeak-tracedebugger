*TraceDebugger-UI-collections - enumerating
tdbDetect: aBlock
	
	^ self
		tdbDetect: aBlock
		ifFound: [:element | element]
		ifNone: [(NotFound object: aBlock) signal]