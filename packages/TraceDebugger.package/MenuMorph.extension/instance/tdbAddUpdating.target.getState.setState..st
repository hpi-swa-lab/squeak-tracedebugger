*TraceDebugger-UI-construction
tdbAddUpdating: label target: target getState: getter setState: setter
	"Add a pluggable menu item to the receiver. Label and getter/setter for the state can be evaluables like blocks. State can also be nil."

	(getter respondsTo: #receiver) ifFalse: [
		^ self tdbAddUpdating: label target: target getState: (getter ifNil: [[]] ifNotNil: [getter cull: target]) setState: setter].
	(setter respondsTo: #receiver) ifFalse: [
		^ self tdbAddUpdating: label target: target getState: getter setState: [:boolean | setter cull: target cull: boolean]].
	
	^ self addMorphBack: (UpdatingMenuItemMorph new
		target: [getter value
			ifNil: [setter value]
			ifNotNil: [:value | setter cull: value not]];
		selector: #value;
		wordingProvider: [
			| labelValue |
			labelValue := label value.
			getter value ifNotNil: [:state |
				labelValue := '<{1}>{2}' format: {state ifTrue: [#on] ifFalse: [#off]. labelValue}].
			labelValue]
				wordingSelector: #value;
		arguments: #();
		yourself)