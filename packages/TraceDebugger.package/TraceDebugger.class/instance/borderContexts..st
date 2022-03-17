accessing
borderContexts: aCollection 
	"A collection of contexts that mark the borders of the context tree displayed in the receiver. If this collection is not empty, contexts that are no eventual callees of any border context will be hidden from the context tree or the context stack, resp."

	borderContexts := aCollection ifNotNil:
		[aCollection collect: [:context | context tdbproxyYourself]].
	
	self changed: #borderContexts.