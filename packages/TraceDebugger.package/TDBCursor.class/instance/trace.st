accessing
trace

	self flag: #optimize. "Cache this during stepping -> O(1) instead O(n log n)!"
	
	^ self rootTrace traceAtTime: self timeIndex