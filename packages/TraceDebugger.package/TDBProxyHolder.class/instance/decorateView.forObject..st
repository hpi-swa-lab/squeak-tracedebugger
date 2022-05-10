private
decorateView: view forObject: anObject
	"Decorate the opened view as a proxy model for anObject, if appropriate. This includes converting the model to a proxy model and adjusting the view optically."

	(view respondsTo: #model) ifFalse:
		[^ self
			decorateView: (self assureView: view)
			forObject: anObject].
	
	(self isTdbProxy: anObject) ifFalse: [^ view].
	
	view model isTdbProxyHolder ifFalse:
		[| oldView newModel newView |
		oldView := view model topView.
		newModel := view model asTdbProxyHolderFor: self.
		newView := self decorateView: (ToolBuilder open: newModel) forObject: anObject.
		oldView ifNotNil:
			[ToolBuilder default class setBoundsForWindow: newView to:
				(ToolBuilder default class getBoundsForWindow: oldView).
			ToolBuilder default close: oldView.
			newModel model: newModel model "fix dependents after #breakDependents during close"].
		^ newView].
	
	view setLabel: ('[snapshot @ {2}] {1}' format: {view label. anObject xxxtdbproxyTimeIndex}).
	(view respondsTo: #setWindowColor:) ifTrue:
		[view setWindowColor: self windowColorToUse].
	
	^ view