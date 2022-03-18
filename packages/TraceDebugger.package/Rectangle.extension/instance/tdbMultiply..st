*TraceDebugger-UI-Help-transforming
tdbMultiply: relativeScalar

	relativeScalar isRectangle ifTrue: [
		^ (self tdbSubRect: relativeScalar origin) corner: (self tdbSubRect: relativeScalar corner)].
	^ self scaleBy: relativeScalar