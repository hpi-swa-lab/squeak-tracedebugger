accessing
testSelectors

	| methods |
	methods := self packagesUnderTest gather: [:package |
		package methods select: [:method |
			method actualClass isMeta and: [method compiledMethod hasPragma: #tdbNotebook]]].
	^ methods collect: [:method | method actualClass theNonMetaClassName -> method selector]