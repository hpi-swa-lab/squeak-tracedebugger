private
spawnModel: proxyHolderClass on: anObject

	| proxyHolder view |
	proxyHolder := proxyHolderClass on: anObject debugger: self debugger.
	view := ToolBuilder open: proxyHolder.
	^ self decorateView: view forObject: anObject