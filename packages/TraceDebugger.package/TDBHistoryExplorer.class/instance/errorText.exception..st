labels & details - errors
errorText: type exception: anException

	| text exceptionString |
	"Unpack memory slice in isolated error, if any"
	anException isTdbIsolatedError ifTrue:
		[| exception |
		exception := anException exception.
		(exception isTdbMemorySlice and: [exception hasSingleValue]) ifTrue:
			[^ self errorText: type exception: exception values anyOne]].
	
	exceptionString := [anException asString]
		on: self commonErrors
		do: [:ex | 'cannot even print the error: {1}' format: {ex}].
	text := ('<{1}: {2}>' format: {type. exceptionString}) asText.
	text addAllAttributes: (self tdbAttributesForStyle: self styleForError).
	^ text