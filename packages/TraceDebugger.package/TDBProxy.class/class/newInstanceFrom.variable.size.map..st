private
newInstanceFrom: oldInstance variable: variable size: instSize map: map 
	"Adjusted from super to use mirror primitives. See also: https://github.com/squeak-smalltalk/squeak-object-memory/issues/46#issuecomment-1159523354"

	| new |
	variable
		ifTrue: [new := self basicNew: oldInstance basicSize]
		ifFalse: [new := self basicNew].
	1 to: instSize do: 
		[:offset |  (map at: offset) > 0 ifTrue:
			[thisContext object: new instVarAt: offset
					put: (thisContext object: oldInstance instVarAt: (map at: offset))]].
	variable 
		ifTrue: [1 to: oldInstance basicSize do: 
					[:offset |
					thisContext object: new basicAt: offset put: (thisContext object: oldInstance basicAt: offset)]].
	^new