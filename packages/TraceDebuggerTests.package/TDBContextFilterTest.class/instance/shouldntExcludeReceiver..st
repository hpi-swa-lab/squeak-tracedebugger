asserting
shouldntExcludeReceiver: aCompiledMethod

	^ self deny: (self doesExcludeReceiver: aCompiledMethod)