tests
testSideEffects

	| spawn |
	self assert: 3 equals: proxy plonk.
	self assert: 3 equals: (proxy plonk: 4; plonk).
	self assert: 4 equals: (proxy in: [:it | it plonk: 4; plonk]).
	
	spawn := proxy in: [:it | it plonk: 4; yourself].
	self assert: 4 equals: spawn plonk.
	self assert: 4 equals: (spawn plonk: 5; plonk).
	self assert: 5 equals: (spawn in: [:it | it plonk: 5; plonk]).
	self assert: 4 equals: spawn plonk.