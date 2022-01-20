window.BENCHMARK_DATA = {
  "lastUpdate": 1642705632507,
  "repoUrl": "https://github.com/LinqLover/squeak-tracedebugger",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Christoph Thiede",
            "username": "LinqLover",
            "email": "christoph.thiede@student.hpi.de"
          },
          "committer": {
            "name": "Christoph Thiede",
            "username": "LinqLover",
            "email": "christoph.thiede@student.hpi.de"
          },
          "id": "92c6ede5e70ea32ac8d9eb6692930c12fc061839",
          "message": "Add first version of tracer & cursor for stack frames. Memory not yet connected. Extend & refactor UI. Comprehensive integration & acceptance tests.",
          "timestamp": "2021-12-30T20:19:06Z",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/92c6ede5e70ea32ac8d9eb6692930c12fc061839"
        },
        "date": 1642705592293,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7936,
            "unit": "Milliseconds",
            "range": "stdev: 877.9310906899243",
            "extra": "{\"totalTime\":7936.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8922.0,7239.0,7647.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 97.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 7.0945988845975885",
            "extra": "{\"totalTime\":98.0,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[99.0,104.0,90.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 16488.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 772.036484457395",
            "extra": "{\"totalTime\":16724.333333333332,\"preparationTime\":235.66666666666666,\"singleTimesToRun\":[17373.0,15949.0,16144.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 30361.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 482.6689686869598",
            "extra": "{\"totalTime\":30625.0,\"preparationTime\":263.3333333333333,\"singleTimesToRun\":[30081.0,30919.0,30085.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Christoph Thiede",
            "username": "LinqLover",
            "email": "christoph.thiede@student.hpi.de"
          },
          "committer": {
            "name": "Christoph Thiede",
            "username": "LinqLover",
            "email": "christoph.thiede@student.hpi.de"
          },
          "id": "0e262ee2533621ceb6e04df878f83890d0a05d1a",
          "message": "Add example debugging entrypoints",
          "timestamp": "2021-12-30T20:19:18Z",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/0e262ee2533621ceb6e04df878f83890d0a05d1a"
        },
        "date": 1642705577713,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2556,
            "unit": "Milliseconds",
            "range": "stdev: 56572.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":2556.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 4806,
            "unit": "Milliseconds",
            "range": "stdev: 37821.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":4806.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 70520,
            "unit": "Milliseconds",
            "range": "stdev: 51925.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":1435.6666666666667,\"totalTime\":71955.66666666667}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 30946.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 5.126732333333333e6",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":339.0,\"totalTime\":31285.333333333332}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Christoph Thiede",
            "username": "LinqLover",
            "email": "christoph.thiede@student.hpi.de"
          },
          "committer": {
            "name": "Christoph Thiede",
            "username": "LinqLover",
            "email": "christoph.thiede@student.hpi.de"
          },
          "id": "ad28c530425b6974664c7cd7fc194c874c0d4f7e",
          "message": "Systematic optimizations\n\n* TDBContextProxy\n* Object dispatch for proxy creation (#asTdbProxyInMemory:atTime:)\n* Caches: TDBCursor >> #trace, TraceDebugger >> #childContextsFor:\n* TDBTrace >> #traceAtTime:ifAbsent:: twice as fast inline search, also added test",
          "timestamp": "2021-12-31T01:53:34Z",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/ad28c530425b6974664c7cd7fc194c874c0d4f7e"
        },
        "date": 1642705610511,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7273.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 16.19670748434179",
            "extra": "{\"totalTime\":7273.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[7284.0,7282.0,7255.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5480,
            "unit": "Milliseconds",
            "range": "stdev: 99.45350672550465",
            "extra": "{\"totalTime\":5480.333333333333,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[5591.0,5399.0,5450.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 96.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 5.033222956847167",
            "extra": "{\"totalTime\":96.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[97.0,91.0,101.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 12353.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1293.4238799919126",
            "extra": "{\"totalTime\":12706.333333333334,\"preparationTime\":353.0,\"singleTimesToRun\":[11262.0,13782.0,12016.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3703,
            "unit": "Milliseconds",
            "range": "stdev: 168.86681142249356",
            "extra": "{\"totalTime\":3817.0,\"preparationTime\":114.0,\"singleTimesToRun\":[3817.0,3783.0,3509.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1326.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 47.258156262526086",
            "extra": "{\"totalTime\":1443.3333333333333,\"preparationTime\":116.66666666666667,\"singleTimesToRun\":[1310.0,1290.0,1380.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Christoph Thiede",
            "username": "LinqLover",
            "email": "38782922+LinqLover@users.noreply.github.com"
          },
          "committer": {
            "name": "Christoph Thiede",
            "username": "LinqLover",
            "email": "38782922+LinqLover@users.noreply.github.com"
          },
          "id": "afc45a3039c3299a729a7358fe1c4d4e4919fc44",
          "message": "Update README.md with a current progress and basic usage instructions.",
          "timestamp": "2022-01-07T18:21:18Z",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/afc45a3039c3299a729a7358fe1c4d4e4919fc44"
        },
        "date": 1642705624578,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2629,
            "unit": "Milliseconds",
            "range": "stdev: 366163.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":2629.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1098.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 7625.333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.3333333333333333,\"totalTime\":1099.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 4846,
            "unit": "Milliseconds",
            "range": "stdev: 684451.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.3333333333333333,\"totalTime\":4846.333333333333}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 4926.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 184550.33333333334",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":322.6666666666667,\"totalTime\":5249.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1343.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 21401.333333333332",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":175.0,\"totalTime\":1518.3333333333333}"
          }
        ]
      }
    ]
  }
}