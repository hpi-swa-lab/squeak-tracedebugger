toolbuilder
buildTreeWith: builder

	^ builder pluggableTreeSpec new
		model: self;
		nodeClass: self nodeClass;
		roots: #getList;
		keyPress: #explorerKey:from:event:;
		getSelected: #currentSelection;
		setSelected: #currentSelection:;
		setSelectedParent: #currentParent:;
		menu: #genericMenu:;
		dragItem: #getDragItem:;
		autoDeselect: false;
		columns: (ObjectExplorerWrapper showContentsInColumns
			ifTrue: [{
				[:listMorph | (listMorph filteredItems collect: [:item |
					item preferredWidthOfColumn: 1]) max].
				nil "take all the space"}]);
		yourself