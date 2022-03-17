I am just an optimization of my superclass for contexts. I do not contribute any new behavior but accelerate common requests to my underlying context object to avoid expensive simulation.

## Limitations

If the traced code performs a few very special manipulations to the context, such as recompiling its method or forwarding its identity, some of my optimizations will invalidate my answers.