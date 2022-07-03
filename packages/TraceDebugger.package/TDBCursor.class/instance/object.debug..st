accessing
object: anObject debug: aBlock
	"Bring up a debugger retracing aBlock for anObject with all historic states. Note that aBlock will be evaluated isolatedly and any side effects will be hidden from the rest of the image. Experimental."

	^ self memory object: anObject tdbproxyYourself debug: aBlock