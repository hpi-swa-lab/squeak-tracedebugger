toolbuilder
buildValuePaneWith: aBuilder

	^ (self inspector buildValuePaneWith: aBuilder)
		model: self; "for monkey-patching the behavior of the original inspector"
		yourself