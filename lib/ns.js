/**
 * Namespace (ns) function v0.1
 * ns.js is a small javascript function based in Yahoo.Namespace for creating
 * namespaces. Totaly framework independent.
 * 
 * Released under the MIT License.
 * http://www.opensource.org/licenses/mit-license.html
 *
 * Date: Sat Oct 16 05:15:48 2010 -0500
 */
var ns = function() {
    var a = arguments, o = null, i, j, d;
    
    for (i = 0; i < a.length; i = i + 1) {
        d = a[i].split(".");
        o = window;
        
        for (j = 0; j < d.length; j = j + 1) {
            o[d[j]] = o[d[j]] || {};
            o = o[d[j]];
        }
    }
    
    return o; 
};