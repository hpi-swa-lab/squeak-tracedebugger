app - self-updating
selfUpdateFromMetacello

	| metacello project |
	metacello := (self environment classNamed: #Metacello) new
		baseline: self packageInfo name;
		repository: self selfUpdateGitHubPath;
		yourself.
	project := metacello get.
	project configuration installDependencies.
	metacello load.