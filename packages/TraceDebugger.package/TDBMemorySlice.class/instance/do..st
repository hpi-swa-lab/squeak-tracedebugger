enumerating
do: aBlock

	self shouldNotImplement.
	"When enumerating a memory slice, all evaluations of aBlock will be isolated, hiding all side effects to the rest of the image. Furthermore, the slice may fray out when aBlock accesses further states from the memory. Use #collect: to transform the receiver, or use 'values do:' to discretize the receiver."