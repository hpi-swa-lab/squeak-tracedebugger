toolbuilder
labelString

	^ 'History of {1}' format:
		{[self object printString]
			on: TDBRetracingFrayOut do: [:ex | self errorText: #'fray out' exception: ex slice]
			on: self commonErrors do: [:ex | self errorText: #'printString error' exception: ex]}