toolbuilder
buildRowButtonFrom: spec with: builder
	"spec is a tuple in the following format:
		('label' #selector ['help text' [#enabledSelector [#buttonColor]]])"

	| label selector buttonSpec stream |
	stream := spec readStream.
	label := stream next.
	selector := stream next.
	buttonSpec := builder pluggableActionButtonSpec new
		label: label;
		action: selector;
		yourself.
	buttonSpec model: self.
	
	#(help: enabled: #color:) do: [:sel |
		stream atEnd ifTrue: [^ buttonSpec].
		buttonSpec perform: sel with: stream next].
	
	^ buttonSpec