private - stepping
stepToHome: aContext 
	"Step forward until the home of top context is aContext or an exception is signaled."

	| home homeTrace |
	self flag: #moveUpstream. "Support for dead home contexts and foreign home contexts (from another process):
	(Process forContext: [2 in: [:x | x / 3]] asContext) debug.
	(Process forContext: [2 in: [:x | x / 3]] asContext) debug halt."
	
	homeTrace := self livingHomeTraceFor: aContext.
	
	self step.
	home := homeTrace contextAtTime: self timeIndex.
	home isDead ifTrue:
		[^ self context].
	^ self stepUntil: [:context |
		home isDead
			or: [context tdbHasHome: home tdbproxyYourself]]