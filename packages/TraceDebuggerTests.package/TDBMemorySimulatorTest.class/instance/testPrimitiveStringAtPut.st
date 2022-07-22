tests - primitives
testPrimitiveStringAtPut

	| string |
	simulator shouldIsolate: true.
	
	string := 'aaa' copy.
	self assert: 'axy' allButFirst equals:
		(simulator evaluate:
			[self shouldRaiseError: [string at: self put: 1].
			self shouldRaiseError: [string at: 1 put: self].
			string at: 2 put: $x asciiValue.
			string at: 3 put: $y.
			string copy]) allButFirst.
	string at: 1 put: $a; flag: #workaround. "https://github.com/OpenSmalltalk/opensmalltalk-vm/issues/636. also applies to the #allButFirst above!"
	self assert: 'aaa' equals: string.