building
makeCompactStringFor: originalPath

	| index path prefixClassString |
	path := originalPath.
	self contextTreeSlice isRoot ifTrue:
		[path := path last: 1].
	
	prefixClassString := self contextTreeSlice parent ifNotNil: [:parent |
		parent path first tdbClassString].
	
	path size = 1 ifTrue:
		[| context |
		context := path last.
		(self relativeToParent and: [prefixClassString = context tdbClassString]) ifFalse:
			["cosmetics: Use the 'normal' signature format where blocks come before the class"
			^ context tdbShortSignature]].
	
	index := 0.
	^ (path
		tdbSequentiallyGroupBy: [:context | context tdbClassString]
		gather: [:classString :contexts |
			((self relativeToParent and: [(index := index + 1) = 1 and: [prefixClassString = classString]])
				ifFalse: [{classString , '>>' , contexts first tdbBlockAndSelectorString}]
				ifTrue: [{contexts first tdbBlockAndSelectorString}])
					, (contexts allButFirst collect: #tdbBlockAndSelectorString)])
			joinSeparatedBy: String space