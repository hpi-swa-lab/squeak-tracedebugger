screenshots
createFindContext

	self recorder writeTo: 'screenshots/findContext.png'building: [:helper |
		| window debugger |
		[4 / 6] debugTrace.
		window := helper foregroundWindow.
		debugger := window model.
		window extent: 500 @ 350.
		debugger stepInto; stepOver.
	
		helper runModal: [debugger findContext] then:
			[helper type: 'number' into: helper dialogWindow.
			helper dialogWindow paneMorph extent:
				(helper dialogWindow paneMorph extent * (1 @ 0.5)).
			helper takeScreenshotOf: helper dialogWindow]]