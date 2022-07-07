instruction processing
context: aContext simulatedObject: anObject instVarAt: index put: value do: aBlock

	| objectVector |
	(self context: aContext isVector: anObject) ifFalse:
		[^ super context: aContext simulatedObject: anObject instVarAt: index put: value do: aBlock].
	
	objectVector := anObject atTimes: timeIndices.
	^ self fork: aContext for: objectVector collect: [:eachContext :eachObject |
		eachContext
			simulatedObject: eachObject
			instVarAt: index
			put: value]