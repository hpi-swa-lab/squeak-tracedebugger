accessing
screenshotSelectors

	^ self selectors select: [:each |
		(each beginsWith: 'create') and: [each isUnary]]