*TraceDebuggerBenchmarks-Base-menus
tdbHasSystemCategoryWithBenchmarksSelected

	^ (systemOrganizer listAtCategoryNamed: (self selectedSystemCategory ifNil: [^ false]))
		anySatisfy: [:name |
			 self class environment 
				at: name
				ifPresent: [:cls | cls isTdbBenchmarkClass and: [cls isAbstract not]]
				ifAbsent: [false]]