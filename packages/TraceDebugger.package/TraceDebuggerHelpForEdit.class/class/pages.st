accessing
pages

	^ super pages collect: [:selector | self basicSelectorFor: selector]