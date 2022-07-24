comparing
matchesSimulator: aSimulator

	"As we will fork ourselves from time to time, we must not re-customize any context after that because the identity of its simulator has changed, which would destroy the forked simulator state."
	^ self class = aSimulator class