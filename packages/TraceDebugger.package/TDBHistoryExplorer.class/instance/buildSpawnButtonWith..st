toolbuilder
buildSpawnButtonWith: builder

	^ builder pluggableActionButtonSpec new
		model: self;
		label: 'spawn';
		action: #spawn;
		yourself