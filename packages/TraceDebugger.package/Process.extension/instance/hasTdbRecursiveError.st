*TraceDebugger-UI-debugging support
hasTdbRecursiveError

	^ self environmentAt: #tdbErrorRecursionFlag ifAbsent: [false]