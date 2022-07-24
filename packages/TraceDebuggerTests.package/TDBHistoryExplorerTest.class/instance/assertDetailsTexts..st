asserting
assertDetailsTexts: specs

	specs
		tdbTuplesDo: [:path :expectedText |
			self
				assert: (self contextSliceAtPath: path)
				detailsText: expectedText withCRs].