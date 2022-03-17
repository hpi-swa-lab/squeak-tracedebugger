accessing
timeIndex
	"The current time position at which the program is viewed. The time index is adjusted by the setter or by messages in the stepping protocol. Based on the time index, the results of #context, #object:, et al. will deviate."

	^ timeIndex