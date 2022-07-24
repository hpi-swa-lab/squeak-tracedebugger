private
computeSliceFrom: aStringOrText for: requestor

	| block |
	block := self
		compileToBlock: aStringOrText
		requestor: requestor
		ifFail: [^ false].
	
	memorySlice := Cursor wait showWhile:
		[self cursor object: self object collect: [:ea |
			TDBMaybeResult catch: self commonErrors during: [block value: ea]]].
	"memorySlice publicCoalesce: [:a :b | a tdbContentEquals: b]." "Depends on https://github.com/hpi-swa-lab/squeak-tracedebugger/pull/86"
	memorySlice halt publicCoalesce: [:a :b |
		[a hasError = b hasError
			and: [a error = b error]
			and:
				[a result isForm
					ifTrue:
						[(a result in: [:it | {it width. it height. it depth. it bits hash}]) tdbproxyYourself
							= (b result in: [:it | {it width. it height. it depth. it bits hash}]) tdbproxyYourself]
					ifFalse:
						[a tdbproxyYourself result = b tdbproxyYourself result
							and: [a isText ==> [b isText and: [a runs hash = b runs hash]]]]]]
			on: TDBRetracingFrayOut, (Error, Warning, Halt) do: [false]].
	self flag: #hacked. "Compare proxies and use custom comparer for Forms/Texts etc."
	self changed: #memorySlice.
	
	^ true