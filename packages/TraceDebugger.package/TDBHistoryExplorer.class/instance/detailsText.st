accessing - toolbuilder
detailsText

	| slice text |
	slice := self selectedContextSlice ifNil: [^ self emptyDetailsText].
	text := self showWaitAfter: 500 milliSeconds during:
		[self
			resultForContextSlice: slice
			ifLeaf: [:leafResult | self detailsTextForResult: leafResult fromRoot: slice]
			ifParent: [:allLeafs | self detailsTextForLeaves: allLeafs fromRoot: slice]].
	
	"Safeguard - must not return proxies to view! This might blow up to the image. Poor man's Text validation."
	(thisContext objectClass: text) isTdbProxyClass ifTrue: [^ self errorText: 'display error (escalated)' exception: 'unresolved proxy!'].
	"text isText ifTrue:
		[[text asMorph imageForm] on: self commonErrors do: [:ex | ^ self errorText: 'display error (escalated)' exception: ex]]."
	
	^ text