accessing
traceAtTime: timeIndex ifAbsent: absentBlock

	^ self children associations
		findBinary: [:assoc | timeIndex - assoc key]
		do: [:assoc | assoc value traceAtTime: timeIndex]
		ifNone: [:left :right | (left
			ifNotNil: [left value traceAtTime: timeIndex ifAbsent: []])
				ifNil: [timeIndex <= timeInterval stop
					ifTrue: [self]
					ifFalse: [absentBlock value]]]