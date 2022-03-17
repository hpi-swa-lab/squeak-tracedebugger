*TraceDebugger-Core-proxies-accessing
tdbproxyYourself
	"Unwrap the receiver from any TDBProxy. Any further messages sent to the result will look at the current in-image state of the receier rather than in the emulated historic state space."

	^ self