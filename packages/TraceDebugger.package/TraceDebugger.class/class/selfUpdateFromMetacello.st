app - self-updating
selfUpdateFromMetacello

	(self environment classNamed: #Metacello) new
		baseline: self packageInfo name;
		repository: self selfUpdateGitHubPath;
		get;
		load