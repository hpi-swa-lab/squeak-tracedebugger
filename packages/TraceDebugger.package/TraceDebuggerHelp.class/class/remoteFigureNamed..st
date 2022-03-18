figures - private
remoteFigureNamed: name

	^ ('<img src="https://github.com/LinqLover/squeak-tracedebugger/blob/gh-pages/screenshots/{1}?raw=true">' format: {name}) asTextFromHtml asMorph imageForm