tests - exclusions
testExcludeReceiverClasses

	filter excludedReceiverClasses: {LargePositiveInteger. SqNumberParser}.
	self shouldExcludeReceiver: LargePositiveInteger.
	self shouldntExcludeReceiver: LargeNegativeInteger.
	self shouldntExcludeReceiver: Fraction.
	self shouldExcludeReceiver: SqNumberParser.
	self shouldntExcludeReceiver: ExtendedNumberParser.
	self shouldntExcludeReceiver: NumberParser.