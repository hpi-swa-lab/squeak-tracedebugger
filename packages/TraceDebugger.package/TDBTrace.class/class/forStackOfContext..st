instance creation
forStackOfContext: aContext

	| root |
	aContext tdbStack contents reversed
		inject: nil
		into: [:parent :current | parent
			ifNil: [root := self forContext: current]
			ifNotNil: [parent atTime: 0 putChild:
				(self forContext: current parent: parent timeIndex: 0)]].
	^ root