I represent a time-dependent value that was returned or derived from a TDBMemory. My instances are created when requesting time-dependent values from a memory (#object:atTimes:...) and can be transformed (#collect:) into further instances. Each instance may also carry along some side effects that were captured during transforming.

To meet the typical workload of memories, I am implemented as a sparse data structure just like TDBMemory. By TDBRangeRetracingSimulator, I am also used for vectorized execution.

memory <TDBMemory>
	- The original memory that the slice's values refer to.

intervals <Array of Interval>
	- The index of the slice. Intervals must be adjacent. There is clearly some room for improvement/optimization here: Future versions of this class could play with "CompoundIntervals" or other structures here to improve space efficiency.

rawValues <Array of Object>
	- The raw values of the slice. Note that the raw values on their own are often meaningless since they do not capture any historic states. Contrary to the 'raw values' protocols, the public accessing/enumerating protocols always use TDBRetracingSimulators to make historic states viewable.

sideEffects <TDBMemory | nil>
	- Side effects that were captured during retracing while transforming another slice into the receiver, and that will be used during retracing for derived transformations.