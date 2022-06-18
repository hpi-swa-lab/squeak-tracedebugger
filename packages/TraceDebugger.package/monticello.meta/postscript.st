(PackageInfo named: 'TraceDebugger') postscript: '"Fix TDBContextProxy after updating definition of TDBProxy"
TDBContextProxy instSize < TDBProxy instSize ifTrue:
	["Historically (<= 2022-06-18), recompiling TDBProxy would raise an error while converting all instances via ClassDescription>>#newInstanceFrom:variable:size:map: because #instVarAt:[put:] are forwarded by the proxy. MCPackageLoader>>#basicLoad would then abort the class mutation and retry it later, but due to the retrial, updating of subclass TDBContextProxy was forgotten. In newer revisions, we have overridden #newInstanceFrom:variable:size:map: on TDBProxy class, and here, we fix the class format manually. This is only required after an update of the package. See https://github.com/squeak-smalltalk/squeak-object-memory/issues/46 for more information on this issue."
	TDBProxy addSubclass: TDBContextProxy.
	ClassBuilder new recompile: true from: TDBProxy to: TDBProxy mutate: true.
	self assert: TDBContextProxy instSize >= TDBProxy instSize].'!
