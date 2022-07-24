signaling
signalForException: anException

	^ self new
		exception: anException;
		signal