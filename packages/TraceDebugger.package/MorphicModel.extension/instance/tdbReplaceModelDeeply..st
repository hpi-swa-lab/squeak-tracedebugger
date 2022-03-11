*TraceDebugger-UI-converting
tdbReplaceModelDeeply: aModel
	"Replace all occurences of the current receiver model in the receiver and all its ancestors with aModel."

	| oldModel |
	oldModel := self model.
	self allMorphsDo: [:morph |
		morph model == oldModel
			ifTrue: [morph model: aModel]].