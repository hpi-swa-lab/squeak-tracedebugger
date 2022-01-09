historic data
parseHistoricBench: bench

	| meth benchmark |
	meth := CompiledCode readFrom:
		(bench name copyReplaceAll: '>>' with: ' lookupSelector: ').
	benchmark := meth methodClass selector: meth selector.
	
	benchmark privateTimeToRun: bench value milliSeconds.
	bench extra ifNotNil: [
		| extra |
		extra := Json readFrom: bench extra readStream.
		benchmark
			privateTotalTime: extra totalTime milliSeconds;
			privatePreparationTime: extra preparationTime milliSeconds;
			privatePostparationTime: extra postparationTime milliSeconds].
	
	^ benchmark