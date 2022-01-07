private
stepToHome: aContext 
	"Resume self until the home of top context is aContext. Top context may be a block context. Catch any UnhandledErrors that are created while stepping, answering the relevant signalerContext if so.
	NOTE that this will cause weird effects if using through to step through UnhandledError code, but as the doctor ordered, don't do that; use over or into instead."

	| home homeTrace |
	home := aContext tdbLivingHome.
	homeTrace := self traceFor: home.
	
	self step.
	(homeTrace contextAtTime: self timeIndex) isDead
		ifFalse: [
			self stepUntil: [:context |
				context isDead
					or: [context tdbHasHome: home]]].
	
	self flag: #moveUpstream. "home detection for Process debugging"