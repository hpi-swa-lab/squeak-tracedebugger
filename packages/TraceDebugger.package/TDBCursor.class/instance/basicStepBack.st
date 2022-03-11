private - stepping
basicStepBack
	"Decrement the time index if possible."

	timeIndex > 0 ifFalse: [^ nil].
	timeIndex := timeIndex - 1.