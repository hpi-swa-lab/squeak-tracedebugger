baseline
baseline: spec
	<baseline>

	spec for: #common do: [
		"dependencies"
		spec
			baseline: 'SimulationStudio' with: [
				spec repository: 'github://LinqLover/packages'].
		
		"packages"
		spec
			package: 'TraceDebugger' with: [
				spec requires: 'SimulationStudio'];
			package: 'TraceDebuggerTests' with: [
				spec requires: 'TraceDebugger'].
		
		"groups"
		spec
			group: #default with: #('TraceDebugger' 'TraceDebuggerTests');
			group: #minimal with: #('TraceDebugger');
			group: #tests with: #('TraceDebuggerTests')].