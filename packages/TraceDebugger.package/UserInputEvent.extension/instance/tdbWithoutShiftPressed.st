*TraceDebugger-UI-copying
tdbWithoutShiftPressed

	^ super tdbWithoutShiftPressed
		instVarNamed: 'buttons' put: (self buttons bitClear: (2r0001 "shift" bitShift: MouseEvent numButtons));
		yourself