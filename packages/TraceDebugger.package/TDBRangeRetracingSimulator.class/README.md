I am a retracing simulator that emulates the historic state at a time range (timeIndices). This is used to serve requests to TDBRangeProxy instances or transformations of TDBMemorySlice instances. For any expression I evaluate, I will answer a TDBMemorySlice with the simulated results of aBlock for the different times.

Naively, these requests could be served by evaluating the expression for each point in time separately (see TDBMemory>>#pointsCollect:). However, this would decrease performance severely, as memories are often large in size but still typically contain few different sparse values. Instead, I simulate the expression once and decorate the execution with vector semantics (vectorization/SIMD/MIMD):

	Each read access to a state that had multiple values within the timeIndices wll be redirected to a vector that represents all different values.
	Each read access to a vector will transform the vector to a new one that represents all different result values (and that might possibly have a different layout) (aka SIMD - single instruction, multiple data).
	Each event that leads not only to a diverged dataflow but also to a diverged control flow will cause the execution to be forked (copy of the context stack and its state) (aka MIMD - multiple instructions, multiple data). Control flow divergence happens when a jump instruction depends on a vector condition, the lookup class of a message send or an instvar access depends on a vector receiver, or a primitive fails for a subset of vector parameters only. All forked contexts will continue to execute in parallel with a subset of the original timeIndices.

Vectors are implemented as TDBMemorySlice instances.
Note that the terms SIMD/MIMD are a metaphor only, and no true parallel computing on the hardware level is happening at the moment.

Instance Variables:

timeIndices <Interval>
	- The time range for emulating historic states.

allVectors <WeakSet>
	- Contains all vectors that were created during execution in any fork. These are needed to split up the resulting slice after the evaluation to avoid fray outs in clients that access the single values of the slice when they hit any unresolved vectors. See #finalSlice:withTimeIndicesWithin:.

contextCopies <Dictionary>
	- Maps all Context instances to their copies that have been copied during the creation of a fork. This is required to redirect accesses to contexts that the code has referenced elsewhere to their copies. When creating a fork, only context references in the copied sender stack are replaced.

primitiveNumArgs <Array>
	- Cache. Number of arguments for each known primitive.