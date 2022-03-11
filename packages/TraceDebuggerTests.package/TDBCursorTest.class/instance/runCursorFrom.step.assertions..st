running
runCursorFrom: homeContext step: stepBlock assertions: assertions

	^ self
		runCursorFrom: homeContext
		filter: nil
		step: stepBlock
		assertions: assertions