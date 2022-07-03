controlling
ifError: errorBlock ifResult: resultBlock

	^ error
		ifNotNil: errorBlock
		ifNil: [resultBlock cull: result]