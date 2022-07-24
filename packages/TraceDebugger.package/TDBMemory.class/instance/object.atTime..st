accessing - views
object: anObject atTime: timeIndex
	"Answer a transparent view (TDBProxy) on anObject at the specified time. Note that further messages sent to the proxy will be isolated from the rest image."

	^ self
		object: anObject
		atTime: timeIndex
		withSideEffects: nil