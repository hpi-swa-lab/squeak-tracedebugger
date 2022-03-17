private
stackForContext: aContext

	| rootIndex stack |
	stack := self cursor stackForContext: aContext.
	
	"Cut the stack to remove everything behind borderContexts"
	self flag: #forLater. "Extract border contexts to cursor?"
	rootIndex := stack findFirst: [:context | self borderContexts
		ifEmpty: [false]
		ifNotEmpty: [:theBorderContexts | theBorderContexts
			anySatisfy: [:borderContext | context tdbIdentical: borderContext]]].
	^ rootIndex = 0
		ifTrue: [stack]
		ifFalse: [stack first: rootIndex]