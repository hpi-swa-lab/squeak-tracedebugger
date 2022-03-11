window.BENCHMARK_DATA = {
  "lastUpdate": 1647010792094,
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
          "id": "25229ed83e3bf9f870733af2b38ddd49229e4d1c",
          "message": "Add missing extension method",
          "timestamp": "2022-02-03T14:10:31+01:00",
          "tree_id": "fb078d3068da44ecd557b7715bf9059f4eb635b8",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/25229ed83e3bf9f870733af2b38ddd49229e4d1c"
        },
        "date": 1643894482998,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8412.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 35.92121007612819",
            "extra": "{\"totalTime\":8412.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8395.0,8389.0,8454.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6711,
            "unit": "Milliseconds",
            "range": "stdev: 52.373657500693994",
            "extra": "{\"totalTime\":6711.666666666667,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[6665.0,6768.0,6700.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 120.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 5.131601439446884",
            "extra": "{\"totalTime\":120.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[119.0,126.0,116.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2708.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 153.324275094759",
            "extra": "{\"totalTime\":2708.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2577.0,2877.0,2672.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 287.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 5.131601439446884",
            "extra": "{\"totalTime\":287.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[293.0,283.0,286.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 8273,
            "unit": "Milliseconds",
            "range": "stdev: 62.0966987850401",
            "extra": "{\"totalTime\":8452.666666666666,\"preparationTime\":179.66666666666666,\"singleTimesToRun\":[8213.0,8337.0,8269.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1372.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 19.295940851208407",
            "extra": "{\"totalTime\":1459.6666666666667,\"preparationTime\":87.0,\"singleTimesToRun\":[1388.0,1351.0,1379.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2225.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 39.10669166949991",
            "extra": "{\"totalTime\":2307.6666666666665,\"preparationTime\":82.0,\"singleTimesToRun\":[2229.0,2263.0,2185.0],\"postparationTime\":0.0}"
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
            "email": "38782922+LinqLover@users.noreply.github.com",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "c24ff5521ed55c195b5d8d71374f0ed403030d63",
          "message": "Update README.md\r\n\r\nUse tabs instead of spaces",
          "timestamp": "2022-02-03T14:38:24+01:00",
          "tree_id": "eb2beadcdfa804cd4ff2b2189a33ae52382138ef",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/c24ff5521ed55c195b5d8d71374f0ed403030d63"
        },
        "date": 1643896035853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6922.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 249.66043605932708",
            "extra": "{\"totalTime\":6922.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6639.0,7020.0,7109.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5555.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 26.76440422152777",
            "extra": "{\"totalTime\":5556.333333333333,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[5560.0,5527.0,5580.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 102.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 7.571877794400365",
            "extra": "{\"totalTime\":102.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[94.0,106.0,108.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2317,
            "unit": "Milliseconds",
            "range": "stdev: 103.81233067415451",
            "extra": "{\"totalTime\":2317.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2198.0,2364.0,2389.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 250,
            "unit": "Milliseconds",
            "range": "stdev: 4.58257569495584",
            "extra": "{\"totalTime\":250.0,\"preparationTime\":0.0,\"singleTimesToRun\":[245.0,254.0,251.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 6390,
            "unit": "Milliseconds",
            "range": "stdev: 62.7933117457584",
            "extra": "{\"totalTime\":6527.333333333333,\"preparationTime\":137.33333333333334,\"singleTimesToRun\":[6331.0,6456.0,6383.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1052.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 21.594752448994022",
            "extra": "{\"totalTime\":1122.0,\"preparationTime\":69.66666666666667,\"singleTimesToRun\":[1050.0,1032.0,1075.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1769,
            "unit": "Milliseconds",
            "range": "stdev: 13.076696830622021",
            "extra": "{\"totalTime\":1837.6666666666667,\"preparationTime\":68.66666666666667,\"singleTimesToRun\":[1784.0,1760.0,1763.0],\"postparationTime\":0.0}"
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
          "id": "2bdad89f833973ce95f075cabb59f6924e7e714f",
          "message": "Update the timeIndex when selecting a context",
          "timestamp": "2022-02-03T22:25:16+01:00",
          "tree_id": "13dbffddc96794816804bed2f06668051eaa0e1a",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/2bdad89f833973ce95f075cabb59f6924e7e714f"
        },
        "date": 1643924066177,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7028,
            "unit": "Milliseconds",
            "range": "stdev: 186.92511869730083",
            "extra": "{\"totalTime\":7028.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7243.0,6904.0,6937.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5389,
            "unit": "Milliseconds",
            "range": "stdev: 225.05999200213262",
            "extra": "{\"totalTime\":5390.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5611.0,5395.0,5161.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 101.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 5.507570547286102",
            "extra": "{\"totalTime\":101.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[108.0,99.0,98.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2202.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 43.61574639202376",
            "extra": "{\"totalTime\":2202.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2248.0,2161.0,2199.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 225.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 5.507570547286102",
            "extra": "{\"totalTime\":225.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[229.0,228.0,219.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 11368.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1103.9566718550748",
            "extra": "{\"totalTime\":11486.666666666666,\"preparationTime\":118.0,\"singleTimesToRun\":[12629.0,10904.0,10573.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1132.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 50.50082507576815",
            "extra": "{\"totalTime\":1221.6666666666667,\"preparationTime\":89.0,\"singleTimesToRun\":[1183.0,1133.0,1082.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1730.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 23.437861108329262",
            "extra": "{\"totalTime\":1805.3333333333333,\"preparationTime\":74.66666666666667,\"singleTimesToRun\":[1748.0,1740.0,1704.0],\"postparationTime\":0.0}"
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
          "id": "e0621ea8736a9420f6cb77253a21fec8aa47d277",
          "message": "Optimizations for TDBContextProxy",
          "timestamp": "2022-02-03T22:39:50+01:00",
          "tree_id": "cf2c748a6ba267cb1c1ef32f614fb90d837433b1",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/e0621ea8736a9420f6cb77253a21fec8aa47d277"
        },
        "date": 1643924892024,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6966.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 105.42453857301598",
            "extra": "{\"totalTime\":6966.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[6902.0,6909.0,7088.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5336.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 57.18682832028136",
            "extra": "{\"totalTime\":5337.0,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[5282.0,5331.0,5396.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 102.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":102.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[102.0,103.0,102.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2179.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 103.19560714164791",
            "extra": "{\"totalTime\":2179.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2100.0,2142.0,2296.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 234.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":234.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[233.0,236.0,234.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 11701.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1166.342288238463",
            "extra": "{\"totalTime\":11826.666666666666,\"preparationTime\":125.33333333333333,\"singleTimesToRun\":[13043.0,10929.0,11132.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1177,
            "unit": "Milliseconds",
            "range": "stdev: 11.357816691600547",
            "extra": "{\"totalTime\":1264.3333333333333,\"preparationTime\":87.33333333333333,\"singleTimesToRun\":[1169.0,1172.0,1190.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1778.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 14.011899704655802",
            "extra": "{\"totalTime\":1851.6666666666667,\"preparationTime\":73.33333333333333,\"singleTimesToRun\":[1779.0,1764.0,1792.0],\"postparationTime\":0.0}"
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
          "id": "3f781b4735e5d0eef84b6d1ccd941777b84a969a",
          "message": "Hit toggle bottom (O) without selection to show all contexts again",
          "timestamp": "2022-02-04T01:01:57+01:00",
          "tree_id": "36ed9aaef73cfb3dd432944b5bc020753df6bd83",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/3f781b4735e5d0eef84b6d1ccd941777b84a969a"
        },
        "date": 1643933440954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7855,
            "unit": "Milliseconds",
            "range": "stdev: 19.0",
            "extra": "{\"totalTime\":7855.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7855.0,7874.0,7836.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6074,
            "unit": "Milliseconds",
            "range": "stdev: 66.18912297349165",
            "extra": "{\"totalTime\":6075.0,\"preparationTime\":1.0,\"singleTimesToRun\":[6029.0,6043.0,6150.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 113.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":113.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[114.0,115.0,112.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2408.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 11.846237095944575",
            "extra": "{\"totalTime\":2408.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2401.0,2422.0,2402.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 270,
            "unit": "Milliseconds",
            "range": "stdev: 1.7320508075688772",
            "extra": "{\"totalTime\":270.0,\"preparationTime\":0.0,\"singleTimesToRun\":[268.0,271.0,271.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13061.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1263.2439722133383",
            "extra": "{\"totalTime\":13200.333333333334,\"preparationTime\":139.0,\"singleTimesToRun\":[14520.0,12334.0,12330.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1308,
            "unit": "Milliseconds",
            "range": "stdev: 14.52583904633395",
            "extra": "{\"totalTime\":1405.3333333333333,\"preparationTime\":97.33333333333333,\"singleTimesToRun\":[1322.0,1293.0,1309.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1999.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 6.027713773341709",
            "extra": "{\"totalTime\":2084.0,\"preparationTime\":84.33333333333333,\"singleTimesToRun\":[2006.0,1999.0,1994.0],\"postparationTime\":0.0}"
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
          "id": "7e9e51344a87469045ee4beeeaa0bd3c35294f15",
          "message": "Complement 9cb7eba",
          "timestamp": "2022-02-09T00:01:31+01:00",
          "tree_id": "ea4f183609be4eff75a7f026811486ace2d2b18b",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/7e9e51344a87469045ee4beeeaa0bd3c35294f15"
        },
        "date": 1644361928608,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8190,
            "unit": "Milliseconds",
            "range": "stdev: 117.75822688882505",
            "extra": "{\"totalTime\":8190.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8103.0,8324.0,8143.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6530.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 235.60206563893564",
            "extra": "{\"totalTime\":6531.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[6407.0,6382.0,6802.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 119.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":119.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[121.0,120.0,117.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2648.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 51.39390365922142",
            "extra": "{\"totalTime\":2648.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2589.0,2677.0,2679.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 277,
            "unit": "Milliseconds",
            "range": "stdev: 5.0",
            "extra": "{\"totalTime\":277.0,\"preparationTime\":0.0,\"singleTimesToRun\":[272.0,282.0,277.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 14029,
            "unit": "Milliseconds",
            "range": "stdev: 1395.3465519361132",
            "extra": "{\"totalTime\":14178.666666666666,\"preparationTime\":149.66666666666666,\"singleTimesToRun\":[15637.0,13313.0,13137.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1421.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 21.1266025033211",
            "extra": "{\"totalTime\":1509.3333333333333,\"preparationTime\":88.0,\"singleTimesToRun\":[1441.0,1424.0,1399.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2186,
            "unit": "Milliseconds",
            "range": "stdev: 21.656407827707714",
            "extra": "{\"totalTime\":2289.3333333333335,\"preparationTime\":103.33333333333333,\"singleTimesToRun\":[2189.0,2206.0,2163.0],\"postparationTime\":0.0}"
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
          "id": "1e6895de3ab57c9d48285e72055ed1f4ca59923b",
          "message": "Add workaround to fix self-simulation tests",
          "timestamp": "2022-02-11T02:44:31+01:00",
          "tree_id": "ad090573d7b936e1d37d86339419041fbe8d57e6",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/1e6895de3ab57c9d48285e72055ed1f4ca59923b"
        },
        "date": 1644544571581,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6996.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 47.08856903042747",
            "extra": "{\"totalTime\":6996.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6948.0,7000.0,7042.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4684.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 109.2077530825231",
            "extra": "{\"totalTime\":4685.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[4807.0,4597.0,4650.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 110.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 5.686240703077327",
            "extra": "{\"totalTime\":110.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[104.0,112.0,115.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2747.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 32.715949219506584",
            "extra": "{\"totalTime\":2747.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2726.0,2731.0,2785.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 306.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 6.506407098647712",
            "extra": "{\"totalTime\":306.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[300.0,307.0,313.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 41857,
            "unit": "Milliseconds",
            "range": "stdev: 329.4586468739286",
            "extra": "{\"totalTime\":41977.333333333336,\"preparationTime\":120.33333333333333,\"singleTimesToRun\":[42075.0,42018.0,41478.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1083,
            "unit": "Milliseconds",
            "range": "stdev: 32.7414110874898",
            "extra": "{\"totalTime\":1161.3333333333333,\"preparationTime\":78.33333333333333,\"singleTimesToRun\":[1119.0,1075.0,1055.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1862.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 18.61003313627715",
            "extra": "{\"totalTime\":1930.3333333333333,\"preparationTime\":67.66666666666667,\"singleTimesToRun\":[1843.0,1880.0,1865.0],\"postparationTime\":0.0}"
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
          "id": "3db1bb7bf7286e26658e60f48cf3d51781143e4b",
          "message": "Fix tracing of failed primitive methods",
          "timestamp": "2022-02-12T16:01:21+01:00",
          "tree_id": "900cb3a3ee2f0a4f7819a9bf2937c095887e55ec",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/3db1bb7bf7286e26658e60f48cf3d51781143e4b"
        },
        "date": 1644679266376,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6773.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 124.26316161008191",
            "extra": "{\"totalTime\":6773.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6783.0,6893.0,6645.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5526.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 218.71518770614296",
            "extra": "{\"totalTime\":5526.666666666667,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[5347.0,5770.0,5462.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 98.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 9.073771725877467",
            "extra": "{\"totalTime\":98.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[92.0,95.0,109.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2642.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 86.35006272918007",
            "extra": "{\"totalTime\":2642.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2742.0,2590.0,2595.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 303.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 18.036999011291577",
            "extra": "{\"totalTime\":303.6666666666667,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[286.0,302.0,322.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 11015.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1195.3594996206511",
            "extra": "{\"totalTime\":11141.333333333334,\"preparationTime\":125.66666666666667,\"singleTimesToRun\":[12394.0,10390.0,10263.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1137,
            "unit": "Milliseconds",
            "range": "stdev: 43.278170016764804",
            "extra": "{\"totalTime\":1222.3333333333333,\"preparationTime\":85.33333333333333,\"singleTimesToRun\":[1186.0,1104.0,1121.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1990,
            "unit": "Milliseconds",
            "range": "stdev: 111.70049238924598",
            "extra": "{\"totalTime\":2066.6666666666665,\"preparationTime\":76.66666666666667,\"singleTimesToRun\":[1907.0,2117.0,1946.0],\"postparationTime\":0.0}"
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
          "id": "e317c58c2bb68667b7b579a113cc9e910e4e67dd",
          "message": "Allow do-its in receiver/context variables inspector to access instance variables, fix syntax highlighting, and Autocompletion",
          "timestamp": "2022-02-12T20:49:13+01:00",
          "tree_id": "8cecbbcb8c785eedf80c3f5acb12a5dddacd7852",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/e317c58c2bb68667b7b579a113cc9e910e4e67dd"
        },
        "date": 1644696031613,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7801,
            "unit": "Milliseconds",
            "range": "stdev: 230.77478198451408",
            "extra": "{\"totalTime\":7801.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7598.0,7753.0,8052.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6155.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 23.96525262402492",
            "extra": "{\"totalTime\":6156.666666666667,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[6141.0,6142.0,6183.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 114,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":114.0,\"preparationTime\":0.0,\"singleTimesToRun\":[113.0,114.0,115.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3011.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 33.85754470326125",
            "extra": "{\"totalTime\":3011.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2975.0,3042.0,3017.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 339,
            "unit": "Milliseconds",
            "range": "stdev: 3.0",
            "extra": "{\"totalTime\":339.0,\"preparationTime\":0.0,\"singleTimesToRun\":[339.0,336.0,342.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13002,
            "unit": "Milliseconds",
            "range": "stdev: 1372.6864172126132",
            "extra": "{\"totalTime\":13172.333333333334,\"preparationTime\":170.33333333333334,\"singleTimesToRun\":[14584.0,12126.0,12296.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1303.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 8.504900548115382",
            "extra": "{\"totalTime\":1387.3333333333333,\"preparationTime\":83.66666666666667,\"singleTimesToRun\":[1310.0,1294.0,1307.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2303,
            "unit": "Milliseconds",
            "range": "stdev: 27.2213151776324",
            "extra": "{\"totalTime\":2386.3333333333335,\"preparationTime\":83.33333333333333,\"singleTimesToRun\":[2323.0,2272.0,2314.0],\"postparationTime\":0.0}"
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
          "id": "b4bb65ecec33aee76087b7f4858b31d85bda9964",
          "message": "Fix keyboard shortcut for stepThrough",
          "timestamp": "2022-02-13T01:10:27+01:00",
          "tree_id": "dcfc6e1d7186bde192623e086dde51cf19b1dfad",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/b4bb65ecec33aee76087b7f4858b31d85bda9964"
        },
        "date": 1644711670745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6897.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 18.823743871327334",
            "extra": "{\"totalTime\":6897.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[6885.0,6919.0,6888.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5449.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 55.868894148115494",
            "extra": "{\"totalTime\":5450.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5499.0,5461.0,5389.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 104,
            "unit": "Milliseconds",
            "range": "stdev: 2.0",
            "extra": "{\"totalTime\":104.0,\"preparationTime\":0.0,\"singleTimesToRun\":[102.0,106.0,104.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2646,
            "unit": "Milliseconds",
            "range": "stdev: 46.93612681080534",
            "extra": "{\"totalTime\":2646.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2615.0,2623.0,2700.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 293.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":293.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[293.0,293.0,295.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 11276.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1135.8610537091822",
            "extra": "{\"totalTime\":11418.666666666666,\"preparationTime\":142.0,\"singleTimesToRun\":[12588.0,10643.0,10599.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1029,
            "unit": "Milliseconds",
            "range": "stdev: 7.54983443527075",
            "extra": "{\"totalTime\":1099.0,\"preparationTime\":70.0,\"singleTimesToRun\":[1030.0,1021.0,1036.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2017.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 11.930353445448855",
            "extra": "{\"totalTime\":2089.3333333333335,\"preparationTime\":71.66666666666667,\"singleTimesToRun\":[2008.0,2014.0,2031.0],\"postparationTime\":0.0}"
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
          "id": "989ace50245610792ec921818330248004ce471c",
          "message": "Display timeIndex in window labels of debugger + snapshot inspectors/explorers\n\nAlso, do not add snapshot display to primitive objects during inspecting/exploring.",
          "timestamp": "2022-02-13T01:12:40+01:00",
          "tree_id": "d90d3132c611de9a11c5bc0157c732eaa1a4cc30",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/989ace50245610792ec921818330248004ce471c"
        },
        "date": 1644716984034,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6924,
            "unit": "Milliseconds",
            "range": "stdev: 58.12916651733448",
            "extra": "{\"totalTime\":6924.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6857.0,6954.0,6961.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5443.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 19.347695814575268",
            "extra": "{\"totalTime\":5445.0,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[5432.0,5466.0,5433.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 104.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":104.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[104.0,104.0,105.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2701,
            "unit": "Milliseconds",
            "range": "stdev: 80.2932126645833",
            "extra": "{\"totalTime\":2701.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2679.0,2634.0,2790.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 297,
            "unit": "Milliseconds",
            "range": "stdev: 5.291502622129181",
            "extra": "{\"totalTime\":297.0,\"preparationTime\":0.0,\"singleTimesToRun\":[295.0,303.0,293.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 11458,
            "unit": "Milliseconds",
            "range": "stdev: 1077.336066415675",
            "extra": "{\"totalTime\":11604.0,\"preparationTime\":146.0,\"singleTimesToRun\":[12702.0,10837.0,10835.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1064,
            "unit": "Milliseconds",
            "range": "stdev: 10.583005244258363",
            "extra": "{\"totalTime\":1135.6666666666667,\"preparationTime\":71.66666666666667,\"singleTimesToRun\":[1068.0,1072.0,1052.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2058.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 13.316656236958787",
            "extra": "{\"totalTime\":2131.0,\"preparationTime\":72.66666666666667,\"singleTimesToRun\":[2055.0,2073.0,2047.0],\"postparationTime\":0.0}"
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
          "id": "46fe172109972711ec1a4182c4e1feb364cc25a0",
          "message": "TDBInspector: Handle syntax errors in \"Add as field\" conveniently",
          "timestamp": "2022-02-14T01:37:22+01:00",
          "tree_id": "d2ef188a8f89aefefd90dcd1a38f9403bfa091be",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/46fe172109972711ec1a4182c4e1feb364cc25a0"
        },
        "date": 1644799704781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6956.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 41.23509831846329",
            "extra": "{\"totalTime\":6956.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6943.0,7003.0,6924.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5576.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 125.65959308120226",
            "extra": "{\"totalTime\":5577.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5711.0,5462.0,5557.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 106.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2.3094010767585034",
            "extra": "{\"totalTime\":106.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[109.0,105.0,105.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2729.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 29.955522584881294",
            "extra": "{\"totalTime\":2729.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2738.0,2696.0,2754.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 297,
            "unit": "Milliseconds",
            "range": "stdev: 2.6457513110645907",
            "extra": "{\"totalTime\":297.0,\"preparationTime\":0.0,\"singleTimesToRun\":[296.0,295.0,300.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 11584,
            "unit": "Milliseconds",
            "range": "stdev: 1218.5060525085626",
            "extra": "{\"totalTime\":11730.666666666666,\"preparationTime\":146.66666666666666,\"singleTimesToRun\":[12991.0,10885.0,10876.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1064,
            "unit": "Milliseconds",
            "range": "stdev: 25.357444666211933",
            "extra": "{\"totalTime\":1134.0,\"preparationTime\":70.0,\"singleTimesToRun\":[1082.0,1075.0,1035.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2034,
            "unit": "Milliseconds",
            "range": "stdev: 13.0",
            "extra": "{\"totalTime\":2106.3333333333335,\"preparationTime\":72.33333333333333,\"singleTimesToRun\":[2021.0,2034.0,2047.0],\"postparationTime\":0.0}"
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
          "id": "08b0d894e897788e87c911c3729fc94d59803056",
          "message": "Fix slip from previuos commit",
          "timestamp": "2022-02-14T01:40:45+01:00",
          "tree_id": "f9e943cf555b08d408e980806ea239a7f5d08e30",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/08b0d894e897788e87c911c3729fc94d59803056"
        },
        "date": 1644799917723,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8906,
            "unit": "Milliseconds",
            "range": "stdev: 227.74547196376923",
            "extra": "{\"totalTime\":8906.0,\"preparationTime\":0.0,\"singleTimesToRun\":[9160.0,8838.0,8720.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 8027.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 501.1759504738165",
            "extra": "{\"totalTime\":8028.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[8521.0,8043.0,7519.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 155.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 4.618802153517007",
            "extra": "{\"totalTime\":155.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[158.0,158.0,150.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3983.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 333.2031412416956",
            "extra": "{\"totalTime\":3983.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3776.0,3807.0,4368.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 441.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 48.6449723335653",
            "extra": "{\"totalTime\":441.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[463.0,386.0,476.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 15463.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1082.8713373865492",
            "extra": "{\"totalTime\":15667.333333333334,\"preparationTime\":204.0,\"singleTimesToRun\":[16678.0,15113.0,14599.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1435.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 125.5879505897494",
            "extra": "{\"totalTime\":1529.0,\"preparationTime\":93.66666666666667,\"singleTimesToRun\":[1409.0,1325.0,1572.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2748.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 183.11016720360814",
            "extra": "{\"totalTime\":2850.6666666666665,\"preparationTime\":102.0,\"singleTimesToRun\":[2756.0,2928.0,2562.0],\"postparationTime\":0.0}"
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
          "id": "30e77809179e250cb8e8b80035cb805c7911b09e",
          "message": "Update #testViewUpdatesAfterSelection\n\nWhen selecting the sender of a historic context, this context will be displayed historically too. See TDBCursor>>#doSelect:.\n\nThis test falsely passed earlier because of the recently fixed bug in ct TraceDebugger>>#pcRange (see 75b395a).",
          "timestamp": "2022-02-17T20:26:47+01:00",
          "tree_id": "a0fa3f5ce7f683d29e4ac4aba8f393ff1d9f7dd0",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/30e77809179e250cb8e8b80035cb805c7911b09e"
        },
        "date": 1645126602728,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7373.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 295.7031168813297",
            "extra": "{\"totalTime\":7373.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7223.0,7183.0,7714.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6022,
            "unit": "Milliseconds",
            "range": "stdev: 204.1102643180886",
            "extra": "{\"totalTime\":6023.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5947.0,5866.0,6253.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 114.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":114.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[113.0,114.0,116.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2955,
            "unit": "Milliseconds",
            "range": "stdev: 194.5944500750214",
            "extra": "{\"totalTime\":2955.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3013.0,2738.0,3114.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 331,
            "unit": "Milliseconds",
            "range": "stdev: 22.11334438749598",
            "extra": "{\"totalTime\":331.0,\"preparationTime\":0.0,\"singleTimesToRun\":[306.0,339.0,348.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 12604.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1190.358069378006",
            "extra": "{\"totalTime\":12758.0,\"preparationTime\":153.33333333333334,\"singleTimesToRun\":[13936.0,11643.0,12235.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1137.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 91.5277735626369",
            "extra": "{\"totalTime\":1218.3333333333333,\"preparationTime\":80.66666666666667,\"singleTimesToRun\":[1113.0,1061.0,1239.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2250.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 182.51118687174588",
            "extra": "{\"totalTime\":2343.3333333333335,\"preparationTime\":93.0,\"singleTimesToRun\":[2150.0,2140.0,2461.0],\"postparationTime\":0.0}"
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
          "id": "f4554c17ed83728ab2fea55e62f3ffb4f3202725",
          "message": "Add navigation operations \"jump to sender\" and \"jump to callee\"",
          "timestamp": "2022-02-18T00:05:45+01:00",
          "tree_id": "34facb2958fc8efa8a6c79e37bae4582a5d4392a",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/f4554c17ed83728ab2fea55e62f3ffb4f3202725"
        },
        "date": 1645139784642,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8114.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 58.2437407223586",
            "extra": "{\"totalTime\":8114.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[8050.0,8163.0,8131.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6787,
            "unit": "Milliseconds",
            "range": "stdev: 59.90826320300064",
            "extra": "{\"totalTime\":6788.0,\"preparationTime\":1.0,\"singleTimesToRun\":[6799.0,6840.0,6722.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 119.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 10.016652800877813",
            "extra": "{\"totalTime\":120.0,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[119.0,110.0,130.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3248.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 13.428824718989127",
            "extra": "{\"totalTime\":3248.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[3258.0,3233.0,3254.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 367.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 8.082903768654761",
            "extra": "{\"totalTime\":367.6666666666667,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[366.0,360.0,376.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13579.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1420.057862670861",
            "extra": "{\"totalTime\":13739.0,\"preparationTime\":159.66666666666666,\"singleTimesToRun\":[15187.0,12496.0,13055.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1327.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 77.79674371934429",
            "extra": "{\"totalTime\":1411.0,\"preparationTime\":83.66666666666667,\"singleTimesToRun\":[1311.0,1259.0,1412.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2487.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 93.24340906108772",
            "extra": "{\"totalTime\":2594.3333333333335,\"preparationTime\":106.66666666666667,\"singleTimesToRun\":[2542.0,2380.0,2541.0],\"postparationTime\":0.0}"
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
          "id": "f3e78d0e4dfc6992bb3a96f5c3a90aacd80f5182",
          "message": "Fix big bang issues when stepping back",
          "timestamp": "2022-02-18T00:08:12+01:00",
          "tree_id": "c0aa6f384df56bcca85eaf566064d26528289b4f",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/f3e78d0e4dfc6992bb3a96f5c3a90aacd80f5182"
        },
        "date": 1645140069997,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8728.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 122.78572121111368",
            "extra": "{\"totalTime\":8728.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8641.0,8676.0,8869.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7540.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 7.505553499465135",
            "extra": "{\"totalTime\":7542.0,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[7533.0,7541.0,7548.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 132.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 3.511884584284246",
            "extra": "{\"totalTime\":132.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[129.0,133.0,136.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3691,
            "unit": "Milliseconds",
            "range": "stdev: 169.81460479004744",
            "extra": "{\"totalTime\":3691.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3598.0,3588.0,3887.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 433,
            "unit": "Milliseconds",
            "range": "stdev: 33.95585369269929",
            "extra": "{\"totalTime\":433.0,\"preparationTime\":0.0,\"singleTimesToRun\":[472.0,417.0,410.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 14923.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1428.249394655336",
            "extra": "{\"totalTime\":15097.0,\"preparationTime\":173.33333333333334,\"singleTimesToRun\":[16563.0,13948.0,14260.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1429,
            "unit": "Milliseconds",
            "range": "stdev: 16.64331697709324",
            "extra": "{\"totalTime\":1520.6666666666667,\"preparationTime\":91.66666666666667,\"singleTimesToRun\":[1441.0,1410.0,1436.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2713.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 67.55985000970128",
            "extra": "{\"totalTime\":2822.3333333333335,\"preparationTime\":108.66666666666667,\"singleTimesToRun\":[2697.0,2656.0,2788.0],\"postparationTime\":0.0}"
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
          "id": "852c57e19dc41ac5d52513cb4c7e00fa93d2f109",
          "message": "Update #benchExpandAll, see cf2685f",
          "timestamp": "2022-02-19T03:17:38+01:00",
          "tree_id": "ae9278a5554a09699bf1d330a0df9c8e57755017",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/852c57e19dc41ac5d52513cb4c7e00fa93d2f109"
        },
        "date": 1645237716986,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8616.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 28.571547618799606",
            "extra": "{\"totalTime\":8616.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8629.0,8584.0,8637.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7096.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 43.558389930452364",
            "extra": "{\"totalTime\":7098.0,\"preparationTime\":1.6666666666666667,\"singleTimesToRun\":[7061.0,7145.0,7083.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 130,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":130.0,\"preparationTime\":0.0,\"singleTimesToRun\":[130.0,129.0,131.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3464.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 30.730007050655445",
            "extra": "{\"totalTime\":3464.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3432.0,3469.0,3493.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 389.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 7.023769168568492",
            "extra": "{\"totalTime\":389.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[397.0,383.0,389.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 16693.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 1548.0944200317156",
            "extra": "{\"totalTime\":16857.333333333332,\"preparationTime\":163.66666666666666,\"singleTimesToRun\":[18481.0,15826.0,15774.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1450.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 169.2522771880288",
            "extra": "{\"totalTime\":1539.6666666666667,\"preparationTime\":89.33333333333333,\"singleTimesToRun\":[1645.0,1368.0,1338.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2515.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 24.33789911502908",
            "extra": "{\"totalTime\":2623.6666666666665,\"preparationTime\":108.33333333333333,\"singleTimesToRun\":[2537.0,2520.0,2489.0],\"postparationTime\":0.0}"
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
          "id": "9b24dc658218a442339f2e15b47967d1c9b09bd9",
          "message": "Context tree: Display return values in tooltip\n\nAlso robustize tooltips and icons against model errors",
          "timestamp": "2022-02-19T03:49:31+01:00",
          "tree_id": "66543e0ef7b5f63ff47546abbb46901cdb486687",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/9b24dc658218a442339f2e15b47967d1c9b09bd9"
        },
        "date": 1645239621659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7981,
            "unit": "Milliseconds",
            "range": "stdev: 213.4291451512656",
            "extra": "{\"totalTime\":7981.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8025.0,7749.0,8169.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6978.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 373.63930913828295",
            "extra": "{\"totalTime\":6979.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[6623.0,6945.0,7368.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 124,
            "unit": "Milliseconds",
            "range": "stdev: 4.0",
            "extra": "{\"totalTime\":124.0,\"preparationTime\":0.0,\"singleTimesToRun\":[124.0,120.0,128.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3178.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 52.5959440768329",
            "extra": "{\"totalTime\":3178.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[3166.0,3133.0,3236.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 357,
            "unit": "Milliseconds",
            "range": "stdev: 8.18535277187245",
            "extra": "{\"totalTime\":357.0,\"preparationTime\":0.0,\"singleTimesToRun\":[366.0,355.0,350.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 15707,
            "unit": "Milliseconds",
            "range": "stdev: 1340.054849623701",
            "extra": "{\"totalTime\":15854.666666666666,\"preparationTime\":147.66666666666666,\"singleTimesToRun\":[17184.0,14569.0,15368.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1275.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 47.353282181210346",
            "extra": "{\"totalTime\":1358.3333333333333,\"preparationTime\":82.66666666666667,\"singleTimesToRun\":[1302.0,1221.0,1304.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2355.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 102.43209132558671",
            "extra": "{\"totalTime\":2457.0,\"preparationTime\":101.66666666666667,\"singleTimesToRun\":[2395.0,2239.0,2432.0],\"postparationTime\":0.0}"
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
          "id": "77e2c5e27191f30e1fa4c8b42fa3f22313f18e4f",
          "message": "Add preference to show return value in context tree",
          "timestamp": "2022-02-19T14:59:01+01:00",
          "tree_id": "fd4b9f75074758cfd2dea62af090cb4ca190992b",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/77e2c5e27191f30e1fa4c8b42fa3f22313f18e4f"
        },
        "date": 1645279748130,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7871,
            "unit": "Milliseconds",
            "range": "stdev: 91.84770002564028",
            "extra": "{\"totalTime\":7871.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7941.0,7905.0,7767.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5330.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 15.695009822658072",
            "extra": "{\"totalTime\":5331.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5318.0,5325.0,5348.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 112.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 3.2145502536643185",
            "extra": "{\"totalTime\":112.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[110.0,111.0,116.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2747.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 38.27967258654825",
            "extra": "{\"totalTime\":2747.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2788.0,2712.0,2742.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 294.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 4.509249752822894",
            "extra": "{\"totalTime\":294.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[299.0,290.0,295.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13138.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1289.8474069956235",
            "extra": "{\"totalTime\":13267.666666666666,\"preparationTime\":129.0,\"singleTimesToRun\":[14628.0,12383.0,12405.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1097,
            "unit": "Milliseconds",
            "range": "stdev: 14.422205101855956",
            "extra": "{\"totalTime\":1169.6666666666667,\"preparationTime\":72.66666666666667,\"singleTimesToRun\":[1101.0,1081.0,1109.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1980.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 34.31229128655406",
            "extra": "{\"totalTime\":2066.0,\"preparationTime\":85.66666666666667,\"singleTimesToRun\":[1975.0,1949.0,2017.0],\"postparationTime\":0.0}"
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
          "id": "e9770b348dfb1a9a0d2ed2d53e50402ba6eabb71",
          "message": "Clean up & reorganize context menus",
          "timestamp": "2022-02-19T16:14:32+01:00",
          "tree_id": "4ff1a6649a91606a6038b9c59141dfac77f15081",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/e9770b348dfb1a9a0d2ed2d53e50402ba6eabb71"
        },
        "date": 1645321145031,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7986.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 88.55694966140905",
            "extra": "{\"totalTime\":7986.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[8047.0,8028.0,7885.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6527.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 150.2043053089136",
            "extra": "{\"totalTime\":6528.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[6359.0,6647.0,6577.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 122.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 4.932882862316247",
            "extra": "{\"totalTime\":122.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[119.0,128.0,120.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3084.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 20.108041509140897",
            "extra": "{\"totalTime\":3084.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[3062.0,3090.0,3101.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 353.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 11.239810200058244",
            "extra": "{\"totalTime\":353.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[344.0,351.0,366.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 16214,
            "unit": "Milliseconds",
            "range": "stdev: 1206.3100762241854",
            "extra": "{\"totalTime\":16368.666666666666,\"preparationTime\":154.66666666666666,\"singleTimesToRun\":[17606.0,15474.0,15562.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1303,
            "unit": "Milliseconds",
            "range": "stdev: 52.028838157314254",
            "extra": "{\"totalTime\":1391.0,\"preparationTime\":88.0,\"singleTimesToRun\":[1305.0,1250.0,1354.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2460.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 20.984120980716188",
            "extra": "{\"totalTime\":2567.0,\"preparationTime\":106.66666666666667,\"singleTimesToRun\":[2444.0,2484.0,2453.0],\"postparationTime\":0.0}"
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
          "id": "01fcccfbac5f77015c1f8956478f8df163a1b9ba",
          "message": "Add msising method",
          "timestamp": "2022-02-21T22:46:09+01:00",
          "tree_id": "f1de32e80eaa0f868028e7a92107e5eedc589b0b",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/01fcccfbac5f77015c1f8956478f8df163a1b9ba"
        },
        "date": 1645480626686,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7072.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 20.840665376454115",
            "extra": "{\"totalTime\":7072.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7054.0,7068.0,7095.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5556.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 9.29157324317757",
            "extra": "{\"totalTime\":5557.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5546.0,5561.0,5563.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 106.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 6.658328118479393",
            "extra": "{\"totalTime\":106.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[99.0,110.0,111.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3045.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 25.02665245959462",
            "extra": "{\"totalTime\":3045.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3020.0,3047.0,3070.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 328.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 4.163331998932265",
            "extra": "{\"totalTime\":328.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[333.0,325.0,327.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13223,
            "unit": "Milliseconds",
            "range": "stdev: 1101.6065540836257",
            "extra": "{\"totalTime\":13352.333333333334,\"preparationTime\":129.33333333333334,\"singleTimesToRun\":[14495.0,12580.0,12594.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 947.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 9.50438495292217",
            "extra": "{\"totalTime\":1019.3333333333334,\"preparationTime\":71.66666666666667,\"singleTimesToRun\":[957.0,948.0,938.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2099,
            "unit": "Milliseconds",
            "range": "stdev: 17.578395831246947",
            "extra": "{\"totalTime\":2183.3333333333335,\"preparationTime\":84.33333333333333,\"singleTimesToRun\":[2119.0,2092.0,2086.0],\"postparationTime\":0.0}"
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
          "id": "105cecf2b96f0c1a3246db71d61d518e5974986b",
          "message": "Fix #decorateView:forObject: to handle models instead of views",
          "timestamp": "2022-03-10T23:31:47+01:00",
          "tree_id": "0026e99c5b8d5b5d3ea8c414b5738539f7f475cb",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/105cecf2b96f0c1a3246db71d61d518e5974986b"
        },
        "date": 1646952543369,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8528,
            "unit": "Milliseconds",
            "range": "stdev: 42.567593307585526",
            "extra": "{\"totalTime\":8528.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8520.0,8490.0,8574.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7321.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 87.15694655811053",
            "extra": "{\"totalTime\":7322.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[7222.0,7357.0,7385.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 135.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 6.8068592855540455",
            "extra": "{\"totalTime\":135.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[143.0,130.0,133.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3546,
            "unit": "Milliseconds",
            "range": "stdev: 39.585350825778974",
            "extra": "{\"totalTime\":3546.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3543.0,3508.0,3587.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 375.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 11.372481406154654",
            "extra": "{\"totalTime\":375.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[379.0,385.0,363.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 17591.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 1520.19417619373",
            "extra": "{\"totalTime\":17756.0,\"preparationTime\":164.66666666666666,\"singleTimesToRun\":[19346.0,16671.0,16757.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1427.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 74.5676426698158",
            "extra": "{\"totalTime\":1522.6666666666667,\"preparationTime\":95.33333333333333,\"singleTimesToRun\":[1500.0,1431.0,1351.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3540.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 9.865765724632494",
            "extra": "{\"totalTime\":3649.3333333333335,\"preparationTime\":108.66666666666667,\"singleTimesToRun\":[3552.0,3534.0,3536.0],\"postparationTime\":0.0}"
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
          "id": "2a9158faec9bc87f36a711b258d0dc9b5796fc11",
          "message": "Clean up & extend menus\n\n- Add \"more...\" menu items\n- Rename bottomContexts -> borderContexts\n- Rename context{Stack,}*Menu\n- Indicate current border contexts in menu item label",
          "timestamp": "2022-03-10T23:47:11+01:00",
          "tree_id": "4bef960941642492cc2b9b7c4e8da7568b2a457d",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/2a9158faec9bc87f36a711b258d0dc9b5796fc11"
        },
        "date": 1646953283691,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8573.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 148.00450443595741",
            "extra": "{\"totalTime\":8573.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8404.0,8638.0,8678.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7291.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 105.87886159821201",
            "extra": "{\"totalTime\":7292.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[7386.0,7311.0,7177.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 133.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 5.686240703077327",
            "extra": "{\"totalTime\":133.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[138.0,135.0,127.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3514,
            "unit": "Milliseconds",
            "range": "stdev: 90.07219326740079",
            "extra": "{\"totalTime\":3514.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3463.0,3461.0,3618.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 387,
            "unit": "Milliseconds",
            "range": "stdev: 15.716233645501712",
            "extra": "{\"totalTime\":387.0,\"preparationTime\":0.0,\"singleTimesToRun\":[405.0,376.0,380.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 16551.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 1346.6318477346856",
            "extra": "{\"totalTime\":16714.666666666668,\"preparationTime\":163.33333333333334,\"singleTimesToRun\":[18100.0,15656.0,15898.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1373,
            "unit": "Milliseconds",
            "range": "stdev: 57.19265687131522",
            "extra": "{\"totalTime\":1466.3333333333333,\"preparationTime\":93.33333333333333,\"singleTimesToRun\":[1408.0,1404.0,1307.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3350,
            "unit": "Milliseconds",
            "range": "stdev: 78.88599368709251",
            "extra": "{\"totalTime\":3452.6666666666665,\"preparationTime\":102.66666666666667,\"singleTimesToRun\":[3264.0,3419.0,3367.0],\"postparationTime\":0.0}"
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
          "id": "8905142b2567f62dceeb1863f7dde58598ab71d5",
          "message": "Test border contexts",
          "timestamp": "2022-03-11T00:09:14+01:00",
          "tree_id": "c45fc5d44f8f7b3e3386a8d7f4c34a76732c479e",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/8905142b2567f62dceeb1863f7dde58598ab71d5"
        },
        "date": 1646954515099,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6855.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 126.6109526594494",
            "extra": "{\"totalTime\":6855.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6996.0,6750.0,6821.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5435.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 50.14312847572769",
            "extra": "{\"totalTime\":5436.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5460.0,5469.0,5378.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 106.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 6.3508529610858835",
            "extra": "{\"totalTime\":106.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[110.0,110.0,99.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2735.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 70.21633238309542",
            "extra": "{\"totalTime\":2735.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2657.0,2792.0,2758.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 299.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 10.214368964029708",
            "extra": "{\"totalTime\":299.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[304.0,288.0,307.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13465,
            "unit": "Milliseconds",
            "range": "stdev: 1261.2307481186779",
            "extra": "{\"totalTime\":13601.333333333334,\"preparationTime\":136.33333333333334,\"singleTimesToRun\":[14914.0,12867.0,12614.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1174.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 32.254198693090075",
            "extra": "{\"totalTime\":1242.6666666666667,\"preparationTime\":68.0,\"singleTimesToRun\":[1145.0,1209.0,1170.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2652,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":2734.0,\"preparationTime\":82.0,\"singleTimesToRun\":[2651.0,2653.0,2652.0],\"postparationTime\":0.0}"
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
          "id": "f400223c0624c4385d713ceb510c6756952531fa",
          "message": "Merge branch 'main' into conveniences",
          "timestamp": "2022-03-11T14:15:27+01:00",
          "tree_id": "2857638d9da1b6702bba51eae19389b0e0f42b80",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/f400223c0624c4385d713ceb510c6756952531fa"
        },
        "date": 1647005422385,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8085.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 76.02850342689467",
            "extra": "{\"totalTime\":8085.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[8156.0,8096.0,8005.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6523.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 38.17503547258776",
            "extra": "{\"totalTime\":6524.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[6495.0,6567.0,6509.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 119,
            "unit": "Milliseconds",
            "range": "stdev: 2.0",
            "extra": "{\"totalTime\":119.0,\"preparationTime\":0.0,\"singleTimesToRun\":[121.0,117.0,119.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3139.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 23.094010767585033",
            "extra": "{\"totalTime\":3139.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[3166.0,3126.0,3126.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 350,
            "unit": "Milliseconds",
            "range": "stdev: 7.211102550927978",
            "extra": "{\"totalTime\":350.0,\"preparationTime\":0.0,\"singleTimesToRun\":[352.0,356.0,342.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 16910.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 1438.0668737347833",
            "extra": "{\"totalTime\":17069.0,\"preparationTime\":158.33333333333334,\"singleTimesToRun\":[18571.0,16103.0,16058.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1472.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 9.60902353693305",
            "extra": "{\"totalTime\":1558.6666666666667,\"preparationTime\":86.33333333333333,\"singleTimesToRun\":[1481.0,1474.0,1462.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3282,
            "unit": "Milliseconds",
            "range": "stdev: 44.170125650715555",
            "extra": "{\"totalTime\":3384.6666666666665,\"preparationTime\":102.66666666666667,\"singleTimesToRun\":[3231.0,3307.0,3308.0],\"postparationTime\":0.0}"
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
          "id": "9f5d1354f3451f34cffcbd6815741489a2d3e663",
          "message": "Merge pull request #42 from LinqLover/conveniences\n\nThis mega PR improves several conveniences aspects of the TraceDebugger. Amongst others, this includes:\r\n\r\n- feature: spawn trace (relates #29)\r\n- feature: toggle border context (closes #28)\r\n- feature: context search (closes #44)\r\n- feature: \"trace it\" button in the normal debugger (closes #36)\r\n- feature: navigation commands \"jump to presence\", \"jump to sender\", \"jump to callee\"\r\n- feature: snapshot inspectors & explorers\r\n- feature: run to selection\r\n- improve support for code evaluation in all code panes (syntax highlighting, access to instance variables)\r\n- working notifier window and proceed/abandon buttons, implement all remaining menu commands, clean up and rearrange menu items\r\n- stepping improvements (coroutines, EHS)\r\n- call tree convenience (scroll bar, display of return values, graying out dead contexts, adjust timeIndex when selecting context, support for type-to-filter)\r\n- preference to display stack list instead of stack tree\r\n- tracing improvements: fix tracing of coroutines and simulation (relates #14, closes #13); fix tracing of failed primitives",
          "timestamp": "2022-03-11T14:34:25+01:00",
          "tree_id": "2857638d9da1b6702bba51eae19389b0e0f42b80",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/9f5d1354f3451f34cffcbd6815741489a2d3e663"
        },
        "date": 1647006526504,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6187.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 12.055427546683418",
            "extra": "{\"totalTime\":6187.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6189.0,6175.0,6199.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4774.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 8.504900548115382",
            "extra": "{\"totalTime\":4775.333333333333,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[4783.0,4766.0,4775.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 91.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":91.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[91.0,90.0,93.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2376.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 42.15843134336634",
            "extra": "{\"totalTime\":2376.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2353.0,2425.0,2351.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 263,
            "unit": "Milliseconds",
            "range": "stdev: 1.7320508075688772",
            "extra": "{\"totalTime\":263.0,\"preparationTime\":0.0,\"singleTimesToRun\":[265.0,262.0,262.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 12487.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 956.2585075874272",
            "extra": "{\"totalTime\":12605.333333333334,\"preparationTime\":118.0,\"singleTimesToRun\":[13591.0,11965.0,11906.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1074.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":1138.0,\"preparationTime\":63.666666666666664,\"singleTimesToRun\":[1075.0,1076.0,1072.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2433.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 30.53413390507963",
            "extra": "{\"totalTime\":2511.0,\"preparationTime\":77.66666666666667,\"singleTimesToRun\":[2402.0,2463.0,2435.0],\"postparationTime\":0.0}"
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
          "id": "bfeae68219bf76a95ca560ed0ac46ee5ae42973c",
          "message": "Disable alternative method representations in trace debugger for now\n\nIn particular, this improves the interoperability with Sandblocks' #addSandblocksDefault preference.",
          "timestamp": "2022-03-11T15:01:05+01:00",
          "tree_id": "d6f9b450862b458be7e1f93b4c70128a1416b7cf",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/bfeae68219bf76a95ca560ed0ac46ee5ae42973c"
        },
        "date": 1647008229062,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8148.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 107.61195720426859",
            "extra": "{\"totalTime\":8148.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[8143.0,8259.0,8044.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6527,
            "unit": "Milliseconds",
            "range": "stdev: 166.28589837986863",
            "extra": "{\"totalTime\":6528.333333333333,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[6708.0,6381.0,6492.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 121.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 3.2145502536643185",
            "extra": "{\"totalTime\":121.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[125.0,120.0,119.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3171.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 63.51640208114227",
            "extra": "{\"totalTime\":3171.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3125.0,3244.0,3146.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 363.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 26.57693235370353",
            "extra": "{\"totalTime\":363.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[394.0,347.0,349.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 16958,
            "unit": "Milliseconds",
            "range": "stdev: 1620.9367661941658",
            "extra": "{\"totalTime\":17115.333333333332,\"preparationTime\":157.33333333333334,\"singleTimesToRun\":[18828.0,16092.0,15954.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1435,
            "unit": "Milliseconds",
            "range": "stdev: 21.166010488516726",
            "extra": "{\"totalTime\":1520.0,\"preparationTime\":85.0,\"singleTimesToRun\":[1443.0,1451.0,1411.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3296.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 18.147543451754935",
            "extra": "{\"totalTime\":3401.3333333333335,\"preparationTime\":105.0,\"singleTimesToRun\":[3283.0,3289.0,3317.0],\"postparationTime\":0.0}"
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
          "id": "7e9bd9d8b9b033c8b5c8c7ccf8d7e4097a229313",
          "message": "Fix tracing/stepBack over message sends",
          "timestamp": "2022-03-11T15:23:52+01:00",
          "tree_id": "d268367a880aed7176520b7e5854658e98b1a644",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/7e9bd9d8b9b033c8b5c8c7ccf8d7e4097a229313"
        },
        "date": 1647009553187,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6943,
            "unit": "Milliseconds",
            "range": "stdev: 29.546573405388315",
            "extra": "{\"totalTime\":6943.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6976.0,6919.0,6934.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5518.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 45.78573285788198",
            "extra": "{\"totalTime\":5519.0,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[5496.0,5571.0,5488.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 103.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":103.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[103.0,103.0,105.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2735.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 41.00406483915142",
            "extra": "{\"totalTime\":2735.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2694.0,2736.0,2776.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 302.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 4.932882862316247",
            "extra": "{\"totalTime\":302.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[299.0,308.0,300.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 14023,
            "unit": "Milliseconds",
            "range": "stdev: 1109.384063343259",
            "extra": "{\"totalTime\":14155.0,\"preparationTime\":132.0,\"singleTimesToRun\":[15304.0,13379.0,13386.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1207.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 9.71253485622231",
            "extra": "{\"totalTime\":1279.3333333333333,\"preparationTime\":72.0,\"singleTimesToRun\":[1218.0,1205.0,1199.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2871.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 64.23654204059659",
            "extra": "{\"totalTime\":2960.6666666666665,\"preparationTime\":89.0,\"singleTimesToRun\":[2798.0,2901.0,2916.0],\"postparationTime\":0.0}"
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
          "id": "457d9e0fac1e58ea98c9718fa2006f205d010ea7",
          "message": "Fix memory lookups of symbol modifications",
          "timestamp": "2022-03-11T15:26:20+01:00",
          "tree_id": "4f48b4158ab5fac008894f3d6888b21de7aa418d",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/457d9e0fac1e58ea98c9718fa2006f205d010ea7"
        },
        "date": 1647009603134,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7539,
            "unit": "Milliseconds",
            "range": "stdev: 196.1504524593303",
            "extra": "{\"totalTime\":7539.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7674.0,7629.0,7314.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6003.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 83.39264555902596",
            "extra": "{\"totalTime\":6004.0,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[5946.0,6099.0,5965.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 116,
            "unit": "Milliseconds",
            "range": "stdev: 1.7320508075688772",
            "extra": "{\"totalTime\":116.0,\"preparationTime\":0.0,\"singleTimesToRun\":[117.0,117.0,114.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2919.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 95.86622623913665",
            "extra": "{\"totalTime\":2919.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2880.0,3029.0,2850.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 327,
            "unit": "Milliseconds",
            "range": "stdev: 12.0",
            "extra": "{\"totalTime\":327.0,\"preparationTime\":0.0,\"singleTimesToRun\":[339.0,327.0,315.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 15145.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1164.3029388150376",
            "extra": "{\"totalTime\":15290.0,\"preparationTime\":144.66666666666666,\"singleTimesToRun\":[16480.0,14338.0,14618.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1305,
            "unit": "Milliseconds",
            "range": "stdev: 5.196152422706632",
            "extra": "{\"totalTime\":1385.0,\"preparationTime\":80.0,\"singleTimesToRun\":[1308.0,1308.0,1299.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3046,
            "unit": "Milliseconds",
            "range": "stdev: 52.716221412388805",
            "extra": "{\"totalTime\":3141.6666666666665,\"preparationTime\":95.66666666666667,\"singleTimesToRun\":[3093.0,2989.0,3056.0],\"postparationTime\":0.0}"
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
          "id": "6f046f7137010e0d8e4c9f96a84f233469bc4ba3",
          "message": "Fix TDBCursor >> #isContextAlive:",
          "timestamp": "2022-03-11T15:29:35+01:00",
          "tree_id": "1923382ceafaa156e55a87853a9715978bf67ec9",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/6f046f7137010e0d8e4c9f96a84f233469bc4ba3"
        },
        "date": 1647009881336,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7771,
            "unit": "Milliseconds",
            "range": "stdev: 354.2216820015398",
            "extra": "{\"totalTime\":7771.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7570.0,8180.0,7563.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6649.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 314.296569076618",
            "extra": "{\"totalTime\":6650.0,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[6996.0,6383.0,6569.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 118,
            "unit": "Milliseconds",
            "range": "stdev: 7.54983443527075",
            "extra": "{\"totalTime\":118.0,\"preparationTime\":0.0,\"singleTimesToRun\":[111.0,126.0,117.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3238.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 163.4390814136366",
            "extra": "{\"totalTime\":3238.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3134.0,3427.0,3155.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 339.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 8.962886439832502",
            "extra": "{\"totalTime\":339.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[335.0,350.0,334.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 15884.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1425.8423241485482",
            "extra": "{\"totalTime\":16042.666666666666,\"preparationTime\":158.33333333333334,\"singleTimesToRun\":[17460.0,15510.0,14683.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1406.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 106.2136212231432",
            "extra": "{\"totalTime\":1488.6666666666667,\"preparationTime\":82.33333333333333,\"singleTimesToRun\":[1527.0,1365.0,1327.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3028.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 71.51456728061308",
            "extra": "{\"totalTime\":3126.3333333333335,\"preparationTime\":98.0,\"singleTimesToRun\":[2946.0,3064.0,3075.0],\"postparationTime\":0.0}"
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
          "id": "595d71333f71713aeea9578d14e043688d033f66",
          "message": "Merge pull request #45 from LinqLover/cursor-fixes\n\n- Fix tracing/stepBack over message sends\r\n- Fix memory lookups of symbol modifications\r\n- Fix TDBCursor >> #isContextAlive:\r\n- Tests",
          "timestamp": "2022-03-11T15:44:48+01:00",
          "tree_id": "1923382ceafaa156e55a87853a9715978bf67ec9",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/595d71333f71713aeea9578d14e043688d033f66"
        },
        "date": 1647010791559,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8293,
            "unit": "Milliseconds",
            "range": "stdev: 102.19589032832974",
            "extra": "{\"totalTime\":8293.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8353.0,8351.0,8175.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6563.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 101.51026220699724",
            "extra": "{\"totalTime\":6564.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[6666.0,6463.0,6562.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 123.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 2.3094010767585034",
            "extra": "{\"totalTime\":123.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[125.0,125.0,121.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3281.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 112.25120637807565",
            "extra": "{\"totalTime\":3281.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3174.0,3398.0,3273.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 357.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 13.428824718989127",
            "extra": "{\"totalTime\":357.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[373.0,348.0,352.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 17376.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 1441.9696020836686",
            "extra": "{\"totalTime\":17536.0,\"preparationTime\":159.33333333333334,\"singleTimesToRun\":[19017.0,16309.0,16804.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1494,
            "unit": "Milliseconds",
            "range": "stdev: 27.49545416973504",
            "extra": "{\"totalTime\":1580.3333333333333,\"preparationTime\":86.33333333333333,\"singleTimesToRun\":[1518.0,1500.0,1464.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3366,
            "unit": "Milliseconds",
            "range": "stdev: 14.177446878757825",
            "extra": "{\"totalTime\":3471.6666666666665,\"preparationTime\":105.66666666666667,\"singleTimesToRun\":[3355.0,3382.0,3361.0],\"postparationTime\":0.0}"
          }
        ]
      }
    ]
  }
}