accessing - code pane
emptyContents

	^ 'Carpe Squeak! To learn more about the TraceDebugger, {1}' asText format:
		{'check out the tutorial.' tdbAsTextWithAttribute: (PluggableTextAttribute evalBlock: [self showHelp])}