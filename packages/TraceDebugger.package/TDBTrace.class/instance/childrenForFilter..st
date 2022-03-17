accessing
childrenForFilter: filter
	"Answer all child contexts of the receiver that are matched by the filter. For non-matching children, recursively iterate of their children to 'flatten out' filtered contexts from the tree."

	filter ifNil: [^ self children].
	
	^ OrderedCollection streamContents: [:stream |
		self streamChildrenForFilter: filter on: stream]