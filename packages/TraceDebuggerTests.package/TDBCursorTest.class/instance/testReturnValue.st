tests - extensions
testReturnValue

	| context cursor home |
	cursor := self classUnderTest forContext:
		[TDBTestLogic new griffleMethodReturn] asContext.
	
	3 timesRepeat: [cursor doStepOver].
	context := cursor context.
	self should: context selector = self selector.
	home := (cursor childContextsFor: (cursor childContextsFor: context) second) first.
	self should: home selector = #griffle:with:.
	self should: home isDead.
	
	"Non-local return (home)"
	self assert: 3 equals: (cursor returnValueFor: (cursor childContextsFor: context) second ifPresent: #yourself).
	
	"Non-local return (through)"
	self assert: 3 equals: (cursor returnValueFor: home ifPresent: #yourself).
	
	"Block return"
	context := (cursor childContextsFor: home) first.
	self assert: 2 equals: (cursor returnValueFor: context ifPresent: #yourself).
	
	"Non-local return (block)"
	context := (cursor childContextsFor: home) second.
	self assert: 3 equals: (cursor returnValueFor: context ifPresent: #yourself).
	
	"Method return"
	context := (cursor childContextsFor: context) first.
	self assert: 3 equals: (cursor returnValueFor: context ifPresent: #yourself).