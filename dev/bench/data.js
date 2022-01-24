window.BENCHMARK_DATA = {
  "lastUpdate": 1643060548031,
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
      }
    ]
  }
}