baseline
baseline: spec
	<baseline>

	spec for: #common do: [
		"dependencies"
		spec
			package: 'JSON' with: [
				spec repository: 'https://www.squeaksource.com/PostgresV3'];
			baseline: 'SimulationStudio' with: [
				spec
					repository: 'github://LinqLover/SimulationStudio/packages';
					loads: #('SimulationStudio-Base')].
		
		"packages"
		spec
			package: 'TraceDebugger' with: [
				spec requires: 'SimulationStudio'];
			package: 'TraceDebuggerTests' with: [
				spec requires: 'TraceDebugger'];
			package: 'TraceDebuggerBenchmarks' with: [
				spec requires: #('TraceDebugger' 'JSON')].
		
		"groups"
		spec
			group: #default with: #('TraceDebugger' 'TraceDebuggerTests' 'TraceDebuggerBenchmarks');
			group: #minimal with: #('TraceDebugger');
			group: #tests with: #('TraceDebuggerTests')].