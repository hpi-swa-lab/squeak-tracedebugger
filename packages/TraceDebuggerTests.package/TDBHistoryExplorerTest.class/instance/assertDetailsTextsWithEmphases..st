asserting
assertDetailsTextsWithEmphases: specs

	specs
		tdbTuplesDo: [:path :expectedString :expectedRuns :expectedValueSpecs |
			self
				assert: (self contextSliceAtPath: path)
				detailsText: expectedString withCRs.
			expectedRuns ifNotNil:
				[| relevantText expectedValues |
				expectedValues := expectedValueSpecs collect: [:values |
					values collect: [:value | TextEmphasis new emphasisCode: value]].
				relevantText := explorer detailsText removeAttributesThat: [:attr | (attr isKindOf: TextEmphasis) not].
				self
					assert: expectedRuns
						equals: relevantText runs runs;
					assert: expectedValues
						equals: relevantText runs values]].