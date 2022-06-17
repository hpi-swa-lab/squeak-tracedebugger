I am the base class for all simulators for the TraceDebugger that add certain customizations to state controlling. I provide generalized hooks to subclasses for controlling read/write accesses to state and a pragma interface for implementing and enabling single primitives on demand. Via #shouldIsolate:, clients/subclasses can enable isolation so that all side effects made by the code under simulation will remain local to the simulator.

Instance Variables

sideEffects <TDBMemory>
	- If isolation is enabled, holds all side effects. See #shouldIsolate:.

ownObjects <SimPluggableWeakKeyDictionary | nil>
	- If isolation is enabled, holds all objects that have been created and are owned by the code under simulation. Side effects to own objects are applied directly and not stored in sideEffects. This is an important optimization and also makes sure that certain metaprogramming (e.g., Context>>#return:) is not blocked.

lastPrimitive <SmallInteger | nil>
	- The primitive index that is currently being handled.

primitives <Array>
	- Cache, see #initializePrimitives.

pragmaPrimitives <Dictionary>
	- Cache, see #initializePragmaPrimitives.