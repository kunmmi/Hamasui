/*! This file is auto-generated */ ! function() {
    "use strict";
    var e = {
            d: function(n, t) {
                for (var r in t) e.o(t, r) && !e.o(n, r) && Object.defineProperty(n, r, {
                    enumerable: !0,
                    get: t[r]
                })
            },
            o: function(e, n) {
                return Object.prototype.hasOwnProperty.call(e, n)
            },
            r: function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        },
        n = {};
    e.r(n), e.d(n, {
        escapeAmpersand: function() {
            return r
        },
        escapeAttribute: function() {
            return c
        },
        escapeEditableHTML: function() {
            return a
        },
        escapeHTML: function() {
            return i
        },
        escapeLessThan: function() {
            return o
        },
        escapeQuotationMark: function() {
            return u
        },
        isValidAttributeName: function() {
            return f
        }
    });
    const t = /[\u007F-\u009F "'>/="\uFDD0-\uFDEF]/;

    function r(e) {
        return e.replace(/&(?!([a-z0-9]+|#[0-9]+|#x[a-f0-9]+);)/gi, "&amp;")
    }

    function u(e) {
        return e.replace(/"/g, "&quot;")
    }

    function o(e) {
        return e.replace(/</g, "&lt;")
    }

    function c(e) {
        return function(e) {
            return e.replace(/>/g, "&gt;")
        }(u(r(e)))
    }

    function i(e) {
        return o(r(e))
    }

    function a(e) {
        return o(e.replace(/&/g, "&amp;"))
    }

    function f(e) {
        return !t.test(e)
    }(window.wp = window.wp || {}).escapeHtml = n
}();