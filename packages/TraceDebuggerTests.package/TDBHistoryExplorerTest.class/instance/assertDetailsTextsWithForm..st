asserting
assertDetailsTextsWithForm: specs

	specs
		tdbTuplesDo: [:path :expectedString :expectedDims :expectedColorNames |
			self
				assert: (self contextSliceAtPath: path)
				detailsText: expectedString withCRs.
			expectedDims ifNotNil:
				[| expectedExtent expectedColors displayForm |	
				expectedExtent := expectedDims first @ expectedDims second.
				expectedColors := expectedColorNames collect: [:name | Color fromString: name] as: Set.
				displayForm := (explorer detailsText copyFrom: explorer detailsText size to: explorer detailsText size) asMorph imageForm.
				self assert: (displayForm extent >= expectedExtent and: [displayForm extent < (expectedExtent * 2)]).
				self assert: expectedColors equals: displayForm colorsUsed asSet]].