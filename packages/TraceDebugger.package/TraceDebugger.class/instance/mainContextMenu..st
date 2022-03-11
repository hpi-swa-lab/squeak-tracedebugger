menus
mainContextMenu: aMenu
	<contextMenuShifted: false>

	| context |
	context := self selectedContext.
	aMenu
		addList:
			#(('spawn (o)' spawn 'open a new window on the selected portion of the trace'));
		tdbAddUpdating: 'border context'
			getState: [context ifNotNil: [self isBorderContext: context]]
			setState: [self toggleBorderContext: context];
		balloonTextForLastItem: 'control whether the displayed trace will be clipped beyond this context';
		addList:
			#(('jump to presence (D)' jumpToPresence 'jump to the currently active context')
			('jump to sender (w)' jumpToSender 'jump to the context that has activated this context')
			('jump to callee (s)' jumpToCallee 'jump to the active context that was activated by this context')
			-
			('find (f)' findContext 'search the trace for a context signature')
			('find again (g)' findContextAgain)
			('find class (F)' findClass 'search the class for a method class')
			('find class again (G)' findClassAgain)
			-).
	
	self contextFilterMenu: aMenu.
	
	aMenu addList:
		#(-
		('proceed (p)' proceed 'close the debugger and proceed')
		('restart (r)' restart 'rewind this context to its start')
		('step into (e)' stepInto 'step into next message send')
		('step over (t)' stepOver 'step over next message send')
		('step through (T)' stepThrough 'step into next block/out of current block')
		('step back (B)' stepBack 'rewind before previous message send')
		('where (w)' showWhere 'select next expression')
		-
		('copy bug report to clipboard'	copyBugReportToClipboard)).
	^ aMenu