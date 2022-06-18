tests
testNonLocalReturn
	"Forked context closures need to be isolated from each other."

	self
		assertQuery:
			[{thisContext tdbRetracingTimeIndex}
				anySatisfy: [:ea | ea even]
			"See non-local return in Collection>>#anySatisfy:"]
		values: {true. false. true. false. true}.