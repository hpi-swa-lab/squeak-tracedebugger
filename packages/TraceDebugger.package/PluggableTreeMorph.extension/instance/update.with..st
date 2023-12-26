*TraceDebugger-UI-updating-override
update: what with: anObject

	what == self getLabelSelector ifTrue: [ "<-- TraceDebugger"
		(self morphForObject: anObject) ifNotNil: [:morph |
			morph refreshLabel].
		"self adjustSubmorphPositions. --- not required"
		^ self "do not refresh remaining items in #update:"].
	
	what == self getIconSelector ifTrue: [ "<-- TraceDebugger"
		(self morphForObject: anObject) ifNotNil: [:morph |
			morph refreshIcon].
		"self adjustSubmorphPositions. --- not required"
		^ self "do not refresh remaining items in #update:"].
	
	super update: what with: anObject.
	
	what == #objectChanged ifTrue: [
		^ self updateFromChangedObject: anObject].
	what == #expandAllNodesRequested ifTrue: [ 
		"EX: model changed: #expandAllNodesRequested with: #classChildren:."
		"EX: model changed: #expandAllNodesRequested with: {#classChildren:. Morph}."
		| scope item |
		scope := anObject isArray ifTrue: [anObject first] ifFalse: [anObject].
		item := anObject isArray ifTrue: [anObject second].
		getChildrenSelector == scope ifTrue: [
			item
				ifNil: [self roots do: [:ea | self expandAll: ea]]
				ifNotNil: [self expandAll: (self items detect: [:ea | ea complexContents item == item])].
			^ self]].
	what == #expandNodeRequested ifTrue: [
		"EX: model changed: #expandNodeRequested with: {#classChildren:. Morph}."
		| scope item |
		scope := anObject first.
		item := anObject second.
		getChildrenSelector == scope ifTrue: [
			self items
				detect: [:ea | ea complexContents item == item]
				ifFound: [:morph | (morph canExpand and: [morph isExpanded not])
					ifTrue: [self toggleExpandedState: morph]].
			^ self]].