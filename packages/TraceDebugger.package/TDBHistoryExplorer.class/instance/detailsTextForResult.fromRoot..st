labels & details
detailsTextForResult: aMaybeResult fromRoot: rootContextSlice

	| text |
	text := aMaybeResult hasError
		ifTrue:
			[[aMaybeResult error in: [:error | self errorLabelFor: error]]
				on: TDBRetracingFrayOut
				do: [:ex | self errorText: 'error text fray out' frayOut: ex]]
		ifFalse:
			[[aMaybeResult result in: [:resultValue |
				[| value |
				value := self prepareRetracedValue: resultValue.
				self detailsTextForValue: value]
					on: self commonErrors
					do: [:ex | self errorText: 'display error' exception: ex]]]
				on: TDBRetracingFrayOut do: [:ex |
					self detailsTextForFrayOut: ex fromRoot: rootContextSlice]].
	
	text := self postpareRetracedText: text.
	
	^ text