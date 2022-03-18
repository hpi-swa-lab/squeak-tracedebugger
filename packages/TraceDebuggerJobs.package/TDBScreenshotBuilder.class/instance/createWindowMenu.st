screenshots
createWindowMenu

	self recorder writeTo: 'screenshots/windowMenu.png' frame: [:bounds | bounds * (0.7 @ 0 rect: 1 @ 0.64)] building: [:helper |
		| window button |
		helper worldColor: Color transparent.
		[4 / 6] debugTrace.
		window := helper foregroundWindow.
	
		button := window allMorphs detect: [:m | (m isKindOf: SystemWindowButton) and: [m balloonText = 'window menu']].
		helper click: button.
		helper menu topRight: button bottomRight.
		helper closeBalloons.
		helper mouseEnter: (helper menuItemMorphLabeled: 'send feedback*' in: helper menu).
		helper spawnHand]