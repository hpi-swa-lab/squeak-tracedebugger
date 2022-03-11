accessing
propertiesAndNames

	^ OrderedDictionary new
		at: #package put: #('package' 'packages');
		at: #systemCategory put: #('system category' 'system categories');
		at: #methodClass put: #('method class' 'method classes');
		at: #methodClassHierarchy put: #('method class hierarchy' 'method class hierarchies');
		at: #receiverClass put: #('receiver class' 'receiver classes');
		at: #messageCategory put: #('message category' 'message categories');
		at: #selector put: #('message' 'messages');
		yourself