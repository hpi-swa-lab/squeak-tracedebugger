app - self-updating
selfUpdateWithSquot: aWorkingCopy

	| workingCopy repository newVersion |
	"do not mess with the passed working copy for the moment"
	workingCopy := (self environment classNamed: #SquotWorkingCopy) new.
	workingCopy store: (self environment classNamed: #SquotImageStore) new.
	workingCopy repository: ((self environment classNamed: #SquitRepository) onDirectory: (self environment classNamed: #FileSystem) memory / self appName).
	workingCopy repository cloneFrom: self selfUpdateGitRepository.
	
	repository := workingCopy repository.
	repository importFromUpstream: 'origin'.
	newVersion := (repository historianNamed: 'origin/', self selfUpdateBranch) version.
	workingCopy
		mergeVersionWithLoadedObjects: newVersion
		ifCanceled: [^ self].
	(repository historianNamed: self selfUpdateBranch) version: newVersion.
	"-- or, for non-developers of Squot: --"
	"SelfUpdateWorkingCopy loadVersion: SelfUpdateWorkingCopy baseVersion interactive: false."