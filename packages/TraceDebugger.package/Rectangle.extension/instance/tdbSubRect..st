*TraceDebugger-UI-Help-transforming
tdbSubRect: relativeScalar

	^ relativeScalar tdbPointsTransform: [:point | self origin + (self extent * point)]