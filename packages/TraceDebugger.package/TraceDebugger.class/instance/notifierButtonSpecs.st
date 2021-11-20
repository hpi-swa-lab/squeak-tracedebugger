toolbuilder
notifierButtonSpecs

	| specs |
	specs :=
		#(('Proceed'	proceed	'cose this window and continue this process'	canProceed)
		('Abandon'		abandon	'terminate this process and close this window')
		('Debug'		debug 		'bring up a trace debugger for this process'))
			asOrderedCollection.
	
	(self interruptedContext selector == #doesNotUnderstand:)
		ifTrue: [specs add:
			#('Create'	createMethod					'create the missing method')].
	(#(notYetImplemented shouldBeImplemented requirement) includes: self interruptedContext selector)
		ifTrue: [specs add:
			#('Create'	createImplementingMethod	'implement the marked method')].
	(self interruptedContext selector == #subclassResponsibility
		ifTrue: [specs add:
			#('Create'	createOverridingMethod		'create the missing overriding method')]).
	
	^ specs