*TraceDebugger-UI-construction
tdbRemoveAllSelectors: selectors

	self items removeAllSuchThat: [:item |
		selectors includes: item action].