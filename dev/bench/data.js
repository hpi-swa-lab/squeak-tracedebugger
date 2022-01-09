window.BENCHMARK_DATA = {
  "lastUpdate": 1641741267960,
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
      }
    ]
  }
}