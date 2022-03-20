running
createObjectWithHandlerContext

	^ TDBContextTest new contextWithHandler: [:ex | self fail]