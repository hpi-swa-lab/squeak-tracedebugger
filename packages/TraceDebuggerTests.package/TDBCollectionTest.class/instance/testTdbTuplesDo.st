tests
testTdbTuplesDo

	self
		should: [:log | #(() () ()) tdbTuplesDo: [log value: nil]]
		send: #(nil nil nil).
	self
		should: [:log | #((1) (2) (3)) tdbTuplesDo: [:x | log value: x]]
		send: #(1 2 3).
	self
		should: [:log | #((1 2) (3 4) (5 6)) tdbTuplesDo: [:x :y | log value: {x. y}]]
		send: #((1 2) (3 4) (5 6)).
	
	#() tdbTuplesDo: [self fail].
	self shouldRaiseError: [#(1 2) tdbTuplesDo: []].
	self shouldRaiseError: [#(1 2) tdbTuplesDo: [:x |]].
	self shouldRaiseError: [#(1 2) tdbTuplesDo: [:x :y |]].
	self shouldRaiseError: [#(1 (2 3)) tdbTuplesDo: [:x |]].
	self shouldRaiseError: [#(1 (2 3)) tdbTuplesDo: [:x :y |]].