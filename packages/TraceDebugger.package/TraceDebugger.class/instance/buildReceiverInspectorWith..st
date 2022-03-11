toolbuilder
buildReceiverInspectorWith: aBuilder

	^ self receiverInspector
		buildEmbeddedWith: aBuilder
		label: 'Receiver''s instance variables'
		help: '<- Select receiver''s field'