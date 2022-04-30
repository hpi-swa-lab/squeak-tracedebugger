toolbuilder - opening
labelString

	^ self labelStringForTitle:
		(self interruptedSignalerContext
			ifNotNil: [:context |
				| exception |
				exception := context receiver.
				exception description]
			ifNil: [originalLabel])