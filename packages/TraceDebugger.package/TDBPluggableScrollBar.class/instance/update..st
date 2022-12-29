updating
update: aSymbol
	
	super update: aSymbol.
	
	aSymbol = self getQuantumSelector ifTrue: [self getQuantum. ^ self].