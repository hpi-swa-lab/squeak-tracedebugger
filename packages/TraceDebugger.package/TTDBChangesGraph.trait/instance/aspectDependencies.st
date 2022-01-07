updating
aspectDependencies
	"By extending this dictionary, subclasses can manage their dependencies in a declarative way. Instead of spreading very many repeating `#changed:`s all over your code, you can establish a dependency structure between different aspects via this dictionary. This is a reversed adjacency list for the dependency graph of the receiver.
	For instance, #windowTitle depends on #labelString, and subsequently, #labelString might depend on #inbox and #conversation. Once you now send `changed: #inbox` anywhere in your code, all the depending properties will be resolved and automatically changed as well.
	Some special semantics of the aspects defined here is that if there is an instance variable with the name of this aspect, it will be treated as a cache, and changing it via another dependency will reset this cache and set the instance variable to nil. See #changedDependent:.
	This concept is indirectly inspired by Active Expressions which pursue the same goal as aspect dependencies: Instead of spreading the knowledge about the interconnections and dependencies between your properties all over your code, try to define a single source of truth for this information. Since there is no metaprogramming in this approach, you still have two sources of truth, but that's still way better than N ways of truth."

	^ Dictionary new
		at: #windowTitle put: #(#labelString);
		yourself