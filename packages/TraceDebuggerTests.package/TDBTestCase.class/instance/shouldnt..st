asserting
shouldnt: aBlock
	"Documentation only - we use #should: and #shouldnt: to verify assumed preconditions or invariants in our tests (similar to Object >> #assert:), and #assert: and #deny: to test assertions against the substantial parts of the test."

	^ super shouldnt: aBlock