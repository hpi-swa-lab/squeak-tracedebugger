*TraceDebugger-Core-retracing
tdbRetracingDoForkAll: vectors

	^ vectors do: [:vector | self tdbRetracingDoFork: vector]