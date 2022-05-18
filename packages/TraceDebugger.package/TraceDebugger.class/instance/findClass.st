actions
findClass

	| class |
	class := Project uiManager
		tdbChooseFrom:
			((self cursor allContextClassesBelow: self selectedContext)
				sorted: #name ascending)
		title: 'Context class?'
		initialSelection:
			(self nextFindClass
				ifNil: [self selectedContext
					ifNotNil: [:context | self cursor contextClassFor: context]]).
	class ifNil: [^ self].
	
	self nextFindClass: class.
	^ self
		findClass: class
		again: false