accessing - code pane
emptyContents

	^ 'Carpe Squeak! To learn more about the trace debugger, {1}' asText format:
		{'check out the tutorial.' asText
			addAttribute: (PluggableTextAttribute evalBlock: [self showHelp]);
			yourself}