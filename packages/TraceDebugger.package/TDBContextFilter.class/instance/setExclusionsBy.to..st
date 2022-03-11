accessing
setExclusionsBy: selector to: values

	self
		perform: ('excluded{1}:' format:
			{(self pluralSelectorFor: selector) capitalized})
				asSymbol
		with: values.