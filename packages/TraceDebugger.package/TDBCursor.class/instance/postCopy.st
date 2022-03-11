copying
postCopy

	super postCopy.
	
	self contextFilter: contextFilter copy.
	"Caches"
	outerTracingContext := nil.
	currentTrace := nil.