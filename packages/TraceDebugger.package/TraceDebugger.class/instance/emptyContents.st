accessing - code pane
emptyContents

	^ 'Carpe Squeak! To learn more about the trace debugger, {1}' asText format:
		{'check out the tutorial.' tdbAsTextWithAttribute: (PluggableTextAttribute evalBlock: [self showHelp])}