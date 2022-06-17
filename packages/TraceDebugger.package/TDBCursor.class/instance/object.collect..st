accessing
object: anObject collect: aBlock
	"Evaluate aBlock for anObject with all historic states. Answer a TDBMemorySlice of the collected results. Note aBlock will be evaluated isolatedly and any side effects will be hidden from the rest of the image."

	^ self memory object: anObject tdbproxyYourself collect: aBlock