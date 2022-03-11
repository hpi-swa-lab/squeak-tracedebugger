accessing
childrenForFilter: filter

	filter ifNil: [^ self children].
	
	^ OrderedCollection streamContents: [:stream |
		self streamChildrenForFilter: filter on: stream]