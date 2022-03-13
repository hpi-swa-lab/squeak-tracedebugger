private
contextInfosFor: aContext

	| infos argumentNames |
	infos := OrderedDictionary new.
	
	infos at: #self put: aContext receiver.
	
	argumentNames := aContext tempNames.
	aContext outerContext ifNotNil: [:outer |
		argumentNames := argumentNames allButFirst: outer tempNames size].
	argumentNames := argumentNames first: aContext numArgs.
	argumentNames with: aContext arguments do:
		[:name :value |
			infos
				at:
					(aContext isMethodContext
						ifTrue: [name]
						ifFalse: ['[{1}]' format: {name}])
				put: value].
	
	self cursor
		returnValueFor: aContext
		ifPresent: [:value | infos at: #'^' put: value].
	
	^ infos