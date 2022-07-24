labels & details
postpareRetracedText: aText
	"Answer a version of aText that has been cleared of any deeply nested proxies."

	| text |
	aText isText ifFalse: [^ aText].
	self flag: #proxyHacks.
	
	"This implementation deals with proxies on any level in the text structure.
	Note: There is currently no support for proxies inside attributes (e.g., a proxied Morph inside a TextAnchor)."
	text := aText in: [:it |
		[Text
			string: aText string copy tdbproxyYourself
			runs: (aText runs copy tdbproxyYourself
				setRuns: aText runs runs copy tdbproxyYourself
					setValues: (aText runs values copy tdbproxyYourself replace: [:value |
						value copy tdbproxyYourself replace: [:ea | ea copy tdbproxyYourself]]);
				yourself)]
			on: self commonErrors do:
				[:ex | self errorText: 'text error' exception: ex]].
	
	^ text copy tdbproxyYourself