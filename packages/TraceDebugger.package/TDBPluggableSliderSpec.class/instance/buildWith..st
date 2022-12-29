building
buildWith: builder

	self flag: #forLater. "slider convenience features:
	* enablement
	* keyboard control
	* colors depending on mouse over
	* ..."
	
	^ builder buildTDBPluggableSlider: self