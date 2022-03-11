support
doesExcludeReceiver: aClass

	^ self doesExcludeContext:
		(Context
			sender: nil
			receiver: aClass basicNew
			method: aClass methodDict anyOne
			arguments: #())