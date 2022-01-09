private
postpare: aBlock

	^ aBlock valueAndStoreTimeToRunWithoutGC: [:duration | postparationTime := postparationTime + duration]