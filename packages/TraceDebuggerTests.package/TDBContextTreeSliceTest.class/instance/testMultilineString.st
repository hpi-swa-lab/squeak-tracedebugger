tests - printing
testMultilineString

	self assert: '#(#a1 #a11):
	#(#a111 #a1111):
		#(1)
	#(#a112):
		#(#a1121):
			#(2)
			#(3)
	#(4)' equals: treeSlice multilineString.