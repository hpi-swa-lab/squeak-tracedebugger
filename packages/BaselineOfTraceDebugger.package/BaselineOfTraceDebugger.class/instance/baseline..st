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
					loads: #('SimulationStudio-Base' 'SimulationStudio-Support' 'SimulationStudio-Tests-Base');
					flag: #(workaround) "Support is only required for Tests & Benchmarks, and Tests-Base is only required for Tests. But at the moment, we seem to lack a protocol for specifying this exact relationship. See: https://github.com/Metacello/metacello/issues/551"];
			baseline: 'StatisticsWorkbench' with: [
				spec
					repository: 'github://hpi-swa-teaching/StatisticsWorkbench:dev/packages'].
		
		"packages"
		spec
			package: 'TraceDebugger' with: [
				spec requires: 'SimulationStudio'];
			package: 'TraceDebuggerTests' with: [
				spec requires: 'TraceDebugger'];
			package: 'TraceDebuggerBenchmarks' with: [
				spec requires: #('TraceDebugger' 'JSON' 'StatisticsWorkbench')].
		
		"groups"
		spec
			group: #default with: #('TraceDebugger' 'TraceDebuggerTests' 'TraceDebuggerBenchmarks');
			group: #minimal with: #('TraceDebugger');
			group: #tests with: #('TraceDebuggerTests')].