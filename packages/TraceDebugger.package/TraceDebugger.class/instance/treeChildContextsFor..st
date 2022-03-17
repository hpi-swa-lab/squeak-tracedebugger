accessing - toolbuilder
treeChildContextsFor: aContext

	^ (self childContextsFor: aContext)
		collect: [:ctx | ctx tdbproxyYourself]