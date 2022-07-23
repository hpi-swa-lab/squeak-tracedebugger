labels & details
detailsTextForValue: value

	[value isText ifTrue: [^ self detailsTextForTextValue: value].
	value isForm ifTrue: [^ self detailsTextForFormValue: value].
	value isMorph ifTrue: [^ self detailsTextForMorphValue: value].
	
	^ self detailsTextForObjectValue: value]
		on: self commonErrors do: [:ex |
			^ self errorText: 'display error' exception: ex]