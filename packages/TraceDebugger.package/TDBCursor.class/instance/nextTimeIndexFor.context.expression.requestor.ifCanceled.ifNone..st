*TraceDebugger-UI-extensions
nextTimeIndexFor: anObject context: aContext expression: aStringOrNil requestor: requestorOrNil ifCanceled: cancelBlock ifNone: exceptionBlock
	"Find the time for the next change after the receiver's current time in the result of evaluating the expression, aStringOrNil, against anObject for aContext changes in comparison with the current time.
	NOTE that this method does NOT advance the trace but only searches the existing history."

	| historyExplorer memorySlice currentInterval nextInterval |
	historyExplorer := self
		historyExplorerOn: anObject
		context: aContext
		expression: aStringOrNil
		requestor: requestorOrNil.
	historyExplorer ifNil: [^ cancelBlock value].
	memorySlice := historyExplorer memorySlice.
	self flag: #dependencies. "Discuss consequences on package dependencies. Should the cursor be able for state-centric queries without UI? Do we need to split up the history explorer?"
	self flag: #reuse. "We could delegate stepping to the history explorer if we implement #selectContextSliceForTimeIndex: there. On the other hand, this would intensify the coupling to the history explorer (see note above), and maybe a low-level scheduling approach will be implemented in the future anyway (see note below).
	Once we implement custom scheduling schemes, discuss whether the history explorer should provide a protocol for them or whether a separate implementation makes sense again then."
	
	currentInterval := (memorySlice associationAtTime: self timeIndex)
		key.
	nextInterval := (memorySlice
		associationAtTime: currentInterval stop + 1
		ifAbsent: [^ exceptionBlock value])
			key.
	^ nextInterval start