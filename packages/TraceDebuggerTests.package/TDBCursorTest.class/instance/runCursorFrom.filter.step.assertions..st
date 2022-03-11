running
runCursorFrom: homeContext filter: filter step: stepBlock assertions: assertions

	^ self
		runCursorFrom: homeContext
		filter: filter
		stepsAndAssertions: (assertions
			collect: [:assertion | assertion copyWithFirst: stepBlock])