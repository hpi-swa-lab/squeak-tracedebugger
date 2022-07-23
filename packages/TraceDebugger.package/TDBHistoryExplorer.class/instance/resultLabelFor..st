labels & details
resultLabelFor: aMaybeResult

	^ aMaybeResult hasError
		ifTrue:
			[[aMaybeResult error in: [:error | self errorLabelFor: error]]
				on: TDBRetracingFrayOut
				do: [:ex | self errorText: 'error text fray out' frayOut: ex]]
		ifFalse:
			[[aMaybeResult result in: [:value | self valueLabelFor: value]]
				on: TDBRetracingFrayOut
				do: [:ex | self errorTextForFrayOut: ex]]