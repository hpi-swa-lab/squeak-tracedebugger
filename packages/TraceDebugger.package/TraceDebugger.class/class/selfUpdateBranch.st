app - self-updating
selfUpdateBranch
	<preference: 'TraceDebugger self-update branch'
		category: #TraceDebugger
		description: 'The branch used for installing updates for TraceDebugger from the GitHub repository.'
		type: #String>
	
	^ SelfUpdateBranch ifNil: [self defaultSelfUpdateBranch]