running
setUp

	super setUp.
	
	memory := self memoryClass new.
	simulator := self newSimulator.
	
	(testSelector isSymbol not and: [testSelector key = self className])
		ifTrue:
			[| testCase |
			self flag: #workaround. "Warm up simulators before simulating. Simulator warm-up instantiates new behaviors which is currently not yet support in tracers. See also: https://github.com/LinqLover/SimulationStudio/pull/38"
			testCase := self class selector: testSelector value.
			[testCase runCaseWithoutTimeout]
				on: TestResult allErrors do: [self deny: testCase shouldPass]]