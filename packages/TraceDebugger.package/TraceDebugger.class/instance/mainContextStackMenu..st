menus
mainContextStackMenu: aMenu
	<contextStackMenuShifted: false>

	^ aMenu
		addList:
			#(('spawn (o)' 					spawn)
			('toggle bottom (O)'			toggleBottomContext)
			-
			('find (f)'						findContext)
			('find again (g)'					findContextAgain)
			('find class (F)'					findClass)
			('find class again (G)'			findClassAgain)
			-
			('restart (r)' 					restart)
			('proceed (p)' 					proceed)
			('step over (t)' 					stepOver)
			('step through (T)'	 			stepThrough)
			('step into (e)'					stepInto)
			('step back (B)'					stepBack)
			('where (w)' 					showWhere)
			-
			('return entered value' 			returnValue)
			-
			('senders of (n)' 				browseSendersOfMessages)
			('implementors of (m)' 			browseMessages)
			('inheritance (i)' 				methodHierarchy)
			-
			('versions (v)' 					browseVersions)
			-
			('references (r)' 				browseVariableReferences)
			('assignments (a)' 				browseVariableAssignments)
			-
			('class refs (N)' 					browseClassRefs)
			('browse full (b)' 				browseMethodFull)
			('file out ' 			 			fileOutMessage)
			('remove method (x) ' 			removeMessage)
			-
			('copy bug report to clipboard'	copyBugReportToClipboard));
		yourself