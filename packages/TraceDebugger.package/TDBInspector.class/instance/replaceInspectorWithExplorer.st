forwarding - window
replaceInspectorWithExplorer

	^ self
		decorateView:
			([self inspector replaceInspectorWithExplorer]
				on: Error do: [:ex |
					"Ignore #errorNoSuchElement from last statement in IndentingListItemMorph>>#expand. This is a crazy consequence of the fact that message sends to proxies are isolated, so numerating over all children from #expand will not actually add them to the UI. This patch effectively rewrites the last statement of IndentingListItemMorph>>#expand to the folllowing:
						firstChild := nil."
					(ex signalerContext findContextSuchThat: [:ctx | ctx selector = #errorNoSuchElement]) ifNotNil: [:errorCtx |
						(errorCtx findContextSuchThat: [:ctx | ctx selector = #first]) ifNotNil: [:firstCtx |
							firstCtx sender method asCodeReference = (MethodReference class: IndentingListItemMorph selector: #expand) ifTrue:
							[firstCtx returnEvaluating: nil]]].
					ex pass])
		forObject: self object