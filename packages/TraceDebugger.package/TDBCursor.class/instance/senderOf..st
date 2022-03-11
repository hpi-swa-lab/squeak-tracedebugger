extensions
senderOf: aContext
	"Answer the next visible context whose sender is aContext."

	| sender filter |
	(thisContext objectClass: aContext) isTdbProxy ifTrue:
		[^ self senderOf: aContext tdbproxyYourself].
	
	sender := (self object: aContext) sender.
	sender ifNil: [^ nil].
	filter := self contextFilter ifNil: [^ sender].
	^ sender findContextSuchThat: filter