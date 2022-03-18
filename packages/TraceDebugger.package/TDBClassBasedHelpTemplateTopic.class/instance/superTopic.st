accessing
superTopic

	^ (self as: self class superclass)
		helpClass: self helpClass superclass;
		yourself