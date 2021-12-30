private
allCaleesOf: aContext

	^ (self rootTrace withAllDescendants
		collect: [:trace | | context sender |
			context := trace contextAtTime:
				(self timeIndex min: trace maxTimeIndex).
			sender := context sender ifNil:
				["living snapshot of context not available?"
				trace parent ifNotNil: [:parentTrace |
					parentTrace contextAtTime: self timeIndex]].
			context -> sender]
		thenSelect: [:contextAndSender |
			contextAndSender value tdbIdentical: aContext])
		collect: [:contextAndSender | contextAndSender key]