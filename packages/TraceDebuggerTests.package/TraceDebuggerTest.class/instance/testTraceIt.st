tests - ui
testTraceIt

	| process context squeakDebugger squeakWindow debugger window |
	process := Process forBlock: [TDBTestLogic new plonk] runUntil: [:ctx | ctx selector = #plonk].
	context := process suspendedContext.
	squeakDebugger := self newSqueakDebuggerOn: process label: 'xyz'.
	squeakWindow := self newWindow: [squeakDebugger containingWindow].
	self should: squeakWindow isInWorld.
	self assert: (squeakWindow label includesSubstring: 'xyz').
	
	3 timesRepeat: [squeakDebugger stepInto].
	self should: squeakDebugger interruptedContext selector = #wiffy2.
	self should: squeakDebugger interruptedContext willReturn.
	
	"Arrange UI state"
	squeakDebugger down.
	self should: squeakDebugger selectedContext selector = #wiffy.
	[squeakDebugger contextVariablesInspector addCustomField] valueSupplyingAnswer: {'*'. 'ThisContext pc'}.
	self should: squeakDebugger contextVariablesInspector contents = '45'.
	(squeakWindow allMorphs detect: [:m | m knownName = #valuePane and: [m text isEmpty]]) in: [:textMorph |
		textMorph
			setText: 'self class';
			textEdited: textMorph text].
	
	window := squeakDebugger trace.
	debugger := window model.
	
	self deny: squeakWindow isInWorld.
	self assert: window isInWorld.
	self assert: debugger process isSuspended.
	"Was the UI copied?"
	self assert: #wiffy2 equals: debugger interruptedContext selector.
	self assert: debugger interruptedContext willReturn.
	self assert: #wiffy equals: debugger selectedContext selector.
	self deny: context isDead.
	self assert: '45' equals: debugger contextVariablesInspector contents.
	self assert: (squeakWindow allMorphs anySatisfy: [:m | m knownName = #valuePane and: [m text asString = 'self class']]).
	
	debugger proceed.
	Processor yield.
	self assert: context isDead.