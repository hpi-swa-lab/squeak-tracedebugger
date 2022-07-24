*TraceDebugger-Core-printing
tdbPrintClassOn: aStream

	| methodClass receiverClass |
	receiverClass := self objectClass: self receiver.
	methodClass := method methodClass.
	
	aStream nextPutAll: receiverClass name.
	methodClass ~~ receiverClass ifTrue:
		[aStream
			nextPut: $(;
			nextPutAll: methodClass name;
			nextPut: $)].