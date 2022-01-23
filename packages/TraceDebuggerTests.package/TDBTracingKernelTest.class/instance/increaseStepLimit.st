private
increaseStepLimit
	"Update the step limit with increasing intervals to reach a better scaling for large tests."

	limit stepLimit:
		(limit stepLimit * (1 +
			(limitFactor := limitFactor * 1.05))) ceiling.