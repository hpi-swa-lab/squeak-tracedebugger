toolbuilder - private
computeViewPropertyString: aBlock
	
	^ self computeViewProperty: aBlock ifError: [:msg | '<model error: {1}>' format: {msg}]