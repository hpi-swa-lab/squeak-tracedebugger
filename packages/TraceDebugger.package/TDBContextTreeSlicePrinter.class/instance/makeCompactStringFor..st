building
makeCompactStringFor: originalPath

	| index path prefixClassString previousClassString |
	path := originalPath.
	
	prefixClassString := self contextTreeSlice parent ifNotNil: [:parent |
		self flag: #discuss. "Should we compare with the last parent path segment instead?"
		((self truncatePath: parent path) copyWithout: #'...') first tdbClassString].
	
	path size = 1 ifTrue:
		[| context |
		context := path last.
		(self relativeToParent and: [context = #'...' or: [prefixClassString = context tdbClassString]]) ifFalse:
			["cosmetics: Use the 'normal' signature format where blocks come before the class"
			^ context tdbShortSignature]].
	
	index := 0.
	previousClassString := prefixClassString.
	^ (path
		tdbSequentiallyGroupBy: [:context |
			context = #'...'
				ifTrue: [previousClassString]
				ifFalse: [previousClassString := context tdbClassString]]
		gather: [:classString :contexts |
			((self relativeToParent and: [(index := index + 1) = 1 and: [prefixClassString = classString]])
				ifFalse: [{classString , '>>' , contexts first tdbBlockAndSelectorString}]
				ifTrue: [{contexts first tdbBlockAndSelectorString}])
					, (contexts allButFirst collect: #tdbBlockAndSelectorString)])
			joinSeparatedBy: String space