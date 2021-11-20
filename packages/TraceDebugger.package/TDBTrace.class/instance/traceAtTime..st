accessing
traceAtTime: timeIndex

	^ self children associations
		findBinary: [:assoc | timeIndex - assoc key]
		do: [:assoc | assoc value traceAtTime: timeIndex]
		ifNone: [:left :right | left
			ifNil: [self]
			ifNotNil: [left traceAtTime: timeIndex]]