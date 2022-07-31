toolbuilder
buildSpawnButtonWith: builder

	^ builder pluggableActionButtonSpec new
		model: self;
		label: 'spawn';
		action: #spawn;
		help: 'open a new window on the current history'
		yourself