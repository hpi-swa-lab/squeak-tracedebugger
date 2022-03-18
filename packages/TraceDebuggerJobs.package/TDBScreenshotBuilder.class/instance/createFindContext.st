screenshots
createFindContext

	self recorder writeTo: 'screenshots/findContext.png'building: [:helper |
		| window debugger |
		helper worldColor: Color transparent.
		[4 / 6] debugTrace.
		window := helper foregroundWindow.
		debugger := window model.
		window extent: 500 @ 350.
		debugger stepInto; stepOver.
	
		helper runModal: [debugger findContext] then:
			[helper type: 'number' into: helper dialogWindow.
			helper takeScreenshotOf: helper dialogWindow]]