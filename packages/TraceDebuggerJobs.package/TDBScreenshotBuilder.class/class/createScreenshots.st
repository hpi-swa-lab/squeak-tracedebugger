screenshotting
createScreenshots

	| errors |
	errors := OrderedCollection new.
	
	self screenshotSelectors do: [:selector |
		Transcript showln: ('Creating screenshot: {1}...' format: {selector}).
		[self createScreenshot: selector.
		Transcript showln: ('Screenshot: {1} successful!' format: {selector})]
			on: Error, Warning, Halt, ProvideAnswerNotification do: [:ex |
				errors add: ex.
				Transcript showln: ('Screenshot: {1} FAILED!' format: {selector}).
				Transcript showln: (String streamContents: [:stream | ex printVerboseOn: stream])].
		Transcript cr].
	
	^ errors isEmpty