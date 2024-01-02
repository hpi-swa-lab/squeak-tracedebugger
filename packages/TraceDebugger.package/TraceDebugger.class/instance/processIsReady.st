testing
processIsReady

	^ process notNil
		and: [process isSuspended "do not debug the active process"]
		and: [process isTerminated not]