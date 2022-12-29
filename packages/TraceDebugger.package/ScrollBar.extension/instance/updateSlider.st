*TraceDebugger-UI-ToolBuilder-updating-override
updateSlider

	| imagesNeedUpdate |
	imagesNeedUpdate := upButton width ~= (self orientation == #horizontal ifTrue: [self height] ifFalse: [self width]).
	
	self menuButton
		visible: (self orientation == #horizontal or: [self class scrollBarsWithoutMenuButton]) not;
		disableLayout: self menuButton visible not;
		bounds: self boundsForMenuButton.
	self upButton
		visible: self class scrollBarsWithoutArrowButtons not;
		disableLayout: self upButton visible not;
		bounds: self boundsForUpButton.
	self downButton
		visible: self class scrollBarsWithoutArrowButtons not;
		disableLayout: self downButton visible not;
		bounds: self boundsForDownButton.

	"<-- TraceDebugger (pluggableSlider cs)"
	self orientation == #horizontal
		ifTrue: [slider height: self totalSliderArea height]
		ifFalse: [slider width: self totalSliderArea width].
	self expandSlider.
	sliderShadow bounds: slider bounds.
	pagingArea bounds: self totalSliderArea.
	self computeSlider.
	"<-- TraceDebugger"

	imagesNeedUpdate ifTrue: [
		self menuButton visible ifTrue: [self updateMenuButtonImage].
		self upButton visible ifTrue: [self updateUpButtonImage].
		self downButton visible ifTrue: [self updateDownButtonImage]].