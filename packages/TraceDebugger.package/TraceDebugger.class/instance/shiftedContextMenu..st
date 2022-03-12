menus
shiftedContextMenu: menu
	<contextMenuShifted: true>

	^ menu
		addList:
			#(('browse full (b)' 				browseMethodFull)
			('senders of (n)' 				browseSendersOfMessages)
			('implementors of (m)' 			browseMessages)
			('inheritance (i)' 				methodHierarchy)
			('versions (v)' 					browseVersions)
			-
			('browse class (b)'						browseClass)
			('browse class hierarchy (h)'			browseClassHierarchy)
			('class refs (N)' 					browseClassRefs)
			('references (r)' 				browseVariableReferences)
			('assignments (a)' 				browseVariableAssignments)
			-
			('file out ' 			 			fileOutMessage)
			('remove method (x) ' 			removeMessage)
			-
			('inspect instances'						inspectInstances)
			('inspect subinstances'					inspectSubInstances)
			-	
			('change sets with this method'			findMethodInChangeSets)
			('revert to previous version'				revertToPreviousVersion)
			('remove from current change set'		removeFromCurrentChanges)
			('revert & remove from changes'		revertAndForget));
		yourself