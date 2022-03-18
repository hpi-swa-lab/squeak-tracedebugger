tests
testHelpTopic

	self shouldntRaise: [self classUnderTest introduction].
	self flag: #(TestCoverage workaround). "#perform: + #doesNotUnderstand: do not play well together with with TestCoverage. See ClassBasedHelpTopic>>#updateSubtopics."
	
	self assert: self classUnderTest asHelpTopic subtopics notEmpty.