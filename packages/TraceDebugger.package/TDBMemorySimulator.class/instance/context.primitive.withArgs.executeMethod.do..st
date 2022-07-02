primitives
context: aContext primitive: receiver withArgs: arguments executeMethod: aCompiledMethod do: aBlock
	<simPrimitive: 188>
	<tdbRequiredIf: #wantsToControlReads>
	"Prevent Context from executing quick methods directly without dispatching via the simulator"

	((aContext objectClass: aCompiledMethod) isCompiledMethodClass
		and: [aCompiledMethod isQuick])
			ifFalse: [^ aBlock value].
	^ aContext doPrimitive: aCompiledMethod primitive method: aCompiledMethod receiver: receiver args: arguments