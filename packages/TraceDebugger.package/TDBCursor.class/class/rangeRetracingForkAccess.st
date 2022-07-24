documentation
rangeRetracingForkAccess

	"Currently, access from the simulated code to stored context instances from its stack might fail when the execution has been forked before. A prominent example of this limitation are non-local returns within an unwind context (#aboutToReturn:through:). See https://github.com/hpi-swa-lab/squeak-tracedebugger/issues/90."