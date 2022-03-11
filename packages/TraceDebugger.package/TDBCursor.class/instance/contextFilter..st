accessing
contextFilter: filter
	"Specify a filter for the displayed contexts of the receiver. The contract for context filters is as follows:
	- The receiver will send many (!) #value: messages to the filter for passing it a Context instance (which might be wrapped into a transparent TDBProxy).
	- The filter answers a boolean indicating whether the context will be shown by the receiver.
	- The filter will receive a large number of messages and has to process every request efficiently in order not to slow down the cursor navigation.
	- While the filter is passed Context instances, it must not rely on the dynamic state of the context (such as pc), but only on its immutable static (such as method or arguments).
	- If the filter is mutable, it can trigger the receiver to update itself through the observer system by sending #changed to itself.
	A reference implementation of a context filter is given in TDBContextFilter. However, clients can also pass an arbitrary unary block instead."

	contextFilter ifNotNil:
		[contextFilter removeDependent: self].
	
	contextFilter := filter.
	
	contextFilter ifNotNil:
		[contextFilter addDependent: self].