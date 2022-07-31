support
exportAsAnimatedGIFOn: aStream

	| extent timesAndForms writer index font madeBy minWidth offset |
	self flag: #forLater. "Beautify animations. Make labels, progress bars, delays, and watermark customizable. Could make a nice method object."
	
	timesAndForms := ((self memorySlice timesAndValues associations
		reject: [:timeAndForm | timeAndForm value hasError])
			collect: [:timeAndForm |
				| form |
				form := timeAndForm value result.
				form isForm ifFalse:
					[self error: ('Can only export a history of forms to an animation. [@1] {2} is not a form.' format: {timeAndForm key. form})].
				timeAndForm key -> form copy tdbproxyYourself]).
	extent := (timesAndForms collect: [:timeAndForm | timeAndForm value extent]) max.
	minWidth := 300.
	offset := (minWidth - extent x clampLow: 0) / 2.
	extent := (extent max: (minWidth @ (2 + 2 + 20))) + (0 @ 20).
	
	writer := GIFReadWriter on: aStream.
	writer loopCount: 150.
	font := TextStyle defaultFont.
	madeBy := 'Made with {1}' format: {TraceDebugger appName}.
	index := 0.
	timesAndForms
		do: [:timeAndForm |
			| canvas form time |
			time := timeAndForm key first.
			form := timeAndForm value.
			index := index + 1.
			
			canvas := FormCanvas extent: extent + (0 @ (2 + 20)) depth: 8.
			canvas fillRectangle: (0 @ 0 extent: extent x * (index / timesAndForms size) @ 2) color: Color yellow.
			canvas fillRectangle: (0 @ 2 extent: extent x * (time / cursor maxTimeIndex) @ 2) color: Color white.
			canvas
				drawString: ('{2}' format: {time. (self cursor contextAtTime: time) asString})
				at: 0 @ (2 + 2)
				font: font
				color: Color white.
			
			canvas
				drawImage: form as8BitColorForm
				at: offset @ (2 + 2 + 20).
			
			canvas
				drawString: madeBy
				at: canvas extent - ((font widthOfString: madeBy) @ font height) "right bottom aligned"
				font: nil
				color: Color white.
			
			writer nextPutFrame: (AnimatedImageFrame new
				delay: (index < timesAndForms size ifTrue: [40] ifFalse: [1000]);
				form: canvas form;
				yourself)]
		displayingProgress: 'Exporting animation ...'.