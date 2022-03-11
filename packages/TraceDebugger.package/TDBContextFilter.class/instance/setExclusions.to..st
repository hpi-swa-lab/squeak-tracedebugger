accessing
setExclusions: selector to: values

	self
		perform: ('excluded{1}:' format: {selector capitalized}) asSymbol
		with: values.