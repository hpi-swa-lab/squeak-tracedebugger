tests - exclusions
testExcludeReceiverClass

	filter excludeReceiverClass: LargePositiveInteger.
	self shouldExcludeReceiver: LargePositiveInteger.
	self shouldntExcludeReceiver: LargeNegativeInteger.
	self shouldntExcludeReceiver: Fraction.