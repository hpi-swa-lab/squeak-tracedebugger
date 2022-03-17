dynamic forwarding - superfluous messages on ProtoObject
withArgs: arguments executeMethod: compiledMethod

	(memory isNil or: [compiledMethod methodClass isTdbProxyClass]) ifTrue:
		[^ super withArgs: arguments executeMethod: compiledMethod].
	
	^ self xxxtdbproxyForward:
		[self withArgs: arguments executeMethod: compiledMethod]