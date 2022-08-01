*TraceDebuggerJobs-html-pseudo-override
openHtmlOn: aStream

	| base64 |
	self flag: #moveUpstream.
	
	self anchoredMorph isForm ifFalse: [^ super openHtmlOn: aStream].
	
	base64 := (ByteArray streamContents: [:stream |
		PNGReadWriter putForm: self anchoredMorph onStream: stream])
			base64Encoded.
	aStream
		nextPutAll: '<img src="data:image/png;base64,';
		nextPutAll: base64;
		nextPutAll: '">'.