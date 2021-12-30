accessing
childContextsFor: aContext

	self flag: #optimize. "This is sent during drawing, cache!"
	
	self flag: #coroutines. "There might be contexts that refer aContext as their sender but are not amongst its traces' children."
	"^ self cursor allCaleesOf: aContext"
	
	^ self cursor childContextsFor: aContext