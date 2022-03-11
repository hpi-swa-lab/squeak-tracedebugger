private
someTextPaneWithSelector: aSelector
	"Copied from StringHolder."

	^ (self dependentTextPaneWithSelector: aSelector)
		ifNil: [self textPaneWithSelector: aSelector]