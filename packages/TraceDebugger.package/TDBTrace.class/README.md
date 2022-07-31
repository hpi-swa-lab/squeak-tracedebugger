I represent the (present or historic) execution of a context. I store the timeInterval in which my context has been alive and all traces of contexts that were activated by my context (children). Via the advancing protocol, I can continue the execution of my context step-by-step.

I am an implementation detail of the tracing infrastructure. Foreign clients should not refer to me directly!