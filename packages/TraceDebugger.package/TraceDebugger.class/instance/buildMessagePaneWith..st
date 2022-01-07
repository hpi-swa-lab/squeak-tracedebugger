toolbuilder
buildMessagePaneWith: aBuilder

	^ aBuilder pluggableTextSpec new
		model: self;
		getText: #messageText;
		yourself