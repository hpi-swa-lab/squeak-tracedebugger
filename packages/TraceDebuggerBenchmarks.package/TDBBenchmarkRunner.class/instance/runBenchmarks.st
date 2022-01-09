running
runBenchmarks

	results := Dictionary new.
	
	(1 to: self timesToRepeat)
		do: [:i |
			Transcript showln: ('Running benchmarks (round {1}/{2}):' format: {i. self timesToRepeat}); showln: '---'.
			
			benchmarks shuffled
				do: [:bench | | result |
					Transcript showln: 'Running benchmark: '; show: bench; show: '...'.
					[(result := bench class selector: bench selector) run.
					Transcript show: ' done.']
						on: Error, Warning, Halt
						do: [:ex | Transcript show: ' failed: '; show: ex description].
					Transcript show: ' ('; show: result timeToRun; show: $).
					
					(results at: bench ifAbsentPut: [OrderedCollection new])
						add: result]
				displayingProgress: [:bench | 'Running benchmarks ({1})' format: {bench}].
			
			Transcript showln: '---']
		displayingProgress: [:i | 'Running benchmarks (round {1}/{2})' format: {i. self timesToRepeat}].