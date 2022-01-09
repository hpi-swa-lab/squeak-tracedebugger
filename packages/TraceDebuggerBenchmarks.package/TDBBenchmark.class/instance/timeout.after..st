private
timeout: aBlock after: aDuration

	^ aBlock
		valueWithin: aDuration
		onTimeout: [self error: 'Benchmark timed out']