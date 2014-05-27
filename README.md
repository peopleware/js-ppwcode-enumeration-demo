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
`src/app/_test/_doh/runTest.html`.
Make sure to run the tests on a web server.

### Intern
When the submodules are downloaded, the Intern tests should work out 
of the box when you navigate your browser to
`src/app/_test/_intern/runTest.html`.
Make sure to run the tests on a web server.

The tests can also be run using NodeJS.

#### Setup:
* install node on your system from <http://nodejs.org>
* execute in this directory:

    >\> npm install intern --save-dev


This will install the necessary node modules in `./node-modules`.

#### Run
To run the tests, execute the following command in the root 
directory: 

    > node node_modules/intern/client config=src/app/_test/_intern/intern





Demo application
----------------
You can open de demo application by opening `src/index.html` in a 
browser. Make sure to run it on a web server.