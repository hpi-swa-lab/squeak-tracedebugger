*TraceDebugger-UI-extensions
promptedTimeIndexFor: anObject context: aContext expression: aStringOrNil requestor: requestorOrNil ifCanceled: cancelBlock
	"Find all historic changes in the result of evaluating the expression, aStringOrNil, against anObject for aContext changes. Ask the user for one of them and answer a corresponding time index."

	| historyExplorer memorySlice currentInterval allLabels intervalsAndLabels labeledIntervals nextInterval |
	historyExplorer := self
		historyExplorerOn: anObject
		context: aContext
		expression: aStringOrNil
		requestor: requestorOrNil.
	historyExplorer ifNil: [^ cancelBlock value].
	memorySlice := historyExplorer memorySlice.
	
	currentInterval := (memorySlice
		associationAtTime: self timeIndex
		ifAbsent: [])
			ifNotNil: [:assoc | assoc key].
	allLabels := Bag new.
	intervalsAndLabels := OrderedDictionary new.
	memorySlice timesAndValuesDo: [:eachInterval :eachValue |
		| label |
		label := historyExplorer resultLabelFor: eachValue.
		allLabels add: label.
		intervalsAndLabels add: eachInterval -> label].
	labeledIntervals := intervalsAndLabels associations
		collect: [:intervalAndLabel |
			((allLabels occurrencesOf: intervalAndLabel value) > 1 "make labels unique by adding time index where necessary"
				ifTrue: ['{1} [@ {2}]' format: {intervalAndLabel value. intervalAndLabel key start}]
				ifFalse: [intervalAndLabel value])
					-> intervalAndLabel key]
		as: OrderedDictionary.
	nextInterval := Project uiManager
		tdbChooseFromLabeledValues: labeledIntervals
		title: ('changes of {1}' format: {aStringOrNil ifNotNil: ['"{1}"' format: {aStringOrNil}] ifNil: ['expression']})
		initialSelection: currentInterval.
	nextInterval ifNil: [^ cancelBlock value].
	^ (memorySlice intervals indexOf: nextInterval) = 1
		ifTrue: [nextInterval stop]
		ifFalse: [nextInterval start]