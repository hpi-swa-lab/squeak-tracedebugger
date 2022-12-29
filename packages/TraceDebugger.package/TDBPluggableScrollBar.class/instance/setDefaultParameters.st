initialization
setDefaultParameters
	"Cosmectic updates to look more like a regular widget."

	super setDefaultParameters.
	
	"Compared to generic sliders, I am not my own paging area. Thus, make me transparent."
	self
		color: Color transparent;
		borderWidth: 0.

	pagingArea
		color: (self userInterfaceTheme color ifNil: [Color veryVeryLightGray darker alpha: 0.35]);
		borderStyle: ((self userInterfaceTheme theme get: #borderStyle for: #PluggableButtonMorph) ifNil: [BorderStyle default]) copy;
		borderColor: ((self userInterfaceTheme theme get: #borderColor for: #PluggableButtonMorph) ifNil: [Color gray]);
		borderWidth: (((self userInterfaceTheme theme get: #borderWidth for: #PluggableButtonMorph) ifNil: [1]) * RealEstateAgent scaleFactor) truncated.

	slider
		color: ((self userInterfaceTheme theme get: #color for: #PluggableButtonMorph) ifNil: [Color gray: 0.91]);
		borderStyle: ((self userInterfaceTheme theme get: #borderStyle for: #PluggableButtonMorph) ifNil: [BorderStyle default]) copy;
		borderColor: ((self userInterfaceTheme theme get: #borderColor for: #PluggableButtonMorph) ifNil: [Color gray]);
		borderWidth: (((self userInterfaceTheme theme get: #borderWidth for: #PluggableButtonMorph) ifNil: [1]) * RealEstateAgent scaleFactor) truncated.
	
	self updateSliderCornerStyle.
	
	sliderShadow
		cornerStyle: slider cornerStyle;
		borderWidth: slider borderWidth;
		borderColor: Color transparent.
	
	sliderColor := slider color.
	self updateSliderColor: slider color.