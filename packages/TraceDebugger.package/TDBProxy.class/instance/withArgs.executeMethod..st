dynamic forwarding - superfluous messages on ProtoObject
withArgs: arguments executeMethod: compiledMethod

	(memory isNil or: [compiledMethod methodClass includesBehavior: TDBProxy]) ifTrue: [
		^ super withArgs: arguments executeMethod: compiledMethod].
	
	^ self xxxtdbproxyForward:
		[self withArgs: arguments executeMethod: compiledMethod]