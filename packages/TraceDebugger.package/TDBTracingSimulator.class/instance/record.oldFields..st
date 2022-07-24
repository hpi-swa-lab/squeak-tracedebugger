private
record: anObject oldFields: values

	self flag: #optimize. "Implement primitiveFill et al. efficiently"
	values withIndexDo: [:value :index |
		self record: anObject fieldAt: index oldValue: value].
	^ values