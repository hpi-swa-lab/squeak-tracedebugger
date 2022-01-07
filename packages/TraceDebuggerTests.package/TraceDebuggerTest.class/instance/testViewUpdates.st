tests
testViewUpdates

	self
		runDebuggerFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #plonk
			arguments: #())
		assertionsAndSteps:
			(#((plonk nil (plonk ()))
			(stepInto stepInto)
			(wiffy 'wiffy1' (plonk (wiffy ())))
			(stepOver stepInto)
			(wiffy2 '^ 3' (plonk (wiffy (wiffy2 ()))))
			(stepInto stepThrough stepThrough)
			(plonk 'ziffy' (plonk (wiffy (wiffy2 ()))))
			(stepThrough)
			(plonk 'yourself' (plonk (wiffy (wiffy2 ()) (ziffy ())))))).