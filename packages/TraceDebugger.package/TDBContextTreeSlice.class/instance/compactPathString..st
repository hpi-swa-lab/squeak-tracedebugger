printing
compactPathString: relative
	"Answer a compact string representation of the path. For subsequent contexts with the same method class/receiver class, do not repeat the class part. If relative is true, do not repeat the last class part of the parent path."

	| displayPath index |
	displayPath := self displayPathIfShort: [:short | ^ short].
	
	displayPath size = 1 ifTrue:
		[| context |
		context := displayPath last.
		(relative and: [self parent notNil and: [self parent path first tdbClassString = context tdbClassString]]) ifFalse:
			["cosmetics: Use the 'normal' signature format where blocks come before the class"
			^ context tdbShortSignature]].
	
	index := 0.
	^ (displayPath
		tdbSequentiallyGroupBy: [:context | context tdbClassString]
		gather: [:classString :contexts |
			((relative and: [(index := index + 1) = 1 and: [self parent notNil] and: [self parent path first tdbClassString = classString]])
				ifFalse: [{classString , '>>' , contexts first tdbBlockAndSelectorString}]
				ifTrue: [{contexts first tdbBlockAndSelectorString}])
					, (contexts allButFirst collect: #tdbBlockAndSelectorString)])
			joinSeparatedBy: String space