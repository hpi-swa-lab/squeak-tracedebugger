private
editContents: aStringOrText

	self changed: #editString with: aStringOrText.
	
	self
		changed: #annotation;
		flag: #workaround. "We have multiple text views, restore the annotation text. In a better world, we would do changed: #editString with: aStringOrText with: #contents or something along these lines above."