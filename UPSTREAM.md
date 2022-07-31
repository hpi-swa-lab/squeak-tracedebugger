# Upstream Contributions

While the bulk of the work on this project is documented in this repository, some other parts have also flown into some upstream dependencies of the project:

## [Squeak Trunk](https://source.squeak.org/trunk/)

Widgets and toolbuilding:

- Morphic-ct.1893 (adds optional model hook for do-its, `#evaluateExpression:requestor:`)
- Morphic-ct.1901 (fixes formatting in `PluggableTreeMorph` item labels)
- Morphic-ct.1978 (adds optional model hook for debug-its, `#debugExpression:requestor:`)
- ToolBuilder-Kernel-ct.151 (adds new `#dragType` property for `PluggableTreeSpec`)
- ToolBuilder-Morphic-ct.288 (adds change hook for dynamic `#windowColorToUse`)
- ToolBuilder-Morphic-ct.318 (fixes pane slitters and pane color in `PluggablePanelMorph` and `PluggableSystemWindow` with dynamic children)

Simulation:
- Kernel-ct.1358 (fixes simulation of `ProtoObject>>#doesNotUnderstand:`)
- Kernel-ct.1422 (fixes usage of simulation hook `Context>>#activateMethod:withArgs:receiver:`)

Tools:
- Tools-ct.1086 (fixes `Form` updates in inspectors)
- genericDropSourceCode.cs (makes `#dropSourceCode` mechanism extensible)

## [SimulationStudio](https://github.com/LinqLover/SimulationStudio)

- Added new `Simulator` capabilities (`#context:doSingleRelease:`, `#context:failPrimitiveWith:`) ([LinqLover/SimulationStudio#49](https://github.com/LinqLover/SimulationStudio/pull/49), [LinqLover/SimulationStudio@`b66babc`](https://github.com/LinqLover/SimulationStudio/commit/b66babc3185da3c4cecd16424b1bb3dedd34a464))
- Added new simulation hooks (`Simulator>>#customize:`, `Simulator>>#canSimulateYourself`, `Context>>#isSimulationContext`) ([LinqLover/SimulationStudio#49](https://github.com/LinqLover/SimulationStudio/pull/49), [LinqLover/SimulationStudio#42](https://github.com/LinqLover/SimulationStudio/pull/42), [LinqLover/SimulationStudio@1bb6d66](https://github.com/LinqLover/SimulationStudio/commit/1bb6d66559aedf94edf92cfe177cb129a6140ffc))
- Expanded kernel tests infrastructure ([LinqLover/SimulationStudio#47](https://github.com/LinqLover/SimulationStudio/pull/47))
- General maintenance for alignment with Trunk changes

---

For further aspects that could potentially be contributed upstream (but have not yet), browse all senders of the `#moveUpstream` flag.
