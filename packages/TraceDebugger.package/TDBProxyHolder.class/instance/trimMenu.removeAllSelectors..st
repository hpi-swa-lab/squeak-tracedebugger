private
trimMenu: menu removeAllSelectors: selectors

	menu items do: [:item |
		(selectors includes: item selector)
			ifTrue:
				[item submorphAfter ifNotNil: [:after |
					after knownName = #line
						ifTrue: [after delete]].
				item delete]].