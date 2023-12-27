private
interruptedSignalerContextFor: aContext
	"If aContext has just stepped over an unhandled error, answer the causing signaler or signal context. This is the (functional, reversible) equivalent of Debugger>>#handleLabelUpdatesIn:whenExecuting:. The implementation here complements the logic in TDBCursor>>#stepOverUnhandledError:from:until:."

	self hasContextSelected ifFalse: [^ nil].
	self canStepBackward ifFalse: [^ nil].
	
	"Did we just step over an unhandled error from the outside?"
	self latestChildFor: aContext ifPresent: [:latestChild "(potential signaler context)" |
		latestChild tdbIsSignalContext
			ifFalse:
				[(latestChild methodClass theNonMetaClass includesBehavior: Exception)
					ifTrue:
						["Recursive search. Complements Exception>>#signalerContext."
						(self interruptedSignalerContextFor: latestChild)
							ifNotNil: [:signalerContext | ^ signalerContext]]]
			ifTrue:
				[self
					unhandledSignalContextFor: latestChild
					ifFound: [:unhandledSignalContext | ^ latestChild]]].
	
	"Did we just step over an unhandled error inside the signaler of the original exception?"
	((aContext methodClass includesBehavior: Exception) and: [aContext selector = #defaultAction])
		ifTrue:
			[| signalContext |
			signalContext := aContext receiver tdbSignalContext.
			signalContext tdbIsUnhandledSignalContext ifTrue:
				["UnhandledError>>#defaultAction"
				^ signalContext].
			(aContext in: [:c | c isDead not and: [c willReturn]]) ifTrue:
				["Error>>#defaultAction et al."
				self
					unhandledSignalContextFor: signalContext
					ifFound: [:unhandledSignalContext | ^ unhandledSignalContext]]].
	^ nil