support
spaceUsed
	"Answer the number of bytes occupied by all traced data."

	^ self rootTrace spaceUsed + self rootTrace memory spaceUsed