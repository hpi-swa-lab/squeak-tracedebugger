accessing
expectedFailureGroups

	| groups |
	groups := super expectedFailureGroups.
	
	groups at: #ExceptionTests put: ((groups at: #ExceptionTests ifAbsent: [{}]) ,
		{#testTimeoutWithZeroDuration flag: #workaround. "Set printing is currently too expensive for snapshots, waiting for Collections-ct.1060 (inbox)."}).
	
	^ groups