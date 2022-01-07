toolbuilder
buildReceiverInspectorWith: aBuilder

	^ self
		buildInspector: receiverInspector
		label: 'Receiver''s instance variables'
		help: '<- Select receiver''s field'
		with: aBuilder