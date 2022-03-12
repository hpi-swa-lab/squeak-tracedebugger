*TraceDebugger-UI-copying
tdbWithShiftPressed

	^ self copy
		instVarNamed: 'buttons' put: (self buttons bitOr: (2r0001 "shift" bitShift: MouseEvent numButtons));
		yourself