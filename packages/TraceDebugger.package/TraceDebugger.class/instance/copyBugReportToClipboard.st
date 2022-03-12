actions
copyBugReportToClipboard

	| message |
	message := String new: 1500 streamContents: [:stream |
		stream nextPutAll:
			('Bug Report from {1} at time {2}' format: {self appName. self cursor timeIndex}).
		self isDisplayingHistory ifTrue:
			[stream nextPutAll: ' <historic view>'].
		stream cr.
		
		self interruptedContext errorReportOn: stream].
	Clipboard clipboardText: message.