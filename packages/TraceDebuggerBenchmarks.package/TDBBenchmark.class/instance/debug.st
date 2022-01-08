running
debug

	(Process
		forBlock: [self runWithoutTimeout]
		runUntil: [:context | context isClosureContext "navigate the process directly to the point where it is about to send #setUp"
			and: [context selector = #runWithoutTimeout]])
				debug.