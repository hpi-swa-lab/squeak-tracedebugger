app - self-updating
selfUpdateFromMetacello

	| metacello project |
	metacello := Metacello new
		baseline: self packageInfo name;
		repository: self selfUpdateGitHubPath;
		yourself.
	project := metacello get.
	project configuration installDependencies.
	metacello load.