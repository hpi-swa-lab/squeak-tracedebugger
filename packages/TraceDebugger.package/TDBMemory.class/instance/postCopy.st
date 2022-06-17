copying
postCopy

	super postCopy.
	values := values copy replace: [:slots |
		slots copy replace: [:runs |
			runs copy replace: [:run |
				run copy]]].