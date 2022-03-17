private
prepare: aBlock

	^ aBlock valueAndStoreTimeToRunWithoutGC: [:duration |
		preparationTime := preparationTime + duration]