app - self-updating
defaultSelfUpdateBranch

	| squeakVersion |
	(self environment classNamed: #MCRepositoryGroup) ifNotNil: [:mcRepositoryGroupClass |
		| repoPrefix |
		repoPrefix := 'github://{1}/{2}' format: {self githubRepositoryParams first. self githubRepositoryParams second}.
		mcRepositoryGroupClass default repositories
			detect: [:repo | repo description beginsWith: repoPrefix]
			ifFound: [:repo |
				| version |
				version := repo projectVersion.
				^ version = 'master' ifTrue: ['main'] ifFalse: [version]]].
	
	squeakVersion := SystemVersion current version.
	squeakVersion isAlpha ifTrue: [^ 'main'].
	squeakVersion majorMinorVersion = 'Squeak6.0' ifTrue: [^ 'squeak60'].
	^ 'main'