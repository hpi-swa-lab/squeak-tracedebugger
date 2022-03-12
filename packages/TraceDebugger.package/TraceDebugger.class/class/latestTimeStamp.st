app - accessing
latestTimeStamp

	^ (self packageInfo methods collect:
		[:method | TimeStamp fromMethodTimeStamp: method timeStamp])
			max