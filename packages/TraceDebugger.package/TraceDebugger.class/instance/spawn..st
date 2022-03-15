actions
spawn: aStringOrText

	^ self spawnContext model
		editContents: aStringOrText;
		containingWindow