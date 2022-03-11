accessing - code pane
contentsSelection
	"Reverse the selection (i.e., point block and mark block) to put the text cursor at the beginning to ensure visibility of the beginning in small windows."
	
	self flag: #tofix. "mt: See http://forum.world.st/The-Inbox-Morphic-cmm-1615-mcz-td5109271.html and http://forum.world.st/stepping-in-small-panes-td5109239.html."
	^ self pcRange in: [:interval |
		interval last + 1 to: interval first - 1]