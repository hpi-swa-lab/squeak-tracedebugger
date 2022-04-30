private
coalesce

	^ self coalesce: [:someValue :otherValue | Mirror object: someValue eqeq: otherValue]