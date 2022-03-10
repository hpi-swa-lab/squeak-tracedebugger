accessing
borderContexts
	"A collection of contexts that mark the borders of the context tree displayed in the receiver. If this collection is not empty, contexts that are no eventual callees of any border context will be hidden from the context tree or the context stack, resp."

	^ borderContexts ifNil: [{}]