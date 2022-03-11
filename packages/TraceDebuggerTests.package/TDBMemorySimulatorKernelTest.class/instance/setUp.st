running
setUp

	super setUp.
	
	memory := self memoryClass new.
	simulator := self simulatorClass forMemory: memory atTime: 0.
	
	(testSelector isSymbol not and: [testSelector key = self className])
		ifTrue:
			[| testCase |
			self flag: #workaround. "Warm up simulators before simulating. Simulator warm-up instantiates new behaviors which is currently not yet support in tracers."
			testCase := self class selector: testSelector value.
			[testCase runCaseWithoutTimeout]
				on: TestResult allErrors do: [self deny: testCase shouldPass]]