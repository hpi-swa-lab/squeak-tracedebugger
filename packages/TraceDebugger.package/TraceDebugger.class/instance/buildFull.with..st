toolbuilder
buildFull: aBoolean with: aBuilder

	^ aBoolean
		ifTrue: [self buildFullWith: aBuilder]
		ifFalse: [self buildNotifierWith: aBuilder]