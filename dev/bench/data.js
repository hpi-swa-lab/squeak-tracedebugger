window.BENCHMARK_DATA = {
  "lastUpdate": 1643247755391,
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
            "email": "christoph.thiede@student.hpi.de"
          },
          "committer": {
            "name": "Christoph Thiede",
            "username": "LinqLover",
            "email": "christoph.thiede@student.hpi.de"
          },
          "id": "c52f1614068c60b7afb3fa71d78bf6f64536bd72",
          "message": "Remove deprecated instance creation messages from TraceDebugger",
          "timestamp": "2022-01-07T18:14:11Z",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/c52f1614068c60b7afb3fa71d78bf6f64536bd72"
        },
        "date": 1642705640932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2656.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 12841.333333333334",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":2656.3333333333335}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1308,
            "unit": "Milliseconds",
            "range": "stdev: 41763.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.3333333333333333,\"totalTime\":1308.3333333333333}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 5052.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 91617.33333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.3333333333333333,\"totalTime\":5053.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 5940,
            "unit": "Milliseconds",
            "range": "stdev: 136471.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":299.6666666666667,\"totalTime\":6239.666666666667}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1522.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 35242.333333333336",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":121.66666666666667,\"totalTime\":1644.0}"
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
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "2e7dbd0dc01fff9266d5f73182e19dfe03f9bfaf",
          "message": "Switch to new benchmark suite",
          "timestamp": "2022-01-20T20:15:35+01:00",
          "tree_id": "7cd2ea4c49b82bb810261bd9468277ac885e1e91",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/2e7dbd0dc01fff9266d5f73182e19dfe03f9bfaf"
        },
        "date": 1642706513260,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 3354.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 890.3333333333334",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":3354.3333333333335}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1478.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2466.3333333333335",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.3333333333333333,\"totalTime\":1478.6666666666667}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 6103.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 5184.333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":6103.666666666667}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 3527.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 5634.333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":168.33333333333334,\"totalTime\":3695.6666666666665}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1903.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 420.3333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":122.0,\"totalTime\":2025.3333333333333}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "6404c4b3e6fa71959692ff7ee78d11b67295ebf1",
          "message": "Redefine benchmarks\n\n- add warm-up ops\n- fix stdev calculation\n- report single times to run\n- reuse latest version of benchmark runner for historic benchmark collection\n- redefine task loads\n- add benchStepInto\n- add sight protection for debugger benchmarks",
          "timestamp": "2022-01-20T20:18:08+01:00",
          "tree_id": "2cb3b19edf3efef4cbf82e889a5cd8e96f27c150",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/6404c4b3e6fa71959692ff7ee78d11b67295ebf1"
        },
        "date": 1642706686795,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7305.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 53.00314456080255",
            "extra": "{\"totalTime\":7305.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7366.0,7268.0,7282.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5135,
            "unit": "Milliseconds",
            "range": "stdev: 88.89881888979178",
            "extra": "{\"totalTime\":5135.666666666667,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[5234.0,5109.0,5062.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 103.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":103.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[105.0,102.0,103.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 6557,
            "unit": "Milliseconds",
            "range": "stdev: 68.78953408767936",
            "extra": "{\"totalTime\":6701.333333333333,\"preparationTime\":144.33333333333334,\"singleTimesToRun\":[6479.0,6583.0,6609.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 922.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 11.718930554164631",
            "extra": "{\"totalTime\":1007.3333333333334,\"preparationTime\":85.0,\"singleTimesToRun\":[931.0,909.0,927.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1413.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 17.925772879665004",
            "extra": "{\"totalTime\":1484.6666666666667,\"preparationTime\":71.33333333333333,\"singleTimesToRun\":[1404.0,1402.0,1434.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "5f5ad663bb8a4e14b661f3b125437c52b4726c9b",
          "message": "CI/benchmarks: don't fail on performance regression",
          "timestamp": "2022-01-20T20:29:27+01:00",
          "tree_id": "53cc7f4a1d8735e0b436075c378a0039b6a3d866",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/5f5ad663bb8a4e14b661f3b125437c52b4726c9b"
        },
        "date": 1642707404974,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 9018.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 142.5494066397098",
            "extra": "{\"totalTime\":9018.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[9163.0,9014.0,8878.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7018.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 150.60655142899108",
            "extra": "{\"totalTime\":7019.333333333333,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[7059.0,6852.0,7145.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 129,
            "unit": "Milliseconds",
            "range": "stdev: 6.557438524302",
            "extra": "{\"totalTime\":129.0,\"preparationTime\":0.0,\"singleTimesToRun\":[130.0,135.0,122.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 7915,
            "unit": "Milliseconds",
            "range": "stdev: 456.6847928276132",
            "extra": "{\"totalTime\":8096.666666666667,\"preparationTime\":181.66666666666666,\"singleTimesToRun\":[8379.0,7900.0,7466.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1144,
            "unit": "Milliseconds",
            "range": "stdev: 49.66890375275057",
            "extra": "{\"totalTime\":1249.6666666666667,\"preparationTime\":105.66666666666667,\"singleTimesToRun\":[1178.0,1167.0,1087.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1738.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 59.00282479113465",
            "extra": "{\"totalTime\":1822.0,\"preparationTime\":83.66666666666667,\"singleTimesToRun\":[1797.0,1739.0,1679.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "38782922+LinqLover@users.noreply.github.com",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "60a497aa4c8286069128464a288b14c76613c89a",
          "message": "Merge pull request #7 from LinqLover/benchmarks3\n\nSwitch to new benchmark suite",
          "timestamp": "2022-01-23T00:13:00+01:00",
          "tree_id": "53cc7f4a1d8735e0b436075c378a0039b6a3d866",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/60a497aa4c8286069128464a288b14c76613c89a"
        },
        "date": 1642893544249,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7298.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 76.13365440679526",
            "extra": "{\"totalTime\":7298.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[7383.0,7278.0,7235.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5249.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 131.39381010281014",
            "extra": "{\"totalTime\":5250.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5394.0,5137.0,5218.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 102,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":102.0,\"preparationTime\":0.0,\"singleTimesToRun\":[103.0,102.0,101.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 6609,
            "unit": "Milliseconds",
            "range": "stdev: 38.97435053981015",
            "extra": "{\"totalTime\":6754.333333333333,\"preparationTime\":145.33333333333334,\"singleTimesToRun\":[6644.0,6567.0,6616.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 912.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 8.504900548115382",
            "extra": "{\"totalTime\":985.3333333333334,\"preparationTime\":72.66666666666667,\"singleTimesToRun\":[919.0,916.0,903.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1421.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 8.020806277010644",
            "extra": "{\"totalTime\":1504.6666666666667,\"preparationTime\":83.0,\"singleTimesToRun\":[1430.0,1421.0,1414.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "38782922+LinqLover@users.noreply.github.com",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3a48d05c24f0e0c0493d438f311f33e44030db2a",
          "message": "Merge branch 'main' into start",
          "timestamp": "2022-01-23T19:28:13+01:00",
          "tree_id": "81adca3c51c36bbacb206d3867e01557e32ef481",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/3a48d05c24f0e0c0493d438f311f33e44030db2a"
        },
        "date": 1642962860982,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7316.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 78.67867140040771",
            "extra": "{\"totalTime\":7316.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[7226.0,7367.0,7357.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5241,
            "unit": "Milliseconds",
            "range": "stdev: 108.08792717042917",
            "extra": "{\"totalTime\":5242.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5355.0,5140.0,5228.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 106.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 3.2145502536643185",
            "extra": "{\"totalTime\":106.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[110.0,104.0,105.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 6546,
            "unit": "Milliseconds",
            "range": "stdev: 26.0",
            "extra": "{\"totalTime\":6690.333333333333,\"preparationTime\":144.33333333333334,\"singleTimesToRun\":[6576.0,6532.0,6530.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 913.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 16.258331197676267",
            "extra": "{\"totalTime\":984.3333333333334,\"preparationTime\":71.0,\"singleTimesToRun\":[931.0,910.0,899.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1423.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2.3094010767585034",
            "extra": "{\"totalTime\":1508.0,\"preparationTime\":84.66666666666667,\"singleTimesToRun\":[1422.0,1422.0,1426.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "38782922+LinqLover@users.noreply.github.com",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c3eb8382b61efb6682a177c959a09ca1667a95d",
          "message": "Merge pull request #8 from LinqLover/start\n\nAdd original design notes",
          "timestamp": "2022-01-23T19:30:42+01:00",
          "tree_id": "81adca3c51c36bbacb206d3867e01557e32ef481",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/4c3eb8382b61efb6682a177c959a09ca1667a95d"
        },
        "date": 1642963039619,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8473,
            "unit": "Milliseconds",
            "range": "stdev: 27.2213151776324",
            "extra": "{\"totalTime\":8473.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8477.0,8498.0,8444.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6345,
            "unit": "Milliseconds",
            "range": "stdev: 195.59907975243647",
            "extra": "{\"totalTime\":6346.0,\"preparationTime\":1.0,\"singleTimesToRun\":[6522.0,6378.0,6135.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 119.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":119.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[121.0,120.0,118.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 7898.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 111.59002344893264",
            "extra": "{\"totalTime\":8062.666666666667,\"preparationTime\":164.0,\"singleTimesToRun\":[7969.0,7957.0,7770.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1120.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 11.67618659209133",
            "extra": "{\"totalTime\":1202.6666666666667,\"preparationTime\":82.0,\"singleTimesToRun\":[1131.0,1108.0,1123.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1588.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 30.0055550412475",
            "extra": "{\"totalTime\":1687.6666666666667,\"preparationTime\":99.33333333333333,\"singleTimesToRun\":[1621.0,1582.0,1562.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "c53d16dda17cfa973a2a1721b0a43bfdfe768a58",
          "message": "Benchmarks: Fix error reporting and #benchStepOver",
          "timestamp": "2022-01-24T15:19:19+01:00",
          "tree_id": "c2c6a19c1ee238efafceee80abf738660bfa8fca",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/c53d16dda17cfa973a2a1721b0a43bfdfe768a58"
        },
        "date": 1643034856818,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8475.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 103.99198687078412",
            "extra": "{\"totalTime\":8475.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8487.0,8573.0,8366.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6215,
            "unit": "Milliseconds",
            "range": "stdev: 160.738918747141",
            "extra": "{\"totalTime\":6216.0,\"preparationTime\":1.0,\"singleTimesToRun\":[6363.0,6044.0,6238.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 119.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":119.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[119.0,119.0,121.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2649.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 89.91292083640334",
            "extra": "{\"totalTime\":2649.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2577.0,2750.0,2621.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 280.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 5.686240703077327",
            "extra": "{\"totalTime\":280.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[279.0,276.0,287.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 8687.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 69.88800564713043",
            "extra": "{\"totalTime\":8901.666666666666,\"preparationTime\":214.0,\"singleTimesToRun\":[8726.0,8730.0,8607.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1316,
            "unit": "Milliseconds",
            "range": "stdev: 20.518284528683193",
            "extra": "{\"totalTime\":1395.6666666666667,\"preparationTime\":79.66666666666667,\"singleTimesToRun\":[1337.0,1296.0,1315.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3629.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 15.695009822658072",
            "extra": "{\"totalTime\":3709.6666666666665,\"preparationTime\":80.0,\"singleTimesToRun\":[3642.0,3635.0,3612.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "38782922+LinqLover@users.noreply.github.com",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f4a1380ccc559d97627cd79ae65a11020755267",
          "message": "Merge branch 'main' into memory-trace",
          "timestamp": "2022-01-24T19:46:23+01:00",
          "tree_id": "fdb22e9bcf9b2ce3adc7a568eaf67d6fd47980ca",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/1f4a1380ccc559d97627cd79ae65a11020755267"
        },
        "date": 1643050502604,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7384.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 112.3046451992674",
            "extra": "{\"totalTime\":7384.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7318.0,7514.0,7321.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5464.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 91.28161552762602",
            "extra": "{\"totalTime\":5465.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5533.0,5361.0,5500.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 104.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":105.0,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[103.0,105.0,105.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2287.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 44.523402086243735",
            "extra": "{\"totalTime\":2287.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2244.0,2333.0,2286.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 244.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 9.71253485622231",
            "extra": "{\"totalTime\":244.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[236.0,242.0,255.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 7759,
            "unit": "Milliseconds",
            "range": "stdev: 56.7097875150313",
            "extra": "{\"totalTime\":7952.0,\"preparationTime\":193.0,\"singleTimesToRun\":[7779.0,7803.0,7695.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1224,
            "unit": "Milliseconds",
            "range": "stdev: 16.522711641858304",
            "extra": "{\"totalTime\":1295.0,\"preparationTime\":71.0,\"singleTimesToRun\":[1207.0,1225.0,1240.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3270.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 18.147543451754935",
            "extra": "{\"totalTime\":3342.6666666666665,\"preparationTime\":72.33333333333333,\"singleTimesToRun\":[3257.0,3263.0,3291.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "38782922+LinqLover@users.noreply.github.com",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d153665f0f0bedac2289160ef7b05d547046239",
          "message": "Merge pull request #5 from LinqLover/memory-trace\n\nImplement memory tracing\r\n\r\nThis PR implements tracing of side effects. This includes state changes to any objects affected by the debugged code as well as any changes to the context stack. As a result, one can now go back in history to inspect the execution at a previous point in time. The restart button and the new back button facilitate this process. Tests and benchmarks for the new tracing simulator are added, which has also been implemented to honor the most common primitives properly.",
          "timestamp": "2022-01-24T19:50:40+01:00",
          "tree_id": "fdb22e9bcf9b2ce3adc7a568eaf67d6fd47980ca",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/9d153665f0f0bedac2289160ef7b05d547046239"
        },
        "date": 1643050738451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7318.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 43.00387579432037",
            "extra": "{\"totalTime\":7318.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7271.0,7329.0,7355.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5363.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 68.64643714959527",
            "extra": "{\"totalTime\":5364.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5442.0,5314.0,5335.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 103.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":103.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[104.0,103.0,103.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2266.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 67.41908730718129",
            "extra": "{\"totalTime\":2266.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2204.0,2338.0,2258.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 237.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 3.7859388972001824",
            "extra": "{\"totalTime\":238.0,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[235.0,236.0,242.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 7298.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 37.687309977409285",
            "extra": "{\"totalTime\":7484.666666666667,\"preparationTime\":186.33333333333334,\"singleTimesToRun\":[7338.0,7294.0,7263.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1126.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 9.29157324317757",
            "extra": "{\"totalTime\":1194.0,\"preparationTime\":67.33333333333333,\"singleTimesToRun\":[1133.0,1116.0,1131.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3157.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 13.316656236958787",
            "extra": "{\"totalTime\":3227.0,\"preparationTime\":69.66666666666667,\"singleTimesToRun\":[3142.0,3166.0,3164.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "a176763db5780755c333f854c6bb336736f56c56",
          "message": "Optimize TDBContextProxy",
          "timestamp": "2022-01-24T21:27:35+01:00",
          "tree_id": "eeca397e0db573e07c485205cca1aee3a073b2df",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/a176763db5780755c333f854c6bb336736f56c56"
        },
        "date": 1643056545374,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6509.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 86.75444272965699",
            "extra": "{\"totalTime\":6509.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6502.0,6600.0,6427.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4797,
            "unit": "Milliseconds",
            "range": "stdev: 115.7540496051866",
            "extra": "{\"totalTime\":4798.0,\"preparationTime\":1.0,\"singleTimesToRun\":[4930.0,4719.0,4742.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 92.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":92.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[92.0,94.0,92.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2045,
            "unit": "Milliseconds",
            "range": "stdev: 45.39823785126467",
            "extra": "{\"totalTime\":2045.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2009.0,2096.0,2030.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 211.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 4.725815626252609",
            "extra": "{\"totalTime\":211.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[210.0,217.0,208.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 6771,
            "unit": "Milliseconds",
            "range": "stdev: 39.96248240537617",
            "extra": "{\"totalTime\":6936.0,\"preparationTime\":165.0,\"singleTimesToRun\":[6778.0,6728.0,6807.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 996.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 14.57166199626293",
            "extra": "{\"totalTime\":1057.3333333333333,\"preparationTime\":60.666666666666664,\"singleTimesToRun\":[992.0,985.0,1013.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2861.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 36.073998022583154",
            "extra": "{\"totalTime\":2923.3333333333335,\"preparationTime\":61.666666666666664,\"singleTimesToRun\":[2827.0,2859.0,2899.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "c9e68d83a8d8346c89a8e09ada3ec5ca66000155",
          "message": "Add utility: BlockClosure >> #traceAndDebug\n\nContributes to #18.",
          "timestamp": "2022-01-24T21:26:23+01:00",
          "tree_id": "c8b2d711a3ea7df4a07476d48833d81cc0906761",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/c9e68d83a8d8346c89a8e09ada3ec5ca66000155"
        },
        "date": 1643056563848,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8464,
            "unit": "Milliseconds",
            "range": "stdev: 204.27187765328833",
            "extra": "{\"totalTime\":8464.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8433.0,8682.0,8277.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6328,
            "unit": "Milliseconds",
            "range": "stdev: 103.94229168149026",
            "extra": "{\"totalTime\":6329.0,\"preparationTime\":1.0,\"singleTimesToRun\":[6386.0,6390.0,6208.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 117.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":117.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[119.0,117.0,116.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2602,
            "unit": "Milliseconds",
            "range": "stdev: 66.007575322837",
            "extra": "{\"totalTime\":2602.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2559.0,2678.0,2569.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 281,
            "unit": "Milliseconds",
            "range": "stdev: 8.54400374531753",
            "extra": "{\"totalTime\":281.0,\"preparationTime\":0.0,\"singleTimesToRun\":[272.0,289.0,282.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 8611,
            "unit": "Milliseconds",
            "range": "stdev: 54.56189146281496",
            "extra": "{\"totalTime\":8823.333333333334,\"preparationTime\":212.33333333333334,\"singleTimesToRun\":[8642.0,8643.0,8548.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1349.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 15.275252316519467",
            "extra": "{\"totalTime\":1431.6666666666667,\"preparationTime\":82.33333333333333,\"singleTimesToRun\":[1366.0,1346.0,1336.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3666.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 51.54932912592882",
            "extra": "{\"totalTime\":3748.3333333333335,\"preparationTime\":82.0,\"singleTimesToRun\":[3713.0,3675.0,3611.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "6370e238b37789624702048bf8408406219149dd",
          "message": "Fix tracing of primitive 145 (primitiveConstantFill)\n\nThis primitive is NOT optional and must be implemented.",
          "timestamp": "2022-01-24T21:36:20+01:00",
          "tree_id": "c4911f0a191ea56f5d5f41e6dc9aea0fbd640fe0",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/6370e238b37789624702048bf8408406219149dd"
        },
        "date": 1643057104896,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6498,
            "unit": "Milliseconds",
            "range": "stdev: 154.2433142797444",
            "extra": "{\"totalTime\":6498.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6508.0,6647.0,6339.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4792.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 58.34666514320534",
            "extra": "{\"totalTime\":4793.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[4828.0,4725.0,4824.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 95,
            "unit": "Milliseconds",
            "range": "stdev: 3.4641016151377544",
            "extra": "{\"totalTime\":95.0,\"preparationTime\":0.0,\"singleTimesToRun\":[91.0,97.0,97.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 1981.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 41.956326499508194",
            "extra": "{\"totalTime\":1981.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[1950.0,2029.0,1965.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 211.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":211.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[210.0,211.0,214.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 6477.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 95.56324258486279",
            "extra": "{\"totalTime\":6637.333333333333,\"preparationTime\":160.0,\"singleTimesToRun\":[6531.0,6534.0,6367.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 951.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 19.553345834749955",
            "extra": "{\"totalTime\":1012.0,\"preparationTime\":60.666666666666664,\"singleTimesToRun\":[953.0,970.0,931.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2831.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 40.69807530256601",
            "extra": "{\"totalTime\":2891.6666666666665,\"preparationTime\":60.0,\"singleTimesToRun\":[2796.0,2876.0,2823.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "808a8818a622cae0645328434d3a0cb0d52133af",
          "message": "Increase stepping robustness against interrupts",
          "timestamp": "2022-01-24T21:48:31+01:00",
          "tree_id": "20d0f44bf5521e4f89271fa364208fc721608cd9",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/808a8818a622cae0645328434d3a0cb0d52133af"
        },
        "date": 1643057937901,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7458.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 121.65662058981145",
            "extra": "{\"totalTime\":7458.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7523.0,7534.0,7318.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5603,
            "unit": "Milliseconds",
            "range": "stdev: 54.4426303552648",
            "extra": "{\"totalTime\":5604.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5661.0,5553.0,5595.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 107.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":107.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[106.0,108.0,108.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2324.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 87.11677986090473",
            "extra": "{\"totalTime\":2324.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2254.0,2422.0,2298.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 246.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 7.0945988845975885",
            "extra": "{\"totalTime\":246.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[245.0,240.0,254.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 7551,
            "unit": "Milliseconds",
            "range": "stdev: 130.3572015655445",
            "extra": "{\"totalTime\":7737.0,\"preparationTime\":186.0,\"singleTimesToRun\":[7700.0,7495.0,7458.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1080,
            "unit": "Milliseconds",
            "range": "stdev: 19.974984355438178",
            "extra": "{\"totalTime\":1151.6666666666667,\"preparationTime\":71.66666666666667,\"singleTimesToRun\":[1085.0,1058.0,1097.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3244,
            "unit": "Milliseconds",
            "range": "stdev: 15.874507866387544",
            "extra": "{\"totalTime\":3314.3333333333335,\"preparationTime\":70.33333333333333,\"singleTimesToRun\":[3256.0,3226.0,3250.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "2964698ea8e3a3bd24428d22c2afbfdf71868e80",
          "message": "Optimize TDBTrace >> #maxTimeIndex by using a cache and controlled invalidations",
          "timestamp": "2022-01-24T22:32:19+01:00",
          "tree_id": "10d19571f608040878fdb26a7f180752b8365158",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/2964698ea8e3a3bd24428d22c2afbfdf71868e80"
        },
        "date": 1643060547486,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8616.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 21.031722072463143",
            "extra": "{\"totalTime\":8616.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8596.0,8638.0,8615.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6427.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 155.57741909844543",
            "extra": "{\"totalTime\":6428.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[6580.0,6269.0,6433.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 119.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":119.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[120.0,121.0,118.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2746,
            "unit": "Milliseconds",
            "range": "stdev: 85.5102333057278",
            "extra": "{\"totalTime\":2746.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2678.0,2842.0,2718.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 288.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 6.658328118479393",
            "extra": "{\"totalTime\":288.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[285.0,284.0,296.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 9021.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 69.74477280293723",
            "extra": "{\"totalTime\":9209.0,\"preparationTime\":187.66666666666666,\"singleTimesToRun\":[9049.0,9073.0,8942.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1310.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 20.00833159794523",
            "extra": "{\"totalTime\":1393.0,\"preparationTime\":82.33333333333333,\"singleTimesToRun\":[1310.0,1291.0,1331.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3196.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 4.932882862316247",
            "extra": "{\"totalTime\":3278.6666666666665,\"preparationTime\":82.33333333333333,\"singleTimesToRun\":[3194.0,3193.0,3202.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "937a4fc35281e036eb4eefb3bdf1882c56b0091c",
          "message": "Optimize TDBTrace >> #traceAtTime:ifAbsent:\n\n- Early exit if timeIndex it out of the current trace's range\n- Exploit the the OrderedDictionary's internal structure for greater performance\n\nIn a larger tracing exercise for #15, this method still takes 8% of the time (as opposed to 39%) before.\n\nNote that we have still the possibility to implement an inline binary search; however; a large majority of all traces has <= 4 children only (measured 95% - 98.5% for different domains, avg length ~ 1.00), so this is left as an exercise to the reader.",
          "timestamp": "2022-01-25T01:01:33+01:00",
          "tree_id": "16c0ffb8191bdcaf315c070abb51c9d1939a5240",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/937a4fc35281e036eb4eefb3bdf1882c56b0091c"
        },
        "date": 1643070074884,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8760.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 333.9615746359652",
            "extra": "{\"totalTime\":8760.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8504.0,9138.0,8639.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6979.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 105.15861036231571",
            "extra": "{\"totalTime\":6980.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[7088.0,6878.0,6973.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 121.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 5.686240703077327",
            "extra": "{\"totalTime\":121.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[126.0,123.0,115.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2779.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 58.07179464536406",
            "extra": "{\"totalTime\":2779.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2783.0,2836.0,2720.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 306.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 12.897028081435403",
            "extra": "{\"totalTime\":306.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[296.0,321.0,303.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 8469.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 144.34103135745337",
            "extra": "{\"totalTime\":8634.333333333334,\"preparationTime\":164.66666666666666,\"singleTimesToRun\":[8303.0,8552.0,8554.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1288.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 13.576941236277534",
            "extra": "{\"totalTime\":1368.0,\"preparationTime\":79.66666666666667,\"singleTimesToRun\":[1274.0,1301.0,1290.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2781,
            "unit": "Milliseconds",
            "range": "stdev: 25.15949125081825",
            "extra": "{\"totalTime\":2862.0,\"preparationTime\":81.0,\"singleTimesToRun\":[2810.0,2768.0,2765.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@outlook.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@outlook.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "894d39b8dcccb2cb76b79491bdf0500f116a9983",
          "message": "Fix previous commit",
          "timestamp": "2022-01-25T02:27:36Z",
          "tree_id": "5294e5853e5cec61ea231489021eb3f15163e130",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/894d39b8dcccb2cb76b79491bdf0500f116a9983"
        },
        "date": 1643078184331,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6910.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 67.33745861950341",
            "extra": "{\"totalTime\":6910.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6988.0,6879.0,6865.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5288.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 59.13825608972025",
            "extra": "{\"totalTime\":5289.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5350.0,5232.0,5284.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 101.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":101.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[101.0,103.0,101.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2121.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 18.036999011291577",
            "extra": "{\"totalTime\":2121.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2103.0,2123.0,2139.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 232.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":232.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[235.0,232.0,231.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 6628.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 27.227437142216182",
            "extra": "{\"totalTime\":6768.0,\"preparationTime\":139.33333333333334,\"singleTimesToRun\":[6650.0,6598.0,6638.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 999.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 22.300971578236975",
            "extra": "{\"totalTime\":1066.3333333333333,\"preparationTime\":67.0,\"singleTimesToRun\":[1008.0,974.0,1016.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1848.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 8.386497083606082",
            "extra": "{\"totalTime\":1914.0,\"preparationTime\":65.33333333333333,\"singleTimesToRun\":[1854.0,1853.0,1839.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@outlook.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@outlook.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "8f5b567e545ae5037b1d6a52061a80f6f507e1ca",
          "message": "Fix merge slip from 1727c49e7b22fea1e7fc099b80b8067e2a26e4b8",
          "timestamp": "2022-01-25T12:43:09Z",
          "tree_id": "e49f2543aaa1394887ca8181dc1749a98b3d9d4c",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/8f5b567e545ae5037b1d6a52061a80f6f507e1ca"
        },
        "date": 1643115134718,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6943.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 149.50027870654068",
            "extra": "{\"totalTime\":6943.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[6778.0,7069.0,6983.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5489.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 129.9397296185171",
            "extra": "{\"totalTime\":5490.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5345.0,5597.0,5526.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 103.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":103.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[102.0,105.0,104.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2175.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 92.51126057585279",
            "extra": "{\"totalTime\":2175.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2117.0,2127.0,2282.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 234,
            "unit": "Milliseconds",
            "range": "stdev: 2.0",
            "extra": "{\"totalTime\":234.0,\"preparationTime\":0.0,\"singleTimesToRun\":[236.0,232.0,234.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 6714.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 86.58136828055639",
            "extra": "{\"totalTime\":6838.333333333333,\"preparationTime\":124.0,\"singleTimesToRun\":[6647.0,6812.0,6684.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1019.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 2.3094010767585034",
            "extra": "{\"totalTime\":1103.3333333333333,\"preparationTime\":84.0,\"singleTimesToRun\":[1018.0,1018.0,1022.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1872.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 13.428824718989127",
            "extra": "{\"totalTime\":1941.3333333333333,\"preparationTime\":69.0,\"singleTimesToRun\":[1882.0,1878.0,1857.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "99a7ed072eabefbc7ae284c7025f016f065f87e6",
          "message": "Robustize TraceDebugger against UI theme changes (???)",
          "timestamp": "2022-01-25T19:01:06+01:00",
          "tree_id": "03969f50a2a9fb626d726f45e88da3fe9ec6e88e",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/99a7ed072eabefbc7ae284c7025f016f065f87e6"
        },
        "date": 1643134249304,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 9503.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 215.85720588697828",
            "extra": "{\"totalTime\":9503.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[9257.0,9596.0,9658.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 8494,
            "unit": "Milliseconds",
            "range": "stdev: 330.97280855079316",
            "extra": "{\"totalTime\":8495.333333333334,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[8135.0,8787.0,8560.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 153.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 3.511884584284246",
            "extra": "{\"totalTime\":153.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[150.0,154.0,157.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3229.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 120.20537980195951",
            "extra": "{\"totalTime\":3229.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3093.0,3277.0,3319.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 373.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 12.662279942148388",
            "extra": "{\"totalTime\":374.0,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[360.0,385.0,376.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 9907.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 224.16363071054445",
            "extra": "{\"totalTime\":10075.0,\"preparationTime\":167.66666666666666,\"singleTimesToRun\":[9808.0,10164.0,9750.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1497.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 16.010413278030438",
            "extra": "{\"totalTime\":1618.6666666666667,\"preparationTime\":121.0,\"singleTimesToRun\":[1514.0,1497.0,1482.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2595.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 13.316656236958787",
            "extra": "{\"totalTime\":2690.3333333333335,\"preparationTime\":95.0,\"singleTimesToRun\":[2592.0,2584.0,2610.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "712504b296a8322be4c36b248274814dbef81803",
          "message": "Fix TDBCursorTest >> #testChildren",
          "timestamp": "2022-01-25T22:55:20+01:00",
          "tree_id": "997c84b0bdd8cf64fd9f09f6039a130c81bef32f",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/712504b296a8322be4c36b248274814dbef81803"
        },
        "date": 1643148270227,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8446.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 246.97638213670015",
            "extra": "{\"totalTime\":8446.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8188.0,8680.0,8472.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6560.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 68.23733093647006",
            "extra": "{\"totalTime\":6562.0,\"preparationTime\":1.6666666666666667,\"singleTimesToRun\":[6485.0,6618.0,6578.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 126,
            "unit": "Milliseconds",
            "range": "stdev: 5.291502622129181",
            "extra": "{\"totalTime\":126.0,\"preparationTime\":0.0,\"singleTimesToRun\":[128.0,130.0,120.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2635.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 91.7841671168472",
            "extra": "{\"totalTime\":2635.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2536.0,2653.0,2717.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 289.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 8.144527815247079",
            "extra": "{\"totalTime\":289.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[286.0,284.0,299.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 8383.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 64.16645021608515",
            "extra": "{\"totalTime\":8535.333333333334,\"preparationTime\":151.66666666666666,\"singleTimesToRun\":[8445.0,8389.0,8317.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1248.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 8.020806277010644",
            "extra": "{\"totalTime\":1351.6666666666667,\"preparationTime\":103.0,\"singleTimesToRun\":[1257.0,1248.0,1241.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2276.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 42.54801209614068",
            "extra": "{\"totalTime\":2361.3333333333335,\"preparationTime\":85.0,\"singleTimesToRun\":[2235.0,2274.0,2320.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "4d45b4ba504d2079c74aa405c15faa736d894f66",
          "message": "Optimize TDBTrace >> #traceAtTime:ifAbsent:\n\nUsing an inline binary search is slightly faster.",
          "timestamp": "2022-01-25T22:55:55+01:00",
          "tree_id": "3ab3f1022d7344eba6df2c841beebe27e2a09ce2",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/4d45b4ba504d2079c74aa405c15faa736d894f66"
        },
        "date": 1643153829719,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7158.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 605.9309641645106",
            "extra": "{\"totalTime\":7158.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[6508.0,7260.0,7707.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5449,
            "unit": "Milliseconds",
            "range": "stdev: 326.9418908613578",
            "extra": "{\"totalTime\":5450.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5183.0,5350.0,5814.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 103.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 3.7859388972001824",
            "extra": "{\"totalTime\":103.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[102.0,101.0,108.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2157.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 173.36185662749847",
            "extra": "{\"totalTime\":2157.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2035.0,2082.0,2356.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 237,
            "unit": "Milliseconds",
            "range": "stdev: 15.716233645501712",
            "extra": "{\"totalTime\":237.0,\"preparationTime\":0.0,\"singleTimesToRun\":[234.0,223.0,254.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 6917.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 392.2630919846186",
            "extra": "{\"totalTime\":7040.333333333333,\"preparationTime\":122.66666666666667,\"singleTimesToRun\":[6578.0,6828.0,7347.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1075,
            "unit": "Milliseconds",
            "range": "stdev: 96.13012014972206",
            "extra": "{\"totalTime\":1165.0,\"preparationTime\":90.0,\"singleTimesToRun\":[964.0,1130.0,1131.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1762.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 148.66853511531397",
            "extra": "{\"totalTime\":1830.6666666666667,\"preparationTime\":68.0,\"singleTimesToRun\":[1659.0,1696.0,1933.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "24335de654e975d7c5231d4a9ef6b31918e36b55",
          "message": "Debugger: cache rootContexts, only signalize changes if necessary, add #bottomContext accessor",
          "timestamp": "2022-01-26T14:19:39+01:00",
          "tree_id": "f83901af2b3fbec7ed20a28cc77585798936d40a",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/24335de654e975d7c5231d4a9ef6b31918e36b55"
        },
        "date": 1643203739370,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7891,
            "unit": "Milliseconds",
            "range": "stdev: 50.46781152378217",
            "extra": "{\"totalTime\":7891.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7909.0,7834.0,7930.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6203.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 29.905406423142512",
            "extra": "{\"totalTime\":6204.0,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[6230.0,6209.0,6171.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 117,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":117.0,\"preparationTime\":0.0,\"singleTimesToRun\":[116.0,117.0,118.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2481.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 17.21433511156714",
            "extra": "{\"totalTime\":2481.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2462.0,2487.0,2495.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 278.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":278.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[277.0,279.0,280.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 7710.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 136.36104037933023",
            "extra": "{\"totalTime\":7853.333333333333,\"preparationTime\":142.66666666666666,\"singleTimesToRun\":[7603.0,7864.0,7665.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1180.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 37.740340927624565",
            "extra": "{\"totalTime\":1255.0,\"preparationTime\":74.66666666666667,\"singleTimesToRun\":[1198.0,1206.0,1137.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2012,
            "unit": "Milliseconds",
            "range": "stdev: 16.3707055437449",
            "extra": "{\"totalTime\":2106.0,\"preparationTime\":94.0,\"singleTimesToRun\":[1994.0,2016.0,2026.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "e6d66a34c920cc2728d0622f19c558f536d13c2a",
          "message": "Revise return type of #childContextsFor:",
          "timestamp": "2022-01-26T14:36:26+01:00",
          "tree_id": "cfe9257ff9d92f37e64151073d31360324496345",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/e6d66a34c920cc2728d0622f19c558f536d13c2a"
        },
        "date": 1643204740235,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6951,
            "unit": "Milliseconds",
            "range": "stdev: 16.703293088490067",
            "extra": "{\"totalTime\":6951.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6969.0,6948.0,6936.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5397,
            "unit": "Milliseconds",
            "range": "stdev: 58.283788483591216",
            "extra": "{\"totalTime\":5398.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5408.0,5334.0,5449.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 102,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":102.0,\"preparationTime\":0.0,\"singleTimesToRun\":[103.0,102.0,101.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2205,
            "unit": "Milliseconds",
            "range": "stdev: 63.095166217389426",
            "extra": "{\"totalTime\":2205.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2270.0,2144.0,2201.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 240.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 5.773502691896258",
            "extra": "{\"totalTime\":240.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[247.0,237.0,237.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 6349,
            "unit": "Milliseconds",
            "range": "stdev: 52.848841046895245",
            "extra": "{\"totalTime\":6474.666666666667,\"preparationTime\":125.66666666666667,\"singleTimesToRun\":[6410.0,6317.0,6320.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1019.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 7.023769168568492",
            "extra": "{\"totalTime\":1086.3333333333333,\"preparationTime\":66.66666666666667,\"singleTimesToRun\":[1019.0,1027.0,1013.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1801,
            "unit": "Milliseconds",
            "range": "stdev: 30.789608636681304",
            "extra": "{\"totalTime\":1884.0,\"preparationTime\":83.0,\"singleTimesToRun\":[1809.0,1827.0,1767.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "5537eb645e1a58fc39fa2fd8be44c0c316874cd0",
          "message": "Clearify changes for #treeRootContexts",
          "timestamp": "2022-01-26T15:22:54+01:00",
          "tree_id": "fbb7be3f6c5216b1ef98f9947e079a0926d9cb14",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/5537eb645e1a58fc39fa2fd8be44c0c316874cd0"
        },
        "date": 1643207442594,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7716.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 78.80566815485632",
            "extra": "{\"totalTime\":7716.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7626.0,7771.0,7752.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5234,
            "unit": "Milliseconds",
            "range": "stdev: 72.54653678846427",
            "extra": "{\"totalTime\":5235.333333333333,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[5153.0,5293.0,5256.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 109,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":109.0,\"preparationTime\":0.0,\"singleTimesToRun\":[108.0,109.0,110.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2149.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":2149.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2149.0,2149.0,2151.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 225,
            "unit": "Milliseconds",
            "range": "stdev: 4.58257569495584",
            "extra": "{\"totalTime\":225.33333333333334,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[230.0,221.0,224.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 6336.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 18.77054430040145",
            "extra": "{\"totalTime\":6460.333333333333,\"preparationTime\":123.66666666666667,\"singleTimesToRun\":[6320.0,6357.0,6333.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1005.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 22.590558499809898",
            "extra": "{\"totalTime\":1071.6666666666667,\"preparationTime\":66.0,\"singleTimesToRun\":[1008.0,1027.0,982.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1650.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 18.717193521821944",
            "extra": "{\"totalTime\":1730.3333333333333,\"preparationTime\":79.66666666666667,\"singleTimesToRun\":[1637.0,1643.0,1672.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "38782922+LinqLover@users.noreply.github.com",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0795a4bd4fd4d78aee11cea6e21614759b19d87f",
          "message": "Merge pull request #40 from LinqLover/optimizations\n\nMany detailed optimizations that address #16 and #17. Contributes to #15.",
          "timestamp": "2022-01-26T15:30:49+01:00",
          "tree_id": "fbb7be3f6c5216b1ef98f9947e079a0926d9cb14",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/0795a4bd4fd4d78aee11cea6e21614759b19d87f"
        },
        "date": 1643207961890,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8480,
            "unit": "Milliseconds",
            "range": "stdev: 61.26173356998641",
            "extra": "{\"totalTime\":8480.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8432.0,8459.0,8549.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6636.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 22.368132093076824",
            "extra": "{\"totalTime\":6637.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[6647.0,6611.0,6652.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 125,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":125.0,\"preparationTime\":0.0,\"singleTimesToRun\":[124.0,125.0,126.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2678.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 15.044378795195678",
            "extra": "{\"totalTime\":2678.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2663.0,2680.0,2693.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 288,
            "unit": "Milliseconds",
            "range": "stdev: 5.291502622129181",
            "extra": "{\"totalTime\":288.0,\"preparationTime\":0.0,\"singleTimesToRun\":[294.0,284.0,286.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 8009.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 72.77591176573011",
            "extra": "{\"totalTime\":8170.666666666667,\"preparationTime\":161.0,\"singleTimesToRun\":[8089.0,7994.0,7946.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1297.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2.886751345948129",
            "extra": "{\"totalTime\":1379.6666666666667,\"preparationTime\":82.33333333333333,\"singleTimesToRun\":[1299.0,1294.0,1299.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2153.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 13.868429375143148",
            "extra": "{\"totalTime\":2255.0,\"preparationTime\":101.66666666666667,\"singleTimesToRun\":[2165.0,2138.0,2157.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "6e1cd9396a8c7c1e1320701d79a0f74ac9780bb1",
          "message": "Provide custom explorer contents for TDBMemory",
          "timestamp": "2022-01-26T15:31:07+01:00",
          "tree_id": "c60cadff6550d6b49a7af802c086fc40734aa6cb",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/6e1cd9396a8c7c1e1320701d79a0f74ac9780bb1"
        },
        "date": 1643208054910,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7343.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 31.77000681985028",
            "extra": "{\"totalTime\":7343.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[7307.0,7361.0,7363.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5249.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 27.06165799305973",
            "extra": "{\"totalTime\":5250.333333333333,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[5273.0,5220.0,5256.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 102.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":102.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[103.0,103.0,102.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2263,
            "unit": "Milliseconds",
            "range": "stdev: 58.12916651733448",
            "extra": "{\"totalTime\":2263.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2226.0,2233.0,2330.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 239,
            "unit": "Milliseconds",
            "range": "stdev: 4.358898943540674",
            "extra": "{\"totalTime\":239.0,\"preparationTime\":0.0,\"singleTimesToRun\":[244.0,236.0,237.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 7278,
            "unit": "Milliseconds",
            "range": "stdev: 15.716233645501712",
            "extra": "{\"totalTime\":7443.0,\"preparationTime\":165.0,\"singleTimesToRun\":[7271.0,7267.0,7296.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1041,
            "unit": "Milliseconds",
            "range": "stdev: 21.0",
            "extra": "{\"totalTime\":1106.6666666666667,\"preparationTime\":65.66666666666667,\"singleTimesToRun\":[1050.0,1056.0,1017.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3170.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 23.75570107012911",
            "extra": "{\"totalTime\":3250.6666666666665,\"preparationTime\":80.33333333333333,\"singleTimesToRun\":[3143.0,3182.0,3186.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "24ca328810db0c89ef48aad05ebcb749ce7db3c3",
          "message": "Implement proceed/abandon buttons and add #tdbHalt shortcut\n\nCloses #38.",
          "timestamp": "2022-01-26T16:17:10+01:00",
          "tree_id": "2e0569ccc7a918dff9b7829cae4b257016a204e3",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/24ca328810db0c89ef48aad05ebcb749ce7db3c3"
        },
        "date": 1643210783855,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7046.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 117.01424414716926",
            "extra": "{\"totalTime\":7046.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[7025.0,6942.0,7173.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5421.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 82.98393418809049",
            "extra": "{\"totalTime\":5422.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5499.0,5334.0,5432.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 104.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":104.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[106.0,102.0,105.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2232.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 29.365512652316042",
            "extra": "{\"totalTime\":2232.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2246.0,2199.0,2253.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 237.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 4.509249752822894",
            "extra": "{\"totalTime\":237.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[242.0,233.0,238.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 6867.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 82.92365967161201",
            "extra": "{\"totalTime\":6998.666666666667,\"preparationTime\":131.33333333333334,\"singleTimesToRun\":[6816.0,6823.0,6963.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1086.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 10.408329997330664",
            "extra": "{\"totalTime\":1154.6666666666667,\"preparationTime\":68.0,\"singleTimesToRun\":[1075.0,1095.0,1090.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1784,
            "unit": "Milliseconds",
            "range": "stdev: 31.575306807693888",
            "extra": "{\"totalTime\":1868.0,\"preparationTime\":84.0,\"singleTimesToRun\":[1748.0,1807.0,1797.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "73d5fbf939aa6ca79a950df70b0e02414a7a1bed",
          "message": "Improve stepping conveniences through coroutines/EHS",
          "timestamp": "2022-01-26T16:32:06+01:00",
          "tree_id": "4fd545854d84f24b0d0a7cf769bd5c621df31f4b",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/73d5fbf939aa6ca79a950df70b0e02414a7a1bed"
        },
        "date": 1643211665090,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7986,
            "unit": "Milliseconds",
            "range": "stdev: 135.34770038681853",
            "extra": "{\"totalTime\":7986.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7873.0,8136.0,7949.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6619.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 206.01537159477527",
            "extra": "{\"totalTime\":6620.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[6714.0,6761.0,6383.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 116.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 4.163331998932265",
            "extra": "{\"totalTime\":116.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[115.0,121.0,113.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2623,
            "unit": "Milliseconds",
            "range": "stdev: 63.55312738174259",
            "extra": "{\"totalTime\":2623.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2558.0,2626.0,2685.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 288,
            "unit": "Milliseconds",
            "range": "stdev: 12.165525060596439",
            "extra": "{\"totalTime\":288.0,\"preparationTime\":0.0,\"singleTimesToRun\":[294.0,296.0,274.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 7687.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 215.17512247779328",
            "extra": "{\"totalTime\":7833.333333333333,\"preparationTime\":146.0,\"singleTimesToRun\":[7463.0,7892.0,7707.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1222,
            "unit": "Milliseconds",
            "range": "stdev: 96.57639463140049",
            "extra": "{\"totalTime\":1303.0,\"preparationTime\":81.0,\"singleTimesToRun\":[1245.0,1305.0,1116.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2026.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 32.192131543800166",
            "extra": "{\"totalTime\":2124.6666666666665,\"preparationTime\":98.0,\"singleTimesToRun\":[1999.0,2019.0,2062.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "8f8e752954bdad950ccbb6c2af111adb77fbe69d",
          "message": "Feature: toggle bottom context by double-clicking a context in the tree",
          "timestamp": "2022-01-26T20:55:17+01:00",
          "tree_id": "de8e2070e7651f7faadd1231df8890ce8d80a7ec",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/8f8e752954bdad950ccbb6c2af111adb77fbe69d"
        },
        "date": 1643227396968,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6889.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 84.63056973300684",
            "extra": "{\"totalTime\":6889.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6795.0,6916.0,6958.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5299.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 22.233608194203057",
            "extra": "{\"totalTime\":5300.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5286.0,5325.0,5287.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 102.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":102.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[101.0,103.0,103.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2227.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 54.35377938408086",
            "extra": "{\"totalTime\":2227.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2262.0,2165.0,2256.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 234.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 4.509249752822894",
            "extra": "{\"totalTime\":234.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[239.0,234.0,230.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 6656.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 38.42308333974947",
            "extra": "{\"totalTime\":6783.333333333333,\"preparationTime\":127.0,\"singleTimesToRun\":[6612.0,6677.0,6680.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1052.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 4.041451884327381",
            "extra": "{\"totalTime\":1117.6666666666667,\"preparationTime\":65.33333333333333,\"singleTimesToRun\":[1057.0,1050.0,1050.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1761,
            "unit": "Milliseconds",
            "range": "stdev: 12.12435565298214",
            "extra": "{\"totalTime\":1843.6666666666667,\"preparationTime\":82.66666666666667,\"singleTimesToRun\":[1754.0,1754.0,1775.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "8380eaf34ddbe453ee33070cf5950e45413227e5",
          "message": "Refactor debugger: recategorize selectors, bundle dependencies on fallback classes",
          "timestamp": "2022-01-26T20:58:44+01:00",
          "tree_id": "ee381e7b5cc63bb17b29fbb05cf27ba7e0f117f9",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/8380eaf34ddbe453ee33070cf5950e45413227e5"
        },
        "date": 1643227604006,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6884.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 78.76759062795645",
            "extra": "{\"totalTime\":6884.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[6797.0,6906.0,6950.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5346.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 4.041451884327381",
            "extra": "{\"totalTime\":5348.0,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[5349.0,5342.0,5349.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 101,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":101.0,\"preparationTime\":0.0,\"singleTimesToRun\":[102.0,100.0,101.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2164,
            "unit": "Milliseconds",
            "range": "stdev: 79.77468270071653",
            "extra": "{\"totalTime\":2164.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2256.0,2114.0,2122.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 228.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 5.507570547286102",
            "extra": "{\"totalTime\":228.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[235.0,225.0,226.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 6587,
            "unit": "Milliseconds",
            "range": "stdev: 99.03534722511958",
            "extra": "{\"totalTime\":6715.666666666667,\"preparationTime\":128.66666666666666,\"singleTimesToRun\":[6699.0,6511.0,6551.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1084.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 39.10669166949991",
            "extra": "{\"totalTime\":1151.3333333333333,\"preparationTime\":66.66666666666667,\"singleTimesToRun\":[1122.0,1088.0,1044.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1757.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 18.0092568789868",
            "extra": "{\"totalTime\":1839.3333333333333,\"preparationTime\":82.0,\"singleTimesToRun\":[1749.0,1778.0,1745.0],\"postparationTime\":0.0}"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "committer": {
            "email": "christoph.thiede@student.hpi.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "9458e84b45bf313de992f6779649f181278b8fe7",
          "message": "Implement drop-into-world to spawn\n\nDepends on ToolBuilder-Kernel-ct.151 (Trunk) and genericDropSourceCode.cs (not yet in Trunk).",
          "timestamp": "2022-01-27T02:32:35+01:00",
          "tree_id": "56aa70495960177e3f15b9c774c4d87dc6e77e1b",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/9458e84b45bf313de992f6779649f181278b8fe7"
        },
        "date": 1643247754488,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7703.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 158.22241729076617",
            "extra": "{\"totalTime\":7703.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7535.0,7849.0,7726.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6328,
            "unit": "Milliseconds",
            "range": "stdev: 68.54925236645546",
            "extra": "{\"totalTime\":6329.0,\"preparationTime\":1.0,\"singleTimesToRun\":[6261.0,6398.0,6325.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 117.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 4.163331998932265",
            "extra": "{\"totalTime\":117.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[119.0,121.0,113.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2296,
            "unit": "Milliseconds",
            "range": "stdev: 56.55970296951709",
            "extra": "{\"totalTime\":2296.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2241.0,2354.0,2293.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 255,
            "unit": "Milliseconds",
            "range": "stdev: 3.605551275463989",
            "extra": "{\"totalTime\":255.0,\"preparationTime\":0.0,\"singleTimesToRun\":[258.0,256.0,251.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 6912,
            "unit": "Milliseconds",
            "range": "stdev: 68.98550572402873",
            "extra": "{\"totalTime\":7042.0,\"preparationTime\":130.0,\"singleTimesToRun\":[6834.0,6965.0,6937.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1139.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 21.031722072463143",
            "extra": "{\"totalTime\":1215.0,\"preparationTime\":75.66666666666667,\"singleTimesToRun\":[1119.0,1138.0,1161.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1890,
            "unit": "Milliseconds",
            "range": "stdev: 73.36893075410055",
            "extra": "{\"totalTime\":1979.6666666666667,\"preparationTime\":89.66666666666667,\"singleTimesToRun\":[1828.0,1871.0,1971.0],\"postparationTime\":0.0}"
          }
        ]
      }
    ]
  }
}