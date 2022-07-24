primitives
context: aContext primitiveExecuteMethod: receiver method: aCompiledMethod withArgs: arguments do: aBlock
	<simRawPrimitive: 189>
	<tdbRequiredIf: #wantsToControlReads>
	"Prevent Context from executing quick methods directly without dispatching via the simulator"

	| method |
	arguments size = 1 ifFalse: [^ aBlock value].
	((aContext objectClass: (method := arguments last)) isCompiledMethodClass
		and: [method isQuick])
			ifFalse: [^ aBlock value].
	^ aContext doPrimitive: method primitive method: method receiver: receiver args: arguments allButLast