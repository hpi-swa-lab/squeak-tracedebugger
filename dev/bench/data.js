window.BENCHMARK_DATA = {
  "lastUpdate": 1641758175584,
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
        "date": 1641741466665,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2227,
            "unit": "Milliseconds",
            "range": "stdev: 7591.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":2227.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 4119.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 47008.333333333336",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.3333333333333333,\"totalTime\":4119.666666666667}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 295396.3333333333,
            "unit": "Milliseconds",
            "range": "stdev: 1.5143299086533334e11",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":1291.0,\"totalTime\":296687.3333333333}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 26073.333333333332,
            "unit": "Milliseconds",
            "range": "stdev: 1.6782523333333333e6",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":246.33333333333334,\"totalTime\":26319.666666666668}"
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
        "date": 1641741267231,
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
          "id": "c52f1614068c60b7afb3fa71d78bf6f64536bd72",
          "message": "Remove deprecated instance creation messages from TraceDebugger",
          "timestamp": "2022-01-07T18:14:11Z",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/c52f1614068c60b7afb3fa71d78bf6f64536bd72"
        },
        "date": 1641741655358,
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
        "date": 1641744381924,
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
          "id": "e6557f4ba4a571942e14443dfb1dc507d7c9b888",
          "message": "Unset external-data-json-path",
          "timestamp": "2022-01-08T20:03:24Z",
          "tree_id": "ebb87d0a5d4ebcfb00b9691d2047433ee8336814",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/e6557f4ba4a571942e14443dfb1dc507d7c9b888"
        },
        "date": 1641672381254,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1397.3333333333333,
            "unit": "Milliseconds",
            "range": 11114.333333333334
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 4280,
            "unit": "Milliseconds",
            "range": 3969
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 2421.3333333333335,
            "unit": "Milliseconds",
            "range": 1081.3333333333333
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1087.6666666666667,
            "unit": "Milliseconds",
            "range": 730.3333333333334
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2420.3333333333335,
            "unit": "Milliseconds",
            "range": 5614.333333333333
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
          "id": "49e66914802194472a358ea67150b0e32ceb8042",
          "message": "Re-trigger CI",
          "timestamp": "2022-01-08T20:12:46Z",
          "tree_id": "ebb87d0a5d4ebcfb00b9691d2047433ee8336814",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/49e66914802194472a358ea67150b0e32ceb8042"
        },
        "date": 1641673011000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 6485.666666666667,
            "unit": "Milliseconds",
            "range": 42616.333333333336
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 3550.6666666666665,
            "unit": "Milliseconds",
            "range": 19586.333333333332
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 3684.6666666666665,
            "unit": "Milliseconds",
            "range": 1972.3333333333333
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1618.3333333333333,
            "unit": "Milliseconds",
            "range": 2777.3333333333335
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1955.6666666666667,
            "unit": "Milliseconds",
            "range": 4034.3333333333335
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
          "id": "c1e01df33344edd9ce926cb3222bbd6956fbb322",
          "message": "Connect CI-generated historic benchmark data in image\n\nUsage:\n\n\tTDBBenchmarkRunner exploreHistoricTimesToRun",
          "timestamp": "2022-01-08T23:06:38+01:00",
          "tree_id": "7a443a3ca176fe4a497160e35a5e20f475271dfb",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/c1e01df33344edd9ce926cb3222bbd6956fbb322"
        },
        "date": 1641679768565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 2828.6666666666665,
            "unit": "Milliseconds",
            "range": 15537.333333333334
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1115.3333333333333,
            "unit": "Milliseconds",
            "range": 1194.3333333333333
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1472.3333333333333,
            "unit": "Milliseconds",
            "range": 212.33333333333334
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 4816,
            "unit": "Milliseconds",
            "range": 15199
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2719,
            "unit": "Milliseconds",
            "range": 525
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
          "id": "b676dd7d633393810f7080e303fe165df707f75d",
          "message": "Revise benchmark results:\n\n- report and restore single time components\n- replace variance by stdev",
          "timestamp": "2022-01-09T02:02:36+01:00",
          "tree_id": "790ee3baa35d2a8f411a6bc5aa8023b4a2ccb20b",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/b676dd7d633393810f7080e303fe165df707f75d"
        },
        "date": 1641690333167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1079.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 649.3333333333334",
            "extra": "{\"postparationTime\":0,\"preparationTime\":0,\"totalTime\":(3238/3)}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 2565,
            "unit": "Milliseconds",
            "range": "stdev: 181.0",
            "extra": "{\"postparationTime\":0,\"preparationTime\":(358/3),\"totalTime\":(8053/3)}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2529,
            "unit": "Milliseconds",
            "range": "stdev: 169.0",
            "extra": "{\"postparationTime\":0,\"preparationTime\":0,\"totalTime\":2529}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1481.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 8644.333333333334",
            "extra": "{\"postparationTime\":0,\"preparationTime\":82,\"totalTime\":(4691/3)}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 4479.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2881.3333333333335",
            "extra": "{\"postparationTime\":0,\"preparationTime\":0,\"totalTime\":(13438/3)}"
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
          "id": "4830ca652be4096ede5077efb36580dd53c21b2e",
          "message": "Fix number format of time components",
          "timestamp": "2022-01-09T02:10:08+01:00",
          "tree_id": "c7d8cdae66bda6319bd2602853b2e679545167fe",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/4830ca652be4096ede5077efb36580dd53c21b2e"
        },
        "date": 1641690790064,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2511.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 652.3333333333334",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":2511.6666666666665}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1064.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 426.3333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":1064.6666666666667}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 4510.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 146.33333333333334",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":4510.666666666667}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 2520,
            "unit": "Milliseconds",
            "range": "stdev: 11491.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":119.0,\"totalTime\":2639.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1484.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 12082.333333333334",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":83.0,\"totalTime\":1567.3333333333333}"
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
          "id": "2cd976a182cf5d66af9e7c30b431775f0b77ab4c",
          "message": "Increase robustnesss of historic bench results parsing",
          "timestamp": "2022-01-09T02:11:42+01:00",
          "tree_id": "c03961eb3d2d88d61355d57ca92bbfe1f9486955",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/2cd976a182cf5d66af9e7c30b431775f0b77ab4c"
        },
        "date": 1641690883157,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1484.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 8802.333333333334",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":83.66666666666667,\"totalTime\":1568.3333333333333}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2530,
            "unit": "Milliseconds",
            "range": "stdev: 157.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":2530.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1068,
            "unit": "Milliseconds",
            "range": "stdev: 661.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.3333333333333333,\"totalTime\":1068.3333333333333}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 2572.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 50.333333333333336",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":118.0,\"totalTime\":2690.6666666666665}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 4562.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 7934.333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":4562.333333333333}"
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
          "id": "2b592ccab3a600dc869ece831a6a5b6039eae860",
          "message": "Revert \"<debug>Disable build job\"\n\nThis reverts commit d9cda1f04048580364f25dbfff03d45c824351a5.",
          "timestamp": "2022-01-09T01:13:01Z",
          "tree_id": "db887b885f3554463dd1d072e2005a6301a5a1ef",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/2b592ccab3a600dc869ece831a6a5b6039eae860"
        },
        "date": 1641691516523,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2767.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 7497.333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":2767.6666666666665}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1216.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 4450.333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":1216.6666666666667}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1461.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1684.3333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":86.66666666666667,\"totalTime\":1548.3333333333333}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 4962.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 7714.333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":4962.666666666667}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 2848,
            "unit": "Milliseconds",
            "range": "stdev: 9892.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":130.33333333333334,\"totalTime\":2978.3333333333335}"
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
          "id": "66567f50c30fc306bcad198856e1e987ee979bca",
          "message": "Skip missing historic benchmarks during parsing",
          "timestamp": "2022-01-09T18:05:14+01:00",
          "tree_id": "8e45cf5a5c4a72ea7831800c9ebae2b93f5c1d3e",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/66567f50c30fc306bcad198856e1e987ee979bca"
        },
        "date": 1641748110081,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2882.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 184.33333333333334",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":2882.3333333333335}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1194.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 21.333333333333332",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":1194.6666666666667}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 4967,
            "unit": "Milliseconds",
            "range": "stdev: 157.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":4967.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 2894,
            "unit": "Milliseconds",
            "range": "stdev: 1159.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":151.33333333333334,\"totalTime\":3045.3333333333335}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1496.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 1249.3333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":79.0,\"totalTime\":1575.6666666666667}"
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
          "id": "15c7980cd316bf42b2ba9361a6eb493ee5a9fd07",
          "message": "Revert \"<debug>Disable build job\"\n\nThis reverts commit d9cda1f04048580364f25dbfff03d45c824351a5.",
          "timestamp": "2022-01-09T17:06:07Z",
          "tree_id": "913d329429680645db8b04fd862e11aedf0c450f",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/15c7980cd316bf42b2ba9361a6eb493ee5a9fd07"
        },
        "date": 1641748491802,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2302,
            "unit": "Milliseconds",
            "range": "stdev: 619.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":2302.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 962,
            "unit": "Milliseconds",
            "range": "stdev: 147.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":962.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 3990.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 1908.3333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":3990.6666666666665}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 2455,
            "unit": "Milliseconds",
            "range": "stdev: 127.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":129.0,\"totalTime\":2584.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1336,
            "unit": "Milliseconds",
            "range": "stdev: 10297.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":67.0,\"totalTime\":1403.0}"
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
          "id": "a0683221efd3cf312c36a44bb7da9593aa99c96c",
          "message": "Add link to benchmarks in README.md",
          "timestamp": "2022-01-09T19:10:24+01:00",
          "tree_id": "ec8625d35383781f23ac4a630d56f9b6f68add51",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/a0683221efd3cf312c36a44bb7da9593aa99c96c"
        },
        "date": 1641752139468,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2564,
            "unit": "Milliseconds",
            "range": "stdev: 3796.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":2564.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1068.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 336.3333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":1068.3333333333333}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 4449,
            "unit": "Milliseconds",
            "range": "stdev: 679.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":4449.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 2540.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 672.3333333333334",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":132.0,\"totalTime\":2672.6666666666665}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1473,
            "unit": "Milliseconds",
            "range": "stdev: 12700.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":68.66666666666667,\"totalTime\":1541.6666666666667}"
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
          "id": "c65d9bd21467d76f98c5f5ccf8b3d8a5a4870ed3",
          "message": "Tune behavior of github-action-benchmark",
          "timestamp": "2022-01-09T19:22:35+01:00",
          "tree_id": "6f40a4e1454214674421c95c8b9775158a7d146e",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/c65d9bd21467d76f98c5f5ccf8b3d8a5a4870ed3"
        },
        "date": 1641752900464,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 3237,
            "unit": "Milliseconds",
            "range": "stdev: 4239.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":3237.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1455.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 706.3333333333334",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":1455.6666666666667}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 5672.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 2266.3333333333335",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":5672.333333333333}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 3197,
            "unit": "Milliseconds",
            "range": "stdev: 32908.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":172.66666666666666,\"totalTime\":3369.6666666666665}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1829,
            "unit": "Milliseconds",
            "range": "stdev: 2647.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":83.0,\"totalTime\":1912.0}"
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
          "id": "df345395eb5cf2cf09d98a38d543e31e8f648f99",
          "message": "Add benchmark framework (#4)\n\nThis patch adds a benchmark package (TraceDebuggerBenchmarks) for different time-critical components of the TraceDebugger. The benchmarks are arranged in subclasses of TDBBenchmark which has a similar design to SUnit's TestCase. All benchmarks are automatically run on the CI via an SUnit adapter TDBBenchmarkRunner that is run in a second smalltalkCI job via GitHub Actions. The benchmark-action/github-action-benchmark action is used to automatically store benchmark results on the gh-pages-benchmarks branch, analyze any performance decreases, and notify the author via commit comment. The TDBBenchmarkRunner also provides two more faculties: fetch and display historic benchmark results right in Squeak (TDBBenchmarkRunner exploreHistoricTimesToRun) and run the benchmark suite against historic commits (see the bulk running protocol).\r\n\r\nThe automatic benchmarks dashboard can be retrieved here:\r\n\r\nhttps://LinqLover.github.io/squeak-tracedebugger/dev/bench/",
          "timestamp": "2022-01-09T18:28:26Z",
          "tree_id": "6f40a4e1454214674421c95c8b9775158a7d146e",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/df345395eb5cf2cf09d98a38d543e31e8f648f99"
        },
        "date": 1641753229617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2573,
            "unit": "Milliseconds",
            "range": "stdev: 975.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":2573.0}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1069.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 272.3333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":1069.6666666666667}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 4521.666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 2885.3333333333335",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":4521.666666666667}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 2569.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 956.3333333333334",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":134.0,\"totalTime\":2703.3333333333335}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1418.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 36.333333333333336",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":64.66666666666667,\"totalTime\":1483.3333333333333}"
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
          "id": "e2e40bb817c425efde0cc3ef874b4d73f9e831ea",
          "message": "Revert merge errors from 1f9f4c31ceacd0db6f04f8ccc78e047ba11e1610",
          "timestamp": "2022-01-09T19:35:42Z",
          "tree_id": "e978ac5e70e324dc7f1c7d82e3d24dc22b6d79fe",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/e2e40bb817c425efde0cc3ef874b4d73f9e831ea"
        },
        "date": 1641757346812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2701.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 1336.3333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":2701.6666666666665}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1058.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 530.3333333333334",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":1058.3333333333333}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 4571.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 14506.333333333334",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":4571.333333333333}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 3615,
            "unit": "Milliseconds",
            "range": "stdev: 5332.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":3615.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 2714,
            "unit": "Milliseconds",
            "range": "stdev: 2044.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":2714.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 2612.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 422.3333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":187.66666666666666,\"totalTime\":2800.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 11302.333333333334,
            "unit": "Milliseconds",
            "range": "stdev: 47134.333333333336",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":86.33333333333333,\"totalTime\":11388.666666666666}"
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
          "id": "6e3d1fc8dbd9384878c46a3a7da97603ef5b06f3",
          "message": "Integrate benchmarks into Tools (icons & menu items)",
          "timestamp": "2022-01-09T20:42:55+01:00",
          "tree_id": "862fbb2ab5b6402c995a0d4e0db60cacb61c106c",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/6e3d1fc8dbd9384878c46a3a7da97603ef5b06f3"
        },
        "date": 1641757728210,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2907.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 1161.3333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":2907.6666666666665}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1248.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 100.33333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.3333333333333333,\"totalTime\":1248.6666666666667}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 5116.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 38146.333333333336",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":5116.333333333333}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 2960.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 7464.333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":152.0,\"totalTime\":3112.3333333333335}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1586.6666666666667,
            "unit": "Milliseconds",
            "range": "stdev: 3300.3333333333335",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":81.66666666666667,\"totalTime\":1668.3333333333333}"
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
          "id": "eb78edc7deba53db6bdd07cbcf5ef984c3896361",
          "message": "Merge pull request #6 from LinqLover/benchmarks-tools\n\nIntegrate benchmarks into Tools (icons & menu items)",
          "timestamp": "2022-01-09T20:48:53+01:00",
          "tree_id": "862fbb2ab5b6402c995a0d4e0db60cacb61c106c",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/eb78edc7deba53db6bdd07cbcf5ef984c3896361"
        },
        "date": 1641758049960,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 2557.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 472.3333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":2557.6666666666665}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1060.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 257.3333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":1060.3333333333333}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 4499.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 1424.3333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":4499.333333333333}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 2465.3333333333335,
            "unit": "Milliseconds",
            "range": "stdev: 13456.333333333334",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":131.33333333333334,\"totalTime\":2596.6666666666665}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 1474.3333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 11742.333333333334",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":67.66666666666667,\"totalTime\":1542.0}"
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
          "id": "b5147cdce8859d8330691a8c20bae5d7353836bb",
          "message": "Merge branch 'main' into memory-trace",
          "timestamp": "2022-01-09T20:49:25+01:00",
          "tree_id": "071153eae7f1ea73e6cfe00a9c9d7ba1d1e7018e",
          "url": "https://github.com/LinqLover/squeak-tracedebugger/commit/b5147cdce8859d8330691a8c20bae5d7353836bb"
        },
        "date": 1641758175039,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchFactorial",
            "value": 3363.6666666666665,
            "unit": "Milliseconds",
            "range": "stdev: 2124.3333333333335",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":3363.6666666666665}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchProxyImageForm",
            "value": 1401,
            "unit": "Milliseconds",
            "range": "stdev: 19.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.3333333333333333,\"totalTime\":1401.3333333333333}"
          },
          {
            "name": "TDBRetracingSimulatorBenchmark>>#benchRegex",
            "value": 5705.333333333333,
            "unit": "Milliseconds",
            "range": "stdev: 1905.3333333333333",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":5705.333333333333}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchFactorial",
            "value": 4566,
            "unit": "Milliseconds",
            "range": "stdev: 11137.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":4566.0}"
          },
          {
            "name": "TDBTracingSimulatorBenchmark>>#benchRegex",
            "value": 3536,
            "unit": "Milliseconds",
            "range": "stdev: 5616.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":0.0,\"totalTime\":3536.0}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchExpandAll",
            "value": 3227,
            "unit": "Milliseconds",
            "range": "stdev: 1267.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":230.66666666666666,\"totalTime\":3457.6666666666665}"
          },
          {
            "name": "TraceDebuggerBenchmark>>#benchStepOver",
            "value": 12892,
            "unit": "Milliseconds",
            "range": "stdev: 7891.0",
            "extra": "{\"postparationTime\":0.0,\"preparationTime\":113.66666666666667,\"totalTime\":13005.666666666666}"
          }
        ]
      }
    ]
  }
}