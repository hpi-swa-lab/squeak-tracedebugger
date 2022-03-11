accessing
methodClass

	^ self method methodClass ifNil: [object objectClass: self receiver]