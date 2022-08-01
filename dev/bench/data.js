window.BENCHMARK_DATA = {
  "lastUpdate": 1659313820923,
  "repoUrl": "https://github.com/hpi-swa-lab/squeak-tracedebugger",
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
          "id": "f6104d3685d243f6134583048a96edb8dc2d61d5",
          "message": "Fix baseline again to provide 'SimulationStudio-Support' for TraceDebuggerBenchmarks",
          "timestamp": "2022-03-11T16:05:52+01:00",
          "tree_id": "c58c00cbe957562e3fcf31cbae1fc8b3683e1086",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/f6104d3685d243f6134583048a96edb8dc2d61d5"
        },
        "date": 1647011954956,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6940.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 239.6775611802935",
            "extra": "{\"totalTime\":6940.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6670.0,7026.0,7126.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5481.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 49.92327446525652",
            "extra": "{\"totalTime\":5482.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5440.0,5537.0,5468.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 108,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":108.0,\"preparationTime\":0.0,\"singleTimesToRun\":[108.0,107.0,109.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2785,
            "unit": "Milliseconds",
            "range": "stdev: 165.42067585401773",
            "extra": "{\"totalTime\":2785.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2595.0,2863.0,2897.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 306.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 17.21433511156714",
            "extra": "{\"totalTime\":306.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[287.0,320.0,312.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13926,
            "unit": "Milliseconds",
            "range": "stdev: 1152.7276347862924",
            "extra": "{\"totalTime\":14060.333333333334,\"preparationTime\":134.33333333333334,\"singleTimesToRun\":[15257.0,13250.0,13271.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1216,
            "unit": "Milliseconds",
            "range": "stdev: 20.074859899884732",
            "extra": "{\"totalTime\":1288.3333333333333,\"preparationTime\":72.33333333333333,\"singleTimesToRun\":[1237.0,1214.0,1197.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2754,
            "unit": "Milliseconds",
            "range": "stdev: 26.90724809414742",
            "extra": "{\"totalTime\":2842.3333333333335,\"preparationTime\":88.33333333333333,\"singleTimesToRun\":[2724.0,2762.0,2776.0],\"postparationTime\":0.0}"
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
          "id": "68c28d970ff0080b781b00e464c69c8dc8985073",
          "message": "Merge branch 'main' into fix-baseline",
          "timestamp": "2022-03-11T16:33:08+01:00",
          "tree_id": "9f24b4e431cc670ab26176e278045bda54333fc6",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/68c28d970ff0080b781b00e464c69c8dc8985073"
        },
        "date": 1647013720089,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8683,
            "unit": "Milliseconds",
            "range": "stdev: 86.06973916540005",
            "extra": "{\"totalTime\":8683.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8687.0,8595.0,8767.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7128.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 247.00674754616185",
            "extra": "{\"totalTime\":7129.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[6940.0,7037.0,7408.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 130.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 8.386497083606082",
            "extra": "{\"totalTime\":130.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[126.0,125.0,140.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3381,
            "unit": "Milliseconds",
            "range": "stdev: 71.75653280364095",
            "extra": "{\"totalTime\":3381.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3313.0,3374.0,3456.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 374,
            "unit": "Milliseconds",
            "range": "stdev: 2.6457513110645907",
            "extra": "{\"totalTime\":374.0,\"preparationTime\":0.0,\"singleTimesToRun\":[372.0,377.0,373.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 18008.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 1410.8452549210822",
            "extra": "{\"totalTime\":18171.333333333332,\"preparationTime\":163.0,\"singleTimesToRun\":[19625.0,17026.0,17374.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1544.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 39.551653989856526",
            "extra": "{\"totalTime\":1633.6666666666667,\"preparationTime\":89.33333333333333,\"singleTimesToRun\":[1557.0,1576.0,1500.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3588,
            "unit": "Milliseconds",
            "range": "stdev: 71.71471257698799",
            "extra": "{\"totalTime\":3696.6666666666665,\"preparationTime\":108.66666666666667,\"singleTimesToRun\":[3527.0,3570.0,3667.0],\"postparationTime\":0.0}"
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
          "id": "b7679e56d417d26a3260c0ac28f439fd781304ff",
          "message": "Merge pull request #46 from LinqLover/fix-baseline\n\nRefine baseline dependencies and add #full group",
          "timestamp": "2022-03-11T16:48:45+01:00",
          "tree_id": "9f24b4e431cc670ab26176e278045bda54333fc6",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/b7679e56d417d26a3260c0ac28f439fd781304ff"
        },
        "date": 1647014649823,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7004.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 265.3042278843919",
            "extra": "{\"totalTime\":7004.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[6698.0,7160.0,7155.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5699.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 73.11862507824756",
            "extra": "{\"totalTime\":5700.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5780.0,5637.0,5682.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 109.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":109.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[108.0,111.0,109.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3016,
            "unit": "Milliseconds",
            "range": "stdev: 245.31000794912546",
            "extra": "{\"totalTime\":3016.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2733.0,3168.0,3147.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 321.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 18.147543451754935",
            "extra": "{\"totalTime\":322.0,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[301.0,329.0,335.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 14259,
            "unit": "Milliseconds",
            "range": "stdev: 1197.7366154543327",
            "extra": "{\"totalTime\":14393.333333333334,\"preparationTime\":134.33333333333334,\"singleTimesToRun\":[15642.0,13575.0,13560.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1244.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 20.5993527406405",
            "extra": "{\"totalTime\":1317.3333333333333,\"preparationTime\":73.0,\"singleTimesToRun\":[1252.0,1260.0,1221.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2810.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 33.005050118630834",
            "extra": "{\"totalTime\":2897.3333333333335,\"preparationTime\":86.66666666666667,\"singleTimesToRun\":[2774.0,2820.0,2838.0],\"postparationTime\":0.0}"
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
          "id": "72203dc3ca3f046e5b3382033b3da854ca930dc7",
          "message": "Add missing test selector for cursor assertions",
          "timestamp": "2022-03-11T19:01:32+01:00",
          "tree_id": "6045583bc184c49f9e36eb4021f7fe87e23761f0",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/72203dc3ca3f046e5b3382033b3da854ca930dc7"
        },
        "date": 1647022619118,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7632.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 136.63942817991202",
            "extra": "{\"totalTime\":7632.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7507.0,7612.0,7778.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6226,
            "unit": "Milliseconds",
            "range": "stdev: 74.50503338701353",
            "extra": "{\"totalTime\":6226.666666666667,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[6305.0,6216.0,6157.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 115.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 2.3094010767585034",
            "extra": "{\"totalTime\":115.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[117.0,113.0,117.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2997.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 57.36142722538669",
            "extra": "{\"totalTime\":2997.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2972.0,2957.0,3063.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 330.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 15.14375558880073",
            "extra": "{\"totalTime\":330.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[348.0,320.0,324.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 14907.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1241.94216183095",
            "extra": "{\"totalTime\":15048.666666666666,\"preparationTime\":141.33333333333334,\"singleTimesToRun\":[16332.0,14337.0,14053.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1048,
            "unit": "Milliseconds",
            "range": "stdev: 19.05255888325765",
            "extra": "{\"totalTime\":1125.3333333333333,\"preparationTime\":77.33333333333333,\"singleTimesToRun\":[1059.0,1059.0,1026.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3136,
            "unit": "Milliseconds",
            "range": "stdev: 35.510561809129406",
            "extra": "{\"totalTime\":3231.6666666666665,\"preparationTime\":95.66666666666667,\"singleTimesToRun\":[3156.0,3095.0,3157.0],\"postparationTime\":0.0}"
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
          "id": "053d484a176beef5319a77601179cb5ed9502ccf",
          "message": "Add method-based context filter presets (TDBContextFilter) and filtering UI\n\n- TDBContextFilter provides mean to filter contexts based on method units (selector, class, package, ...)\n- Menus to add or edit filters\n- Unit tests for TDBContextFilter\n- Acceptance tests for filter menus and jumping with filters",
          "timestamp": "2022-03-11T19:18:17+01:00",
          "tree_id": "8850794e24398197671c6bdc5da18e9116e9aa89",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/053d484a176beef5319a77601179cb5ed9502ccf"
        },
        "date": 1647023593781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7003,
            "unit": "Milliseconds",
            "range": "stdev: 53.563046963368315",
            "extra": "{\"totalTime\":7003.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7055.0,7006.0,6948.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5534.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 16.65332799572906",
            "extra": "{\"totalTime\":5535.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5521.0,5529.0,5553.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 105,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":105.0,\"preparationTime\":0.0,\"singleTimesToRun\":[104.0,105.0,106.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2758,
            "unit": "Milliseconds",
            "range": "stdev: 8.717797887081348",
            "extra": "{\"totalTime\":2758.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2768.0,2752.0,2754.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 301.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":301.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[302.0,303.0,299.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13720.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1342.9260342004445",
            "extra": "{\"totalTime\":13852.333333333334,\"preparationTime\":132.0,\"singleTimesToRun\":[15271.0,12950.0,12940.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 986.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 30.02221399786054",
            "extra": "{\"totalTime\":1056.3333333333333,\"preparationTime\":70.0,\"singleTimesToRun\":[1017.0,985.0,957.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2839.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 10.214368964029708",
            "extra": "{\"totalTime\":2924.6666666666665,\"preparationTime\":85.33333333333333,\"singleTimesToRun\":[2835.0,2851.0,2832.0],\"postparationTime\":0.0}"
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
          "id": "2a37961990adf89832f37ef15bb0f99d60977150",
          "message": "Add missing UIManager extension",
          "timestamp": "2022-03-11T19:43:29+01:00",
          "tree_id": "65d11c91f136c4e34d9ff8a897d3beb3c94958d2",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/2a37961990adf89832f37ef15bb0f99d60977150"
        },
        "date": 1647025172703,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7377.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 152.8932089182948",
            "extra": "{\"totalTime\":7377.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7551.0,7263.0,7318.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5942.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 281.9527147117639",
            "extra": "{\"totalTime\":5943.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5619.0,6137.0,6071.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 107,
            "unit": "Milliseconds",
            "range": "stdev: 7.937253933193772",
            "extra": "{\"totalTime\":107.0,\"preparationTime\":0.0,\"singleTimesToRun\":[110.0,98.0,113.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2858.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 212.71890685440573",
            "extra": "{\"totalTime\":2858.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2708.0,2766.0,3102.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 340,
            "unit": "Milliseconds",
            "range": "stdev: 20.8806130178211",
            "extra": "{\"totalTime\":340.0,\"preparationTime\":0.0,\"singleTimesToRun\":[330.0,364.0,326.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 14540.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 869.1376952665978",
            "extra": "{\"totalTime\":14679.666666666666,\"preparationTime\":139.0,\"singleTimesToRun\":[15527.0,13887.0,14208.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1050.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 32.331615074619044",
            "extra": "{\"totalTime\":1129.3333333333333,\"preparationTime\":78.66666666666667,\"singleTimesToRun\":[1016.0,1080.0,1056.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3094.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 266.7027058980342",
            "extra": "{\"totalTime\":3184.6666666666665,\"preparationTime\":90.0,\"singleTimesToRun\":[3215.0,3280.0,2789.0],\"postparationTime\":0.0}"
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
          "id": "e2ea71277975405fefa89b21c412824da11171ca",
          "message": "Merge pull request #47 from LinqLover/feat/context-filters\n\nThis PR adds support for context filters in the cursor interface and in the debugger UI. Context filters allow users to filter out irrelevant method invocations. By opening the context menu on any method, new filters can be defined quickly by example.",
          "timestamp": "2022-03-11T19:59:39+01:00",
          "tree_id": "65d11c91f136c4e34d9ff8a897d3beb3c94958d2",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/e2ea71277975405fefa89b21c412824da11171ca"
        },
        "date": 1647025988972,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8330.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 296.8237411888297",
            "extra": "{\"totalTime\":8330.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[7989.0,8478.0,8525.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7076.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 88.29684781085525",
            "extra": "{\"totalTime\":7077.666666666667,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[7177.0,7040.0,7012.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 129.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 7.505553499465135",
            "extra": "{\"totalTime\":129.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[121.0,134.0,134.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3645.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 216.64333207678777",
            "extra": "{\"totalTime\":3645.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3398.0,3739.0,3800.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 387.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 17.009801096230763",
            "extra": "{\"totalTime\":387.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[368.0,400.0,394.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 16418,
            "unit": "Milliseconds",
            "range": "stdev: 1289.9104620088947",
            "extra": "{\"totalTime\":16589.333333333332,\"preparationTime\":171.33333333333334,\"singleTimesToRun\":[17895.0,15513.0,15846.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1158,
            "unit": "Milliseconds",
            "range": "stdev: 4.58257569495584",
            "extra": "{\"totalTime\":1242.6666666666667,\"preparationTime\":84.66666666666667,\"singleTimesToRun\":[1153.0,1159.0,1162.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3481,
            "unit": "Milliseconds",
            "range": "stdev: 137.3935951927891",
            "extra": "{\"totalTime\":3586.0,\"preparationTime\":105.0,\"singleTimesToRun\":[3338.0,3493.0,3612.0],\"postparationTime\":0.0}"
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
          "id": "e2ea71277975405fefa89b21c412824da11171ca",
          "message": "Merge pull request #47 from LinqLover/feat/context-filters\n\nThis PR adds support for context filters in the cursor interface and in the debugger UI. Context filters allow users to filter out irrelevant method invocations. By opening the context menu on any method, new filters can be defined quickly by example.",
          "timestamp": "2022-03-11T19:59:39+01:00",
          "tree_id": "65d11c91f136c4e34d9ff8a897d3beb3c94958d2",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/e2ea71277975405fefa89b21c412824da11171ca"
        },
        "date": 1647026790001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6978.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 23.86070689089771",
            "extra": "{\"totalTime\":6978.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6986.0,6952.0,6998.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5513.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 83.72176140844945",
            "extra": "{\"totalTime\":5514.333333333333,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[5501.0,5437.0,5603.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 104.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":104.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[104.0,105.0,104.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2761.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 28.378395538390354",
            "extra": "{\"totalTime\":2761.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2736.0,2756.0,2792.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 301.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 4.163331998932265",
            "extra": "{\"totalTime\":301.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[303.0,297.0,305.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13735.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1200.3717479736572",
            "extra": "{\"totalTime\":13868.0,\"preparationTime\":132.66666666666666,\"singleTimesToRun\":[15120.0,13097.0,12989.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 981.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 32.86842456421259",
            "extra": "{\"totalTime\":1053.3333333333333,\"preparationTime\":72.0,\"singleTimesToRun\":[1009.0,990.0,945.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2857,
            "unit": "Milliseconds",
            "range": "stdev: 22.9128784747792",
            "extra": "{\"totalTime\":2942.3333333333335,\"preparationTime\":85.33333333333333,\"singleTimesToRun\":[2832.0,2877.0,2862.0],\"postparationTime\":0.0}"
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
          "id": "f482dda0ecb9b08ce006774f50800e8e27b08fe9",
          "message": "Add crash tests for all menus",
          "timestamp": "2022-03-11T20:12:06+01:00",
          "tree_id": "125f2168c804d845333950e4b668d968cd28ca65",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/f482dda0ecb9b08ce006774f50800e8e27b08fe9"
        },
        "date": 1647026836501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8304,
            "unit": "Milliseconds",
            "range": "stdev: 366.40960686095553",
            "extra": "{\"totalTime\":8304.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8660.0,7928.0,8324.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7150,
            "unit": "Milliseconds",
            "range": "stdev: 121.61825520866512",
            "extra": "{\"totalTime\":7151.0,\"preparationTime\":1.0,\"singleTimesToRun\":[7116.0,7285.0,7049.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 117,
            "unit": "Milliseconds",
            "range": "stdev: 6.557438524302",
            "extra": "{\"totalTime\":117.0,\"preparationTime\":0.0,\"singleTimesToRun\":[124.0,111.0,116.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3362,
            "unit": "Milliseconds",
            "range": "stdev: 67.20119046564577",
            "extra": "{\"totalTime\":3362.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3356.0,3298.0,3432.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 394.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 10.78579312490896",
            "extra": "{\"totalTime\":395.0,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[407.0,390.0,387.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 16117.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1427.2092815468002",
            "extra": "{\"totalTime\":16273.333333333334,\"preparationTime\":155.66666666666666,\"singleTimesToRun\":[17758.0,15435.0,15160.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1134.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 32.578111260988315",
            "extra": "{\"totalTime\":1222.6666666666667,\"preparationTime\":88.33333333333333,\"singleTimesToRun\":[1149.0,1157.0,1097.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3375,
            "unit": "Milliseconds",
            "range": "stdev: 51.73006862551025",
            "extra": "{\"totalTime\":3477.0,\"preparationTime\":102.0,\"singleTimesToRun\":[3319.0,3385.0,3421.0],\"postparationTime\":0.0}"
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
          "id": "5c420b7a7ab680411822ea8cf465d98e689783bb",
          "message": "Add UI crash tests for notifier window",
          "timestamp": "2022-03-11T20:13:01+01:00",
          "tree_id": "e08dacbeed3aa373f8c8644edc713c14c81d1e35",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/5c420b7a7ab680411822ea8cf465d98e689783bb"
        },
        "date": 1647029443650,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6993.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 192.2116888571903",
            "extra": "{\"totalTime\":6993.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[6942.0,7206.0,6832.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5997.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 15.88500340992514",
            "extra": "{\"totalTime\":5998.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5989.0,6016.0,5988.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 117,
            "unit": "Milliseconds",
            "range": "stdev: 7.54983443527075",
            "extra": "{\"totalTime\":117.0,\"preparationTime\":0.0,\"singleTimesToRun\":[125.0,110.0,116.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3083,
            "unit": "Milliseconds",
            "range": "stdev: 246.81774652564997",
            "extra": "{\"totalTime\":3083.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2940.0,3368.0,2941.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 343.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 23.96525262402492",
            "extra": "{\"totalTime\":343.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[316.0,357.0,358.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13655,
            "unit": "Milliseconds",
            "range": "stdev: 1166.8371780158532",
            "extra": "{\"totalTime\":13786.666666666666,\"preparationTime\":131.66666666666666,\"singleTimesToRun\":[15002.0,13008.0,12955.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 991,
            "unit": "Milliseconds",
            "range": "stdev: 41.036569057366385",
            "extra": "{\"totalTime\":1067.0,\"preparationTime\":76.0,\"singleTimesToRun\":[993.0,1031.0,949.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2979,
            "unit": "Milliseconds",
            "range": "stdev: 66.09084656743322",
            "extra": "{\"totalTime\":3066.0,\"preparationTime\":87.0,\"singleTimesToRun\":[2903.0,3023.0,3011.0],\"postparationTime\":0.0}"
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
          "id": "6e2bfbc72b2b6a898afa50ca3dac3e678be76e58",
          "message": "Convenience: TDBCursor>>#object:atTime:",
          "timestamp": "2022-03-11T21:16:49+01:00",
          "tree_id": "a02aff5465e8f8ede83422282bb1a2a6eee8209f",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/6e2bfbc72b2b6a898afa50ca3dac3e678be76e58"
        },
        "date": 1647030755609,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7931,
            "unit": "Milliseconds",
            "range": "stdev: 195.00769215597626",
            "extra": "{\"totalTime\":7931.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7735.0,7933.0,8125.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6869.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 89.27112261718979",
            "extra": "{\"totalTime\":6870.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[6887.0,6949.0,6773.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 124.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 8.504900548115382",
            "extra": "{\"totalTime\":124.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[131.0,128.0,115.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3449,
            "unit": "Milliseconds",
            "range": "stdev: 204.67779557147864",
            "extra": "{\"totalTime\":3449.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3213.0,3578.0,3556.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 386.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 32.715949219506584",
            "extra": "{\"totalTime\":386.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[349.0,408.0,403.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 15369.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1242.7752545546332",
            "extra": "{\"totalTime\":15522.0,\"preparationTime\":152.33333333333334,\"singleTimesToRun\":[16800.0,14554.0,14755.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1100.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 35.64173583501979",
            "extra": "{\"totalTime\":1180.3333333333333,\"preparationTime\":80.0,\"singleTimesToRun\":[1090.0,1140.0,1071.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3258.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 85.04312631443729",
            "extra": "{\"totalTime\":3356.3333333333335,\"preparationTime\":98.0,\"singleTimesToRun\":[3323.0,3162.0,3290.0],\"postparationTime\":0.0}"
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
          "id": "5184703a9122a9e63ee7139da4bb0280e8644b53",
          "message": "mv #isTdbProxy{,Class}",
          "timestamp": "2022-03-12T17:05:22+01:00",
          "tree_id": "bed6c1878828ad77e30512564b2cb934996ae6dc",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/5184703a9122a9e63ee7139da4bb0280e8644b53"
        },
        "date": 1647101961789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7819,
            "unit": "Milliseconds",
            "range": "stdev: 38.353617821530214",
            "extra": "{\"totalTime\":7819.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7854.0,7778.0,7825.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6129.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 49.08496035786658",
            "extra": "{\"totalTime\":6130.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[6186.0,6100.0,6102.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 115.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 5.507570547286102",
            "extra": "{\"totalTime\":115.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[109.0,118.0,119.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3009.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 13.650396819628847",
            "extra": "{\"totalTime\":3009.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3019.0,2994.0,3016.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 342.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 5.033222956847167",
            "extra": "{\"totalTime\":342.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[343.0,347.0,337.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 15189,
            "unit": "Milliseconds",
            "range": "stdev: 1228.4066916131644",
            "extra": "{\"totalTime\":15336.666666666666,\"preparationTime\":147.66666666666666,\"singleTimesToRun\":[16598.0,14626.0,14343.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1081,
            "unit": "Milliseconds",
            "range": "stdev: 28.0",
            "extra": "{\"totalTime\":1162.6666666666667,\"preparationTime\":81.66666666666667,\"singleTimesToRun\":[1113.0,1061.0,1069.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3160.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 21.82506204649447",
            "extra": "{\"totalTime\":3254.6666666666665,\"preparationTime\":94.0,\"singleTimesToRun\":[3137.0,3180.0,3165.0],\"postparationTime\":0.0}"
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
          "id": "e5d9f759ec90d08371aefb7529988552dcb757d9",
          "message": "jumpToSender: If no context is selected, jump to presence instead",
          "timestamp": "2022-03-12T19:34:07+01:00",
          "tree_id": "ea2714a1d936d5208191fc05aa52a9e1e23bffec",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/e5d9f759ec90d08371aefb7529988552dcb757d9"
        },
        "date": 1647110994992,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8040.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 209.87933040996043",
            "extra": "{\"totalTime\":8040.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[8280.0,7954.0,7888.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6758.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 28.93671255228094",
            "extra": "{\"totalTime\":6759.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[6792.0,6744.0,6740.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 123.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 7.76745346515403",
            "extra": "{\"totalTime\":123.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[132.0,117.0,121.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 4004,
            "unit": "Milliseconds",
            "range": "stdev: 1101.6392331430468",
            "extra": "{\"totalTime\":4004.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3379.0,3357.0,5276.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 358,
            "unit": "Milliseconds",
            "range": "stdev: 8.18535277187245",
            "extra": "{\"totalTime\":358.3333333333333,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[356.0,351.0,367.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 15890,
            "unit": "Milliseconds",
            "range": "stdev: 1478.4491874934356",
            "extra": "{\"totalTime\":16039.333333333334,\"preparationTime\":149.33333333333334,\"singleTimesToRun\":[17594.0,14948.0,15128.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1152.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 39.11947511576981",
            "extra": "{\"totalTime\":1234.3333333333333,\"preparationTime\":82.0,\"singleTimesToRun\":[1167.0,1182.0,1108.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3293.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 119.13997370040559",
            "extra": "{\"totalTime\":3398.0,\"preparationTime\":104.33333333333333,\"singleTimesToRun\":[3218.0,3232.0,3431.0],\"postparationTime\":0.0}"
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
          "id": "aa0657f9010f7655b94a2c6852a0aa9fed88043f",
          "message": "Add window menu items to inspect/explore and terminate process",
          "timestamp": "2022-03-12T19:40:45+01:00",
          "tree_id": "9830a6835ae3b3d180345f348672777eccc78efb",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/aa0657f9010f7655b94a2c6852a0aa9fed88043f"
        },
        "date": 1647111409637,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7062.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 32.65475973473597",
            "extra": "{\"totalTime\":7062.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[7032.0,7059.0,7097.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5487.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 55.18453889753301",
            "extra": "{\"totalTime\":5488.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5466.0,5550.0,5446.0],\"postparationTime\":0.0}"
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
            "value": 2771.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 58.34666514320534",
            "extra": "{\"totalTime\":2771.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2704.0,2803.0,2807.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 304,
            "unit": "Milliseconds",
            "range": "stdev: 7.211102550927978",
            "extra": "{\"totalTime\":304.0,\"preparationTime\":0.0,\"singleTimesToRun\":[296.0,306.0,310.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13539.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1097.1478174491044",
            "extra": "{\"totalTime\":13671.0,\"preparationTime\":131.66666666666666,\"singleTimesToRun\":[14806.0,12926.0,12886.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 955.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 15.947831618540915",
            "extra": "{\"totalTime\":1026.3333333333333,\"preparationTime\":71.0,\"singleTimesToRun\":[963.0,966.0,937.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2843.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 36.96394639825858",
            "extra": "{\"totalTime\":2928.3333333333335,\"preparationTime\":84.66666666666667,\"singleTimesToRun\":[2801.0,2864.0,2866.0],\"postparationTime\":0.0}"
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
          "id": "bbba0765d68cb5e07e503710d80211e967a723d6",
          "message": "Display message categories in \"find context\" dialog",
          "timestamp": "2022-02-14T01:35:12+01:00",
          "tree_id": "30f79a54da8d3ea9835893457dc09f5a743cc12b",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/bbba0765d68cb5e07e503710d80211e967a723d6"
        },
        "date": 1647111817974,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6989,
            "unit": "Milliseconds",
            "range": "stdev: 20.223748416156685",
            "extra": "{\"totalTime\":6989.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7004.0,6997.0,6966.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5469.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 18.147543451754935",
            "extra": "{\"totalTime\":5470.333333333333,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[5477.0,5449.0,5483.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 106.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 3.511884584284246",
            "extra": "{\"totalTime\":106.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[110.0,106.0,103.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2689.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 8.621678104251709",
            "extra": "{\"totalTime\":2689.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2682.0,2688.0,2699.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 299.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 10.016652800877813",
            "extra": "{\"totalTime\":299.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[310.0,290.0,299.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 11803.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1133.7038119955905",
            "extra": "{\"totalTime\":11941.0,\"preparationTime\":137.33333333333334,\"singleTimesToRun\":[13112.0,11111.0,11188.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1079,
            "unit": "Milliseconds",
            "range": "stdev: 13.892443989449804",
            "extra": "{\"totalTime\":1151.0,\"preparationTime\":72.0,\"singleTimesToRun\":[1088.0,1086.0,1063.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2809.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 56.0921860274079",
            "extra": "{\"totalTime\":2897.6666666666665,\"preparationTime\":88.33333333333333,\"singleTimesToRun\":[2745.0,2835.0,2848.0],\"postparationTime\":0.0}"
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
          "id": "86308b3fd0ccaebf5c8bef96aa584c0247e20aa1",
          "message": "Shift + red click on context in tree to select sender of invocation",
          "timestamp": "2022-03-12T20:55:07+01:00",
          "tree_id": "598df36f15cecb635dbe8880594fd279c205a2ee",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/86308b3fd0ccaebf5c8bef96aa584c0247e20aa1"
        },
        "date": 1647115778105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7809.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 74.09678355592322",
            "extra": "{\"totalTime\":7809.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7893.0,7783.0,7752.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5352.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 16.441816606851365",
            "extra": "{\"totalTime\":5353.0,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[5340.0,5371.0,5346.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 113.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":113.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[114.0,114.0,113.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2803,
            "unit": "Milliseconds",
            "range": "stdev: 25.11971337416094",
            "extra": "{\"totalTime\":2803.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2817.0,2818.0,2774.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 297.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 4.041451884327381",
            "extra": "{\"totalTime\":297.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[293.0,301.0,298.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13017.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1343.6741916600668",
            "extra": "{\"totalTime\":13148.0,\"preparationTime\":130.33333333333334,\"singleTimesToRun\":[14569.0,12220.0,12264.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 974,
            "unit": "Milliseconds",
            "range": "stdev: 33.8673884437522",
            "extra": "{\"totalTime\":1046.6666666666667,\"preparationTime\":72.66666666666667,\"singleTimesToRun\":[991.0,996.0,935.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2676,
            "unit": "Milliseconds",
            "range": "stdev: 42.7551166528639",
            "extra": "{\"totalTime\":2760.3333333333335,\"preparationTime\":84.33333333333333,\"singleTimesToRun\":[2642.0,2662.0,2724.0],\"postparationTime\":0.0}"
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
          "id": "b3259a8fa046f5eb75193117cacf3ea388fdf2db",
          "message": "Merge remote-tracking branch 'origin/main'",
          "timestamp": "2022-03-12T21:14:20+01:00",
          "tree_id": "598df36f15cecb635dbe8880594fd279c205a2ee",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/b3259a8fa046f5eb75193117cacf3ea388fdf2db"
        },
        "date": 1647116978478,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8319.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 243.52891683193053",
            "extra": "{\"totalTime\":8319.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8565.0,8315.0,8078.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7013.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 221.23366229697808",
            "extra": "{\"totalTime\":7015.0,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[7266.0,6853.0,6922.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 130,
            "unit": "Milliseconds",
            "range": "stdev: 12.767145334803704",
            "extra": "{\"totalTime\":130.0,\"preparationTime\":0.0,\"singleTimesToRun\":[133.0,116.0,141.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3513,
            "unit": "Milliseconds",
            "range": "stdev: 40.95119045888654",
            "extra": "{\"totalTime\":3513.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3557.0,3506.0,3476.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 387.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 9.451631252505218",
            "extra": "{\"totalTime\":387.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[391.0,377.0,395.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 16601,
            "unit": "Milliseconds",
            "range": "stdev: 1759.5820526477303",
            "extra": "{\"totalTime\":16760.333333333332,\"preparationTime\":159.33333333333334,\"singleTimesToRun\":[18624.0,15426.0,15753.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1208.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 60.47589051294188",
            "extra": "{\"totalTime\":1292.6666666666667,\"preparationTime\":84.0,\"singleTimesToRun\":[1224.0,1260.0,1142.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3426,
            "unit": "Milliseconds",
            "range": "stdev: 92.53647929330357",
            "extra": "{\"totalTime\":3529.6666666666665,\"preparationTime\":103.66666666666667,\"singleTimesToRun\":[3423.0,3335.0,3520.0],\"postparationTime\":0.0}"
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
          "id": "86308b3fd0ccaebf5c8bef96aa584c0247e20aa1",
          "message": "Shift + red click on context in tree to select sender of invocation",
          "timestamp": "2022-03-12T20:55:07+01:00",
          "tree_id": "598df36f15cecb635dbe8880594fd279c205a2ee",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/86308b3fd0ccaebf5c8bef96aa584c0247e20aa1"
        },
        "date": 1647117116744,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8077.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 182.83963829906614",
            "extra": "{\"totalTime\":8077.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7880.0,8111.0,8241.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6654.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 81.58635506831602",
            "extra": "{\"totalTime\":6655.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[6629.0,6746.0,6589.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 123.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 3.7859388972001824",
            "extra": "{\"totalTime\":123.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[119.0,125.0,126.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3523,
            "unit": "Milliseconds",
            "range": "stdev: 314.4153304150419",
            "extra": "{\"totalTime\":3523.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3160.0,3699.0,3710.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 383,
            "unit": "Milliseconds",
            "range": "stdev: 19.974984355438178",
            "extra": "{\"totalTime\":383.0,\"preparationTime\":0.0,\"singleTimesToRun\":[361.0,388.0,400.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 15939.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1245.347073443116",
            "extra": "{\"totalTime\":16095.666666666666,\"preparationTime\":156.0,\"singleTimesToRun\":[17377.0,15259.0,15183.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1125.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 11.718930554164631",
            "extra": "{\"totalTime\":1210.3333333333333,\"preparationTime\":84.66666666666667,\"singleTimesToRun\":[1121.0,1139.0,1117.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3367.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 39.551653989856526",
            "extra": "{\"totalTime\":3471.6666666666665,\"preparationTime\":104.33333333333333,\"singleTimesToRun\":[3344.0,3345.0,3413.0],\"postparationTime\":0.0}"
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
          "id": "5585a16a08712678f1ee3fea721bcd7f292c00b5",
          "message": "Fix stepThrough[Until] for still alive home contexts from other processes\n\nSee examples in TDBCursor>>#stepToHome:.",
          "timestamp": "2022-03-13T15:20:51+01:00",
          "tree_id": "6831bb270f2c6c0bcdf055bece390950bda2a3fb",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/5585a16a08712678f1ee3fea721bcd7f292c00b5"
        },
        "date": 1647182170125,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8453,
            "unit": "Milliseconds",
            "range": "stdev: 481.177721845058",
            "extra": "{\"totalTime\":8453.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8035.0,8979.0,8345.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7335.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 195.9345128693088",
            "extra": "{\"totalTime\":7336.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[7401.0,7490.0,7115.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 132,
            "unit": "Milliseconds",
            "range": "stdev: 14.0",
            "extra": "{\"totalTime\":132.0,\"preparationTime\":0.0,\"singleTimesToRun\":[118.0,146.0,132.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3849,
            "unit": "Milliseconds",
            "range": "stdev: 364.797203936653",
            "extra": "{\"totalTime\":3849.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3430.0,4096.0,4021.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 414.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 33.23151115031234",
            "extra": "{\"totalTime\":414.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[376.0,432.0,435.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 16617.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 1300.3516191143583",
            "extra": "{\"totalTime\":16783.333333333332,\"preparationTime\":165.66666666666666,\"singleTimesToRun\":[18115.0,15966.0,15772.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1196.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 52.00320502943385",
            "extra": "{\"totalTime\":1283.6666666666667,\"preparationTime\":87.0,\"singleTimesToRun\":[1205.0,1244.0,1141.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3481,
            "unit": "Milliseconds",
            "range": "stdev: 42.930175867331364",
            "extra": "{\"totalTime\":3585.3333333333335,\"preparationTime\":104.33333333333333,\"singleTimesToRun\":[3530.0,3463.0,3450.0],\"postparationTime\":0.0}"
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
          "id": "6050cf26601f15e9722cdc566955159dbda2a6c1",
          "message": "Add & test Process>>#{debugTrace,traceAndDebug}",
          "timestamp": "2022-03-13T16:22:58+01:00",
          "tree_id": "51236c76681f7b6de9f600c0b19877151eb25972",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/6050cf26601f15e9722cdc566955159dbda2a6c1"
        },
        "date": 1647185755542,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6789.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 91.66424239218549",
            "extra": "{\"totalTime\":6789.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6895.0,6746.0,6728.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5549,
            "unit": "Milliseconds",
            "range": "stdev: 30.4138126514911",
            "extra": "{\"totalTime\":5550.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5514.0,5564.0,5569.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 99.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 5.773502691896258",
            "extra": "{\"totalTime\":99.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[96.0,96.0,106.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3010,
            "unit": "Milliseconds",
            "range": "stdev: 35.79106033634656",
            "extra": "{\"totalTime\":3010.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3050.0,2981.0,2999.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 325.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":325.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[326.0,326.0,325.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13141.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1144.1509224456945",
            "extra": "{\"totalTime\":13269.0,\"preparationTime\":127.66666666666667,\"singleTimesToRun\":[14462.0,12450.0,12512.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 939,
            "unit": "Milliseconds",
            "range": "stdev: 17.435595774162696",
            "extra": "{\"totalTime\":1009.0,\"preparationTime\":70.0,\"singleTimesToRun\":[951.0,947.0,919.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2825.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 4.932882862316247",
            "extra": "{\"totalTime\":2911.0,\"preparationTime\":85.33333333333333,\"singleTimesToRun\":[2829.0,2828.0,2820.0],\"postparationTime\":0.0}"
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
          "id": "a5478d6b0bb9508a254d071b62fdc3f33936ede6",
          "message": "Fix #shrinkBorderContexts",
          "timestamp": "2022-03-13T18:58:53+01:00",
          "tree_id": "272fee8e23a8be618aa657cdb98061e6dc6babd0",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/a5478d6b0bb9508a254d071b62fdc3f33936ede6"
        },
        "date": 1647195213385,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6182.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 82.59741723161406",
            "extra": "{\"totalTime\":6182.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6276.0,6153.0,6119.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4923.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 49.16638417997945",
            "extra": "{\"totalTime\":4924.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[4949.0,4867.0,4955.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 94,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":94.0,\"preparationTime\":0.0,\"singleTimesToRun\":[95.0,94.0,93.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2485,
            "unit": "Milliseconds",
            "range": "stdev: 40.44749683231337",
            "extra": "{\"totalTime\":2485.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2531.0,2455.0,2469.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 266.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 4.509249752822894",
            "extra": "{\"totalTime\":266.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[271.0,267.0,262.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 11903.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1009.6461426328204",
            "extra": "{\"totalTime\":12022.0,\"preparationTime\":118.66666666666667,\"singleTimesToRun\":[13064.0,11228.0,11418.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 852.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 16.258331197676267",
            "extra": "{\"totalTime\":917.6666666666666,\"preparationTime\":65.33333333333333,\"singleTimesToRun\":[865.0,858.0,834.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2529.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 35.5715241918776",
            "extra": "{\"totalTime\":2606.6666666666665,\"preparationTime\":77.33333333333333,\"singleTimesToRun\":[2522.0,2498.0,2568.0],\"postparationTime\":0.0}"
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
          "id": "c85624b672fd3b2e0f212fbf60d20bdf823d8788",
          "message": "Display receiver and arguments in context tooltips",
          "timestamp": "2022-03-13T19:04:07+01:00",
          "tree_id": "a0116e19c7e10134957eaeef9789d8f6555086dc",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/c85624b672fd3b2e0f212fbf60d20bdf823d8788"
        },
        "date": 1647195674965,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7867.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 60.102689900979755",
            "extra": "{\"totalTime\":7867.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[7936.0,7844.0,7823.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6395.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 22.94195574342635",
            "extra": "{\"totalTime\":6396.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[6411.0,6406.0,6369.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 118.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 5.507570547286102",
            "extra": "{\"totalTime\":118.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[122.0,121.0,112.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3146.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 36.473734842120756",
            "extra": "{\"totalTime\":3146.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3187.0,3137.0,3116.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 346.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 6.429100507328637",
            "extra": "{\"totalTime\":346.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[349.0,351.0,339.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 15406.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1521.5233594438612",
            "extra": "{\"totalTime\":15553.666666666666,\"preparationTime\":147.33333333333334,\"singleTimesToRun\":[17103.0,14953.0,14163.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1200.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 196.0161557967438",
            "extra": "{\"totalTime\":1284.0,\"preparationTime\":83.33333333333333,\"singleTimesToRun\":[1422.0,1131.0,1049.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3259,
            "unit": "Milliseconds",
            "range": "stdev: 18.24828759089466",
            "extra": "{\"totalTime\":3355.6666666666665,\"preparationTime\":96.66666666666667,\"singleTimesToRun\":[3268.0,3271.0,3238.0],\"postparationTime\":0.0}"
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
          "id": "ab9c25597ea1ccfbaf4909e3787b4c4fbe237e61",
          "message": "Increase robustness of context icon computation",
          "timestamp": "2022-03-13T19:16:15+01:00",
          "tree_id": "d6a640bc1296c53b78158fbb7f93d5f49ecfeff4",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/ab9c25597ea1ccfbaf4909e3787b4c4fbe237e61"
        },
        "date": 1647196246309,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8917.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 171.03313519120596",
            "extra": "{\"totalTime\":8917.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[9034.0,8721.0,8997.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7415.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 204.45618927617068",
            "extra": "{\"totalTime\":7416.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[7467.0,7190.0,7589.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 140,
            "unit": "Milliseconds",
            "range": "stdev: 8.0",
            "extra": "{\"totalTime\":140.0,\"preparationTime\":0.0,\"singleTimesToRun\":[140.0,132.0,148.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3687,
            "unit": "Milliseconds",
            "range": "stdev: 116.60617479361889",
            "extra": "{\"totalTime\":3687.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3730.0,3555.0,3776.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 392,
            "unit": "Milliseconds",
            "range": "stdev: 10.44030650891055",
            "extra": "{\"totalTime\":392.0,\"preparationTime\":0.0,\"singleTimesToRun\":[397.0,399.0,380.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 17053.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 1212.892548139914",
            "extra": "{\"totalTime\":17217.0,\"preparationTime\":163.66666666666666,\"singleTimesToRun\":[18450.0,16265.0,16445.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1219.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 38.52704677669096",
            "extra": "{\"totalTime\":1311.0,\"preparationTime\":91.66666666666667,\"singleTimesToRun\":[1261.0,1212.0,1185.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3600.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 203.96159769263758",
            "extra": "{\"totalTime\":3711.6666666666665,\"preparationTime\":111.0,\"singleTimesToRun\":[3836.0,3475.0,3491.0],\"postparationTime\":0.0}"
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
          "id": "53135a6dc6a21330700fe943562bbfd38c33f8a5",
          "message": "Merge pull request #49 from LinqLover/feat/context-tooltips\n\nRich context tooltips",
          "timestamp": "2022-03-13T19:30:52+01:00",
          "tree_id": "d6a640bc1296c53b78158fbb7f93d5f49ecfeff4",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/53135a6dc6a21330700fe943562bbfd38c33f8a5"
        },
        "date": 1647197064534,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7717.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 54.84827557301445",
            "extra": "{\"totalTime\":7717.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[7781.0,7686.0,7686.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5373.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 25.540817005987364",
            "extra": "{\"totalTime\":5374.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5353.0,5402.0,5365.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 111,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":111.0,\"preparationTime\":0.0,\"singleTimesToRun\":[110.0,111.0,112.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2776,
            "unit": "Milliseconds",
            "range": "stdev: 41.90465367951393",
            "extra": "{\"totalTime\":2776.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2822.0,2766.0,2740.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 299,
            "unit": "Milliseconds",
            "range": "stdev: 6.082762530298219",
            "extra": "{\"totalTime\":299.0,\"preparationTime\":0.0,\"singleTimesToRun\":[306.0,295.0,296.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 12642,
            "unit": "Milliseconds",
            "range": "stdev: 1245.4023446260248",
            "extra": "{\"totalTime\":12770.666666666666,\"preparationTime\":128.66666666666666,\"singleTimesToRun\":[14080.0,11911.0,11935.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 941,
            "unit": "Milliseconds",
            "range": "stdev: 19.05255888325765",
            "extra": "{\"totalTime\":1012.0,\"preparationTime\":71.0,\"singleTimesToRun\":[952.0,952.0,919.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2690,
            "unit": "Milliseconds",
            "range": "stdev: 27.622454633866266",
            "extra": "{\"totalTime\":2773.0,\"preparationTime\":83.0,\"singleTimesToRun\":[2712.0,2699.0,2659.0],\"postparationTime\":0.0}"
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
          "id": "e2e83dcc857b0b9bd52aee9a193729a1be980046",
          "message": "Mark TDBTestCase as abstract",
          "timestamp": "2022-03-13T20:22:25+01:00",
          "tree_id": "feeed567cd4a54eefb10e83964f4a380acb5a67f",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/e2e83dcc857b0b9bd52aee9a193729a1be980046"
        },
        "date": 1647200158028,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7535.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 43.890014050274964",
            "extra": "{\"totalTime\":7535.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7509.0,7511.0,7586.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5341,
            "unit": "Milliseconds",
            "range": "stdev: 25.709920264364882",
            "extra": "{\"totalTime\":5342.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5321.0,5370.0,5332.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 107.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 5.773502691896258",
            "extra": "{\"totalTime\":107.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[104.0,104.0,114.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3046.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 258.74762478781",
            "extra": "{\"totalTime\":3046.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2748.0,3203.0,3189.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 319,
            "unit": "Milliseconds",
            "range": "stdev: 24.269322199023193",
            "extra": "{\"totalTime\":319.0,\"preparationTime\":0.0,\"singleTimesToRun\":[291.0,332.0,334.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 12587.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1221.6506592857604",
            "extra": "{\"totalTime\":12717.333333333334,\"preparationTime\":129.66666666666666,\"singleTimesToRun\":[13998.0,11857.0,11908.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 947.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 21.361959960016154",
            "extra": "{\"totalTime\":1018.3333333333334,\"preparationTime\":70.66666666666667,\"singleTimesToRun\":[960.0,960.0,923.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2676.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 50.40171954738582",
            "extra": "{\"totalTime\":2759.6666666666665,\"preparationTime\":83.33333333333333,\"singleTimesToRun\":[2730.0,2669.0,2630.0],\"postparationTime\":0.0}"
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
          "id": "1108ee7a6f6958e5fa4d4282e569bd5c9bdbb9e8",
          "message": "Revise semantics of #stepInto from non-top context\n\nInstead of doing a step over, just jump to the callee of the selected context.",
          "timestamp": "2022-03-13T20:41:04+01:00",
          "tree_id": "179014896b29283759af34cbff6b48e381151517",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/1108ee7a6f6958e5fa4d4282e569bd5c9bdbb9e8"
        },
        "date": 1647201288015,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7712,
            "unit": "Milliseconds",
            "range": "stdev: 22.338307903688676",
            "extra": "{\"totalTime\":7712.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7737.0,7694.0,7705.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6356,
            "unit": "Milliseconds",
            "range": "stdev: 41.7612260356422",
            "extra": "{\"totalTime\":6357.0,\"preparationTime\":1.0,\"singleTimesToRun\":[6328.0,6404.0,6336.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 114.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2.5166114784235836",
            "extra": "{\"totalTime\":114.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[114.0,112.0,117.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3229.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 39.46306289852998",
            "extra": "{\"totalTime\":3229.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3211.0,3203.0,3275.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 346.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 4.509249752822894",
            "extra": "{\"totalTime\":346.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[347.0,351.0,342.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 15749,
            "unit": "Milliseconds",
            "range": "stdev: 1318.8028662389236",
            "extra": "{\"totalTime\":15900.666666666666,\"preparationTime\":151.66666666666666,\"singleTimesToRun\":[17270.0,15053.0,14924.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1126,
            "unit": "Milliseconds",
            "range": "stdev: 45.044422518220834",
            "extra": "{\"totalTime\":1208.6666666666667,\"preparationTime\":82.66666666666667,\"singleTimesToRun\":[1153.0,1151.0,1074.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 3206,
            "unit": "Milliseconds",
            "range": "stdev: 19.0",
            "extra": "{\"totalTime\":3303.3333333333335,\"preparationTime\":97.33333333333333,\"singleTimesToRun\":[3227.0,3201.0,3190.0],\"postparationTime\":0.0}"
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
          "id": "46cdde7f87dbf908c224f885153acc94052db01f",
          "message": "Add docs for 1st UX study",
          "timestamp": "2022-03-14T01:24:15+01:00",
          "tree_id": "5b95b87234b112c8f39fa0de788e6fbfc0a858b3",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/46cdde7f87dbf908c224f885153acc94052db01f"
        },
        "date": 1647218344722,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6113,
            "unit": "Milliseconds",
            "range": "stdev: 16.522711641858304",
            "extra": "{\"totalTime\":6113.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6114.0,6096.0,6129.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4844.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 16.502525059315417",
            "extra": "{\"totalTime\":4845.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[4831.0,4840.0,4863.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 91.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":91.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[91.0,92.0,92.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2461.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 41.88476254359494",
            "extra": "{\"totalTime\":2461.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2510.0,2439.0,2436.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 271,
            "unit": "Milliseconds",
            "range": "stdev: 3.4641016151377544",
            "extra": "{\"totalTime\":271.0,\"preparationTime\":0.0,\"singleTimesToRun\":[275.0,269.0,269.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 11911.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 993.0832459231872",
            "extra": "{\"totalTime\":12026.666666666666,\"preparationTime\":115.33333333333333,\"singleTimesToRun\":[13058.0,11329.0,11347.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 855.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 22.03028218914441",
            "extra": "{\"totalTime\":920.6666666666666,\"preparationTime\":65.0,\"singleTimesToRun\":[857.0,877.0,833.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2503,
            "unit": "Milliseconds",
            "range": "stdev: 19.078784028338912",
            "extra": "{\"totalTime\":2579.6666666666665,\"preparationTime\":76.66666666666667,\"singleTimesToRun\":[2513.0,2515.0,2481.0],\"postparationTime\":0.0}"
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
          "id": "7be33281737304781d43fe4a1398db9dc5c5671e",
          "message": "Optimize TDBTrace>>#enableSimulatorDuring:\n\nWhen the recorded trace is already large, continuing stepping from presence is is accelerated by more than factor 6 with this patch. At the same time, no noticable slowdown was observed for smaller workloads.",
          "timestamp": "2022-03-14T19:38:32+01:00",
          "tree_id": "a1562c3ce96ba863cc9906f402d7905d63194497",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/7be33281737304781d43fe4a1398db9dc5c5671e"
        },
        "date": 1647291164889,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7033,
            "unit": "Milliseconds",
            "range": "stdev: 23.302360395462088",
            "extra": "{\"totalTime\":7033.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7040.0,7007.0,7052.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5585.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 48.27352621606727",
            "extra": "{\"totalTime\":5586.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5530.0,5616.0,5611.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 108,
            "unit": "Milliseconds",
            "range": "stdev: 1.7320508075688772",
            "extra": "{\"totalTime\":108.0,\"preparationTime\":0.0,\"singleTimesToRun\":[107.0,110.0,107.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2992.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 11.06044001535804",
            "extra": "{\"totalTime\":2992.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2981.0,3003.0,2994.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 320.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 3.0550504633038935",
            "extra": "{\"totalTime\":320.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[320.0,324.0,318.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13498.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1088.9928068326867",
            "extra": "{\"totalTime\":13645.0,\"preparationTime\":146.66666666666666,\"singleTimesToRun\":[14751.0,12967.0,12777.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 946,
            "unit": "Milliseconds",
            "range": "stdev: 26.90724809414742",
            "extra": "{\"totalTime\":1018.0,\"preparationTime\":72.0,\"singleTimesToRun\":[938.0,924.0,976.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1286.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 15.695009822658072",
            "extra": "{\"totalTime\":1359.6666666666667,\"preparationTime\":73.33333333333333,\"singleTimesToRun\":[1274.0,1304.0,1281.0],\"postparationTime\":0.0}"
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
          "id": "9b482132d790b875cc562c6c5964f78302303f4a",
          "message": "Merge pull request #63 from LinqLover/optimize/enableSimulatorDuring\n\nOptimize `TDBTrace>>#enableSimulatorDuring:`",
          "timestamp": "2022-03-14T22:04:20+01:00",
          "tree_id": "a1562c3ce96ba863cc9906f402d7905d63194497",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/9b482132d790b875cc562c6c5964f78302303f4a"
        },
        "date": 1647293251894,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8469.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 232.465768089268",
            "extra": "{\"totalTime\":8469.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8202.0,8586.0,8621.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6857.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 39.95414037785488",
            "extra": "{\"totalTime\":6858.666666666667,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[6902.0,6825.0,6845.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 126.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":126.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[127.0,127.0,126.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3419,
            "unit": "Milliseconds",
            "range": "stdev: 260.7374158037162",
            "extra": "{\"totalTime\":3419.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3247.0,3719.0,3291.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 395.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 20.647840887931437",
            "extra": "{\"totalTime\":395.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[372.0,410.0,405.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 16754.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 1340.6268434330761",
            "extra": "{\"totalTime\":16932.666666666668,\"preparationTime\":178.0,\"singleTimesToRun\":[18302.0,15941.0,16021.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1178.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 35.529330606322056",
            "extra": "{\"totalTime\":1265.0,\"preparationTime\":86.66666666666667,\"singleTimesToRun\":[1192.0,1138.0,1205.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1578,
            "unit": "Milliseconds",
            "range": "stdev: 34.39476704383968",
            "extra": "{\"totalTime\":1664.3333333333333,\"preparationTime\":86.33333333333333,\"singleTimesToRun\":[1569.0,1616.0,1549.0],\"postparationTime\":0.0}"
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
          "id": "fc35a6a9e65aadf7d033283d9facec10a4399030",
          "message": "CI debugging, love it so much",
          "timestamp": "2022-03-15T21:44:09+01:00",
          "tree_id": "e513eb1aeb9ab8e4e356a82f5bb0549e475cebf3",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/fc35a6a9e65aadf7d033283d9facec10a4399030"
        },
        "date": 1647377923699,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7114.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 198.45486472579435",
            "extra": "{\"totalTime\":7114.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[6967.0,7036.0,7340.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5618.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 45.72016331262754",
            "extra": "{\"totalTime\":5619.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5578.0,5668.0,5609.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 107.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 2.886751345948129",
            "extra": "{\"totalTime\":107.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[106.0,106.0,111.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2757.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 21.501937897160186",
            "extra": "{\"totalTime\":2757.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2779.0,2736.0,2757.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 301.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 5.686240703077327",
            "extra": "{\"totalTime\":301.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[308.0,300.0,297.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13679.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1167.1372384314252",
            "extra": "{\"totalTime\":13812.666666666666,\"preparationTime\":133.0,\"singleTimesToRun\":[15027.0,13033.0,12979.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 966,
            "unit": "Milliseconds",
            "range": "stdev: 39.395431207184416",
            "extra": "{\"totalTime\":1039.0,\"preparationTime\":73.0,\"singleTimesToRun\":[1010.0,934.0,954.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1288,
            "unit": "Milliseconds",
            "range": "stdev: 21.166010488516726",
            "extra": "{\"totalTime\":1373.0,\"preparationTime\":85.0,\"singleTimesToRun\":[1272.0,1312.0,1280.0],\"postparationTime\":0.0}"
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
          "id": "43e6fe182040931d5e170ad87de0b8147a3e44fc",
          "message": "Implement drag-to-spawn for context stack list",
          "timestamp": "2022-03-15T21:11:58+01:00",
          "tree_id": "a0a1bad1cf40094f0e91a3cebcc0f1df13cc0908",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/43e6fe182040931d5e170ad87de0b8147a3e44fc"
        },
        "date": 1647378553469,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8481,
            "unit": "Milliseconds",
            "range": "stdev: 136.10657588816198",
            "extra": "{\"totalTime\":8481.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8381.0,8426.0,8636.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6869.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 123.3139624427556",
            "extra": "{\"totalTime\":6870.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[6944.0,6937.0,6727.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 127.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":127.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[125.0,129.0,128.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3572.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 56.03867711976554",
            "extra": "{\"totalTime\":3572.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[3538.0,3542.0,3637.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 382.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 17.95364401266031",
            "extra": "{\"totalTime\":382.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[389.0,396.0,362.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 17111.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 1450.428327540983",
            "extra": "{\"totalTime\":17274.0,\"preparationTime\":162.66666666666666,\"singleTimesToRun\":[18786.0,16255.0,16293.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1237,
            "unit": "Milliseconds",
            "range": "stdev: 10.14889156509222",
            "extra": "{\"totalTime\":1324.3333333333333,\"preparationTime\":87.33333333333333,\"singleTimesToRun\":[1248.0,1228.0,1235.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1654.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 28.360771028541052",
            "extra": "{\"totalTime\":1759.0,\"preparationTime\":104.33333333333333,\"singleTimesToRun\":[1687.0,1634.0,1643.0],\"postparationTime\":0.0}"
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
          "id": "1e791c57481168c41646e58c158b10d6d75c87b8",
          "message": "Fix cmd + l (cancel) in proxy holders",
          "timestamp": "2022-03-15T21:12:36+01:00",
          "tree_id": "c26b37f26cf9c8020f460104a75c24d7f5dae51f",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/1e791c57481168c41646e58c158b10d6d75c87b8"
        },
        "date": 1647379723099,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7404.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 358.00325883060526",
            "extra": "{\"totalTime\":7404.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7815.0,7240.0,7158.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6295.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 330.3715080531815",
            "extra": "{\"totalTime\":6296.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[6450.0,5916.0,6520.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 106,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":106.0,\"preparationTime\":0.0,\"singleTimesToRun\":[107.0,105.0,106.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3205,
            "unit": "Milliseconds",
            "range": "stdev: 297.29951227676105",
            "extra": "{\"totalTime\":3205.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3088.0,2984.0,3543.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 334.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 4.618802153517007",
            "extra": "{\"totalTime\":334.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[329.0,337.0,337.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13834.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1219.0407430981682",
            "extra": "{\"totalTime\":13979.0,\"preparationTime\":144.33333333333334,\"singleTimesToRun\":[15225.0,13330.0,12949.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 989.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 70.54313101453134",
            "extra": "{\"totalTime\":1064.3333333333333,\"preparationTime\":75.0,\"singleTimesToRun\":[1045.0,910.0,1013.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1439.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 33.94603560555096",
            "extra": "{\"totalTime\":1529.0,\"preparationTime\":89.33333333333333,\"singleTimesToRun\":[1470.0,1403.0,1446.0],\"postparationTime\":0.0}"
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
          "id": "014b2e85ffe59d26314071fdc90186b3c0126405",
          "message": "Split up TDBTrace into TDBChildTrace and TDBRootTrace\n\nPros:\n- disjunct state & behavior for different tree nodes\n- less space overhead for unused variables\nCon:\n- additional super sends in performance-critical messages on TDBChildTrace",
          "timestamp": "2022-03-15T22:19:24+01:00",
          "tree_id": "59900c893f8087247b1cc110a22cc4ac3ed418be",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/014b2e85ffe59d26314071fdc90186b3c0126405"
        },
        "date": 1647379973427,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8515,
            "unit": "Milliseconds",
            "range": "stdev: 278.25348155953054",
            "extra": "{\"totalTime\":8515.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8450.0,8820.0,8275.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7037,
            "unit": "Milliseconds",
            "range": "stdev: 233.78836583542818",
            "extra": "{\"totalTime\":7038.0,\"preparationTime\":1.0,\"singleTimesToRun\":[6869.0,6938.0,7304.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 124.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 6.027713773341709",
            "extra": "{\"totalTime\":124.66666666666667,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[118.0,125.0,130.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3743.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 312.1703594727298",
            "extra": "{\"totalTime\":3743.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[3678.0,3469.0,4083.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 426.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 6.429100507328637",
            "extra": "{\"totalTime\":426.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[424.0,422.0,434.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 16617.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 1295.2873555058482",
            "extra": "{\"totalTime\":16782.666666666668,\"preparationTime\":165.0,\"singleTimesToRun\":[17945.0,16551.0,15357.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1182.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 53.500778810530726",
            "extra": "{\"totalTime\":1270.6666666666667,\"preparationTime\":88.33333333333333,\"singleTimesToRun\":[1201.0,1224.0,1122.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1627.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 142.97668807652994",
            "extra": "{\"totalTime\":1730.0,\"preparationTime\":102.33333333333333,\"singleTimesToRun\":[1786.0,1589.0,1508.0],\"postparationTime\":0.0}"
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
          "id": "1b33f36c87d150bf781eec5b9d7dd5fbcccdace6",
          "message": "Optimize TDBChildTrace",
          "timestamp": "2022-03-15T22:51:45+01:00",
          "tree_id": "511e84833416d59e60620594ca0404807a6efd57",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/1b33f36c87d150bf781eec5b9d7dd5fbcccdace6"
        },
        "date": 1647381948311,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7983.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 247.56076695093134",
            "extra": "{\"totalTime\":7983.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7698.0,8141.0,8111.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6723.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 139.6579153980659",
            "extra": "{\"totalTime\":6724.666666666667,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[6655.0,6884.0,6631.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 121,
            "unit": "Milliseconds",
            "range": "stdev: 9.539392014169456",
            "extra": "{\"totalTime\":121.0,\"preparationTime\":0.0,\"singleTimesToRun\":[127.0,126.0,110.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3610.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 279.68970902293376",
            "extra": "{\"totalTime\":3610.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3313.0,3868.0,3651.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 379.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 20.79262689833426",
            "extra": "{\"totalTime\":379.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[371.0,364.0,403.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 16082,
            "unit": "Milliseconds",
            "range": "stdev: 1527.6776492441068",
            "extra": "{\"totalTime\":16232.666666666666,\"preparationTime\":150.66666666666666,\"singleTimesToRun\":[17840.0,15329.0,15077.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1136.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 60.28543218169157",
            "extra": "{\"totalTime\":1222.3333333333333,\"preparationTime\":86.0,\"singleTimesToRun\":[1159.0,1068.0,1182.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1488,
            "unit": "Milliseconds",
            "range": "stdev: 41.7612260356422",
            "extra": "{\"totalTime\":1589.6666666666667,\"preparationTime\":101.66666666666667,\"singleTimesToRun\":[1460.0,1468.0,1536.0],\"postparationTime\":0.0}"
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
          "id": "ace4ace6535e8e70585ad2c89b4f7af197ee138d",
          "message": "Merge pull request #67 from LinqLover/refactor/trace-hierarchy\n\nRefactoring: Split up TDBTrace into TDBChildTrace and TDBRootTrace\r\n\r\nPros:\r\n\r\n* disjunct state & behavior for different tree nodes\r\n* less space overhead for unused variables\r\n\r\nCons:\r\n\r\n* Performance assessment: This shouldn't actually be more inefficient, however some locally run benchmark suggested this (while in other runs no difference could be shown). Without a proper benchmarking system with a higher significance we cannot detect any slowdown here.",
          "timestamp": "2022-03-15T23:15:56+01:00",
          "tree_id": "511e84833416d59e60620594ca0404807a6efd57",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/ace4ace6535e8e70585ad2c89b4f7af197ee138d"
        },
        "date": 1647383292646,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6882,
            "unit": "Milliseconds",
            "range": "stdev: 270.2720851290418",
            "extra": "{\"totalTime\":6882.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6571.0,7015.0,7060.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5600.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 88.00189391901367",
            "extra": "{\"totalTime\":5601.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5512.0,5688.0,5601.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 108.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":108.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[109.0,109.0,108.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2917,
            "unit": "Milliseconds",
            "range": "stdev: 211.53959440256097",
            "extra": "{\"totalTime\":2917.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2674.0,3017.0,3060.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 319.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 7.505553499465135",
            "extra": "{\"totalTime\":319.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[315.0,328.0,315.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13266.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1091.1816225236446",
            "extra": "{\"totalTime\":13394.0,\"preparationTime\":127.33333333333333,\"singleTimesToRun\":[14520.0,12528.0,12752.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 920.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 14.011899704655802",
            "extra": "{\"totalTime\":991.0,\"preparationTime\":70.33333333333333,\"singleTimesToRun\":[932.0,905.0,925.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1260.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 10.598742063723098",
            "extra": "{\"totalTime\":1343.6666666666667,\"preparationTime\":83.0,\"singleTimesToRun\":[1259.0,1272.0,1251.0],\"postparationTime\":0.0}"
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
          "id": "d1814210c515aa66f74bd6754efa9033c133f316",
          "message": "Fix forward-stepping when turning on a filter that excludes the active context\n\n#stepUntil: is private and must not be sent without an enclosing #doStepForward:. Also, we have exactly #doStepUntil: for that purpose. Also made the defect more visible and fixed two tests.",
          "timestamp": "2022-03-16T00:03:56+01:00",
          "tree_id": "89aa51e02ace7607b06e224c30b82a1442e72c1e",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/d1814210c515aa66f74bd6754efa9033c133f316"
        },
        "date": 1647386551435,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8519,
            "unit": "Milliseconds",
            "range": "stdev: 67.55738301621814",
            "extra": "{\"totalTime\":8519.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8479.0,8597.0,8481.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7089.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 67.67815994346576",
            "extra": "{\"totalTime\":7091.0,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[7136.0,7121.0,7012.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 127.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 3.2145502536643185",
            "extra": "{\"totalTime\":127.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[125.0,126.0,131.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3511,
            "unit": "Milliseconds",
            "range": "stdev: 55.560777532356404",
            "extra": "{\"totalTime\":3511.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3490.0,3574.0,3469.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 389.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 13.051181300301261",
            "extra": "{\"totalTime\":389.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[376.0,402.0,391.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 16711.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 1293.5147209573354",
            "extra": "{\"totalTime\":16875.0,\"preparationTime\":163.66666666666666,\"singleTimesToRun\":[18192.0,15801.0,16141.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1161.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 37.072002014098636",
            "extra": "{\"totalTime\":1248.3333333333333,\"preparationTime\":87.0,\"singleTimesToRun\":[1149.0,1132.0,1203.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1624.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 26.6520793435209",
            "extra": "{\"totalTime\":1726.6666666666667,\"preparationTime\":102.0,\"singleTimesToRun\":[1605.0,1614.0,1655.0],\"postparationTime\":0.0}"
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
          "id": "4f0ccb3fc46844c6e63c3f34296f9cfbe0d533ce",
          "message": "Remove dead code",
          "timestamp": "2022-03-17T16:43:17+01:00",
          "tree_id": "27213a2dd2b776f3ee0f4283590b9c3621e0fc31",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/4f0ccb3fc46844c6e63c3f34296f9cfbe0d533ce"
        },
        "date": 1647532783842,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6928,
            "unit": "Milliseconds",
            "range": "stdev: 24.06241883103193",
            "extra": "{\"totalTime\":6928.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6930.0,6903.0,6951.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5032.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 62.788003100380045",
            "extra": "{\"totalTime\":5033.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[4961.0,5059.0,5078.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 105.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":105.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[107.0,104.0,105.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2732.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 21.1266025033211",
            "extra": "{\"totalTime\":2732.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2713.0,2755.0,2730.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 307.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 9.814954576223638",
            "extra": "{\"totalTime\":307.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[296.0,313.0,313.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13392.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1132.438224952396",
            "extra": "{\"totalTime\":13521.666666666666,\"preparationTime\":129.0,\"singleTimesToRun\":[14700.0,12763.0,12715.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 928,
            "unit": "Milliseconds",
            "range": "stdev: 25.11971337416094",
            "extra": "{\"totalTime\":1012.6666666666666,\"preparationTime\":84.66666666666667,\"singleTimesToRun\":[943.0,942.0,899.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1294,
            "unit": "Milliseconds",
            "range": "stdev: 12.767145334803704",
            "extra": "{\"totalTime\":1367.6666666666667,\"preparationTime\":73.66666666666667,\"singleTimesToRun\":[1291.0,1308.0,1283.0],\"postparationTime\":0.0}"
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
          "id": "627bba30e961f3e4ea9d07d5e942dbb4ae0b8de7",
          "message": "Increase timeout for #testBuildDebugger",
          "timestamp": "2022-03-17T19:49:38+01:00",
          "tree_id": "df7c05c4dfba8bb6c804d2a016b703e04323c505",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/627bba30e961f3e4ea9d07d5e942dbb4ae0b8de7"
        },
        "date": 1647543866167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6920,
            "unit": "Milliseconds",
            "range": "stdev: 39.28103868280471",
            "extra": "{\"totalTime\":6920.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6886.0,6911.0,6963.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5042.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 13.203534880225574",
            "extra": "{\"totalTime\":5043.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5054.0,5045.0,5028.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 104.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":104.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[105.0,105.0,104.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2719.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 30.171730698343",
            "extra": "{\"totalTime\":2719.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2685.0,2734.0,2740.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 291.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 2.3094010767585034",
            "extra": "{\"totalTime\":291.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[293.0,293.0,289.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13334,
            "unit": "Milliseconds",
            "range": "stdev: 1106.882107543527",
            "extra": "{\"totalTime\":13461.666666666666,\"preparationTime\":127.66666666666667,\"singleTimesToRun\":[14612.0,12710.0,12680.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 928,
            "unit": "Milliseconds",
            "range": "stdev: 19.974984355438178",
            "extra": "{\"totalTime\":1013.3333333333334,\"preparationTime\":85.33333333333333,\"singleTimesToRun\":[938.0,941.0,905.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1282.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 15.631165450257807",
            "extra": "{\"totalTime\":1352.6666666666667,\"preparationTime\":70.33333333333333,\"singleTimesToRun\":[1299.0,1268.0,1280.0],\"postparationTime\":0.0}"
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
          "id": "54141ced82ea6c4c51f3fea618be780afc41b3a1",
          "message": "Revise senders of #tdbproxyYourself and users of thisContext",
          "timestamp": "2022-03-17T19:55:10+01:00",
          "tree_id": "1f04d022bdde38b1e72ab0e818500b15e6316376",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/54141ced82ea6c4c51f3fea618be780afc41b3a1"
        },
        "date": 1647544267870,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7947.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 174.64630924624012",
            "extra": "{\"totalTime\":7947.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7750.0,8082.0,8010.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5805.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 142.00469475807247",
            "extra": "{\"totalTime\":5806.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5807.0,5663.0,5947.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 118,
            "unit": "Milliseconds",
            "range": "stdev: 3.4641016151377544",
            "extra": "{\"totalTime\":118.0,\"preparationTime\":0.0,\"singleTimesToRun\":[114.0,120.0,120.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3019.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 55.82412859448264",
            "extra": "{\"totalTime\":3019.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2984.0,2991.0,3084.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 328.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 7.234178138070235",
            "extra": "{\"totalTime\":328.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[320.0,332.0,333.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 15775.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1601.3323619203272",
            "extra": "{\"totalTime\":15923.0,\"preparationTime\":147.66666666666666,\"singleTimesToRun\":[17624.0,14818.0,14884.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1054.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 13.576941236277534",
            "extra": "{\"totalTime\":1135.6666666666667,\"preparationTime\":81.0,\"singleTimesToRun\":[1069.0,1053.0,1042.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1430.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 55.32027958473577",
            "extra": "{\"totalTime\":1536.3333333333333,\"preparationTime\":105.66666666666667,\"singleTimesToRun\":[1367.0,1458.0,1467.0],\"postparationTime\":0.0}"
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
          "id": "e0aa7ceb2ee954eb259222bab5118c1439327eae",
          "message": "Increase timeout for #testBuildDebugger again",
          "timestamp": "2022-03-18T02:42:44+01:00",
          "tree_id": "a4ad23312d9df135f089c821cf8ddce8948a772f",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/e0aa7ceb2ee954eb259222bab5118c1439327eae"
        },
        "date": 1647568165889,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6903.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 242.57438721623794",
            "extra": "{\"totalTime\":6903.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6832.0,7174.0,6705.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4971,
            "unit": "Milliseconds",
            "range": "stdev: 97.32420048477151",
            "extra": "{\"totalTime\":4972.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5083.0,4923.0,4907.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 101.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 3.511884584284246",
            "extra": "{\"totalTime\":101.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[105.0,102.0,98.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2675,
            "unit": "Milliseconds",
            "range": "stdev: 156.9044295104507",
            "extra": "{\"totalTime\":2675.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2620.0,2553.0,2852.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 281.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 10.96965511460289",
            "extra": "{\"totalTime\":281.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[275.0,275.0,294.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13646,
            "unit": "Milliseconds",
            "range": "stdev: 1300.1534524816677",
            "extra": "{\"totalTime\":13775.333333333334,\"preparationTime\":129.33333333333334,\"singleTimesToRun\":[15144.0,12983.0,12811.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 924.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 19.73153144926499",
            "extra": "{\"totalTime\":997.0,\"preparationTime\":72.66666666666667,\"singleTimesToRun\":[947.0,915.0,911.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1190.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 46.715450691750085",
            "extra": "{\"totalTime\":1276.6666666666667,\"preparationTime\":86.0,\"singleTimesToRun\":[1171.0,1157.0,1244.0],\"postparationTime\":0.0}"
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
          "id": "e890d33191c95b33f7dcf5c625844031ec8fd048",
          "message": "Add very simple welcome contents",
          "timestamp": "2022-03-18T03:00:37+01:00",
          "tree_id": "def22b9b02094e6e190aec6b7ac315e991c6c034",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/e890d33191c95b33f7dcf5c625844031ec8fd048"
        },
        "date": 1647569257882,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7002.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 45.981880489311585",
            "extra": "{\"totalTime\":7002.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[6953.0,7010.0,7044.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5209.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 111.79147254300453",
            "extra": "{\"totalTime\":5211.0,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[5225.0,5313.0,5091.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 105.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":105.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[106.0,106.0,105.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2704.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 91.88217092196578",
            "extra": "{\"totalTime\":2704.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2621.0,2803.0,2690.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 293.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 5.507570547286102",
            "extra": "{\"totalTime\":293.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[293.0,299.0,288.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 14042,
            "unit": "Milliseconds",
            "range": "stdev: 1313.7880346539923",
            "extra": "{\"totalTime\":14171.0,\"preparationTime\":129.0,\"singleTimesToRun\":[15559.0,13292.0,13275.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 944.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 15.53490693030806",
            "extra": "{\"totalTime\":1016.6666666666666,\"preparationTime\":72.0,\"singleTimesToRun\":[932.0,962.0,940.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1258,
            "unit": "Milliseconds",
            "range": "stdev: 37.986839826445156",
            "extra": "{\"totalTime\":1350.0,\"preparationTime\":92.0,\"singleTimesToRun\":[1215.0,1272.0,1287.0],\"postparationTime\":0.0}"
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
          "id": "30bb18aec22d271a921cf967170e540b31aa3e0b",
          "message": "Add screenshot job",
          "timestamp": "2022-03-18T03:20:28+01:00",
          "tree_id": "6bcb22247418917a634b6b018c7c8951e89e6bc8",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/30bb18aec22d271a921cf967170e540b31aa3e0b"
        },
        "date": 1647570493115,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7654,
            "unit": "Milliseconds",
            "range": "stdev: 349.7198879103103",
            "extra": "{\"totalTime\":7654.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7254.0,7902.0,7806.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5682.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 65.45481902299733",
            "extra": "{\"totalTime\":5683.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5737.0,5610.0,5701.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 117,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":117.0,\"preparationTime\":0.0,\"singleTimesToRun\":[118.0,117.0,116.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2809.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 90.53360333783989",
            "extra": "{\"totalTime\":2809.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2777.0,2912.0,2740.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 304.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 7.571877794400365",
            "extra": "{\"totalTime\":304.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[308.0,310.0,296.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 14765,
            "unit": "Milliseconds",
            "range": "stdev: 1365.0871767033782",
            "extra": "{\"totalTime\":14903.333333333334,\"preparationTime\":138.33333333333334,\"singleTimesToRun\":[16324.0,13784.0,14187.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 964.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 29.399546481762837",
            "extra": "{\"totalTime\":1041.6666666666667,\"preparationTime\":77.33333333333333,\"singleTimesToRun\":[956.0,997.0,940.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1350,
            "unit": "Milliseconds",
            "range": "stdev: 56.55970296951709",
            "extra": "{\"totalTime\":1451.0,\"preparationTime\":101.0,\"singleTimesToRun\":[1312.0,1415.0,1323.0],\"postparationTime\":0.0}"
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
          "id": "005a52aa1f25cd1e358cc0a518f696a93825f2f7",
          "message": "Fix default welcome contents adjustments",
          "timestamp": "2022-03-18T02:25:52Z",
          "tree_id": "fdf1bdef4037008575a4a1108f4013c868b7b7a8",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/005a52aa1f25cd1e358cc0a518f696a93825f2f7"
        },
        "date": 1647570780557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7074,
            "unit": "Milliseconds",
            "range": "stdev: 159.72789361911714",
            "extra": "{\"totalTime\":7074.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6890.0,7177.0,7155.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5271.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 72.47298347200379",
            "extra": "{\"totalTime\":5272.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5315.0,5188.0,5312.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 108,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":108.0,\"preparationTime\":0.0,\"singleTimesToRun\":[107.0,108.0,109.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2779.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 121.59495603573914",
            "extra": "{\"totalTime\":2779.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2671.0,2757.0,2911.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 296.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 8.736894948054106",
            "extra": "{\"totalTime\":296.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[289.0,306.0,294.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 14147.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1218.2517528546116",
            "extra": "{\"totalTime\":14278.333333333334,\"preparationTime\":130.66666666666666,\"singleTimesToRun\":[15553.0,13391.0,13499.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 977.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 3.0550504633038935",
            "extra": "{\"totalTime\":1053.0,\"preparationTime\":75.33333333333333,\"singleTimesToRun\":[975.0,981.0,977.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1298,
            "unit": "Milliseconds",
            "range": "stdev: 36.345563690772494",
            "extra": "{\"totalTime\":1390.6666666666667,\"preparationTime\":92.66666666666667,\"singleTimesToRun\":[1267.0,1338.0,1289.0],\"postparationTime\":0.0}"
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
          "id": "1d9df2e433052c8684599c7eb93f16d0ee8a6b38",
          "message": "Debug build-screenshot",
          "timestamp": "2022-03-18T02:40:50Z",
          "tree_id": "e719727ffa737cd9aab0ecdd9463f36aecb77363",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/1d9df2e433052c8684599c7eb93f16d0ee8a6b38"
        },
        "date": 1647571678397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8693,
            "unit": "Milliseconds",
            "range": "stdev: 378.4653220573848",
            "extra": "{\"totalTime\":8693.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8283.0,8767.0,9029.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6688,
            "unit": "Milliseconds",
            "range": "stdev: 128.94572501638044",
            "extra": "{\"totalTime\":6689.0,\"preparationTime\":1.0,\"singleTimesToRun\":[6594.0,6635.0,6835.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 126.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 4.041451884327381",
            "extra": "{\"totalTime\":126.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[123.0,126.0,131.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3286.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 46.19884558442271",
            "extra": "{\"totalTime\":3286.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[3249.0,3272.0,3338.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 359.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 17.21433511156714",
            "extra": "{\"totalTime\":359.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[340.0,372.0,367.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 16488,
            "unit": "Milliseconds",
            "range": "stdev: 1254.8262827977426",
            "extra": "{\"totalTime\":16653.333333333332,\"preparationTime\":165.33333333333334,\"singleTimesToRun\":[17891.0,15473.0,16100.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1136.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 50.01333155602947",
            "extra": "{\"totalTime\":1225.0,\"preparationTime\":88.66666666666667,\"singleTimesToRun\":[1159.0,1171.0,1079.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1540.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 96.98625332145444",
            "extra": "{\"totalTime\":1648.6666666666667,\"preparationTime\":108.33333333333333,\"singleTimesToRun\":[1431.0,1616.0,1574.0],\"postparationTime\":0.0}"
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
          "id": "b6c045ce5e073d35bf52416feb8eb88f42fc6800",
          "message": "Fix typo 😬",
          "timestamp": "2022-03-18T02:59:58Z",
          "tree_id": "fab424bf6c0b18eb61eee55d99974ca3b0ada0c1",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/b6c045ce5e073d35bf52416feb8eb88f42fc6800"
        },
        "date": 1647572843884,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6894.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 58.53488988059458",
            "extra": "{\"totalTime\":6894.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[6829.0,6942.0,6912.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5115,
            "unit": "Milliseconds",
            "range": "stdev: 49.56813492557492",
            "extra": "{\"totalTime\":5116.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5067.0,5112.0,5166.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 105.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":105.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[105.0,107.0,105.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2598.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 13.316656236958787",
            "extra": "{\"totalTime\":2598.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2595.0,2613.0,2587.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 277.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":277.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[277.0,278.0,278.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13628.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1182.4425285540663",
            "extra": "{\"totalTime\":13756.333333333334,\"preparationTime\":128.0,\"singleTimesToRun\":[14987.0,12832.0,13066.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 911.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 4.725815626252609",
            "extra": "{\"totalTime\":982.3333333333334,\"preparationTime\":70.66666666666667,\"singleTimesToRun\":[910.0,917.0,908.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1247.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 26.27419519858474",
            "extra": "{\"totalTime\":1339.3333333333333,\"preparationTime\":92.0,\"singleTimesToRun\":[1227.0,1277.0,1238.0],\"postparationTime\":0.0}"
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
          "id": "bc2aaa2153cedd24c13fdcbc9fdb2c0fc64355db",
          "message": "Fix invocation of squeak.sh",
          "timestamp": "2022-03-18T03:21:01Z",
          "tree_id": "eea8360b5391219f6fdb9f53d57682813745fef7",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/bc2aaa2153cedd24c13fdcbc9fdb2c0fc64355db"
        },
        "date": 1647574162079,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6961,
            "unit": "Milliseconds",
            "range": "stdev: 174.6052691072065",
            "extra": "{\"totalTime\":6961.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6783.0,7132.0,6968.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5052.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 37.52776749732568",
            "extra": "{\"totalTime\":5053.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5051.0,5016.0,5091.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 108,
            "unit": "Milliseconds",
            "range": "stdev: 3.4641016151377544",
            "extra": "{\"totalTime\":108.0,\"preparationTime\":0.0,\"singleTimesToRun\":[106.0,112.0,106.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2611,
            "unit": "Milliseconds",
            "range": "stdev: 27.51363298439521",
            "extra": "{\"totalTime\":2611.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2610.0,2584.0,2639.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 279,
            "unit": "Milliseconds",
            "range": "stdev: 4.58257569495584",
            "extra": "{\"totalTime\":279.0,\"preparationTime\":0.0,\"singleTimesToRun\":[274.0,283.0,280.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13222.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1173.1761731868464",
            "extra": "{\"totalTime\":13347.666666666666,\"preparationTime\":125.33333333333333,\"singleTimesToRun\":[14577.0,12544.0,12546.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 880.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 6.658328118479393",
            "extra": "{\"totalTime\":950.3333333333334,\"preparationTime\":69.66666666666667,\"singleTimesToRun\":[888.0,875.0,879.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1235,
            "unit": "Milliseconds",
            "range": "stdev: 34.87119154832539",
            "extra": "{\"totalTime\":1324.3333333333333,\"preparationTime\":89.33333333333333,\"singleTimesToRun\":[1195.0,1251.0,1259.0],\"postparationTime\":0.0}"
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
          "id": "4a494fa25a49f1225d535b501db92aaecebd8d25",
          "message": "Fix building of screenshots",
          "timestamp": "2022-03-18T12:17:54Z",
          "tree_id": "a167646c2b497d5999be48c2c395f1dbe34531b4",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/4a494fa25a49f1225d535b501db92aaecebd8d25"
        },
        "date": 1647606263604,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6016,
            "unit": "Milliseconds",
            "range": "stdev: 22.271057451320086",
            "extra": "{\"totalTime\":6016.0,\"preparationTime\":0.0,\"singleTimesToRun\":[5992.0,6020.0,6036.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4436.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 59.37451754189952",
            "extra": "{\"totalTime\":4437.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[4386.0,4422.0,4502.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 92.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 3.0550504633038935",
            "extra": "{\"totalTime\":92.66666666666667,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[93.0,89.0,95.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2283,
            "unit": "Milliseconds",
            "range": "stdev: 9.643650760992955",
            "extra": "{\"totalTime\":2283.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2276.0,2294.0,2279.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 244.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":244.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[245.0,244.0,245.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 11612.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 895.2342337809326",
            "extra": "{\"totalTime\":11720.666666666666,\"preparationTime\":108.33333333333333,\"singleTimesToRun\":[12644.0,11153.0,11040.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 780.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 7.0945988845975885",
            "extra": "{\"totalTime\":842.3333333333334,\"preparationTime\":61.666666666666664,\"singleTimesToRun\":[787.0,773.0,782.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1068.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 34.42867022313428",
            "extra": "{\"totalTime\":1147.0,\"preparationTime\":78.33333333333333,\"singleTimesToRun\":[1030.0,1096.0,1080.0],\"postparationTime\":0.0}"
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
          "id": "35df997efc8217e308f129a482fe5393409ee450",
          "message": "Extract upload-screenshots job, rename branch gh-pages-benchmarks-2 and screenshots into common gh-pages",
          "timestamp": "2022-03-18T12:48:36Z",
          "tree_id": "ff2126827b9a530faed724c78a94d5ee04a95f40",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/35df997efc8217e308f129a482fe5393409ee450"
        },
        "date": 1647608139171,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7735.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 52.34819321937801",
            "extra": "{\"totalTime\":7735.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[7696.0,7795.0,7716.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5759.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 59.54270176380422",
            "extra": "{\"totalTime\":5760.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5828.0,5722.0,5728.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 115.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 5.773502691896258",
            "extra": "{\"totalTime\":115.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[122.0,112.0,112.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3014,
            "unit": "Milliseconds",
            "range": "stdev: 67.91170738539859",
            "extra": "{\"totalTime\":3014.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3046.0,2936.0,3060.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 328,
            "unit": "Milliseconds",
            "range": "stdev: 2.6457513110645907",
            "extra": "{\"totalTime\":328.3333333333333,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[327.0,331.0,326.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 15660.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1368.3604544612263",
            "extra": "{\"totalTime\":15806.666666666666,\"preparationTime\":146.0,\"singleTimesToRun\":[17225.0,14686.0,15071.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1037.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 44.881324995295465",
            "extra": "{\"totalTime\":1117.0,\"preparationTime\":79.33333333333333,\"singleTimesToRun\":[1060.0,986.0,1067.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1407.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 39.50105483823608",
            "extra": "{\"totalTime\":1513.3333333333333,\"preparationTime\":105.66666666666667,\"singleTimesToRun\":[1368.0,1447.0,1408.0],\"postparationTime\":0.0}"
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
          "id": "8b0a8777fc138c8fcc42d0aff09f3bb385ac284f",
          "message": "Fix screenshot path, robustize",
          "timestamp": "2022-03-18T12:54:52Z",
          "tree_id": "93554081f23a5aaf6e3cd219d3d4c8718cf20cd1",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/8b0a8777fc138c8fcc42d0aff09f3bb385ac284f"
        },
        "date": 1647608517687,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6170,
            "unit": "Milliseconds",
            "range": "stdev: 64.4437739428721",
            "extra": "{\"totalTime\":6170.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6243.0,6121.0,6146.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4477.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 24.826061575153908",
            "extra": "{\"totalTime\":4478.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[4506.0,4463.0,4463.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 92,
            "unit": "Milliseconds",
            "range": "stdev: 0.0",
            "extra": "{\"totalTime\":92.0,\"preparationTime\":0.0,\"singleTimesToRun\":[92.0,92.0,92.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2336,
            "unit": "Milliseconds",
            "range": "stdev: 19.924858845171276",
            "extra": "{\"totalTime\":2336.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2347.0,2313.0,2348.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 249.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 4.163331998932265",
            "extra": "{\"totalTime\":249.66666666666666,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[254.0,248.0,246.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 11936,
            "unit": "Milliseconds",
            "range": "stdev: 1076.899716779608",
            "extra": "{\"totalTime\":12047.333333333334,\"preparationTime\":111.33333333333333,\"singleTimesToRun\":[13175.0,11408.0,11225.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 795,
            "unit": "Milliseconds",
            "range": "stdev: 7.810249675906654",
            "extra": "{\"totalTime\":856.3333333333334,\"preparationTime\":61.333333333333336,\"singleTimesToRun\":[804.0,791.0,790.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1080,
            "unit": "Milliseconds",
            "range": "stdev: 28.792360097775937",
            "extra": "{\"totalTime\":1158.6666666666667,\"preparationTime\":78.66666666666667,\"singleTimesToRun\":[1047.0,1093.0,1100.0],\"postparationTime\":0.0}"
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
          "id": "e40cb99906b8bc1dca35e30abf5ffe8e470dce2e",
          "message": "Debug build-screenshots",
          "timestamp": "2022-03-18T13:08:58Z",
          "tree_id": "179bbdc4becfc1350bd0d951d2b69778e2ecc0ec",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/e40cb99906b8bc1dca35e30abf5ffe8e470dce2e"
        },
        "date": 1647609367307,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6417,
            "unit": "Milliseconds",
            "range": "stdev: 390.0",
            "extra": "{\"totalTime\":6417.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6867.0,6207.0,6177.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4494,
            "unit": "Milliseconds",
            "range": "stdev: 15.716233645501712",
            "extra": "{\"totalTime\":4495.0,\"preparationTime\":1.0,\"singleTimesToRun\":[4483.0,4487.0,4512.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 92.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":92.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[93.0,93.0,92.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2312.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 9.018499505645789",
            "extra": "{\"totalTime\":2312.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2303.0,2321.0,2313.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 260.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 15.307950004273378",
            "extra": "{\"totalTime\":260.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[278.0,255.0,249.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 12174,
            "unit": "Milliseconds",
            "range": "stdev: 1065.115486696161",
            "extra": "{\"totalTime\":12288.333333333334,\"preparationTime\":114.33333333333333,\"singleTimesToRun\":[13403.0,11600.0,11519.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 857.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 64.93329911018948",
            "extra": "{\"totalTime\":924.0,\"preparationTime\":66.33333333333333,\"singleTimesToRun\":[932.0,829.0,812.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1136.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 56.615663321499056",
            "extra": "{\"totalTime\":1222.0,\"preparationTime\":85.33333333333333,\"singleTimesToRun\":[1202.0,1106.0,1102.0],\"postparationTime\":0.0}"
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
          "id": "856797479e51089984f2bbed597b597af04c7e80",
          "message": "Debug download-artifact",
          "timestamp": "2022-03-18T13:22:11Z",
          "tree_id": "12afa6d27dab14af16893f5357c939835961fdba",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/856797479e51089984f2bbed597b597af04c7e80"
        },
        "date": 1647610163947,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7651.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 196.39840460994927",
            "extra": "{\"totalTime\":7651.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7485.0,7601.0,7868.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5751.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 110.42795539777659",
            "extra": "{\"totalTime\":5752.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5627.0,5838.0,5789.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 113.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 6.027713773341709",
            "extra": "{\"totalTime\":113.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[120.0,113.0,108.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2861,
            "unit": "Milliseconds",
            "range": "stdev: 14.177446878757825",
            "extra": "{\"totalTime\":2861.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2866.0,2845.0,2872.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 312,
            "unit": "Milliseconds",
            "range": "stdev: 10.44030650891055",
            "extra": "{\"totalTime\":312.3333333333333,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[317.0,319.0,300.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 15088.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1165.0692397163928",
            "extra": "{\"totalTime\":15226.666666666666,\"preparationTime\":138.0,\"singleTimesToRun\":[16423.0,14570.0,14273.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1031.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 26.083200212652848",
            "extra": "{\"totalTime\":1109.0,\"preparationTime\":77.33333333333333,\"singleTimesToRun\":[1002.0,1042.0,1051.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1342.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 31.65964834506747",
            "extra": "{\"totalTime\":1442.0,\"preparationTime\":99.33333333333333,\"singleTimesToRun\":[1339.0,1313.0,1376.0],\"postparationTime\":0.0}"
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
          "id": "5d720c331c5dfb22d334075754096a0d91ce77a3",
          "message": "Fix job deps",
          "timestamp": "2022-03-18T13:27:34Z",
          "tree_id": "7d18f323950e0330e68e6d8b3b7274a2cf0caa79",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/5d720c331c5dfb22d334075754096a0d91ce77a3"
        },
        "date": 1647610502290,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8718,
            "unit": "Milliseconds",
            "range": "stdev: 181.1546300815963",
            "extra": "{\"totalTime\":8718.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8606.0,8927.0,8621.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6662.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 32.715949219506584",
            "extra": "{\"totalTime\":6663.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[6649.0,6639.0,6700.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 130.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 2.3094010767585034",
            "extra": "{\"totalTime\":130.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[133.0,129.0,129.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3360,
            "unit": "Milliseconds",
            "range": "stdev: 153.46986674914396",
            "extra": "{\"totalTime\":3360.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3456.0,3441.0,3183.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 351.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 8.504900548115382",
            "extra": "{\"totalTime\":351.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[352.0,360.0,343.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 17165.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 1233.8242716583804",
            "extra": "{\"totalTime\":17320.0,\"preparationTime\":154.33333333333334,\"singleTimesToRun\":[18582.0,16591.0,16324.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1150,
            "unit": "Milliseconds",
            "range": "stdev: 54.11099703387473",
            "extra": "{\"totalTime\":1239.6666666666667,\"preparationTime\":89.66666666666667,\"singleTimesToRun\":[1202.0,1154.0,1094.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1544.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 80.82903768654761",
            "extra": "{\"totalTime\":1654.6666666666667,\"preparationTime\":110.33333333333333,\"singleTimesToRun\":[1531.0,1631.0,1471.0],\"postparationTime\":0.0}"
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
          "id": "344de004fab13a5b5426aa48ffd0c84026051123",
          "message": "Continuos Delivery (#70)\n\nThis PR adds a release workflow for GitHub actions that:\r\n\r\n- creates a one-click image using create-image <https://github.com/marketplace/actions/create-image>\r\n- builds an example screenshot using SBE-Extract <https://github.com/hpi-swa-lab/SqueakByExample-english/tree/master/SmalltalkSources/SBE-Extract.package>\r\n- if on the main branch, creates a prerelease including the image and commits the screenshot to the gh-pages branch.\r\n\r\nNote: The gh-pages-benchmarks-2 branch has been renamed into gh-pages.",
          "timestamp": "2022-03-18T14:40:23+01:00",
          "tree_id": "7d18f323950e0330e68e6d8b3b7274a2cf0caa79",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/344de004fab13a5b5426aa48ffd0c84026051123"
        },
        "date": 1647611247993,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6985.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 83.42861219829402",
            "extra": "{\"totalTime\":6985.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[6889.0,7034.0,7033.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5132.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 31.94265695482036",
            "extra": "{\"totalTime\":5133.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5156.0,5096.0,5145.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 107.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":107.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[107.0,109.0,107.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2973.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 97.72580689527886",
            "extra": "{\"totalTime\":2973.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2863.0,3008.0,3049.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 299,
            "unit": "Milliseconds",
            "range": "stdev: 24.269322199023193",
            "extra": "{\"totalTime\":299.3333333333333,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[272.0,306.0,319.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13579.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1116.2693820639056",
            "extra": "{\"totalTime\":13706.333333333334,\"preparationTime\":127.0,\"singleTimesToRun\":[14864.0,12846.0,13028.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 909.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 14.011899704655802",
            "extra": "{\"totalTime\":981.0,\"preparationTime\":71.33333333333333,\"singleTimesToRun\":[921.0,894.0,914.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1229.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 40.52571200279316",
            "extra": "{\"totalTime\":1319.3333333333333,\"preparationTime\":89.66666666666667,\"singleTimesToRun\":[1183.0,1250.0,1256.0],\"postparationTime\":0.0}"
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
          "id": "4a92edcf77d5699b6fbd88b9fb7dba3ae84ebcf3",
          "message": "Merge remote-tracking branch 'refs/remotes/origin/main'",
          "timestamp": "2022-03-18T14:50:08+01:00",
          "tree_id": "32f05f8c901035d13501f1c440c9b75fd8fdedfb",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/4a92edcf77d5699b6fbd88b9fb7dba3ae84ebcf3"
        },
        "date": 1647611859996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7643.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 36.69241520169167",
            "extra": "{\"totalTime\":7643.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7639.0,7682.0,7609.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5734.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 202.55698786596662",
            "extra": "{\"totalTime\":5735.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5957.0,5685.0,5561.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 116.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 4.163331998932265",
            "extra": "{\"totalTime\":116.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[120.0,118.0,112.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2977,
            "unit": "Milliseconds",
            "range": "stdev: 94.17536832951598",
            "extra": "{\"totalTime\":2977.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2912.0,2934.0,3085.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 332.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":333.0,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[332.0,334.0,332.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 15314,
            "unit": "Milliseconds",
            "range": "stdev: 1216.935495414609",
            "extra": "{\"totalTime\":15454.0,\"preparationTime\":140.0,\"singleTimesToRun\":[16712.0,14738.0,14492.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1019.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 30.43572462310259",
            "extra": "{\"totalTime\":1100.0,\"preparationTime\":80.33333333333333,\"singleTimesToRun\":[1009.0,996.0,1054.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1398,
            "unit": "Milliseconds",
            "range": "stdev: 37.0",
            "extra": "{\"totalTime\":1497.3333333333333,\"preparationTime\":99.33333333333333,\"singleTimesToRun\":[1435.0,1398.0,1361.0],\"postparationTime\":0.0}"
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
          "id": "60b8ab525b411946fcbfc6dfd4a714db77a639bf",
          "message": "Update README.md\r\n\r\n- Add synopsis\r\n- Add generated screenshot (complements #70)\r\n- Add architectural overview\r\n- Add upstream contributions\r\n- Add acknowledgments",
          "timestamp": "2022-03-18T15:04:28+01:00",
          "tree_id": "1bdcf169ec63b5631584a11184f662fad7ccad72",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/60b8ab525b411946fcbfc6dfd4a714db77a639bf"
        },
        "date": 1647612756248,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7012.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 89.98518396565811",
            "extra": "{\"totalTime\":7012.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6916.0,7028.0,7094.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5191.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 86.55826554023211",
            "extra": "{\"totalTime\":5192.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5096.0,5213.0,5265.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 105.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":105.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[106.0,104.0,107.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2648.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 13.203534880225574",
            "extra": "{\"totalTime\":2648.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2646.0,2663.0,2637.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 285,
            "unit": "Milliseconds",
            "range": "stdev: 3.4641016151377544",
            "extra": "{\"totalTime\":285.0,\"preparationTime\":0.0,\"singleTimesToRun\":[287.0,287.0,281.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13906.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1172.9630571050964",
            "extra": "{\"totalTime\":14033.333333333334,\"preparationTime\":126.66666666666667,\"singleTimesToRun\":[15260.0,13183.0,13277.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 938.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 11.06044001535804",
            "extra": "{\"totalTime\":1010.0,\"preparationTime\":71.33333333333333,\"singleTimesToRun\":[949.0,927.0,940.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1296.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 13.868429375143148",
            "extra": "{\"totalTime\":1387.6666666666667,\"preparationTime\":91.33333333333333,\"singleTimesToRun\":[1281.0,1308.0,1300.0],\"postparationTime\":0.0}"
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
          "id": "98152694f00e4d648cc11c207dbe663ca1af8f21",
          "message": "Add window menu item to preferences",
          "timestamp": "2022-03-18T21:03:04+01:00",
          "tree_id": "abf9587b6288b52238795f2b6020d902156d3104",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/98152694f00e4d648cc11c207dbe663ca1af8f21"
        },
        "date": 1647634269009,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8020.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 528.8537920194327",
            "extra": "{\"totalTime\":8020.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[8308.0,8343.0,7410.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5680,
            "unit": "Milliseconds",
            "range": "stdev: 136.9634987870856",
            "extra": "{\"totalTime\":5681.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5523.0,5742.0,5775.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 112.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 12.342339054382412",
            "extra": "{\"totalTime\":112.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[126.0,109.0,102.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3179.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 266.68395777274145",
            "extra": "{\"totalTime\":3179.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3415.0,2890.0,3234.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 340,
            "unit": "Milliseconds",
            "range": "stdev: 13.74772708486752",
            "extra": "{\"totalTime\":340.3333333333333,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[325.0,352.0,343.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 15601,
            "unit": "Milliseconds",
            "range": "stdev: 2878.9604026453717",
            "extra": "{\"totalTime\":15744.666666666666,\"preparationTime\":143.66666666666666,\"singleTimesToRun\":[18925.0,13898.0,13980.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1077.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 68.9951689129995",
            "extra": "{\"totalTime\":1153.6666666666667,\"preparationTime\":76.33333333333333,\"singleTimesToRun\":[1157.0,1037.0,1038.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1474,
            "unit": "Milliseconds",
            "range": "stdev: 153.20574401764446",
            "extra": "{\"totalTime\":1577.3333333333333,\"preparationTime\":103.33333333333333,\"singleTimesToRun\":[1306.0,1510.0,1606.0],\"postparationTime\":0.0}"
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
          "id": "f513181d1361b57101cf49d49fa68e083f26b029",
          "message": "Update comment in TraceDebugger",
          "timestamp": "2022-03-18T22:01:56+01:00",
          "tree_id": "55ebd56d96f2cdd6f00fdc84b1de8229766dc372",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/f513181d1361b57101cf49d49fa68e083f26b029"
        },
        "date": 1647637788493,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6898,
            "unit": "Milliseconds",
            "range": "stdev: 86.50433515148244",
            "extra": "{\"totalTime\":6898.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6799.0,6936.0,6959.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5029.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 32.578111260988315",
            "extra": "{\"totalTime\":5030.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5007.0,5067.0,5015.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 104.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":104.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[105.0,105.0,104.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2663.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 23.028967265887836",
            "extra": "{\"totalTime\":2663.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2641.0,2687.0,2662.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 280,
            "unit": "Milliseconds",
            "range": "stdev: 7.211102550927978",
            "extra": "{\"totalTime\":280.3333333333333,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[278.0,288.0,274.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13634.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1115.6425652211974",
            "extra": "{\"totalTime\":13761.333333333334,\"preparationTime\":127.0,\"singleTimesToRun\":[14916.0,12881.0,13106.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 906,
            "unit": "Milliseconds",
            "range": "stdev: 15.0996688705415",
            "extra": "{\"totalTime\":978.3333333333334,\"preparationTime\":72.33333333333333,\"singleTimesToRun\":[904.0,892.0,922.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1242,
            "unit": "Milliseconds",
            "range": "stdev: 12.767145334803704",
            "extra": "{\"totalTime\":1333.6666666666667,\"preparationTime\":91.66666666666667,\"singleTimesToRun\":[1231.0,1256.0,1239.0],\"postparationTime\":0.0}"
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
          "id": "cffb9fd49f807e548b5db672e43e029c70b8eba2",
          "message": "Add screenshot for exampleShutDown",
          "timestamp": "2022-03-18T23:22:09+01:00",
          "tree_id": "098c3c33d3a9de95ae85c889627f8d0ca2fe8817",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/cffb9fd49f807e548b5db672e43e029c70b8eba2"
        },
        "date": 1647642600743,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7220,
            "unit": "Milliseconds",
            "range": "stdev: 182.0",
            "extra": "{\"totalTime\":7220.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7428.0,7142.0,7090.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5336.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 193.7997248020062",
            "extra": "{\"totalTime\":5337.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5403.0,5118.0,5488.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 104.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 4.041451884327381",
            "extra": "{\"totalTime\":104.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[105.0,100.0,108.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2620,
            "unit": "Milliseconds",
            "range": "stdev: 35.510561809129406",
            "extra": "{\"totalTime\":2620.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2621.0,2584.0,2655.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 299.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 26.839026311200886",
            "extra": "{\"totalTime\":299.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[330.0,290.0,279.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13209.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1131.887509133895",
            "extra": "{\"totalTime\":13331.666666666666,\"preparationTime\":122.33333333333333,\"singleTimesToRun\":[14512.0,12466.0,12650.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 896,
            "unit": "Milliseconds",
            "range": "stdev: 51.39066063011839",
            "extra": "{\"totalTime\":969.3333333333334,\"preparationTime\":73.33333333333333,\"singleTimesToRun\":[955.0,861.0,872.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1280.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 47.00354596552619",
            "extra": "{\"totalTime\":1375.3333333333333,\"preparationTime\":95.0,\"singleTimesToRun\":[1327.0,1233.0,1281.0],\"postparationTime\":0.0}"
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
          "id": "98e37bba686fe02ad68c5e760ce3949ed8a09b5d",
          "message": "Raise timeout for test",
          "timestamp": "2022-03-18T23:55:02+01:00",
          "tree_id": "91960fc6da86dfb7006c858a9b9acde9b71ad84d",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/98e37bba686fe02ad68c5e760ce3949ed8a09b5d"
        },
        "date": 1647644522900,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7130.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 87.23722447059703",
            "extra": "{\"totalTime\":7130.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[7057.0,7227.0,7108.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5068.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 85.04312631443729",
            "extra": "{\"totalTime\":5069.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[4977.0,5084.0,5145.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 110.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":110.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[113.0,110.0,109.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2990.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 238.36176986533167",
            "extra": "{\"totalTime\":2990.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2719.0,3086.0,3166.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 323,
            "unit": "Milliseconds",
            "range": "stdev: 8.717797887081348",
            "extra": "{\"totalTime\":323.0,\"preparationTime\":0.0,\"singleTimesToRun\":[313.0,329.0,327.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13637.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1251.201156222825",
            "extra": "{\"totalTime\":13762.666666666666,\"preparationTime\":125.0,\"singleTimesToRun\":[15082.0,12885.0,12946.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 929.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 9.073771725877467",
            "extra": "{\"totalTime\":1001.0,\"preparationTime\":71.66666666666667,\"singleTimesToRun\":[928.0,939.0,921.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1262.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 41.06498914322679",
            "extra": "{\"totalTime\":1352.3333333333333,\"preparationTime\":89.66666666666667,\"singleTimesToRun\":[1223.0,1260.0,1305.0],\"postparationTime\":0.0}"
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
          "id": "98e37bba686fe02ad68c5e760ce3949ed8a09b5d",
          "message": "Raise timeout for test",
          "timestamp": "2022-03-18T23:55:02+01:00",
          "tree_id": "91960fc6da86dfb7006c858a9b9acde9b71ad84d",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/98e37bba686fe02ad68c5e760ce3949ed8a09b5d"
        },
        "date": 1647645039677,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7462,
            "unit": "Milliseconds",
            "range": "stdev: 39.395431207184416",
            "extra": "{\"totalTime\":7462.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7494.0,7418.0,7474.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5454,
            "unit": "Milliseconds",
            "range": "stdev: 93.5040106091712",
            "extra": "{\"totalTime\":5455.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5455.0,5547.0,5360.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 111.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":111.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[112.0,112.0,111.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2907.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 121.71414598695313",
            "extra": "{\"totalTime\":2907.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2790.0,2899.0,3033.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 321,
            "unit": "Milliseconds",
            "range": "stdev: 4.0",
            "extra": "{\"totalTime\":321.0,\"preparationTime\":0.0,\"singleTimesToRun\":[321.0,317.0,325.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 14895.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1058.6511858649824",
            "extra": "{\"totalTime\":15029.666666666666,\"preparationTime\":134.33333333333334,\"singleTimesToRun\":[16109.0,14415.0,14162.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1005.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 25.794056162870806",
            "extra": "{\"totalTime\":1083.3333333333333,\"preparationTime\":77.66666666666667,\"singleTimesToRun\":[977.0,1013.0,1027.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1362.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 36.69241520169167",
            "extra": "{\"totalTime\":1463.0,\"preparationTime\":100.33333333333333,\"singleTimesToRun\":[1343.0,1340.0,1405.0],\"postparationTime\":0.0}"
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
          "id": "70fef278ce69c614ced5da677d0188632a377d49",
          "message": "Beautify README.md",
          "timestamp": "2022-03-19T00:16:58+01:00",
          "tree_id": "8a1ce4b38e0e298b92973a1d042282b9d2921aa9",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/70fef278ce69c614ced5da677d0188632a377d49"
        },
        "date": 1647645882318,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7814.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 122.66349633584286",
            "extra": "{\"totalTime\":7814.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7720.0,7953.0,7770.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5047,
            "unit": "Milliseconds",
            "range": "stdev: 94.72592042308166",
            "extra": "{\"totalTime\":5048.0,\"preparationTime\":1.0,\"singleTimesToRun\":[4978.0,5008.0,5155.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 111.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":111.66666666666667,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[111.0,111.0,112.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2654,
            "unit": "Milliseconds",
            "range": "stdev: 13.0",
            "extra": "{\"totalTime\":2654.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2639.0,2662.0,2661.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 280,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":280.0,\"preparationTime\":0.0,\"singleTimesToRun\":[281.0,280.0,279.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 12659,
            "unit": "Milliseconds",
            "range": "stdev: 1257.6124204221267",
            "extra": "{\"totalTime\":12783.666666666666,\"preparationTime\":124.66666666666667,\"singleTimesToRun\":[14111.0,11914.0,11952.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 890.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 4.509249752822894",
            "extra": "{\"totalTime\":961.3333333333334,\"preparationTime\":70.66666666666667,\"singleTimesToRun\":[895.0,891.0,886.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1190,
            "unit": "Milliseconds",
            "range": "stdev: 29.46183972531247",
            "extra": "{\"totalTime\":1278.3333333333333,\"preparationTime\":88.33333333333333,\"singleTimesToRun\":[1158.0,1196.0,1216.0],\"postparationTime\":0.0}"
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
          "id": "bf233e4f2355eaeaf1df6b2ada335ec144c7da73",
          "message": "Test debugger abandon & spawn and robustize the latter",
          "timestamp": "2022-03-19T19:20:21+01:00",
          "tree_id": "128da68020e0b09845a63c3bc69af2ac06760215",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/bf233e4f2355eaeaf1df6b2ada335ec144c7da73"
        },
        "date": 1647714457074,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6835,
            "unit": "Milliseconds",
            "range": "stdev: 99.83486364992943",
            "extra": "{\"totalTime\":6835.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6726.0,6857.0,6922.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5025.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 43.096790290383964",
            "extra": "{\"totalTime\":5026.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5022.0,4984.0,5070.0],\"postparationTime\":0.0}"
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
            "value": 2583,
            "unit": "Milliseconds",
            "range": "stdev: 44.44097208657794",
            "extra": "{\"totalTime\":2583.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2533.0,2598.0,2618.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 280,
            "unit": "Milliseconds",
            "range": "stdev: 3.605551275463989",
            "extra": "{\"totalTime\":280.3333333333333,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[279.0,277.0,284.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13147,
            "unit": "Milliseconds",
            "range": "stdev: 1092.5946183283168",
            "extra": "{\"totalTime\":13269.333333333334,\"preparationTime\":122.33333333333333,\"singleTimesToRun\":[14400.0,12393.0,12648.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 880.6666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 6.506407098647712",
            "extra": "{\"totalTime\":949.6666666666666,\"preparationTime\":69.0,\"singleTimesToRun\":[874.0,887.0,881.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1228.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 32.62412195497886",
            "extra": "{\"totalTime\":1317.6666666666667,\"preparationTime\":89.0,\"singleTimesToRun\":[1191.0,1247.0,1248.0],\"postparationTime\":0.0}"
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
          "id": "c62b9a8978c3f11d0bf695379d122c2223453550",
          "message": "Fix typos in README.md",
          "timestamp": "2022-03-19T19:26:26+01:00",
          "tree_id": "d9de7a63a28e05a3d0aadaedff3fd791dd24ae3f",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/c62b9a8978c3f11d0bf695379d122c2223453550"
        },
        "date": 1647714890024,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 9300.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 177.7423228534311",
            "extra": "{\"totalTime\":9300.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[9139.0,9491.0,9272.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7839,
            "unit": "Milliseconds",
            "range": "stdev: 210.51603264359701",
            "extra": "{\"totalTime\":7840.0,\"preparationTime\":1.0,\"singleTimesToRun\":[7691.0,8080.0,7746.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 151.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":151.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[151.0,153.0,151.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 4014,
            "unit": "Milliseconds",
            "range": "stdev: 79.77468270071653",
            "extra": "{\"totalTime\":4014.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3986.0,4104.0,3952.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 421.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 9.865765724632494",
            "extra": "{\"totalTime\":422.3333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[428.0,410.0,426.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 19484,
            "unit": "Milliseconds",
            "range": "stdev: 1467.5622644371856",
            "extra": "{\"totalTime\":19669.333333333332,\"preparationTime\":185.33333333333334,\"singleTimesToRun\":[21174.0,18531.0,18747.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1320,
            "unit": "Milliseconds",
            "range": "stdev: 19.0",
            "extra": "{\"totalTime\":1416.6666666666667,\"preparationTime\":96.66666666666667,\"singleTimesToRun\":[1339.0,1301.0,1320.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1900.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 81.00205758703501",
            "extra": "{\"totalTime\":2021.6666666666667,\"preparationTime\":121.33333333333333,\"singleTimesToRun\":[1843.0,1993.0,1865.0],\"postparationTime\":0.0}"
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
          "id": "99aa5d36e05d6033fce79d172f234093baef7d96",
          "message": "mv .github/workflows/{release,build}.yml",
          "timestamp": "2022-03-19T19:30:02+01:00",
          "tree_id": "fd496ca8d7825a6108975e33fdc78d401aaa3a43",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/99aa5d36e05d6033fce79d172f234093baef7d96"
        },
        "date": 1647715084116,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7597.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 402.50507243180596",
            "extra": "{\"totalTime\":7597.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[7423.0,7312.0,8058.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5587,
            "unit": "Milliseconds",
            "range": "stdev: 132.24220203853233",
            "extra": "{\"totalTime\":5588.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5703.0,5443.0,5615.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 113.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 4.509249752822894",
            "extra": "{\"totalTime\":113.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[113.0,109.0,118.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2861,
            "unit": "Milliseconds",
            "range": "stdev: 62.55397669213365",
            "extra": "{\"totalTime\":2861.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2845.0,2808.0,2930.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 323,
            "unit": "Milliseconds",
            "range": "stdev: 7.810249675906654",
            "extra": "{\"totalTime\":323.0,\"preparationTime\":0.0,\"singleTimesToRun\":[319.0,318.0,332.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 15228.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1288.4301817845364",
            "extra": "{\"totalTime\":15370.333333333334,\"preparationTime\":142.0,\"singleTimesToRun\":[16658.0,14157.0,14870.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 999.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 38.75994496040124",
            "extra": "{\"totalTime\":1075.0,\"preparationTime\":75.66666666666667,\"singleTimesToRun\":[986.0,969.0,1043.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1378.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 19.39931270260195",
            "extra": "{\"totalTime\":1481.0,\"preparationTime\":102.66666666666667,\"singleTimesToRun\":[1356.0,1391.0,1388.0],\"postparationTime\":0.0}"
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
          "id": "0b5967ae8c27661ae1d33c305928c6f139b4090c",
          "message": "Tune context search: Only show reachable hits; preselect next search item or current selection\n\nCloses #53.",
          "timestamp": "2022-03-19T20:00:15+01:00",
          "tree_id": "4ffaec72db6b22f35f6637ac703723c360fb2ae2",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/0b5967ae8c27661ae1d33c305928c6f139b4090c"
        },
        "date": 1647716905828,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8389,
            "unit": "Milliseconds",
            "range": "stdev: 141.4814475470194",
            "extra": "{\"totalTime\":8389.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8230.0,8501.0,8436.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6132.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 55.868894148115494",
            "extra": "{\"totalTime\":6133.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[6144.0,6072.0,6182.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 124.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":124.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[124.0,124.0,125.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3125,
            "unit": "Milliseconds",
            "range": "stdev: 86.50433515148244",
            "extra": "{\"totalTime\":3125.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3039.0,3124.0,3212.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 344.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 9.073771725877467",
            "extra": "{\"totalTime\":345.3333333333333,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[338.0,341.0,355.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 16451.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 1499.857437669772",
            "extra": "{\"totalTime\":16603.0,\"preparationTime\":151.33333333333334,\"singleTimesToRun\":[18182.0,15523.0,15650.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1094,
            "unit": "Milliseconds",
            "range": "stdev: 6.0",
            "extra": "{\"totalTime\":1180.0,\"preparationTime\":86.0,\"singleTimesToRun\":[1094.0,1088.0,1100.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1474.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 22.50185177565023",
            "extra": "{\"totalTime\":1584.3333333333333,\"preparationTime\":110.0,\"singleTimesToRun\":[1449.0,1492.0,1482.0],\"postparationTime\":0.0}"
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
          "id": "b6c05c263b7c04240edbd1f6eb1ae436ae003db7",
          "message": "Add missing extensions for #tdbSignalerContexts",
          "timestamp": "2022-03-20T02:31:22+01:00",
          "tree_id": "aa10043a2f2b49c6ccbb12a9e4e5eac7e5dff0ef",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/b6c05c263b7c04240edbd1f6eb1ae436ae003db7"
        },
        "date": 1647740351754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6970,
            "unit": "Milliseconds",
            "range": "stdev: 58.642987645583",
            "extra": "{\"totalTime\":6970.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6928.0,7037.0,6945.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4992,
            "unit": "Milliseconds",
            "range": "stdev: 33.15116890850155",
            "extra": "{\"totalTime\":4993.333333333333,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[5002.0,4955.0,5019.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 103.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":103.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[104.0,101.0,105.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2613.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 24.785748593361742",
            "extra": "{\"totalTime\":2613.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2642.0,2596.0,2603.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 277.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2.3094010767585034",
            "extra": "{\"totalTime\":277.6666666666667,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[276.0,276.0,280.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13857.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1084.852217278157",
            "extra": "{\"totalTime\":13982.0,\"preparationTime\":124.33333333333333,\"singleTimesToRun\":[15110.0,13206.0,13257.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 959.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":1030.0,\"preparationTime\":70.66666666666667,\"singleTimesToRun\":[960.0,959.0,959.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1242.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 40.45161719058131",
            "extra": "{\"totalTime\":1331.6666666666667,\"preparationTime\":89.0,\"singleTimesToRun\":[1197.0,1257.0,1274.0],\"postparationTime\":0.0}"
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
          "id": "c413dea4525ad37584fbbec57b2bb30f50f8792f",
          "message": "Rename test job (2)",
          "timestamp": "2022-03-20T02:37:55+01:00",
          "tree_id": "9a9b53ea89b1dd5741bbf6b02fc732a3a296cc06",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/c413dea4525ad37584fbbec57b2bb30f50f8792f"
        },
        "date": 1647740736374,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 9630.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 190.0035087395318",
            "extra": "{\"totalTime\":9630.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[9440.0,9820.0,9632.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7818.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 43.92417709341102",
            "extra": "{\"totalTime\":7819.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[7869.0,7795.0,7791.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 157,
            "unit": "Milliseconds",
            "range": "stdev: 8.660254037844387",
            "extra": "{\"totalTime\":157.0,\"preparationTime\":0.0,\"singleTimesToRun\":[162.0,162.0,147.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 4040.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 227.28469665451158",
            "extra": "{\"totalTime\":4040.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[4189.0,4154.0,3779.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 420.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 36.29508690350987",
            "extra": "{\"totalTime\":420.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[454.0,426.0,382.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 21086.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 2076.917507589874",
            "extra": "{\"totalTime\":21273.333333333332,\"preparationTime\":186.66666666666666,\"singleTimesToRun\":[23472.0,19679.0,20109.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1469.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 53.29477773040557",
            "extra": "{\"totalTime\":1570.6666666666667,\"preparationTime\":101.33333333333333,\"singleTimesToRun\":[1510.0,1489.0,1409.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1989.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 50.36202272877186",
            "extra": "{\"totalTime\":2112.0,\"preparationTime\":122.33333333333333,\"singleTimesToRun\":[2025.0,1932.0,2012.0],\"postparationTime\":0.0}"
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
          "id": "23fc3ad6008e3bda364e5da07bed4c2fa19c7a55",
          "message": "Honor original label in TraceDebugger title",
          "timestamp": "2022-03-21T18:27:04+01:00",
          "tree_id": "a87d887f1f4ab900d6079e7b34b509def9deb5e2",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/23fc3ad6008e3bda364e5da07bed4c2fa19c7a55"
        },
        "date": 1647884219178,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8589.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 297.7605301804344",
            "extra": "{\"totalTime\":8589.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8275.0,8627.0,8867.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6710.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 244.53288804030706",
            "extra": "{\"totalTime\":6711.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[6450.0,6935.0,6747.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 134.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":134.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[137.0,134.0,133.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3446,
            "unit": "Milliseconds",
            "range": "stdev: 161.39702599490488",
            "extra": "{\"totalTime\":3446.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3519.0,3261.0,3558.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 384.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 7.0945988845975885",
            "extra": "{\"totalTime\":384.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[377.0,391.0,386.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 17799,
            "unit": "Milliseconds",
            "range": "stdev: 1603.7418744922763",
            "extra": "{\"totalTime\":17964.666666666668,\"preparationTime\":165.66666666666666,\"singleTimesToRun\":[19615.0,16577.0,17205.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1202,
            "unit": "Milliseconds",
            "range": "stdev: 43.31281565541543",
            "extra": "{\"totalTime\":1287.3333333333333,\"preparationTime\":85.33333333333333,\"singleTimesToRun\":[1176.0,1178.0,1252.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1608,
            "unit": "Milliseconds",
            "range": "stdev: 98.0612053770501",
            "extra": "{\"totalTime\":1720.0,\"preparationTime\":112.0,\"singleTimesToRun\":[1708.0,1512.0,1604.0],\"postparationTime\":0.0}"
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
          "id": "315c2bf3e8956e369b5fbc8b0ca06b93e5f3cfde",
          "message": "Display unhandled errors in debugger title\n\n- computation in private TraceDebugger protocol\n- mv Context>>#tdbIsSignal{er,}Context, #tdbNextSignal{er,}Context\n- replace Context>>#tdbSignalContexts by #tdbSignalerContexts which will answer public signalerContext, update TDBContextVariablesInspector accordingly\n- extract + test TDBCursor>>#allContextsBelow:do:\n- cursor + ui: test stepping over handled error",
          "timestamp": "2022-03-21T19:04:04+01:00",
          "tree_id": "8f30365e57120c8673afeeb8dd5cd210096b58aa",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/315c2bf3e8956e369b5fbc8b0ca06b93e5f3cfde"
        },
        "date": 1647886302202,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6445,
            "unit": "Milliseconds",
            "range": "stdev: 414.1642186379697",
            "extra": "{\"totalTime\":6445.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6921.0,6247.0,6167.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4858,
            "unit": "Milliseconds",
            "range": "stdev: 315.23324697753566",
            "extra": "{\"totalTime\":4859.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5094.0,4980.0,4500.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 95,
            "unit": "Milliseconds",
            "range": "stdev: 7.937253933193772",
            "extra": "{\"totalTime\":95.0,\"preparationTime\":0.0,\"singleTimesToRun\":[104.0,92.0,89.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2443.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 184.13129373719542",
            "extra": "{\"totalTime\":2443.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2656.0,2347.0,2328.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 260.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 19.65536398374076",
            "extra": "{\"totalTime\":260.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[283.0,250.0,248.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13830,
            "unit": "Milliseconds",
            "range": "stdev: 1872.8790671049746",
            "extra": "{\"totalTime\":13957.666666666666,\"preparationTime\":127.66666666666667,\"singleTimesToRun\":[15776.0,13674.0,12040.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 960,
            "unit": "Milliseconds",
            "range": "stdev: 81.95730595865142",
            "extra": "{\"totalTime\":1028.0,\"preparationTime\":68.0,\"singleTimesToRun\":[1051.0,937.0,892.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1218.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 94.70656436242069",
            "extra": "{\"totalTime\":1307.0,\"preparationTime\":88.66666666666667,\"singleTimesToRun\":[1271.0,1275.0,1109.0],\"postparationTime\":0.0}"
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
          "id": "3ab4117103d7249a8894c7f5854c80945e1fd95e",
          "message": "Merge branch 'main' into window-labels",
          "timestamp": "2022-03-21T19:12:54+01:00",
          "tree_id": "31992e906c07988b84346f6474e98704b188ff84",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/3ab4117103d7249a8894c7f5854c80945e1fd95e"
        },
        "date": 1647886827182,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6223.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 100.00166665277803",
            "extra": "{\"totalTime\":6223.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[6123.0,6323.0,6224.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4474.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 41.76521678781679",
            "extra": "{\"totalTime\":4475.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[4427.0,4490.0,4506.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 92,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":92.0,\"preparationTime\":0.0,\"singleTimesToRun\":[91.0,93.0,92.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2378,
            "unit": "Milliseconds",
            "range": "stdev: 33.95585369269929",
            "extra": "{\"totalTime\":2378.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2394.0,2339.0,2401.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 248.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 3.7859388972001824",
            "extra": "{\"totalTime\":248.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[250.0,244.0,251.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 12917.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1071.9078007614896",
            "extra": "{\"totalTime\":13036.333333333334,\"preparationTime\":119.0,\"singleTimesToRun\":[14133.0,12108.0,12511.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 928.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 14.502873278538063",
            "extra": "{\"totalTime\":994.3333333333334,\"preparationTime\":66.0,\"singleTimesToRun\":[928.0,943.0,914.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1143.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 12.741009902410928",
            "extra": "{\"totalTime\":1225.3333333333333,\"preparationTime\":81.66666666666667,\"singleTimesToRun\":[1129.0,1150.0,1152.0],\"postparationTime\":0.0}"
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
          "id": "217826711cbba6a302230e40c091b8a8add2fe47",
          "message": "Merge pull request #72 from LinqLover/window-labels\n\nThis PR revises the labels in TraceDebugger windows and related tools.",
          "timestamp": "2022-03-21T19:22:31+01:00",
          "tree_id": "31992e906c07988b84346f6474e98704b188ff84",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/217826711cbba6a302230e40c091b8a8add2fe47"
        },
        "date": 1647887380171,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6964.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 122.85085808952796",
            "extra": "{\"totalTime\":6964.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[6873.0,6916.0,7104.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4958.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 18.929694486000912",
            "extra": "{\"totalTime\":4959.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[4967.0,4937.0,4972.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 105.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":105.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[104.0,107.0,105.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2652.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 31.94265695482036",
            "extra": "{\"totalTime\":2652.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2640.0,2629.0,2689.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 281,
            "unit": "Milliseconds",
            "range": "stdev: 4.358898943540674",
            "extra": "{\"totalTime\":281.0,\"preparationTime\":0.0,\"singleTimesToRun\":[276.0,283.0,284.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 13986.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1108.8896849251207",
            "extra": "{\"totalTime\":14117.0,\"preparationTime\":130.33333333333334,\"singleTimesToRun\":[15266.0,13301.0,13393.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1001.3333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 21.548395145191982",
            "extra": "{\"totalTime\":1074.3333333333333,\"preparationTime\":73.0,\"singleTimesToRun\":[1009.0,1018.0,977.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1241.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 10.96965511460289",
            "extra": "{\"totalTime\":1332.3333333333333,\"preparationTime\":91.0,\"singleTimesToRun\":[1250.0,1245.0,1229.0],\"postparationTime\":0.0}"
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
          "id": "25aa5b2949ed8988bfdb18547261e8690a287417",
          "message": "Tune display of contexts in tree view: Use bold for signaler contexts and italic for the very next context that the user can step into. Add dispatch for context styles via UserInterfaceTheme.",
          "timestamp": "2022-03-21T21:17:35+01:00",
          "tree_id": "8ee65310f46b515e18f8710775a345e1fd40f6c8",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/25aa5b2949ed8988bfdb18547261e8690a287417"
        },
        "date": 1647894342379,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6901,
            "unit": "Milliseconds",
            "range": "stdev: 57.0",
            "extra": "{\"totalTime\":6901.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6844.0,6958.0,6901.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4956.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 73.10494739300024",
            "extra": "{\"totalTime\":4957.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5038.0,4897.0,4934.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 104.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 3.2145502536643185",
            "extra": "{\"totalTime\":104.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[103.0,108.0,102.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2628.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 21.779194965226182",
            "extra": "{\"totalTime\":2628.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2622.0,2611.0,2653.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 279.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":279.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[278.0,279.0,281.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 22024.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 1779.5295258391566",
            "extra": "{\"totalTime\":22156.666666666668,\"preparationTime\":132.33333333333334,\"singleTimesToRun\":[23983.0,20507.0,21583.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1157.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 74.06978691297373",
            "extra": "{\"totalTime\":1230.0,\"preparationTime\":72.33333333333333,\"singleTimesToRun\":[1110.0,1120.0,1243.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1285,
            "unit": "Milliseconds",
            "range": "stdev: 79.37253933193772",
            "extra": "{\"totalTime\":1374.3333333333333,\"preparationTime\":89.33333333333333,\"singleTimesToRun\":[1255.0,1225.0,1375.0],\"postparationTime\":0.0}"
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
          "id": "c2c14d03db7553d3359fe43361450f855b1104b2",
          "message": "Fix cache errors from #childContextsFor:\n\nGuarantee the order of #aspectDependencies to ensure that #interruptedContext (and subsequently the tree) will be #changed after #childContextsFor: ...",
          "timestamp": "2022-03-23T23:11:25+01:00",
          "tree_id": "190125e25378e6b9dcb237506cc2bc06c0ad11ec",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/c2c14d03db7553d3359fe43361450f855b1104b2"
        },
        "date": 1648074084305,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8198,
            "unit": "Milliseconds",
            "range": "stdev: 35.76310948449533",
            "extra": "{\"totalTime\":8198.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8203.0,8160.0,8231.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6032,
            "unit": "Milliseconds",
            "range": "stdev: 45.50824101193101",
            "extra": "{\"totalTime\":6033.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5993.0,6082.0,6021.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 122,
            "unit": "Milliseconds",
            "range": "stdev: 0.0",
            "extra": "{\"totalTime\":122.0,\"preparationTime\":0.0,\"singleTimesToRun\":[122.0,122.0,122.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3162,
            "unit": "Milliseconds",
            "range": "stdev: 59.924953066314536",
            "extra": "{\"totalTime\":3162.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3093.0,3192.0,3201.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 345.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 6.429100507328637",
            "extra": "{\"totalTime\":345.6666666666667,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[350.0,338.0,348.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 26292.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 1385.0632957859123",
            "extra": "{\"totalTime\":26474.333333333332,\"preparationTime\":181.66666666666666,\"singleTimesToRun\":[27892.0,25493.0,25493.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1409.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 9.865765724632494",
            "extra": "{\"totalTime\":1498.0,\"preparationTime\":88.33333333333333,\"singleTimesToRun\":[1403.0,1421.0,1405.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1505.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 28.023799409311604",
            "extra": "{\"totalTime\":1592.3333333333333,\"preparationTime\":87.0,\"singleTimesToRun\":[1474.0,1528.0,1514.0],\"postparationTime\":0.0}"
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
          "id": "5d0ef83d940918e8ff5790e00dbc11b8eda1526d",
          "message": "Fix #isContextAlive: for block closure contexts\n\nAfter creating a new closure context via primitive, store its initial pc as dead analogously to the behavior in #context:activateMethod:withArgs:receiver:do: for method contexts.\n\nComplements https://github.com/LinqLover/SimulationStudio/commit/a45e1524f56e895d8b60fc4b14de79106ac922a1.",
          "timestamp": "2022-03-24T00:32:21+01:00",
          "tree_id": "ca0c69c9bc2641e58fc140e46f4f355dc2c1ff41",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/5d0ef83d940918e8ff5790e00dbc11b8eda1526d"
        },
        "date": 1648078835578,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8891,
            "unit": "Milliseconds",
            "range": "stdev: 120.42840196564929",
            "extra": "{\"totalTime\":8891.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8752.0,8957.0,8964.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6581,
            "unit": "Milliseconds",
            "range": "stdev: 32.07802986469088",
            "extra": "{\"totalTime\":6582.0,\"preparationTime\":1.0,\"singleTimesToRun\":[6564.0,6618.0,6561.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 127.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 3.7859388972001824",
            "extra": "{\"totalTime\":127.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[126.0,132.0,125.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3298,
            "unit": "Milliseconds",
            "range": "stdev: 47.148700936505136",
            "extra": "{\"totalTime\":3298.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3289.0,3256.0,3349.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 374,
            "unit": "Milliseconds",
            "range": "stdev: 7.211102550927978",
            "extra": "{\"totalTime\":374.0,\"preparationTime\":0.0,\"singleTimesToRun\":[372.0,382.0,368.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 27719.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 1490.6513117873453",
            "extra": "{\"totalTime\":27909.666666666668,\"preparationTime\":190.33333333333334,\"singleTimesToRun\":[29440.0,26820.0,26898.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1430.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 16.289055630494158",
            "extra": "{\"totalTime\":1522.0,\"preparationTime\":91.33333333333333,\"singleTimesToRun\":[1442.0,1438.0,1412.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1611,
            "unit": "Milliseconds",
            "range": "stdev: 29.614185789921695",
            "extra": "{\"totalTime\":1701.3333333333333,\"preparationTime\":90.33333333333333,\"singleTimesToRun\":[1580.0,1639.0,1614.0],\"postparationTime\":0.0}"
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
          "id": "7db56decbc02f6b227d8504cf94249fc2f825694",
          "message": "Add exposé for RE22 seminar",
          "timestamp": "2022-04-20T20:04:43+02:00",
          "tree_id": "180740a618a97d0033cab655ad4a2359b52a3399",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/7db56decbc02f6b227d8504cf94249fc2f825694"
        },
        "date": 1650478417693,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7558.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 205.00081300651794",
            "extra": "{\"totalTime\":7558.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[7764.0,7558.0,7354.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5638.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 109.25810419979533",
            "extra": "{\"totalTime\":5639.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5630.0,5534.0,5752.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 103,
            "unit": "Milliseconds",
            "range": "stdev: 2.0",
            "extra": "{\"totalTime\":103.0,\"preparationTime\":0.0,\"singleTimesToRun\":[103.0,101.0,105.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2831.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 81.5127801840505",
            "extra": "{\"totalTime\":2831.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2751.0,2914.0,2830.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 299,
            "unit": "Milliseconds",
            "range": "stdev: 7.810249675906654",
            "extra": "{\"totalTime\":299.0,\"preparationTime\":0.0,\"singleTimesToRun\":[295.0,294.0,308.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 23793.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 1083.1109515342062",
            "extra": "{\"totalTime\":23937.666666666668,\"preparationTime\":144.33333333333334,\"singleTimesToRun\":[25044.0,23166.0,23170.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1278.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 42.782395133200914",
            "extra": "{\"totalTime\":1356.6666666666667,\"preparationTime\":78.33333333333333,\"singleTimesToRun\":[1284.0,1233.0,1318.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1314,
            "unit": "Milliseconds",
            "range": "stdev: 37.8021163428716",
            "extra": "{\"totalTime\":1411.3333333333333,\"preparationTime\":97.33333333333333,\"singleTimesToRun\":[1286.0,1357.0,1299.0],\"postparationTime\":0.0}"
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
          "id": "9f8258ee7cc776f6824494c3b66067d2d146bf6a",
          "message": "Add product visions",
          "timestamp": "2022-04-23T13:28:31+02:00",
          "tree_id": "0f89802efd3d2baca43aea290532a1fa61b6a915",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/9f8258ee7cc776f6824494c3b66067d2d146bf6a"
        },
        "date": 1650713863785,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7968,
            "unit": "Milliseconds",
            "range": "stdev: 15.716233645501712",
            "extra": "{\"totalTime\":7968.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7954.0,7965.0,7985.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5140.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 29.535289626704753",
            "extra": "{\"totalTime\":5141.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5139.0,5112.0,5171.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 112.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":112.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[112.0,112.0,113.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2690,
            "unit": "Milliseconds",
            "range": "stdev: 23.515952032609693",
            "extra": "{\"totalTime\":2690.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2713.0,2666.0,2691.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 288.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":288.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[288.0,288.0,289.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 20672,
            "unit": "Milliseconds",
            "range": "stdev: 1268.0078864108061",
            "extra": "{\"totalTime\":20801.666666666668,\"preparationTime\":129.66666666666666,\"singleTimesToRun\":[22134.0,19872.0,20010.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1129,
            "unit": "Milliseconds",
            "range": "stdev: 6.0",
            "extra": "{\"totalTime\":1202.6666666666667,\"preparationTime\":73.66666666666667,\"singleTimesToRun\":[1129.0,1123.0,1135.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1216.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 23.501772982763097",
            "extra": "{\"totalTime\":1304.0,\"preparationTime\":87.33333333333333,\"singleTimesToRun\":[1240.0,1193.0,1217.0],\"postparationTime\":0.0}"
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
          "id": "881e3e0651c870859df5227c6d0441952433cb1b",
          "message": "Add wireframes",
          "timestamp": "2022-04-23T13:32:38+02:00",
          "tree_id": "7c18513708ea35b02f9d929339e802b9cfb2338d",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/881e3e0651c870859df5227c6d0441952433cb1b"
        },
        "date": 1650714144075,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7144.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 26.350205565295564",
            "extra": "{\"totalTime\":7144.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7115.0,7152.0,7166.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5114,
            "unit": "Milliseconds",
            "range": "stdev: 2.6457513110645907",
            "extra": "{\"totalTime\":5115.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5115.0,5111.0,5116.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 104.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":104.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[104.0,105.0,104.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2623.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 11.67618659209133",
            "extra": "{\"totalTime\":2623.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2613.0,2636.0,2621.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 286.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 4.041451884327381",
            "extra": "{\"totalTime\":286.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[282.0,287.0,290.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 21435.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 1109.1547833072414",
            "extra": "{\"totalTime\":21564.666666666668,\"preparationTime\":129.33333333333334,\"singleTimesToRun\":[22716.0,20783.0,20807.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1137,
            "unit": "Milliseconds",
            "range": "stdev: 8.717797887081348",
            "extra": "{\"totalTime\":1210.3333333333333,\"preparationTime\":73.33333333333333,\"singleTimesToRun\":[1133.0,1147.0,1131.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1253.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 4.041451884327381",
            "extra": "{\"totalTime\":1344.0,\"preparationTime\":90.33333333333333,\"singleTimesToRun\":[1258.0,1250.0,1253.0],\"postparationTime\":0.0}"
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
          "id": "dbd134d79e2542f01a315220677ff520fd412943",
          "message": "Explain challenges in exposé",
          "timestamp": "2022-04-23T14:07:14+02:00",
          "tree_id": "89bb53e29174cfb5b3dea72b7f4b0284aa0a71d4",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/dbd134d79e2542f01a315220677ff520fd412943"
        },
        "date": 1650716172656,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6299.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 22.233608194203057",
            "extra": "{\"totalTime\":6299.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[6286.0,6325.0,6287.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4458.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 21.07921567168317",
            "extra": "{\"totalTime\":4459.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[4471.0,4434.0,4470.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 91,
            "unit": "Milliseconds",
            "range": "stdev: 0.0",
            "extra": "{\"totalTime\":91.0,\"preparationTime\":0.0,\"singleTimesToRun\":[91.0,91.0,91.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2313.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 41.54916766113773",
            "extra": "{\"totalTime\":2313.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2311.0,2273.0,2356.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 255,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":255.0,\"preparationTime\":0.0,\"singleTimesToRun\":[254.0,255.0,256.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 19380,
            "unit": "Milliseconds",
            "range": "stdev: 1021.8253275389096",
            "extra": "{\"totalTime\":19496.666666666668,\"preparationTime\":116.66666666666667,\"singleTimesToRun\":[20558.0,18733.0,18849.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1039.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 16.258331197676267",
            "extra": "{\"totalTime\":1104.6666666666667,\"preparationTime\":65.0,\"singleTimesToRun\":[1034.0,1027.0,1058.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1111,
            "unit": "Milliseconds",
            "range": "stdev: 4.58257569495584",
            "extra": "{\"totalTime\":1192.0,\"preparationTime\":81.0,\"singleTimesToRun\":[1110.0,1116.0,1107.0],\"postparationTime\":0.0}"
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
          "id": "d2b4107b9ff3967bee044334e532cc11e71bbbf1",
          "message": "Extend related work",
          "timestamp": "2022-04-28T17:39:43+02:00",
          "tree_id": "ee906bfaa40fcd39d7557533eca63f9d5c1c70e6",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/d2b4107b9ff3967bee044334e532cc11e71bbbf1"
        },
        "date": 1651161121466,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7163.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 23.501772982763097",
            "extra": "{\"totalTime\":7163.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[7140.0,7164.0,7187.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5215.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 135.35631988693152",
            "extra": "{\"totalTime\":5216.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5060.0,5278.0,5308.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 107.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":107.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[108.0,108.0,106.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2739.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 22.50185177565023",
            "extra": "{\"totalTime\":2739.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2722.0,2765.0,2732.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 295,
            "unit": "Milliseconds",
            "range": "stdev: 4.58257569495584",
            "extra": "{\"totalTime\":295.0,\"preparationTime\":0.0,\"singleTimesToRun\":[300.0,294.0,291.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 22501.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 1188.2568465333297",
            "extra": "{\"totalTime\":22635.333333333332,\"preparationTime\":133.66666666666666,\"singleTimesToRun\":[23856.0,21634.0,22015.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1232.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 25.579940057266228",
            "extra": "{\"totalTime\":1327.6666666666667,\"preparationTime\":95.33333333333333,\"singleTimesToRun\":[1250.0,1244.0,1203.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1312.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 40.2781992315115",
            "extra": "{\"totalTime\":1387.0,\"preparationTime\":74.66666666666667,\"singleTimesToRun\":[1267.0,1344.0,1326.0],\"postparationTime\":0.0}"
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
          "id": "9e90c5329e76d51b84b6b7787a5ec2112b1d01a7",
          "message": "Fix typo",
          "timestamp": "2022-04-29T18:07:54+02:00",
          "tree_id": "12f0eae84e2117a2ffa0fc4cf2726b33fd07afc1",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/9e90c5329e76d51b84b6b7787a5ec2112b1d01a7"
        },
        "date": 1651249160135,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8275.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 119.27419391189922",
            "extra": "{\"totalTime\":8275.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8138.0,8353.0,8335.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5996.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 65.62265868839309",
            "extra": "{\"totalTime\":5997.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[6031.0,6038.0,5921.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 120,
            "unit": "Milliseconds",
            "range": "stdev: 0.0",
            "extra": "{\"totalTime\":120.0,\"preparationTime\":0.0,\"singleTimesToRun\":[120.0,120.0,120.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3068.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 31.46956201368766",
            "extra": "{\"totalTime\":3068.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[3032.0,3086.0,3087.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 340.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 4.041451884327381",
            "extra": "{\"totalTime\":340.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[336.0,341.0,344.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 25654.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 1451.82999463895",
            "extra": "{\"totalTime\":25803.0,\"preparationTime\":148.33333333333334,\"singleTimesToRun\":[27331.0,24801.0,24832.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1365.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 19.03505538035898",
            "extra": "{\"totalTime\":1473.6666666666667,\"preparationTime\":108.0,\"singleTimesToRun\":[1384.0,1346.0,1367.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1457,
            "unit": "Milliseconds",
            "range": "stdev: 8.717797887081348",
            "extra": "{\"totalTime\":1539.3333333333333,\"preparationTime\":82.33333333333333,\"singleTimesToRun\":[1453.0,1467.0,1451.0],\"postparationTime\":0.0}"
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
          "id": "32e66da4891e32587ea63aa70dde92ad97a46465",
          "message": "Merge remote-tracking branch 'origin/main'",
          "timestamp": "2022-04-29T16:31:53Z",
          "tree_id": "6dc82001f6f7a1992d4a37bd1b9eb9a00ad8dc7e",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/32e66da4891e32587ea63aa70dde92ad97a46465"
        },
        "date": 1651250541407,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7049,
            "unit": "Milliseconds",
            "range": "stdev: 106.33437826027856",
            "extra": "{\"totalTime\":7049.0,\"preparationTime\":0.0,\"singleTimesToRun\":[6927.0,7122.0,7098.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5185.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 49.96331987902059",
            "extra": "{\"totalTime\":5186.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5158.0,5243.0,5155.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 104,
            "unit": "Milliseconds",
            "range": "stdev: 3.0",
            "extra": "{\"totalTime\":104.0,\"preparationTime\":0.0,\"singleTimesToRun\":[101.0,107.0,104.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2662.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 54.418134232380055",
            "extra": "{\"totalTime\":2662.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2600.0,2690.0,2698.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 293.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2.5166114784235836",
            "extra": "{\"totalTime\":293.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[291.0,296.0,293.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 22918.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 1355.1134023886464",
            "extra": "{\"totalTime\":23045.0,\"preparationTime\":126.66666666666667,\"singleTimesToRun\":[24483.0,22122.0,22150.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1178.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 14.977761292440647",
            "extra": "{\"totalTime\":1270.6666666666667,\"preparationTime\":92.0,\"singleTimesToRun\":[1183.0,1162.0,1191.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1283,
            "unit": "Milliseconds",
            "range": "stdev: 9.643650760992955",
            "extra": "{\"totalTime\":1354.0,\"preparationTime\":71.0,\"singleTimesToRun\":[1276.0,1294.0,1279.0],\"postparationTime\":0.0}"
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
          "distinct": false,
          "id": "e3946901f17e064f2c71574eaa14c5b84b4f3546",
          "message": "Fix slip from af55c90 😬\n\nFix attribute ranges",
          "timestamp": "2022-04-29T18:36:28+02:00",
          "tree_id": "7a18e8489c9e49a881618b83f19447d77454d98e",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/e3946901f17e064f2c71574eaa14c5b84b4f3546"
        },
        "date": 1651251814516,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 6260.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 106.49100118476365",
            "extra": "{\"totalTime\":6260.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6141.0,6345.0,6296.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 4459,
            "unit": "Milliseconds",
            "range": "stdev: 47.82258880487337",
            "extra": "{\"totalTime\":4460.0,\"preparationTime\":1.0,\"singleTimesToRun\":[4405.0,4476.0,4496.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 91.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":91.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[91.0,92.0,92.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2223.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 20.428737928059416",
            "extra": "{\"totalTime\":2223.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2200.0,2238.0,2232.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 250.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 2.5166114784235836",
            "extra": "{\"totalTime\":250.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[248.0,250.0,253.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 19996.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 1065.811584349379",
            "extra": "{\"totalTime\":20110.0,\"preparationTime\":113.66666666666667,\"singleTimesToRun\":[21227.0,19388.0,19374.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1028.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 10.016652800877813",
            "extra": "{\"totalTime\":1109.6666666666667,\"preparationTime\":81.33333333333333,\"singleTimesToRun\":[1032.0,1017.0,1036.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1104.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 29.905406423142512",
            "extra": "{\"totalTime\":1168.0,\"preparationTime\":63.666666666666664,\"singleTimesToRun\":[1072.0,1131.0,1110.0],\"postparationTime\":0.0}"
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
          "id": "0eed677b2c7843cf18c5c6d6959ea9ada75efb8a",
          "message": "Honor external changes to debugger window title",
          "timestamp": "2022-04-30T16:39:40+02:00",
          "tree_id": "46ab8bcf9fe148ae0e40f42d17b2b9f9f1b78b89",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/0eed677b2c7843cf18c5c6d6959ea9ada75efb8a"
        },
        "date": 1651330360545,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8167,
            "unit": "Milliseconds",
            "range": "stdev: 352.88525047102775",
            "extra": "{\"totalTime\":8167.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8543.0,7843.0,8115.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6414.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 390.68316233660926",
            "extra": "{\"totalTime\":6415.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[6338.0,6838.0,6068.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 133,
            "unit": "Milliseconds",
            "range": "stdev: 18.027756377319946",
            "extra": "{\"totalTime\":133.0,\"preparationTime\":0.0,\"singleTimesToRun\":[138.0,148.0,113.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3213,
            "unit": "Milliseconds",
            "range": "stdev: 174.85136545077364",
            "extra": "{\"totalTime\":3213.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3297.0,3330.0,3012.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 347,
            "unit": "Milliseconds",
            "range": "stdev: 33.51119216023208",
            "extra": "{\"totalTime\":347.6666666666667,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[380.0,348.0,313.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 27895.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 1940.6620863337682",
            "extra": "{\"totalTime\":28037.666666666668,\"preparationTime\":142.0,\"singleTimesToRun\":[29463.0,28499.0,25725.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1403.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 59.54270176380422",
            "extra": "{\"totalTime\":1512.6666666666667,\"preparationTime\":109.33333333333333,\"singleTimesToRun\":[1472.0,1372.0,1366.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1422,
            "unit": "Milliseconds",
            "range": "stdev: 40.33608806019741",
            "extra": "{\"totalTime\":1504.3333333333333,\"preparationTime\":82.33333333333333,\"singleTimesToRun\":[1459.0,1428.0,1379.0],\"postparationTime\":0.0}"
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
          "id": "dff090e776d201c9d4c3ac35320a745f36ff96cb",
          "message": "Fix debugger window title for absent labels (follow up 0eed677)",
          "timestamp": "2022-05-02T10:57:18+02:00",
          "tree_id": "13bf58fe52b63fc2f92df266fe1c416e64f1577b",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/dff090e776d201c9d4c3ac35320a745f36ff96cb"
        },
        "date": 1651482492793,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8456.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 165.7598664735627",
            "extra": "{\"totalTime\":8456.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8269.0,8516.0,8584.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6922.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 52.44362052083488",
            "extra": "{\"totalTime\":6923.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[6897.0,6983.0,6888.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 129.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 8.386497083606082",
            "extra": "{\"totalTime\":129.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[120.0,134.0,135.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3354.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 73.52777253074741",
            "extra": "{\"totalTime\":3354.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3321.0,3304.0,3439.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 348.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 21.73323108360405",
            "extra": "{\"totalTime\":348.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[325.0,368.0,352.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 29355.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 1222.1294257701734",
            "extra": "{\"totalTime\":29545.333333333332,\"preparationTime\":189.66666666666666,\"singleTimesToRun\":[30316.0,27980.0,29771.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1474.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 73.71114795831994",
            "extra": "{\"totalTime\":1568.3333333333333,\"preparationTime\":94.0,\"singleTimesToRun\":[1391.0,1501.0,1531.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1598.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 19.2180470738661",
            "extra": "{\"totalTime\":1684.6666666666667,\"preparationTime\":86.33333333333333,\"singleTimesToRun\":[1581.0,1619.0,1595.0],\"postparationTime\":0.0}"
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
          "id": "1e2bd98350f145133a2fd3922e267dfea7be2489",
          "message": "Merge branch main",
          "timestamp": "2022-05-02T10:59:04+02:00",
          "tree_id": "79857ae39be5f1697e11b5e63ccd35e86d24e5f0",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/1e2bd98350f145133a2fd3922e267dfea7be2489"
        },
        "date": 1651498118808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7939,
            "unit": "Milliseconds",
            "range": "stdev: 282.9469915019419",
            "extra": "{\"totalTime\":7939.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8166.0,8029.0,7622.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6394.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 261.16342265587906",
            "extra": "{\"totalTime\":6395.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[6677.0,6344.0,6162.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 115.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 4.725815626252609",
            "extra": "{\"totalTime\":115.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[121.0,114.0,112.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3053,
            "unit": "Milliseconds",
            "range": "stdev: 109.30233300346337",
            "extra": "{\"totalTime\":3053.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3139.0,2930.0,3090.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 322,
            "unit": "Milliseconds",
            "range": "stdev: 21.517434791350013",
            "extra": "{\"totalTime\":322.0,\"preparationTime\":0.0,\"singleTimesToRun\":[343.0,300.0,323.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 26168.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 2037.0177547908938",
            "extra": "{\"totalTime\":26339.0,\"preparationTime\":170.66666666666666,\"singleTimesToRun\":[28509.0,25199.0,24797.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1359.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 32.34707611722168",
            "extra": "{\"totalTime\":1443.3333333333333,\"preparationTime\":83.66666666666667,\"singleTimesToRun\":[1397.0,1342.0,1340.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1404,
            "unit": "Milliseconds",
            "range": "stdev: 88.89881888979178",
            "extra": "{\"totalTime\":1483.3333333333333,\"preparationTime\":79.33333333333333,\"singleTimesToRun\":[1506.0,1363.0,1343.0],\"postparationTime\":0.0}"
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
          "id": "77bafb069c295e24d3e65aa5def5dd124183229c",
          "message": "Complements Tools-ct.1109 (Trunk - Debugger>>#interruptedProcessIsReady)",
          "timestamp": "2022-05-11T12:12:47+02:00",
          "tree_id": "006d9c7041eab0a08c9ac215b1e2f1f5a54069ac",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/77bafb069c295e24d3e65aa5def5dd124183229c"
        },
        "date": 1652264595663,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8344,
            "unit": "Milliseconds",
            "range": "stdev: 102.56217626396194",
            "extra": "{\"totalTime\":8344.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8311.0,8459.0,8262.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 6530.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 330.5697102478286",
            "extra": "{\"totalTime\":6531.666666666667,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[6276.0,6411.0,6904.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 120.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":120.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[119.0,122.0,121.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3100.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 108.78572210236662",
            "extra": "{\"totalTime\":3100.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3023.0,3054.0,3225.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 341,
            "unit": "Milliseconds",
            "range": "stdev: 13.892443989449804",
            "extra": "{\"totalTime\":341.0,\"preparationTime\":0.0,\"singleTimesToRun\":[334.0,332.0,357.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 27189,
            "unit": "Milliseconds",
            "range": "stdev: 972.3903537160372",
            "extra": "{\"totalTime\":27343.666666666668,\"preparationTime\":154.66666666666666,\"singleTimesToRun\":[28307.0,26540.0,26720.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1395.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 11.372481406154654",
            "extra": "{\"totalTime\":1480.6666666666667,\"preparationTime\":85.33333333333333,\"singleTimesToRun\":[1408.0,1386.0,1392.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1458,
            "unit": "Milliseconds",
            "range": "stdev: 32.2335229225724",
            "extra": "{\"totalTime\":1564.0,\"preparationTime\":106.0,\"singleTimesToRun\":[1421.0,1480.0,1473.0],\"postparationTime\":0.0}"
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
          "id": "003f8f660ff119a54d77a6a4b5e55758938d0e87",
          "message": "Increase timeout for benchmarks",
          "timestamp": "2022-05-12T12:04:31+02:00",
          "tree_id": "10d4ff29a9fe103123d68ab6ebdbf910308e0951",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/003f8f660ff119a54d77a6a4b5e55758938d0e87"
        },
        "date": 1652699859729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 10049.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 119.54218223427802",
            "extra": "{\"totalTime\":10049.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[9915.0,10089.0,10144.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 45884,
            "unit": "Milliseconds",
            "range": "stdev: 221.97972880423114",
            "extra": "{\"totalTime\":45885.0,\"preparationTime\":1.0,\"singleTimesToRun\":[46034.0,45629.0,45989.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 167.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 4.509249752822894",
            "extra": "{\"totalTime\":167.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[163.0,172.0,167.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3381.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 66.16141876753652",
            "extra": "{\"totalTime\":3381.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3355.0,3333.0,3457.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 359,
            "unit": "Milliseconds",
            "range": "stdev: 17.349351572897472",
            "extra": "{\"totalTime\":359.0,\"preparationTime\":0.0,\"singleTimesToRun\":[379.0,348.0,350.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 88517.33333333333,
            "unit": "Milliseconds",
            "range": "stdev: 832.5775239179433",
            "extra": "{\"totalTime\":88703.0,\"preparationTime\":185.66666666666666,\"singleTimesToRun\":[87556.0,88990.0,89006.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3643.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 41.05281151557507",
            "extra": "{\"totalTime\":3773.6666666666665,\"preparationTime\":130.33333333333334,\"singleTimesToRun\":[3598.0,3678.0,3654.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1691.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 34.03429642777023",
            "extra": "{\"totalTime\":1795.3333333333333,\"preparationTime\":104.0,\"singleTimesToRun\":[1653.0,1718.0,1703.0],\"postparationTime\":0.0}"
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
          "id": "a260d00c88c6bf64f8eb3b0a87ff3e4ac8e55a4c",
          "message": "Merge branch 'main' into shaping-re22",
          "timestamp": "2022-05-18T09:23:07+02:00",
          "tree_id": "e5a4620e384bdfe081c4b6c5fe439a5afb893a17",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/a260d00c88c6bf64f8eb3b0a87ff3e4ac8e55a4c"
        },
        "date": 1652859214716,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7106.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 102.0016339738405",
            "extra": "{\"totalTime\":7106.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6989.0,7161.0,7170.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5116,
            "unit": "Milliseconds",
            "range": "stdev: 74.30343195303969",
            "extra": "{\"totalTime\":5117.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5197.0,5100.0,5051.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 104,
            "unit": "Milliseconds",
            "range": "stdev: 3.4641016151377544",
            "extra": "{\"totalTime\":104.0,\"preparationTime\":0.0,\"singleTimesToRun\":[102.0,102.0,108.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2611.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 23.007245235649865",
            "extra": "{\"totalTime\":2611.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2588.0,2612.0,2634.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 287.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 6.110100926607787",
            "extra": "{\"totalTime\":287.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[281.0,293.0,289.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 22723.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 1134.8710646295172",
            "extra": "{\"totalTime\":22852.333333333332,\"preparationTime\":128.66666666666666,\"singleTimesToRun\":[24027.0,22190.0,21954.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1184,
            "unit": "Milliseconds",
            "range": "stdev: 27.40437921208944",
            "extra": "{\"totalTime\":1275.0,\"preparationTime\":91.0,\"singleTimesToRun\":[1215.0,1174.0,1163.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1238.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 16.563010998406458",
            "extra": "{\"totalTime\":1310.0,\"preparationTime\":71.66666666666667,\"singleTimesToRun\":[1221.0,1254.0,1240.0],\"postparationTime\":0.0}"
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
          "id": "a4598320b9428f3bd2b18b9113461ec9083f2d4b",
          "message": "Merge pull request #75 from hpi-swa-lab/shaping-re22\n\nAdd exposé for RE22 seminar",
          "timestamp": "2022-05-21T18:53:41+02:00",
          "tree_id": "e5a4620e384bdfe081c4b6c5fe439a5afb893a17",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/a4598320b9428f3bd2b18b9113461ec9083f2d4b"
        },
        "date": 1653152587801,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7113,
            "unit": "Milliseconds",
            "range": "stdev: 28.478061731796284",
            "extra": "{\"totalTime\":7113.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7082.0,7138.0,7119.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5255,
            "unit": "Milliseconds",
            "range": "stdev: 24.979991993593593",
            "extra": "{\"totalTime\":5256.0,\"preparationTime\":1.0,\"singleTimesToRun\":[5247.0,5235.0,5283.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 105,
            "unit": "Milliseconds",
            "range": "stdev: 2.6457513110645907",
            "extra": "{\"totalTime\":105.0,\"preparationTime\":0.0,\"singleTimesToRun\":[108.0,104.0,103.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2702.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 133.08769038995806",
            "extra": "{\"totalTime\":2702.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2856.0,2624.0,2627.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 291,
            "unit": "Milliseconds",
            "range": "stdev: 5.5677643628300215",
            "extra": "{\"totalTime\":291.0,\"preparationTime\":0.0,\"singleTimesToRun\":[285.0,296.0,292.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 23452,
            "unit": "Milliseconds",
            "range": "stdev: 1012.5630844544946",
            "extra": "{\"totalTime\":23608.333333333332,\"preparationTime\":156.33333333333334,\"singleTimesToRun\":[24620.0,22822.0,22914.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1228.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 31.501322723551365",
            "extra": "{\"totalTime\":1303.0,\"preparationTime\":74.66666666666667,\"singleTimesToRun\":[1248.0,1192.0,1245.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1285.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 5.507570547286102",
            "extra": "{\"totalTime\":1358.0,\"preparationTime\":72.33333333333333,\"singleTimesToRun\":[1280.0,1286.0,1291.0],\"postparationTime\":0.0}"
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
          "id": "a7b9e4f78151cebc16ae8325f95fc5154bfa7d31",
          "message": "Update links to docs",
          "timestamp": "2022-05-21T16:55:15Z",
          "tree_id": "500b66c852581a8054667f29372e8a655d6eab38",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/a7b9e4f78151cebc16ae8325f95fc5154bfa7d31"
        },
        "date": 1653152737754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7785.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 76.95020034628457",
            "extra": "{\"totalTime\":7785.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7736.0,7874.0,7746.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5842.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 38.004385711827176",
            "extra": "{\"totalTime\":5843.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5805.0,5881.0,5842.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 111.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":111.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[110.0,111.0,114.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2828.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 31.722757341273685",
            "extra": "{\"totalTime\":2828.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2799.0,2824.0,2862.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 329.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":329.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[329.0,332.0,328.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 25366,
            "unit": "Milliseconds",
            "range": "stdev: 1411.3784042559246",
            "extra": "{\"totalTime\":25536.666666666668,\"preparationTime\":170.66666666666666,\"singleTimesToRun\":[26993.0,24471.0,24634.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1311.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 60.13595707505896",
            "extra": "{\"totalTime\":1391.3333333333333,\"preparationTime\":79.66666666666667,\"singleTimesToRun\":[1307.0,1254.0,1374.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1366.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 9.29157324317757",
            "extra": "{\"totalTime\":1442.3333333333333,\"preparationTime\":75.66666666666667,\"singleTimesToRun\":[1359.0,1377.0,1364.0],\"postparationTime\":0.0}"
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
          "id": "a000b3814de2b1deecfade0b98f0eba3d8ef9085",
          "message": "Add tiny tracing & debugging interface on TDBCursor",
          "timestamp": "2022-05-25T22:50:13+02:00",
          "tree_id": "294ca4c731bd935347ab5a6c460c3cf3eb93eb3c",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/a000b3814de2b1deecfade0b98f0eba3d8ef9085"
        },
        "date": 1653512459273,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 9710,
            "unit": "Milliseconds",
            "range": "stdev: 115.65898149300814",
            "extra": "{\"totalTime\":9710.0,\"preparationTime\":0.0,\"singleTimesToRun\":[9622.0,9841.0,9667.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7600.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 275.94625080499526",
            "extra": "{\"totalTime\":7601.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[7558.0,7895.0,7348.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 151,
            "unit": "Milliseconds",
            "range": "stdev: 15.620499351813308",
            "extra": "{\"totalTime\":151.0,\"preparationTime\":0.0,\"singleTimesToRun\":[141.0,143.0,169.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3806.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 180.24797733492971",
            "extra": "{\"totalTime\":3806.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[3649.0,4003.0,3767.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 408,
            "unit": "Milliseconds",
            "range": "stdev: 9.0",
            "extra": "{\"totalTime\":408.0,\"preparationTime\":0.0,\"singleTimesToRun\":[417.0,399.0,408.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 34138,
            "unit": "Milliseconds",
            "range": "stdev: 1489.48816712319",
            "extra": "{\"totalTime\":34329.666666666664,\"preparationTime\":191.66666666666666,\"singleTimesToRun\":[35853.0,33393.0,33168.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1714.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 20.647840887931437",
            "extra": "{\"totalTime\":1815.0,\"preparationTime\":100.66666666666667,\"singleTimesToRun\":[1705.0,1738.0,1700.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1891.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 41.968241961432376",
            "extra": "{\"totalTime\":2010.0,\"preparationTime\":118.66666666666667,\"singleTimesToRun\":[1924.0,1844.0,1906.0],\"postparationTime\":0.0}"
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
          "id": "33bd37a4ad106c6253aebc31a36c295444739e53",
          "message": "help: fix link to second entry point",
          "timestamp": "2022-05-25T23:04:09+02:00",
          "tree_id": "121d0efd74cb5c1ddfbe41d24f4e3144772cf993",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/33bd37a4ad106c6253aebc31a36c295444739e53"
        },
        "date": 1653513241715,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7144,
            "unit": "Milliseconds",
            "range": "stdev: 77.58221445666526",
            "extra": "{\"totalTime\":7144.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7059.0,7162.0,7211.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5084.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 25.69695182961071",
            "extra": "{\"totalTime\":5085.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[5099.0,5100.0,5055.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 105,
            "unit": "Milliseconds",
            "range": "stdev: 2.0",
            "extra": "{\"totalTime\":105.0,\"preparationTime\":0.0,\"singleTimesToRun\":[103.0,105.0,107.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2681.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 42.39496825489239",
            "extra": "{\"totalTime\":2681.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2720.0,2688.0,2636.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 290.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":290.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[289.0,292.0,291.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 23076,
            "unit": "Milliseconds",
            "range": "stdev: 1332.0033783740942",
            "extra": "{\"totalTime\":23209.333333333332,\"preparationTime\":133.33333333333334,\"singleTimesToRun\":[24612.0,22377.0,22239.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1202.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 27.15388247255507",
            "extra": "{\"totalTime\":1276.0,\"preparationTime\":73.66666666666667,\"singleTimesToRun\":[1231.0,1199.0,1177.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1275.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 41.13797920818831",
            "extra": "{\"totalTime\":1367.0,\"preparationTime\":91.66666666666667,\"singleTimesToRun\":[1239.0,1267.0,1320.0],\"postparationTime\":0.0}"
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
          "id": "14b792642efe93ff6ae190353bc6fdd478556ec7",
          "message": "set exit code if any screenshot failed",
          "timestamp": "2022-06-18T00:41:46Z",
          "tree_id": "21cf7456b5150006d20c821a4f7db7111734eb56",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/14b792642efe93ff6ae190353bc6fdd478556ec7"
        },
        "date": 1655516073261,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 9239,
            "unit": "Milliseconds",
            "range": "stdev: 190.49409439665052",
            "extra": "{\"totalTime\":9239.0,\"preparationTime\":0.0,\"singleTimesToRun\":[9023.0,9311.0,9383.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 7141.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 194.4899311875382",
            "extra": "{\"totalTime\":7142.666666666667,\"preparationTime\":1.0,\"singleTimesToRun\":[6984.0,7359.0,7082.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 139.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 4.163331998932265",
            "extra": "{\"totalTime\":140.0,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[141.0,143.0,135.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3561.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 77.5134396948899",
            "extra": "{\"totalTime\":3561.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3485.0,3640.0,3560.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 388.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 7.0945988845975885",
            "extra": "{\"totalTime\":388.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[390.0,395.0,381.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 30639.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 1176.9054054312664",
            "extra": "{\"totalTime\":30831.333333333332,\"preparationTime\":191.66666666666666,\"singleTimesToRun\":[31834.0,29481.0,30604.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1770,
            "unit": "Milliseconds",
            "range": "stdev: 53.70288632839021",
            "extra": "{\"totalTime\":1865.3333333333333,\"preparationTime\":95.33333333333333,\"singleTimesToRun\":[1802.0,1800.0,1708.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1669.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 26.083200212652848",
            "extra": "{\"totalTime\":1759.6666666666667,\"preparationTime\":90.33333333333333,\"singleTimesToRun\":[1663.0,1647.0,1698.0],\"postparationTime\":0.0}"
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
          "id": "c2eb31737f488f89a201684837b7ffac87fd57b4",
          "message": "Sensitize screenshot generation (#81)\n\nIf any screenshot fails to generate, fail the CI job.",
          "timestamp": "2022-06-18T01:34:39Z",
          "tree_id": "21cf7456b5150006d20c821a4f7db7111734eb56",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/c2eb31737f488f89a201684837b7ffac87fd57b4"
        },
        "date": 1655516646406,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7074.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 157.42405576446484",
            "extra": "{\"totalTime\":7074.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[6928.0,7055.0,7241.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 5169.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 51.208723215223145",
            "extra": "{\"totalTime\":5170.333333333333,\"preparationTime\":1.0,\"singleTimesToRun\":[5223.0,5121.0,5164.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 103.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":103.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[105.0,102.0,103.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2641.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 41.88476254359494",
            "extra": "{\"totalTime\":2641.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2667.0,2593.0,2664.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 286.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 3.511884584284246",
            "extra": "{\"totalTime\":286.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[290.0,283.0,287.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 22557.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 1236.1295778895244",
            "extra": "{\"totalTime\":22707.666666666668,\"preparationTime\":150.0,\"singleTimesToRun\":[23978.0,21970.0,21725.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 1280.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 27.736858750286295",
            "extra": "{\"totalTime\":1354.0,\"preparationTime\":73.33333333333333,\"singleTimesToRun\":[1288.0,1250.0,1304.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1275,
            "unit": "Milliseconds",
            "range": "stdev: 15.716233645501712",
            "extra": "{\"totalTime\":1346.6666666666667,\"preparationTime\":71.66666666666667,\"singleTimesToRun\":[1278.0,1258.0,1289.0],\"postparationTime\":0.0}"
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
          "id": "87ca43cb6257668b7ab342a3f5c9b5f547727828",
          "message": "Merge branch 'main' into feat/historic-state-queries",
          "timestamp": "2022-06-18T03:36:50+02:00",
          "tree_id": "317986c724bc876f8d67acc2443913578adf413a",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/87ca43cb6257668b7ab342a3f5c9b5f547727828"
        },
        "date": 1655517249276,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8808.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 297.7655677430373",
            "extra": "{\"totalTime\":8808.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8840.0,9089.0,8496.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 31915,
            "unit": "Milliseconds",
            "range": "stdev: 476.8689547454311",
            "extra": "{\"totalTime\":31916.0,\"preparationTime\":1.0,\"singleTimesToRun\":[31617.0,32465.0,31663.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 146.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 2.886751345948129",
            "extra": "{\"totalTime\":146.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[148.0,143.0,148.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3111.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 37.81974792794544",
            "extra": "{\"totalTime\":3111.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3077.0,3152.0,3106.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 330.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 10.016652800877813",
            "extra": "{\"totalTime\":330.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[330.0,341.0,321.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 63078.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 278.2109511384003",
            "extra": "{\"totalTime\":63268.333333333336,\"preparationTime\":189.66666666666666,\"singleTimesToRun\":[63378.0,62828.0,63030.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2964.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 43.14317249963584",
            "extra": "{\"totalTime\":3059.3333333333335,\"preparationTime\":94.66666666666667,\"singleTimesToRun\":[2946.0,2934.0,3014.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1599.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 52.204725201205044",
            "extra": "{\"totalTime\":1692.3333333333333,\"preparationTime\":93.0,\"singleTimesToRun\":[1594.0,1550.0,1654.0],\"postparationTime\":0.0}"
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
          "id": "04dd13ce319e8a28ededbbccd83514e9949dc218",
          "message": "range retracing: fork for all unknown primitives with vectors\n\nTest by the examples of primitive 118 (maybe going to be optimized in the future to avoid forks) and primitive 254 (very unlikely to ever be optimized).\n\nMeasures slowdown by up to 15%, unfortunately. In the future, we might want to optimize \"contains vectors\" checks.",
          "timestamp": "2022-06-18T15:50:28+02:00",
          "tree_id": "bb8a71598efa61d2f89aa51dc4433e7d10b6ac58",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/04dd13ce319e8a28ededbbccd83514e9949dc218"
        },
        "date": 1655561206703,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8588.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 277.1016660601905",
            "extra": "{\"totalTime\":8588.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8883.0,8549.0,8333.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 31549,
            "unit": "Milliseconds",
            "range": "stdev: 295.43696451189044",
            "extra": "{\"totalTime\":31550.0,\"preparationTime\":1.0,\"singleTimesToRun\":[31728.0,31208.0,31711.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 148,
            "unit": "Milliseconds",
            "range": "stdev: 3.605551275463989",
            "extra": "{\"totalTime\":148.0,\"preparationTime\":0.0,\"singleTimesToRun\":[144.0,151.0,149.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3065.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 88.28552165181635",
            "extra": "{\"totalTime\":3065.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[3167.0,3008.0,3021.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 333.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 3.511884584284246",
            "extra": "{\"totalTime\":333.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[334.0,330.0,337.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 62644.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 245.0843392249561",
            "extra": "{\"totalTime\":62834.0,\"preparationTime\":189.33333333333334,\"singleTimesToRun\":[62437.0,62582.0,62915.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2928.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 73.32348418708247",
            "extra": "{\"totalTime\":3018.3333333333335,\"preparationTime\":89.66666666666667,\"singleTimesToRun\":[3013.0,2893.0,2880.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1582.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 6.506407098647712",
            "extra": "{\"totalTime\":1677.0,\"preparationTime\":94.66666666666667,\"singleTimesToRun\":[1589.0,1582.0,1576.0],\"postparationTime\":0.0}"
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
          "id": "f910b7adf110b3f6ebd5a6c73677297eecba1950",
          "message": "proxies: move up side effect propagation from range proxy to proxy\n\nFor the revised semantics, see TDBProxyTest >> #testSideEffects.",
          "timestamp": "2022-06-18T16:37:31+02:00",
          "tree_id": "7bb4e010a039fcb8ff86607cfb7a4d1b68261275",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/f910b7adf110b3f6ebd5a6c73677297eecba1950"
        },
        "date": 1655564212183,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 9971.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 302.14124732206517",
            "extra": "{\"totalTime\":9971.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[9675.0,10279.0,9961.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 36222,
            "unit": "Milliseconds",
            "range": "stdev: 905.1359013982376",
            "extra": "{\"totalTime\":36223.0,\"preparationTime\":1.0,\"singleTimesToRun\":[37227.0,35471.0,35968.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 186.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 21.385353243127255",
            "extra": "{\"totalTime\":186.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[211.0,175.0,173.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3552.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 89.58980596771785",
            "extra": "{\"totalTime\":3552.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3615.0,3450.0,3593.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 383,
            "unit": "Milliseconds",
            "range": "stdev: 13.228756555322953",
            "extra": "{\"totalTime\":383.0,\"preparationTime\":0.0,\"singleTimesToRun\":[388.0,368.0,393.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 70763,
            "unit": "Milliseconds",
            "range": "stdev: 728.1545165691139",
            "extra": "{\"totalTime\":70975.0,\"preparationTime\":212.0,\"singleTimesToRun\":[70491.0,70210.0,71588.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3392.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 77.35847292529328",
            "extra": "{\"totalTime\":3495.3333333333335,\"preparationTime\":102.66666666666667,\"singleTimesToRun\":[3481.0,3360.0,3337.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1914.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 161.07865573480967",
            "extra": "{\"totalTime\":2023.3333333333333,\"preparationTime\":109.0,\"singleTimesToRun\":[1985.0,1730.0,2028.0],\"postparationTime\":0.0}"
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
          "id": "7c4b6135504c415cf50c8bbeb92967cb79209785",
          "message": "Merge pull request #78 from hpi-swa-lab/feat/historic-state-queries\n\nThe PR implements range retracing queries for #20.\r\n\r\nNew protocols:\r\n\r\n* TDBCursor >> #object:collect:, TDBMemory >> #object:[atTimes:]collect:, TDBMemory >> #object:atTimes:(instVar|field)At:getCurrentifAbsent:\r\n* TDBCursor >> #contextAtTime:\r\n* See examples for range queries on the class side of TDBRangeRetracingSimulator.\r\n\r\nBreaking changes:\r\n\r\n* All messages sent to proxies will be executed isolated from the rest of the image from now. Any side effects are only visible by sending further messages to the result or by using a common #in: block.\r\n\r\nOverview of technical changes to the engine:\r\n\r\n* Extract read/write-related logic from single simulators to TDBMemorySimulator and add generalized hooks for state control\r\n* Add isolation mechanism to memory simulator\r\n* Add TDBRangeRetracingSimulator for vectorized/forkable execution of range queires and push down conventional retracing from TDBRetracingSimulator to TDBPointRetracingSimulator\r\n* Add TDBMemorySlice as the data structure for internal retracing vectors and the result of range queries\r\n* Add TDBRangeProxy and TDBRetracingFrayOut error for accessingly parts of range queries results transparently\r\n* Add retracing and retracing support for BitBlt (9fcb943)\r\n* Add new benchmarks using BenchmarkRunner and smoke-test them on CI\r\n\r\nFind more details in 1cdb827 and fdd5478.",
          "timestamp": "2022-06-18T18:26:37+02:00",
          "tree_id": "7bb4e010a039fcb8ff86607cfb7a4d1b68261275",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/7c4b6135504c415cf50c8bbeb92967cb79209785"
        },
        "date": 1655570596808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8980.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 89.51163797704372",
            "extra": "{\"totalTime\":8980.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8931.0,9084.0,8927.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 26992.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 146.1243762461737",
            "extra": "{\"totalTime\":26993.333333333332,\"preparationTime\":1.0,\"singleTimesToRun\":[26834.0,27122.0,27021.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 137,
            "unit": "Milliseconds",
            "range": "stdev: 2.6457513110645907",
            "extra": "{\"totalTime\":137.0,\"preparationTime\":0.0,\"singleTimesToRun\":[135.0,140.0,136.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2777,
            "unit": "Milliseconds",
            "range": "stdev: 59.732738092272314",
            "extra": "{\"totalTime\":2777.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2733.0,2753.0,2845.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 295,
            "unit": "Milliseconds",
            "range": "stdev: 7.0",
            "extra": "{\"totalTime\":295.0,\"preparationTime\":0.0,\"singleTimesToRun\":[288.0,295.0,302.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 53425.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 382.7692951809658",
            "extra": "{\"totalTime\":53596.0,\"preparationTime\":170.33333333333334,\"singleTimesToRun\":[53661.0,52984.0,53632.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2623,
            "unit": "Milliseconds",
            "range": "stdev: 23.515952032609693",
            "extra": "{\"totalTime\":2707.6666666666665,\"preparationTime\":84.66666666666667,\"singleTimesToRun\":[2639.0,2596.0,2634.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1394.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 33.94603560555096",
            "extra": "{\"totalTime\":1480.3333333333333,\"preparationTime\":86.0,\"singleTimesToRun\":[1431.0,1364.0,1388.0],\"postparationTime\":0.0}"
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
          "id": "1f629877f5b9b2979b8721c5a353079bbb2cf99f",
          "message": "smalltalkCI spec: use explicit #benchmarks group",
          "timestamp": "2022-06-18T18:38:28+02:00",
          "tree_id": "69422dacaa97175377dd52834f5a90bf0abee45b",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/1f629877f5b9b2979b8721c5a353079bbb2cf99f"
        },
        "date": 1655571227517,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8168.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 337.43789552054363",
            "extra": "{\"totalTime\":8168.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[8553.0,8032.0,7921.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 29886,
            "unit": "Milliseconds",
            "range": "stdev: 697.1721451693262",
            "extra": "{\"totalTime\":29887.0,\"preparationTime\":1.0,\"singleTimesToRun\":[30061.0,30479.0,29118.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 142.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 3.7859388972001824",
            "extra": "{\"totalTime\":142.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[140.0,147.0,141.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2787.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 88.0927541477353",
            "extra": "{\"totalTime\":2787.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2888.0,2723.0,2752.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 325.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 13.051181300301261",
            "extra": "{\"totalTime\":325.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[340.0,321.0,315.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 58552.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 490.2339577521465",
            "extra": "{\"totalTime\":58722.666666666664,\"preparationTime\":170.33333333333334,\"singleTimesToRun\":[58363.0,59109.0,58185.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2668.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 12.503332889007368",
            "extra": "{\"totalTime\":2753.6666666666665,\"preparationTime\":85.33333333333333,\"singleTimesToRun\":[2654.0,2674.0,2677.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1442,
            "unit": "Milliseconds",
            "range": "stdev: 0.0",
            "extra": "{\"totalTime\":1527.3333333333333,\"preparationTime\":85.33333333333333,\"singleTimesToRun\":[1442.0,1442.0,1442.0],\"postparationTime\":0.0}"
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
          "id": "0bf381d7d03aa06ad46b3cc09b398b9a44d1e300",
          "message": "baseline: add groups #benchmarks and #fullBenchmarks",
          "timestamp": "2022-06-18T18:37:02+02:00",
          "tree_id": "a7e61384f45f55e38d7ea6549ecef7352c055b4e",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/0bf381d7d03aa06ad46b3cc09b398b9a44d1e300"
        },
        "date": 1655571302297,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8446.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 416.46288350023866",
            "extra": "{\"totalTime\":8446.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8469.0,8851.0,8019.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 30439,
            "unit": "Milliseconds",
            "range": "stdev: 220.93211627103923",
            "extra": "{\"totalTime\":30440.0,\"preparationTime\":1.0,\"singleTimesToRun\":[30673.0,30234.0,30410.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 145.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":145.66666666666666,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[143.0,146.0,147.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2993.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 247.76265524354824",
            "extra": "{\"totalTime\":2993.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2864.0,3279.0,2837.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 322.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 25.890796305508513",
            "extra": "{\"totalTime\":322.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[313.0,352.0,303.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 60887.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 1267.7248649976593",
            "extra": "{\"totalTime\":61074.666666666664,\"preparationTime\":187.0,\"singleTimesToRun\":[59589.0,60952.0,62122.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2864.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 58.77357682950166",
            "extra": "{\"totalTime\":2957.3333333333335,\"preparationTime\":92.66666666666667,\"singleTimesToRun\":[2909.0,2887.0,2798.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1525,
            "unit": "Milliseconds",
            "range": "stdev: 61.09828148156051",
            "extra": "{\"totalTime\":1616.6666666666667,\"preparationTime\":91.66666666666667,\"singleTimesToRun\":[1529.0,1584.0,1462.0],\"postparationTime\":0.0}"
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
          "id": "b9d0a3c77615b58b3770cfed400e1873288008ee",
          "message": "Make dependency on StatisticsWorkbench optional (#83)",
          "timestamp": "2022-06-18T16:53:52Z",
          "tree_id": "69422dacaa97175377dd52834f5a90bf0abee45b",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/b9d0a3c77615b58b3770cfed400e1873288008ee"
        },
        "date": 1655572315218,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 9546.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 83.33866649601092",
            "extra": "{\"totalTime\":9546.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[9468.0,9634.0,9538.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 33470.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 239.46259276415876",
            "extra": "{\"totalTime\":33471.333333333336,\"preparationTime\":1.0,\"singleTimesToRun\":[33617.0,33600.0,33194.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 153,
            "unit": "Milliseconds",
            "range": "stdev: 2.0",
            "extra": "{\"totalTime\":153.0,\"preparationTime\":0.0,\"singleTimesToRun\":[151.0,153.0,155.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3255.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 178.9450567446146",
            "extra": "{\"totalTime\":3255.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3133.0,3461.0,3173.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 351,
            "unit": "Milliseconds",
            "range": "stdev: 7.0",
            "extra": "{\"totalTime\":351.0,\"preparationTime\":0.0,\"singleTimesToRun\":[343.0,356.0,354.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 66266.66666666667,
            "unit": "Milliseconds",
            "range": "stdev: 187.9902479740195",
            "extra": "{\"totalTime\":66464.0,\"preparationTime\":197.33333333333334,\"singleTimesToRun\":[66174.0,66483.0,66143.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3141.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 23.86070689089771",
            "extra": "{\"totalTime\":3242.0,\"preparationTime\":100.33333333333333,\"singleTimesToRun\":[3125.0,3169.0,3131.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1656.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 7.0945988845975885",
            "extra": "{\"totalTime\":1756.0,\"preparationTime\":99.66666666666667,\"singleTimesToRun\":[1655.0,1650.0,1664.0],\"postparationTime\":0.0}"
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
          "id": "f952b65aaff718881cf8aa073ef7c2e43b5a0040",
          "message": "fix updating of TDBProxy class\n\nThis is a workaround for a combination of issues in the Trunk. See the comment in the postscript and https://github.com/squeak-smalltalk/squeak-object-memory/issues/46 for more details.",
          "timestamp": "2022-06-18T20:17:43+02:00",
          "tree_id": "2b8e4056e052d0c62cd8f2eccc290e5b9f635777",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/f952b65aaff718881cf8aa073ef7c2e43b5a0040"
        },
        "date": 1655577384182,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 9398.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 926.2053408037191",
            "extra": "{\"totalTime\":9398.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[10248.0,9536.0,8411.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 33365,
            "unit": "Milliseconds",
            "range": "stdev: 886.5038070984241",
            "extra": "{\"totalTime\":33366.0,\"preparationTime\":1.0,\"singleTimesToRun\":[32885.0,32822.0,34388.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 164.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 20.404247923737188",
            "extra": "{\"totalTime\":164.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[187.0,147.0,160.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3400.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 111.46449359923247",
            "extra": "{\"totalTime\":3400.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[3456.0,3473.0,3272.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 372,
            "unit": "Milliseconds",
            "range": "stdev: 21.0",
            "extra": "{\"totalTime\":372.0,\"preparationTime\":0.0,\"singleTimesToRun\":[393.0,372.0,351.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 66625,
            "unit": "Milliseconds",
            "range": "stdev: 1842.770468615123",
            "extra": "{\"totalTime\":66834.33333333333,\"preparationTime\":209.33333333333334,\"singleTimesToRun\":[68506.0,64823.0,66546.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3241.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 116.66333328571292",
            "extra": "{\"totalTime\":3339.0,\"preparationTime\":97.66666666666667,\"singleTimesToRun\":[3277.0,3111.0,3336.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1769,
            "unit": "Milliseconds",
            "range": "stdev: 67.7347768875044",
            "extra": "{\"totalTime\":1874.3333333333333,\"preparationTime\":105.33333333333333,\"singleTimesToRun\":[1847.0,1735.0,1725.0],\"postparationTime\":0.0}"
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
          "id": "4dd29076c8e05b09bdd282c56a3502181d40fe42",
          "message": "fix updating of TDBProxy class, complements f952b65",
          "timestamp": "2022-06-18T20:45:30+02:00",
          "tree_id": "bdb173d0f2d02b9be4c999f12f17bb061d823627",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/4dd29076c8e05b09bdd282c56a3502181d40fe42"
        },
        "date": 1655579149772,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 12934.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 136.4453492550528",
            "extra": "{\"totalTime\":12934.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[12831.0,13089.0,12883.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 32124,
            "unit": "Milliseconds",
            "range": "stdev: 365.9057255632932",
            "extra": "{\"totalTime\":32125.0,\"preparationTime\":1.0,\"singleTimesToRun\":[32087.0,31778.0,32507.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 160.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 5.131601439446884",
            "extra": "{\"totalTime\":161.33333333333334,\"preparationTime\":0.6666666666666666,\"singleTimesToRun\":[165.0,155.0,162.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3540.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 33.08070938376826",
            "extra": "{\"totalTime\":3540.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3538.0,3575.0,3509.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 358,
            "unit": "Milliseconds",
            "range": "stdev: 11.532562594670797",
            "extra": "{\"totalTime\":358.0,\"preparationTime\":0.0,\"singleTimesToRun\":[346.0,359.0,369.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 64790,
            "unit": "Milliseconds",
            "range": "stdev: 364.2018671011998",
            "extra": "{\"totalTime\":64994.0,\"preparationTime\":204.0,\"singleTimesToRun\":[64433.0,64776.0,65161.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3339,
            "unit": "Milliseconds",
            "range": "stdev: 47.031904065219386",
            "extra": "{\"totalTime\":3441.0,\"preparationTime\":102.0,\"singleTimesToRun\":[3361.0,3371.0,3285.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1723.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 34.50120770833006",
            "extra": "{\"totalTime\":1829.3333333333333,\"preparationTime\":105.66666666666667,\"singleTimesToRun\":[1758.0,1689.0,1724.0],\"postparationTime\":0.0}"
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
          "id": "d23e61f5e0c19b541e6a67cecc3c4d72292df3a6",
          "message": "core: recategorize classes\n\nmove internal stuff into Core-Support category",
          "timestamp": "2022-06-18T21:41:22+02:00",
          "tree_id": "40db5ca4853a6a1f1bb4a46c3c9b77111023299f",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/d23e61f5e0c19b541e6a67cecc3c4d72292df3a6"
        },
        "date": 1655582338724,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8500.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 103.73202655560786",
            "extra": "{\"totalTime\":8500.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8565.0,8381.0,8556.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 26716.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 604.7994157845503",
            "extra": "{\"totalTime\":26717.333333333332,\"preparationTime\":1.0,\"singleTimesToRun\":[26588.0,26186.0,27375.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 135.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 2.886751345948129",
            "extra": "{\"totalTime\":135.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[132.0,137.0,137.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2745.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 78.50053078376817",
            "extra": "{\"totalTime\":2745.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2725.0,2679.0,2832.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 289.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 11.590225767142474",
            "extra": "{\"totalTime\":289.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[282.0,284.0,303.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 52015.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 73.15964279118191",
            "extra": "{\"totalTime\":52178.666666666664,\"preparationTime\":163.33333333333334,\"singleTimesToRun\":[51932.0,52069.0,52045.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2543,
            "unit": "Milliseconds",
            "range": "stdev: 12.0",
            "extra": "{\"totalTime\":2626.3333333333335,\"preparationTime\":83.33333333333333,\"singleTimesToRun\":[2543.0,2531.0,2555.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1394.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 34.01960219246153",
            "extra": "{\"totalTime\":1477.0,\"preparationTime\":82.33333333333333,\"singleTimesToRun\":[1356.0,1408.0,1420.0],\"postparationTime\":0.0}"
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
          "id": "5efbf9883d95d932d4f19929d705124fffea38a9",
          "message": "Update links to docs",
          "timestamp": "2022-07-02T15:59:19Z",
          "tree_id": "98f60e28af31a0a085fe08bcdece2afaa85610ca",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/5efbf9883d95d932d4f19929d705124fffea38a9"
        },
        "date": 1656778646595,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8173.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 126.26295313089005",
            "extra": "{\"totalTime\":8173.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[8035.0,8204.0,8282.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 28486.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 263.59881132761836",
            "extra": "{\"totalTime\":28487.666666666668,\"preparationTime\":1.0,\"singleTimesToRun\":[28729.0,28206.0,28525.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 133.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":133.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[135.0,132.0,134.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2742.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 17.387735140993303",
            "extra": "{\"totalTime\":2742.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2756.0,2723.0,2749.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 291.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 4.041451884327381",
            "extra": "{\"totalTime\":291.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[296.0,288.0,291.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 56009.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 315.0338606139558",
            "extra": "{\"totalTime\":56159.0,\"preparationTime\":149.66666666666666,\"singleTimesToRun\":[55697.0,56004.0,56327.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2630,
            "unit": "Milliseconds",
            "range": "stdev: 70.63285354564121",
            "extra": "{\"totalTime\":2709.0,\"preparationTime\":79.0,\"singleTimesToRun\":[2625.0,2562.0,2703.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1413,
            "unit": "Milliseconds",
            "range": "stdev: 27.055498516937366",
            "extra": "{\"totalTime\":1514.3333333333333,\"preparationTime\":101.33333333333333,\"singleTimesToRun\":[1385.0,1415.0,1439.0],\"postparationTime\":0.0}"
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
          "id": "8dde694dddb124ff000b8a3ca16b5248bd2a556f",
          "message": "range retracing simulator: add example for drawing error",
          "timestamp": "2022-07-02T23:37:12+02:00",
          "tree_id": "ada85c26d8f96ed735f471e7f4f2732f72fe3c9a",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/8dde694dddb124ff000b8a3ca16b5248bd2a556f"
        },
        "date": 1656798918966,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 10417,
            "unit": "Milliseconds",
            "range": "stdev: 380.6349957636581",
            "extra": "{\"totalTime\":10417.0,\"preparationTime\":0.0,\"singleTimesToRun\":[10618.0,9978.0,10655.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 36778,
            "unit": "Milliseconds",
            "range": "stdev: 339.5541193977773",
            "extra": "{\"totalTime\":36779.0,\"preparationTime\":1.0,\"singleTimesToRun\":[36386.0,36981.0,36967.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 175.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 10.263202878893768",
            "extra": "{\"totalTime\":175.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[164.0,184.0,178.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3582,
            "unit": "Milliseconds",
            "range": "stdev: 53.225933528685054",
            "extra": "{\"totalTime\":3582.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3606.0,3619.0,3521.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 370,
            "unit": "Milliseconds",
            "range": "stdev: 10.535653752852738",
            "extra": "{\"totalTime\":370.0,\"preparationTime\":0.0,\"singleTimesToRun\":[360.0,369.0,381.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 71909.66666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1066.0592541380304",
            "extra": "{\"totalTime\":72101.66666666667,\"preparationTime\":192.0,\"singleTimesToRun\":[70778.0,72056.0,72895.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3420,
            "unit": "Milliseconds",
            "range": "stdev: 33.45145736735546",
            "extra": "{\"totalTime\":3519.0,\"preparationTime\":99.0,\"singleTimesToRun\":[3433.0,3382.0,3445.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1836,
            "unit": "Milliseconds",
            "range": "stdev: 57.4543296888929",
            "extra": "{\"totalTime\":1956.0,\"preparationTime\":120.0,\"singleTimesToRun\":[1815.0,1792.0,1901.0],\"postparationTime\":0.0}"
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
          "id": "583bcadc13913b164e3b80fe4587e867e382f983",
          "message": "range retracing simulator: fix primitiveStringAtPut for Character argument",
          "timestamp": "2022-07-02T23:46:19+02:00",
          "tree_id": "adff823ca1d382938bcd66a84b6f73d66c913977",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/583bcadc13913b164e3b80fe4587e867e382f983"
        },
        "date": 1656799276292,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8034,
            "unit": "Milliseconds",
            "range": "stdev: 228.51476976335687",
            "extra": "{\"totalTime\":8034.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8297.0,7884.0,7921.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 28980.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 169.65356858413952",
            "extra": "{\"totalTime\":28981.333333333332,\"preparationTime\":1.0,\"singleTimesToRun\":[28902.0,29175.0,28864.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 137,
            "unit": "Milliseconds",
            "range": "stdev: 1.7320508075688772",
            "extra": "{\"totalTime\":137.0,\"preparationTime\":0.0,\"singleTimesToRun\":[138.0,135.0,138.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2736.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 23.115651263447745",
            "extra": "{\"totalTime\":2736.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2722.0,2724.0,2763.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 291.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 5.507570547286102",
            "extra": "{\"totalTime\":291.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[288.0,298.0,289.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 56694.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 288.46894691341276",
            "extra": "{\"totalTime\":56846.0,\"preparationTime\":151.33333333333334,\"singleTimesToRun\":[56509.0,56548.0,57027.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2631,
            "unit": "Milliseconds",
            "range": "stdev: 33.71943060017473",
            "extra": "{\"totalTime\":2712.0,\"preparationTime\":81.0,\"singleTimesToRun\":[2660.0,2594.0,2639.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1421.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 26.689573494781317",
            "extra": "{\"totalTime\":1525.0,\"preparationTime\":103.33333333333333,\"singleTimesToRun\":[1397.0,1418.0,1450.0],\"postparationTime\":0.0}"
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
          "id": "faff19125f5d5ad52e6469a2b29e66df43fd844c",
          "message": "simulators: fix context primitives for variable stackp",
          "timestamp": "2022-07-03T02:02:30+02:00",
          "tree_id": "005195a350a5bad2f2943e02ef90bba0c907aac1",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/faff19125f5d5ad52e6469a2b29e66df43fd844c"
        },
        "date": 1656807678495,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 10470,
            "unit": "Milliseconds",
            "range": "stdev: 151.75308893067054",
            "extra": "{\"totalTime\":10470.0,\"preparationTime\":0.0,\"singleTimesToRun\":[10413.0,10355.0,10642.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 37426.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 337.52086355266005",
            "extra": "{\"totalTime\":37427.333333333336,\"preparationTime\":1.0,\"singleTimesToRun\":[37664.0,37040.0,37575.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 177.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 6.110100926607787",
            "extra": "{\"totalTime\":177.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[171.0,179.0,183.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3572.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 83.06824503583384",
            "extra": "{\"totalTime\":3572.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[3498.0,3557.0,3662.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 387.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 11.372481406154654",
            "extra": "{\"totalTime\":387.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[375.0,391.0,397.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 72571.33333333333,
            "unit": "Milliseconds",
            "range": "stdev: 91.27065976168538",
            "extra": "{\"totalTime\":72764.33333333333,\"preparationTime\":193.0,\"singleTimesToRun\":[72627.0,72621.0,72466.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3429.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 71.59841711471933",
            "extra": "{\"totalTime\":3530.3333333333335,\"preparationTime\":100.66666666666667,\"singleTimesToRun\":[3512.0,3395.0,3382.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1849,
            "unit": "Milliseconds",
            "range": "stdev: 57.41950887982237",
            "extra": "{\"totalTime\":1979.0,\"preparationTime\":130.0,\"singleTimesToRun\":[1785.0,1866.0,1896.0],\"postparationTime\":0.0}"
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
          "id": "56fb02f8f298a53501d057fc2194886663e3f30f",
          "message": "cursor/trace: add context tree slices with compaction support\n\nAlso includes new printing selectors on Context and new enumerating extension SequenceableCollection>>#tdbSequentiallyGroupBy:gather: as well as rough tests for most of this.",
          "timestamp": "2022-07-03T20:41:46+02:00",
          "tree_id": "d3c7dcc775a4d03099d506893a883e428f2279ae",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/56fb02f8f298a53501d057fc2194886663e3f30f"
        },
        "date": 1656874875197,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 9625.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 143.7718099396865",
            "extra": "{\"totalTime\":9625.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[9721.0,9460.0,9695.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 38055.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 269.17714117906326",
            "extra": "{\"totalTime\":38056.333333333336,\"preparationTime\":1.0,\"singleTimesToRun\":[37761.0,38289.0,38116.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 186.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 31.533051443419385",
            "extra": "{\"totalTime\":186.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[221.0,159.0,180.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3458.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 146.37736619209042",
            "extra": "{\"totalTime\":3458.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[3393.0,3626.0,3356.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 389.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 41.54916766113773",
            "extra": "{\"totalTime\":389.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[430.0,347.0,392.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 72934,
            "unit": "Milliseconds",
            "range": "stdev: 703.7755323965163",
            "extra": "{\"totalTime\":73128.66666666667,\"preparationTime\":194.66666666666666,\"singleTimesToRun\":[72164.0,73544.0,73094.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3545.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 234.41274140569521",
            "extra": "{\"totalTime\":3690.0,\"preparationTime\":144.66666666666666,\"singleTimesToRun\":[3816.0,3412.0,3408.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1810,
            "unit": "Milliseconds",
            "range": "stdev: 10.14889156509222",
            "extra": "{\"totalTime\":1910.3333333333333,\"preparationTime\":100.33333333333333,\"singleTimesToRun\":[1799.0,1812.0,1819.0],\"postparationTime\":0.0}"
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
          "id": "10ddf6371c56dd3d98dda1de2c1db88c2bf3b797",
          "message": "extend and flag proxy hacks in the system",
          "timestamp": "2022-07-03T21:01:11+02:00",
          "tree_id": "19fc868352b3f492ac13127a37b4c68145c3b75c",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/10ddf6371c56dd3d98dda1de2c1db88c2bf3b797"
        },
        "date": 1656877233909,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8386.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 53.1068106115716",
            "extra": "{\"totalTime\":8386.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8347.0,8447.0,8366.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 28352.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 112.69575561365804",
            "extra": "{\"totalTime\":28353.666666666668,\"preparationTime\":1.0,\"singleTimesToRun\":[28469.0,28244.0,28345.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 136.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 4.163331998932265",
            "extra": "{\"totalTime\":136.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[132.0,138.0,140.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2668.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 24.664414311581236",
            "extra": "{\"totalTime\":2668.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2652.0,2657.0,2697.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 283.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 3.7859388972001824",
            "extra": "{\"totalTime\":283.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[285.0,279.0,286.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 54412.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 335.93799030971974",
            "extra": "{\"totalTime\":54557.0,\"preparationTime\":144.66666666666666,\"singleTimesToRun\":[54028.0,54559.0,54650.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2617,
            "unit": "Milliseconds",
            "range": "stdev: 27.2213151776324",
            "extra": "{\"totalTime\":2714.6666666666665,\"preparationTime\":97.66666666666667,\"singleTimesToRun\":[2642.0,2588.0,2621.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1338.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 20.00833159794523",
            "extra": "{\"totalTime\":1422.0,\"preparationTime\":83.66666666666667,\"singleTimesToRun\":[1318.0,1358.0,1339.0],\"postparationTime\":0.0}"
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
          "id": "7d51cf9e472891cbc56c8afdb0872ed5a3a574e9",
          "message": "memory simulator: fix primitiveClone\n\nIn the past, we accidentally would have re-executed primitive 148 to access the current value for each slot. The primitive would not fail but copy the requested instead. Harden test data for the range retracing simulator to avoid similar incidents in the future (this test, however, does not trigger the defect code path because it uses primitiveRetracingTimeIndex).",
          "timestamp": "2022-07-03T23:11:40+02:00",
          "tree_id": "48dcdaeb132406506196e5e2c9db12c0863bade6",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/7d51cf9e472891cbc56c8afdb0872ed5a3a574e9"
        },
        "date": 1656883820882,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 9450.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 298.503489650177",
            "extra": "{\"totalTime\":9450.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[9218.0,9787.0,9346.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 37725.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 340.67628818767724",
            "extra": "{\"totalTime\":37726.666666666664,\"preparationTime\":1.0,\"singleTimesToRun\":[38101.0,37640.0,37436.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 167.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 10.016652800877813",
            "extra": "{\"totalTime\":167.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[164.0,179.0,160.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3349.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 40.26578365477734",
            "extra": "{\"totalTime\":3349.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3307.0,3387.0,3355.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 358.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 16.502525059315417",
            "extra": "{\"totalTime\":358.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[375.0,342.0,358.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 73334.33333333333,
            "unit": "Milliseconds",
            "range": "stdev: 313.7902696600603",
            "extra": "{\"totalTime\":73509.33333333333,\"preparationTime\":175.0,\"singleTimesToRun\":[72972.0,73516.0,73515.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3413.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 43.558389930452364",
            "extra": "{\"totalTime\":3538.3333333333335,\"preparationTime\":125.0,\"singleTimesToRun\":[3462.0,3378.0,3400.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1798.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 91.65878754016623",
            "extra": "{\"totalTime\":1908.6666666666667,\"preparationTime\":110.33333333333333,\"singleTimesToRun\":[1701.0,1811.0,1883.0],\"postparationTime\":0.0}"
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
          "id": "0a6a8836928a7298e01df8f44e9d4d4b3b1ca3de",
          "message": "Improve Autocompletion support for proxy holders & history explorer\n\nWill only work completely once https://github.com/LeonMatthes/Autocompletion/pull/46 is merged.",
          "timestamp": "2022-07-03T23:18:58+02:00",
          "tree_id": "bf79d50f5c4291b58f8a0bdc29f18fce3fd45b93",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/0a6a8836928a7298e01df8f44e9d4d4b3b1ca3de"
        },
        "date": 1656884107339,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8650.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 131.5079211809438",
            "extra": "{\"totalTime\":8650.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8733.0,8720.0,8499.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 28693.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 70.77664398184852",
            "extra": "{\"totalTime\":28694.666666666668,\"preparationTime\":1.0,\"singleTimesToRun\":[28671.0,28637.0,28773.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 137.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":137.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[136.0,138.0,139.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2718.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 23.028967265887836",
            "extra": "{\"totalTime\":2718.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2713.0,2699.0,2744.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 289.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 7.505553499465135",
            "extra": "{\"totalTime\":289.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[285.0,298.0,285.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 55276,
            "unit": "Milliseconds",
            "range": "stdev: 478.57392323443617",
            "extra": "{\"totalTime\":55422.666666666664,\"preparationTime\":146.66666666666666,\"singleTimesToRun\":[54817.0,55239.0,55772.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2685.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 4.041451884327381",
            "extra": "{\"totalTime\":2786.0,\"preparationTime\":100.66666666666667,\"singleTimesToRun\":[2681.0,2686.0,2689.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1356.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 23.115651263447745",
            "extra": "{\"totalTime\":1441.3333333333333,\"preparationTime\":84.66666666666667,\"singleTimesToRun\":[1330.0,1369.0,1371.0],\"postparationTime\":0.0}"
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
          "id": "cb6a1133efbd0b31acc7f2b7369235354a7161b6",
          "message": "complements a828604",
          "timestamp": "2022-07-07T18:41:09+02:00",
          "tree_id": "be260d65e7ee6eef6af936da422e64d534d85e05",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/cb6a1133efbd0b31acc7f2b7369235354a7161b6"
        },
        "date": 1657213050580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7924.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 234.47885476804373",
            "extra": "{\"totalTime\":7924.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[7875.0,7719.0,8180.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 28754.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 110.02423975348948",
            "extra": "{\"totalTime\":28755.333333333332,\"preparationTime\":1.0,\"singleTimesToRun\":[28629.0,28799.0,28835.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 130.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":130.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[128.0,131.0,132.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2694,
            "unit": "Milliseconds",
            "range": "stdev: 24.24871130596428",
            "extra": "{\"totalTime\":2694.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2668.0,2716.0,2698.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 299.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 11.930353445448855",
            "extra": "{\"totalTime\":299.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[294.0,313.0,291.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 56832,
            "unit": "Milliseconds",
            "range": "stdev: 110.58480908334562",
            "extra": "{\"totalTime\":57002.333333333336,\"preparationTime\":170.33333333333334,\"singleTimesToRun\":[56705.0,56884.0,56907.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2661.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 39.80368492154129",
            "extra": "{\"totalTime\":2742.0,\"preparationTime\":80.66666666666667,\"singleTimesToRun\":[2694.0,2617.0,2673.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1427.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 30.105370506494907",
            "extra": "{\"totalTime\":1508.6666666666667,\"preparationTime\":81.33333333333333,\"singleTimesToRun\":[1403.0,1461.0,1418.0],\"postparationTime\":0.0}"
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
          "id": "f881a345b1a64b293c0d3fd5d6a7e03410715dcb",
          "message": "Merge pull request #85 from hpi-swa-lab/retracing-fixes\n\nFixes to retracing infrastructure:\r\n\r\n* range retracing: fix variable assignment to vector (f5e013e)\r\n\r\nIf an assignment side effect is performed on a vector, fork like we already do it for write primitives. Add a test for the situation.\r\n\r\n* range retracing tests: refactor assertions and improve failure messages (a828604)\r\n\r\nUse of transcript is a workaround for [Squeak] Improve expressiveness of failing #assert:equals: etc. hpi-swa/smalltalkCI#478.\r\n\r\n* retracing: improve printString of retracing simulator (80f8d18)\r\n\r\n* range retracing: simplify #runSimulated:... (a84029c)",
          "timestamp": "2022-07-07T19:00:36+02:00",
          "tree_id": "be260d65e7ee6eef6af936da422e64d534d85e05",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/f881a345b1a64b293c0d3fd5d6a7e03410715dcb"
        },
        "date": 1657214273694,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8797.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 137.15076862100824",
            "extra": "{\"totalTime\":8797.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8645.0,8911.0,8836.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 32776,
            "unit": "Milliseconds",
            "range": "stdev: 230.36275740666068",
            "extra": "{\"totalTime\":32777.0,\"preparationTime\":1.0,\"singleTimesToRun\":[32994.0,32799.0,32535.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 144.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 4.725815626252609",
            "extra": "{\"totalTime\":144.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[141.0,150.0,143.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3086.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 86.03100216394863",
            "extra": "{\"totalTime\":3086.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3036.0,3038.0,3186.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 337.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 6.110100926607787",
            "extra": "{\"totalTime\":337.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[332.0,344.0,336.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 64590,
            "unit": "Milliseconds",
            "range": "stdev: 83.46855695410099",
            "extra": "{\"totalTime\":64781.333333333336,\"preparationTime\":191.33333333333334,\"singleTimesToRun\":[64608.0,64499.0,64663.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3053,
            "unit": "Milliseconds",
            "range": "stdev: 169.413694841946",
            "extra": "{\"totalTime\":3142.3333333333335,\"preparationTime\":89.33333333333333,\"singleTimesToRun\":[2969.0,2942.0,3248.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1617.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 47.47982027486344",
            "extra": "{\"totalTime\":1710.0,\"preparationTime\":92.66666666666667,\"singleTimesToRun\":[1564.0,1655.0,1633.0],\"postparationTime\":0.0}"
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
          "id": "ef9b7239edc186c6f671f8fe01eba98b3ed2ec0f",
          "message": "history explorer/proxy inspector: revise menu entries\n\n* history explorer: always allow to debug snapshot of selected slice\n* proxy inspector: add item to explore history of selection; swap #exploreValueHistory and #exploreFieldHistory; rename #addSelectionAsField -> #addCodeSelectionAsField",
          "timestamp": "2022-07-07T19:19:57+02:00",
          "tree_id": "1650f8c611277d7bdbfd3b7bb64c9d12d5451bc5",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/ef9b7239edc186c6f671f8fe01eba98b3ed2ec0f"
        },
        "date": 1657215466335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8235.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 10.692676621563628",
            "extra": "{\"totalTime\":8235.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8223.0,8242.0,8241.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 26998.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 131.8382847784866",
            "extra": "{\"totalTime\":26999.666666666668,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[26881.0,27141.0,26973.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 131.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":131.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[132.0,133.0,130.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2950,
            "unit": "Milliseconds",
            "range": "stdev: 229.79773715160906",
            "extra": "{\"totalTime\":2950.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3051.0,3112.0,2687.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 284.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":285.0,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[286.0,285.0,283.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 53333.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 113.56202416888021",
            "extra": "{\"totalTime\":53498.666666666664,\"preparationTime\":165.0,\"singleTimesToRun\":[53338.0,53218.0,53445.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2542.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 47.077949544700154",
            "extra": "{\"totalTime\":2625.6666666666665,\"preparationTime\":83.0,\"singleTimesToRun\":[2577.0,2489.0,2562.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1361.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 15.307950004273378",
            "extra": "{\"totalTime\":1443.6666666666667,\"preparationTime\":82.33333333333333,\"singleTimesToRun\":[1367.0,1344.0,1373.0],\"postparationTime\":0.0}"
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
          "id": "4aa1d8e4a979936903fe6d5e8932584d3f90eded",
          "message": "range retracing simulator: update minor comments",
          "timestamp": "2022-07-22T21:33:24+02:00",
          "tree_id": "0bf46679a5c4b3219752f47eadc740c822b6c4c4",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/4aa1d8e4a979936903fe6d5e8932584d3f90eded"
        },
        "date": 1658519333806,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8504.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 155.32009957933113",
            "extra": "{\"totalTime\":8504.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8362.0,8481.0,8670.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 27528.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 443.1369239110338",
            "extra": "{\"totalTime\":27529.666666666668,\"preparationTime\":1.0,\"singleTimesToRun\":[27029.0,27874.0,27683.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 136.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":136.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[135.0,137.0,137.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2823.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 133.23788250093642",
            "extra": "{\"totalTime\":2823.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2724.0,2975.0,2772.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 295.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 12.741009902410928",
            "extra": "{\"totalTime\":295.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[287.0,310.0,289.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 52466,
            "unit": "Milliseconds",
            "range": "stdev: 183.0109286354233",
            "extra": "{\"totalTime\":52614.0,\"preparationTime\":148.0,\"singleTimesToRun\":[52623.0,52265.0,52510.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2592.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 31.021497922139954",
            "extra": "{\"totalTime\":2671.0,\"preparationTime\":78.33333333333333,\"singleTimesToRun\":[2623.0,2561.0,2594.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1356.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 15.821925715074425",
            "extra": "{\"totalTime\":1450.3333333333333,\"preparationTime\":93.66666666666667,\"singleTimesToRun\":[1343.0,1374.0,1353.0],\"postparationTime\":0.0}"
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
          "id": "aa930a56d66957f48382def22c7a9a2338fca14a",
          "message": "ci: make tests runnable by manual trigger",
          "timestamp": "2022-07-23T20:24:50+02:00",
          "tree_id": "23eac0daced325792c66b0e199c7575c87ef8c5e",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/aa930a56d66957f48382def22c7a9a2338fca14a"
        },
        "date": 1658601643847,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8168.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 175.18656721716232",
            "extra": "{\"totalTime\":8168.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7998.0,8159.0,8348.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 31075.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 393.0271407082892",
            "extra": "{\"totalTime\":31076.333333333332,\"preparationTime\":1.0,\"singleTimesToRun\":[31189.0,30638.0,31399.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 141.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 8.504900548115382",
            "extra": "{\"totalTime\":141.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[138.0,151.0,135.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2937.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 57.95112883571237",
            "extra": "{\"totalTime\":2937.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2884.0,2999.0,2929.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 324.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 8.020806277010644",
            "extra": "{\"totalTime\":324.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[316.0,332.0,325.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 59923,
            "unit": "Milliseconds",
            "range": "stdev: 2085.5160032951076",
            "extra": "{\"totalTime\":60083.0,\"preparationTime\":160.0,\"singleTimesToRun\":[58742.0,58696.0,62331.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2851.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 82.03251387915242",
            "extra": "{\"totalTime\":2933.0,\"preparationTime\":81.66666666666667,\"singleTimesToRun\":[2912.0,2884.0,2758.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1528.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 61.3297100379036",
            "extra": "{\"totalTime\":1633.3333333333333,\"preparationTime\":105.0,\"singleTimesToRun\":[1461.0,1543.0,1581.0],\"postparationTime\":0.0}"
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
          "id": "70231e441add5b331bad43f780769635a9160a84",
          "message": "Try to fix TestCoverage issue",
          "timestamp": "2022-07-23T21:56:48+02:00",
          "tree_id": "397093470bf6d580c9970e6e8778ae429c4e5426",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/70231e441add5b331bad43f780769635a9160a84"
        },
        "date": 1658607146883,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8001.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 330.29734079058727",
            "extra": "{\"totalTime\":8001.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[8059.0,7646.0,8299.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 28877.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 241.52501595762982",
            "extra": "{\"totalTime\":28878.666666666668,\"preparationTime\":1.0,\"singleTimesToRun\":[29131.0,28650.0,28852.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 134,
            "unit": "Milliseconds",
            "range": "stdev: 2.6457513110645907",
            "extra": "{\"totalTime\":134.0,\"preparationTime\":0.0,\"singleTimesToRun\":[131.0,136.0,135.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2813.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 111.55417219151121",
            "extra": "{\"totalTime\":2813.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2726.0,2939.0,2775.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 294.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 3.7859388972001824",
            "extra": "{\"totalTime\":294.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[297.0,290.0,296.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 55317.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 252.19899550421158",
            "extra": "{\"totalTime\":55461.0,\"preparationTime\":143.33333333333334,\"singleTimesToRun\":[55121.0,55230.0,55602.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2610.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 27.319101986217145",
            "extra": "{\"totalTime\":2687.3333333333335,\"preparationTime\":77.0,\"singleTimesToRun\":[2633.0,2580.0,2618.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1474,
            "unit": "Milliseconds",
            "range": "stdev: 25.709920264364882",
            "extra": "{\"totalTime\":1567.6666666666667,\"preparationTime\":93.66666666666667,\"singleTimesToRun\":[1445.0,1494.0,1483.0],\"postparationTime\":0.0}"
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
          "id": "22190cea4ca798ff1313d79054ad314adde84203",
          "message": "Merge branch 'main' into retracing-fixes",
          "timestamp": "2022-07-23T23:59:52+02:00",
          "tree_id": "a936edfe426d2204c500b103b967366dca90c450",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/22190cea4ca798ff1313d79054ad314adde84203"
        },
        "date": 1658614593678,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8404.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 115.59555931493794",
            "extra": "{\"totalTime\":8404.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8281.0,8510.0,8423.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 27530,
            "unit": "Milliseconds",
            "range": "stdev: 247.15784430197638",
            "extra": "{\"totalTime\":27531.0,\"preparationTime\":1.0,\"singleTimesToRun\":[27427.0,27812.0,27351.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 137.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":137.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[139.0,138.0,136.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2739.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 37.872593432894625",
            "extra": "{\"totalTime\":2739.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2751.0,2770.0,2697.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 284,
            "unit": "Milliseconds",
            "range": "stdev: 4.58257569495584",
            "extra": "{\"totalTime\":284.0,\"preparationTime\":0.0,\"singleTimesToRun\":[285.0,288.0,279.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 52614.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 507.6655723341237",
            "extra": "{\"totalTime\":52758.666666666664,\"preparationTime\":144.33333333333334,\"singleTimesToRun\":[52527.0,52156.0,53160.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2541,
            "unit": "Milliseconds",
            "range": "stdev: 53.3572862878164",
            "extra": "{\"totalTime\":2620.3333333333335,\"preparationTime\":79.33333333333333,\"singleTimesToRun\":[2579.0,2480.0,2564.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1375.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 23.713568549109883",
            "extra": "{\"totalTime\":1468.3333333333333,\"preparationTime\":92.66666666666667,\"singleTimesToRun\":[1354.0,1401.0,1372.0],\"postparationTime\":0.0}"
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
          "id": "59871c77106b8242bc05d66ad3b2421132b55d9b",
          "message": "Merge pull request #88 from hpi-swa-lab/retracing-fixes\n\nFurther retracing fixes",
          "timestamp": "2022-07-24T00:16:40+02:00",
          "tree_id": "a936edfe426d2204c500b103b967366dca90c450",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/59871c77106b8242bc05d66ad3b2421132b55d9b"
        },
        "date": 1658615549665,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8809.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 168.6693016921969",
            "extra": "{\"totalTime\":8809.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8633.0,8969.0,8827.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 27778.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 362.13855543608355",
            "extra": "{\"totalTime\":27779.666666666668,\"preparationTime\":1.0,\"singleTimesToRun\":[27363.0,27947.0,28026.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 138,
            "unit": "Milliseconds",
            "range": "stdev: 1.7320508075688772",
            "extra": "{\"totalTime\":138.0,\"preparationTime\":0.0,\"singleTimesToRun\":[137.0,137.0,140.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2843,
            "unit": "Milliseconds",
            "range": "stdev: 158.54652314068574",
            "extra": "{\"totalTime\":2843.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2756.0,3026.0,2747.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 287.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":287.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[286.0,288.0,289.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 53493.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 319.41248149271394",
            "extra": "{\"totalTime\":53641.333333333336,\"preparationTime\":148.0,\"singleTimesToRun\":[53134.0,53601.0,53745.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2639,
            "unit": "Milliseconds",
            "range": "stdev: 43.30127018922193",
            "extra": "{\"totalTime\":2717.0,\"preparationTime\":78.0,\"singleTimesToRun\":[2664.0,2589.0,2664.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1375.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 13.868429375143148",
            "extra": "{\"totalTime\":1468.6666666666667,\"preparationTime\":93.33333333333333,\"singleTimesToRun\":[1360.0,1379.0,1387.0],\"postparationTime\":0.0}"
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
          "id": "e705becaf8f53db056d10d977ee13e58582b3e7d",
          "message": "Fix TDBRangeRetracingSimulatorTest>>#testBitBlt2 which produces one more screenshot now for what ever reason",
          "timestamp": "2022-07-24T16:13:10+02:00",
          "tree_id": "ecd1ece5fa432b7fca50c32a226fa01f5349297c",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/e705becaf8f53db056d10d977ee13e58582b3e7d"
        },
        "date": 1658672925670,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8279.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 173.29839391446572",
            "extra": "{\"totalTime\":8279.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8083.0,8346.0,8410.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 27322.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 256.078763924956",
            "extra": "{\"totalTime\":27323.333333333332,\"preparationTime\":1.0,\"singleTimesToRun\":[27070.0,27582.0,27315.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 134.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 4.163331998932265",
            "extra": "{\"totalTime\":134.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[133.0,131.0,139.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2703.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 35.809682117177935",
            "extra": "{\"totalTime\":2703.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2723.0,2725.0,2662.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 282.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 3.0550504633038935",
            "extra": "{\"totalTime\":282.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[283.0,285.0,279.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 52194.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 227.58368424237565",
            "extra": "{\"totalTime\":52338.0,\"preparationTime\":143.66666666666666,\"singleTimesToRun\":[52070.0,52056.0,52457.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2509.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 29.484459183327974",
            "extra": "{\"totalTime\":2584.6666666666665,\"preparationTime\":75.33333333333333,\"singleTimesToRun\":[2520.0,2476.0,2532.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1354.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 17.616280348965084",
            "extra": "{\"totalTime\":1446.0,\"preparationTime\":91.66666666666667,\"singleTimesToRun\":[1338.0,1373.0,1352.0],\"postparationTime\":0.0}"
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
          "id": "27bae75cde0390820d948b7d762d66477fa6e63e",
          "message": "fix #testDebugSnapshot for CI",
          "timestamp": "2022-07-24T17:36:46+02:00",
          "tree_id": "3e0af43eb56a2f97341ea46fe2faaa01a7dbbcb3",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/27bae75cde0390820d948b7d762d66477fa6e63e"
        },
        "date": 1658678034763,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8228,
            "unit": "Milliseconds",
            "range": "stdev: 123.01219451745425",
            "extra": "{\"totalTime\":8228.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8296.0,8086.0,8302.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 28736.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 192.47424070075803",
            "extra": "{\"totalTime\":28737.666666666668,\"preparationTime\":1.0,\"singleTimesToRun\":[28534.0,28759.0,28917.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 131.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 2.5166114784235836",
            "extra": "{\"totalTime\":131.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[129.0,131.0,134.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2732,
            "unit": "Milliseconds",
            "range": "stdev: 5.5677643628300215",
            "extra": "{\"totalTime\":2732.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2737.0,2733.0,2726.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 291.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 4.932882862316247",
            "extra": "{\"totalTime\":291.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[297.0,288.0,289.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 55353.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 120.79873067765793",
            "extra": "{\"totalTime\":55499.0,\"preparationTime\":145.33333333333334,\"singleTimesToRun\":[55300.0,55492.0,55269.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2620.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 28.307831660749528",
            "extra": "{\"totalTime\":2697.3333333333335,\"preparationTime\":77.0,\"singleTimesToRun\":[2653.0,2605.0,2603.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1413.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 16.258331197676267",
            "extra": "{\"totalTime\":1506.6666666666667,\"preparationTime\":93.0,\"singleTimesToRun\":[1401.0,1408.0,1432.0],\"postparationTime\":0.0}"
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
          "id": "aa607a6123a7d50a9fa7ce34aa895704c0d887c2",
          "message": "Merge remote-tracking branch 'origin/main' into shaping-re22",
          "timestamp": "2022-07-24T17:55:14+02:00",
          "tree_id": "ededb98df86727e8d8ce7bc645325b7b2f0bf633",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/aa607a6123a7d50a9fa7ce34aa895704c0d887c2"
        },
        "date": 1658679290284,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8970.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 220.5273981466551",
            "extra": "{\"totalTime\":8970.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8780.0,8919.0,9212.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 30249,
            "unit": "Milliseconds",
            "range": "stdev: 313.72758884101984",
            "extra": "{\"totalTime\":30250.0,\"preparationTime\":1.0,\"singleTimesToRun\":[29889.0,30394.0,30464.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 136.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":136.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[137.0,138.0,135.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2935,
            "unit": "Milliseconds",
            "range": "stdev: 218.55662881733878",
            "extra": "{\"totalTime\":2935.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2708.0,3144.0,2953.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 300.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 6.429100507328637",
            "extra": "{\"totalTime\":300.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[293.0,303.0,305.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 57281,
            "unit": "Milliseconds",
            "range": "stdev: 1275.1827320035352",
            "extra": "{\"totalTime\":57430.333333333336,\"preparationTime\":149.33333333333334,\"singleTimesToRun\":[55851.0,57692.0,58300.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2819,
            "unit": "Milliseconds",
            "range": "stdev: 49.122296363260546",
            "extra": "{\"totalTime\":2899.0,\"preparationTime\":80.0,\"singleTimesToRun\":[2866.0,2768.0,2823.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1457.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 35.38832199092426",
            "extra": "{\"totalTime\":1553.0,\"preparationTime\":95.66666666666667,\"singleTimesToRun\":[1429.0,1446.0,1497.0],\"postparationTime\":0.0}"
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
            "email": "christoph.thiede@outlook.de",
            "name": "Christoph Thiede",
            "username": "LinqLover"
          },
          "distinct": true,
          "id": "fa6b43be71169417afe8cb12c785ee532b4a32bb",
          "message": "ci: make tests runnable by manual trigger",
          "timestamp": "2022-07-24T16:05:33Z",
          "tree_id": "87855e8576a297a03cffbcd4a5b7ae41e58fbeff",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/fa6b43be71169417afe8cb12c785ee532b4a32bb"
        },
        "date": 1658679818188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7977,
            "unit": "Milliseconds",
            "range": "stdev: 243.6616506551657",
            "extra": "{\"totalTime\":7977.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7788.0,8252.0,7891.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 28817,
            "unit": "Milliseconds",
            "range": "stdev: 318.96238022688505",
            "extra": "{\"totalTime\":28818.0,\"preparationTime\":1.0,\"singleTimesToRun\":[28988.0,29014.0,28449.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 134,
            "unit": "Milliseconds",
            "range": "stdev: 2.6457513110645907",
            "extra": "{\"totalTime\":134.0,\"preparationTime\":0.0,\"singleTimesToRun\":[135.0,136.0,131.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2680.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 21.385353243127255",
            "extra": "{\"totalTime\":2680.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2676.0,2704.0,2662.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 287.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 4.041451884327381",
            "extra": "{\"totalTime\":287.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[292.0,285.0,285.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 55240.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 190.01666593573665",
            "extra": "{\"totalTime\":55384.0,\"preparationTime\":143.33333333333334,\"singleTimesToRun\":[55443.0,55213.0,55066.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2611.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 32.86842456421259",
            "extra": "{\"totalTime\":2686.0,\"preparationTime\":74.66666666666667,\"singleTimesToRun\":[2641.0,2576.0,2617.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1416.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 6.027713773341709",
            "extra": "{\"totalTime\":1512.0,\"preparationTime\":95.33333333333333,\"singleTimesToRun\":[1411.0,1416.0,1423.0],\"postparationTime\":0.0}"
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
          "id": "129da33a8b952d07667f10401c8ced9cb29c9640",
          "message": "add TDBMemorySlice>>spaceUsed",
          "timestamp": "2022-07-24T20:17:28+02:00",
          "tree_id": "17381a8d517bc3a22c53f12d834ea579cf05b344",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/129da33a8b952d07667f10401c8ced9cb29c9640"
        },
        "date": 1658687600355,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7923.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 67.27803009403094",
            "extra": "{\"totalTime\":7923.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7847.0,7974.0,7949.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 29025,
            "unit": "Milliseconds",
            "range": "stdev: 195.70130301048076",
            "extra": "{\"totalTime\":29026.0,\"preparationTime\":1.0,\"singleTimesToRun\":[29000.0,28843.0,29232.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 131.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 4.509249752822894",
            "extra": "{\"totalTime\":131.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[136.0,127.0,131.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2688.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 14.977761292440647",
            "extra": "{\"totalTime\":2688.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2693.0,2672.0,2701.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 287.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":287.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[289.0,288.0,285.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 55490,
            "unit": "Milliseconds",
            "range": "stdev: 310.68150894444943",
            "extra": "{\"totalTime\":55634.333333333336,\"preparationTime\":144.33333333333334,\"singleTimesToRun\":[55291.0,55331.0,55848.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2639.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 65.49300217071541",
            "extra": "{\"totalTime\":2715.6666666666665,\"preparationTime\":76.33333333333333,\"singleTimesToRun\":[2660.0,2566.0,2692.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1441.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 29.905406423142512",
            "extra": "{\"totalTime\":1535.3333333333333,\"preparationTime\":94.0,\"singleTimesToRun\":[1409.0,1447.0,1468.0],\"postparationTime\":0.0}"
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
          "id": "decef330042e0d5a33051571be52d1fdefe8870f",
          "message": "Merge branch 'main' into range-retracing-improvements",
          "timestamp": "2022-07-24T20:59:34+02:00",
          "tree_id": "0484ac5fa77cb263d51f6baaac5f837abe81a97a",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/decef330042e0d5a33051571be52d1fdefe8870f"
        },
        "date": 1658690190147,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8183.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 140.46114527987208",
            "extra": "{\"totalTime\":8183.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[8056.0,8334.0,8160.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 28814.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 198.6210797809068",
            "extra": "{\"totalTime\":28815.333333333332,\"preparationTime\":1.0,\"singleTimesToRun\":[28964.0,28890.0,28589.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 134.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 3.0550504633038935",
            "extra": "{\"totalTime\":134.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[131.0,135.0,137.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2728.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 31.46956201368766",
            "extra": "{\"totalTime\":2728.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2710.0,2765.0,2711.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 293.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 4.932882862316247",
            "extra": "{\"totalTime\":293.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[296.0,297.0,288.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 55696,
            "unit": "Milliseconds",
            "range": "stdev: 69.20260110718382",
            "extra": "{\"totalTime\":55842.0,\"preparationTime\":146.0,\"singleTimesToRun\":[55619.0,55753.0,55716.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2660,
            "unit": "Milliseconds",
            "range": "stdev: 39.96248240537617",
            "extra": "{\"totalTime\":2738.6666666666665,\"preparationTime\":78.66666666666667,\"singleTimesToRun\":[2696.0,2617.0,2667.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1435.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 34.77547028198661",
            "extra": "{\"totalTime\":1532.6666666666667,\"preparationTime\":97.33333333333333,\"singleTimesToRun\":[1396.0,1448.0,1462.0],\"postparationTime\":0.0}"
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
          "id": "ab108dfdd1a2f3922f8b6182efb3dfdcc7b0e901",
          "message": "range retracing: stabilize #testSideEffects",
          "timestamp": "2022-07-24T21:17:59+02:00",
          "tree_id": "b670541a6b18ce6efa51ad68406b5cbd48ef4831",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/ab108dfdd1a2f3922f8b6182efb3dfdcc7b0e901"
        },
        "date": 1658691263600,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7571.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 123.5570043879882",
            "extra": "{\"totalTime\":7571.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7499.0,7501.0,7714.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 28089,
            "unit": "Milliseconds",
            "range": "stdev: 147.2175261305528",
            "extra": "{\"totalTime\":28090.0,\"preparationTime\":1.0,\"singleTimesToRun\":[28033.0,28256.0,27978.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 123.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 3.2145502536643185",
            "extra": "{\"totalTime\":123.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[121.0,127.0,122.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2628.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 100.758787871497",
            "extra": "{\"totalTime\":2628.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2610.0,2538.0,2737.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 277,
            "unit": "Milliseconds",
            "range": "stdev: 6.244997998398398",
            "extra": "{\"totalTime\":277.0,\"preparationTime\":0.0,\"singleTimesToRun\":[279.0,270.0,282.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 53832.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 234.56413479757163",
            "extra": "{\"totalTime\":53968.333333333336,\"preparationTime\":135.66666666666666,\"singleTimesToRun\":[53595.0,53839.0,54064.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2502.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 59.01129835322499",
            "extra": "{\"totalTime\":2575.6666666666665,\"preparationTime\":73.33333333333333,\"singleTimesToRun\":[2444.0,2501.0,2562.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1360,
            "unit": "Milliseconds",
            "range": "stdev: 15.874507866387544",
            "extra": "{\"totalTime\":1449.0,\"preparationTime\":89.0,\"singleTimesToRun\":[1348.0,1378.0,1354.0],\"postparationTime\":0.0}"
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
          "id": "77e6739b5a593bb695407b7cde48e3196527c851",
          "message": "range retracing: add missing lastPrimitive update",
          "timestamp": "2022-07-24T22:07:12+02:00",
          "tree_id": "6b42f197a47dec48406574ccfba417addee4e824",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/77e6739b5a593bb695407b7cde48e3196527c851"
        },
        "date": 1658694289417,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7846,
            "unit": "Milliseconds",
            "range": "stdev: 443.0033859915746",
            "extra": "{\"totalTime\":7846.0,\"preparationTime\":0.0,\"singleTimesToRun\":[7540.0,7644.0,8354.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 29544.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 844.3851806689489",
            "extra": "{\"totalTime\":29545.666666666668,\"preparationTime\":1.0,\"singleTimesToRun\":[28969.0,30514.0,29151.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 139,
            "unit": "Milliseconds",
            "range": "stdev: 22.538855339169288",
            "extra": "{\"totalTime\":139.0,\"preparationTime\":0.0,\"singleTimesToRun\":[125.0,165.0,127.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2891.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 206.87274671481822",
            "extra": "{\"totalTime\":2891.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3091.0,2678.0,2906.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 285.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 30.171730698343",
            "extra": "{\"totalTime\":285.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[320.0,265.0,271.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 60246.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 3155.5111049294906",
            "extra": "{\"totalTime\":60411.0,\"preparationTime\":164.33333333333334,\"singleTimesToRun\":[57096.0,60237.0,63407.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2734.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 263.9286519749861",
            "extra": "{\"totalTime\":2813.0,\"preparationTime\":78.66666666666667,\"singleTimesToRun\":[2546.0,3036.0,2621.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1442,
            "unit": "Milliseconds",
            "range": "stdev: 56.10704055642215",
            "extra": "{\"totalTime\":1542.0,\"preparationTime\":100.0,\"singleTimesToRun\":[1446.0,1384.0,1496.0],\"postparationTime\":0.0}"
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
          "id": "bf6c6f2240e41be27198543fb6fd71bb94012dad",
          "message": "Merge pull request #92 from hpi-swa-lab/range-retracing-improvements\n\nRange retracing improvements\r\n\r\nSeveral improvements, fixes, and clean-ups to the range retracing simulator and the memory slice.",
          "timestamp": "2022-07-24T22:24:57+02:00",
          "tree_id": "6b42f197a47dec48406574ccfba417addee4e824",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/bf6c6f2240e41be27198543fb6fd71bb94012dad"
        },
        "date": 1658695338460,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8694.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 101.19947298940511",
            "extra": "{\"totalTime\":8694.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8597.0,8799.0,8687.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 32539.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 460.0003623186979",
            "extra": "{\"totalTime\":32540.333333333332,\"preparationTime\":1.0,\"singleTimesToRun\":[32540.0,32999.0,32079.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 140,
            "unit": "Milliseconds",
            "range": "stdev: 5.196152422706632",
            "extra": "{\"totalTime\":140.0,\"preparationTime\":0.0,\"singleTimesToRun\":[143.0,143.0,134.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2989.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 55.94044452212847",
            "extra": "{\"totalTime\":2989.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2969.0,2947.0,3053.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 319.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 9.073771725877467",
            "extra": "{\"totalTime\":319.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[329.0,318.0,311.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 61911.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 1062.0547694602824",
            "extra": "{\"totalTime\":62067.333333333336,\"preparationTime\":155.66666666666666,\"singleTimesToRun\":[60818.0,61978.0,62939.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3016,
            "unit": "Milliseconds",
            "range": "stdev: 66.56575696257048",
            "extra": "{\"totalTime\":3102.6666666666665,\"preparationTime\":86.66666666666667,\"singleTimesToRun\":[2997.0,2961.0,3090.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1523.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 37.58102358017053",
            "extra": "{\"totalTime\":1624.0,\"preparationTime\":100.33333333333333,\"singleTimesToRun\":[1500.0,1504.0,1567.0],\"postparationTime\":0.0}"
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
          "id": "e49fcbd9a60276611f3e93c611fb765a9e2b9aff",
          "message": "trace it: Check for unsupported SimulationContext\n\nUnless we have implemented https://github.com/hpi-swa-lab/squeak-tracedebugger/issues/68, display a warning to the user.",
          "timestamp": "2022-07-24T22:36:57+02:00",
          "tree_id": "deb92be72154459df2bbd38c3928a1d111f37fbf",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/e49fcbd9a60276611f3e93c611fb765a9e2b9aff"
        },
        "date": 1658696010514,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8042.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 122.40234202552391",
            "extra": "{\"totalTime\":8042.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[8021.0,7932.0,8174.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 29008.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 46.436336347017445",
            "extra": "{\"totalTime\":29009.666666666668,\"preparationTime\":1.0,\"singleTimesToRun\":[28959.0,29051.0,29016.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 136,
            "unit": "Milliseconds",
            "range": "stdev: 3.4641016151377544",
            "extra": "{\"totalTime\":136.0,\"preparationTime\":0.0,\"singleTimesToRun\":[138.0,132.0,138.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2720.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 8.736894948054106",
            "extra": "{\"totalTime\":2720.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2723.0,2711.0,2728.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 290.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":290.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[290.0,293.0,289.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 55053,
            "unit": "Milliseconds",
            "range": "stdev: 333.3571658146859",
            "extra": "{\"totalTime\":55197.333333333336,\"preparationTime\":144.33333333333334,\"singleTimesToRun\":[54815.0,55434.0,54910.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2626.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 47.08856903042747",
            "extra": "{\"totalTime\":2704.6666666666665,\"preparationTime\":78.33333333333333,\"singleTimesToRun\":[2623.0,2581.0,2675.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1427.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 31.89566323708183",
            "extra": "{\"totalTime\":1521.6666666666667,\"preparationTime\":94.33333333333333,\"singleTimesToRun\":[1412.0,1406.0,1464.0],\"postparationTime\":0.0}"
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
          "id": "4ace0e11519a4bce065087e504249dd9421dcab6",
          "message": "history explorer: add class-side examples",
          "timestamp": "2022-07-25T14:41:45+02:00",
          "tree_id": "9cd399ddb09c08cc07b240384209d02bf26ce763",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/4ace0e11519a4bce065087e504249dd9421dcab6"
        },
        "date": 1658754063172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 28263.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 33296.54578681298",
            "extra": "{\"totalTime\":28263.666666666668,\"preparationTime\":0.0,\"singleTimesToRun\":[8931.0,66711.0,9149.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 33980.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 151.68827684871806",
            "extra": "{\"totalTime\":33981.666666666664,\"preparationTime\":1.0,\"singleTimesToRun\":[33964.0,33838.0,34140.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 160,
            "unit": "Milliseconds",
            "range": "stdev: 10.583005244258363",
            "extra": "{\"totalTime\":160.0,\"preparationTime\":0.0,\"singleTimesToRun\":[156.0,172.0,152.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3187.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 43.98105652816146",
            "extra": "{\"totalTime\":3187.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3236.0,3177.0,3150.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 341,
            "unit": "Milliseconds",
            "range": "stdev: 13.114877048604",
            "extra": "{\"totalTime\":341.0,\"preparationTime\":0.0,\"singleTimesToRun\":[355.0,339.0,329.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 64428.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 303.21664422213587",
            "extra": "{\"totalTime\":64595.0,\"preparationTime\":166.33333333333334,\"singleTimesToRun\":[64619.0,64079.0,64588.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3045,
            "unit": "Milliseconds",
            "range": "stdev: 45.50824101193101",
            "extra": "{\"totalTime\":3132.0,\"preparationTime\":87.0,\"singleTimesToRun\":[3034.0,3006.0,3095.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1634,
            "unit": "Milliseconds",
            "range": "stdev: 17.578395831246947",
            "extra": "{\"totalTime\":1743.0,\"preparationTime\":109.0,\"singleTimesToRun\":[1621.0,1654.0,1627.0],\"postparationTime\":0.0}"
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
          "id": "c1f872a1f7593187fb16eb746d30a5fe65e6e007",
          "message": "history explorer: add animated GIF export",
          "timestamp": "2022-07-29T16:23:04+02:00",
          "tree_id": "624c42ae6addbab5ced110a6559939dacde09c8d",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/c1f872a1f7593187fb16eb746d30a5fe65e6e007"
        },
        "date": 1659105637682,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8410.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 126.342128101965",
            "extra": "{\"totalTime\":8410.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8444.0,8271.0,8517.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 27201,
            "unit": "Milliseconds",
            "range": "stdev: 335.79160203912187",
            "extra": "{\"totalTime\":27202.0,\"preparationTime\":1.0,\"singleTimesToRun\":[27095.0,27577.0,26931.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 135,
            "unit": "Milliseconds",
            "range": "stdev: 2.6457513110645907",
            "extra": "{\"totalTime\":135.0,\"preparationTime\":0.0,\"singleTimesToRun\":[136.0,137.0,132.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2693.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 37.898988552906445",
            "extra": "{\"totalTime\":2693.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2650.0,2713.0,2718.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 285.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2.886751345948129",
            "extra": "{\"totalTime\":285.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[282.0,287.0,287.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 52030,
            "unit": "Milliseconds",
            "range": "stdev: 360.2596286013741",
            "extra": "{\"totalTime\":52172.666666666664,\"preparationTime\":142.66666666666666,\"singleTimesToRun\":[51623.0,52308.0,52159.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2550.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 20.984120980716188",
            "extra": "{\"totalTime\":2645.3333333333335,\"preparationTime\":94.66666666666667,\"singleTimesToRun\":[2567.0,2558.0,2527.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1350.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 34.01960219246153",
            "extra": "{\"totalTime\":1428.3333333333333,\"preparationTime\":78.0,\"singleTimesToRun\":[1317.0,1349.0,1385.0],\"postparationTime\":0.0}"
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
          "id": "4a8834e80bd24c93677e8cd561d2ed7a76020a97",
          "message": "history explorer: show wait cursor during expensive operations",
          "timestamp": "2022-07-29T17:11:00+02:00",
          "tree_id": "de01b9261acc9f30272e38f3b8e1c59ae8d19231",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/4a8834e80bd24c93677e8cd561d2ed7a76020a97"
        },
        "date": 1659118031315,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8228.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 66.21429855653032",
            "extra": "{\"totalTime\":8228.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8153.0,8276.0,8257.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 27305.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 203.13132041448787",
            "extra": "{\"totalTime\":27306.666666666668,\"preparationTime\":1.0,\"singleTimesToRun\":[27119.0,27276.0,27522.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 136,
            "unit": "Milliseconds",
            "range": "stdev: 4.58257569495584",
            "extra": "{\"totalTime\":136.0,\"preparationTime\":0.0,\"singleTimesToRun\":[131.0,137.0,140.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2743.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 28.571547618799606",
            "extra": "{\"totalTime\":2743.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2711.0,2756.0,2764.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 287,
            "unit": "Milliseconds",
            "range": "stdev: 0.0",
            "extra": "{\"totalTime\":287.0,\"preparationTime\":0.0,\"singleTimesToRun\":[287.0,287.0,287.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 51874.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 210.52632456140333",
            "extra": "{\"totalTime\":52014.666666666664,\"preparationTime\":140.0,\"singleTimesToRun\":[51642.0,52052.0,51930.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2560,
            "unit": "Milliseconds",
            "range": "stdev: 18.681541692269406",
            "extra": "{\"totalTime\":2653.3333333333335,\"preparationTime\":93.33333333333333,\"singleTimesToRun\":[2580.0,2557.0,2543.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1345,
            "unit": "Milliseconds",
            "range": "stdev: 11.789826122551595",
            "extra": "{\"totalTime\":1423.0,\"preparationTime\":78.0,\"singleTimesToRun\":[1332.0,1348.0,1355.0],\"postparationTime\":0.0}"
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
          "id": "b846bf1abac549da1aacc34f09488addce64a0ac",
          "message": "add screenshots of history explorer",
          "timestamp": "2022-07-29T20:09:39+02:00",
          "tree_id": "1f4ff031c50000d685b0d0705be13f4afedb9f30",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/b846bf1abac549da1aacc34f09488addce64a0ac"
        },
        "date": 1659119153779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8402,
            "unit": "Milliseconds",
            "range": "stdev: 173.1386727452882",
            "extra": "{\"totalTime\":8402.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8225.0,8410.0,8571.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 27285,
            "unit": "Milliseconds",
            "range": "stdev: 165.90660023037057",
            "extra": "{\"totalTime\":27286.0,\"preparationTime\":1.0,\"singleTimesToRun\":[27130.0,27265.0,27460.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 137,
            "unit": "Milliseconds",
            "range": "stdev: 3.0",
            "extra": "{\"totalTime\":137.0,\"preparationTime\":0.0,\"singleTimesToRun\":[137.0,134.0,140.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2734.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 47.58501164582535",
            "extra": "{\"totalTime\":2734.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2682.0,2746.0,2775.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 290,
            "unit": "Milliseconds",
            "range": "stdev: 3.605551275463989",
            "extra": "{\"totalTime\":290.0,\"preparationTime\":0.0,\"singleTimesToRun\":[286.0,291.0,293.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 51871.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 423.87773394380287",
            "extra": "{\"totalTime\":52013.0,\"preparationTime\":141.66666666666666,\"singleTimesToRun\":[51603.0,51651.0,52360.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2555.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 17.039170558842745",
            "extra": "{\"totalTime\":2650.3333333333335,\"preparationTime\":94.66666666666667,\"singleTimesToRun\":[2565.0,2536.0,2566.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1342,
            "unit": "Milliseconds",
            "range": "stdev: 20.29778313018444",
            "extra": "{\"totalTime\":1419.3333333333333,\"preparationTime\":77.33333333333333,\"singleTimesToRun\":[1324.0,1338.0,1364.0],\"postparationTime\":0.0}"
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
          "id": "583dce863d2d1e63eb52ee6fbe1587d8ea05bdd8",
          "message": "Revert debug commits\n\nThis reverts commits d659a3f af5bf62 37500df d8a1668d6fa675e5776992520d931ea366d6b55d 6e27606.",
          "timestamp": "2022-07-30T03:00:57+02:00",
          "tree_id": "8e958c14d24f70465899fc819a80913b31bf3bc4",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/583dce863d2d1e63eb52ee6fbe1587d8ea05bdd8"
        },
        "date": 1659143896621,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7982.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 234.35941059264795",
            "extra": "{\"totalTime\":7982.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[7715.0,8082.0,8151.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 28777.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 29.280255007997",
            "extra": "{\"totalTime\":28778.333333333332,\"preparationTime\":1.0,\"singleTimesToRun\":[28746.0,28782.0,28804.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 131,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":131.0,\"preparationTime\":0.0,\"singleTimesToRun\":[130.0,131.0,132.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2700,
            "unit": "Milliseconds",
            "range": "stdev: 17.08800749063506",
            "extra": "{\"totalTime\":2700.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2682.0,2702.0,2716.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 293.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 6.110100926607787",
            "extra": "{\"totalTime\":293.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[300.0,288.0,292.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 55002.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 268.69003206917324",
            "extra": "{\"totalTime\":55142.0,\"preparationTime\":139.66666666666666,\"singleTimesToRun\":[54728.0,55014.0,55265.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2666.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 62.69237061503843",
            "extra": "{\"totalTime\":2763.0,\"preparationTime\":96.33333333333333,\"singleTimesToRun\":[2739.0,2628.0,2633.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1435.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 12.220201853215574",
            "extra": "{\"totalTime\":1512.6666666666667,\"preparationTime\":77.0,\"singleTimesToRun\":[1449.0,1425.0,1433.0],\"postparationTime\":0.0}"
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
          "id": "f845593418b99b9494023ca0874496c343a2b555",
          "message": "CI: Comment on screenshot-changing commits (#96)\n\nThis PR extends the CI build job so that for each commit that causes a change in at least one screenshot, a GitHub comment is added to the commit with a summary of the changed screenshots.",
          "timestamp": "2022-07-30T01:18:21Z",
          "tree_id": "8e958c14d24f70465899fc819a80913b31bf3bc4",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/f845593418b99b9494023ca0874496c343a2b555"
        },
        "date": 1659144971529,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 9026,
            "unit": "Milliseconds",
            "range": "stdev: 248.78303800701525",
            "extra": "{\"totalTime\":9026.0,\"preparationTime\":0.0,\"singleTimesToRun\":[9095.0,8750.0,9233.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 33465.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 138.90404361764755",
            "extra": "{\"totalTime\":33466.666666666664,\"preparationTime\":1.0,\"singleTimesToRun\":[33414.0,33623.0,33360.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 151.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 2.5166114784235836",
            "extra": "{\"totalTime\":151.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[151.0,154.0,149.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3077.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 44.45597072760118",
            "extra": "{\"totalTime\":3077.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[3037.0,3125.0,3070.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 339,
            "unit": "Milliseconds",
            "range": "stdev: 3.0",
            "extra": "{\"totalTime\":339.0,\"preparationTime\":0.0,\"singleTimesToRun\":[339.0,342.0,336.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 63784,
            "unit": "Milliseconds",
            "range": "stdev: 388.35164477571095",
            "extra": "{\"totalTime\":63948.333333333336,\"preparationTime\":164.33333333333334,\"singleTimesToRun\":[63368.0,64137.0,63847.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3115.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 34.77547028198661",
            "extra": "{\"totalTime\":3228.3333333333335,\"preparationTime\":112.66666666666667,\"singleTimesToRun\":[3103.0,3155.0,3089.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1588.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 15.947831618540915",
            "extra": "{\"totalTime\":1676.3333333333333,\"preparationTime\":88.0,\"singleTimesToRun\":[1575.0,1584.0,1606.0],\"postparationTime\":0.0}"
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
          "id": "d193e6aabc7a5c0d02d889d4c887c22959faf712",
          "message": "Fix Squot merge error",
          "timestamp": "2022-07-30T01:31:05Z",
          "tree_id": "fdbbbd1377aa52fa3b25794456a22e22265f8280",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/d193e6aabc7a5c0d02d889d4c887c22959faf712"
        },
        "date": 1659145985397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 11629.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 317.1345666012038",
            "extra": "{\"totalTime\":11629.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[11318.0,11619.0,11952.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 39919,
            "unit": "Milliseconds",
            "range": "stdev: 742.0518849784023",
            "extra": "{\"totalTime\":39920.0,\"preparationTime\":1.0,\"singleTimesToRun\":[40728.0,39270.0,39759.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 191,
            "unit": "Milliseconds",
            "range": "stdev: 6.0",
            "extra": "{\"totalTime\":191.0,\"preparationTime\":0.0,\"singleTimesToRun\":[191.0,197.0,185.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3951,
            "unit": "Milliseconds",
            "range": "stdev: 153.48289807011074",
            "extra": "{\"totalTime\":3951.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3902.0,4123.0,3828.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 406,
            "unit": "Milliseconds",
            "range": "stdev: 9.539392014169456",
            "extra": "{\"totalTime\":406.0,\"preparationTime\":0.0,\"singleTimesToRun\":[400.0,417.0,401.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 76779.33333333333,
            "unit": "Milliseconds",
            "range": "stdev: 519.6925373077175",
            "extra": "{\"totalTime\":76980.0,\"preparationTime\":200.66666666666666,\"singleTimesToRun\":[76499.0,77379.0,76460.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3741.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 133.4328795062646",
            "extra": "{\"totalTime\":3877.3333333333335,\"preparationTime\":135.66666666666666,\"singleTimesToRun\":[3836.0,3589.0,3800.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 2075,
            "unit": "Milliseconds",
            "range": "stdev: 50.586559479766954",
            "extra": "{\"totalTime\":2188.0,\"preparationTime\":113.0,\"singleTimesToRun\":[2017.0,2098.0,2110.0],\"postparationTime\":0.0}"
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
          "id": "e80a5376ddb327e46c9f9f9712910da7a73ccda1",
          "message": "Add screenshots of history explorer (#95)\n\nfix time for morph construction to keep diffs minimal",
          "timestamp": "2022-07-30T04:42:22+02:00",
          "tree_id": "fdbbbd1377aa52fa3b25794456a22e22265f8280",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/e80a5376ddb327e46c9f9f9712910da7a73ccda1"
        },
        "date": 1659149949069,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8408.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 320.3347207739638",
            "extra": "{\"totalTime\":8408.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8164.0,8290.0,8771.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 29384.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 409.75155073938816",
            "extra": "{\"totalTime\":29385.333333333332,\"preparationTime\":1.0,\"singleTimesToRun\":[29682.0,28917.0,29554.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 136.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":136.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[136.0,135.0,138.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2759.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 4.932882862316247",
            "extra": "{\"totalTime\":2759.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2763.0,2754.0,2762.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 294.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 5.773502691896258",
            "extra": "{\"totalTime\":294.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[288.0,298.0,298.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 56132.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 214.87283060762556",
            "extra": "{\"totalTime\":56279.666666666664,\"preparationTime\":147.0,\"singleTimesToRun\":[55889.0,56214.0,56295.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2708.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 36.66515148384544",
            "extra": "{\"totalTime\":2806.6666666666665,\"preparationTime\":98.0,\"singleTimesToRun\":[2667.0,2736.0,2723.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1442.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 50.84617324178225",
            "extra": "{\"totalTime\":1522.3333333333333,\"preparationTime\":79.66666666666667,\"singleTimesToRun\":[1384.0,1474.0,1470.0],\"postparationTime\":0.0}"
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
          "id": "6a5ebb11b57a47200d1a2a424cec66e1705fca12",
          "message": "history explorer: make buttons wider, add tooltips",
          "timestamp": "2022-07-30T12:36:00+02:00",
          "tree_id": "6c6c93a5641c0366e2397a48f0e94b54250b86dc",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/6a5ebb11b57a47200d1a2a424cec66e1705fca12"
        },
        "date": 1659178333705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8368.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 319.92551216389944",
            "extra": "{\"totalTime\":8368.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8737.0,8160.0,8209.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 29127.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 243.9371503755288",
            "extra": "{\"totalTime\":29128.666666666668,\"preparationTime\":1.0,\"singleTimesToRun\":[28975.0,28999.0,29409.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 136.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 2.5166114784235836",
            "extra": "{\"totalTime\":136.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[139.0,134.0,136.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2712.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 17.616280348965084",
            "extra": "{\"totalTime\":2712.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2702.0,2703.0,2733.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 292,
            "unit": "Milliseconds",
            "range": "stdev: 3.605551275463989",
            "extra": "{\"totalTime\":292.0,\"preparationTime\":0.0,\"singleTimesToRun\":[291.0,289.0,296.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 55931.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 334.3311731402463",
            "extra": "{\"totalTime\":56076.666666666664,\"preparationTime\":145.0,\"singleTimesToRun\":[56295.0,55637.0,55863.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2681,
            "unit": "Milliseconds",
            "range": "stdev: 32.18695387886216",
            "extra": "{\"totalTime\":2777.3333333333335,\"preparationTime\":96.33333333333333,\"singleTimesToRun\":[2717.0,2655.0,2671.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1429.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 36.90979996333404",
            "extra": "{\"totalTime\":1506.6666666666667,\"preparationTime\":77.33333333333333,\"singleTimesToRun\":[1388.0,1441.0,1459.0],\"postparationTime\":0.0}"
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
          "id": "e6c3aa91e37cd8292f3cd156e0c1877e0b067702",
          "message": "screenshots: remove white background",
          "timestamp": "2022-07-30T13:02:59+02:00",
          "tree_id": "bad74ce6a6adaa48ad828fd3c4e1d7acbbfa572d",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/e6c3aa91e37cd8292f3cd156e0c1877e0b067702"
        },
        "date": 1659180094133,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 9620.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 251.8537935654997",
            "extra": "{\"totalTime\":9620.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[9391.0,9890.0,9581.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 35967.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 91.51138362702935",
            "extra": "{\"totalTime\":35968.333333333336,\"preparationTime\":1.0,\"singleTimesToRun\":[35869.0,36050.0,35983.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 164.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 2.5166114784235836",
            "extra": "{\"totalTime\":164.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[164.0,162.0,167.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3436.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 53.52880844305554",
            "extra": "{\"totalTime\":3436.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[3496.0,3392.0,3422.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 373.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 20.207259421636902",
            "extra": "{\"totalTime\":373.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[362.0,362.0,397.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 68587.66666666667,
            "unit": "Milliseconds",
            "range": "stdev: 217.22185279877652",
            "extra": "{\"totalTime\":68756.66666666667,\"preparationTime\":169.0,\"singleTimesToRun\":[68403.0,68827.0,68533.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3247.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 44.73626418615365",
            "extra": "{\"totalTime\":3361.3333333333335,\"preparationTime\":114.0,\"singleTimesToRun\":[3196.0,3278.0,3268.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1727,
            "unit": "Milliseconds",
            "range": "stdev: 23.388031127053",
            "extra": "{\"totalTime\":1822.0,\"preparationTime\":95.0,\"singleTimesToRun\":[1700.0,1741.0,1740.0],\"postparationTime\":0.0}"
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
          "distinct": false,
          "id": "bc4740d6f796146f73bd81d012174975f25913a9",
          "message": "deduplicate/comment range retracing simulator examples",
          "timestamp": "2022-07-30T14:17:24+02:00",
          "tree_id": "0977cc6688273e8a108d5daf5230fdb188439cc0",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/bc4740d6f796146f73bd81d012174975f25913a9"
        },
        "date": 1659193461786,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8568.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 301.94756719227485",
            "extra": "{\"totalTime\":8568.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8237.0,8640.0,8828.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 29729,
            "unit": "Milliseconds",
            "range": "stdev: 312.501199997696",
            "extra": "{\"totalTime\":29730.0,\"preparationTime\":1.0,\"singleTimesToRun\":[29372.0,29862.0,29953.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 136.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 3.0550504633038935",
            "extra": "{\"totalTime\":136.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[134.0,136.0,140.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2778.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 21.361959960016154",
            "extra": "{\"totalTime\":2778.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2766.0,2803.0,2766.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 292.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":292.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[292.0,295.0,291.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 56852.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 385.11599984074064",
            "extra": "{\"totalTime\":57000.666666666664,\"preparationTime\":148.0,\"singleTimesToRun\":[56535.0,57281.0,56742.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2803.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 60.43453758682475",
            "extra": "{\"totalTime\":2902.6666666666665,\"preparationTime\":99.0,\"singleTimesToRun\":[2734.0,2842.0,2835.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1460,
            "unit": "Milliseconds",
            "range": "stdev: 58.88972745734183",
            "extra": "{\"totalTime\":1539.3333333333333,\"preparationTime\":79.33333333333333,\"singleTimesToRun\":[1392.0,1494.0,1494.0],\"postparationTime\":0.0}"
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
          "id": "ef9d37ffa38145a26c0bc065db944535141ce471",
          "message": "add missing class variable definition",
          "timestamp": "2022-07-30T17:22:47+02:00",
          "tree_id": "0aded506828ebb1bdb0f2cc43dfeda12b3423213",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/ef9d37ffa38145a26c0bc065db944535141ce471"
        },
        "date": 1659195592372,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7871.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 53.407240457950394",
            "extra": "{\"totalTime\":7871.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7855.0,7828.0,7931.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 28845.666666666668,
            "unit": "Milliseconds",
            "range": "stdev: 67.00248751601193",
            "extra": "{\"totalTime\":28846.666666666668,\"preparationTime\":1.0,\"singleTimesToRun\":[28845.0,28913.0,28779.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 134.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":134.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[134.0,135.0,134.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2686,
            "unit": "Milliseconds",
            "range": "stdev: 16.822603841260722",
            "extra": "{\"totalTime\":2686.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2667.0,2692.0,2699.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 289,
            "unit": "Milliseconds",
            "range": "stdev: 5.0",
            "extra": "{\"totalTime\":289.0,\"preparationTime\":0.0,\"singleTimesToRun\":[284.0,289.0,294.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 54671.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 303.5067269984857",
            "extra": "{\"totalTime\":54811.666666666664,\"preparationTime\":140.0,\"singleTimesToRun\":[54443.0,54556.0,55016.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2607,
            "unit": "Milliseconds",
            "range": "stdev: 18.24828759089466",
            "extra": "{\"totalTime\":2700.0,\"preparationTime\":93.0,\"singleTimesToRun\":[2598.0,2595.0,2628.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1402.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 32.74650108535771",
            "extra": "{\"totalTime\":1477.0,\"preparationTime\":74.33333333333333,\"singleTimesToRun\":[1366.0,1413.0,1429.0],\"postparationTime\":0.0}"
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
          "id": "a107e0f351f61e075b19de3078d84d3d3a04af55",
          "message": "Merge pull request #97 from hpi-swa-lab/feat/context-slice-label-truncation\n\nContext slice label truncation",
          "timestamp": "2022-07-30T17:43:05+02:00",
          "tree_id": "0aded506828ebb1bdb0f2cc43dfeda12b3423213",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/a107e0f351f61e075b19de3078d84d3d3a04af55"
        },
        "date": 1659196843055,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 9347,
            "unit": "Milliseconds",
            "range": "stdev: 108.0555412739208",
            "extra": "{\"totalTime\":9347.0,\"preparationTime\":0.0,\"singleTimesToRun\":[9241.0,9343.0,9457.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 34216.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 316.0638121223835",
            "extra": "{\"totalTime\":34217.666666666664,\"preparationTime\":1.0,\"singleTimesToRun\":[33897.0,34224.0,34529.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 152.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":152.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[151.0,154.0,152.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3219.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 22.12088003071608",
            "extra": "{\"totalTime\":3219.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[3196.0,3240.0,3222.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 336,
            "unit": "Milliseconds",
            "range": "stdev: 6.082762530298219",
            "extra": "{\"totalTime\":336.0,\"preparationTime\":0.0,\"singleTimesToRun\":[343.0,333.0,332.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 64762,
            "unit": "Milliseconds",
            "range": "stdev: 530.5431179461289",
            "extra": "{\"totalTime\":64929.666666666664,\"preparationTime\":167.66666666666666,\"singleTimesToRun\":[64152.0,65018.0,65116.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3091.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 16.563010998406458",
            "extra": "{\"totalTime\":3202.0,\"preparationTime\":110.66666666666667,\"singleTimesToRun\":[3093.0,3107.0,3074.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1663,
            "unit": "Milliseconds",
            "range": "stdev: 14.177446878757825",
            "extra": "{\"totalTime\":1754.6666666666667,\"preparationTime\":91.66666666666667,\"singleTimesToRun\":[1647.0,1674.0,1668.0],\"postparationTime\":0.0}"
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
          "id": "e674c3e69565bb65ddbf45d4a115c92ab8052598",
          "message": "cursor examples: avoid DebuggerMethodMap in notebook, somehow not always work. rename #example -> #exampleStepping (stay tuned for more ...)",
          "timestamp": "2022-07-31T00:52:56+02:00",
          "tree_id": "5aff5a76b6165f53d5afdd43cd0c6476eeb82890",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/e674c3e69565bb65ddbf45d4a115c92ab8052598"
        },
        "date": 1659222485833,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8501.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 49.92327446525652",
            "extra": "{\"totalTime\":8501.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[8488.0,8460.0,8557.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 28033,
            "unit": "Milliseconds",
            "range": "stdev: 65.55150646628954",
            "extra": "{\"totalTime\":28034.333333333332,\"preparationTime\":1.3333333333333333,\"singleTimesToRun\":[28036.0,28097.0,27966.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 139.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1.5275252316519468",
            "extra": "{\"totalTime\":139.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[138.0,141.0,140.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2774.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 19.00876990584434",
            "extra": "{\"totalTime\":2774.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2774.0,2794.0,2756.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 291.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 3.7859388972001824",
            "extra": "{\"totalTime\":291.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[287.0,293.0,294.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 52927.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 454.3790634848104",
            "extra": "{\"totalTime\":53071.0,\"preparationTime\":143.33333333333334,\"singleTimesToRun\":[52880.0,52499.0,53404.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2596.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 15.307950004273378",
            "extra": "{\"totalTime\":2690.0,\"preparationTime\":93.66666666666667,\"singleTimesToRun\":[2588.0,2587.0,2614.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1357,
            "unit": "Milliseconds",
            "range": "stdev: 25.11971337416094",
            "extra": "{\"totalTime\":1434.3333333333333,\"preparationTime\":77.33333333333333,\"singleTimesToRun\":[1328.0,1372.0,1371.0],\"postparationTime\":0.0}"
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
          "id": "d5b11f2f20aadbc47f7b50b631a21215340058cc",
          "message": "add help on history explorer, update existing help\n\n- new help book on history explorer (nitroduction, entry points, structure)\n- more screenshots on history explorer for help\n- new help topic on scripting APIs\n- example notebook for scripting (TDBCursor exampleScriptingAPIs)\n- add resize button to help intro\n\nimplementation:\n\n- a few hacks to make ClassBasedHelpTopic embeddable into the pages of a CustomHelp class\n- extract TTDBHelpForEdit from TraceDebuggerHelpForEdit\n- make TraceDebuggerHelp resizeWindow: idempotent",
          "timestamp": "2022-07-31T01:46:41+02:00",
          "tree_id": "44fb4cf67f94c451ce64ac14275441796eb50fea",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/d5b11f2f20aadbc47f7b50b631a21215340058cc"
        },
        "date": 1659225891510,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 10631.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 1283.4369222261503",
            "extra": "{\"totalTime\":10631.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[10097.0,9702.0,12096.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 37368,
            "unit": "Milliseconds",
            "range": "stdev: 2545.2738555998253",
            "extra": "{\"totalTime\":37369.0,\"preparationTime\":1.0,\"singleTimesToRun\":[35413.0,36445.0,40246.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 170.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 14.57166199626293",
            "extra": "{\"totalTime\":170.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[164.0,160.0,187.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3476.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 187.6734753057377",
            "extra": "{\"totalTime\":3476.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[3327.0,3415.0,3687.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 382.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 38.68246803570493",
            "extra": "{\"totalTime\":382.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[360.0,360.0,427.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 70788.33333333333,
            "unit": "Milliseconds",
            "range": "stdev: 4669.615437413807",
            "extra": "{\"totalTime\":70970.66666666667,\"preparationTime\":182.33333333333334,\"singleTimesToRun\":[68040.0,68145.0,76180.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3439.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 173.58091292919661",
            "extra": "{\"totalTime\":3555.3333333333335,\"preparationTime\":116.0,\"singleTimesToRun\":[3494.0,3245.0,3579.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1876.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 191.70898083640563",
            "extra": "{\"totalTime\":1970.0,\"preparationTime\":93.66666666666667,\"singleTimesToRun\":[1833.0,1710.0,2086.0],\"postparationTime\":0.0}"
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
          "id": "47987f056c7dea3275f513115840e6bf93d34882",
          "message": "add more tooltips",
          "timestamp": "2022-07-31T02:21:26+02:00",
          "tree_id": "07ab2e2a5053dfb57ac12212845a2fdc3add90d9",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/47987f056c7dea3275f513115840e6bf93d34882"
        },
        "date": 1659227778334,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8339,
            "unit": "Milliseconds",
            "range": "stdev: 51.79768334587948",
            "extra": "{\"totalTime\":8339.0,\"preparationTime\":0.0,\"singleTimesToRun\":[8301.0,8318.0,8398.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 27369,
            "unit": "Milliseconds",
            "range": "stdev: 114.97391008398384",
            "extra": "{\"totalTime\":27370.0,\"preparationTime\":1.0,\"singleTimesToRun\":[27242.0,27466.0,27399.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 135,
            "unit": "Milliseconds",
            "range": "stdev: 2.6457513110645907",
            "extra": "{\"totalTime\":135.33333333333334,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[132.0,136.0,137.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2676.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 15.631165450257807",
            "extra": "{\"totalTime\":2676.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2693.0,2662.0,2674.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 281,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":281.0,\"preparationTime\":0.0,\"singleTimesToRun\":[282.0,280.0,281.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 51743,
            "unit": "Milliseconds",
            "range": "stdev: 237.65310854268245",
            "extra": "{\"totalTime\":51883.333333333336,\"preparationTime\":140.33333333333334,\"singleTimesToRun\":[51993.0,51716.0,51520.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2535.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 12.662279942148388",
            "extra": "{\"totalTime\":2628.3333333333335,\"preparationTime\":93.0,\"singleTimesToRun\":[2521.0,2540.0,2545.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1334.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 29.955522584881294",
            "extra": "{\"totalTime\":1411.0,\"preparationTime\":76.66666666666667,\"singleTimesToRun\":[1301.0,1359.0,1343.0],\"postparationTime\":0.0}"
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
          "id": "ba7288f5ceb6ff0c66b9908c5deb3fa9169f138b",
          "message": "screenshots: fix doubly-nested paths",
          "timestamp": "2022-07-31T02:58:57+02:00",
          "tree_id": "0cb90d7fab2c709b9450140c2a2ee6bbba80aa87",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/ba7288f5ceb6ff0c66b9908c5deb3fa9169f138b"
        },
        "date": 1659230417276,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7424.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 70.99530500908728",
            "extra": "{\"totalTime\":7424.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7490.0,7349.0,7434.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 25762,
            "unit": "Milliseconds",
            "range": "stdev: 163.1471728225776",
            "extra": "{\"totalTime\":25763.0,\"preparationTime\":1.0,\"singleTimesToRun\":[25946.0,25705.0,25635.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 116.33333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 3.0550504633038935",
            "extra": "{\"totalTime\":116.33333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[117.0,113.0,119.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2471.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 114.33430514650156",
            "extra": "{\"totalTime\":2471.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2385.0,2428.0,2601.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 260.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 3.511884584284246",
            "extra": "{\"totalTime\":260.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[257.0,264.0,261.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 49071.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 279.4303729613754",
            "extra": "{\"totalTime\":49199.666666666664,\"preparationTime\":128.33333333333334,\"singleTimesToRun\":[48846.0,49384.0,48984.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2383.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 25.69695182961071",
            "extra": "{\"totalTime\":2469.0,\"preparationTime\":85.66666666666667,\"singleTimesToRun\":[2368.0,2413.0,2369.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1265,
            "unit": "Milliseconds",
            "range": "stdev: 31.192947920964443",
            "extra": "{\"totalTime\":1334.6666666666667,\"preparationTime\":69.66666666666667,\"singleTimesToRun\":[1229.0,1282.0,1284.0],\"postparationTime\":0.0}"
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
          "id": "7fe9cb9e598ed72a8dbfa3d37486a8e5922c1e00",
          "message": "Merge pull request #98 from hpi-swa-lab/doc/he\n\nHelp on History Explorer",
          "timestamp": "2022-07-31T03:21:10+02:00",
          "tree_id": "0cb90d7fab2c709b9450140c2a2ee6bbba80aa87",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/7fe9cb9e598ed72a8dbfa3d37486a8e5922c1e00"
        },
        "date": 1659231488563,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8167.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 98.89556781440378",
            "extra": "{\"totalTime\":8167.666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[8054.0,8215.0,8234.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 29148.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 216.1025990897225",
            "extra": "{\"totalTime\":29149.333333333332,\"preparationTime\":1.0,\"singleTimesToRun\":[29042.0,29006.0,29397.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 136,
            "unit": "Milliseconds",
            "range": "stdev: 2.6457513110645907",
            "extra": "{\"totalTime\":136.0,\"preparationTime\":0.0,\"singleTimesToRun\":[134.0,135.0,139.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2717.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 25.106440076867397",
            "extra": "{\"totalTime\":2717.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2691.0,2741.0,2720.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 292.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 5.507570547286102",
            "extra": "{\"totalTime\":292.3333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[286.0,296.0,295.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 55579.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 288.9192505412773",
            "extra": "{\"totalTime\":55724.666666666664,\"preparationTime\":145.33333333333334,\"singleTimesToRun\":[55257.0,55666.0,55815.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2674.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 38.991452054691855",
            "extra": "{\"totalTime\":2771.3333333333335,\"preparationTime\":97.0,\"singleTimesToRun\":[2643.0,2662.0,2718.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1426,
            "unit": "Milliseconds",
            "range": "stdev: 35.59494346111537",
            "extra": "{\"totalTime\":1502.6666666666667,\"preparationTime\":76.66666666666667,\"singleTimesToRun\":[1385.0,1449.0,1444.0],\"postparationTime\":0.0}"
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
          "id": "d74f6fcc514426d997b35b9469a3a841a10f7247",
          "message": "Merge branch 'main' into shaping-re22",
          "timestamp": "2022-07-31T13:19:41+02:00",
          "tree_id": "244701929d371cd6ba54e671d7c3b81a731dac41",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/d74f6fcc514426d997b35b9469a3a841a10f7247"
        },
        "date": 1659267407084,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 9387.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 164.59141330377273",
            "extra": "{\"totalTime\":9387.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[9198.0,9472.0,9493.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 34634.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 442.0184762352512",
            "extra": "{\"totalTime\":34635.333333333336,\"preparationTime\":1.0,\"singleTimesToRun\":[34162.0,35038.0,34703.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 154,
            "unit": "Milliseconds",
            "range": "stdev: 3.605551275463989",
            "extra": "{\"totalTime\":154.0,\"preparationTime\":0.0,\"singleTimesToRun\":[150.0,157.0,155.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3186,
            "unit": "Milliseconds",
            "range": "stdev: 26.851443164195103",
            "extra": "{\"totalTime\":3186.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3170.0,3171.0,3217.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 341,
            "unit": "Milliseconds",
            "range": "stdev: 3.0",
            "extra": "{\"totalTime\":341.0,\"preparationTime\":0.0,\"singleTimesToRun\":[344.0,341.0,338.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 65682,
            "unit": "Milliseconds",
            "range": "stdev: 374.42355695121535",
            "extra": "{\"totalTime\":65851.0,\"preparationTime\":169.0,\"singleTimesToRun\":[65250.0,65883.0,65913.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3132.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 55.5007507456731",
            "extra": "{\"totalTime\":3247.3333333333335,\"preparationTime\":115.0,\"singleTimesToRun\":[3132.0,3188.0,3077.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1647,
            "unit": "Milliseconds",
            "range": "stdev: 40.84115571332428",
            "extra": "{\"totalTime\":1737.3333333333333,\"preparationTime\":90.33333333333333,\"singleTimesToRun\":[1601.0,1679.0,1661.0],\"postparationTime\":0.0}"
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
          "id": "c1258ee6a3b776886bf15ff10cc647492a4c0d2f",
          "message": "ci: only keep latest prerelease\n\ncrossing fingers ...",
          "timestamp": "2022-07-31T16:35:36+02:00",
          "tree_id": "49e8012eaef56a21cf18e3e41b91a861f1f5f2bc",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/c1258ee6a3b776886bf15ff10cc647492a4c0d2f"
        },
        "date": 1659279122196,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7693.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 83.78742944698408",
            "extra": "{\"totalTime\":7693.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[7633.0,7789.0,7658.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 24245.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 26.312227829154516",
            "extra": "{\"totalTime\":24246.333333333332,\"preparationTime\":1.0,\"singleTimesToRun\":[24217.0,24269.0,24250.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 119.66666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 0.5773502691896258",
            "extra": "{\"totalTime\":119.66666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[120.0,119.0,120.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2547,
            "unit": "Milliseconds",
            "range": "stdev: 120.46161214262409",
            "extra": "{\"totalTime\":2547.0,\"preparationTime\":0.0,\"singleTimesToRun\":[2408.0,2612.0,2621.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 262.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 13.650396819628847",
            "extra": "{\"totalTime\":262.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[247.0,272.0,269.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 46657,
            "unit": "Milliseconds",
            "range": "stdev: 177.36685146892583",
            "extra": "{\"totalTime\":46784.666666666664,\"preparationTime\":127.66666666666667,\"singleTimesToRun\":[46707.0,46804.0,46460.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2318,
            "unit": "Milliseconds",
            "range": "stdev: 36.29049462324811",
            "extra": "{\"totalTime\":2402.6666666666665,\"preparationTime\":84.66666666666667,\"singleTimesToRun\":[2346.0,2277.0,2331.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1216.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 26.6520793435209",
            "extra": "{\"totalTime\":1285.3333333333333,\"preparationTime\":69.0,\"singleTimesToRun\":[1186.0,1227.0,1236.0],\"postparationTime\":0.0}"
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
          "id": "5d608467998a3db974d48e6b4ed0cbc3f86aed83",
          "message": "ci: also delete older prerelease tags",
          "timestamp": "2022-07-31T16:40:25+02:00",
          "tree_id": "c311fb494acad3cf7aa5604fdfab3254d23778cd",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/5d608467998a3db974d48e6b4ed0cbc3f86aed83"
        },
        "date": 1659279356546,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 7932.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 589.5509590640435",
            "extra": "{\"totalTime\":7932.333333333333,\"preparationTime\":0.0,\"singleTimesToRun\":[8012.0,7307.0,8478.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 28976.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 694.8815246740506",
            "extra": "{\"totalTime\":28977.333333333332,\"preparationTime\":1.0,\"singleTimesToRun\":[29370.0,29385.0,28174.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 128.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 13.051181300301261",
            "extra": "{\"totalTime\":128.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[133.0,139.0,114.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2695.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 114.84917645909933",
            "extra": "{\"totalTime\":2695.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2563.0,2769.0,2754.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 312.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 27.024680078279065",
            "extra": "{\"totalTime\":312.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[323.0,333.0,282.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 54182.666666666664,
            "unit": "Milliseconds",
            "range": "stdev: 694.2509152556685",
            "extra": "{\"totalTime\":54329.0,\"preparationTime\":146.33333333333334,\"singleTimesToRun\":[54290.0,53441.0,54817.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2721.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 192.07897681249068",
            "extra": "{\"totalTime\":2824.3333333333335,\"preparationTime\":102.66666666666667,\"singleTimesToRun\":[2934.0,2671.0,2560.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1338.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 10.692676621563628",
            "extra": "{\"totalTime\":1412.0,\"preparationTime\":73.33333333333333,\"singleTimesToRun\":[1327.0,1341.0,1348.0],\"postparationTime\":0.0}"
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
          "id": "0f692398d6e4a9c8d6ad6f75ad35cd291794e91e",
          "message": "history explorer: add sorting example",
          "timestamp": "2022-07-31T20:01:47+02:00",
          "tree_id": "d44eed47d3ae7bc17924ddc44cbc1cbecf3887ae",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/0f692398d6e4a9c8d6ad6f75ad35cd291794e91e"
        },
        "date": 1659291970668,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8683.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 30.0055550412475",
            "extra": "{\"totalTime\":8683.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8657.0,8716.0,8677.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 29537.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 203.8389887468375",
            "extra": "{\"totalTime\":29538.333333333332,\"preparationTime\":1.0,\"singleTimesToRun\":[29345.0,29516.0,29751.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 135.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":135.66666666666666,\"preparationTime\":0.3333333333333333,\"singleTimesToRun\":[136.0,134.0,136.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2766.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 47.077949544700154",
            "extra": "{\"totalTime\":2766.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2821.0,2741.0,2738.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 294.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 2.0816659994661326",
            "extra": "{\"totalTime\":294.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[297.0,293.0,294.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 56218,
            "unit": "Milliseconds",
            "range": "stdev: 219.0616351623442",
            "extra": "{\"totalTime\":56363.666666666664,\"preparationTime\":145.66666666666666,\"singleTimesToRun\":[56440.0,56212.0,56002.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2757.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 43.558389930452364",
            "extra": "{\"totalTime\":2854.6666666666665,\"preparationTime\":97.0,\"singleTimesToRun\":[2793.0,2771.0,2709.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1448.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 37.072002014098636",
            "extra": "{\"totalTime\":1527.0,\"preparationTime\":78.33333333333333,\"singleTimesToRun\":[1413.0,1487.0,1446.0],\"postparationTime\":0.0}"
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
          "id": "62cc28797816636e5e9abefbae89f1fadc6c2df6",
          "message": "screenshot: order screenshot selectors for better determinism/debuggability\n\nHypothesis: When the animated GIF did not exists recently, was this selector maybe chosen first and failed because the screenshots/ directory did not exist yet?",
          "timestamp": "2022-07-31T22:24:12+02:00",
          "tree_id": "466b03eeb432887273202f12cfb4934310282032",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/62cc28797816636e5e9abefbae89f1fadc6c2df6"
        },
        "date": 1659300111455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 9328.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 150.74592310684008",
            "extra": "{\"totalTime\":9328.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[9372.0,9161.0,9453.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 34687.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 209.3378449619976",
            "extra": "{\"totalTime\":34688.333333333336,\"preparationTime\":1.0,\"singleTimesToRun\":[34874.0,34727.0,34461.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 157,
            "unit": "Milliseconds",
            "range": "stdev: 2.0",
            "extra": "{\"totalTime\":157.0,\"preparationTime\":0.0,\"singleTimesToRun\":[159.0,157.0,155.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3168,
            "unit": "Milliseconds",
            "range": "stdev: 74.27651041883968",
            "extra": "{\"totalTime\":3168.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3252.0,3141.0,3111.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 341.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 6.429100507328637",
            "extra": "{\"totalTime\":341.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[337.0,349.0,339.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 65445,
            "unit": "Milliseconds",
            "range": "stdev: 275.2725921700161",
            "extra": "{\"totalTime\":65611.66666666667,\"preparationTime\":166.66666666666666,\"singleTimesToRun\":[65490.0,65695.0,65150.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3120.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 17.039170558842745",
            "extra": "{\"totalTime\":3232.6666666666665,\"preparationTime\":112.33333333333333,\"singleTimesToRun\":[3138.0,3119.0,3104.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1619,
            "unit": "Milliseconds",
            "range": "stdev: 23.259406699226016",
            "extra": "{\"totalTime\":1708.3333333333333,\"preparationTime\":89.33333333333333,\"singleTimesToRun\":[1594.0,1640.0,1623.0],\"postparationTime\":0.0}"
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
          "id": "4e3415c3d406798762996261fb6fcc6f9032f774",
          "message": "overall documentation and minor clean-ups\n\n* add and revise class comments and methods comments\n* minor refactoring, remove some dead code\n* recategorizations\n* update todo comments\n* fix non-idiomatic return values in memory simulators' r/w hooks",
          "timestamp": "2022-07-31T22:28:25+02:00",
          "tree_id": "9553d41b4c088a0c7c2a3828c9be7d1f6066485c",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/4e3415c3d406798762996261fb6fcc6f9032f774"
        },
        "date": 1659300385190,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8544.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 202.4112974449137",
            "extra": "{\"totalTime\":8544.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8318.0,8607.0,8708.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 29594.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 219.90073518142984",
            "extra": "{\"totalTime\":29595.333333333332,\"preparationTime\":1.0,\"singleTimesToRun\":[29422.0,29842.0,29519.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 138.33333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 1.1547005383792517",
            "extra": "{\"totalTime\":138.33333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[137.0,139.0,139.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2772.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 29.501412395567325",
            "extra": "{\"totalTime\":2772.6666666666665,\"preparationTime\":0.0,\"singleTimesToRun\":[2743.0,2802.0,2773.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 298.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 6.506407098647712",
            "extra": "{\"totalTime\":298.6666666666667,\"preparationTime\":0.0,\"singleTimesToRun\":[292.0,299.0,305.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 56940.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 400.260331950761",
            "extra": "{\"totalTime\":57086.666666666664,\"preparationTime\":146.33333333333334,\"singleTimesToRun\":[56532.0,56957.0,57332.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2784.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 23.86070689089771",
            "extra": "{\"totalTime\":2880.6666666666665,\"preparationTime\":96.0,\"singleTimesToRun\":[2768.0,2774.0,2812.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1451,
            "unit": "Milliseconds",
            "range": "stdev: 37.64306044943742",
            "extra": "{\"totalTime\":1529.3333333333333,\"preparationTime\":78.33333333333333,\"singleTimesToRun\":[1408.0,1467.0,1478.0],\"postparationTime\":0.0}"
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
          "id": "2ec5732379a5783545c29b1a47c49b9d015e8fa1",
          "message": "Bump license",
          "timestamp": "2022-07-31T23:00:14+02:00",
          "tree_id": "9d7da905d583c5c32103f0d928d6f8f98af80272",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/2ec5732379a5783545c29b1a47c49b9d015e8fa1"
        },
        "date": 1659302428861,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 10770.666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 91.74057626444983",
            "extra": "{\"totalTime\":10770.666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[10866.0,10683.0,10763.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 38049,
            "unit": "Milliseconds",
            "range": "stdev: 202.30422635229348",
            "extra": "{\"totalTime\":38050.0,\"preparationTime\":1.0,\"singleTimesToRun\":[37816.0,38180.0,38151.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 178.66666666666666,
            "unit": "Milliseconds",
            "range": "stdev: 9.865765724632494",
            "extra": "{\"totalTime\":178.66666666666666,\"preparationTime\":0.0,\"singleTimesToRun\":[190.0,172.0,174.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3614,
            "unit": "Milliseconds",
            "range": "stdev: 88.42510955605314",
            "extra": "{\"totalTime\":3614.0,\"preparationTime\":0.0,\"singleTimesToRun\":[3512.0,3661.0,3669.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 396,
            "unit": "Milliseconds",
            "range": "stdev: 14.0",
            "extra": "{\"totalTime\":396.0,\"preparationTime\":0.0,\"singleTimesToRun\":[386.0,412.0,390.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 72780,
            "unit": "Milliseconds",
            "range": "stdev: 330.4739021465992",
            "extra": "{\"totalTime\":72964.33333333333,\"preparationTime\":184.33333333333334,\"singleTimesToRun\":[72608.0,72571.0,73161.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 3607,
            "unit": "Milliseconds",
            "range": "stdev: 76.50490180374065",
            "extra": "{\"totalTime\":3727.6666666666665,\"preparationTime\":120.66666666666667,\"singleTimesToRun\":[3531.0,3606.0,3684.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1932.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 70.8825319337094",
            "extra": "{\"totalTime\":2032.0,\"preparationTime\":99.33333333333333,\"singleTimesToRun\":[1852.0,1985.0,1961.0],\"postparationTime\":0.0}"
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
          "id": "2ec5732379a5783545c29b1a47c49b9d015e8fa1",
          "message": "Bump license",
          "timestamp": "2022-07-31T23:00:14+02:00",
          "tree_id": "9d7da905d583c5c32103f0d928d6f8f98af80272",
          "url": "https://github.com/hpi-swa-lab/squeak-tracedebugger/commit/2ec5732379a5783545c29b1a47c49b9d015e8fa1"
        },
        "date": 1659313820010,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 8310.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 198.8123067954631",
            "extra": "{\"totalTime\":8310.333333333334,\"preparationTime\":0.0,\"singleTimesToRun\":[8081.0,8416.0,8434.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 27209,
            "unit": "Milliseconds",
            "range": "stdev: 230.5276556077383",
            "extra": "{\"totalTime\":27210.0,\"preparationTime\":1.0,\"singleTimesToRun\":[27003.0,27166.0,27458.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 137,
            "unit": "Milliseconds",
            "range": "stdev: 1.0",
            "extra": "{\"totalTime\":137.0,\"preparationTime\":0.0,\"singleTimesToRun\":[136.0,138.0,137.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 2887.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 191.80806378599763",
            "extra": "{\"totalTime\":2887.3333333333335,\"preparationTime\":0.0,\"singleTimesToRun\":[2666.0,2991.0,3005.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 301,
            "unit": "Milliseconds",
            "range": "stdev: 16.46207763315433",
            "extra": "{\"totalTime\":301.0,\"preparationTime\":0.0,\"singleTimesToRun\":[282.0,311.0,310.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 51570.333333333336,
            "unit": "Milliseconds",
            "range": "stdev: 427.1771685534391",
            "extra": "{\"totalTime\":51711.333333333336,\"preparationTime\":141.0,\"singleTimesToRun\":[51123.0,51614.0,51974.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepInto",
            "value": 2533,
            "unit": "Milliseconds",
            "range": "stdev: 18.027756377319946",
            "extra": "{\"totalTime\":2624.3333333333335,\"preparationTime\":91.33333333333333,\"singleTimesToRun\":[2528.0,2518.0,2553.0],\"postparationTime\":0.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1345.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 43.14317249963584",
            "extra": "{\"totalTime\":1423.0,\"preparationTime\":77.66666666666667,\"singleTimesToRun\":[1296.0,1364.0,1376.0],\"postparationTime\":0.0}"
          }
        ]
      }
    ]
  }
}