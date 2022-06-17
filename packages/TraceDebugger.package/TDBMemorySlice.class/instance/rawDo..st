enumerating - raw values
rawDo: aBlock
	"Evaluate aBlock with each of the receiver's raw values.
	
	Raw protocol. Raw values do not reflect all changes to the object at a certain point in time. Use the common protocol (#collect/'values do:') to work with the virtual object states instead."

	rawValues do: aBlock.