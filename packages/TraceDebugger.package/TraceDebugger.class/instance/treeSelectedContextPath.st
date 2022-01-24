accessing - toolbuilder
treeSelectedContextPath

	^ self selectedContextPath tdbproxyYourself
		collect: [:context | context tdbproxyYourself]