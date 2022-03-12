app - self-updating
selfUpdateGitRepositoryPattern

	^ (((self selfUpdateGitRepository
		copyReplaceAll: self githubRepositoryParams first
		with: '.*')
			flag: #workaround; "until String>>#escapeRegex is live"
			copyReplaceAll: ':'
			with: '\:')
				, '(\.git)?')
					asRegex