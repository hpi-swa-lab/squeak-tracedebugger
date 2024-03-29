*TraceDebugger-UI-construction
tdbRemoveAllSelectors: selectors reverse: reverse

	self items do: [:item |
		(selectors includes:
			(item selector = #perform:orSendTo:
				ifTrue: [item arguments first]
				ifFalse: [item selector]))
			ifTrue:
				[(reverse ifFalse: [item submorphAfter] ifTrue: [item submorphBefore])
					ifNotNil: [:sibling |
						sibling knownName = #line
							ifTrue: [sibling delete]].
				item delete]].