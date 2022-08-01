private
filterResult: aTDBMaybeResult

	(self shouldHideErrors and: [aTDBMaybeResult hasError]) ifTrue: [^ false].
	^ self valueFilter
		ifNil: [true]
		ifNotNil: [:filter | filter value: aTDBMaybeResult assureResult]