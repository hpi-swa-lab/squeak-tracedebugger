private
basicPerformTest: aTestCase on: exceptionHandler do: exceptionBlock

	^ simulator
		evaluate: [aTestCase runCaseWithoutTimeout]
		on: exceptionHandler
		do: exceptionBlock