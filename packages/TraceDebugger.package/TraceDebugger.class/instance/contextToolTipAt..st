accessing - toolbuilder
contextToolTipAt: anInteger

	thisContext wrap: [:block | self computeViewPropertyString: block].
	
	^ self contextToolTipFor:
		(self contextStack at: anInteger)