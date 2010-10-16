ns("My.Namespace");

// objects literal
My.Class1 = {
    init: function() {
        // init function
    }
};

// for new operator
My.Namespace.Class2 = function() {
    // constructor
};

My.Namespace.Class2.prototype.init = function(bar) {
    var foo = bar;
};