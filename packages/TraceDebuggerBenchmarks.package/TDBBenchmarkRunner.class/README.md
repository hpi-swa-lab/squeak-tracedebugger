I adapt a collection of TDBBenchmarks into the SUnit framework in order to run them on the CI. My special highlight is that I can export all benchmark results into a JSON file that can be processed by the Continuous Benchmarking extension for GitHub Actions <https://github.com/marketplace/actions/continuous-benchmark>. See also the `benchmarks` job in: https://github.com/hpi-swa-lab/squeak-tracedebugger/blob/main/.github/workflows/tests.yml

My class side also provides some rudimentary utilities for *bulk running* of benchmarks or collecting and visualizing *historic data* from the CI database in the image.

For a list of design issues about the TraceDebuggerBenchmark framework, see TDBBenchmark comment.