accessing - code pane
emptyContents

	^ 'Carpe Squeak! To learn more about the {1}, {2}' asText format:
		{self appName.
		'check out the tutorial.' tdbAsTextWithAttribute: (PluggableTextAttribute evalBlock: [self showHelp])}