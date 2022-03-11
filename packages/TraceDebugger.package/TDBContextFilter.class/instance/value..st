filtering
value: aContext

	excludedPackages ifNotEmpty:
		[(excludedPackages includes: (self getPackage: aContext))
			ifTrue: [^ false]].
	
	excludedSystemCategories ifNotEmpty:
		[(excludedSystemCategories includes: (self getSystemCategory: aContext))
			ifTrue: [^ false]].
	
	excludedMethodClasses ifNotEmpty:
		[(excludedMethodClasses includes: (self getMethodClass: aContext))
			ifTrue: [^ false]].
	
	excludedMethodClassHierarchies ifNotEmpty:
		[| methodClass |
		methodClass := self getMethodClass: aContext.
		(excludedMethodClassHierarchies anySatisfy: [:hiearchy |
			methodClass includesBehavior: hiearchy])
			ifTrue: [^ false]].
	
	excludedReceiverClasses ifNotEmpty:
		[(excludedReceiverClasses includes: (self getReceiverClass: aContext))
			ifTrue: [^ false]].
	
	excludedMessageCategories ifNotEmpty:
		[(excludedMessageCategories includes: (self getMessageCategory: aContext))
			ifTrue: [^ false]].
	
	excludedSelectors ifNotEmpty:
		[(excludedSelectors includes: (self getSelector: aContext))
			ifTrue: [^ false]].
	
	^ true