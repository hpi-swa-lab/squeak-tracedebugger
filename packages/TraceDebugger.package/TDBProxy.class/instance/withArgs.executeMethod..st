dynamic forwarding - superfluous messages on ProtoObject
withArgs: argArray executeMethod: compiledMethod

	^ self xxxtdbproxyForward:
		[self withArgs: argArray executeMethod: compiledMethod]