baseline
baseline: spec
	<baseline>

	spec for: #common do: [
		"dependencies"
		spec
			package: 'Benchmark' with: [
				spec
					file: 'Benchmark-tfel.38';
					repository: 'https://www.hpi.uni-potsdam.de/hirschfeld/squeaksource/BenchmarkRunner/'];
			baseline: 'SimulationStudio' with: [
				spec
					repository: 'github://LinqLover/SimulationStudio/packages';
					loads: #('SimulationStudio-Base' 'SimulationStudio-Tools' "help mentions #exploreProtocol")];
			project: 'SimulationStudio-Support' copyFrom: 'SimulationStudio' with: [
				spec loads: 'SimulationStudio-Support'];
			project: 'SimulationStudio-Tests' copyFrom: 'SimulationStudio-Support' with: [
				spec loads: #('SimulationStudio-Tests-Base' 'SimulationStudio-Support')];
			baseline: 'SBE' with: [
				spec
					repository: 'github://hpi-swa-lab/SqueakByExample-english/SmalltalkSources';
					loads: #'SBE-Extract'];
			baseline: 'StatisticsWorkbench' with: [
				spec repository: 'github://hpi-swa-teaching/StatisticsWorkbench:dev/packages'].
		
		"packages"
		spec
			package: 'TraceDebugger' with: [
				spec requires: 'SimulationStudio'];
			package: 'TraceDebuggerTests' with: [
				spec requires: #('TraceDebugger' 'SimulationStudio-Tests')];
			package: 'TraceDebuggerBenchmarks' with: [
				spec requires: #('TraceDebugger' 'Benchmark' 'SimulationStudio-Support' "'StatisticsWorkbench'" "optional dependency of gen1 benchmarks")];
			package: 'TraceDebuggerJobs' with: [
				spec requires: #('TraceDebugger' 'SBE')].
		
		"groups"
		spec
			group: #default with: #(full);
			group: #benchmarks with: #('TraceDebuggerBenchmarks');
			group: #full with: #('TraceDebugger' 'TraceDebuggerTests' 'TraceDebuggerBenchmarks');
			group: #fullBenchmarks with: #(full 'StatisticsWorkbench' "with optional dependencies");
			group: #fullWithoutBenchmarks with: #('TraceDebugger' 'TraceDebuggerTests');
			group: #minimal with: #('TraceDebugger');
			group: #tests with: #('TraceDebuggerTests')].