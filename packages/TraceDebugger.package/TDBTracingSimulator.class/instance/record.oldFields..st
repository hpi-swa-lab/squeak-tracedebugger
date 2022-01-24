private
record: anObject oldFields: values

	values withIndexDo: [:value :index |
		self record: anObject fieldAt: index oldValue: value].
	^ values