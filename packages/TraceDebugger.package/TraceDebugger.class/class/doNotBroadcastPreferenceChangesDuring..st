updating
doNotBroadcastPreferenceChangesDuring: aBlock

	| before |
	before := BroadcastingPreferenceChanges.
	BroadcastingPreferenceChanges := false.
	^ aBlock ensure:
		[BroadcastingPreferenceChanges := before]