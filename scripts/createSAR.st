"Generate a SAR file of all relevant packages to install SimulationStudio.
NOTE: Make sure to run this script in an image of the target Squeak version, e.g., in a Squeak 6.0 image to create a squeak60 SAR file."

| name spec packageNames firstPackageNames zip preamble postscript |
name := 'TraceDebugger'.
spec := #('fullWithoutBenchmarks').

packageNames := (((MetacelloToolBox baselineNamed: name) project version: 'baseline')
	allPackagesForSpecNamed: spec)
		collect: #name.
packageNames := packageNames copyWithoutAll: MCRepository trunk allPackageNames.
firstPackageNames := #(). "To overcome cyclic dependencies, define any starter packages manually"
packageNames := firstPackageNames , ((packageNames copyWithoutAll: firstPackageNames)
	topologicallySortedUsing: [:a :b | ((DependencyBrowser new selectPackage: a; packageDeps) includes: b) not]). "O(n**2) bust fast enough for now"

zip := ZipArchive new.
preamble := String streamContents: [:preambleStream |
	preambleStream
		nextPutAll: '| loader |
loader := MCVersionLoader new.';
		cr.
	packageNames do: [:packageName | | package version stream  |
		package := MCPackage named: packageName.
		version := MCVersion
			package: package
			info: package workingCopy ancestry ancestors first.
		stream := RWBinaryOrTextStream on: (String new: 10000).
		version fileOutOn: stream.
		(zip addString: stream contents as: packageName, '.mcz') desiredCompressionLevel: 0.
		preambleStream
			nextPutAll: 'loader addVersion: (MCMczReader versionFromStream: (self memberNamed: ''';
			nextPutAll: packageName;
			nextPutAll: '.mcz'') contentStream).';
			cr].
	preambleStream nextPutAll: 'loader load.'].
zip addString: preamble as: 'install/preamble'.
postscript := 'TraceDebugger basicSelfUpdateBranch: {1}.' format: {TraceDebugger selfUpdateBranch printString}.
zip addString: postscript as: 'install/postscript'.
zip writeToFileNamed: ('{1}.sar' format: {name}).
