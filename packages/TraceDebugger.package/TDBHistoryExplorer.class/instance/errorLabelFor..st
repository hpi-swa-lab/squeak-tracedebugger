accessing - toolbuilder
errorLabelFor: anException

	^ ('<error: {1}>' format: {anException})
		asText
			addAllAttributes: {TextEmphasis italic};
			yourself