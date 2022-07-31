accessing - toolbuilder
emptyDetailsText

	^ 'Carpe Squeak! To learn more about the history explorer, {1}' asText format:
		{'check out the tutorial.' tdbAsTextWithAttribute: (PluggableTextAttribute evalBlock: [self showHelp])}