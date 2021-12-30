advancing
defangUnhandledErrorIfAny

	(context selector = #defaultAction
		and: [context pc = context startpc]
		and: [(context objectClass: context receiver) includesBehavior: UnhandledError])
			ifFalse: [^ self].
	
	"Skip the rest of this method. The contract is that the cursor will detect invocations of this method during stepping. See TDBCursor >> #stepUntil:."
	context
		push: context receiver;
		jump: context endPC - context pc.