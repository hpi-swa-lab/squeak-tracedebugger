running
runCursorFrom: homeContext stepsAndAssertions: stepsAndAssertions

	^ self
		runCursorFrom: homeContext
		filter: nil
		stepsAndAssertions: stepsAndAssertions