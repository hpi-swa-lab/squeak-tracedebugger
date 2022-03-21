toolbuilder - private
attributesForStyle: styleSpec

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