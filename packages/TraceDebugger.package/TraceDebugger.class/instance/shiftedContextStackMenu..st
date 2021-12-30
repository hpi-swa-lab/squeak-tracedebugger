menus
shiftedContextStackMenu: aMenu
	<contextStackMenuShifted: true>

	self flag: #shouldBeImplemented.
	^ aMenu
		addList:
			#(('browse class hierarchy'				browseClassHierarchy)
			('browse class'							browseClass)
			('implementors of sent messages'		browseAllMessages)
			('change sets with this method'			findMethodInChangeSets)
			-	
			('inspect instances'						inspectInstances)
			('inspect subinstances'					inspectSubInstances)
			-	
			('revert to previous version'				revertToPreviousVersion)
			('remove from current change set'		removeFromCurrentChanges)
			('revert & remove from changes'		revertAndForget));
		yourself