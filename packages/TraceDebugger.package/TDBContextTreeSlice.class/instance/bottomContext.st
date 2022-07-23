accessing
bottomContext
	"Answer the outermost context from the path of the receiver."

	| context |
	context := self path first.
	context isNumber ifTrue: [^ self parent path last].
	^ context