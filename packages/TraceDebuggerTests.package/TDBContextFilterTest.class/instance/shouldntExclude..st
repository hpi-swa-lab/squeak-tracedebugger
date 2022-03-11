asserting
shouldntExclude: aCompiledMethod

	^ self deny: (self doesExclude: aCompiledMethod)