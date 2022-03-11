toolbuilder
buildNotifierWith: aBuilder

	| windowSpec |
	windowSpec := self buildWindowWith: aBuilder specs:
		{self controlButtonsFrame -> [self buildNotifierButtonsWith: aBuilder].
		self contextStackFrame -> [self messageText
			ifNotNil: [self buildMessagePaneWith: aBuilder]
			ifNil: [self buildContextStackListForNotifierWith: aBuilder]]}.

	windowSpec extent: self initialExtentForNotifier.

	^ windowSpec