forwarding
perform: selector orSendTo: otherTarget
	"First of all, give the receiver a try to reimplement the selector. Otherwise, continue with the original inspector."

	^ (self respondsTo: selector)
		ifTrue: [self perform: selector]
		ifFalse: [self inspector perform: selector orSendTo: otherTarget]