toolbuilder
buildContextVariablesInspectorWith: aBuilder

	^ self contextVariablesInspector
		buildEmbeddedWith: aBuilder
		label: 'Other context bindings'
		help: '<- Select context''s field'