private
decorateView: view forObject: anObject
	"Decorate the opened view as a proxy model for anObject, if appropriate. This includes converting the model to a proxy model and adjusting the view optically."

	(view respondsTo: #model) ifFalse:
		[self flag: #hacked. "Retry with the topmost window, presuming that the sender has opened it right before."
		self flag: #Morphic.
		^ self
			decorateView: (self currentWorld findA: SystemWindow)
			forObject: anObject].
	
	(thisContext objectClass: anObject) isTdbProxyClass ifFalse: [^ view].
	
	view model isTdbProxyHolder ifFalse:
		[| newModel |
		newModel := view model asTdbProxyHolderFor: self.
		(view respondsTo: #tdbReplaceModelDeeply:)
			ifFalse: [^ self decorateView: (ToolBuilder open: newModel) forObject: anObject]
			ifTrue: [view tdbReplaceModelDeeply: newModel]].
	
	view setLabel: ('{1} [snapshot @ {2}]' format: {view label. anObject xxxtdbproxyTimeIndex}).
	(view respondsTo: #setWindowColor:) ifTrue:
		[view setWindowColor: self debugger colorForHistory].
	
	^ view