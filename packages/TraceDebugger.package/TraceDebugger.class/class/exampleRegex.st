examples
exampleRegex
	"
	self exampleRegex
	"

	['\w+' asRegex] debugTrace.
	"['A' matchesRegex: '((?<=^)A)+'] debugTrace."