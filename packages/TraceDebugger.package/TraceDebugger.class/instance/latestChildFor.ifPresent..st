private
latestChildFor: aContext ifPresent: aBlock

	| latestChildren |
	latestChildren := (self childContextsFor: aContext)
		select: [:child | (self cursor maxTimeIndexFor: child) < self cursor timeIndex].
	latestChildren ifEmpty: [^ nil].
	^ aBlock value: latestChildren last