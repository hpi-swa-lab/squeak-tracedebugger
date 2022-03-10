accessing - toolbuilder
contextIconAt: anInteger

	thisContext wrap: [:block | self computeViewPropertyIcon: block].
	
	^ self contextIconFor:
		(self contextStack at: anInteger)