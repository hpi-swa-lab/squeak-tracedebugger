tests - primitives
testTdbRetracingTimeIndex

	self assertQuery: [thisContext tdbRetracingTimeIndex] unforkedValues: #(0 1 2 3 4).