I store historic states of objects that are recorded during tracing. I am designed for space efficiency - instead of preserving full copies for every object, I hold individual sparse arrays for the changes to each known slot of each known object. A slot can be an instance variable or an object field.

Instance Variables:

maxTimeIndex <Integer>
	- The highest time index for that any state has been recorded so far.
	The memory is designed as append-only structures. Clients must not modify older states retroactively.

values <Dictionary>
	- Holds the data. The full object layout is described below:
	values: SimPluggableWeakKeyDictionary (object -> slots)
		object: any object in the image
		slots: Dictionary (slot key -> runs)
			slot key: SmallInteger
				>0: field index (for Object>>#at: et al.)
				<0: negated instvar index (for Object>>#instVarAt: et al.)
			runs: OrderedCollection (run)
				run: Association (timeIndex -> value)
					timeIndex: The point in time at which the value was invalidated, i.e., this is the exclusive upper bound of the validity range for the value. The inclusive lower bound for the validity range is given by the previous run, if any.
					value: The value that was stored in the object at the slot prior to the timeIndex.

For instantiation of my object layout see also #object:atTime:atSlot:ifAbsent:/#object:priorTo:atSlot:put: or explore a sample memory:

	['Carpe {1}' format: #Squeak] traceAndDebug model exploreMemory.
	"self allInstances last explore."