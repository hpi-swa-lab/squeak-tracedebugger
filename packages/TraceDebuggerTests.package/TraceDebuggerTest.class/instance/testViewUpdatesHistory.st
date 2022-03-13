tests
testViewUpdatesHistory

	self
		runDebuggerFrom: (Context
			sender: nil
			receiver: TDBTestLogic new
			method: TDBTestLogic >> #plonkPlus
			arguments: #())
		assertionsAndSteps:
			#((plonkPlus nil (plonkPlus))
			(stepOver stepInto)
			(wiffyPlus ':= 1' (plonkPlus (wiffyPlus)) (() ('x' 'nil' 'y' 'nil' 'stack3' '1')))
			(stepOver stepOver)
			(wiffyPlus '+ y' (plonkPlus (wiffyPlus)) (() ('x' '1' 'y' '2' 'stack3' '1' 'stack4' '2')))
			(stepBack)
			(wiffyPlus ':= 2' (plonkPlus (wiffyPlus)) (() ('x' '1' 'y' 'nil' 'stack3' '2' 'ThisContext size' '3')))
			(stepOver stepOver stepOver stepOver)
			(plonkPlus 'yourself' (plonkPlus (wiffyPlus) (ziffy)))
			(stepBack stepInto)
			(ziffy '* 7' (plonkPlus (wiffyPlus) (ziffy)) ((self 'a TDBTestLogic') ('stack1' '6' 'stack2' '7')))
			(stepOver stepOver)
			(plonkPlus 'yourself' (plonkPlus (wiffyPlus) (ziffy)) (() ('stack1' 'a TDBTestLogic')))).