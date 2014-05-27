js-ppwcode-enumeration-demo
===========================

Getting started
---------------
This project is defined  with submodules.
To download the submodules, use the literal git commands:

    > git submodule init
    > git submodule update

This will download all needed submodules into `src/lib/`.




Structure
---------
The main project files, with their associated tests, are located in
the `src/app` directory.

The `src/app/viewmodel` defines the enumeration that is demoed.

The `src/app/widget` contains some widgets to visualize
the enumeration in the demo application.

The `src/app/_test` contains the unit test configuration and 
 starting point.




Tests
-----
### DOH
When the submodules are downloaded, the DOH tests should work out 
of the box when you navigate your browser to
`src/app/_test/runTest.html`.
Make sure to run the tests on a web server.




Demo application
----------------
You can open de demo application by opening `src/index.html` in a 
browser. Make sure to run it on a web server.