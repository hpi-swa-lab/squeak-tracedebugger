support
contextSliceAtPath: path

	^ path
		inject: explorer rootContextSlices
		into: [:nodes :index |
			(nodes isCollection
				ifTrue: [nodes]
				ifFalse: [explorer childContextSlicesFor: nodes])
					at: index]