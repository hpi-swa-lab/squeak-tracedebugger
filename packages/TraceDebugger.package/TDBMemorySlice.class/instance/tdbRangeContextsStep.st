range retracing
tdbRangeContextsStep

	^ self rawGather: [:eachContext |
		eachContext ifNotNil: [eachContext tdbRangeContextsStep]]