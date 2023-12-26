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
		fromCollection: (c tdbproxyYourself "<-- TraceDebugger (for exploring TDBMemorySlices)"
			flag: #proxyHacks;
			collect: [:ea | c in: [:p | ea]])
		allowSorting: true.
	container changed. "See mismatch between #removeAllMorphsIn: and #privateAddAllMorphs:atIndex:"

	firstChild := newChildren first.