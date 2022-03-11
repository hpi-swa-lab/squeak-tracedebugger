*TraceDebuggerTests-Core-accessing
tdbTestSelectorSpec
	"Answer a spec representing the selector and closure nesting depth of the receiver.
	
	Example:
		thisContext tdbTestSelectorSpec  #DoIt 
		[thisContext tdbTestSelectorSpec] value  #(#DoIt 1) 
		[[thisContext tdbTestSelectorSpec] value] value  #(#DoIt 2) "

	| outerSpec |
	self isClosureContext ifFalse:
		[^ self selector].
	
	outerSpec := self outerContext tdbTestSelectorSpec.
	outerSpec isArray ifFalse: [^ {outerSpec. 1}].
	^ {outerSpec first. outerSpec second + 1}