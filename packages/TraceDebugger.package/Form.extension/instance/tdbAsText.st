*TraceDebugger-UI-converting
tdbAsText

	^ Character startOfHeader asString tdbAsTextWithAttribute:
		(self copy
			offset: 0;
			asTextAnchor)