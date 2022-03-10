accessing
model: originalModel
	"The wrapped Model instance."

	"Allow for monkey-patching the behavior of the original model."
	self model ifNotNil: [:oldModel | oldModel removeDependent: self].
	originalModel ifNotNil: [originalModel addDependent: self].
	
	self basicModel: originalModel.