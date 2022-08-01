writing
cleanContents: aText

	^ aText copy removeAttributesThat: [:attr |
		((attr isKindOf: TextAnchor)
			or: [attr isKindOf: TextEmphasis]
			or: [attr isKindOf: TextURL])
				not]