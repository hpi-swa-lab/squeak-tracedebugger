*TraceDebuggerTests-Core-enumerating
tdbAllSubsetsDo: subsetBlock

	| subset |
	0 to: 2 ** self size - 1 do: [:i |
		subset := Set new.
		1 to: self size do: [:j |
			(i bitAt: j) = 1 ifTrue:
				[subset add: (self at: j)]].
		subsetBlock value: subset].