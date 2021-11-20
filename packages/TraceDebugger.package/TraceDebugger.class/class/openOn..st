opening
openOn: aProcess

	^ self
		openOn: aProcess
		context: aProcess suspendedContext
		label: nil
		contents: nil
		fullView: true