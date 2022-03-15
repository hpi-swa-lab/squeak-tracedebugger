instance creation
forContext: aContext parent: aTrace timeIndex: anInteger

	#optimized. "Avoid over TDBChildTrace"
	
	^ TDBChildTrace new context: aContext parent: aTrace timeIndex: anInteger