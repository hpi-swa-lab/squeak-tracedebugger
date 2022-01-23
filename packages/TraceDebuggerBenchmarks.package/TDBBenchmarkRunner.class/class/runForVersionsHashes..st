bulk running
runForVersionsHashes: versionHashes
	"Run all benchmarks for each of the specified version hashes (aka commit SHAs) and export the results for each version in a separate file. You may check in these results into the github-action-benchmark- database for GitHub pages by passing these files to the run_local.ts script, see: https://github.com/benchmark-action/github-action-benchmark/pull/99"

	| versions workingCopy benchmarksSnapshot |
	workingCopy := (Smalltalk classNamed: #SquotWorkingCopy) registered
		detect: [:ea | ea name = #TraceDebugger].
	versions := versionHashes collect: [:hash | workingCopy repository versionAt: hash].
	benchmarksSnapshot := TDBBenchmarkRunner packageInfo mcPackage snapshot.
	
	Transcript openIfNone.
	versions
		do: [:version | | runner |
			workingCopy loadVersion: version interactive: false.
			benchmarksSnapshot install.
			runner := self newDefault
				resultsFilePath: ('benchmark-results-{1}.json' format: {version hexHash});
				yourself.
			Transcript showln: 'Runner result:'; show: runner run]
		displayingProgress: [:version | 'Running benchmarks for {1}' format: {version}].