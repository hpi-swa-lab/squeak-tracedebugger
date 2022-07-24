accessing
object: anObject
	"Answer a transparent view (TDBProxy) on anObject at the current time. Note that further messages sent to the proxy will be isolated from the rest image"

	^ self object: anObject atTime: self timeIndex