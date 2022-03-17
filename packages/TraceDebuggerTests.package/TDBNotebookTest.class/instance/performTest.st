private
performTest

	self selector isSymbol ifTrue: [^ super performTest].
	
	^ self performNotebookTest