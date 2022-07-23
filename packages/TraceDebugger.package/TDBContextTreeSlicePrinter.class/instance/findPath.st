building
findPath
	"Answer the full path from the context tree slice up to the specified root, including the path of the original slice."

	^ self findPathIfShort: [#()]