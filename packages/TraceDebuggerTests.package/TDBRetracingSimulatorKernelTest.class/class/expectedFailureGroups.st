accessing
expectedFailureGroups

	| groups |
	groups := super expectedFailureGroups.
	
	groups at: #ContextTest put: ((groups at: #ContextTest ifAbsent: [{}]) ,
		{#testObjectsAsMethod flag: #todo. "Side effects to method dictionaries are not yet honored in method lookup"}).
	
	^ groups