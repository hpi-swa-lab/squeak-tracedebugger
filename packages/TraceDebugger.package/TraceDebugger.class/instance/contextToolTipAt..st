accessing - toolbuilder
contextToolTipAt: anInteger

	^ self contextToolTipFor:
		(self contextStack at: anInteger ifAbsent:
			[^ nil flag: #workaround "Avoid display errors in Morphic which can still crash your image when opening an interrupt debugger"])