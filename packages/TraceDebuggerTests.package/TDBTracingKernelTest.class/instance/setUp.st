running
setUp

	super setUp.
	
	limit := LimitSimulator new
		stepLimit: 10;
		yourself.
	limitFactor := 1.
	simulator nextSimulator: limit.
	
	snapshots := Dictionary new.