labels & details
detailsTextForFormValue: aForm

	^ FormInspector new
		embedForm: aForm
		inText: aForm printString