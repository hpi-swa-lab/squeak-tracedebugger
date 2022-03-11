support
doesExclude: aCompiledMethod

	^ self doesExcludeContext:
		(Context
			sender: nil
			receiver: nil
			method: aCompiledMethod
			arguments: #())