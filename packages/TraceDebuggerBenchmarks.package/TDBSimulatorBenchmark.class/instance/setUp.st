running
setUp

	super setUp.
	
	memory := self memoryClass new.
	simulator := self simulatorClass forMemory: memory atTime: 0.