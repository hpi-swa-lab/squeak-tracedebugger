private
object: anObject priorTo: timeIndex atSlot: slot put: value
	"Store the value for anObject at the slot prior to the specified time index."

	| priorTimeIndex |
	timeIndex >= maxTimeIndex
		ifFalse: [^ self error: 'Cannot edit historic values in memory'].
	priorTimeIndex := timeIndex - 1.
	maxTimeIndex := maxTimeIndex max: timeIndex.
	
	(values at: anObject ifAbsentPut: [Dictionary new])
		at: slot
		ifPresent: [:runs | | lastRun |
			self assert: ((lastRun := runs last) at: 1) <= priorTimeIndex.
			(lastRun at: 1) = priorTimeIndex
				ifTrue:
					["override existing run"
					^ lastRun at: 2 put: value].
			(Mirror object: (lastRun at: 2) eqeq: value)
				ifTrue:
					["extend existing run"
					lastRun at: 1 put: priorTimeIndex.
					^ value].
			runs add: {priorTimeIndex. value}]
		ifAbsentPut: [
			OrderedCollection with: {priorTimeIndex. value}].
	^ value