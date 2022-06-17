private
vectorFromSpec: spec

	| intervals values |
	intervals := Array new writeStream.
	values := Array new writeStream.
	spec readStream in: [:read |
		| start stop value |
		start := read next.
		[read atEnd] whileFalse:
			[value := read next.
			stop := read next.
			intervals nextPut: (start to: stop).
			values nextPut: value.
			start := stop + 1]].
	^ self memorySliceClass
		memory: memory
		intervals: intervals contents
		rawValues: values contents