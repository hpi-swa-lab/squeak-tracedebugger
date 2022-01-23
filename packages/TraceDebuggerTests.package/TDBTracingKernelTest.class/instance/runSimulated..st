private
runSimulated: aBlock
	"Run aBlock and periodically create a snapshot of the current context. After aBlock has finished, check all snapshots in the recorded memory."

	| result |
	result := [simulator evaluate: aBlock]
		on: SimulatorLimitExceeded
		do: [:ex |
			self storeSnapshot: ex context atTime: limit stepCount - 1.
			self increaseStepLimit.
			ex resume].
	
	self checkSnapshots.
	
	^ result