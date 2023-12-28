preferences
useProxiesAlways
	<preference: 'Use proxies always'
		category: 'TraceDebugger'
		description: 'If enabled, every lookup of an object in the historic memory of TraceDebugger will answer a transparent proxy, even if the viewed time is the present. This decreases overall performance but allows for massive smoke testing. Disabling this preference is an experiment.'
		type: #Boolean>

	^ UseProxiesAlways