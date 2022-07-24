accessing
object: anObject atTime: otherTimeIndex
	"Answer a transparent view (TDBProxy) on anObject at the specified time. Note that further messages sent to the proxy will be isolated from the rest image"

	^ self memory object: anObject tdbproxyYourself atTime: otherTimeIndex