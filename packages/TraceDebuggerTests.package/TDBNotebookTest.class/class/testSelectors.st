accessing
testSelectors

	| methods |
	methods := self packagesUnderTest gather: [:package |
		package methods select: [:method |
			method actualClass isMeta and: [method compiledMethod hasPragma: #tdbNotebook]]].
	^ methods collect: [:method |
		self testSelectorForClass: method actualClass theNonMetaClass selector: method selector]