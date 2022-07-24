*TraceDebugger-UI-support
tdbAbortRequest
	"Abort the current request by terminating the process and scheduling a new one, if required. This method will not return! Overall, this is a large workaround for flows that do not support graceful abortion."

	Project current spawnNewProcessIfThisIsUI: Processor activeProcess.
	Processor activeProcess terminate.
	^ nil