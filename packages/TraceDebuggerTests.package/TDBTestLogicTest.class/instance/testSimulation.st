tests
testSimulation

	| suite |
	suite := self class suite.
	suite tests removeAllSuchThat: [:test | test selector = self selector].
	self assert:
		(self runSimulated: [suite run]) hasPassed.