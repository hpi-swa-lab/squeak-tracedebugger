preferences
useProxiesAlways
	<preference: 'Use proxies always'
		categoryList: #('Trace Debugger' debug)
		description: 'If enabled, every lookup of an object in the historic memory of Trace Debugger will answer a transparent proxy. This decreases overall performance but allows for massive smoke testing.'
		type: #Boolean>

	^ UseProxiesAlways