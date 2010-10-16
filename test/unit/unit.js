module("Testing create Namespace.");

test("Test level Namespace created.", function() {
    ok(typeof My == "object", "My is a object.");
    ok(typeof My.Namespace == "object", "My.Namespace is a object.");
});

module("Testing Namespace with Object Literal and New operator.");

test("Object Literal", function() {
    ok(typeof My.Class1 == "object", "My.Class1 a object.");
    ok(typeof My.Class1.init == "function", "Calling a init() function.");
});

test("New operator", function() {
    var myClass = new My.Namespace.Class2();
    
    ok(typeof myClass == "object", "My.Namespace.Class2() is a object");
    ok(typeof myClass.init == "function", "Calling a init() function.");
});