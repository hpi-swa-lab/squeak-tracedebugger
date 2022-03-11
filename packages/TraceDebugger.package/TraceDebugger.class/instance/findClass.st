actions
findClass

	| class |
	class := Project uiManager
		tdbChooseFromValues: (self cursor allContextClasses sorted: #name ascending)
		title: 'Context class?'.
	class ifNil: [^ self].
	
	self nextFindClass: class.
	^ self
		findClass: class
		again: false