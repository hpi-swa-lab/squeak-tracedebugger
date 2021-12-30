running
runCursorFrom: homeContext step: stepBlock assertions: assertions

	^ self
		runCursorFrom: homeContext
		stepsAndAssertions: (assertions
			collect: [:assertion | assertion copyWithFirst: stepBlock])