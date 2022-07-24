*TraceDebugger-UI-toolbuilder - private
tdbAttributesForStyle: styleSpec
	"styleSpec: { [aColor [. anAttribute[Collection]] }"

	styleSpec readStream in: [:read |
		| attributes |
		attributes := OrderedCollection new.
		read atEnd ifTrue: [^ attributes].
		
		read next ifNotNil: [:color |
			attributes add: (TextColor color: color)].
		read atEnd ifTrue: [^ attributes].
		
		read next ifNotNil: [:emphasis |
			attributes addAll: emphasis asOrderedCollection].
		
		^ attributes].