*TraceDebugger-UI-copying
tdbWithShiftPressed

	^ super tdbWithShiftPressed
		instVarNamed: 'buttons' put: (self buttons bitOr: (2r0001 "shift" bitShift: MouseEvent numButtons));
		yourself