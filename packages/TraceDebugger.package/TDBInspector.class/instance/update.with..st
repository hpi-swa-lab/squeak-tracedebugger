updating
update: aspect with: anObject

	"To monkey-patch the behavior of the original inspector, we have installed ourself as the model for the original inspector's views. Here, we need to forward all model updates from the original inspector to the views."
	self changed: aspect with: anObject.
	
	^ super update: aspect with: anObject