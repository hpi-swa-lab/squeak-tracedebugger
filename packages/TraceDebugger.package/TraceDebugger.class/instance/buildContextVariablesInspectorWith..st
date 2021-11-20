toolbuilder
buildContextVariablesInspectorWith: aBuilder

	^ self
		buildInspector: contextVariablesInspector
		label: 'Other context bindings'
		help: '<- Select context''s field'
		with: aBuilder