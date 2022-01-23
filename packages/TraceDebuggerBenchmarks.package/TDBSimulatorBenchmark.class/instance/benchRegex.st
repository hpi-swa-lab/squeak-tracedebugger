benchmarks
benchRegex

	| string |
	self prepare:
		[| random |
		random := Random seed: 20220108.
		string := String new: self regexStringSize streamContents: [:stream |
			1 to: self regexStringSize do: [:i |
				stream nextPut: (i = (self regexStringSize // 2)
					ifTrue: [$ ]
					ifFalse: [(random nextInt: 255) asCharacter])]]].
	
	simulator evaluate: ['(\w*\s)\w+' asRegex matchesIn: string].