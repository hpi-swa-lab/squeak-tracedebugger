opening
traceAndOpenOn: aProcess

	^ (self newOn: aProcess)
		stepOver;
		open