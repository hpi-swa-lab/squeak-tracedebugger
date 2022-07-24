*TraceDebugger-UI-support-override
embedForm: aForm inText: stringOrText

	^ stringOrText asText
		, ((' (hash: {1})' translated format: {aForm bits hash})
			flag: #workaround "ct: Currently, text equality ignores attributes. Add a hash of the form's bits to the text to ensure that it will be re-rendered in Morphic inspectors. In the long term, we should redefine Text >> #= instead. See: http://lists.squeakfoundation.org/pipermail/squeak-dev/2020-September/211358.html";
			yourself)
		, String cr
		, (Text string: ' ' attribute:
			(TextFontReference toFont: 
				(FormSetFont new
					fromFormArray: (Array with: (aForm
							copy tdbproxyYourself flag: #proxyHacks; "<-- TraceDebugger"
						offset: 0@0))
					asciiStart: Character space asInteger
					ascent: aForm height)))