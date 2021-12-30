dynamic forwarding - superfluous messages on ProtoObject
withArgs: arguments executeMethod: compiledMethod
	<ignoreForCoverage>

	memory ifNil: [^ super withArgs: arguments executeMethod: compiledMethod].
	^ self xxxtdbproxyForward:
		[self withArgs: arguments executeMethod: compiledMethod]