accessing
inspector: originalInspector

	"Allow for monkey-patching the behavior of the original inspector."
	inspector ifNotNil: [inspector removeDependent: self].
	originalInspector ifNotNil: [originalInspector addDependent: self].
	
	inspector := originalInspector.