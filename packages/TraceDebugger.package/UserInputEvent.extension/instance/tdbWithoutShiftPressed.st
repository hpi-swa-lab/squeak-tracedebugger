*TraceDebugger-UI-copying
tdbWithoutShiftPressed

	^ self copy
		instVarNamed: 'buttons' put: (self buttons bitClear: (2r0001 "shift" bitShift: MouseEvent numButtons));
		yourself