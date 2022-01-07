toolbuilder - opening
morphicOpenFull: aBoolean label: titleOrNil
	
	| uiBlock |
	uiBlock := [
		| window |
		window := self openFull: aBoolean label: titleOrNil.
		
		"Try layouting the debugger tool at least once to avoid freeze."
		"There are way too many #fullBounds sends. Layout errors might already have happened."
		window allMorphsDo: [:m | (m hasProperty: #errorOnLayout)
			ifTrue: [self error: 'Layout error']].
		window world doLayout. "Not safely!".
		"Try drawing the debugger tool at least once to avoid freeze."
		window world displayWorld. "Not safely!"].
	
	"Schedule debugging in a deferred UI message if necessary. Note that only the ui process should execute ui code."
	(Project current uiProcess isActiveProcess not or: [self process isActiveProcess])
		ifTrue: [Project current addDeferredUIMessage: uiBlock]
		ifFalse: uiBlock.
	
	self process suspend.
	
	"Get here immediately only if active process is not the process-to-debug. So in tests, use a helper process if you want to access this return value."
	^ self