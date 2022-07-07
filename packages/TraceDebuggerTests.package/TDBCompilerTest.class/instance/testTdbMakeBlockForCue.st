tests
testTdbMakeBlockForCue

	| makeCue block |
	makeCue := [(CompilationCue class: self class)
		source: '{testSelector. ThisContext}';
		yourself].
	
	block := self classUnderTest new
		tdbMakeBlockForCue: makeCue value
		noPattern: true
		ifFail: [self fail].
	self assert: {testSelector. nil} equals: (block value: self).
	
	self
		should:
			[self classUnderTest new
				tdbMakeBlockForCue: makeCue value
				noPattern: false
				ifFail: [self fail]]
		raise: SyntaxErrorNotification.
	
	block := self classUnderTest new
		tdbMakeBlockForCue: (makeCue value context: thisContext)
		noPattern: true
		ifFail: [self fail].
	self assert: {testSelector. thisContext} equals: (block value: self).