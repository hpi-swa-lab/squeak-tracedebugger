accessing
contents
	"Overridden to re-wrap the represented items in TDBProxy instances."

	^ [| contents |
	contents := self object explorerContents.
	contents tdbproxyYourself
		do: [:wrapper | wrapper parent: self];
		do: [:wrapper |
			wrapper changeClassTo: self class. "Use our custom explorer wrapper for subitems, too."
			wrapper item value: (contents in: [:proxy | wrapper item value "reproxy"])];
		yourself]
			ifError: [:msg | {self class forError: msg}]