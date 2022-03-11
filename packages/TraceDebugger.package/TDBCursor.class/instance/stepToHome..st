private - stepping
stepToHome: aContext 
	"Step forward until the home of top context is aContext or an exception is signaled."

	| home homeTrace |
	self flag: #moveUpstream. "Support for dead home contexts (from another process):
	(Process forContext: [2 in: [:x | x / 3]] asContext) debug"
	
	home := aContext tdbLivingHome.
	homeTrace := self traceFor: home.
	
	self step ifNil: [^ nil].
	(homeTrace contextAtTime: self timeIndex) isDead
		ifTrue: [^ self context].
	^ self stepUntil: [:context |
		context isDead
			or: [context tdbHasHome: home]]