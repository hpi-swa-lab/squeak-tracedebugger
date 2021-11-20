updating
changedDependent: aspect
	"clear cache, if any"

	self instVarNamed: aspect put: nil ifAbsent: [].
	
	self changed: aspect.