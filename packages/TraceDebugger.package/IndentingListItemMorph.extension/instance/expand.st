*TraceDebugger-UI-container protocol-override
expand

 	| newChildren c |

	(self isExpanded or: [self canExpand not])
		ifTrue: [^ self].
	
	(c := self getChildren) ifEmpty: [
		"Due to the guessing in #canExpand, it may still fail here."
		^ self].

	self isExpanded: true.
	
	container noteExpandOf: self. "<-- TraceDebugger"

	newChildren := container 
		addSubmorphsAfter: self 
		fromCollection: (c tdbproxyYourself collect: [:ea | c in: [:p | ea]])
		allowSorting: true.

	firstChild := newChildren first.