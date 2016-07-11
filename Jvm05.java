/**
 * Java Virtual Machine An Abstract Computer On Which All Java Programs Run.Lets Start With Java Native Interface.Allow Java Code To Interoperated With
 * Application & Libraries Written In Other Language(Likely C,C++,Assembly) Using Native Programming Interface.Jni Does Not Impose Any Restriction On The
 * Implementation Of The Underlying Java Virtual Machine.Implementation Of The Underlying Java Virtual Machine Might Be On C Or C++.Vm Vendor Can Add Support
 * For Jni Without Affecting Jvm Features.Reason For Usage For Jni:Standard Java Library Does Not Provide Platform Dependent Features;Reusing Existing Library
 * In Different Language,Can Be Accessible Through Jni;Implement Time Critical Code In Assembly & Use(Invoke) Via Jni.Java Virtual(Abstract Computer Defined By
 * Specification) Machine.Running A Program We Need Concrete Implementation Of The Abstract Specification.1)Abstract Specification,2)Concrete
 * Implementation,3)Runtime Instance.Each Java Application Runs Inside A Runtime Instance Of Some Concrete Implementation Of The Abstract Specification Of The
 * Java Virtual Machine.Threads Come In 2 Type:Daemon((Jvm Will Terminate Even Daemon Threads Are Not Finished But All NonDaemon Thread Terminated),Non-Daemon
 * Type(Jvm Will Not Terminate Until Non Daemon Thread Finished).
 */
