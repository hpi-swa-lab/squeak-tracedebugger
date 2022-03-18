*TraceDebugger-UI-converting
tdbAsText

	^ Character startOfHeader asString asText
		addAttribute:
			(self copy
				offset: 0;
				asTextAnchor);
		yourself