*TraceDebugger-UI-construction
tdbRemoveAllSelectors: selectors reverse: reverse

	self items removeAllSuchThat: [:item |
		selectors includes: item action].