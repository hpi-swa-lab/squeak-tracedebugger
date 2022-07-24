*TraceDebugger-UI-model access-override
getIcon

	| newIcon |
	newIcon := complexContents icon.
	
	(thisContext objectClass: newIcon) isTdbProxyClass ifTrue: "<-- TraceDebugger"
		[self flag: #proxyHacks.
		newIcon := newIcon copy tdbproxyYourself].
	
	^ newIcon