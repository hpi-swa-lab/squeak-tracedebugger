running
test
	<timeout: 3600 "seconds = 1 hour">

	self runSuite:
		(self class packageInfo classes select: [:class |
			(class includesBehavior: Benchmark) and: [class isAbstract not]]).