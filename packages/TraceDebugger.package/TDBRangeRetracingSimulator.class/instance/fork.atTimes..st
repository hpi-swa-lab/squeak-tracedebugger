forking
fork: aContext atTimes: newTimeIndices
	"Create and answer a copy of aContext and its simulation stack that is linked to a new fork of the receiver."

	| forkedSimulator relevantBottom forkedContext forkedContextCopies originalContext |
	forkedSimulator := self forkAtTimes: newTimeIndices.
	
	relevantBottom := aContext findContextSuchThat: [:ctx | (ctx matchesSimulationContext: aContext) not].
	forkedContext := aContext copyTo: relevantBottom.
	forkedContextCopies := forkedSimulator contextCopies ifNil: [IdentityDictionary new].
	originalContext := aContext.
	(forkedContext findContextSuchThat: [:ctx |
		forkedContextCopies at: originalContext put: ctx.
		originalContext := originalContext sender.
		ctx simulator: forkedSimulator.
		ctx isBottomContext])
			privSender: relevantBottom.
	forkedSimulator contextCopies: forkedContextCopies.
	
	^ forkedContext