primitives
contextForceRetracingFork: aContext arguments: arguments

	^ self contextForceRetracingFork: aContext for:
		(arguments
			ifNotEmpty: [arguments last]
			ifEmpty: [self makeTimeIndexVector])