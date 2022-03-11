toolbuilder
buildCodePaneWith: aBuilder

	^ (self inspector buildCodePaneWith: aBuilder)
		model: self; "for monkey-patching the behavior of the original inspector"
		yourself