private
spawnModel: proxyHolderClass on: anObject

	| proxyHolder view |
	proxyHolder := proxyHolderClass on: anObject cursor: self cursor.
	view := ToolBuilder open: proxyHolder.
	^ self decorateView: view forObject: anObject