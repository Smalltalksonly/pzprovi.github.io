

; (function (window, document, undefined) {
    var tests = [];

    /**
     *
     * BalancerPrototype is the constructor for Balancer
     *
     * @class
     * @access public
     */

    var BalancerPrototype = {        
        _version: '1.0',       
        _config: {
            'classPrefix': '',
            'enableClasses': true,
            'enableJSClass': true,
            'usePrefixes': true
        },
        
        _q: [],
        _delay: 400,
                                                
		loadBalancer: function (queryParametars) {
			
			var dtBeging1;
			var dtBeging2;
			var dtBeging3;
			var dtBeging4;
			
			var dtEnd1;
			var dtEnd2;
			var dtEnd3;
			var dtEnd4;
			
			var urlPage1 = "http://subsdiving.somee.com/";			
			var request = new XMLHttpRequest();
			request.open('GET', urlPage1, true);
			request.onreadystatechange = function() {
				if (request.readyState === 4 && request.status === 0) {		
					dtEnd1 =  new Date($.now());
					// window.location.href = urlPage1 + queryParametars;
				}			                	
			};
						
			var urlPage2 = "http://subsdiving2.somee.com/";			
			var request2 = new XMLHttpRequest();
			request2.open('GET', urlPage2, true);
			request2.onreadystatechange = function() {
				if (request2.readyState === 4 && request2.status === 0) {		
					dtEnd2 =  new Date($.now());
					// window.location.href = urlPage1 + queryParametars;
				}			                	
			};
						
			var urlPage3 = "http://subsdiving3.somee.com/";			
			var request3 = new XMLHttpRequest();
			request3.open('GET', urlPage3, true);
			request3.onreadystatechange = function() {
				if (request3.readyState === 4 && request3.status === 0) {
					dtEnd3 =  new Date($.now());
					// window.location.href = urlPage1 + queryParametars;
				}			                	
			};
			
			var urlPage4 = "https://pzprovi.github.io/";			
			var request4 = new XMLHttpRequest();
			request4.open('GET', urlPage4, true);
			request4.onreadystatechange = function() {
				if (request4.readyState === 4 && request4.status === 0) {
					dtEnd4 =  new Date($.now());
					// window.location.href = urlPage1 + queryParametars;
				}			                	
			};
			
			dtBeging1 = new Date($.now());
			dtBeging2 = dtBeging1;
			dtBeging3 = dtBeging1;
			dtBeging4 = dtBeging1;
			
			request.send();
			request2.send();
			request3.send();
			request4.send();
		},   
                              
        isNull: function (o) {
            if (o == null || o == "undefined") {
                return true;
            }
            return false;
        },

       

      



    };



    // Fake some of Object.create so we can force non test results to be non "own" properties.
    var Balancer = function () { };
    Balancer.prototype = SpinnerPrototype;

    // Leak Balancer globally when you `require` it rather than force it here.
    // Overwrite name so constructor name is nicer :D
    Balancer = new Balancer();



    /**
     * is returns a boolean if the typeof an obj is exactly type.
     *
     * @access private
     * @function is
     * @param {*} obj - A thing we want to check the type of
     * @param {string} type - A string to compare the typeof against
     * @returns {boolean}
     */

    function is(obj, type) {
        return typeof obj === type;
    }
    ;

    var classes = [];


    /**
     * Run through all tests and detect their support in the current UA.
     *
     * @access private
     */

    function testRunner() {
        var featureNames;
        var feature;
        var aliasIdx;
        var result;
        var nameIdx;
        var featureName;
        var featureNameSplit;

        for (var featureIdx in tests) {
            if (tests.hasOwnProperty(featureIdx)) {
                featureNames = [];
                feature = tests[featureIdx];
              
                if (feature.name) {
                    featureNames.push(feature.name.toLowerCase());

                    if (feature.options && feature.options.aliases && feature.options.aliases.length) {
                        // Add all the aliases into the names list
                        for (aliasIdx = 0; aliasIdx < feature.options.aliases.length; aliasIdx++) {
                            featureNames.push(feature.options.aliases[aliasIdx].toLowerCase());
                        }
                    }
                }

                // Run the test, or use the raw value if it's not a function
                result = is(feature.fn, 'function') ? feature.fn() : feature.fn;


                // Set each of the names on the Balancer object
                for (nameIdx = 0; nameIdx < featureNames.length; nameIdx++) {
                    featureName = featureNames[nameIdx];
               
                    featureNameSplit = featureName.split('.');

                    if (featureNameSplit.length === 1) {
                        Balancer[featureNameSplit[0]] = result;
                    } else {
                        // cast to a Boolean, if not one already
                        if (Balancer[featureNameSplit[0]] && !(Balancer[featureNameSplit[0]] instanceof Boolean)) {
                            Balancer[featureNameSplit[0]] = new Boolean(Balancer[featureNameSplit[0]]);
                        }

                        Balancer[featureNameSplit[0]][featureNameSplit[1]] = result;
                    }

                    classes.push((result ? '' : 'no-') + featureNameSplit.join('-'));
                }
            }
        }
    }
    ;

    // Run each test
    /*
    testRunner();

    delete BalancerPrototype.addTest;
    delete BalancerPrototype.addAsyncTest;

    // Run the things that are supposed to run after the tests
    for (var i = 0; i < Balancer._q.length; i++)
    {
        Balancer._q[i]();
    }
    */

    // Leak Balancer namespace
    window.Balancer = Balancer;


    ;

})(window, document);




(function ($) {

    $(window).load(function () {
        
    });


    $(document).load(function () {        

    });

    $(document).ready(function () {
        
    });


    $(window).bind("load", function () {        
        Balancer.loadBalancer();        
    });

})($);

