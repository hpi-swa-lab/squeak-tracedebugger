self-updating
installDependencies
	"Install most important dependencies. Metacello>>#get is not recursive."

	Metacello new
		baseline: 'SimulationStudio';
		repository: 'github://LinqLover/SimulationStudio/packages';
		get;
		load: #('SimulationStudio-Base' 'SimulationStudio-Support' 'SimulationStudio-Tests-Base').