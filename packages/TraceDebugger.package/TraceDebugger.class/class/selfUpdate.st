app - self-updating
selfUpdate
	"Copied and adjusted from Squot (by Jakob Reschke)."
	"TraceDebugger selfUpdate"

	((Project uiManager confirm: 'It is recommended to install the latest Trunk updates first.' title: 'Updating TraceDebugger' trueChoice: 'Yes, install latest Trunk updates now' falseChoice: 'Skip latest Trunk updates (not recommended)')
		ifNil: [^ self])
		ifTrue: [MCMcmUpdater default doUpdate: false].
	^ self selfUpdateFromMetacello