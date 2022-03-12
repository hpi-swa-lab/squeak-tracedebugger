app - feedback
defaultFeedbackText

	^ '<br><br><i>Reported from {1}, for version of {2} last updated at {3}.</i>' asTextFromHtml format: {SystemVersion current. self appName. self latestTimeStamp}