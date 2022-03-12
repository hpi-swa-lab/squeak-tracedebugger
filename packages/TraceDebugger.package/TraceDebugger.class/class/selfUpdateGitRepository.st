app - self-updating
selfUpdateGitRepository

	^ 'https://github.com/{1}/{2}' format: {self githubRepositoryParams first. self githubRepositoryParams second}