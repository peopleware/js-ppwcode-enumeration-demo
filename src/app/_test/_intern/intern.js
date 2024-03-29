// Learn more about configuring this file at <https://github.com/theintern/intern/wiki/Configuring-Intern>.
// These default settings work OK for most people. The options that *must* be changed below are the
// packages, suites, excludeInstrumentation, and (if you want functional tests) functionalSuites.
//noinspection MagicNumberJS
define({
	// The port on which the instrumenting proxy will listen
	proxyPort: 9000,

	// A fully qualified URL to the Intern proxy
	proxyUrl: "http://localhost:9000/",

	// Default desired capabilities for all environments. Individual capabilities can be overridden by any of the
	// specified browser environments in the `environments` array below as well. See
	// https://code.google.com/p/selenium/wiki/DesiredCapabilities for standard Selenium capabilities and
	// https://saucelabs.com/docs/additional-config#desired-capabilities for Sauce Labs capabilities.
	// Note that the `build` capability will be filled in with the current commit ID from the Travis CI environment
	// automatically
	capabilities: {
		"selenium-version": "2.39.0"
	},

	// Browsers to run integration testing against. Note that version numbers must be strings if used with Sauce
	// OnDemand. Options that will be permutated are browserName, version, platform, and platformVersion; any other
	// capabilities options specified for an environment will be copied as-is
	environments: [
		{
      browserName: "chrome",
      version: "33",
      platform: ["Windows 8.1", "Windows 8", "Windows 7", "OS X 10.9", "OS X 10.8", "Linux"]
    },
    {
      browserName: "internet explorer",
      version: "11",
      platform: ["Windows 8.1", "Windows 7"]
    },
    {
      browserName: "internet explorer",
      version: "10",
      platform: ["Windows 8", "Windows 7"]
    },
    {
      browserName: "internet explorer",
      version: "9",
      platform: ["Windows 7"]
    },
    {
      browserName: "firefox",
      version: "28",
      platform: [/*"Windows 8.1", "Windows 8", "Windows 7",*/ "OS X 10.9", "OS X 10.6", "Linux"]
    },
    {
      browserName: "iphone",
      version: "7.1",
      platform: ["OS X 10.9"]
    },
    {
      browserName: "ipad",
      version: "7.1",
      platform: ["OS X 10.9"]
    },
    {
      browserName: "android",
      version: "4.3",
      platform: ["Linux"],
      "device-type": "tablet"
    },
    {
      browserName: "android",
      version: "4.3",
      platform: ["Linux"]
    }
	],

	// Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
	maxConcurrency: 2,

	// Whether or not to start Sauce Connect before running tests
	useSauceConnect: true,

	// Connection information for the remote WebDriver service. If using Sauce Labs, keep your username and password
	// in the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables unless you are sure you will NEVER be
	// publishing this configuration file somewhere
	webdriver: {
		host: "localhost",
		port: 4444
	},

	// The desired AMD loader to use when running unit tests (client.html/client.js). Omit to use the default Dojo
	// loader
	useLoader: {
//		"host-node": "dojo/dojo",
//		"host-browser": "../../lib/dojo/dojo/dojo"
	},

	// Configuration options for the module loader; any AMD configuration options supported by the specified AMD loader
	// can be used here
	loader: {
		// Packages that should be registered with the loader in each testing environment
    // The default baseUrl on Node.js is process.cwd(), and in the browser is internDir + '../../'.
    // process.cwd() should be the root of the project (i.e., ../../../.. of this file).
		packages: [
      {name: "ppwcode-vernacular-semantics", location: "src/lib/js-ppwcode-vernacular-semantics"},
      {name: "dojo",                         location: "src/lib/dojo/dojo"},
      {name: "demo",                         location: "src/app"}
    ]
	},

	// Non-functional test suite(s) to run in each browser
	suites: ["src/app/_test/_intern/all"],

	// Functional test suite(s) to run in each browser once non-functional tests are completed
	functionalSuites: [ /* "myPackage/tests/functional" */ ],

	// A regular expression matching URLs to files that should not be included in code coverage analysis
	excludeInstrumentation: /^node_modules\/|^src\/lib\/|^semantics\/_util\/|^src\/app\/_test\//
});
