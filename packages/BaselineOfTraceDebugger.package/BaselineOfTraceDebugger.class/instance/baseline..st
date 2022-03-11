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
					loads: 'SimulationStudio-Base'];
			project: 'SimulationStudio-Support' copyFrom: 'SimulationStudio' with: [
				spec loads: 'SimulationStudio-Support'];
			project: 'SimulationStudio-Tests' copyFrom: 'SimulationStudio-Support' with: [
				spec loads: #('SimulationStudio-Tests-Base' 'SimulationStudio-Support')];
			baseline: 'StatisticsWorkbench' with: [
				spec
					repository: 'github://hpi-swa-teaching/StatisticsWorkbench:dev/packages'].
		
		"packages"
		spec
			package: 'TraceDebugger' with: [
				spec requires: 'SimulationStudio'];
			package: 'TraceDebuggerTests' with: [
				spec requires: #('TraceDebugger' 'SimulationStudio-Tests')];
			package: 'TraceDebuggerBenchmarks' with: [
				spec requires: #('TraceDebugger' 'JSON' 'SimulationStudio-Support' 'StatisticsWorkbench')].
		
		"groups"
		spec
			group: #default with: #(full);
			group: #full with: #('TraceDebugger' 'TraceDebuggerTests' 'TraceDebuggerBenchmarks');
			group: #minimal with: #('TraceDebugger');
			group: #tests with: #('TraceDebuggerTests')].