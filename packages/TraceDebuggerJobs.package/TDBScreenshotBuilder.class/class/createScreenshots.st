screenshotting
createScreenshots
	"Build and save all screenshots and handle any errors. Answer a collection of all errors."

	| errors |
	errors := OrderedCollection new.
	
	self screenshotSelectors do: [:selector |
		Transcript showln: ('Creating screenshot: {1}...' format: {selector}).
		[| time |
		time := [self createScreenshot: selector] timeToRun milliSeconds.
		Transcript showln: ('Screenshot: {1} successful! ({2})' format: {selector. time})]
			on: Error, Warning, Halt, ProvideAnswerNotification do: [:ex |
				errors add: ex.
				Transcript showln: ('Screenshot: {1} FAILED!' format: {selector}).
				Transcript showln: (String streamContents: [:stream | ex printVerboseOn: stream])].
		Transcript cr].
	
	^ errors