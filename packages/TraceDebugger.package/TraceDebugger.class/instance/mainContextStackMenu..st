menus
mainContextStackMenu: aMenu
	<contextStackMenuShifted: false>

	^ aMenu
		addList:
			#(('restart (r)' 					restart) 
			('proceed (p)' 					proceed) 
			('step over (t)' 					stepOver) 
			('step through (T)'	 			stepThrough) 
			('step into (e)'					stepInto) 
			('where (w)' 					where) 
			('peel to first like this' 			peelToFirst) 
			- 
			('return entered value' 			returnValue) 
			- 
			('toggle break on entry'			toggleBreakOnEntry) 
			('senders of    (n)' 				browseSendersOfMessages) 
			('implementors of    (m)' 		browseMessages) 
			('inheritance (i)' 				methodHierarchy) 
			- 
			('versions (v)' 					browseVersions) 
			- 
			('references    (r)' 				browseVariableReferences) 
			('assignments    (a)' 			browseVariableAssignments) 
			- 
			('class refs (N)' 					browseClassRefs) 
			('browse full (b)' 				browseMethodFull) 
			('file out ' 			 			fileOutMessage) 
			('remove method (x) ' 			removeMessage) 
			- 
			('copy bug report to clipboard'	copyBugReportToClipboard));
		yourself