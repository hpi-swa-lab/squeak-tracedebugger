tests
testError

	self
		should: [simulator evaluate: [1 / thisContext tdbRetracingTimeIndex]]
		raise: TDBIsolatedError
		withExceptionDo: [:error |
			self assert: ((error exception atTime: 0) isKindOf: ZeroDivide).
			self assert: ((error exception atTimes: (1 to: 4)) values allSatisfy: #isNil)].
	
	self
		assertQuery:
			[[1 / thisContext tdbRetracingTimeIndex]
				on: ZeroDivide do: [:ex | Float infinity]]
		values: {Float infinity. 1. 1 / 2. 1 / 3. 1 / 4}.