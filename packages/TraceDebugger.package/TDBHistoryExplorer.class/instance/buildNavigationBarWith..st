toolbuilder
buildNavigationBarWith: builder

	^ builder pluggablePanelSpec new
		name: #navigationBar;
		layout: #horizontal;
		children:
			(OrderedCollection new
				add:
					(builder pluggableButtonSpec new
						label: '<<';
						help: 'step back over any message sends to the previous change (J)';
						model: self;
						action: #stepBackOver;
						enabled: #canStepBackward;
						horizontalResizing: #rigid;
						yourself);
				add:
					(builder pluggableButtonSpec new
						label: '<';
						help: 'step back into any message send to the previous change (j)';
						model: self;
						action: #stepBackInto;
						enabled: #canStepBackward;
						horizontalResizing: #rigid;
						yourself);
				add:
					(builder tdbPluggableSliderSpec new
						model: self;
						help: 'drag slider to travel through all changes';
						getValue: #sliderIndex;
						setValue: #sliderIndex:;
						minValue: #minimumSliderIndex;
						maxValue: #maximumSliderIndex;
						quantum: 1;
						yourself);
				add:
					(builder pluggableButtonSpec new
						label: '>';
						help: 'step forward into any message send to the next change (k)';
						model: self;
						action: #stepForwardInto;
						enabled: #canStepForward;
						horizontalResizing: #rigid;
						yourself);
				add:
					(builder pluggableButtonSpec new
						label: '>>';
						help: 'step forward over any message sends to the next change (K)';
						model: self;
						action: #stepForwardOver;
						enabled: #canStepForward;
						horizontalResizing: #rigid;
						yourself);
				yourself);
		yourself