I am a debugging tool that allows users to trace and retrace programs. I provide a traditional debugging experience as known from the default debugger in Squeak and enhance it with means for back-in-time debugging (aka time-travel debugging). Instead of a simple stack list, I display a call tree for the recorded program trace.

Parts of my implementation are copied (and adjusted) from the default Debugger (regarding the invocation/toolbuilding, process handling, and other aspects). As a subclass of CodeHolder, I also adapt the StringHolder/CodeHolder interface to the TTDBChangesGraph implementation of the observer framework.

To communicate with the tracing engine, I consist of a TDBCursor instance.

My class side provides also means to update the application or send feedback, several preferences, and noticeably, a list of debugging examples.