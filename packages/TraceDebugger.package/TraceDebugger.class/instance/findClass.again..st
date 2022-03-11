private
findClass: aClass again: again

	^ self
		findContextPerforming: #findContextForClass:startingAtTime:
		with: aClass
		again: again