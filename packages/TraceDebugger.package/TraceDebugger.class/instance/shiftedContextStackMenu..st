menus
shiftedContextStackMenu: aMenu
	<contextStackMenuShifted: true>

	^ aMenu
		addList:
			#(('browse class hierarchy (h)'			browseClassHierarchy)
			('browse class (b)'						browseClass)
			('implementors of sent messages (m)'	browseAllMessages)
			('change sets with this method'			findMethodInChangeSets)
			-	
			('inspect instances'						inspectInstances)
			('inspect subinstances'					inspectSubInstances)
			-	
			('revert to previous version'				revertToPreviousVersion)
			('remove from current change set'		removeFromCurrentChanges)
			('revert & remove from changes'		revertAndForget));
		yourself