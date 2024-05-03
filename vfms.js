(()=>{
    var e, t, n, r, i, o, a, s, l = {
        79720: (e,t,n)=>{
            "use strict";
            n.d(t, {
                e: ()=>a
            });
            var r = n(13466)
              , i = n(72045);
            const o = {
                baseUrl: "https://api.compose.ai/",
                rememberUpgrade: !0
            };
            class a {
                constructor(e, t, n=o) {
                    this.namespace = e,
                    this.onCompletionResponse = t,
                    this.opts = n,
                    this.socket = (0,
                    r.io)(n.baseUrl + e, Object.assign({
                        withCredentials: !0
                    }, n)),
                    this.socket.on("suggestions", (e=>{
                        e && t(e)
                    }
                    ))
                }
                destruct() {
                    this.socket.close()
                }
                updateContext(e, t="") {
                    const n = t + (0,
                    i.Z)()
                      , r = Object.assign(Object.assign({}, e), {
                        requestKey: n,
                        version: 1
                    });
                    return this.socket.volatile.emit("autocomplete", r),
                    n
                }
            }
        }
        ,
        54697: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>v
            });
            var r = n(11526)
              , i = n(46411)
              , o = n(26686)
              , a = n(27563)
              , s = n(20211)
              , l = n(88160)
              , u = n(92190)
              , c = function(e, t, n) {
                for (var r = 0, o = 0; r = o,
                o = (0,
                i.fj)(),
                38 === r && 12 === o && (t[n] = 1),
                !(0,
                i.r)(o); )
                    (0,
                    i.lp)();
                return (0,
                i.tP)(e, i.FK)
            }
              , d = function(e, t) {
                return (0,
                i.cE)(function(e, t) {
                    var n = -1
                      , r = 44;
                    do {
                        switch ((0,
                        i.r)(r)) {
                        case 0:
                            38 === r && 12 === (0,
                            i.fj)() && (t[n] = 1),
                            e[n] += c(i.FK - 1, t, n);
                            break;
                        case 2:
                            e[n] += (0,
                            i.iF)(r);
                            break;
                        case 4:
                            if (44 === r) {
                                e[++n] = 58 === (0,
                                i.fj)() ? "&\f" : "",
                                t[n] = e[n].length;
                                break
                            }
                        default:
                            e[n] += (0,
                            o.Dp)(r)
                        }
                    } while (r = (0,
                    i.lp)());
                    return e
                }((0,
                i.un)(e), t))
            }
              , f = new WeakMap
              , p = function(e) {
                if ("rule" === e.type && e.parent && !(e.length < 1)) {
                    for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line; "rule" !== n.type; )
                        if (!(n = n.parent))
                            return;
                    if ((1 !== e.props.length || 58 === t.charCodeAt(0) || f.get(n)) && !r) {
                        f.set(e, !0);
                        for (var i = [], o = d(t, i), a = n.props, s = 0, l = 0; s < o.length; s++)
                            for (var u = 0; u < a.length; u++,
                            l++)
                                e.props[l] = i[s] ? o[s].replace(/&\f/g, a[u]) : a[u] + " " + o[s]
                    }
                }
            }
              , h = function(e) {
                if ("decl" === e.type) {
                    var t = e.value;
                    108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "",
                    e.value = "")
                }
            };
            function m(e, t) {
                switch ((0,
                o.vp)(e, t)) {
                case 5103:
                    return a.G$ + "print-" + e + e;
                case 5737:
                case 4201:
                case 3177:
                case 3433:
                case 1641:
                case 4457:
                case 2921:
                case 5572:
                case 6356:
                case 5844:
                case 3191:
                case 6645:
                case 3005:
                case 6391:
                case 5879:
                case 5623:
                case 6135:
                case 4599:
                case 4855:
                case 4215:
                case 6389:
                case 5109:
                case 5365:
                case 5621:
                case 3829:
                    return a.G$ + e + e;
                case 5349:
                case 4246:
                case 4810:
                case 6968:
                case 2756:
                    return a.G$ + e + a.uj + e + a.MS + e + e;
                case 6828:
                case 4268:
                    return a.G$ + e + a.MS + e + e;
                case 6165:
                    return a.G$ + e + a.MS + "flex-" + e + e;
                case 5187:
                    return a.G$ + e + (0,
                    o.gx)(e, /(\w+).+(:[^]+)/, a.G$ + "box-$1$2" + a.MS + "flex-$1$2") + e;
                case 5443:
                    return a.G$ + e + a.MS + "flex-item-" + (0,
                    o.gx)(e, /flex-|-self/, "") + e;
                case 4675:
                    return a.G$ + e + a.MS + "flex-line-pack" + (0,
                    o.gx)(e, /align-content|flex-|-self/, "") + e;
                case 5548:
                    return a.G$ + e + a.MS + (0,
                    o.gx)(e, "shrink", "negative") + e;
                case 5292:
                    return a.G$ + e + a.MS + (0,
                    o.gx)(e, "basis", "preferred-size") + e;
                case 6060:
                    return a.G$ + "box-" + (0,
                    o.gx)(e, "-grow", "") + a.G$ + e + a.MS + (0,
                    o.gx)(e, "grow", "positive") + e;
                case 4554:
                    return a.G$ + (0,
                    o.gx)(e, /([^-])(transform)/g, "$1" + a.G$ + "$2") + e;
                case 6187:
                    return (0,
                    o.gx)((0,
                    o.gx)((0,
                    o.gx)(e, /(zoom-|grab)/, a.G$ + "$1"), /(image-set)/, a.G$ + "$1"), e, "") + e;
                case 5495:
                case 3959:
                    return (0,
                    o.gx)(e, /(image-set\([^]*)/, a.G$ + "$1$`$1");
                case 4968:
                    return (0,
                    o.gx)((0,
                    o.gx)(e, /(.+:)(flex-)?(.*)/, a.G$ + "box-pack:$3" + a.MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + a.G$ + e + e;
                case 4095:
                case 3583:
                case 4068:
                case 2532:
                    return (0,
                    o.gx)(e, /(.+)-inline(.+)/, a.G$ + "$1$2") + e;
                case 8116:
                case 7059:
                case 5753:
                case 5535:
                case 5445:
                case 5701:
                case 4933:
                case 4677:
                case 5533:
                case 5789:
                case 5021:
                case 4765:
                    if ((0,
                    o.to)(e) - 1 - t > 6)
                        switch ((0,
                        o.uO)(e, t + 1)) {
                        case 109:
                            if (45 !== (0,
                            o.uO)(e, t + 4))
                                break;
                        case 102:
                            return (0,
                            o.gx)(e, /(.+:)(.+)-([^]+)/, "$1" + a.G$ + "$2-$3$1" + a.uj + (108 == (0,
                            o.uO)(e, t + 3) ? "$3" : "$2-$3")) + e;
                        case 115:
                            return ~(0,
                            o.Cw)(e, "stretch") ? m((0,
                            o.gx)(e, "stretch", "fill-available"), t) + e : e
                        }
                    break;
                case 4949:
                    if (115 !== (0,
                    o.uO)(e, t + 1))
                        break;
                case 6444:
                    switch ((0,
                    o.uO)(e, (0,
                    o.to)(e) - 3 - (~(0,
                    o.Cw)(e, "!important") && 10))) {
                    case 107:
                        return (0,
                        o.gx)(e, ":", ":" + a.G$) + e;
                    case 101:
                        return (0,
                        o.gx)(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + a.G$ + (45 === (0,
                        o.uO)(e, 14) ? "inline-" : "") + "box$3$1" + a.G$ + "$2$3$1" + a.MS + "$2box$3") + e
                    }
                    break;
                case 5936:
                    switch ((0,
                    o.uO)(e, t + 11)) {
                    case 114:
                        return a.G$ + e + a.MS + (0,
                        o.gx)(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                    case 108:
                        return a.G$ + e + a.MS + (0,
                        o.gx)(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                    case 45:
                        return a.G$ + e + a.MS + (0,
                        o.gx)(e, /[svh]\w+-[tblr]{2}/, "lr") + e
                    }
                    return a.G$ + e + a.MS + e + e
                }
                return e
            }
            var g = [function(e, t, n, r) {
                if (e.length > -1 && !e.return)
                    switch (e.type) {
                    case a.h5:
                        e.return = m(e.value, e.length);
                        break;
                    case a.lK:
                        return (0,
                        s.q)([(0,
                        i.JG)(e, {
                            value: (0,
                            o.gx)(e.value, "@", "@" + a.G$)
                        })], r);
                    case a.Fr:
                        if (e.length)
                            return (0,
                            o.$e)(e.props, (function(t) {
                                switch ((0,
                                o.EQ)(t, /(::plac\w+|:read-\w+)/)) {
                                case ":read-only":
                                case ":read-write":
                                    return (0,
                                    s.q)([(0,
                                    i.JG)(e, {
                                        props: [(0,
                                        o.gx)(t, /:(read-\w+)/, ":" + a.uj + "$1")]
                                    })], r);
                                case "::placeholder":
                                    return (0,
                                    s.q)([(0,
                                    i.JG)(e, {
                                        props: [(0,
                                        o.gx)(t, /:(plac\w+)/, ":" + a.G$ + "input-$1")]
                                    }), (0,
                                    i.JG)(e, {
                                        props: [(0,
                                        o.gx)(t, /:(plac\w+)/, ":" + a.uj + "$1")]
                                    }), (0,
                                    i.JG)(e, {
                                        props: [(0,
                                        o.gx)(t, /:(plac\w+)/, a.MS + "input-$1")]
                                    })], r)
                                }
                                return ""
                            }
                            ))
                    }
            }
            ];
            const v = function(e) {
                var t = e.key;
                if ("css" === t) {
                    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
                    Array.prototype.forEach.call(n, (function(e) {
                        -1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e),
                        e.setAttribute("data-s", ""))
                    }
                    ))
                }
                var i = e.stylisPlugins || g;
                var o, a, c = {}, d = [];
                o = e.container || document.head,
                Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function(e) {
                    for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++)
                        c[t[n]] = !0;
                    d.push(e)
                }
                ));
                var f = [p, h];
                var m, v = [s.P, (0,
                l.cD)((function(e) {
                    m.insert(e)
                }
                ))], y = (0,
                l.qR)(f.concat(i, v));
                a = function(e, t, n, r) {
                    var i;
                    m = n,
                    i = e ? e + "{" + t.styles + "}" : t.styles,
                    (0,
                    s.q)((0,
                    u.MY)(i), y),
                    r && (b.inserted[t.name] = !0)
                }
                ;
                var b = {
                    key: t,
                    sheet: new r.m({
                        key: t,
                        container: o,
                        nonce: e.nonce,
                        speedy: e.speedy,
                        prepend: e.prepend,
                        insertionPoint: e.insertionPoint
                    }),
                    nonce: e.nonce,
                    inserted: c,
                    registered: {},
                    insert: a
                };
                return b.sheet.hydrate(d),
                b
            }
        }
        ,
        66292: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>r
            });
            const r = function(e) {
                for (var t, n = 0, r = 0, i = e.length; i >= 4; ++r,
                i -= 4)
                    t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16),
                    n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
                switch (i) {
                case 3:
                    n ^= (255 & e.charCodeAt(r + 2)) << 16;
                case 2:
                    n ^= (255 & e.charCodeAt(r + 1)) << 8;
                case 1:
                    n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16)
                }
                return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
            }
        }
        ,
        71068: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>o
            });
            var r = n(45042)
              , i = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
            const o = (0,
            r.Z)((function(e) {
                return i.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
            }
            ))
        }
        ,
        45042: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>r
            });
            const r = function(e) {
                var t = Object.create(null);
                return function(n) {
                    return void 0 === t[n] && (t[n] = e(n)),
                    t[n]
                }
            }
        }
        ,
        52443: (e,t,n)=>{
            "use strict";
            n.d(t, {
                C: ()=>a,
                T: ()=>l,
                w: ()=>s
            });
            var r = n(67294)
              , i = n(54697)
              , o = (n(30302),
            n(27278),
            (0,
            r.createContext)("undefined" != typeof HTMLElement ? (0,
            i.Z)({
                key: "css"
            }) : null));
            var a = o.Provider
              , s = function(e) {
                return (0,
                r.forwardRef)((function(t, n) {
                    var i = (0,
                    r.useContext)(o);
                    return e(t, i, n)
                }
                ))
            }
              , l = (0,
            r.createContext)({})
        }
        ,
        70917: (e,t,n)=>{
            "use strict";
            n.d(t, {
                F4: ()=>c,
                iv: ()=>u,
                xB: ()=>l
            });
            var r = n(67294)
              , i = (n(54697),
            n(52443))
              , o = (n(8679),
            n(70444))
              , a = n(30302)
              , s = n(27278)
              , l = (0,
            i.w)((function(e, t) {
                var n = e.styles
                  , l = (0,
                a.O)([n], void 0, (0,
                r.useContext)(i.T))
                  , u = (0,
                r.useRef)();
                return (0,
                s.j)((function() {
                    var e = t.key + "-global"
                      , n = new t.sheet.constructor({
                        key: e,
                        nonce: t.sheet.nonce,
                        container: t.sheet.container,
                        speedy: t.sheet.isSpeedy
                    })
                      , r = !1
                      , i = document.querySelector('style[data-emotion="' + e + " " + l.name + '"]');
                    return t.sheet.tags.length && (n.before = t.sheet.tags[0]),
                    null !== i && (r = !0,
                    i.setAttribute("data-emotion", e),
                    n.hydrate([i])),
                    u.current = [n, r],
                    function() {
                        n.flush()
                    }
                }
                ), [t]),
                (0,
                s.j)((function() {
                    var e = u.current
                      , n = e[0];
                    if (e[1])
                        e[1] = !1;
                    else {
                        if (void 0 !== l.next && (0,
                        o.My)(t, l.next, !0),
                        n.tags.length) {
                            var r = n.tags[n.tags.length - 1].nextElementSibling;
                            n.before = r,
                            n.flush()
                        }
                        t.insert("", l, n, !1)
                    }
                }
                ), [t, l.name]),
                null
            }
            ));
            function u() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return (0,
                a.O)(t)
            }
            var c = function() {
                var e = u.apply(void 0, arguments)
                  , t = "animation-" + e.name;
                return {
                    name: t,
                    styles: "@keyframes " + t + "{" + e.styles + "}",
                    anim: 1,
                    toString: function() {
                        return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
                    }
                }
            }
        }
        ,
        30302: (e,t,n)=>{
            "use strict";
            n.d(t, {
                O: ()=>m
            });
            var r = n(66292)
              , i = n(40351)
              , o = n(45042)
              , a = /[A-Z]|^ms/g
              , s = /_EMO_([^_]+?)_([^]*?)_EMO_/g
              , l = function(e) {
                return 45 === e.charCodeAt(1)
            }
              , u = function(e) {
                return null != e && "boolean" != typeof e
            }
              , c = (0,
            o.Z)((function(e) {
                return l(e) ? e : e.replace(a, "-$&").toLowerCase()
            }
            ))
              , d = function(e, t) {
                switch (e) {
                case "animation":
                case "animationName":
                    if ("string" == typeof t)
                        return t.replace(s, (function(e, t, n) {
                            return p = {
                                name: t,
                                styles: n,
                                next: p
                            },
                            t
                        }
                        ))
                }
                return 1 === i.Z[e] || l(e) || "number" != typeof t || 0 === t ? t : t + "px"
            };
            function f(e, t, n) {
                if (null == n)
                    return "";
                if (void 0 !== n.__emotion_styles)
                    return n;
                switch (typeof n) {
                case "boolean":
                    return "";
                case "object":
                    if (1 === n.anim)
                        return p = {
                            name: n.name,
                            styles: n.styles,
                            next: p
                        },
                        n.name;
                    if (void 0 !== n.styles) {
                        var r = n.next;
                        if (void 0 !== r)
                            for (; void 0 !== r; )
                                p = {
                                    name: r.name,
                                    styles: r.styles,
                                    next: p
                                },
                                r = r.next;
                        return n.styles + ";"
                    }
                    return function(e, t, n) {
                        var r = "";
                        if (Array.isArray(n))
                            for (var i = 0; i < n.length; i++)
                                r += f(e, t, n[i]) + ";";
                        else
                            for (var o in n) {
                                var a = n[o];
                                if ("object" != typeof a)
                                    null != t && void 0 !== t[a] ? r += o + "{" + t[a] + "}" : u(a) && (r += c(o) + ":" + d(o, a) + ";");
                                else if (!Array.isArray(a) || "string" != typeof a[0] || null != t && void 0 !== t[a[0]]) {
                                    var s = f(e, t, a);
                                    switch (o) {
                                    case "animation":
                                    case "animationName":
                                        r += c(o) + ":" + s + ";";
                                        break;
                                    default:
                                        r += o + "{" + s + "}"
                                    }
                                } else
                                    for (var l = 0; l < a.length; l++)
                                        u(a[l]) && (r += c(o) + ":" + d(o, a[l]) + ";")
                            }
                        return r
                    }(e, t, n);
                case "function":
                    if (void 0 !== e) {
                        var i = p
                          , o = n(e);
                        return p = i,
                        f(e, t, o)
                    }
                }
                if (null == t)
                    return n;
                var a = t[n];
                return void 0 !== a ? a : n
            }
            var p, h = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
            var m = function(e, t, n) {
                if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles)
                    return e[0];
                var i = !0
                  , o = "";
                p = void 0;
                var a = e[0];
                null == a || void 0 === a.raw ? (i = !1,
                o += f(n, t, a)) : o += a[0];
                for (var s = 1; s < e.length; s++)
                    o += f(n, t, e[s]),
                    i && (o += a[s]);
                h.lastIndex = 0;
                for (var l, u = ""; null !== (l = h.exec(o)); )
                    u += "-" + l[1];
                return {
                    name: (0,
                    r.Z)(o) + u,
                    styles: o,
                    next: p
                }
            }
        }
        ,
        11526: (e,t,n)=>{
            "use strict";
            n.d(t, {
                m: ()=>r
            });
            var r = function() {
                function e(e) {
                    var t = this;
                    this._insertTag = function(e) {
                        var n;
                        n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling,
                        t.container.insertBefore(e, n),
                        t.tags.push(e)
                    }
                    ,
                    this.isSpeedy = void 0 === e.speedy || e.speedy,
                    this.tags = [],
                    this.ctr = 0,
                    this.nonce = e.nonce,
                    this.key = e.key,
                    this.container = e.container,
                    this.prepend = e.prepend,
                    this.insertionPoint = e.insertionPoint,
                    this.before = null
                }
                var t = e.prototype;
                return t.hydrate = function(e) {
                    e.forEach(this._insertTag)
                }
                ,
                t.insert = function(e) {
                    this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(e) {
                        var t = document.createElement("style");
                        return t.setAttribute("data-emotion", e.key),
                        void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                        t.appendChild(document.createTextNode("")),
                        t.setAttribute("data-s", ""),
                        t
                    }(this));
                    var t = this.tags[this.tags.length - 1];
                    if (this.isSpeedy) {
                        var n = function(e) {
                            if (e.sheet)
                                return e.sheet;
                            for (var t = 0; t < document.styleSheets.length; t++)
                                if (document.styleSheets[t].ownerNode === e)
                                    return document.styleSheets[t]
                        }(t);
                        try {
                            n.insertRule(e, n.cssRules.length)
                        } catch (e) {
                            0
                        }
                    } else
                        t.appendChild(document.createTextNode(e));
                    this.ctr++
                }
                ,
                t.flush = function() {
                    this.tags.forEach((function(e) {
                        return e.parentNode && e.parentNode.removeChild(e)
                    }
                    )),
                    this.tags = [],
                    this.ctr = 0
                }
                ,
                e
            }()
        }
        ,
        48285: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>r
            });
            const r = function(e) {
                function t(e, r, l, u, f) {
                    for (var p, h, m, g, w, E = 0, x = 0, C = 0, S = 0, k = 0, R = 0, N = m = p = 0, D = 0, j = 0, L = 0, F = 0, U = l.length, B = U - 1, z = "", $ = "", q = "", V = ""; D < U; ) {
                        if (h = l.charCodeAt(D),
                        D === B && 0 !== x + S + C + E && (0 !== x && (h = 47 === x ? 10 : 47),
                        S = C = E = 0,
                        U++,
                        B++),
                        0 === x + S + C + E) {
                            if (D === B && (0 < j && (z = z.replace(d, "")),
                            0 < z.trim().length)) {
                                switch (h) {
                                case 32:
                                case 9:
                                case 59:
                                case 13:
                                case 10:
                                    break;
                                default:
                                    z += l.charAt(D)
                                }
                                h = 59
                            }
                            switch (h) {
                            case 123:
                                for (p = (z = z.trim()).charCodeAt(0),
                                m = 1,
                                F = ++D; D < U; ) {
                                    switch (h = l.charCodeAt(D)) {
                                    case 123:
                                        m++;
                                        break;
                                    case 125:
                                        m--;
                                        break;
                                    case 47:
                                        switch (h = l.charCodeAt(D + 1)) {
                                        case 42:
                                        case 47:
                                            e: {
                                                for (N = D + 1; N < B; ++N)
                                                    switch (l.charCodeAt(N)) {
                                                    case 47:
                                                        if (42 === h && 42 === l.charCodeAt(N - 1) && D + 2 !== N) {
                                                            D = N + 1;
                                                            break e
                                                        }
                                                        break;
                                                    case 10:
                                                        if (47 === h) {
                                                            D = N + 1;
                                                            break e
                                                        }
                                                    }
                                                D = N
                                            }
                                        }
                                        break;
                                    case 91:
                                        h++;
                                    case 40:
                                        h++;
                                    case 34:
                                    case 39:
                                        for (; D++ < B && l.charCodeAt(D) !== h; )
                                            ;
                                    }
                                    if (0 === m)
                                        break;
                                    D++
                                }
                                if (m = l.substring(F, D),
                                0 === p && (p = (z = z.replace(c, "").trim()).charCodeAt(0)),
                                64 === p) {
                                    switch (0 < j && (z = z.replace(d, "")),
                                    h = z.charCodeAt(1)) {
                                    case 100:
                                    case 109:
                                    case 115:
                                    case 45:
                                        j = r;
                                        break;
                                    default:
                                        j = P
                                    }
                                    if (F = (m = t(r, j, m, h, f + 1)).length,
                                    0 < M && (w = s(3, m, j = n(P, z, L), r, O, T, F, h, f, u),
                                    z = j.join(""),
                                    void 0 !== w && 0 === (F = (m = w.trim()).length) && (h = 0,
                                    m = "")),
                                    0 < F)
                                        switch (h) {
                                        case 115:
                                            z = z.replace(_, a);
                                        case 100:
                                        case 109:
                                        case 45:
                                            m = z + "{" + m + "}";
                                            break;
                                        case 107:
                                            m = (z = z.replace(v, "$1 $2")) + "{" + m + "}",
                                            m = 1 === A || 2 === A && o("@" + m, 3) ? "@-webkit-" + m + "@" + m : "@" + m;
                                            break;
                                        default:
                                            m = z + m,
                                            112 === u && ($ += m,
                                            m = "")
                                        }
                                    else
                                        m = ""
                                } else
                                    m = t(r, n(r, z, L), m, u, f + 1);
                                q += m,
                                m = L = j = N = p = 0,
                                z = "",
                                h = l.charCodeAt(++D);
                                break;
                            case 125:
                            case 59:
                                if (1 < (F = (z = (0 < j ? z.replace(d, "") : z).trim()).length))
                                    switch (0 === N && (p = z.charCodeAt(0),
                                    45 === p || 96 < p && 123 > p) && (F = (z = z.replace(" ", ":")).length),
                                    0 < M && void 0 !== (w = s(1, z, r, e, O, T, $.length, u, f, u)) && 0 === (F = (z = w.trim()).length) && (z = "\0\0"),
                                    p = z.charCodeAt(0),
                                    h = z.charCodeAt(1),
                                    p) {
                                    case 0:
                                        break;
                                    case 64:
                                        if (105 === h || 99 === h) {
                                            V += z + l.charAt(D);
                                            break
                                        }
                                    default:
                                        58 !== z.charCodeAt(F - 1) && ($ += i(z, p, h, z.charCodeAt(2)))
                                    }
                                L = j = N = p = 0,
                                z = "",
                                h = l.charCodeAt(++D)
                            }
                        }
                        switch (h) {
                        case 13:
                        case 10:
                            47 === x ? x = 0 : 0 === 1 + p && 107 !== u && 0 < z.length && (j = 1,
                            z += "\0"),
                            0 < M * Z && s(0, z, r, e, O, T, $.length, u, f, u),
                            T = 1,
                            O++;
                            break;
                        case 59:
                        case 125:
                            if (0 === x + S + C + E) {
                                T++;
                                break
                            }
                        default:
                            switch (T++,
                            g = l.charAt(D),
                            h) {
                            case 9:
                            case 32:
                                if (0 === S + E + x)
                                    switch (k) {
                                    case 44:
                                    case 58:
                                    case 9:
                                    case 32:
                                        g = "";
                                        break;
                                    default:
                                        32 !== h && (g = " ")
                                    }
                                break;
                            case 0:
                                g = "\\0";
                                break;
                            case 12:
                                g = "\\f";
                                break;
                            case 11:
                                g = "\\v";
                                break;
                            case 38:
                                0 === S + x + E && (j = L = 1,
                                g = "\f" + g);
                                break;
                            case 108:
                                if (0 === S + x + E + I && 0 < N)
                                    switch (D - N) {
                                    case 2:
                                        112 === k && 58 === l.charCodeAt(D - 3) && (I = k);
                                    case 8:
                                        111 === R && (I = R)
                                    }
                                break;
                            case 58:
                                0 === S + x + E && (N = D);
                                break;
                            case 44:
                                0 === x + C + S + E && (j = 1,
                                g += "\r");
                                break;
                            case 34:
                            case 39:
                                0 === x && (S = S === h ? 0 : 0 === S ? h : S);
                                break;
                            case 91:
                                0 === S + x + C && E++;
                                break;
                            case 93:
                                0 === S + x + C && E--;
                                break;
                            case 41:
                                0 === S + x + E && C--;
                                break;
                            case 40:
                                if (0 === S + x + E) {
                                    if (0 === p)
                                        if (2 * k + 3 * R == 533)
                                            ;
                                        else
                                            p = 1;
                                    C++
                                }
                                break;
                            case 64:
                                0 === x + C + S + E + N + m && (m = 1);
                                break;
                            case 42:
                            case 47:
                                if (!(0 < S + E + C))
                                    switch (x) {
                                    case 0:
                                        switch (2 * h + 3 * l.charCodeAt(D + 1)) {
                                        case 235:
                                            x = 47;
                                            break;
                                        case 220:
                                            F = D,
                                            x = 42
                                        }
                                        break;
                                    case 42:
                                        47 === h && 42 === k && F + 2 !== D && (33 === l.charCodeAt(F + 2) && ($ += l.substring(F, D + 1)),
                                        g = "",
                                        x = 0)
                                    }
                            }
                            0 === x && (z += g)
                        }
                        R = k,
                        k = h,
                        D++
                    }
                    if (0 < (F = $.length)) {
                        if (j = r,
                        0 < M && (void 0 !== (w = s(2, $, j, e, O, T, F, u, f, u)) && 0 === ($ = w).length))
                            return V + $ + q;
                        if ($ = j.join(",") + "{" + $ + "}",
                        0 != A * I) {
                            switch (2 !== A || o($, 2) || (I = 0),
                            I) {
                            case 111:
                                $ = $.replace(b, ":-moz-$1") + $;
                                break;
                            case 112:
                                $ = $.replace(y, "::-webkit-input-$1") + $.replace(y, "::-moz-$1") + $.replace(y, ":-ms-input-$1") + $
                            }
                            I = 0
                        }
                    }
                    return V + $ + q
                }
                function n(e, t, n) {
                    var i = t.trim().split(m);
                    t = i;
                    var o = i.length
                      , a = e.length;
                    switch (a) {
                    case 0:
                    case 1:
                        var s = 0;
                        for (e = 0 === a ? "" : e[0] + " "; s < o; ++s)
                            t[s] = r(e, t[s], n).trim();
                        break;
                    default:
                        var l = s = 0;
                        for (t = []; s < o; ++s)
                            for (var u = 0; u < a; ++u)
                                t[l++] = r(e[u] + " ", i[s], n).trim()
                    }
                    return t
                }
                function r(e, t, n) {
                    var r = t.charCodeAt(0);
                    switch (33 > r && (r = (t = t.trim()).charCodeAt(0)),
                    r) {
                    case 38:
                        return t.replace(g, "$1" + e.trim());
                    case 58:
                        return e.trim() + t.replace(g, "$1" + e.trim());
                    default:
                        if (0 < 1 * n && 0 < t.indexOf("\f"))
                            return t.replace(g, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
                    }
                    return e + t
                }
                function i(e, t, n, r) {
                    var a = e + ";"
                      , s = 2 * t + 3 * n + 4 * r;
                    if (944 === s) {
                        e = a.indexOf(":", 9) + 1;
                        var l = a.substring(e, a.length - 1).trim();
                        return l = a.substring(0, e).trim() + l + ";",
                        1 === A || 2 === A && o(l, 1) ? "-webkit-" + l + l : l
                    }
                    if (0 === A || 2 === A && !o(a, 1))
                        return a;
                    switch (s) {
                    case 1015:
                        return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
                    case 951:
                        return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
                    case 963:
                        return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
                    case 1009:
                        if (100 !== a.charCodeAt(4))
                            break;
                    case 969:
                    case 942:
                        return "-webkit-" + a + a;
                    case 978:
                        return "-webkit-" + a + "-moz-" + a + a;
                    case 1019:
                    case 983:
                        return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
                    case 883:
                        if (45 === a.charCodeAt(8))
                            return "-webkit-" + a + a;
                        if (0 < a.indexOf("image-set(", 11))
                            return a.replace(k, "$1-webkit-$2") + a;
                        break;
                    case 932:
                        if (45 === a.charCodeAt(4))
                            switch (a.charCodeAt(5)) {
                            case 103:
                                return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
                            case 115:
                                return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
                            case 98:
                                return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a
                            }
                        return "-webkit-" + a + "-ms-" + a + a;
                    case 964:
                        return "-webkit-" + a + "-ms-flex-" + a + a;
                    case 1023:
                        if (99 !== a.charCodeAt(8))
                            break;
                        return "-webkit-box-pack" + (l = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + a + "-ms-flex-pack" + l + a;
                    case 1005:
                        return p.test(a) ? a.replace(f, ":-webkit-") + a.replace(f, ":-moz-") + a : a;
                    case 1e3:
                        switch (t = (l = a.substring(13).trim()).indexOf("-") + 1,
                        l.charCodeAt(0) + l.charCodeAt(t)) {
                        case 226:
                            l = a.replace(w, "tb");
                            break;
                        case 232:
                            l = a.replace(w, "tb-rl");
                            break;
                        case 220:
                            l = a.replace(w, "lr");
                            break;
                        default:
                            return a
                        }
                        return "-webkit-" + a + "-ms-" + l + a;
                    case 1017:
                        if (-1 === a.indexOf("sticky", 9))
                            break;
                    case 975:
                        switch (t = (a = e).length - 10,
                        s = (l = (33 === a.charCodeAt(t) ? a.substring(0, t) : a).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | l.charCodeAt(7))) {
                        case 203:
                            if (111 > l.charCodeAt(8))
                                break;
                        case 115:
                            a = a.replace(l, "-webkit-" + l) + ";" + a;
                            break;
                        case 207:
                        case 102:
                            a = a.replace(l, "-webkit-" + (102 < s ? "inline-" : "") + "box") + ";" + a.replace(l, "-webkit-" + l) + ";" + a.replace(l, "-ms-" + l + "box") + ";" + a
                        }
                        return a + ";";
                    case 938:
                        if (45 === a.charCodeAt(5))
                            switch (a.charCodeAt(6)) {
                            case 105:
                                return l = a.replace("-items", ""),
                                "-webkit-" + a + "-webkit-box-" + l + "-ms-flex-" + l + a;
                            case 115:
                                return "-webkit-" + a + "-ms-flex-item-" + a.replace(x, "") + a;
                            default:
                                return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(x, "") + a
                            }
                        break;
                    case 973:
                    case 989:
                        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4))
                            break;
                    case 931:
                    case 953:
                        if (!0 === S.test(e))
                            return 115 === (l = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? i(e.replace("stretch", "fill-available"), t, n, r).replace(":fill-available", ":stretch") : a.replace(l, "-webkit-" + l) + a.replace(l, "-moz-" + l.replace("fill-", "")) + a;
                        break;
                    case 962:
                        if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a,
                        211 === n + r && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10))
                            return a.substring(0, a.indexOf(";", 27) + 1).replace(h, "$1-webkit-$2") + a
                    }
                    return a
                }
                function o(e, t) {
                    var n = e.indexOf(1 === t ? ":" : "{")
                      , r = e.substring(0, 3 !== t ? n : 10);
                    return n = e.substring(n + 1, e.length - 1),
                    N(2 !== t ? r : r.replace(C, "$1"), n, t)
                }
                function a(e, t) {
                    var n = i(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                    return n !== t + ";" ? n.replace(E, " or ($1)").substring(4) : "(" + t + ")"
                }
                function s(e, t, n, r, i, o, a, s, l, c) {
                    for (var d, f = 0, p = t; f < M; ++f)
                        switch (d = R[f].call(u, e, p, n, r, i, o, a, s, l, c)) {
                        case void 0:
                        case !1:
                        case !0:
                        case null:
                            break;
                        default:
                            p = d
                        }
                    if (p !== t)
                        return p
                }
                function l(e) {
                    return void 0 !== (e = e.prefix) && (N = null,
                    e ? "function" != typeof e ? A = 1 : (A = 2,
                    N = e) : A = 0),
                    l
                }
                function u(e, n) {
                    var r = e;
                    if (33 > r.charCodeAt(0) && (r = r.trim()),
                    r = [r],
                    0 < M) {
                        var i = s(-1, n, r, r, O, T, 0, 0, 0, 0);
                        void 0 !== i && "string" == typeof i && (n = i)
                    }
                    var o = t(P, r, n, 0, 0);
                    return 0 < M && (void 0 !== (i = s(-2, o, r, r, O, T, o.length, 0, 0, 0)) && (o = i)),
                    "",
                    I = 0,
                    T = O = 1,
                    o
                }
                var c = /^\0+/g
                  , d = /[\0\r\f]/g
                  , f = /: */g
                  , p = /zoo|gra/
                  , h = /([,: ])(transform)/g
                  , m = /,\r+?/g
                  , g = /([\t\r\n ])*\f?&/g
                  , v = /@(k\w+)\s*(\S*)\s*/
                  , y = /::(place)/g
                  , b = /:(read-only)/g
                  , w = /[svh]\w+-[tblr]{2}/
                  , _ = /\(\s*(.*)\s*\)/g
                  , E = /([\s\S]*?);/g
                  , x = /-self|flex-/g
                  , C = /[^]*?(:[rp][el]a[\w-]+)[^]*/
                  , S = /stretch|:\s*\w+\-(?:conte|avail)/
                  , k = /([^-])(image-set\()/
                  , T = 1
                  , O = 1
                  , I = 0
                  , A = 1
                  , P = []
                  , R = []
                  , M = 0
                  , N = null
                  , Z = 0;
                return u.use = function e(t) {
                    switch (t) {
                    case void 0:
                    case null:
                        M = R.length = 0;
                        break;
                    default:
                        if ("function" == typeof t)
                            R[M++] = t;
                        else if ("object" == typeof t)
                            for (var n = 0, r = t.length; n < r; ++n)
                                e(t[n]);
                        else
                            Z = 0 | !!t
                    }
                    return e
                }
                ,
                u.set = l,
                void 0 !== e && l(e),
                u
            }
        }
        ,
        40351: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>r
            });
            const r = {
                animationIterationCount: 1,
                borderImageOutset: 1,
                borderImageSlice: 1,
                borderImageWidth: 1,
                boxFlex: 1,
                boxFlexGroup: 1,
                boxOrdinalGroup: 1,
                columnCount: 1,
                columns: 1,
                flex: 1,
                flexGrow: 1,
                flexPositive: 1,
                flexShrink: 1,
                flexNegative: 1,
                flexOrder: 1,
                gridRow: 1,
                gridRowEnd: 1,
                gridRowSpan: 1,
                gridRowStart: 1,
                gridColumn: 1,
                gridColumnEnd: 1,
                gridColumnSpan: 1,
                gridColumnStart: 1,
                msGridRow: 1,
                msGridRowSpan: 1,
                msGridColumn: 1,
                msGridColumnSpan: 1,
                fontWeight: 1,
                lineHeight: 1,
                opacity: 1,
                order: 1,
                orphans: 1,
                tabSize: 1,
                widows: 1,
                zIndex: 1,
                zoom: 1,
                WebkitLineClamp: 1,
                fillOpacity: 1,
                floodOpacity: 1,
                stopOpacity: 1,
                strokeDasharray: 1,
                strokeDashoffset: 1,
                strokeMiterlimit: 1,
                strokeOpacity: 1,
                strokeWidth: 1
            }
        }
        ,
        27278: (e,t,n)=>{
            "use strict";
            var r;
            n.d(t, {
                L: ()=>a,
                j: ()=>s
            });
            var i = n(67294)
              , o = !!(r || (r = n.t(i, 2))).useInsertionEffect && (r || (r = n.t(i, 2))).useInsertionEffect
              , a = o || function(e) {
                return e()
            }
              , s = o || i.useLayoutEffect
        }
        ,
        70444: (e,t,n)=>{
            "use strict";
            n.d(t, {
                My: ()=>o,
                fp: ()=>r,
                hC: ()=>i
            });
            function r(e, t, n) {
                var r = "";
                return n.split(" ").forEach((function(n) {
                    void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " "
                }
                )),
                r
            }
            var i = function(e, t, n) {
                var r = e.key + "-" + t.name;
                !1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles)
            }
              , o = function(e, t, n) {
                i(e, t, n);
                var r = e.key + "-" + t.name;
                if (void 0 === e.inserted[t.name]) {
                    var o = t;
                    do {
                        e.insert(t === o ? "." + r : "", o, e.sheet, !0);
                        o = o.next
                    } while (void 0 !== o)
                }
            }
        }
        ,
        26099: (e,t,n)=>{
            "use strict";
            n.d(t, {
                default: ()=>x
            });
            var r, i, o = n(70655), a = n(44589), s = n(30909), l = n(14594), u = ((r = {})["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
            r["bad-app-name"] = "Illegal App name: '{$appName}",
            r["duplicate-app"] = "Firebase App named '{$appName}' already exists",
            r["app-deleted"] = "Firebase App named '{$appName}' already deleted",
            r["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.",
            r["invalid-log-argument"] = "First argument to `onLog` must be null or a function.",
            r), c = new a.ErrorFactory("app","Firebase",u), d = "@firebase/app", f = "0.6.30", p = "[DEFAULT]", h = ((i = {})[d] = "fire-core",
            i["@firebase/analytics"] = "fire-analytics",
            i["@firebase/app-check"] = "fire-app-check",
            i["@firebase/auth"] = "fire-auth",
            i["@firebase/database"] = "fire-rtdb",
            i["@firebase/functions"] = "fire-fn",
            i["@firebase/installations"] = "fire-iid",
            i["@firebase/messaging"] = "fire-fcm",
            i["@firebase/performance"] = "fire-perf",
            i["@firebase/remote-config"] = "fire-rc",
            i["@firebase/storage"] = "fire-gcs",
            i["@firebase/firestore"] = "fire-fst",
            i["fire-js"] = "fire-js",
            i["firebase-wrapper"] = "fire-js-all",
            i), m = new l.Logger("@firebase/app"), g = function() {
                function e(e, t, n) {
                    var r = this;
                    this.firebase_ = n,
                    this.isDeleted_ = !1,
                    this.name_ = t.name,
                    this.automaticDataCollectionEnabled_ = t.automaticDataCollectionEnabled || !1,
                    this.options_ = (0,
                    a.deepCopy)(e),
                    this.container = new s.ComponentContainer(t.name),
                    this._addComponent(new s.Component("app",(function() {
                        return r
                    }
                    ),"PUBLIC")),
                    this.firebase_.INTERNAL.components.forEach((function(e) {
                        return r._addComponent(e)
                    }
                    ))
                }
                return Object.defineProperty(e.prototype, "automaticDataCollectionEnabled", {
                    get: function() {
                        return this.checkDestroyed_(),
                        this.automaticDataCollectionEnabled_
                    },
                    set: function(e) {
                        this.checkDestroyed_(),
                        this.automaticDataCollectionEnabled_ = e
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "name", {
                    get: function() {
                        return this.checkDestroyed_(),
                        this.name_
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "options", {
                    get: function() {
                        return this.checkDestroyed_(),
                        this.options_
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.delete = function() {
                    var e = this;
                    return new Promise((function(t) {
                        e.checkDestroyed_(),
                        t()
                    }
                    )).then((function() {
                        return e.firebase_.INTERNAL.removeApp(e.name_),
                        Promise.all(e.container.getProviders().map((function(e) {
                            return e.delete()
                        }
                        )))
                    }
                    )).then((function() {
                        e.isDeleted_ = !0
                    }
                    ))
                }
                ,
                e.prototype._getService = function(e, t) {
                    var n;
                    void 0 === t && (t = p),
                    this.checkDestroyed_();
                    var r = this.container.getProvider(e);
                    return r.isInitialized() || "EXPLICIT" !== (null === (n = r.getComponent()) || void 0 === n ? void 0 : n.instantiationMode) || r.initialize(),
                    r.getImmediate({
                        identifier: t
                    })
                }
                ,
                e.prototype._removeServiceInstance = function(e, t) {
                    void 0 === t && (t = p),
                    this.container.getProvider(e).clearInstance(t)
                }
                ,
                e.prototype._addComponent = function(e) {
                    try {
                        this.container.addComponent(e)
                    } catch (t) {
                        m.debug("Component " + e.name + " failed to register with FirebaseApp " + this.name, t)
                    }
                }
                ,
                e.prototype._addOrOverwriteComponent = function(e) {
                    this.container.addOrOverwriteComponent(e)
                }
                ,
                e.prototype.toJSON = function() {
                    return {
                        name: this.name,
                        automaticDataCollectionEnabled: this.automaticDataCollectionEnabled,
                        options: this.options
                    }
                }
                ,
                e.prototype.checkDestroyed_ = function() {
                    if (this.isDeleted_)
                        throw c.create("app-deleted", {
                            appName: this.name_
                        })
                }
                ,
                e
            }();
            g.prototype.name && g.prototype.options || g.prototype.delete || console.log("dc");
            var v = "8.10.0";
            var y = function e() {
                var t = function(e) {
                    var t = {}
                      , n = new Map
                      , r = {
                        __esModule: !0,
                        initializeApp: function(n, i) {
                            void 0 === i && (i = {}),
                            "object" == typeof i && null !== i || (i = {
                                name: i
                            });
                            var o = i;
                            void 0 === o.name && (o.name = p);
                            var s = o.name;
                            if ("string" != typeof s || !s)
                                throw c.create("bad-app-name", {
                                    appName: String(s)
                                });
                            if ((0,
                            a.contains)(t, s))
                                throw c.create("duplicate-app", {
                                    appName: s
                                });
                            var l = new e(n,o,r);
                            return t[s] = l,
                            l
                        },
                        app: i,
                        registerVersion: function(e, t, n) {
                            var r, i = null !== (r = h[e]) && void 0 !== r ? r : e;
                            n && (i += "-" + n);
                            var a = i.match(/\s|\//)
                              , l = t.match(/\s|\//);
                            if (a || l) {
                                var u = ['Unable to register library "' + i + '" with version "' + t + '":'];
                                return a && u.push('library name "' + i + '" contains illegal characters (whitespace or "/")'),
                                a && l && u.push("and"),
                                l && u.push('version name "' + t + '" contains illegal characters (whitespace or "/")'),
                                void m.warn(u.join(" "))
                            }
                            o(new s.Component(i + "-version",(function() {
                                return {
                                    library: i,
                                    version: t
                                }
                            }
                            ),"VERSION"))
                        },
                        setLogLevel: l.setLogLevel,
                        onLog: function(e, t) {
                            if (null !== e && "function" != typeof e)
                                throw c.create("invalid-log-argument");
                            (0,
                            l.setUserLogHandler)(e, t)
                        },
                        apps: null,
                        SDK_VERSION: v,
                        INTERNAL: {
                            registerComponent: o,
                            removeApp: function(e) {
                                delete t[e]
                            },
                            components: n,
                            useAsService: function(e, t) {
                                return "serverAuth" === t ? null : t
                            }
                        }
                    };
                    function i(e) {
                        if (e = e || p,
                        !(0,
                        a.contains)(t, e))
                            throw c.create("no-app", {
                                appName: e
                            });
                        return t[e]
                    }
                    function o(o) {
                        var s = o.name;
                        if (n.has(s))
                            return m.debug("There were multiple attempts to register component " + s + "."),
                            "PUBLIC" === o.type ? r[s] : null;
                        if (n.set(s, o),
                        "PUBLIC" === o.type) {
                            var l = function(e) {
                                if (void 0 === e && (e = i()),
                                "function" != typeof e[s])
                                    throw c.create("invalid-app-argument", {
                                        appName: s
                                    });
                                return e[s]()
                            };
                            void 0 !== o.serviceProps && (0,
                            a.deepExtend)(l, o.serviceProps),
                            r[s] = l,
                            e.prototype[s] = function() {
                                for (var e = [], t = 0; t < arguments.length; t++)
                                    e[t] = arguments[t];
                                return this._getService.bind(this, s).apply(this, o.multipleInstances ? e : [])
                            }
                        }
                        for (var u = 0, d = Object.keys(t); u < d.length; u++) {
                            var f = d[u];
                            t[f]._addComponent(o)
                        }
                        return "PUBLIC" === o.type ? r[s] : null
                    }
                    return r.default = r,
                    Object.defineProperty(r, "apps", {
                        get: function() {
                            return Object.keys(t).map((function(e) {
                                return t[e]
                            }
                            ))
                        }
                    }),
                    i.App = e,
                    r
                }(g);
                return t.INTERNAL = (0,
                o.__assign)((0,
                o.__assign)({}, t.INTERNAL), {
                    createFirebaseNamespace: e,
                    extendNamespace: function(e) {
                        (0,
                        a.deepExtend)(t, e)
                    },
                    createSubscribe: a.createSubscribe,
                    ErrorFactory: a.ErrorFactory,
                    deepExtend: a.deepExtend
                }),
                t
            }()
              , b = function() {
                function e(e) {
                    this.container = e
                }
                return e.prototype.getPlatformInfoString = function() {
                    return this.container.getProviders().map((function(e) {
                        if (function(e) {
                            var t = e.getComponent();
                            return "VERSION" === (null == t ? void 0 : t.type)
                        }(e)) {
                            var t = e.getImmediate();
                            return t.library + "/" + t.version
                        }
                        return null
                    }
                    )).filter((function(e) {
                        return e
                    }
                    )).join(" ")
                }
                ,
                e
            }();
            if ((0,
            a.isBrowser)() && void 0 !== self.firebase) {
                m.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
                var w = self.firebase.SDK_VERSION;
                w && w.indexOf("LITE") >= 0 && m.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")
            }
            var _ = y.initializeApp;
            y.initializeApp = function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                return (0,
                a.isNode)() && m.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '),
                _.apply(void 0, e)
            }
            ;
            var E = y;
            !function(e, t) {
                e.INTERNAL.registerComponent(new s.Component("platform-logger",(function(e) {
                    return new b(e)
                }
                ),"PRIVATE")),
                e.registerVersion(d, f, t),
                e.registerVersion("fire-js", "")
            }(E);
            const x = E
        }
        ,
        78481: (e,t,n)=>{
            "use strict";
            var r = n(26099);
            (function() {
                var e, t = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e, t, n) {
                    e != Array.prototype && e != Object.prototype && (e[t] = n.value)
                }
                ;
                var i = function(e) {
                    e = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof n.g && n.g, e];
                    for (var t = 0; t < e.length; ++t) {
                        var r = e[t];
                        if (r && r.Math == Math)
                            return r
                    }
                    return globalThis
                }(this);
                function o(e) {
                    var t = 0;
                    return function() {
                        return t < e.length ? {
                            done: !1,
                            value: e[t++]
                        } : {
                            done: !0
                        }
                    }
                }
                function a(e) {
                    var t = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
                    return t ? t.call(e) : {
                        next: o(e)
                    }
                }
                !function(e, n) {
                    if (n) {
                        var r = i;
                        e = e.split(".");
                        for (var o = 0; o < e.length - 1; o++) {
                            var a = e[o];
                            a in r || (r[a] = {}),
                            r = r[a]
                        }
                        (n = n(o = r[e = e[e.length - 1]])) != o && null != n && t(r, e, {
                            configurable: !0,
                            writable: !0,
                            value: n
                        })
                    }
                }("Promise", (function(e) {
                    function t(e) {
                        this.b = 0,
                        this.c = void 0,
                        this.a = [];
                        var t = this.f();
                        try {
                            e(t.resolve, t.reject)
                        } catch (e) {
                            t.reject(e)
                        }
                    }
                    function n() {
                        this.a = null
                    }
                    function r(e) {
                        return e instanceof t ? e : new t((function(t) {
                            t(e)
                        }
                        ))
                    }
                    if (e)
                        return e;
                    n.prototype.b = function(e) {
                        if (null == this.a) {
                            this.a = [];
                            var t = this;
                            this.c((function() {
                                t.g()
                            }
                            ))
                        }
                        this.a.push(e)
                    }
                    ;
                    var o = i.setTimeout;
                    n.prototype.c = function(e) {
                        o(e, 0)
                    }
                    ,
                    n.prototype.g = function() {
                        for (; this.a && this.a.length; ) {
                            var e = this.a;
                            this.a = [];
                            for (var t = 0; t < e.length; ++t) {
                                var n = e[t];
                                e[t] = null;
                                try {
                                    n()
                                } catch (e) {
                                    this.f(e)
                                }
                            }
                        }
                        this.a = null
                    }
                    ,
                    n.prototype.f = function(e) {
                        this.c((function() {
                            throw e
                        }
                        ))
                    }
                    ,
                    t.prototype.f = function() {
                        function e(e) {
                            return function(r) {
                                n || (n = !0,
                                e.call(t, r))
                            }
                        }
                        var t = this
                          , n = !1;
                        return {
                            resolve: e(this.m),
                            reject: e(this.g)
                        }
                    }
                    ,
                    t.prototype.m = function(e) {
                        if (e === this)
                            this.g(new TypeError("A Promise cannot resolve to itself"));
                        else if (e instanceof t)
                            this.s(e);
                        else {
                            e: switch (typeof e) {
                            case "object":
                                var n = null != e;
                                break e;
                            case "function":
                                n = !0;
                                break e;
                            default:
                                n = !1
                            }
                            n ? this.v(e) : this.h(e)
                        }
                    }
                    ,
                    t.prototype.v = function(e) {
                        var t = void 0;
                        try {
                            t = e.then
                        } catch (e) {
                            return void this.g(e)
                        }
                        "function" == typeof t ? this.u(t, e) : this.h(e)
                    }
                    ,
                    t.prototype.g = function(e) {
                        this.i(2, e)
                    }
                    ,
                    t.prototype.h = function(e) {
                        this.i(1, e)
                    }
                    ,
                    t.prototype.i = function(e, t) {
                        if (0 != this.b)
                            throw Error("Cannot settle(" + e + ", " + t + "): Promise already settled in state" + this.b);
                        this.b = e,
                        this.c = t,
                        this.l()
                    }
                    ,
                    t.prototype.l = function() {
                        if (null != this.a) {
                            for (var e = 0; e < this.a.length; ++e)
                                s.b(this.a[e]);
                            this.a = null
                        }
                    }
                    ;
                    var s = new n;
                    return t.prototype.s = function(e) {
                        var t = this.f();
                        e.Ra(t.resolve, t.reject)
                    }
                    ,
                    t.prototype.u = function(e, t) {
                        var n = this.f();
                        try {
                            e.call(t, n.resolve, n.reject)
                        } catch (e) {
                            n.reject(e)
                        }
                    }
                    ,
                    t.prototype.then = function(e, n) {
                        function r(e, t) {
                            return "function" == typeof e ? function(t) {
                                try {
                                    i(e(t))
                                } catch (e) {
                                    o(e)
                                }
                            }
                            : t
                        }
                        var i, o, a = new t((function(e, t) {
                            i = e,
                            o = t
                        }
                        ));
                        return this.Ra(r(e, i), r(n, o)),
                        a
                    }
                    ,
                    t.prototype.catch = function(e) {
                        return this.then(void 0, e)
                    }
                    ,
                    t.prototype.Ra = function(e, t) {
                        function n() {
                            switch (r.b) {
                            case 1:
                                e(r.c);
                                break;
                            case 2:
                                t(r.c);
                                break;
                            default:
                                throw Error("Unexpected state: " + r.b)
                            }
                        }
                        var r = this;
                        null == this.a ? s.b(n) : this.a.push(n)
                    }
                    ,
                    t.resolve = r,
                    t.reject = function(e) {
                        return new t((function(t, n) {
                            n(e)
                        }
                        ))
                    }
                    ,
                    t.race = function(e) {
                        return new t((function(t, n) {
                            for (var i = a(e), o = i.next(); !o.done; o = i.next())
                                r(o.value).Ra(t, n)
                        }
                        ))
                    }
                    ,
                    t.all = function(e) {
                        var n = a(e)
                          , i = n.next();
                        return i.done ? r([]) : new t((function(e, t) {
                            function o(t) {
                                return function(n) {
                                    a[t] = n,
                                    0 == --s && e(a)
                                }
                            }
                            var a = []
                              , s = 0;
                            do {
                                a.push(void 0),
                                s++,
                                r(i.value).Ra(o(a.length - 1), t),
                                i = n.next()
                            } while (!i.done)
                        }
                        ))
                    }
                    ,
                    t
                }
                ));
                var s = s || {}
                  , l = this || self
                  , u = /^[\w+/_-]+[=]{0,2}$/
                  , c = null;
                function d(e) {
                    return (e = e.querySelector && e.querySelector("script[nonce]")) && (e = e.nonce || e.getAttribute("nonce")) && u.test(e) ? e : ""
                }
                function f() {}
                function p(e) {
                    var t = typeof e;
                    return "object" != t ? t : e ? Array.isArray(e) ? "array" : t : "null"
                }
                function h(e) {
                    var t = p(e);
                    return "array" == t || "object" == t && "number" == typeof e.length
                }
                function m(e) {
                    return "function" == p(e)
                }
                function g(e) {
                    var t = typeof e;
                    return "object" == t && null != e || "function" == t
                }
                function v(e) {
                    return Object.prototype.hasOwnProperty.call(e, y) && e[y] || (e[y] = ++b)
                }
                var y = "closure_uid_" + (1e9 * Math.random() >>> 0)
                  , b = 0;
                function w(e, t, n) {
                    return e.call.apply(e.bind, arguments)
                }
                function _(e, t, n) {
                    if (!e)
                        throw Error();
                    if (2 < arguments.length) {
                        var r = Array.prototype.slice.call(arguments, 2);
                        return function() {
                            var n = Array.prototype.slice.call(arguments);
                            return Array.prototype.unshift.apply(n, r),
                            e.apply(t, n)
                        }
                    }
                    return function() {
                        return e.apply(t, arguments)
                    }
                }
                function E(e, t, n) {
                    return (E = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? w : _).apply(null, arguments)
                }
                function x(e, t) {
                    var n = Array.prototype.slice.call(arguments, 1);
                    return function() {
                        var t = n.slice();
                        return t.push.apply(t, arguments),
                        e.apply(this, t)
                    }
                }
                var C = Date.now;
                function S(e, t) {
                    function n() {}
                    n.prototype = t.prototype,
                    e.bb = t.prototype,
                    e.prototype = new n,
                    e.prototype.constructor = e
                }
                function k(e) {
                    return e
                }
                function T(e, t, n) {
                    this.code = A + e,
                    this.message = t || P[e] || "",
                    this.a = n || null
                }
                function O(e) {
                    var t = e && e.code;
                    return t ? new T(t.substring(A.length),e.message,e.serverResponse) : null
                }
                S(T, Error),
                T.prototype.w = function() {
                    var e = {
                        code: this.code,
                        message: this.message
                    };
                    return this.a && (e.serverResponse = this.a),
                    e
                }
                ,
                T.prototype.toJSON = function() {
                    return this.w()
                }
                ;
                var I, A = "auth/", P = {
                    "admin-restricted-operation": "This operation is restricted to administrators only.",
                    "argument-error": "",
                    "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
                    "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
                    "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
                    "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
                    "cordova-not-ready": "Cordova framework is not ready.",
                    "cors-unsupported": "This browser is not supported.",
                    "credential-already-in-use": "This credential is already associated with a different user account.",
                    "custom-token-mismatch": "The custom token corresponds to a different audience.",
                    "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
                    "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
                    "email-change-needs-verification": "Multi-factor users must always have a verified email.",
                    "email-already-in-use": "The email address is already in use by another account.",
                    "expired-action-code": "The action code has expired. ",
                    "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
                    "internal-error": "An internal error has occurred.",
                    "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
                    "invalid-app-id": "The mobile app identifier is not registed for the current project.",
                    "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
                    "invalid-auth-event": "An internal error has occurred.",
                    "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
                    "invalid-continue-uri": "The continue URL provided in the request is invalid.",
                    "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
                    "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
                    "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
                    "invalid-email": "The email address is badly formatted.",
                    "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
                    "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
                    "invalid-credential": "The supplied auth credential is malformed or has expired.",
                    "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
                    "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
                    "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
                    "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
                    "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
                    "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
                    "wrong-password": "The password is invalid or the user does not have a password.",
                    "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
                    "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
                    "invalid-provider-id": "The specified provider ID is invalid.",
                    "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
                    "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
                    "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
                    "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
                    "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
                    "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
                    "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
                    "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
                    "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
                    "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
                    "missing-continue-uri": "A continue URL must be provided in the request.",
                    "missing-iframe-start": "An internal error has occurred.",
                    "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
                    "missing-multi-factor-info": "No second factor identifier is provided.",
                    "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
                    "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
                    "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
                    "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
                    "app-deleted": "This instance of FirebaseApp has been deleted.",
                    "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
                    "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
                    "no-auth-event": "An internal error has occurred.",
                    "no-such-provider": "User was not linked to an account with the given provider.",
                    "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
                    "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
                    "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
                    "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
                    "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
                    "provider-already-linked": "User can only be linked to one identity for the given provider.",
                    "quota-exceeded": "The project's quota for this operation has been exceeded.",
                    "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
                    "redirect-operation-pending": "A redirect sign-in operation is already pending.",
                    "rejected-credential": "The request contains malformed or mismatching credentials.",
                    "second-factor-already-in-use": "The second factor is already enrolled on this account.",
                    "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
                    "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
                    timeout: "The operation has timed out.",
                    "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
                    "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
                    "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
                    "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
                    "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
                    "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
                    "unverified-email": "The operation requires a verified email.",
                    "user-cancelled": "The user did not grant your application the permissions it requested.",
                    "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
                    "user-disabled": "The user account has been disabled by an administrator.",
                    "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
                    "user-signed-out": "",
                    "weak-password": "The password must be 6 characters long or more.",
                    "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
                }, R = {
                    ld: {
                        Ua: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                        $a: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                        Xa: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                        id: "b"
                    },
                    sd: {
                        Ua: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                        $a: "https://securetoken.googleapis.com/v1/token",
                        Xa: "https://identitytoolkit.googleapis.com/v2/",
                        id: "p"
                    },
                    ud: {
                        Ua: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
                        $a: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
                        Xa: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/",
                        id: "s"
                    },
                    vd: {
                        Ua: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
                        $a: "https://test-securetoken.sandbox.googleapis.com/v1/token",
                        Xa: "https://test-identitytoolkit.sandbox.googleapis.com/v2/",
                        id: "t"
                    }
                };
                function M(e) {
                    for (var t in R)
                        if (R[t].id === e)
                            return {
                                firebaseEndpoint: (e = R[t]).Ua,
                                secureTokenEndpoint: e.$a,
                                identityPlatformEndpoint: e.Xa
                            };
                    return null
                }
                function N(e) {
                    if (!e)
                        return !1;
                    try {
                        return !!e.$goog_Thenable
                    } catch (e) {
                        return !1
                    }
                }
                function Z(e) {
                    if (Error.captureStackTrace)
                        Error.captureStackTrace(this, Z);
                    else {
                        var t = Error().stack;
                        t && (this.stack = t)
                    }
                    e && (this.message = String(e))
                }
                function D(e, t) {
                    for (var n = "", r = (e = e.split("%s")).length - 1, i = 0; i < r; i++)
                        n += e[i] + (i < t.length ? t[i] : "%s");
                    Z.call(this, n + e[r])
                }
                function j(e, t) {
                    throw new D("Failure" + (e ? ": " + e : ""),Array.prototype.slice.call(arguments, 1))
                }
                function L(e, t) {
                    this.c = e,
                    this.f = t,
                    this.b = 0,
                    this.a = null
                }
                function F(e, t) {
                    e.f(t),
                    100 > e.b && (e.b++,
                    t.next = e.a,
                    e.a = t)
                }
                function U() {
                    this.b = this.a = null
                }
                I = M("__EID__") ? "__EID__" : void 0,
                S(Z, Error),
                Z.prototype.name = "CustomError",
                S(D, Z),
                D.prototype.name = "AssertionError",
                L.prototype.get = function() {
                    if (0 < this.b) {
                        this.b--;
                        var e = this.a;
                        this.a = e.next,
                        e.next = null
                    } else
                        e = this.c();
                    return e
                }
                ;
                var B = new L((function() {
                    return new $
                }
                ),(function(e) {
                    e.reset()
                }
                ));
                function z() {
                    var e = _t
                      , t = null;
                    return e.a && (t = e.a,
                    e.a = e.a.next,
                    e.a || (e.b = null),
                    t.next = null),
                    t
                }
                function $() {
                    this.next = this.b = this.a = null
                }
                U.prototype.add = function(e, t) {
                    var n = B.get();
                    n.set(e, t),
                    this.b ? this.b.next = n : this.a = n,
                    this.b = n
                }
                ,
                $.prototype.set = function(e, t) {
                    this.a = e,
                    this.b = t,
                    this.next = null
                }
                ,
                $.prototype.reset = function() {
                    this.next = this.b = this.a = null
                }
                ;
                var q = Array.prototype.indexOf ? function(e, t) {
                    return Array.prototype.indexOf.call(e, t, void 0)
                }
                : function(e, t) {
                    if ("string" == typeof e)
                        return "string" != typeof t || 1 != t.length ? -1 : e.indexOf(t, 0);
                    for (var n = 0; n < e.length; n++)
                        if (n in e && e[n] === t)
                            return n;
                    return -1
                }
                  , V = Array.prototype.forEach ? function(e, t, n) {
                    Array.prototype.forEach.call(e, t, n)
                }
                : function(e, t, n) {
                    for (var r = e.length, i = "string" == typeof e ? e.split("") : e, o = 0; o < r; o++)
                        o in i && t.call(n, i[o], o, e)
                }
                ;
                var W = Array.prototype.filter ? function(e, t) {
                    return Array.prototype.filter.call(e, t, void 0)
                }
                : function(e, t) {
                    for (var n = e.length, r = [], i = 0, o = "string" == typeof e ? e.split("") : e, a = 0; a < n; a++)
                        if (a in o) {
                            var s = o[a];
                            t.call(void 0, s, a, e) && (r[i++] = s)
                        }
                    return r
                }
                  , H = Array.prototype.map ? function(e, t) {
                    return Array.prototype.map.call(e, t, void 0)
                }
                : function(e, t) {
                    for (var n = e.length, r = Array(n), i = "string" == typeof e ? e.split("") : e, o = 0; o < n; o++)
                        o in i && (r[o] = t.call(void 0, i[o], o, e));
                    return r
                }
                  , G = Array.prototype.some ? function(e, t) {
                    return Array.prototype.some.call(e, t, void 0)
                }
                : function(e, t) {
                    for (var n = e.length, r = "string" == typeof e ? e.split("") : e, i = 0; i < n; i++)
                        if (i in r && t.call(void 0, r[i], i, e))
                            return !0;
                    return !1
                }
                ;
                function K(e, t) {
                    return 0 <= q(e, t)
                }
                function Q(e, t) {
                    var n;
                    return (n = 0 <= (t = q(e, t))) && Array.prototype.splice.call(e, t, 1),
                    n
                }
                function Y(e, t) {
                    !function(e, t) {
                        for (var n = "string" == typeof e ? e.split("") : e, r = e.length - 1; 0 <= r; --r)
                            r in n && t.call(void 0, n[r], r, e)
                    }(e, (function(n, r) {
                        t.call(void 0, n, r, e) && 1 == Array.prototype.splice.call(e, r, 1).length && 0
                    }
                    ))
                }
                function X(e) {
                    return Array.prototype.concat.apply([], arguments)
                }
                function J(e) {
                    var t = e.length;
                    if (0 < t) {
                        for (var n = Array(t), r = 0; r < t; r++)
                            n[r] = e[r];
                        return n
                    }
                    return []
                }
                var ee, te = String.prototype.trim ? function(e) {
                    return e.trim()
                }
                : function(e) {
                    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]
                }
                , ne = /&/g, re = /</g, ie = />/g, oe = /"/g, ae = /'/g, se = /\x00/g, le = /[\x00&<>"']/;
                function ue(e, t) {
                    return -1 != e.indexOf(t)
                }
                function ce(e, t) {
                    return e < t ? -1 : e > t ? 1 : 0
                }
                e: {
                    var de = l.navigator;
                    if (de) {
                        var fe = de.userAgent;
                        if (fe) {
                            ee = fe;
                            break e
                        }
                    }
                    ee = ""
                }
                function pe(e) {
                    return ue(ee, e)
                }
                function he(e, t) {
                    for (var n in e)
                        t.call(void 0, e[n], n, e)
                }
                function me(e) {
                    for (var t in e)
                        return !1;
                    return !0
                }
                function ge(e) {
                    var t, n = {};
                    for (t in e)
                        n[t] = e[t];
                    return n
                }
                var ve = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
                function ye(e, t) {
                    for (var n, r, i = 1; i < arguments.length; i++) {
                        for (n in r = arguments[i])
                            e[n] = r[n];
                        for (var o = 0; o < ve.length; o++)
                            n = ve[o],
                            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                }
                function be(e, t) {
                    e: {
                        try {
                            var n = e && e.ownerDocument
                              , r = n && (n.defaultView || n.parentWindow);
                            if ((r = r || l).Element && r.Location) {
                                var i = r;
                                break e
                            }
                        } catch (e) {}
                        i = null
                    }
                    if (i && void 0 !== i[t] && (!e || !(e instanceof i[t]) && (e instanceof i.Location || e instanceof i.Element))) {
                        if (g(e))
                            try {
                                var o = e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e)
                            } catch (e) {
                                o = "<object could not be stringified>"
                            }
                        else
                            o = void 0 === e ? "undefined" : null === e ? "null" : typeof e;
                        j("Argument is not a %s (or a non-Element, non-Location mock); got: %s", t, o)
                    }
                }
                function we(e, t) {
                    this.a = e === Ce && t || "",
                    this.b = xe
                }
                function _e(e) {
                    return e instanceof we && e.constructor === we && e.b === xe ? e.a : (j("expected object of type Const, got '" + e + "'"),
                    "type_error:Const")
                }
                we.prototype.ta = !0,
                we.prototype.sa = function() {
                    return this.a
                }
                ,
                we.prototype.toString = function() {
                    return "Const{" + this.a + "}"
                }
                ;
                var Ee, xe = {}, Ce = {};
                function Se() {
                    if (void 0 === Ee) {
                        var e = null
                          , t = l.trustedTypes;
                        if (t && t.createPolicy) {
                            try {
                                e = t.createPolicy("goog#html", {
                                    createHTML: k,
                                    createScript: k,
                                    createScriptURL: k
                                })
                            } catch (e) {
                                l.console && l.console.error(e.message)
                            }
                            Ee = e
                        } else
                            Ee = e
                    }
                    return Ee
                }
                function ke(e, t) {
                    this.a = t === Pe ? e : ""
                }
                function Te(e) {
                    return e instanceof ke && e.constructor === ke ? e.a : (j("expected object of type TrustedResourceUrl, got '" + e + "' of type " + p(e)),
                    "type_error:TrustedResourceUrl")
                }
                function Oe(e, t) {
                    var n = _e(e);
                    if (!Ae.test(n))
                        throw Error("Invalid TrustedResourceUrl format: " + n);
                    return function(e) {
                        var t = Se();
                        return e = t ? t.createScriptURL(e) : e,
                        new ke(e,Pe)
                    }(e = n.replace(Ie, (function(e, r) {
                        if (!Object.prototype.hasOwnProperty.call(t, r))
                            throw Error('Found marker, "' + r + '", in format string, "' + n + '", but no valid label mapping found in args: ' + JSON.stringify(t));
                        return (e = t[r])instanceof we ? _e(e) : encodeURIComponent(String(e))
                    }
                    )))
                }
                ke.prototype.ta = !0,
                ke.prototype.sa = function() {
                    return this.a.toString()
                }
                ,
                ke.prototype.toString = function() {
                    return "TrustedResourceUrl{" + this.a + "}"
                }
                ;
                var Ie = /%{(\w+)}/g
                  , Ae = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i
                  , Pe = {};
                function Re(e, t) {
                    this.a = t === Fe ? e : ""
                }
                function Me(e) {
                    return e instanceof Re && e.constructor === Re ? e.a : (j("expected object of type SafeUrl, got '" + e + "' of type " + p(e)),
                    "type_error:SafeUrl")
                }
                Re.prototype.ta = !0,
                Re.prototype.sa = function() {
                    return this.a.toString()
                }
                ,
                Re.prototype.toString = function() {
                    return "SafeUrl{" + this.a + "}"
                }
                ;
                var Ne = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i
                  , Ze = /^data:(.*);base64,[a-z0-9+\/]+=*$/i
                  , De = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
                function je(e) {
                    if (e instanceof Re)
                        return e;
                    if (e = "object" == typeof e && e.ta ? e.sa() : String(e),
                    De.test(e))
                        e = new Re(e,Fe);
                    else {
                        var t = (e = (e = String(e)).replace(/(%0A|%0D)/g, "")).match(Ze);
                        e = t && Ne.test(t[1]) ? new Re(e,Fe) : null
                    }
                    return e
                }
                function Le(e) {
                    return e instanceof Re ? e : (e = "object" == typeof e && e.ta ? e.sa() : String(e),
                    De.test(e) || (e = "about:invalid#zClosurez"),
                    new Re(e,Fe))
                }
                var Fe = {}
                  , Ue = new Re("about:invalid#zClosurez",Fe);
                function Be(e, t, n) {
                    this.a = n === ze ? e : ""
                }
                Be.prototype.ta = !0,
                Be.prototype.sa = function() {
                    return this.a.toString()
                }
                ,
                Be.prototype.toString = function() {
                    return "SafeHtml{" + this.a + "}"
                }
                ;
                var ze = {};
                function $e(e, t, n, r) {
                    return e = e instanceof Re ? e : Le(e),
                    t = t || l,
                    n = n instanceof we ? _e(n) : n || "",
                    t.open(Me(e), n, r, void 0)
                }
                function qe(e, t) {
                    for (var n = e.split("%s"), r = "", i = Array.prototype.slice.call(arguments, 1); i.length && 1 < n.length; )
                        r += n.shift() + i.shift();
                    return r + n.join("%s")
                }
                function Ve(e) {
                    return le.test(e) && (-1 != e.indexOf("&") && (e = e.replace(ne, "&amp;")),
                    -1 != e.indexOf("<") && (e = e.replace(re, "&lt;")),
                    -1 != e.indexOf(">") && (e = e.replace(ie, "&gt;")),
                    -1 != e.indexOf('"') && (e = e.replace(oe, "&quot;")),
                    -1 != e.indexOf("'") && (e = e.replace(ae, "&#39;")),
                    -1 != e.indexOf("\0") && (e = e.replace(se, "&#0;"))),
                    e
                }
                function We(e) {
                    return We[" "](e),
                    e
                }
                We[" "] = f;
                var He, Ge, Ke = pe("Opera"), Qe = pe("Trident") || pe("MSIE"), Ye = pe("Edge"), Xe = Ye || Qe, Je = pe("Gecko") && !(ue(ee.toLowerCase(), "webkit") && !pe("Edge")) && !(pe("Trident") || pe("MSIE")) && !pe("Edge"), et = ue(ee.toLowerCase(), "webkit") && !pe("Edge");
                function tt() {
                    var e = l.document;
                    return e ? e.documentMode : void 0
                }
                e: {
                    var nt = ""
                      , rt = (Ge = ee,
                    Je ? /rv:([^\);]+)(\)|;)/.exec(Ge) : Ye ? /Edge\/([\d\.]+)/.exec(Ge) : Qe ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Ge) : et ? /WebKit\/(\S+)/.exec(Ge) : Ke ? /(?:Version)[ \/]?(\S+)/.exec(Ge) : void 0);
                    if (rt && (nt = rt ? rt[1] : ""),
                    Qe) {
                        var it = tt();
                        if (null != it && it > parseFloat(nt)) {
                            He = String(it);
                            break e
                        }
                    }
                    He = nt
                }
                var ot, at = {};
                function st(e) {
                    return function(e, t) {
                        var n = at;
                        return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : n[e] = t(e)
                    }(e, (function() {
                        for (var t = 0, n = te(String(He)).split("."), r = te(String(e)).split("."), i = Math.max(n.length, r.length), o = 0; 0 == t && o < i; o++) {
                            var a = n[o] || ""
                              , s = r[o] || "";
                            do {
                                if (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""],
                                s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""],
                                0 == a[0].length && 0 == s[0].length)
                                    break;
                                t = ce(0 == a[1].length ? 0 : parseInt(a[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || ce(0 == a[2].length, 0 == s[2].length) || ce(a[2], s[2]),
                                a = a[3],
                                s = s[3]
                            } while (0 == t)
                        }
                        return 0 <= t
                    }
                    ))
                }
                if (l.document && Qe) {
                    var lt = tt();
                    ot = lt || (parseInt(He, 10) || void 0)
                } else
                    ot = void 0;
                var ut = ot;
                try {
                    new self.OffscreenCanvas(0,0).getContext("2d")
                } catch (Ge) {}
                var ct = !Qe || 9 <= Number(ut);
                function dt(e) {
                    var t = document;
                    return "string" == typeof e ? t.getElementById(e) : e
                }
                function ft(e, t) {
                    he(t, (function(t, n) {
                        t && "object" == typeof t && t.ta && (t = t.sa()),
                        "style" == n ? e.style.cssText = t : "class" == n ? e.className = t : "for" == n ? e.htmlFor = t : mt.hasOwnProperty(n) ? e.setAttribute(mt[n], t) : 0 == n.lastIndexOf("aria-", 0) || 0 == n.lastIndexOf("data-", 0) ? e.setAttribute(n, t) : e[n] = t
                    }
                    ))
                }
                var pt, ht, mt = {
                    cellpadding: "cellPadding",
                    cellspacing: "cellSpacing",
                    colspan: "colSpan",
                    frameborder: "frameBorder",
                    height: "height",
                    maxlength: "maxLength",
                    nonce: "nonce",
                    role: "role",
                    rowspan: "rowSpan",
                    type: "type",
                    usemap: "useMap",
                    valign: "vAlign",
                    width: "width"
                };
                function gt(e, t, n) {
                    var r = arguments
                      , i = document
                      , o = String(r[0])
                      , a = r[1];
                    if (!ct && a && (a.name || a.type)) {
                        if (o = ["<", o],
                        a.name && o.push(' name="', Ve(a.name), '"'),
                        a.type) {
                            o.push(' type="', Ve(a.type), '"');
                            var s = {};
                            ye(s, a),
                            delete s.type,
                            a = s
                        }
                        o.push(">"),
                        o = o.join("")
                    }
                    return o = vt(i, o),
                    a && ("string" == typeof a ? o.className = a : Array.isArray(a) ? o.className = a.join(" ") : ft(o, a)),
                    2 < r.length && function(e, t, n) {
                        function r(n) {
                            n && t.appendChild("string" == typeof n ? e.createTextNode(n) : n)
                        }
                        for (var i = 2; i < n.length; i++) {
                            var o = n[i];
                            if (!h(o) || g(o) && 0 < o.nodeType)
                                r(o);
                            else {
                                e: {
                                    if (o && "number" == typeof o.length) {
                                        if (g(o)) {
                                            var a = "function" == typeof o.item || "string" == typeof o.item;
                                            break e
                                        }
                                        if (m(o)) {
                                            a = "function" == typeof o.item;
                                            break e
                                        }
                                    }
                                    a = !1
                                }
                                V(a ? J(o) : o, r)
                            }
                        }
                    }(i, o, r),
                    o
                }
                function vt(e, t) {
                    return t = String(t),
                    "application/xhtml+xml" === e.contentType && (t = t.toLowerCase()),
                    e.createElement(t)
                }
                function yt(e) {
                    l.setTimeout((function() {
                        throw e
                    }
                    ), 0)
                }
                function bt(e, t) {
                    ht || function() {
                        if (l.Promise && l.Promise.resolve) {
                            var e = l.Promise.resolve(void 0);
                            ht = function() {
                                e.then(Et)
                            }
                        } else
                            ht = function() {
                                var e = Et;
                                !m(l.setImmediate) || l.Window && l.Window.prototype && !pe("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (pt || (pt = function() {
                                    var e = l.MessageChannel;
                                    if (void 0 === e && "undefined" != typeof window && window.postMessage && window.addEventListener && !pe("Presto") && (e = function() {
                                        var e = vt(document, "IFRAME");
                                        e.style.display = "none",
                                        document.documentElement.appendChild(e);
                                        var t = e.contentWindow;
                                        (e = t.document).open(),
                                        e.close();
                                        var n = "callImmediate" + Math.random()
                                          , r = "file:" == t.location.protocol ? "*" : t.location.protocol + "//" + t.location.host;
                                        e = E((function(e) {
                                            "*" != r && e.origin != r || e.data != n || this.port1.onmessage()
                                        }
                                        ), this),
                                        t.addEventListener("message", e, !1),
                                        this.port1 = {},
                                        this.port2 = {
                                            postMessage: function() {
                                                t.postMessage(n, r)
                                            }
                                        }
                                    }
                                    ),
                                    void 0 !== e && !pe("Trident") && !pe("MSIE")) {
                                        var t = new e
                                          , n = {}
                                          , r = n;
                                        return t.port1.onmessage = function() {
                                            if (void 0 !== n.next) {
                                                var e = (n = n.next).Hb;
                                                n.Hb = null,
                                                e()
                                            }
                                        }
                                        ,
                                        function(e) {
                                            r.next = {
                                                Hb: e
                                            },
                                            r = r.next,
                                            t.port2.postMessage(0)
                                        }
                                    }
                                    return function(e) {
                                        l.setTimeout(e, 0)
                                    }
                                }()),
                                pt(e)) : l.setImmediate(e)
                            }
                    }(),
                    wt || (ht(),
                    wt = !0),
                    _t.add(e, t)
                }
                var wt = !1
                  , _t = new U;
                function Et() {
                    for (var e; e = z(); ) {
                        try {
                            e.a.call(e.b)
                        } catch (e) {
                            yt(e)
                        }
                        F(B, e)
                    }
                    wt = !1
                }
                function xt(e, t) {
                    if (this.a = Ct,
                    this.i = void 0,
                    this.f = this.b = this.c = null,
                    this.g = this.h = !1,
                    e != f)
                        try {
                            var n = this;
                            e.call(t, (function(e) {
                                jt(n, St, e)
                            }
                            ), (function(e) {
                                if (!(e instanceof qt))
                                    try {
                                        if (e instanceof Error)
                                            throw e;
                                        throw Error("Promise rejected.")
                                    } catch (e) {}
                                jt(n, kt, e)
                            }
                            ))
                        } catch (e) {
                            jt(this, kt, e)
                        }
                }
                var Ct = 0
                  , St = 2
                  , kt = 3;
                function Tt() {
                    this.next = this.f = this.b = this.g = this.a = null,
                    this.c = !1
                }
                Tt.prototype.reset = function() {
                    this.f = this.b = this.g = this.a = null,
                    this.c = !1
                }
                ;
                var Ot = new L((function() {
                    return new Tt
                }
                ),(function(e) {
                    e.reset()
                }
                ));
                function It(e, t, n) {
                    var r = Ot.get();
                    return r.g = e,
                    r.b = t,
                    r.f = n,
                    r
                }
                function At(e) {
                    if (e instanceof xt)
                        return e;
                    var t = new xt(f);
                    return jt(t, St, e),
                    t
                }
                function Pt(e) {
                    return new xt((function(t, n) {
                        n(e)
                    }
                    ))
                }
                function Rt(e, t, n) {
                    Lt(e, t, n, null) || bt(x(t, e))
                }
                function Mt(e) {
                    return new xt((function(t) {
                        var n = e.length
                          , r = [];
                        if (n)
                            for (var i = function(e, i, o) {
                                n--,
                                r[e] = i ? {
                                    Qb: !0,
                                    value: o
                                } : {
                                    Qb: !1,
                                    reason: o
                                },
                                0 == n && t(r)
                            }, o = 0; o < e.length; o++)
                                Rt(e[o], x(i, o, !0), x(i, o, !1));
                        else
                            t(r)
                    }
                    ))
                }
                function Nt(e, t) {
                    if (e.a == Ct)
                        if (e.c) {
                            var n = e.c;
                            if (n.b) {
                                for (var r = 0, i = null, o = null, a = n.b; a && (a.c || (r++,
                                a.a == e && (i = a),
                                !(i && 1 < r))); a = a.next)
                                    i || (o = a);
                                i && (n.a == Ct && 1 == r ? Nt(n, t) : (o ? ((r = o).next == n.f && (n.f = r),
                                r.next = r.next.next) : Ut(n),
                                Bt(n, i, kt, t)))
                            }
                            e.c = null
                        } else
                            jt(e, kt, t)
                }
                function Zt(e, t) {
                    e.b || e.a != St && e.a != kt || Ft(e),
                    e.f ? e.f.next = t : e.b = t,
                    e.f = t
                }
                function Dt(e, t, n, r) {
                    var i = It(null, null, null);
                    return i.a = new xt((function(e, o) {
                        i.g = t ? function(n) {
                            try {
                                var i = t.call(r, n);
                                e(i)
                            } catch (e) {
                                o(e)
                            }
                        }
                        : e,
                        i.b = n ? function(t) {
                            try {
                                var i = n.call(r, t);
                                void 0 === i && t instanceof qt ? o(t) : e(i)
                            } catch (e) {
                                o(e)
                            }
                        }
                        : o
                    }
                    )),
                    i.a.c = e,
                    Zt(e, i),
                    i.a
                }
                function jt(e, t, n) {
                    e.a == Ct && (e === n && (t = kt,
                    n = new TypeError("Promise cannot resolve to itself")),
                    e.a = 1,
                    Lt(n, e.$c, e.ad, e) || (e.i = n,
                    e.a = t,
                    e.c = null,
                    Ft(e),
                    t != kt || n instanceof qt || function(e, t) {
                        e.g = !0,
                        bt((function() {
                            e.g && $t.call(null, t)
                        }
                        ))
                    }(e, n)))
                }
                function Lt(e, t, n, r) {
                    if (e instanceof xt)
                        return Zt(e, It(t || f, n || null, r)),
                        !0;
                    if (N(e))
                        return e.then(t, n, r),
                        !0;
                    if (g(e))
                        try {
                            var i = e.then;
                            if (m(i))
                                return function(e, t, n, r, i) {
                                    function o(e) {
                                        s || (s = !0,
                                        r.call(i, e))
                                    }
                                    function a(e) {
                                        s || (s = !0,
                                        n.call(i, e))
                                    }
                                    var s = !1;
                                    try {
                                        t.call(e, a, o)
                                    } catch (e) {
                                        o(e)
                                    }
                                }(e, i, t, n, r),
                                !0
                        } catch (e) {
                            return n.call(r, e),
                            !0
                        }
                    return !1
                }
                function Ft(e) {
                    e.h || (e.h = !0,
                    bt(e.gc, e))
                }
                function Ut(e) {
                    var t = null;
                    return e.b && (t = e.b,
                    e.b = t.next,
                    t.next = null),
                    e.b || (e.f = null),
                    t
                }
                function Bt(e, t, n, r) {
                    if (n == kt && t.b && !t.c)
                        for (; e && e.g; e = e.c)
                            e.g = !1;
                    if (t.a)
                        t.a.c = null,
                        zt(t, n, r);
                    else
                        try {
                            t.c ? t.g.call(t.f) : zt(t, n, r)
                        } catch (e) {
                            $t.call(null, e)
                        }
                    F(Ot, t)
                }
                function zt(e, t, n) {
                    t == St ? e.g.call(e.f, n) : e.b && e.b.call(e.f, n)
                }
                xt.prototype.then = function(e, t, n) {
                    return Dt(this, m(e) ? e : null, m(t) ? t : null, n)
                }
                ,
                xt.prototype.$goog_Thenable = !0,
                (e = xt.prototype).oa = function(e, t) {
                    return (e = It(e, e, t)).c = !0,
                    Zt(this, e),
                    this
                }
                ,
                e.o = function(e, t) {
                    return Dt(this, null, e, t)
                }
                ,
                e.cancel = function(e) {
                    if (this.a == Ct) {
                        var t = new qt(e);
                        bt((function() {
                            Nt(this, t)
                        }
                        ), this)
                    }
                }
                ,
                e.$c = function(e) {
                    this.a = Ct,
                    jt(this, St, e)
                }
                ,
                e.ad = function(e) {
                    this.a = Ct,
                    jt(this, kt, e)
                }
                ,
                e.gc = function() {
                    for (var e; e = Ut(this); )
                        Bt(this, e, this.a, this.i);
                    this.h = !1
                }
                ;
                var $t = yt;
                function qt(e) {
                    Z.call(this, e)
                }
                function Vt() {
                    0 != Wt && (Ht[v(this)] = this),
                    this.ya = this.ya,
                    this.pa = this.pa
                }
                S(qt, Z),
                qt.prototype.name = "cancel";
                var Wt = 0
                  , Ht = {};
                function Gt(e) {
                    if (!e.ya && (e.ya = !0,
                    e.Da(),
                    0 != Wt)) {
                        var t = v(e);
                        if (0 != Wt && e.pa && 0 < e.pa.length)
                            throw Error(e + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
                        delete Ht[t]
                    }
                }
                Vt.prototype.ya = !1,
                Vt.prototype.Da = function() {
                    if (this.pa)
                        for (; this.pa.length; )
                            this.pa.shift()()
                }
                ;
                var Kt = Object.freeze || function(e) {
                    return e
                }
                  , Qt = !Qe || 9 <= Number(ut)
                  , Yt = Qe && !st("9")
                  , Xt = function() {
                    if (!l.addEventListener || !Object.defineProperty)
                        return !1;
                    var e = !1
                      , t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    try {
                        l.addEventListener("test", f, t),
                        l.removeEventListener("test", f, t)
                    } catch (e) {}
                    return e
                }();
                function Jt(e, t) {
                    this.type = e,
                    this.b = this.target = t,
                    this.defaultPrevented = !1
                }
                function en(e, t) {
                    if (Jt.call(this, e ? e.type : ""),
                    this.relatedTarget = this.b = this.target = null,
                    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0,
                    this.key = "",
                    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1,
                    this.pointerId = 0,
                    this.pointerType = "",
                    this.a = null,
                    e) {
                        var n = this.type = e.type
                          , r = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : null;
                        if (this.target = e.target || e.srcElement,
                        this.b = t,
                        t = e.relatedTarget) {
                            if (Je) {
                                e: {
                                    try {
                                        We(t.nodeName);
                                        var i = !0;
                                        break e
                                    } catch (e) {}
                                    i = !1
                                }
                                i || (t = null)
                            }
                        } else
                            "mouseover" == n ? t = e.fromElement : "mouseout" == n && (t = e.toElement);
                        this.relatedTarget = t,
                        r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX,
                        this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY,
                        this.screenX = r.screenX || 0,
                        this.screenY = r.screenY || 0) : (this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX,
                        this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY,
                        this.screenX = e.screenX || 0,
                        this.screenY = e.screenY || 0),
                        this.button = e.button,
                        this.key = e.key || "",
                        this.ctrlKey = e.ctrlKey,
                        this.altKey = e.altKey,
                        this.shiftKey = e.shiftKey,
                        this.metaKey = e.metaKey,
                        this.pointerId = e.pointerId || 0,
                        this.pointerType = "string" == typeof e.pointerType ? e.pointerType : tn[e.pointerType] || "",
                        this.a = e,
                        e.defaultPrevented && this.preventDefault()
                    }
                }
                Jt.prototype.preventDefault = function() {
                    this.defaultPrevented = !0
                }
                ,
                S(en, Jt);
                var tn = Kt({
                    2: "touch",
                    3: "pen",
                    4: "mouse"
                });
                en.prototype.preventDefault = function() {
                    en.bb.preventDefault.call(this);
                    var e = this.a;
                    if (e.preventDefault)
                        e.preventDefault();
                    else if (e.returnValue = !1,
                    Yt)
                        try {
                            (e.ctrlKey || 112 <= e.keyCode && 123 >= e.keyCode) && (e.keyCode = -1)
                        } catch (e) {}
                }
                ,
                en.prototype.g = function() {
                    return this.a
                }
                ;
                var nn = "closure_listenable_" + (1e6 * Math.random() | 0)
                  , rn = 0;
                function on(e, t, n, r, i) {
                    this.listener = e,
                    this.proxy = null,
                    this.src = t,
                    this.type = n,
                    this.capture = !!r,
                    this.Wa = i,
                    this.key = ++rn,
                    this.wa = this.Qa = !1
                }
                function an(e) {
                    e.wa = !0,
                    e.listener = null,
                    e.proxy = null,
                    e.src = null,
                    e.Wa = null
                }
                function sn(e) {
                    this.src = e,
                    this.a = {},
                    this.b = 0
                }
                function ln(e, t) {
                    var n = t.type;
                    n in e.a && Q(e.a[n], t) && (an(t),
                    0 == e.a[n].length && (delete e.a[n],
                    e.b--))
                }
                function un(e, t, n, r) {
                    for (var i = 0; i < e.length; ++i) {
                        var o = e[i];
                        if (!o.wa && o.listener == t && o.capture == !!n && o.Wa == r)
                            return i
                    }
                    return -1
                }
                sn.prototype.add = function(e, t, n, r, i) {
                    var o = e.toString();
                    (e = this.a[o]) || (e = this.a[o] = [],
                    this.b++);
                    var a = un(e, t, r, i);
                    return -1 < a ? (t = e[a],
                    n || (t.Qa = !1)) : ((t = new on(t,this.src,o,!!r,i)).Qa = n,
                    e.push(t)),
                    t
                }
                ;
                var cn = "closure_lm_" + (1e6 * Math.random() | 0)
                  , dn = {};
                function fn(e, t, n, r, i) {
                    if (r && r.once)
                        hn(e, t, n, r, i);
                    else if (Array.isArray(t))
                        for (var o = 0; o < t.length; o++)
                            fn(e, t[o], n, r, i);
                    else
                        n = xn(n),
                        e && e[nn] ? Sn(e, t, n, g(r) ? !!r.capture : !!r, i) : pn(e, t, n, !1, r, i)
                }
                function pn(e, t, n, r, i, o) {
                    if (!t)
                        throw Error("Invalid event type");
                    var a = g(i) ? !!i.capture : !!i
                      , s = _n(e);
                    if (s || (e[cn] = s = new sn(e)),
                    !(n = s.add(t, n, r, a, o)).proxy) {
                        if (r = function() {
                            var e = wn
                              , t = Qt ? function(n) {
                                return e.call(t.src, t.listener, n)
                            }
                            : function(n) {
                                if (!(n = e.call(t.src, t.listener, n)))
                                    return n
                            }
                            ;
                            return t
                        }(),
                        n.proxy = r,
                        r.src = e,
                        r.listener = n,
                        e.addEventListener)
                            Xt || (i = a),
                            void 0 === i && (i = !1),
                            e.addEventListener(t.toString(), r, i);
                        else if (e.attachEvent)
                            e.attachEvent(vn(t.toString()), r);
                        else {
                            if (!e.addListener || !e.removeListener)
                                throw Error("addEventListener and attachEvent are unavailable.");
                            e.addListener(r)
                        }
                        0
                    }
                }
                function hn(e, t, n, r, i) {
                    if (Array.isArray(t))
                        for (var o = 0; o < t.length; o++)
                            hn(e, t[o], n, r, i);
                    else
                        n = xn(n),
                        e && e[nn] ? kn(e, t, n, g(r) ? !!r.capture : !!r, i) : pn(e, t, n, !0, r, i)
                }
                function mn(e, t, n, r, i) {
                    if (Array.isArray(t))
                        for (var o = 0; o < t.length; o++)
                            mn(e, t[o], n, r, i);
                    else
                        r = g(r) ? !!r.capture : !!r,
                        n = xn(n),
                        e && e[nn] ? (e = e.v,
                        (t = String(t).toString())in e.a && (-1 < (n = un(o = e.a[t], n, r, i)) && (an(o[n]),
                        Array.prototype.splice.call(o, n, 1),
                        0 == o.length && (delete e.a[t],
                        e.b--)))) : e && (e = _n(e)) && (t = e.a[t.toString()],
                        e = -1,
                        t && (e = un(t, n, r, i)),
                        (n = -1 < e ? t[e] : null) && gn(n))
                }
                function gn(e) {
                    if ("number" != typeof e && e && !e.wa) {
                        var t = e.src;
                        if (t && t[nn])
                            ln(t.v, e);
                        else {
                            var n = e.type
                              , r = e.proxy;
                            t.removeEventListener ? t.removeEventListener(n, r, e.capture) : t.detachEvent ? t.detachEvent(vn(n), r) : t.addListener && t.removeListener && t.removeListener(r),
                            (n = _n(t)) ? (ln(n, e),
                            0 == n.b && (n.src = null,
                            t[cn] = null)) : an(e)
                        }
                    }
                }
                function vn(e) {
                    return e in dn ? dn[e] : dn[e] = "on" + e
                }
                function yn(e, t, n, r) {
                    var i = !0;
                    if ((e = _n(e)) && (t = e.a[t.toString()]))
                        for (t = t.concat(),
                        e = 0; e < t.length; e++) {
                            var o = t[e];
                            o && o.capture == n && !o.wa && (o = bn(o, r),
                            i = i && !1 !== o)
                        }
                    return i
                }
                function bn(e, t) {
                    var n = e.listener
                      , r = e.Wa || e.src;
                    return e.Qa && gn(e),
                    n.call(r, t)
                }
                function wn(e, t) {
                    if (e.wa)
                        return !0;
                    if (!Qt) {
                        if (!t)
                            e: {
                                t = ["window", "event"];
                                for (var n = l, r = 0; r < t.length; r++)
                                    if (null == (n = n[t[r]])) {
                                        t = null;
                                        break e
                                    }
                                t = n
                            }
                        if (t = new en(r = t,this),
                        n = !0,
                        !(0 > r.keyCode || null != r.returnValue)) {
                            e: {
                                var i = !1;
                                if (0 == r.keyCode)
                                    try {
                                        r.keyCode = -1;
                                        break e
                                    } catch (e) {
                                        i = !0
                                    }
                                (i || null == r.returnValue) && (r.returnValue = !0)
                            }
                            for (r = [],
                            i = t.b; i; i = i.parentNode)
                                r.push(i);
                            for (e = e.type,
                            i = r.length - 1; 0 <= i; i--) {
                                t.b = r[i];
                                var o = yn(r[i], e, !0, t);
                                n = n && o
                            }
                            for (i = 0; i < r.length; i++)
                                t.b = r[i],
                                o = yn(r[i], e, !1, t),
                                n = n && o
                        }
                        return n
                    }
                    return bn(e, new en(t,this))
                }
                function _n(e) {
                    return (e = e[cn])instanceof sn ? e : null
                }
                var En = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
                function xn(e) {
                    return m(e) ? e : (e[En] || (e[En] = function(t) {
                        return e.handleEvent(t)
                    }
                    ),
                    e[En])
                }
                function Cn() {
                    Vt.call(this),
                    this.v = new sn(this),
                    this.bc = this,
                    this.hb = null
                }
                function Sn(e, t, n, r, i) {
                    e.v.add(String(t), n, !1, r, i)
                }
                function kn(e, t, n, r, i) {
                    e.v.add(String(t), n, !0, r, i)
                }
                function Tn(e, t, n, r) {
                    if (!(t = e.v.a[String(t)]))
                        return !0;
                    t = t.concat();
                    for (var i = !0, o = 0; o < t.length; ++o) {
                        var a = t[o];
                        if (a && !a.wa && a.capture == n) {
                            var s = a.listener
                              , l = a.Wa || a.src;
                            a.Qa && ln(e.v, a),
                            i = !1 !== s.call(l, r) && i
                        }
                    }
                    return i && !r.defaultPrevented
                }
                function On(e, t, n) {
                    if (m(e))
                        n && (e = E(e, n));
                    else {
                        if (!e || "function" != typeof e.handleEvent)
                            throw Error("Invalid listener argument");
                        e = E(e.handleEvent, e)
                    }
                    return 2147483647 < Number(t) ? -1 : l.setTimeout(e, t || 0)
                }
                function In(e) {
                    var t = null;
                    return new xt((function(n, r) {
                        -1 == (t = On((function() {
                            n(void 0)
                        }
                        ), e)) && r(Error("Failed to schedule timer."))
                    }
                    )).o((function(e) {
                        throw l.clearTimeout(t),
                        e
                    }
                    ))
                }
                function An(e) {
                    if (e.X && "function" == typeof e.X)
                        return e.X();
                    if ("string" == typeof e)
                        return e.split("");
                    if (h(e)) {
                        for (var t = [], n = e.length, r = 0; r < n; r++)
                            t.push(e[r]);
                        return t
                    }
                    for (r in t = [],
                    n = 0,
                    e)
                        t[n++] = e[r];
                    return t
                }
                function Pn(e) {
                    if (e.Y && "function" == typeof e.Y)
                        return e.Y();
                    if (!e.X || "function" != typeof e.X) {
                        if (h(e) || "string" == typeof e) {
                            var t = [];
                            e = e.length;
                            for (var n = 0; n < e; n++)
                                t.push(n);
                            return t
                        }
                        for (var r in t = [],
                        n = 0,
                        e)
                            t[n++] = r;
                        return t
                    }
                }
                function Rn(e, t) {
                    this.b = {},
                    this.a = [],
                    this.c = 0;
                    var n = arguments.length;
                    if (1 < n) {
                        if (n % 2)
                            throw Error("Uneven number of arguments");
                        for (var r = 0; r < n; r += 2)
                            this.set(arguments[r], arguments[r + 1])
                    } else if (e)
                        if (e instanceof Rn)
                            for (n = e.Y(),
                            r = 0; r < n.length; r++)
                                this.set(n[r], e.get(n[r]));
                        else
                            for (r in e)
                                this.set(r, e[r])
                }
                function Mn(e) {
                    if (e.c != e.a.length) {
                        for (var t = 0, n = 0; t < e.a.length; ) {
                            var r = e.a[t];
                            Nn(e.b, r) && (e.a[n++] = r),
                            t++
                        }
                        e.a.length = n
                    }
                    if (e.c != e.a.length) {
                        var i = {};
                        for (n = t = 0; t < e.a.length; )
                            Nn(i, r = e.a[t]) || (e.a[n++] = r,
                            i[r] = 1),
                            t++;
                        e.a.length = n
                    }
                }
                function Nn(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                S(Cn, Vt),
                Cn.prototype[nn] = !0,
                Cn.prototype.addEventListener = function(e, t, n, r) {
                    fn(this, e, t, n, r)
                }
                ,
                Cn.prototype.removeEventListener = function(e, t, n, r) {
                    mn(this, e, t, n, r)
                }
                ,
                Cn.prototype.dispatchEvent = function(e) {
                    var t, n = this.hb;
                    if (n)
                        for (t = []; n; n = n.hb)
                            t.push(n);
                    n = this.bc;
                    var r = e.type || e;
                    if ("string" == typeof e)
                        e = new Jt(e,n);
                    else if (e instanceof Jt)
                        e.target = e.target || n;
                    else {
                        var i = e;
                        ye(e = new Jt(r,n), i)
                    }
                    if (i = !0,
                    t)
                        for (var o = t.length - 1; 0 <= o; o--) {
                            var a = e.b = t[o];
                            i = Tn(a, r, !0, e) && i
                        }
                    if (i = Tn(a = e.b = n, r, !0, e) && i,
                    i = Tn(a, r, !1, e) && i,
                    t)
                        for (o = 0; o < t.length; o++)
                            i = Tn(a = e.b = t[o], r, !1, e) && i;
                    return i
                }
                ,
                Cn.prototype.Da = function() {
                    if (Cn.bb.Da.call(this),
                    this.v) {
                        var e, t = this.v;
                        for (e in t.a) {
                            for (var n = t.a[e], r = 0; r < n.length; r++)
                                an(n[r]);
                            delete t.a[e],
                            t.b--
                        }
                    }
                    this.hb = null
                }
                ,
                (e = Rn.prototype).X = function() {
                    Mn(this);
                    for (var e = [], t = 0; t < this.a.length; t++)
                        e.push(this.b[this.a[t]]);
                    return e
                }
                ,
                e.Y = function() {
                    return Mn(this),
                    this.a.concat()
                }
                ,
                e.clear = function() {
                    this.b = {},
                    this.c = this.a.length = 0
                }
                ,
                e.get = function(e, t) {
                    return Nn(this.b, e) ? this.b[e] : t
                }
                ,
                e.set = function(e, t) {
                    Nn(this.b, e) || (this.c++,
                    this.a.push(e)),
                    this.b[e] = t
                }
                ,
                e.forEach = function(e, t) {
                    for (var n = this.Y(), r = 0; r < n.length; r++) {
                        var i = n[r]
                          , o = this.get(i);
                        e.call(t, o, i, this)
                    }
                }
                ;
                var Zn = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
                function Dn(e, t) {
                    var n;
                    this.a = this.l = this.c = "",
                    this.g = null,
                    this.h = this.f = "",
                    this.i = !1,
                    e instanceof Dn ? (this.i = void 0 !== t ? t : e.i,
                    jn(this, e.c),
                    this.l = e.l,
                    this.a = e.a,
                    Ln(this, e.g),
                    this.f = e.f,
                    Fn(this, ir(e.b)),
                    this.h = e.h) : e && (n = String(e).match(Zn)) ? (this.i = !!t,
                    jn(this, n[1] || "", !0),
                    this.l = qn(n[2] || ""),
                    this.a = qn(n[3] || "", !0),
                    Ln(this, n[4]),
                    this.f = qn(n[5] || "", !0),
                    Fn(this, n[6] || "", !0),
                    this.h = qn(n[7] || "")) : (this.i = !!t,
                    this.b = new Xn(null,this.i))
                }
                function jn(e, t, n) {
                    e.c = n ? qn(t, !0) : t,
                    e.c && (e.c = e.c.replace(/:$/, ""))
                }
                function Ln(e, t) {
                    if (t) {
                        if (t = Number(t),
                        isNaN(t) || 0 > t)
                            throw Error("Bad port number " + t);
                        e.g = t
                    } else
                        e.g = null
                }
                function Fn(e, t, n) {
                    t instanceof Xn ? (e.b = t,
                    function(e, t) {
                        t && !e.f && (Jn(e),
                        e.c = null,
                        e.a.forEach((function(e, t) {
                            var n = t.toLowerCase();
                            t != n && (tr(this, t),
                            rr(this, n, e))
                        }
                        ), e)),
                        e.f = t
                    }(e.b, e.i)) : (n || (t = Vn(t, Qn)),
                    e.b = new Xn(t,e.i))
                }
                function Un(e, t, n) {
                    e.b.set(t, n)
                }
                function Bn(e, t) {
                    return e.b.get(t)
                }
                function zn(e) {
                    return e instanceof Dn ? new Dn(e) : new Dn(e,void 0)
                }
                function $n(e, t, n, r) {
                    var i = new Dn(null,void 0);
                    return e && jn(i, e),
                    t && (i.a = t),
                    n && Ln(i, n),
                    r && (i.f = r),
                    i
                }
                function qn(e, t) {
                    return e ? t ? decodeURI(e.replace(/%25/g, "%2525")) : decodeURIComponent(e) : ""
                }
                function Vn(e, t, n) {
                    return "string" == typeof e ? (e = encodeURI(e).replace(t, Wn),
                    n && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                    e) : null
                }
                function Wn(e) {
                    return "%" + ((e = e.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & e).toString(16)
                }
                Dn.prototype.toString = function() {
                    var e = []
                      , t = this.c;
                    t && e.push(Vn(t, Hn, !0), ":");
                    var n = this.a;
                    return (n || "file" == t) && (e.push("//"),
                    (t = this.l) && e.push(Vn(t, Hn, !0), "@"),
                    e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
                    null != (n = this.g) && e.push(":", String(n))),
                    (n = this.f) && (this.a && "/" != n.charAt(0) && e.push("/"),
                    e.push(Vn(n, "/" == n.charAt(0) ? Kn : Gn, !0))),
                    (n = this.b.toString()) && e.push("?", n),
                    (n = this.h) && e.push("#", Vn(n, Yn)),
                    e.join("")
                }
                ,
                Dn.prototype.resolve = function(e) {
                    var t = new Dn(this)
                      , n = !!e.c;
                    n ? jn(t, e.c) : n = !!e.l,
                    n ? t.l = e.l : n = !!e.a,
                    n ? t.a = e.a : n = null != e.g;
                    var r = e.f;
                    if (n)
                        Ln(t, e.g);
                    else if (n = !!e.f) {
                        if ("/" != r.charAt(0))
                            if (this.a && !this.f)
                                r = "/" + r;
                            else {
                                var i = t.f.lastIndexOf("/");
                                -1 != i && (r = t.f.substr(0, i + 1) + r)
                            }
                        if (".." == (i = r) || "." == i)
                            r = "";
                        else if (ue(i, "./") || ue(i, "/.")) {
                            r = 0 == i.lastIndexOf("/", 0),
                            i = i.split("/");
                            for (var o = [], a = 0; a < i.length; ) {
                                var s = i[a++];
                                "." == s ? r && a == i.length && o.push("") : ".." == s ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(),
                                r && a == i.length && o.push("")) : (o.push(s),
                                r = !0)
                            }
                            r = o.join("/")
                        } else
                            r = i
                    }
                    return n ? t.f = r : n = "" !== e.b.toString(),
                    n ? Fn(t, ir(e.b)) : n = !!e.h,
                    n && (t.h = e.h),
                    t
                }
                ;
                var Hn = /[#\/\?@]/g
                  , Gn = /[#\?:]/g
                  , Kn = /[#\?]/g
                  , Qn = /[#\?@]/g
                  , Yn = /#/g;
                function Xn(e, t) {
                    this.b = this.a = null,
                    this.c = e || null,
                    this.f = !!t
                }
                function Jn(e) {
                    e.a || (e.a = new Rn,
                    e.b = 0,
                    e.c && function(e, t) {
                        if (e) {
                            e = e.split("&");
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n].indexOf("=")
                                  , i = null;
                                if (0 <= r) {
                                    var o = e[n].substring(0, r);
                                    i = e[n].substring(r + 1)
                                } else
                                    o = e[n];
                                t(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "")
                            }
                        }
                    }(e.c, (function(t, n) {
                        e.add(decodeURIComponent(t.replace(/\+/g, " ")), n)
                    }
                    )))
                }
                function er(e) {
                    var t = Pn(e);
                    if (void 0 === t)
                        throw Error("Keys are undefined");
                    var n = new Xn(null,void 0);
                    e = An(e);
                    for (var r = 0; r < t.length; r++) {
                        var i = t[r]
                          , o = e[r];
                        Array.isArray(o) ? rr(n, i, o) : n.add(i, o)
                    }
                    return n
                }
                function tr(e, t) {
                    Jn(e),
                    t = or(e, t),
                    Nn(e.a.b, t) && (e.c = null,
                    e.b -= e.a.get(t).length,
                    Nn((e = e.a).b, t) && (delete e.b[t],
                    e.c--,
                    e.a.length > 2 * e.c && Mn(e)))
                }
                function nr(e, t) {
                    return Jn(e),
                    t = or(e, t),
                    Nn(e.a.b, t)
                }
                function rr(e, t, n) {
                    tr(e, t),
                    0 < n.length && (e.c = null,
                    e.a.set(or(e, t), J(n)),
                    e.b += n.length)
                }
                function ir(e) {
                    var t = new Xn;
                    return t.c = e.c,
                    e.a && (t.a = new Rn(e.a),
                    t.b = e.b),
                    t
                }
                function or(e, t) {
                    return t = String(t),
                    e.f && (t = t.toLowerCase()),
                    t
                }
                function ar(e) {
                    var t = [];
                    return lr(new sr, e, t),
                    t.join("")
                }
                function sr() {}
                function lr(e, t, n) {
                    if (null == t)
                        n.push("null");
                    else {
                        if ("object" == typeof t) {
                            if (Array.isArray(t)) {
                                var r = t;
                                t = r.length,
                                n.push("[");
                                for (var i = "", o = 0; o < t; o++)
                                    n.push(i),
                                    lr(e, r[o], n),
                                    i = ",";
                                return void n.push("]")
                            }
                            if (!(t instanceof String || t instanceof Number || t instanceof Boolean)) {
                                for (r in n.push("{"),
                                i = "",
                                t)
                                    Object.prototype.hasOwnProperty.call(t, r) && ("function" != typeof (o = t[r]) && (n.push(i),
                                    dr(r, n),
                                    n.push(":"),
                                    lr(e, o, n),
                                    i = ","));
                                return void n.push("}")
                            }
                            t = t.valueOf()
                        }
                        switch (typeof t) {
                        case "string":
                            dr(t, n);
                            break;
                        case "number":
                            n.push(isFinite(t) && !isNaN(t) ? String(t) : "null");
                            break;
                        case "boolean":
                            n.push(String(t));
                            break;
                        case "function":
                            n.push("null");
                            break;
                        default:
                            throw Error("Unknown type: " + typeof t)
                        }
                    }
                }
                (e = Xn.prototype).add = function(e, t) {
                    Jn(this),
                    this.c = null,
                    e = or(this, e);
                    var n = this.a.get(e);
                    return n || this.a.set(e, n = []),
                    n.push(t),
                    this.b += 1,
                    this
                }
                ,
                e.clear = function() {
                    this.a = this.c = null,
                    this.b = 0
                }
                ,
                e.forEach = function(e, t) {
                    Jn(this),
                    this.a.forEach((function(n, r) {
                        V(n, (function(n) {
                            e.call(t, n, r, this)
                        }
                        ), this)
                    }
                    ), this)
                }
                ,
                e.Y = function() {
                    Jn(this);
                    for (var e = this.a.X(), t = this.a.Y(), n = [], r = 0; r < t.length; r++)
                        for (var i = e[r], o = 0; o < i.length; o++)
                            n.push(t[r]);
                    return n
                }
                ,
                e.X = function(e) {
                    Jn(this);
                    var t = [];
                    if ("string" == typeof e)
                        nr(this, e) && (t = X(t, this.a.get(or(this, e))));
                    else {
                        e = this.a.X();
                        for (var n = 0; n < e.length; n++)
                            t = X(t, e[n])
                    }
                    return t
                }
                ,
                e.set = function(e, t) {
                    return Jn(this),
                    this.c = null,
                    nr(this, e = or(this, e)) && (this.b -= this.a.get(e).length),
                    this.a.set(e, [t]),
                    this.b += 1,
                    this
                }
                ,
                e.get = function(e, t) {
                    return e && 0 < (e = this.X(e)).length ? String(e[0]) : t
                }
                ,
                e.toString = function() {
                    if (this.c)
                        return this.c;
                    if (!this.a)
                        return "";
                    for (var e = [], t = this.a.Y(), n = 0; n < t.length; n++) {
                        var r = t[n]
                          , i = encodeURIComponent(String(r));
                        r = this.X(r);
                        for (var o = 0; o < r.length; o++) {
                            var a = i;
                            "" !== r[o] && (a += "=" + encodeURIComponent(String(r[o]))),
                            e.push(a)
                        }
                    }
                    return this.c = e.join("&")
                }
                ;
                var ur = {
                    '"': '\\"',
                    "\\": "\\\\",
                    "/": "\\/",
                    "\b": "\\b",
                    "\f": "\\f",
                    "\n": "\\n",
                    "\r": "\\r",
                    "\t": "\\t",
                    "\v": "\\u000b"
                }
                  , cr = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
                function dr(e, t) {
                    t.push('"', e.replace(cr, (function(e) {
                        var t = ur[e];
                        return t || (t = "\\u" + (65536 | e.charCodeAt(0)).toString(16).substr(1),
                        ur[e] = t),
                        t
                    }
                    )), '"')
                }
                function fr() {
                    var e = Rr();
                    return Qe && !!ut && 11 == ut || /Edge\/\d+/.test(e)
                }
                function pr() {
                    return l.window && l.window.location.href || self && self.location && self.location.href || ""
                }
                function hr(e, t) {
                    t = t || l.window;
                    var n = "about:blank";
                    e && (n = Me(je(e) || Ue)),
                    t.location.href = n
                }
                function mr(e, t) {
                    var n, r = [];
                    for (n in e)
                        n in t ? typeof e[n] != typeof t[n] ? r.push(n) : "object" == typeof e[n] && null != e[n] && null != t[n] ? 0 < mr(e[n], t[n]).length && r.push(n) : e[n] !== t[n] && r.push(n) : r.push(n);
                    for (n in t)
                        n in e || r.push(n);
                    return r
                }
                function gr(e) {
                    return !!((e = (e || Rr()).toLowerCase()).match(/android/) || e.match(/webos/) || e.match(/iphone|ipad|ipod/) || e.match(/blackberry/) || e.match(/windows phone/) || e.match(/iemobile/))
                }
                function vr(e) {
                    e = e || l.window;
                    try {
                        e.close()
                    } catch (e) {}
                }
                function yr(e, t, n) {
                    var r = Math.floor(1e9 * Math.random()).toString();
                    t = t || 500,
                    n = n || 600;
                    var i = (window.screen.availHeight - n) / 2
                      , o = (window.screen.availWidth - t) / 2;
                    for (a in t = {
                        width: t,
                        height: n,
                        top: 0 < i ? i : 0,
                        left: 0 < o ? o : 0,
                        location: !0,
                        resizable: !0,
                        statusbar: !0,
                        toolbar: !1
                    },
                    n = Rr().toLowerCase(),
                    r && (t.target = r,
                    ue(n, "crios/") && (t.target = "_blank")),
                    Ir(Rr()) == Tr && (e = e || "http://localhost",
                    t.scrollbars = !0),
                    n = e || "",
                    (e = t) || (e = {}),
                    r = window,
                    t = n instanceof Re ? n : je(void 0 !== n.href ? n.href : String(n)) || Ue,
                    n = e.target || n.target,
                    i = [],
                    e)
                        switch (a) {
                        case "width":
                        case "height":
                        case "top":
                        case "left":
                            i.push(a + "=" + e[a]);
                            break;
                        case "target":
                        case "noopener":
                        case "noreferrer":
                            break;
                        default:
                            i.push(a + "=" + (e[a] ? 1 : 0))
                        }
                    var a = i.join(",");
                    if ((pe("iPhone") && !pe("iPod") && !pe("iPad") || pe("iPad") || pe("iPod")) && r.navigator && r.navigator.standalone && n && "_self" != n ? (be(a = vt(document, "A"), "HTMLAnchorElement"),
                    t = t instanceof Re ? t : Le(t),
                    a.href = Me(t),
                    a.setAttribute("target", n),
                    e.noreferrer && a.setAttribute("rel", "noreferrer"),
                    (e = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, r, 1),
                    a.dispatchEvent(e),
                    a = {}) : e.noreferrer ? (a = $e("", r, n, a),
                    e = Me(t),
                    a && (Xe && ue(e, ";") && (e = "'" + e.replace(/'/g, "%27") + "'"),
                    a.opener = null,
                    e = '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Ve(e) + '">',
                    e = new Be(e = (r = Se()) ? r.createHTML(e) : e,null,ze),
                    r = a.document) && (r.write(function(e) {
                        return e instanceof Be && e.constructor === Be ? e.a : (j("expected object of type SafeHtml, got '" + e + "' of type " + p(e)),
                        "type_error:SafeHtml")
                    }(e)),
                    r.close())) : (a = $e(t, r, n, a)) && e.noopener && (a.opener = null),
                    a)
                        try {
                            a.focus()
                        } catch (e) {}
                    return a
                }
                var br = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
                  , wr = /^[^@]+@[^@]+$/;
                function _r() {
                    var e = null;
                    return new xt((function(t) {
                        "complete" == l.document.readyState ? t() : (e = function() {
                            t()
                        }
                        ,
                        hn(window, "load", e))
                    }
                    )).o((function(t) {
                        throw mn(window, "load", e),
                        t
                    }
                    ))
                }
                function Er(e) {
                    return e = e || Rr(),
                    !("file:" !== jr() && "ionic:" !== jr() || !e.toLowerCase().match(/iphone|ipad|ipod|android/))
                }
                function xr() {
                    var e = l.window;
                    try {
                        return !(!e || e == e.top)
                    } catch (e) {
                        return !1
                    }
                }
                function Cr() {
                    return void 0 !== l.WorkerGlobalScope && "function" == typeof l.importScripts
                }
                function Sr() {
                    return r.default.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : r.default.INTERNAL.hasOwnProperty("node") ? "Node" : Cr() ? "Worker" : "Browser"
                }
                function kr() {
                    var e = Sr();
                    return "ReactNative" === e || "Node" === e
                }
                var Tr = "Firefox"
                  , Or = "Chrome";
                function Ir(e) {
                    var t = e.toLowerCase();
                    return ue(t, "opera/") || ue(t, "opr/") || ue(t, "opios/") ? "Opera" : ue(t, "iemobile") ? "IEMobile" : ue(t, "msie") || ue(t, "trident/") ? "IE" : ue(t, "edge/") ? "Edge" : ue(t, "firefox/") ? Tr : ue(t, "silk/") ? "Silk" : ue(t, "blackberry") ? "Blackberry" : ue(t, "webos") ? "Webos" : !ue(t, "safari/") || ue(t, "chrome/") || ue(t, "crios/") || ue(t, "android") ? !ue(t, "chrome/") && !ue(t, "crios/") || ue(t, "edge/") ? ue(t, "android") ? "Android" : (e = e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == e.length ? e[1] : "Other" : Or : "Safari"
                }
                var Ar = {
                    md: "FirebaseCore-web",
                    od: "FirebaseUI-web"
                };
                function Pr(e, t) {
                    t = t || [];
                    var n, r = [], i = {};
                    for (n in Ar)
                        i[Ar[n]] = !0;
                    for (n = 0; n < t.length; n++)
                        void 0 !== i[t[n]] && (delete i[t[n]],
                        r.push(t[n]));
                    return r.sort(),
                    (t = r).length || (t = ["FirebaseCore-web"]),
                    "Browser" === (r = Sr()) ? r = Ir(i = Rr()) : "Worker" === r && (r = Ir(i = Rr()) + "-" + r),
                    r + "/JsCore/" + e + "/" + t.join(",")
                }
                function Rr() {
                    return l.navigator && l.navigator.userAgent || ""
                }
                function Mr(e, t) {
                    e = e.split("."),
                    t = t || l;
                    for (var n = 0; n < e.length && "object" == typeof t && null != t; n++)
                        t = t[e[n]];
                    return n != e.length && (t = void 0),
                    t
                }
                function Nr() {
                    try {
                        var e = l.localStorage
                          , t = zr();
                        if (e)
                            return e.setItem(t, "1"),
                            e.removeItem(t),
                            !fr() || !!l.indexedDB
                    } catch (e) {
                        return Cr() && !!l.indexedDB
                    }
                    return !1
                }
                function Zr() {
                    return (Dr() || "chrome-extension:" === jr() || Er()) && !kr() && Nr() && !Cr()
                }
                function Dr() {
                    return "http:" === jr() || "https:" === jr()
                }
                function jr() {
                    return l.location && l.location.protocol || null
                }
                function Lr(e) {
                    return !gr(e = e || Rr()) && Ir(e) != Tr
                }
                function Fr(e) {
                    return void 0 === e ? null : ar(e)
                }
                function Ur(e) {
                    var t, n = {};
                    for (t in e)
                        e.hasOwnProperty(t) && null !== e[t] && void 0 !== e[t] && (n[t] = e[t]);
                    return n
                }
                function Br(e) {
                    if (null !== e)
                        return JSON.parse(e)
                }
                function zr(e) {
                    return e || Math.floor(1e9 * Math.random()).toString()
                }
                function $r(e) {
                    return "Safari" != Ir(e = e || Rr()) && !e.toLowerCase().match(/iphone|ipad|ipod/)
                }
                function qr() {
                    var e = l.___jsl;
                    if (e && e.H)
                        for (var t in e.H)
                            if (e.H[t].r = e.H[t].r || [],
                            e.H[t].L = e.H[t].L || [],
                            e.H[t].r = e.H[t].L.concat(),
                            e.CP)
                                for (var n = 0; n < e.CP.length; n++)
                                    e.CP[n] = null
                }
                function Vr(e, t) {
                    if (e > t)
                        throw Error("Short delay should be less than long delay!");
                    this.a = e,
                    this.c = t,
                    e = Rr(),
                    t = Sr(),
                    this.b = gr(e) || "ReactNative" === t
                }
                function Wr() {
                    var e = l.document;
                    return !e || void 0 === e.visibilityState || "visible" == e.visibilityState
                }
                function Hr(e) {
                    try {
                        var t = new Date(parseInt(e, 10));
                        if (!isNaN(t.getTime()) && !/[^0-9]/.test(e))
                            return t.toUTCString()
                    } catch (e) {}
                    return null
                }
                function Gr() {
                    return !(!Mr("fireauth.oauthhelper", l) && !Mr("fireauth.iframe", l))
                }
                Vr.prototype.get = function() {
                    var e = l.navigator;
                    return !e || "boolean" != typeof e.onLine || !Dr() && "chrome-extension:" !== jr() && void 0 === e.connection || e.onLine ? this.b ? this.c : this.a : Math.min(5e3, this.a)
                }
                ;
                var Kr, Qr = {};
                function Yr(e) {
                    Qr[e] || (Qr[e] = !0,
                    "undefined" != typeof console && "function" == typeof console.warn && console.warn(e))
                }
                try {
                    var Xr = {};
                    Object.defineProperty(Xr, "abcd", {
                        configurable: !0,
                        enumerable: !0,
                        value: 1
                    }),
                    Object.defineProperty(Xr, "abcd", {
                        configurable: !0,
                        enumerable: !0,
                        value: 2
                    }),
                    Kr = 2 == Xr.abcd
                } catch (Ge) {
                    Kr = !1
                }
                function Jr(e, t, n) {
                    Kr ? Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: n
                    }) : e[t] = n
                }
                function ei(e, t) {
                    if (t)
                        for (var n in t)
                            t.hasOwnProperty(n) && Jr(e, n, t[n])
                }
                function ti(e) {
                    var t = {};
                    return ei(t, e),
                    t
                }
                function ni(e) {
                    var t = e;
                    if ("object" == typeof e && null != e)
                        for (var n in t = "length"in e ? [] : {},
                        e)
                            Jr(t, n, ni(e[n]));
                    return t
                }
                function ri(e) {
                    var t = e && (e[li] ? "phone" : null);
                    if (!(t && e && e[si]))
                        throw new T("internal-error","Internal assert: invalid MultiFactorInfo object");
                    Jr(this, "uid", e[si]),
                    Jr(this, "displayName", e[oi] || null);
                    var n = null;
                    e[ai] && (n = new Date(e[ai]).toUTCString()),
                    Jr(this, "enrollmentTime", n),
                    Jr(this, "factorId", t)
                }
                function ii(e) {
                    try {
                        var t = new ui(e)
                    } catch (e) {
                        t = null
                    }
                    return t
                }
                ri.prototype.w = function() {
                    return {
                        uid: this.uid,
                        displayName: this.displayName,
                        factorId: this.factorId,
                        enrollmentTime: this.enrollmentTime
                    }
                }
                ;
                var oi = "displayName"
                  , ai = "enrolledAt"
                  , si = "mfaEnrollmentId"
                  , li = "phoneInfo";
                function ui(e) {
                    ri.call(this, e),
                    Jr(this, "phoneNumber", e[li])
                }
                function ci(e) {
                    var t = {}
                      , n = e[hi]
                      , r = e[gi]
                      , i = e[vi];
                    if (e = ii(e[mi]),
                    !i || i != fi && i != pi && !n || i == pi && !r || i == di && !e)
                        throw Error("Invalid checkActionCode response!");
                    i == pi ? (t[bi] = n || null,
                    t[_i] = n || null,
                    t[yi] = r) : (t[bi] = r || null,
                    t[_i] = r || null,
                    t[yi] = n || null),
                    t[wi] = e || null,
                    Jr(this, xi, i),
                    Jr(this, Ei, ni(t))
                }
                S(ui, ri),
                ui.prototype.w = function() {
                    var e = ui.bb.w.call(this);
                    return e.phoneNumber = this.phoneNumber,
                    e
                }
                ;
                var di = "REVERT_SECOND_FACTOR_ADDITION"
                  , fi = "EMAIL_SIGNIN"
                  , pi = "VERIFY_AND_CHANGE_EMAIL"
                  , hi = "email"
                  , mi = "mfaInfo"
                  , gi = "newEmail"
                  , vi = "requestType"
                  , yi = "email"
                  , bi = "fromEmail"
                  , wi = "multiFactorInfo"
                  , _i = "previousEmail"
                  , Ei = "data"
                  , xi = "operation";
                function Ci(e) {
                    var t = Bn(e = zn(e), Si) || null
                      , n = Bn(e, ki) || null
                      , r = Bn(e, Ii) || null;
                    if (r = r && Pi[r] || null,
                    !t || !n || !r)
                        throw new T("argument-error",Si + ", " + ki + "and " + Ii + " are required in a valid action code URL.");
                    ei(this, {
                        apiKey: t,
                        operation: r,
                        code: n,
                        continueUrl: Bn(e, Ti) || null,
                        languageCode: Bn(e, Oi) || null,
                        tenantId: Bn(e, Ai) || null
                    })
                }
                var Si = "apiKey"
                  , ki = "oobCode"
                  , Ti = "continueUrl"
                  , Oi = "languageCode"
                  , Ii = "mode"
                  , Ai = "tenantId"
                  , Pi = {
                    recoverEmail: "RECOVER_EMAIL",
                    resetPassword: "PASSWORD_RESET",
                    revertSecondFactorAddition: di,
                    signIn: fi,
                    verifyAndChangeEmail: pi,
                    verifyEmail: "VERIFY_EMAIL"
                };
                function Ri(e) {
                    try {
                        return new Ci(e)
                    } catch (e) {
                        return null
                    }
                }
                function Mi(e) {
                    var t = e[Li];
                    if (void 0 === t)
                        throw new T("missing-continue-uri");
                    if ("string" != typeof t || "string" == typeof t && !t.length)
                        throw new T("invalid-continue-uri");
                    this.h = t,
                    this.b = this.a = null,
                    this.g = !1;
                    var n = e[Ni];
                    if (n && "object" == typeof n) {
                        t = n[Bi];
                        var r = n[Fi];
                        if (n = n[Ui],
                        "string" == typeof t && t.length) {
                            if (this.a = t,
                            void 0 !== r && "boolean" != typeof r)
                                throw new T("argument-error",Fi + " property must be a boolean when specified.");
                            if (this.g = !!r,
                            void 0 !== n && ("string" != typeof n || "string" == typeof n && !n.length))
                                throw new T("argument-error",Ui + " property must be a non empty string when specified.");
                            this.b = n || null
                        } else {
                            if (void 0 !== t)
                                throw new T("argument-error",Bi + " property must be a non empty string when specified.");
                            if (void 0 !== r || void 0 !== n)
                                throw new T("missing-android-pkg-name")
                        }
                    } else if (void 0 !== n)
                        throw new T("argument-error",Ni + " property must be a non null object when specified.");
                    if (this.f = null,
                    (t = e[ji]) && "object" == typeof t) {
                        if ("string" == typeof (t = t[zi]) && t.length)
                            this.f = t;
                        else if (void 0 !== t)
                            throw new T("argument-error",zi + " property must be a non empty string when specified.")
                    } else if (void 0 !== t)
                        throw new T("argument-error",ji + " property must be a non null object when specified.");
                    if (void 0 !== (t = e[Di]) && "boolean" != typeof t)
                        throw new T("argument-error",Di + " property must be a boolean when specified.");
                    if (this.c = !!t,
                    void 0 !== (e = e[Zi]) && ("string" != typeof e || "string" == typeof e && !e.length))
                        throw new T("argument-error",Zi + " property must be a non empty string when specified.");
                    this.i = e || null
                }
                var Ni = "android"
                  , Zi = "dynamicLinkDomain"
                  , Di = "handleCodeInApp"
                  , ji = "iOS"
                  , Li = "url"
                  , Fi = "installApp"
                  , Ui = "minimumVersion"
                  , Bi = "packageName"
                  , zi = "bundleId";
                function $i(e) {
                    var t = {};
                    for (var n in t.continueUrl = e.h,
                    t.canHandleCodeInApp = e.c,
                    (t.androidPackageName = e.a) && (t.androidMinimumVersion = e.b,
                    t.androidInstallApp = e.g),
                    t.iOSBundleId = e.f,
                    t.dynamicLinkDomain = e.i,
                    t)
                        null === t[n] && delete t[n];
                    return t
                }
                var qi = null;
                function Vi(e) {
                    var t = [];
                    return function(e, t) {
                        function n(t) {
                            for (; r < e.length; ) {
                                var n = e.charAt(r++)
                                  , i = qi[n];
                                if (null != i)
                                    return i;
                                if (!/^[\s\xa0]*$/.test(n))
                                    throw Error("Unknown base64 encoding at char: " + n)
                            }
                            return t
                        }
                        !function() {
                            if (!qi) {
                                qi = {};
                                for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), t = ["+/=", "+/", "-_=", "-_.", "-_"], n = 0; 5 > n; n++)
                                    for (var r = e.concat(t[n].split("")), i = 0; i < r.length; i++) {
                                        var o = r[i];
                                        void 0 === qi[o] && (qi[o] = i)
                                    }
                            }
                        }();
                        for (var r = 0; ; ) {
                            var i = n(-1)
                              , o = n(0)
                              , a = n(64)
                              , s = n(64);
                            if (64 === s && -1 === i)
                                break;
                            t(i << 2 | o >> 4),
                            64 != a && (t(o << 4 & 240 | a >> 2),
                            64 != s && t(a << 6 & 192 | s))
                        }
                    }(e, (function(e) {
                        t.push(e)
                    }
                    )),
                    t
                }
                function Wi(e) {
                    var t = Gi(e);
                    if (!(t && t.sub && t.iss && t.aud && t.exp))
                        throw Error("Invalid JWT");
                    this.h = e,
                    this.a = t.exp,
                    this.i = t.sub,
                    e = Date.now() / 1e3,
                    this.g = t.iat || (e > this.a ? this.a : e),
                    this.b = t.provider_id || t.firebase && t.firebase.sign_in_provider || null,
                    this.f = t.firebase && t.firebase.tenant || null,
                    this.c = !!t.is_anonymous || "anonymous" == this.b
                }
                function Hi(e) {
                    try {
                        return new Wi(e)
                    } catch (e) {
                        return null
                    }
                }
                function Gi(e) {
                    if (!e)
                        return null;
                    if (3 != (e = e.split(".")).length)
                        return null;
                    for (var t = (4 - (e = e[1]).length % 4) % 4, n = 0; n < t; n++)
                        e += ".";
                    try {
                        var r = Vi(e);
                        for (e = [],
                        n = t = 0; t < r.length; ) {
                            var i = r[t++];
                            if (128 > i)
                                e[n++] = String.fromCharCode(i);
                            else if (191 < i && 224 > i) {
                                var o = r[t++];
                                e[n++] = String.fromCharCode((31 & i) << 6 | 63 & o)
                            } else if (239 < i && 365 > i) {
                                o = r[t++];
                                var a = r[t++]
                                  , s = ((7 & i) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & r[t++]) - 65536;
                                e[n++] = String.fromCharCode(55296 + (s >> 10)),
                                e[n++] = String.fromCharCode(56320 + (1023 & s))
                            } else
                                o = r[t++],
                                a = r[t++],
                                e[n++] = String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & a)
                        }
                        return JSON.parse(e.join(""))
                    } catch (e) {}
                    return null
                }
                Wi.prototype.T = function() {
                    return this.f
                }
                ,
                Wi.prototype.l = function() {
                    return this.c
                }
                ,
                Wi.prototype.toString = function() {
                    return this.h
                }
                ;
                var Ki = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" ")
                  , Qi = ["client_id", "response_type", "scope", "redirect_uri", "state"]
                  , Yi = {
                    nd: {
                        Ja: "locale",
                        va: 700,
                        ua: 600,
                        fa: "facebook.com",
                        Ya: Qi
                    },
                    pd: {
                        Ja: null,
                        va: 500,
                        ua: 750,
                        fa: "github.com",
                        Ya: Qi
                    },
                    qd: {
                        Ja: "hl",
                        va: 515,
                        ua: 680,
                        fa: "google.com",
                        Ya: Qi
                    },
                    wd: {
                        Ja: "lang",
                        va: 485,
                        ua: 705,
                        fa: "twitter.com",
                        Ya: Ki
                    },
                    kd: {
                        Ja: "locale",
                        va: 640,
                        ua: 600,
                        fa: "apple.com",
                        Ya: []
                    }
                };
                function Xi(e) {
                    for (var t in Yi)
                        if (Yi[t].fa == e)
                            return Yi[t];
                    return null
                }
                function Ji(e) {
                    var t = {};
                    t["facebook.com"] = io,
                    t["google.com"] = ao,
                    t["github.com"] = oo,
                    t["twitter.com"] = so;
                    var n = e && e[to];
                    try {
                        if (n)
                            return t[n] ? new t[n](e) : new ro(e);
                        if (void 0 !== e[eo])
                            return new no(e)
                    } catch (e) {}
                    return null
                }
                var eo = "idToken"
                  , to = "providerId";
                function no(e) {
                    var t = e[to];
                    if (!t && e[eo]) {
                        var n = Hi(e[eo]);
                        n && n.b && (t = n.b)
                    }
                    if (!t)
                        throw Error("Invalid additional user info!");
                    "anonymous" != t && "custom" != t || (t = null),
                    n = !1,
                    void 0 !== e.isNewUser ? n = !!e.isNewUser : "identitytoolkit#SignupNewUserResponse" === e.kind && (n = !0),
                    Jr(this, "providerId", t),
                    Jr(this, "isNewUser", n)
                }
                function ro(e) {
                    no.call(this, e),
                    Jr(this, "profile", ni((e = Br(e.rawUserInfo || "{}")) || {}))
                }
                function io(e) {
                    if (ro.call(this, e),
                    "facebook.com" != this.providerId)
                        throw Error("Invalid provider ID!")
                }
                function oo(e) {
                    if (ro.call(this, e),
                    "github.com" != this.providerId)
                        throw Error("Invalid provider ID!");
                    Jr(this, "username", this.profile && this.profile.login || null)
                }
                function ao(e) {
                    if (ro.call(this, e),
                    "google.com" != this.providerId)
                        throw Error("Invalid provider ID!")
                }
                function so(e) {
                    if (ro.call(this, e),
                    "twitter.com" != this.providerId)
                        throw Error("Invalid provider ID!");
                    Jr(this, "username", e.screenName || null)
                }
                function lo(e) {
                    var t = zn(e)
                      , n = Bn(t, "link")
                      , r = Bn(zn(n), "link");
                    return t = Bn(t, "deep_link_id"),
                    Bn(zn(t), "link") || t || r || n || e
                }
                function uo(e, t) {
                    if (!e && !t)
                        throw new T("internal-error","Internal assert: no raw session string available");
                    if (e && t)
                        throw new T("internal-error","Internal assert: unable to determine the session type");
                    this.a = e || null,
                    this.b = t || null,
                    this.type = this.a ? co : fo
                }
                S(ro, no),
                S(io, ro),
                S(oo, ro),
                S(ao, ro),
                S(so, ro);
                var co = "enroll"
                  , fo = "signin";
                function po() {}
                function ho(e, t) {
                    return e.then((function(e) {
                        if (e[ns]) {
                            var n = Hi(e[ns]);
                            if (!n || t != n.i)
                                throw new T("user-mismatch");
                            return e
                        }
                        throw new T("user-mismatch")
                    }
                    )).o((function(e) {
                        throw e && e.code && e.code == A + "user-not-found" ? new T("user-mismatch") : e
                    }
                    ))
                }
                function mo(e, t) {
                    if (!t)
                        throw new T("internal-error","failed to construct a credential");
                    this.a = t,
                    Jr(this, "providerId", e),
                    Jr(this, "signInMethod", e)
                }
                function go(e) {
                    return {
                        pendingToken: e.a,
                        requestUri: "http://localhost"
                    }
                }
                function vo(e) {
                    if (e && e.providerId && e.signInMethod && 0 == e.providerId.indexOf("saml.") && e.pendingToken)
                        try {
                            return new mo(e.providerId,e.pendingToken)
                        } catch (e) {}
                    return null
                }
                function yo(e, t, n) {
                    if (this.a = null,
                    t.idToken || t.accessToken)
                        t.idToken && Jr(this, "idToken", t.idToken),
                        t.accessToken && Jr(this, "accessToken", t.accessToken),
                        t.nonce && !t.pendingToken && Jr(this, "nonce", t.nonce),
                        t.pendingToken && (this.a = t.pendingToken);
                    else {
                        if (!t.oauthToken || !t.oauthTokenSecret)
                            throw new T("internal-error","failed to construct a credential");
                        Jr(this, "accessToken", t.oauthToken),
                        Jr(this, "secret", t.oauthTokenSecret)
                    }
                    Jr(this, "providerId", e),
                    Jr(this, "signInMethod", n)
                }
                function bo(e) {
                    var t = {};
                    return e.idToken && (t.id_token = e.idToken),
                    e.accessToken && (t.access_token = e.accessToken),
                    e.secret && (t.oauth_token_secret = e.secret),
                    t.providerId = e.providerId,
                    e.nonce && !e.a && (t.nonce = e.nonce),
                    t = {
                        postBody: er(t).toString(),
                        requestUri: "http://localhost"
                    },
                    e.a && (delete t.postBody,
                    t.pendingToken = e.a),
                    t
                }
                function wo(e) {
                    if (e && e.providerId && e.signInMethod) {
                        var t = {
                            idToken: e.oauthIdToken,
                            accessToken: e.oauthTokenSecret ? null : e.oauthAccessToken,
                            oauthTokenSecret: e.oauthTokenSecret,
                            oauthToken: e.oauthTokenSecret && e.oauthAccessToken,
                            nonce: e.nonce,
                            pendingToken: e.pendingToken
                        };
                        try {
                            return new yo(e.providerId,t,e.signInMethod)
                        } catch (e) {}
                    }
                    return null
                }
                function _o(e, t) {
                    this.Qc = t || [],
                    ei(this, {
                        providerId: e,
                        isOAuthProvider: !0
                    }),
                    this.Jb = {},
                    this.qb = (Xi(e) || {}).Ja || null,
                    this.pb = null
                }
                function Eo(e) {
                    if ("string" != typeof e || 0 != e.indexOf("saml."))
                        throw new T("argument-error",'SAML provider IDs must be prefixed with "saml."');
                    _o.call(this, e, [])
                }
                function xo(e) {
                    _o.call(this, e, Qi),
                    this.a = []
                }
                function Co() {
                    xo.call(this, "facebook.com")
                }
                function So(e) {
                    if (!e)
                        throw new T("argument-error","credential failed: expected 1 argument (the OAuth access token).");
                    var t = e;
                    return g(e) && (t = e.accessToken),
                    (new Co).credential({
                        accessToken: t
                    })
                }
                function ko() {
                    xo.call(this, "github.com")
                }
                function To(e) {
                    if (!e)
                        throw new T("argument-error","credential failed: expected 1 argument (the OAuth access token).");
                    var t = e;
                    return g(e) && (t = e.accessToken),
                    (new ko).credential({
                        accessToken: t
                    })
                }
                function Oo() {
                    xo.call(this, "google.com"),
                    this.Ca("profile")
                }
                function Io(e, t) {
                    var n = e;
                    return g(e) && (n = e.idToken,
                    t = e.accessToken),
                    (new Oo).credential({
                        idToken: n,
                        accessToken: t
                    })
                }
                function Ao() {
                    _o.call(this, "twitter.com", Ki)
                }
                function Po(e, t) {
                    var n = e;
                    if (g(n) || (n = {
                        oauthToken: e,
                        oauthTokenSecret: t
                    }),
                    !n.oauthToken || !n.oauthTokenSecret)
                        throw new T("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).");
                    return new yo("twitter.com",n,"twitter.com")
                }
                function Ro(e, t, n) {
                    this.a = e,
                    this.f = t,
                    Jr(this, "providerId", "password"),
                    Jr(this, "signInMethod", n === No.EMAIL_LINK_SIGN_IN_METHOD ? No.EMAIL_LINK_SIGN_IN_METHOD : No.EMAIL_PASSWORD_SIGN_IN_METHOD)
                }
                function Mo(e) {
                    return e && e.email && e.password ? new Ro(e.email,e.password,e.signInMethod) : null
                }
                function No() {
                    ei(this, {
                        providerId: "password",
                        isOAuthProvider: !1
                    })
                }
                function Zo(e, t) {
                    if (!(t = Do(t)))
                        throw new T("argument-error","Invalid email link!");
                    return new Ro(e,t.code,No.EMAIL_LINK_SIGN_IN_METHOD)
                }
                function Do(e) {
                    return (e = Ri(e = lo(e))) && e.operation === fi ? e : null
                }
                function jo(e) {
                    if (!(e.fb && e.eb || e.La && e.ea))
                        throw new T("internal-error");
                    this.a = e,
                    Jr(this, "providerId", "phone"),
                    this.fa = "phone",
                    Jr(this, "signInMethod", "phone")
                }
                function Lo(e) {
                    if (e && "phone" === e.providerId && (e.verificationId && e.verificationCode || e.temporaryProof && e.phoneNumber)) {
                        var t = {};
                        return V(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], (function(n) {
                            e[n] && (t[n] = e[n])
                        }
                        )),
                        new jo(t)
                    }
                    return null
                }
                function Fo(e) {
                    return e.a.La && e.a.ea ? {
                        temporaryProof: e.a.La,
                        phoneNumber: e.a.ea
                    } : {
                        sessionInfo: e.a.fb,
                        code: e.a.eb
                    }
                }
                function Uo(e) {
                    try {
                        this.a = e || r.default.auth()
                    } catch (e) {
                        throw new T("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")
                    }
                    ei(this, {
                        providerId: "phone",
                        isOAuthProvider: !1
                    })
                }
                function Bo(e, t) {
                    if (!e)
                        throw new T("missing-verification-id");
                    if (!t)
                        throw new T("missing-verification-code");
                    return new jo({
                        fb: e,
                        eb: t
                    })
                }
                function zo(e) {
                    if (e.temporaryProof && e.phoneNumber)
                        return new jo({
                            La: e.temporaryProof,
                            ea: e.phoneNumber
                        });
                    var t = e && e.providerId;
                    if (!t || "password" === t)
                        return null;
                    var n = e && e.oauthAccessToken
                      , r = e && e.oauthTokenSecret
                      , i = e && e.nonce
                      , o = e && e.oauthIdToken
                      , a = e && e.pendingToken;
                    try {
                        switch (t) {
                        case "google.com":
                            return Io(o, n);
                        case "facebook.com":
                            return So(n);
                        case "github.com":
                            return To(n);
                        case "twitter.com":
                            return Po(n, r);
                        default:
                            return n || r || o || a ? a ? 0 == t.indexOf("saml.") ? new mo(t,a) : new yo(t,{
                                pendingToken: a,
                                idToken: e.oauthIdToken,
                                accessToken: e.oauthAccessToken
                            },t) : new xo(t).credential({
                                idToken: o,
                                accessToken: n,
                                rawNonce: i
                            }) : null
                        }
                    } catch (e) {
                        return null
                    }
                }
                function $o(e) {
                    if (!e.isOAuthProvider)
                        throw new T("invalid-oauth-provider")
                }
                function qo(e, t, n, r, i, o, a) {
                    if (this.c = e,
                    this.b = t || null,
                    this.g = n || null,
                    this.f = r || null,
                    this.i = o || null,
                    this.h = a || null,
                    this.a = i || null,
                    !this.g && !this.a)
                        throw new T("invalid-auth-event");
                    if (this.g && this.a)
                        throw new T("invalid-auth-event");
                    if (this.g && !this.f)
                        throw new T("invalid-auth-event")
                }
                function Vo(e) {
                    return (e = e || {}).type ? new qo(e.type,e.eventId,e.urlResponse,e.sessionId,e.error && O(e.error),e.postBody,e.tenantId) : null
                }
                function Wo() {
                    this.b = null,
                    this.a = []
                }
                uo.prototype.Ha = function() {
                    return this.a ? At(this.a) : At(this.b)
                }
                ,
                uo.prototype.w = function() {
                    return this.type == co ? {
                        multiFactorSession: {
                            idToken: this.a
                        }
                    } : {
                        multiFactorSession: {
                            pendingCredential: this.b
                        }
                    }
                }
                ,
                po.prototype.ka = function() {}
                ,
                po.prototype.b = function() {}
                ,
                po.prototype.c = function() {}
                ,
                po.prototype.w = function() {}
                ,
                mo.prototype.ka = function(e) {
                    return Cs(e, go(this))
                }
                ,
                mo.prototype.b = function(e, t) {
                    var n = go(this);
                    return n.idToken = t,
                    Ss(e, n)
                }
                ,
                mo.prototype.c = function(e, t) {
                    return ho(ks(e, go(this)), t)
                }
                ,
                mo.prototype.w = function() {
                    return {
                        providerId: this.providerId,
                        signInMethod: this.signInMethod,
                        pendingToken: this.a
                    }
                }
                ,
                yo.prototype.ka = function(e) {
                    return Cs(e, bo(this))
                }
                ,
                yo.prototype.b = function(e, t) {
                    var n = bo(this);
                    return n.idToken = t,
                    Ss(e, n)
                }
                ,
                yo.prototype.c = function(e, t) {
                    return ho(ks(e, bo(this)), t)
                }
                ,
                yo.prototype.w = function() {
                    var e = {
                        providerId: this.providerId,
                        signInMethod: this.signInMethod
                    };
                    return this.idToken && (e.oauthIdToken = this.idToken),
                    this.accessToken && (e.oauthAccessToken = this.accessToken),
                    this.secret && (e.oauthTokenSecret = this.secret),
                    this.nonce && (e.nonce = this.nonce),
                    this.a && (e.pendingToken = this.a),
                    e
                }
                ,
                _o.prototype.Ka = function(e) {
                    return this.Jb = ge(e),
                    this
                }
                ,
                S(Eo, _o),
                S(xo, _o),
                xo.prototype.Ca = function(e) {
                    return K(this.a, e) || this.a.push(e),
                    this
                }
                ,
                xo.prototype.Rb = function() {
                    return J(this.a)
                }
                ,
                xo.prototype.credential = function(e, t) {
                    var n;
                    if (!(n = g(e) ? {
                        idToken: e.idToken || null,
                        accessToken: e.accessToken || null,
                        nonce: e.rawNonce || null
                    } : {
                        idToken: e || null,
                        accessToken: t || null
                    }).idToken && !n.accessToken)
                        throw new T("argument-error","credential failed: must provide the ID token and/or the access token.");
                    return new yo(this.providerId,n,this.providerId)
                }
                ,
                S(Co, xo),
                Jr(Co, "PROVIDER_ID", "facebook.com"),
                Jr(Co, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"),
                S(ko, xo),
                Jr(ko, "PROVIDER_ID", "github.com"),
                Jr(ko, "GITHUB_SIGN_IN_METHOD", "github.com"),
                S(Oo, xo),
                Jr(Oo, "PROVIDER_ID", "google.com"),
                Jr(Oo, "GOOGLE_SIGN_IN_METHOD", "google.com"),
                S(Ao, _o),
                Jr(Ao, "PROVIDER_ID", "twitter.com"),
                Jr(Ao, "TWITTER_SIGN_IN_METHOD", "twitter.com"),
                Ro.prototype.ka = function(e) {
                    return this.signInMethod == No.EMAIL_LINK_SIGN_IN_METHOD ? sl(e, Ns, {
                        email: this.a,
                        oobCode: this.f
                    }) : sl(e, nl, {
                        email: this.a,
                        password: this.f
                    })
                }
                ,
                Ro.prototype.b = function(e, t) {
                    return this.signInMethod == No.EMAIL_LINK_SIGN_IN_METHOD ? sl(e, Zs, {
                        idToken: t,
                        email: this.a,
                        oobCode: this.f
                    }) : sl(e, Gs, {
                        idToken: t,
                        email: this.a,
                        password: this.f
                    })
                }
                ,
                Ro.prototype.c = function(e, t) {
                    return ho(this.ka(e), t)
                }
                ,
                Ro.prototype.w = function() {
                    return {
                        email: this.a,
                        password: this.f,
                        signInMethod: this.signInMethod
                    }
                }
                ,
                ei(No, {
                    PROVIDER_ID: "password"
                }),
                ei(No, {
                    EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
                }),
                ei(No, {
                    EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
                }),
                jo.prototype.ka = function(e) {
                    return e.gb(Fo(this))
                }
                ,
                jo.prototype.b = function(e, t) {
                    var n = Fo(this);
                    return n.idToken = t,
                    sl(e, il, n)
                }
                ,
                jo.prototype.c = function(e, t) {
                    var n = Fo(this);
                    return n.operation = "REAUTH",
                    ho(e = sl(e, ol, n), t)
                }
                ,
                jo.prototype.w = function() {
                    var e = {
                        providerId: "phone"
                    };
                    return this.a.fb && (e.verificationId = this.a.fb),
                    this.a.eb && (e.verificationCode = this.a.eb),
                    this.a.La && (e.temporaryProof = this.a.La),
                    this.a.ea && (e.phoneNumber = this.a.ea),
                    e
                }
                ,
                Uo.prototype.gb = function(e, t) {
                    var n = this.a.a;
                    return At(t.verify()).then((function(r) {
                        if ("string" != typeof r)
                            throw new T("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
                        if ("recaptcha" === t.type) {
                            var i, o = g(e) ? e.session : null, a = g(e) ? e.phoneNumber : e;
                            return i = o && o.type == co ? o.Ha().then((function(e) {
                                return function(e, t) {
                                    return sl(e, Qs, t).then((function(e) {
                                        return e.phoneSessionInfo.sessionInfo
                                    }
                                    ))
                                }(n, {
                                    idToken: e,
                                    phoneEnrollmentInfo: {
                                        phoneNumber: a,
                                        recaptchaToken: r
                                    }
                                })
                            }
                            )) : o && o.type == fo ? o.Ha().then((function(t) {
                                return function(e, t) {
                                    return sl(e, Ys, t).then((function(e) {
                                        return e.phoneResponseInfo.sessionInfo
                                    }
                                    ))
                                }(n, {
                                    mfaPendingCredential: t,
                                    mfaEnrollmentId: e.multiFactorHint && e.multiFactorHint.uid || e.multiFactorUid,
                                    phoneSignInInfo: {
                                        recaptchaToken: r
                                    }
                                })
                            }
                            )) : function(e, t) {
                                return sl(e, Ws, t)
                            }(n, {
                                phoneNumber: a,
                                recaptchaToken: r
                            }),
                            i.then((function(e) {
                                return "function" == typeof t.reset && t.reset(),
                                e
                            }
                            ), (function(e) {
                                throw "function" == typeof t.reset && t.reset(),
                                e
                            }
                            ))
                        }
                        throw new T("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')
                    }
                    ))
                }
                ,
                ei(Uo, {
                    PROVIDER_ID: "phone"
                }),
                ei(Uo, {
                    PHONE_SIGN_IN_METHOD: "phone"
                }),
                qo.prototype.getUid = function() {
                    var e = [];
                    return e.push(this.c),
                    this.b && e.push(this.b),
                    this.f && e.push(this.f),
                    this.h && e.push(this.h),
                    e.join("-")
                }
                ,
                qo.prototype.T = function() {
                    return this.h
                }
                ,
                qo.prototype.w = function() {
                    return {
                        type: this.c,
                        eventId: this.b,
                        urlResponse: this.g,
                        sessionId: this.f,
                        postBody: this.i,
                        tenantId: this.h,
                        error: this.a && this.a.w()
                    }
                }
                ;
                var Ho, Go = null;
                function Ko(e) {
                    var t = "unauthorized-domain"
                      , n = void 0
                      , r = zn(e);
                    e = r.a,
                    "chrome-extension" == (r = r.c) ? n = qe("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", e) : "http" == r || "https" == r ? n = qe("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", e) : t = "operation-not-supported-in-this-environment",
                    T.call(this, t, n)
                }
                function Qo(e, t, n) {
                    T.call(this, e, n),
                    (e = t || {}).Kb && Jr(this, "email", e.Kb),
                    e.ea && Jr(this, "phoneNumber", e.ea),
                    e.credential && Jr(this, "credential", e.credential),
                    e.$b && Jr(this, "tenantId", e.$b)
                }
                function Yo(e) {
                    if (e.code) {
                        var t = e.code || "";
                        0 == t.indexOf(A) && (t = t.substring(A.length));
                        var n = {
                            credential: zo(e),
                            $b: e.tenantId
                        };
                        if (e.email)
                            n.Kb = e.email;
                        else if (e.phoneNumber)
                            n.ea = e.phoneNumber;
                        else if (!n.credential)
                            return new T(t,e.message || void 0);
                        return new Qo(t,n,e.message)
                    }
                    return null
                }
                function Xo() {}
                function Jo(e) {
                    return e.c || (e.c = e.b())
                }
                function ea() {}
                function ta(e) {
                    if (!e.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                        for (var t = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < t.length; n++) {
                            var r = t[n];
                            try {
                                return new ActiveXObject(r),
                                e.f = r
                            } catch (e) {}
                        }
                        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
                    }
                    return e.f
                }
                function na() {}
                function ra() {
                    this.a = new XDomainRequest,
                    this.readyState = 0,
                    this.onreadystatechange = null,
                    this.responseType = this.responseText = this.response = "",
                    this.status = -1,
                    this.statusText = "",
                    this.a.onload = E(this.qc, this),
                    this.a.onerror = E(this.Tb, this),
                    this.a.onprogress = E(this.rc, this),
                    this.a.ontimeout = E(this.vc, this)
                }
                function ia(e, t) {
                    e.readyState = t,
                    e.onreadystatechange && e.onreadystatechange()
                }
                function oa(e, t, n) {
                    this.reset(e, t, n, void 0, void 0)
                }
                S(Ko, T),
                S(Qo, T),
                Qo.prototype.w = function() {
                    var e = {
                        code: this.code,
                        message: this.message
                    };
                    this.email && (e.email = this.email),
                    this.phoneNumber && (e.phoneNumber = this.phoneNumber),
                    this.tenantId && (e.tenantId = this.tenantId);
                    var t = this.credential && this.credential.w();
                    return t && ye(e, t),
                    e
                }
                ,
                Qo.prototype.toJSON = function() {
                    return this.w()
                }
                ,
                Xo.prototype.c = null,
                S(ea, Xo),
                ea.prototype.a = function() {
                    var e = ta(this);
                    return e ? new ActiveXObject(e) : new XMLHttpRequest
                }
                ,
                ea.prototype.b = function() {
                    var e = {};
                    return ta(this) && (e[0] = !0,
                    e[1] = !0),
                    e
                }
                ,
                Ho = new ea,
                S(na, Xo),
                na.prototype.a = function() {
                    var e = new XMLHttpRequest;
                    if ("withCredentials"in e)
                        return e;
                    if ("undefined" != typeof XDomainRequest)
                        return new ra;
                    throw Error("Unsupported browser")
                }
                ,
                na.prototype.b = function() {
                    return {}
                }
                ,
                (e = ra.prototype).open = function(e, t, n) {
                    if (null != n && !n)
                        throw Error("Only async requests are supported.");
                    this.a.open(e, t)
                }
                ,
                e.send = function(e) {
                    if (e) {
                        if ("string" != typeof e)
                            throw Error("Only string data is supported");
                        this.a.send(e)
                    } else
                        this.a.send()
                }
                ,
                e.abort = function() {
                    this.a.abort()
                }
                ,
                e.setRequestHeader = function() {}
                ,
                e.getResponseHeader = function(e) {
                    return "content-type" == e.toLowerCase() ? this.a.contentType : ""
                }
                ,
                e.qc = function() {
                    this.status = 200,
                    this.response = this.responseText = this.a.responseText,
                    ia(this, 4)
                }
                ,
                e.Tb = function() {
                    this.status = 500,
                    this.response = this.responseText = "",
                    ia(this, 4)
                }
                ,
                e.vc = function() {
                    this.Tb()
                }
                ,
                e.rc = function() {
                    this.status = 200,
                    ia(this, 1)
                }
                ,
                e.getAllResponseHeaders = function() {
                    return "content-type: " + this.a.contentType
                }
                ,
                oa.prototype.a = null;
                function aa(e) {
                    this.f = e,
                    this.b = this.c = this.a = null
                }
                function sa(e, t) {
                    this.name = e,
                    this.value = t
                }
                oa.prototype.reset = function(e, t, n, r, i) {
                    "number" == typeof i || 0,
                    r || C(),
                    delete this.a
                }
                ,
                sa.prototype.toString = function() {
                    return this.name
                }
                ;
                var la = new sa("SEVERE",1e3)
                  , ua = new sa("WARNING",900)
                  , ca = new sa("CONFIG",700)
                  , da = new sa("FINE",500);
                function fa(e) {
                    return e.c ? e.c : e.a ? fa(e.a) : (j("Root logger has no level set."),
                    null)
                }
                aa.prototype.log = function(e, t, n) {
                    if (e.value >= fa(this).value)
                        for (m(t) && (t = t()),
                        e = new oa(e,String(t),this.f),
                        n && (e.a = n),
                        n = this; n; )
                            n = n.a
                }
                ;
                var pa = {}
                  , ha = null;
                function ma(e) {
                    var t;
                    if (ha || (ha = new aa(""),
                    pa[""] = ha,
                    ha.c = ca),
                    !(t = pa[e])) {
                        t = new aa(e);
                        var n = e.lastIndexOf(".")
                          , r = e.substr(n + 1);
                        (n = ma(e.substr(0, n))).b || (n.b = {}),
                        n.b[r] = t,
                        t.a = n,
                        pa[e] = t
                    }
                    return t
                }
                function ga(e, t) {
                    e && e.log(da, t, void 0)
                }
                function va(e) {
                    this.f = e
                }
                function ya(e) {
                    Cn.call(this),
                    this.u = e,
                    this.h = void 0,
                    this.readyState = ba,
                    this.status = 0,
                    this.responseType = this.responseText = this.response = this.statusText = "",
                    this.onreadystatechange = null,
                    this.l = new Headers,
                    this.b = null,
                    this.s = "GET",
                    this.f = "",
                    this.a = !1,
                    this.i = ma("goog.net.FetchXmlHttp"),
                    this.m = this.c = this.g = null
                }
                S(va, Xo),
                va.prototype.a = function() {
                    return new ya(this.f)
                }
                ,
                va.prototype.b = function(e) {
                    return function() {
                        return e
                    }
                }({}),
                S(ya, Cn);
                var ba = 0;
                function wa(e) {
                    e.c.read().then(e.pc.bind(e)).catch(e.Va.bind(e))
                }
                function _a(e) {
                    e.readyState = 4,
                    e.g = null,
                    e.c = null,
                    e.m = null,
                    Ea(e)
                }
                function Ea(e) {
                    e.onreadystatechange && e.onreadystatechange.call(e)
                }
                function xa(e) {
                    Cn.call(this),
                    this.headers = new Rn,
                    this.D = e || null,
                    this.c = !1,
                    this.C = this.a = null,
                    this.h = this.P = this.l = "",
                    this.f = this.N = this.i = this.J = !1,
                    this.g = 0,
                    this.s = null,
                    this.m = Ca,
                    this.u = this.S = !1
                }
                (e = ya.prototype).open = function(e, t) {
                    if (this.readyState != ba)
                        throw this.abort(),
                        Error("Error reopening a connection");
                    this.s = e,
                    this.f = t,
                    this.readyState = 1,
                    Ea(this)
                }
                ,
                e.send = function(e) {
                    if (1 != this.readyState)
                        throw this.abort(),
                        Error("need to call open() first. ");
                    this.a = !0;
                    var t = {
                        headers: this.l,
                        method: this.s,
                        credentials: this.h,
                        cache: void 0
                    };
                    e && (t.body = e),
                    this.u.fetch(new Request(this.f,t)).then(this.uc.bind(this), this.Va.bind(this))
                }
                ,
                e.abort = function() {
                    this.response = this.responseText = "",
                    this.l = new Headers,
                    this.status = 0,
                    this.c && this.c.cancel("Request was aborted."),
                    1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1,
                    _a(this)),
                    this.readyState = ba
                }
                ,
                e.uc = function(e) {
                    this.a && (this.g = e,
                    this.b || (this.status = this.g.status,
                    this.statusText = this.g.statusText,
                    this.b = e.headers,
                    this.readyState = 2,
                    Ea(this)),
                    this.a && (this.readyState = 3,
                    Ea(this),
                    this.a && ("arraybuffer" === this.responseType ? e.arrayBuffer().then(this.sc.bind(this), this.Va.bind(this)) : void 0 !== l.ReadableStream && "body"in e ? (this.response = this.responseText = "",
                    this.c = e.body.getReader(),
                    this.m = new TextDecoder,
                    wa(this)) : e.text().then(this.tc.bind(this), this.Va.bind(this)))))
                }
                ,
                e.pc = function(e) {
                    if (this.a) {
                        var t = this.m.decode(e.value ? e.value : new Uint8Array(0), {
                            stream: !e.done
                        });
                        t && (this.response = this.responseText += t),
                        e.done ? _a(this) : Ea(this),
                        3 == this.readyState && wa(this)
                    }
                }
                ,
                e.tc = function(e) {
                    this.a && (this.response = this.responseText = e,
                    _a(this))
                }
                ,
                e.sc = function(e) {
                    this.a && (this.response = e,
                    _a(this))
                }
                ,
                e.Va = function(e) {
                    var t = this.i;
                    t && t.log(ua, "Failed to fetch url " + this.f, e instanceof Error ? e : Error(e)),
                    this.a && _a(this)
                }
                ,
                e.setRequestHeader = function(e, t) {
                    this.l.append(e, t)
                }
                ,
                e.getResponseHeader = function(e) {
                    return this.b ? this.b.get(e.toLowerCase()) || "" : ((e = this.i) && e.log(ua, "Attempting to get response header but no headers have been received for url: " + this.f, void 0),
                    "")
                }
                ,
                e.getAllResponseHeaders = function() {
                    if (!this.b) {
                        var e = this.i;
                        return e && e.log(ua, "Attempting to get all response headers but no headers have been received for url: " + this.f, void 0),
                        ""
                    }
                    e = [];
                    for (var t = this.b.entries(), n = t.next(); !n.done; )
                        n = n.value,
                        e.push(n[0] + ": " + n[1]),
                        n = t.next();
                    return e.join("\r\n")
                }
                ,
                Object.defineProperty(ya.prototype, "withCredentials", {
                    get: function() {
                        return "include" === this.h
                    },
                    set: function(e) {
                        this.h = e ? "include" : "same-origin"
                    }
                }),
                S(xa, Cn);
                var Ca = "";
                xa.prototype.b = ma("goog.net.XhrIo");
                var Sa = /^https?$/i
                  , ka = ["POST", "PUT"];
                function Ta(e, t, n, r, i) {
                    if (e.a)
                        throw Error("[goog.net.XhrIo] Object is active with another request=" + e.l + "; newUri=" + t);
                    n = n ? n.toUpperCase() : "GET",
                    e.l = t,
                    e.h = "",
                    e.P = n,
                    e.J = !1,
                    e.c = !0,
                    e.a = e.D ? e.D.a() : Ho.a(),
                    e.C = e.D ? Jo(e.D) : Jo(Ho),
                    e.a.onreadystatechange = E(e.Wb, e);
                    try {
                        ga(e.b, Da(e, "Opening Xhr")),
                        e.N = !0,
                        e.a.open(n, String(t), !0),
                        e.N = !1
                    } catch (t) {
                        return ga(e.b, Da(e, "Error opening Xhr: " + t.message)),
                        void Ia(e, t)
                    }
                    t = r || "";
                    var o = new Rn(e.headers);
                    i && function(e, t) {
                        if (e.forEach && "function" == typeof e.forEach)
                            e.forEach(t, void 0);
                        else if (h(e) || "string" == typeof e)
                            V(e, t, void 0);
                        else
                            for (var n = Pn(e), r = An(e), i = r.length, o = 0; o < i; o++)
                                t.call(void 0, r[o], n && n[o], e)
                    }(i, (function(e, t) {
                        o.set(t, e)
                    }
                    )),
                    i = function(e) {
                        e: {
                            for (var t = Oa, n = e.length, r = "string" == typeof e ? e.split("") : e, i = 0; i < n; i++)
                                if (i in r && t.call(void 0, r[i], i, e)) {
                                    t = i;
                                    break e
                                }
                            t = -1
                        }
                        return 0 > t ? null : "string" == typeof e ? e.charAt(t) : e[t]
                    }(o.Y()),
                    r = l.FormData && t instanceof l.FormData,
                    !K(ka, n) || i || r || o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"),
                    o.forEach((function(e, t) {
                        this.a.setRequestHeader(t, e)
                    }
                    ), e),
                    e.m && (e.a.responseType = e.m),
                    "withCredentials"in e.a && e.a.withCredentials !== e.S && (e.a.withCredentials = e.S);
                    try {
                        Ma(e),
                        0 < e.g && (e.u = function(e) {
                            return Qe && st(9) && "number" == typeof e.timeout && void 0 !== e.ontimeout
                        }(e.a),
                        ga(e.b, Da(e, "Will abort after " + e.g + "ms if incomplete, xhr2 " + e.u)),
                        e.u ? (e.a.timeout = e.g,
                        e.a.ontimeout = E(e.Ma, e)) : e.s = On(e.Ma, e.g, e)),
                        ga(e.b, Da(e, "Sending request")),
                        e.i = !0,
                        e.a.send(t),
                        e.i = !1
                    } catch (t) {
                        ga(e.b, Da(e, "Send error: " + t.message)),
                        Ia(e, t)
                    }
                }
                function Oa(e) {
                    return "content-type" == e.toLowerCase()
                }
                function Ia(e, t) {
                    e.c = !1,
                    e.a && (e.f = !0,
                    e.a.abort(),
                    e.f = !1),
                    e.h = t,
                    Aa(e),
                    Ra(e)
                }
                function Aa(e) {
                    e.J || (e.J = !0,
                    e.dispatchEvent("complete"),
                    e.dispatchEvent("error"))
                }
                function Pa(e) {
                    if (e.c && void 0 !== s)
                        if (e.C[1] && 4 == Na(e) && 2 == Za(e))
                            ga(e.b, Da(e, "Local request error detected and ignored"));
                        else if (e.i && 4 == Na(e))
                            On(e.Wb, 0, e);
                        else if (e.dispatchEvent("readystatechange"),
                        4 == Na(e)) {
                            ga(e.b, Da(e, "Request complete")),
                            e.c = !1;
                            try {
                                var t, n = Za(e);
                                e: switch (n) {
                                case 200:
                                case 201:
                                case 202:
                                case 204:
                                case 206:
                                case 304:
                                case 1223:
                                    var r = !0;
                                    break e;
                                default:
                                    r = !1
                                }
                                if (!(t = r)) {
                                    var i;
                                    if (i = 0 === n) {
                                        var o = String(e.l).match(Zn)[1] || null;
                                        if (!o && l.self && l.self.location) {
                                            var a = l.self.location.protocol;
                                            o = a.substr(0, a.length - 1)
                                        }
                                        i = !Sa.test(o ? o.toLowerCase() : "")
                                    }
                                    t = i
                                }
                                if (t)
                                    e.dispatchEvent("complete"),
                                    e.dispatchEvent("success");
                                else {
                                    try {
                                        var u = 2 < Na(e) ? e.a.statusText : ""
                                    } catch (t) {
                                        ga(e.b, "Can not get status: " + t.message),
                                        u = ""
                                    }
                                    e.h = u + " [" + Za(e) + "]",
                                    Aa(e)
                                }
                            } finally {
                                Ra(e)
                            }
                        }
                }
                function Ra(e, t) {
                    if (e.a) {
                        Ma(e);
                        var n = e.a
                          , r = e.C[0] ? f : null;
                        e.a = null,
                        e.C = null,
                        t || e.dispatchEvent("ready");
                        try {
                            n.onreadystatechange = r
                        } catch (t) {
                            (e = e.b) && e.log(la, "Problem encountered resetting onreadystatechange: " + t.message, void 0)
                        }
                    }
                }
                function Ma(e) {
                    e.a && e.u && (e.a.ontimeout = null),
                    e.s && (l.clearTimeout(e.s),
                    e.s = null)
                }
                function Na(e) {
                    return e.a ? e.a.readyState : 0
                }
                function Za(e) {
                    try {
                        return 2 < Na(e) ? e.a.status : -1
                    } catch (e) {
                        return -1
                    }
                }
                function Da(e, t) {
                    return t + " [" + e.P + " " + e.l + " " + Za(e) + "]"
                }
                function ja(e) {
                    var t = Ga;
                    this.g = [],
                    this.u = t,
                    this.s = e || null,
                    this.f = this.a = !1,
                    this.c = void 0,
                    this.v = this.C = this.i = !1,
                    this.h = 0,
                    this.b = null,
                    this.l = 0
                }
                function La(e, t, n) {
                    e.a = !0,
                    e.c = n,
                    e.f = !t,
                    za(e)
                }
                function Fa(e) {
                    if (e.a) {
                        if (!e.v)
                            throw new $a(e);
                        e.v = !1
                    }
                }
                function Ua(e, t, n, r) {
                    e.g.push([t, n, r]),
                    e.a && za(e)
                }
                function Ba(e) {
                    return G(e.g, (function(e) {
                        return m(e[1])
                    }
                    ))
                }
                function za(e) {
                    if (e.h && e.a && Ba(e)) {
                        var t = e.h
                          , n = Wa[t];
                        n && (l.clearTimeout(n.a),
                        delete Wa[t]),
                        e.h = 0
                    }
                    e.b && (e.b.l--,
                    delete e.b),
                    t = e.c;
                    for (var r = n = !1; e.g.length && !e.i; ) {
                        var i = e.g.shift()
                          , o = i[0]
                          , a = i[1];
                        if (i = i[2],
                        o = e.f ? a : o)
                            try {
                                var s = o.call(i || e.s, t);
                                void 0 !== s && (e.f = e.f && (s == t || s instanceof Error),
                                e.c = t = s),
                                (N(t) || "function" == typeof l.Promise && t instanceof l.Promise) && (r = !0,
                                e.i = !0)
                            } catch (r) {
                                t = r,
                                e.f = !0,
                                Ba(e) || (n = !0)
                            }
                    }
                    e.c = t,
                    r && (s = E(e.m, e, !0),
                    r = E(e.m, e, !1),
                    t instanceof ja ? (Ua(t, s, r),
                    t.C = !0) : t.then(s, r)),
                    n && (t = new Va(t),
                    Wa[t.a] = t,
                    e.h = t.a)
                }
                function $a() {
                    Z.call(this)
                }
                function qa() {
                    Z.call(this)
                }
                function Va(e) {
                    this.a = l.setTimeout(E(this.c, this), 0),
                    this.b = e
                }
                (e = xa.prototype).Ma = function() {
                    void 0 !== s && this.a && (this.h = "Timed out after " + this.g + "ms, aborting",
                    ga(this.b, Da(this, this.h)),
                    this.dispatchEvent("timeout"),
                    this.abort(8))
                }
                ,
                e.abort = function() {
                    this.a && this.c && (ga(this.b, Da(this, "Aborting")),
                    this.c = !1,
                    this.f = !0,
                    this.a.abort(),
                    this.f = !1,
                    this.dispatchEvent("complete"),
                    this.dispatchEvent("abort"),
                    Ra(this))
                }
                ,
                e.Da = function() {
                    this.a && (this.c && (this.c = !1,
                    this.f = !0,
                    this.a.abort(),
                    this.f = !1),
                    Ra(this, !0)),
                    xa.bb.Da.call(this)
                }
                ,
                e.Wb = function() {
                    this.ya || (this.N || this.i || this.f ? Pa(this) : this.Jc())
                }
                ,
                e.Jc = function() {
                    Pa(this)
                }
                ,
                e.getResponse = function() {
                    try {
                        if (!this.a)
                            return null;
                        if ("response"in this.a)
                            return this.a.response;
                        switch (this.m) {
                        case Ca:
                        case "text":
                            return this.a.responseText;
                        case "arraybuffer":
                            if ("mozResponseArrayBuffer"in this.a)
                                return this.a.mozResponseArrayBuffer
                        }
                        var e = this.b;
                        return e && e.log(la, "Response type " + this.m + " is not supported on this browser", void 0),
                        null
                    } catch (e) {
                        return ga(this.b, "Can not get response: " + e.message),
                        null
                    }
                }
                ,
                ja.prototype.cancel = function(e) {
                    if (this.a)
                        this.c instanceof ja && this.c.cancel();
                    else {
                        if (this.b) {
                            var t = this.b;
                            delete this.b,
                            e ? t.cancel(e) : (t.l--,
                            0 >= t.l && t.cancel())
                        }
                        this.u ? this.u.call(this.s, this) : this.v = !0,
                        this.a || (e = new qa(this),
                        Fa(this),
                        La(this, !1, e))
                    }
                }
                ,
                ja.prototype.m = function(e, t) {
                    this.i = !1,
                    La(this, e, t)
                }
                ,
                ja.prototype.then = function(e, t, n) {
                    var r, i, o = new xt((function(e, t) {
                        r = e,
                        i = t
                    }
                    ));
                    return Ua(this, r, (function(e) {
                        e instanceof qa ? o.cancel() : i(e)
                    }
                    )),
                    o.then(e, t, n)
                }
                ,
                ja.prototype.$goog_Thenable = !0,
                S($a, Z),
                $a.prototype.message = "Deferred has already fired",
                $a.prototype.name = "AlreadyCalledError",
                S(qa, Z),
                qa.prototype.message = "Deferred was canceled",
                qa.prototype.name = "CanceledError",
                Va.prototype.c = function() {
                    throw delete Wa[this.a],
                    this.b
                }
                ;
                var Wa = {};
                function Ha(e) {
                    var t = {}
                      , n = t.document || document
                      , r = Te(e).toString()
                      , i = vt(document, "SCRIPT")
                      , o = {
                        Xb: i,
                        Ma: void 0
                    }
                      , a = new ja(o)
                      , s = null
                      , u = null != t.timeout ? t.timeout : 5e3;
                    return 0 < u && (s = window.setTimeout((function() {
                        Ka(i, !0);
                        var e = new Xa(Ya,"Timeout reached for loading script " + r);
                        Fa(a),
                        La(a, !1, e)
                    }
                    ), u),
                    o.Ma = s),
                    i.onload = i.onreadystatechange = function() {
                        i.readyState && "loaded" != i.readyState && "complete" != i.readyState || (Ka(i, t.xd || !1, s),
                        Fa(a),
                        La(a, !0, null))
                    }
                    ,
                    i.onerror = function() {
                        Ka(i, !0, s);
                        var e = new Xa(Qa,"Error while loading script " + r);
                        Fa(a),
                        La(a, !1, e)
                    }
                    ,
                    ye(o = t.attributes || {}, {
                        type: "text/javascript",
                        charset: "UTF-8"
                    }),
                    ft(i, o),
                    function(e, t) {
                        be(e, "HTMLScriptElement"),
                        e.src = Te(t),
                        (t = e.ownerDocument && e.ownerDocument.defaultView) && t != l ? t = d(t.document) : (null === c && (c = d(l.document)),
                        t = c),
                        t && e.setAttribute("nonce", t)
                    }(i, e),
                    function(e) {
                        var t;
                        return (t = (e || document).getElementsByTagName("HEAD")) && 0 != t.length ? t[0] : e.documentElement
                    }(n).appendChild(i),
                    a
                }
                function Ga() {
                    if (this && this.Xb) {
                        var e = this.Xb;
                        e && "SCRIPT" == e.tagName && Ka(e, !0, this.Ma)
                    }
                }
                function Ka(e, t, n) {
                    null != n && l.clearTimeout(n),
                    e.onload = f,
                    e.onerror = f,
                    e.onreadystatechange = f,
                    t && window.setTimeout((function() {
                        e && e.parentNode && e.parentNode.removeChild(e)
                    }
                    ), 0)
                }
                var Qa = 0
                  , Ya = 1;
                function Xa(e, t) {
                    var n = "Jsloader error (code #" + e + ")";
                    t && (n += ": " + t),
                    Z.call(this, n),
                    this.code = e
                }
                function Ja(e) {
                    this.f = e
                }
                function es(e, t, n) {
                    if (this.c = e,
                    e = t || {},
                    this.l = e.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token",
                    this.m = e.secureTokenTimeout || rs,
                    this.g = ge(e.secureTokenHeaders || is),
                    this.h = e.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
                    this.i = e.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/",
                    this.v = e.firebaseTimeout || os,
                    this.a = ge(e.firebaseHeaders || as),
                    n && (this.a["X-Client-Version"] = n,
                    this.g["X-Client-Version"] = n),
                    n = "Node" == Sr(),
                    !(n = l.XMLHttpRequest || n && r.default.INTERNAL.node && r.default.INTERNAL.node.XMLHttpRequest) && !Cr())
                        throw new T("internal-error","The XMLHttpRequest compatibility library was not found.");
                    this.f = void 0,
                    Cr() ? this.f = new va(self) : kr() ? this.f = new Ja(n) : this.f = new na,
                    this.b = null
                }
                S(Xa, Z),
                S(Ja, Xo),
                Ja.prototype.a = function() {
                    return new this.f
                }
                ,
                Ja.prototype.b = function() {
                    return {}
                }
                ;
                var ts, ns = "idToken", rs = new Vr(3e4,6e4), is = {
                    "Content-Type": "application/x-www-form-urlencoded"
                }, os = new Vr(3e4,6e4), as = {
                    "Content-Type": "application/json"
                };
                function ss(e, t) {
                    t ? e.a["X-Firebase-Locale"] = t : delete e.a["X-Firebase-Locale"]
                }
                function ls(e, t) {
                    t && (e.l = us("https://securetoken.googleapis.com/v1/token", t),
                    e.h = us("https://www.googleapis.com/identitytoolkit/v3/relyingparty/", t),
                    e.i = us("https://identitytoolkit.googleapis.com/v2/", t))
                }
                function us(e, t) {
                    return e = zn(e),
                    t = zn(t.url),
                    e.f = e.a + e.f,
                    jn(e, t.c),
                    e.a = t.a,
                    Ln(e, t.g),
                    e.toString()
                }
                function cs(e, t) {
                    t ? (e.a["X-Client-Version"] = t,
                    e.g["X-Client-Version"] = t) : (delete e.a["X-Client-Version"],
                    delete e.g["X-Client-Version"])
                }
                function ds(e, t, n, r, i, o, a) {
                    (function() {
                        var e = Rr();
                        return !((e = Ir(e) != Or ? null : (e = e.match(/\sChrome\/(\d+)/i)) && 2 == e.length ? parseInt(e[1], 10) : null) && 30 > e || Qe && ut && !(9 < ut))
                    }
                    )() || Cr() ? e = E(e.u, e) : (ts || (ts = new xt((function(e, t) {
                        !function(e, t) {
                            if (((window.gapi || {}).client || {}).request)
                                e();
                            else {
                                l[ps] = function() {
                                    ((window.gapi || {}).client || {}).request ? e() : t(Error("CORS_UNSUPPORTED"))
                                }
                                ,
                                function(e, t) {
                                    Ua(e, null, t, void 0)
                                }(Ha(Oe(fs, {
                                    onload: ps
                                })), (function() {
                                    t(Error("CORS_UNSUPPORTED"))
                                }
                                ))
                            }
                        }(e, t)
                    }
                    ))),
                    e = E(e.s, e)),
                    e(t, n, r, i, o, a)
                }
                es.prototype.T = function() {
                    return this.b
                }
                ,
                es.prototype.u = function(e, t, n, r, i, o) {
                    if (Cr() && (void 0 === l.fetch || void 0 === l.Headers || void 0 === l.Request))
                        throw new T("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
                    var a = new xa(this.f);
                    if (o) {
                        a.g = Math.max(0, o);
                        var s = setTimeout((function() {
                            a.dispatchEvent("timeout")
                        }
                        ), o)
                    }
                    Sn(a, "complete", (function() {
                        s && clearTimeout(s);
                        var e = null;
                        try {
                            e = JSON.parse(function(e) {
                                try {
                                    return e.a ? e.a.responseText : ""
                                } catch (t) {
                                    return ga(e.b, "Can not get responseText: " + t.message),
                                    ""
                                }
                            }(this)) || null
                        } catch (t) {
                            e = null
                        }
                        t && t(e)
                    }
                    )),
                    kn(a, "ready", (function() {
                        s && clearTimeout(s),
                        Gt(this)
                    }
                    )),
                    kn(a, "timeout", (function() {
                        s && clearTimeout(s),
                        Gt(this),
                        t && t(null)
                    }
                    )),
                    Ta(a, e, n, r, i)
                }
                ;
                var fs = new we(Ce,"https://apis.google.com/js/client.js?onload=%{onload}")
                  , ps = "__fcb" + Math.floor(1e6 * Math.random()).toString();
                function hs(e, t, n, r, i, o, a) {
                    var s = zn(t + n);
                    Un(s, "key", e.c),
                    a && Un(s, "cb", Date.now().toString());
                    var l = "GET" == r;
                    if (l)
                        for (var u in i)
                            i.hasOwnProperty(u) && Un(s, u, i[u]);
                    return new xt((function(t, n) {
                        ds(e, s.toString(), (function(e) {
                            e ? e.error ? n(ul(e, o || {})) : t(e) : n(new T("network-request-failed"))
                        }
                        ), r, l ? void 0 : ar(Ur(i)), e.a, e.v.get())
                    }
                    ))
                }
                function ms(e) {
                    if ("string" != typeof (e = e.email) || !wr.test(e))
                        throw new T("invalid-email")
                }
                function gs(e) {
                    "email"in e && ms(e)
                }
                function vs(e) {
                    if (!e[ns]) {
                        if (e.mfaPendingCredential)
                            throw new T("multi-factor-auth-required",null,ge(e));
                        throw new T("internal-error")
                    }
                }
                function ys(e) {
                    if (e.phoneNumber || e.temporaryProof) {
                        if (!e.phoneNumber || !e.temporaryProof)
                            throw new T("internal-error")
                    } else {
                        if (!e.sessionInfo)
                            throw new T("missing-verification-id");
                        if (!e.code)
                            throw new T("missing-verification-code")
                    }
                }
                es.prototype.s = function(e, t, n, r, i) {
                    var o = this;
                    ts.then((function() {
                        window.gapi.client.setApiKey(o.c);
                        var a = window.gapi.auth.getToken();
                        window.gapi.auth.setToken(null),
                        window.gapi.client.request({
                            path: e,
                            method: n,
                            body: r,
                            headers: i,
                            authType: "none",
                            callback: function(e) {
                                window.gapi.auth.setToken(a),
                                t && t(e)
                            }
                        })
                    }
                    )).o((function(e) {
                        t && t({
                            error: {
                                message: e && e.message || "CORS_UNSUPPORTED"
                            }
                        })
                    }
                    ))
                }
                ,
                es.prototype.Ab = function() {
                    return sl(this, Ks, {})
                }
                ,
                es.prototype.Cb = function(e, t) {
                    return sl(this, Hs, {
                        idToken: e,
                        email: t
                    })
                }
                ,
                es.prototype.Db = function(e, t) {
                    return sl(this, Gs, {
                        idToken: e,
                        password: t
                    })
                }
                ;
                var bs = {
                    displayName: "DISPLAY_NAME",
                    photoUrl: "PHOTO_URL"
                };
                function ws(e) {
                    if (!e.phoneVerificationInfo)
                        throw new T("internal-error");
                    if (!e.phoneVerificationInfo.sessionInfo)
                        throw new T("missing-verification-id");
                    if (!e.phoneVerificationInfo.code)
                        throw new T("missing-verification-code")
                }
                function _s(e) {
                    if (!e.requestUri || !e.sessionId && !e.postBody && !e.pendingToken)
                        throw new T("internal-error")
                }
                function Es(e, t) {
                    return t.oauthIdToken && t.providerId && 0 == t.providerId.indexOf("oidc.") && !t.pendingToken && (e.sessionId ? t.nonce = e.sessionId : e.postBody && (nr(e = new Xn(e.postBody), "nonce") && (t.nonce = e.get("nonce")))),
                    t
                }
                function xs(e) {
                    var t = null;
                    if (e.needConfirmation ? (e.code = "account-exists-with-different-credential",
                    t = Yo(e)) : "FEDERATED_USER_ID_ALREADY_LINKED" == e.errorMessage ? (e.code = "credential-already-in-use",
                    t = Yo(e)) : "EMAIL_EXISTS" == e.errorMessage ? (e.code = "email-already-in-use",
                    t = Yo(e)) : e.errorMessage && (t = ll(e.errorMessage)),
                    t)
                        throw t;
                    vs(e)
                }
                function Cs(e, t) {
                    return t.returnIdpCredential = !0,
                    sl(e, Xs, t)
                }
                function Ss(e, t) {
                    return t.returnIdpCredential = !0,
                    sl(e, el, t)
                }
                function ks(e, t) {
                    return t.returnIdpCredential = !0,
                    t.autoCreate = !1,
                    sl(e, Js, t)
                }
                function Ts(e) {
                    if (!e.oobCode)
                        throw new T("invalid-action-code")
                }
                (e = es.prototype).Eb = function(e, t) {
                    var n = {
                        idToken: e
                    }
                      , r = [];
                    return he(bs, (function(e, i) {
                        var o = t[i];
                        null === o ? r.push(e) : i in t && (n[i] = o)
                    }
                    )),
                    r.length && (n.deleteAttribute = r),
                    sl(this, Hs, n)
                }
                ,
                e.wb = function(e, t) {
                    return ye(e = {
                        requestType: "PASSWORD_RESET",
                        email: e
                    }, t),
                    sl(this, zs, e)
                }
                ,
                e.xb = function(e, t) {
                    return ye(e = {
                        requestType: "EMAIL_SIGNIN",
                        email: e
                    }, t),
                    sl(this, Fs, e)
                }
                ,
                e.vb = function(e, t) {
                    return ye(e = {
                        requestType: "VERIFY_EMAIL",
                        idToken: e
                    }, t),
                    sl(this, Us, e)
                }
                ,
                e.Fb = function(e, t, n) {
                    return ye(e = {
                        requestType: "VERIFY_AND_CHANGE_EMAIL",
                        idToken: e,
                        newEmail: t
                    }, n),
                    sl(this, Bs, e)
                }
                ,
                e.gb = function(e) {
                    return sl(this, rl, e)
                }
                ,
                e.ob = function(e, t) {
                    return sl(this, Vs, {
                        oobCode: e,
                        newPassword: t
                    })
                }
                ,
                e.Sa = function(e) {
                    return sl(this, Is, {
                        oobCode: e
                    })
                }
                ,
                e.kb = function(e) {
                    return sl(this, Os, {
                        oobCode: e
                    })
                }
                ;
                var Os = {
                    endpoint: "setAccountInfo",
                    A: Ts,
                    Z: "email",
                    B: !0
                }
                  , Is = {
                    endpoint: "resetPassword",
                    A: Ts,
                    G: function(e) {
                        var t = e.requestType;
                        if (!t || !e.email && "EMAIL_SIGNIN" != t && "VERIFY_AND_CHANGE_EMAIL" != t)
                            throw new T("internal-error")
                    },
                    B: !0
                }
                  , As = {
                    endpoint: "signupNewUser",
                    A: function(e) {
                        if (ms(e),
                        !e.password)
                            throw new T("weak-password")
                    },
                    G: vs,
                    V: !0,
                    B: !0
                }
                  , Ps = {
                    endpoint: "createAuthUri",
                    B: !0
                }
                  , Rs = {
                    endpoint: "deleteAccount",
                    O: ["idToken"]
                }
                  , Ms = {
                    endpoint: "setAccountInfo",
                    O: ["idToken", "deleteProvider"],
                    A: function(e) {
                        if (!Array.isArray(e.deleteProvider))
                            throw new T("internal-error")
                    }
                }
                  , Ns = {
                    endpoint: "emailLinkSignin",
                    O: ["email", "oobCode"],
                    A: ms,
                    G: vs,
                    V: !0,
                    B: !0
                }
                  , Zs = {
                    endpoint: "emailLinkSignin",
                    O: ["idToken", "email", "oobCode"],
                    A: ms,
                    G: vs,
                    V: !0
                }
                  , Ds = {
                    endpoint: "accounts/mfaEnrollment:finalize",
                    O: ["idToken", "phoneVerificationInfo"],
                    A: ws,
                    G: vs,
                    B: !0,
                    Na: !0
                }
                  , js = {
                    endpoint: "accounts/mfaSignIn:finalize",
                    O: ["mfaPendingCredential", "phoneVerificationInfo"],
                    A: ws,
                    G: vs,
                    B: !0,
                    Na: !0
                }
                  , Ls = {
                    endpoint: "getAccountInfo"
                }
                  , Fs = {
                    endpoint: "getOobConfirmationCode",
                    O: ["requestType"],
                    A: function(e) {
                        if ("EMAIL_SIGNIN" != e.requestType)
                            throw new T("internal-error");
                        ms(e)
                    },
                    Z: "email",
                    B: !0
                }
                  , Us = {
                    endpoint: "getOobConfirmationCode",
                    O: ["idToken", "requestType"],
                    A: function(e) {
                        if ("VERIFY_EMAIL" != e.requestType)
                            throw new T("internal-error")
                    },
                    Z: "email",
                    B: !0
                }
                  , Bs = {
                    endpoint: "getOobConfirmationCode",
                    O: ["idToken", "newEmail", "requestType"],
                    A: function(e) {
                        if ("VERIFY_AND_CHANGE_EMAIL" != e.requestType)
                            throw new T("internal-error")
                    },
                    Z: "email",
                    B: !0
                }
                  , zs = {
                    endpoint: "getOobConfirmationCode",
                    O: ["requestType"],
                    A: function(e) {
                        if ("PASSWORD_RESET" != e.requestType)
                            throw new T("internal-error");
                        ms(e)
                    },
                    Z: "email",
                    B: !0
                }
                  , $s = {
                    mb: !0,
                    endpoint: "getProjectConfig",
                    Vb: "GET"
                }
                  , qs = {
                    mb: !0,
                    endpoint: "getRecaptchaParam",
                    Vb: "GET",
                    G: function(e) {
                        if (!e.recaptchaSiteKey)
                            throw new T("internal-error")
                    }
                }
                  , Vs = {
                    endpoint: "resetPassword",
                    A: Ts,
                    Z: "email",
                    B: !0
                }
                  , Ws = {
                    endpoint: "sendVerificationCode",
                    O: ["phoneNumber", "recaptchaToken"],
                    Z: "sessionInfo",
                    B: !0
                }
                  , Hs = {
                    endpoint: "setAccountInfo",
                    O: ["idToken"],
                    A: gs,
                    V: !0
                }
                  , Gs = {
                    endpoint: "setAccountInfo",
                    O: ["idToken"],
                    A: function(e) {
                        if (gs(e),
                        !e.password)
                            throw new T("weak-password")
                    },
                    G: vs,
                    V: !0
                }
                  , Ks = {
                    endpoint: "signupNewUser",
                    G: vs,
                    V: !0,
                    B: !0
                }
                  , Qs = {
                    endpoint: "accounts/mfaEnrollment:start",
                    O: ["idToken", "phoneEnrollmentInfo"],
                    A: function(e) {
                        if (!e.phoneEnrollmentInfo)
                            throw new T("internal-error");
                        if (!e.phoneEnrollmentInfo.phoneNumber)
                            throw new T("missing-phone-number");
                        if (!e.phoneEnrollmentInfo.recaptchaToken)
                            throw new T("missing-app-credential")
                    },
                    G: function(e) {
                        if (!e.phoneSessionInfo || !e.phoneSessionInfo.sessionInfo)
                            throw new T("internal-error")
                    },
                    B: !0,
                    Na: !0
                }
                  , Ys = {
                    endpoint: "accounts/mfaSignIn:start",
                    O: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"],
                    A: function(e) {
                        if (!e.phoneSignInInfo || !e.phoneSignInInfo.recaptchaToken)
                            throw new T("missing-app-credential")
                    },
                    G: function(e) {
                        if (!e.phoneResponseInfo || !e.phoneResponseInfo.sessionInfo)
                            throw new T("internal-error")
                    },
                    B: !0,
                    Na: !0
                }
                  , Xs = {
                    endpoint: "verifyAssertion",
                    A: _s,
                    Za: Es,
                    G: xs,
                    V: !0,
                    B: !0
                }
                  , Js = {
                    endpoint: "verifyAssertion",
                    A: _s,
                    Za: Es,
                    G: function(e) {
                        if (e.errorMessage && "USER_NOT_FOUND" == e.errorMessage)
                            throw new T("user-not-found");
                        if (e.errorMessage)
                            throw ll(e.errorMessage);
                        vs(e)
                    },
                    V: !0,
                    B: !0
                }
                  , el = {
                    endpoint: "verifyAssertion",
                    A: function(e) {
                        if (_s(e),
                        !e.idToken)
                            throw new T("internal-error")
                    },
                    Za: Es,
                    G: xs,
                    V: !0
                }
                  , tl = {
                    endpoint: "verifyCustomToken",
                    A: function(e) {
                        if (!e.token)
                            throw new T("invalid-custom-token")
                    },
                    G: vs,
                    V: !0,
                    B: !0
                }
                  , nl = {
                    endpoint: "verifyPassword",
                    A: function(e) {
                        if (ms(e),
                        !e.password)
                            throw new T("wrong-password")
                    },
                    G: vs,
                    V: !0,
                    B: !0
                }
                  , rl = {
                    endpoint: "verifyPhoneNumber",
                    A: ys,
                    G: vs,
                    B: !0
                }
                  , il = {
                    endpoint: "verifyPhoneNumber",
                    A: function(e) {
                        if (!e.idToken)
                            throw new T("internal-error");
                        ys(e)
                    },
                    G: function(e) {
                        if (e.temporaryProof)
                            throw e.code = "credential-already-in-use",
                            Yo(e);
                        vs(e)
                    }
                }
                  , ol = {
                    Ib: {
                        USER_NOT_FOUND: "user-not-found"
                    },
                    endpoint: "verifyPhoneNumber",
                    A: ys,
                    G: vs,
                    B: !0
                }
                  , al = {
                    endpoint: "accounts/mfaEnrollment:withdraw",
                    O: ["idToken", "mfaEnrollmentId"],
                    G: function(e) {
                        if (!!e[ns] ^ !!e.refreshToken)
                            throw new T("internal-error")
                    },
                    B: !0,
                    Na: !0
                };
                function sl(e, t, n) {
                    if (!function(e, t) {
                        if (!t || !t.length)
                            return !0;
                        if (!e)
                            return !1;
                        for (var n = 0; n < t.length; n++) {
                            var r = e[t[n]];
                            if (null == r || "" === r)
                                return !1
                        }
                        return !0
                    }(n, t.O))
                        return Pt(new T("internal-error"));
                    var r, i = !!t.Na, o = t.Vb || "POST";
                    return At(n).then(t.A).then((function() {
                        return t.V && (n.returnSecureToken = !0),
                        t.B && e.b && void 0 === n.tenantId && (n.tenantId = e.b),
                        hs(e, i ? e.i : e.h, t.endpoint, o, n, t.Ib, t.mb || !1)
                    }
                    )).then((function(e) {
                        return r = e,
                        t.Za ? t.Za(n, r) : r
                    }
                    )).then(t.G).then((function() {
                        if (!t.Z)
                            return r;
                        if (!(t.Z in r))
                            throw new T("internal-error");
                        return r[t.Z]
                    }
                    ))
                }
                function ll(e) {
                    return ul({
                        error: {
                            errors: [{
                                message: e
                            }],
                            code: 400,
                            message: e
                        }
                    })
                }
                function ul(e, t) {
                    var n = (e.error && e.error.errors && e.error.errors[0] || {}).reason || ""
                      , r = {
                        keyInvalid: "invalid-api-key",
                        ipRefererBlocked: "app-not-authorized"
                    };
                    if (n = r[n] ? new T(r[n]) : null)
                        return n;
                    for (var i in n = e.error && e.error.message || "",
                    ye(r = {
                        INVALID_CUSTOM_TOKEN: "invalid-custom-token",
                        CREDENTIAL_MISMATCH: "custom-token-mismatch",
                        MISSING_CUSTOM_TOKEN: "internal-error",
                        INVALID_IDENTIFIER: "invalid-email",
                        MISSING_CONTINUE_URI: "internal-error",
                        INVALID_EMAIL: "invalid-email",
                        INVALID_PASSWORD: "wrong-password",
                        USER_DISABLED: "user-disabled",
                        MISSING_PASSWORD: "internal-error",
                        EMAIL_EXISTS: "email-already-in-use",
                        PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
                        INVALID_IDP_RESPONSE: "invalid-credential",
                        INVALID_PENDING_TOKEN: "invalid-credential",
                        FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
                        MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
                        INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
                        INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
                        INVALID_SENDER: "invalid-sender",
                        EMAIL_NOT_FOUND: "user-not-found",
                        RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
                        EXPIRED_OOB_CODE: "expired-action-code",
                        INVALID_OOB_CODE: "invalid-action-code",
                        MISSING_OOB_CODE: "internal-error",
                        INVALID_PROVIDER_ID: "invalid-provider-id",
                        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
                        INVALID_ID_TOKEN: "invalid-user-token",
                        TOKEN_EXPIRED: "user-token-expired",
                        USER_NOT_FOUND: "user-token-expired",
                        CORS_UNSUPPORTED: "cors-unsupported",
                        DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
                        INVALID_APP_ID: "invalid-app-id",
                        TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
                        WEAK_PASSWORD: "weak-password",
                        OPERATION_NOT_ALLOWED: "operation-not-allowed",
                        USER_CANCELLED: "user-cancelled",
                        CAPTCHA_CHECK_FAILED: "captcha-check-failed",
                        INVALID_APP_CREDENTIAL: "invalid-app-credential",
                        INVALID_CODE: "invalid-verification-code",
                        INVALID_PHONE_NUMBER: "invalid-phone-number",
                        INVALID_SESSION_INFO: "invalid-verification-id",
                        INVALID_TEMPORARY_PROOF: "invalid-credential",
                        MISSING_APP_CREDENTIAL: "missing-app-credential",
                        MISSING_CODE: "missing-verification-code",
                        MISSING_PHONE_NUMBER: "missing-phone-number",
                        MISSING_SESSION_INFO: "missing-verification-id",
                        QUOTA_EXCEEDED: "quota-exceeded",
                        SESSION_EXPIRED: "code-expired",
                        REJECTED_CREDENTIAL: "rejected-credential",
                        INVALID_CONTINUE_URI: "invalid-continue-uri",
                        MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
                        MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
                        UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
                        INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
                        INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
                        INVALID_CERT_HASH: "invalid-cert-hash",
                        UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation",
                        INVALID_TENANT_ID: "invalid-tenant-id",
                        TENANT_ID_MISMATCH: "tenant-id-mismatch",
                        ADMIN_ONLY_OPERATION: "admin-restricted-operation",
                        INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
                        MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
                        MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
                        MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
                        EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification",
                        SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
                        SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
                        UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor",
                        UNVERIFIED_EMAIL: "unverified-email"
                    }, t || {}),
                    t = (t = n.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < t.length ? t[1] : void 0,
                    r)
                        if (0 === n.indexOf(i))
                            return new T(r[i],t);
                    return !t && e && (t = Fr(e)),
                    new T("internal-error",t)
                }
                function cl(e) {
                    this.b = e,
                    this.a = null,
                    this.sb = function(e) {
                        return (hl || (hl = new xt((function(e, t) {
                            function n() {
                                qr(),
                                Mr("gapi.load")("gapi.iframes", {
                                    callback: e,
                                    ontimeout: function() {
                                        qr(),
                                        t(Error("Network Error"))
                                    },
                                    timeout: fl.get()
                                })
                            }
                            if (Mr("gapi.iframes.Iframe"))
                                e();
                            else if (Mr("gapi.load"))
                                n();
                            else {
                                var r = "__iframefcb" + Math.floor(1e6 * Math.random()).toString();
                                l[r] = function() {
                                    Mr("gapi.load") ? n() : t(Error("Network Error"))
                                }
                                ,
                                At(Ha(r = Oe(dl, {
                                    onload: r
                                }))).o((function() {
                                    t(Error("Network Error"))
                                }
                                ))
                            }
                        }
                        )).o((function(e) {
                            throw hl = null,
                            e
                        }
                        )))).then((function() {
                            return new xt((function(t, n) {
                                Mr("gapi.iframes.getContext")().open({
                                    where: document.body,
                                    url: e.b,
                                    messageHandlersFilter: Mr("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
                                    attributes: {
                                        style: {
                                            position: "absolute",
                                            top: "-100px",
                                            width: "1px",
                                            height: "1px"
                                        }
                                    },
                                    dontclear: !0
                                }, (function(r) {
                                    function i() {
                                        clearTimeout(o),
                                        t()
                                    }
                                    e.a = r,
                                    e.a.restyle({
                                        setHideOnLeave: !1
                                    });
                                    var o = setTimeout((function() {
                                        n(Error("Network Error"))
                                    }
                                    ), pl.get());
                                    r.ping(i).then(i, (function() {
                                        n(Error("Network Error"))
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }(this)
                }
                var dl = new we(Ce,"https://apis.google.com/js/api.js?onload=%{onload}")
                  , fl = new Vr(3e4,6e4)
                  , pl = new Vr(5e3,15e3)
                  , hl = null;
                function ml(e, t, n, r) {
                    this.l = e,
                    this.h = t,
                    this.i = n,
                    this.g = r,
                    this.f = null,
                    this.g ? e = $n((e = zn(this.g.url)).c, e.a, e.g, "/emulator/auth/iframe") : e = $n("https", this.l, null, "/__/auth/iframe"),
                    this.a = e,
                    Un(this.a, "apiKey", this.h),
                    Un(this.a, "appName", this.i),
                    this.b = null,
                    this.c = []
                }
                function gl(e, t, n, r, i, o) {
                    this.u = e,
                    this.s = t,
                    this.c = n,
                    this.m = r,
                    this.v = o,
                    this.i = this.g = this.l = null,
                    this.a = i,
                    this.h = this.f = null
                }
                function vl(e) {
                    try {
                        return r.default.app(e).auth().Ga()
                    } catch (e) {
                        return []
                    }
                }
                function yl(e, t, n, r, i, o) {
                    this.s = e,
                    this.g = t,
                    this.b = n,
                    this.f = o,
                    this.c = r || null,
                    this.i = i || null,
                    this.l = this.u = this.C = null,
                    this.h = [],
                    this.m = this.a = null
                }
                function bl(e) {
                    var t = pr();
                    return function(e) {
                        return sl(e, $s, {}).then((function(e) {
                            return e.authorizedDomains || []
                        }
                        ))
                    }(e).then((function(e) {
                        e: {
                            var n = zn(t)
                              , r = n.c;
                            n = n.a;
                            for (var i = 0; i < e.length; i++) {
                                var o = e[i]
                                  , a = n
                                  , s = r;
                                if (0 == o.indexOf("chrome-extension://") ? a = zn(o).a == a && "chrome-extension" == s : "http" != s && "https" != s ? a = !1 : br.test(o) ? a = a == o : (o = o.split(".").join("\\."),
                                a = new RegExp("^(.+\\." + o + "|" + o + ")$","i").test(a)),
                                a) {
                                    e = !0;
                                    break e
                                }
                            }
                            e = !1
                        }
                        if (!e)
                            throw new Ko(pr())
                    }
                    ))
                }
                function wl(e) {
                    return e.m || (e.m = _r().then((function() {
                        if (!e.u) {
                            var t = e.c
                              , n = e.i
                              , r = vl(e.b)
                              , i = new ml(e.s,e.g,e.b,e.f);
                            i.f = t,
                            i.b = n,
                            i.c = J(r || []),
                            e.u = i.toString()
                        }
                        e.v = new cl(e.u),
                        function(e) {
                            if (!e.v)
                                throw Error("IfcHandler must be initialized!");
                            !function(e, t) {
                                e.sb.then((function() {
                                    e.a.register("authEvent", t, Mr("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                                }
                                ))
                            }(e.v, (function(t) {
                                var n = {};
                                if (t && t.authEvent) {
                                    var r = !1;
                                    for (t = Vo(t.authEvent),
                                    n = 0; n < e.h.length; n++)
                                        r = e.h[n](t) || r;
                                    return (n = {}).status = r ? "ACK" : "ERROR",
                                    At(n)
                                }
                                return n.status = "ERROR",
                                At(n)
                            }
                            ))
                        }(e)
                    }
                    ))),
                    e.m
                }
                function _l(e) {
                    return e.l || (e.C = e.c ? Pr(e.c, vl(e.b)) : null,
                    e.l = new es(e.g,M(e.i),e.C),
                    e.f && ls(e.l, e.f)),
                    e.l
                }
                function El(e, t, n, r, i, o, a, s, l, u, c, d) {
                    return (e = new gl(e,t,n,r,i,d)).l = o,
                    e.g = a,
                    e.i = s,
                    e.b = ge(l || null),
                    e.f = u,
                    e.zb(c).toString()
                }
                function xl(e) {
                    if (this.a = e || r.default.INTERNAL.reactNative && r.default.INTERNAL.reactNative.AsyncStorage,
                    !this.a)
                        throw new T("internal-error","The React Native compatibility library was not found.");
                    this.type = "asyncStorage"
                }
                function Cl(e) {
                    this.b = e,
                    this.a = {},
                    this.f = E(this.c, this)
                }
                ml.prototype.toString = function() {
                    return this.f ? Un(this.a, "v", this.f) : tr(this.a.b, "v"),
                    this.b ? Un(this.a, "eid", this.b) : tr(this.a.b, "eid"),
                    this.c.length ? Un(this.a, "fw", this.c.join(",")) : tr(this.a.b, "fw"),
                    this.a.toString()
                }
                ,
                gl.prototype.zb = function(e) {
                    return this.h = e,
                    this
                }
                ,
                gl.prototype.toString = function() {
                    if (this.v) {
                        var e = zn(this.v.url);
                        e = $n(e.c, e.a, e.g, "/emulator/auth/handler")
                    } else
                        e = $n("https", this.u, null, "/__/auth/handler");
                    if (Un(e, "apiKey", this.s),
                    Un(e, "appName", this.c),
                    Un(e, "authType", this.m),
                    this.a.isOAuthProvider) {
                        var t = this.a;
                        try {
                            var n = r.default.app(this.c).auth().la()
                        } catch (e) {
                            n = null
                        }
                        for (var i in t.pb = n,
                        Un(e, "providerId", this.a.providerId),
                        t = Ur((n = this.a).Jb))
                            t[i] = t[i].toString();
                        i = n.Qc,
                        t = ge(t);
                        for (var o = 0; o < i.length; o++) {
                            var a = i[o];
                            a in t && delete t[a]
                        }
                        n.qb && n.pb && !t[n.qb] && (t[n.qb] = n.pb),
                        me(t) || Un(e, "customParameters", Fr(t))
                    }
                    if ("function" == typeof this.a.Rb && ((n = this.a.Rb()).length && Un(e, "scopes", n.join(","))),
                    this.l ? Un(e, "redirectUrl", this.l) : tr(e.b, "redirectUrl"),
                    this.g ? Un(e, "eventId", this.g) : tr(e.b, "eventId"),
                    this.i ? Un(e, "v", this.i) : tr(e.b, "v"),
                    this.b)
                        for (var s in this.b)
                            this.b.hasOwnProperty(s) && !Bn(e, s) && Un(e, s, this.b[s]);
                    return this.h ? Un(e, "tid", this.h) : tr(e.b, "tid"),
                    this.f ? Un(e, "eid", this.f) : tr(e.b, "eid"),
                    (s = vl(this.c)).length && Un(e, "fw", s.join(",")),
                    e.toString()
                }
                ,
                (e = yl.prototype).Pb = function(e, t, n) {
                    var r = new T("popup-closed-by-user")
                      , i = new T("web-storage-unsupported")
                      , o = this
                      , a = !1;
                    return this.ma().then((function() {
                        (function(e) {
                            var t = {
                                type: "webStorageSupport"
                            };
                            return wl(e).then((function() {
                                return function(e, t) {
                                    return e.sb.then((function() {
                                        return new xt((function(n) {
                                            e.a.send(t.type, t, n, Mr("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
                                        }
                                        ))
                                    }
                                    ))
                                }(e.v, t)
                            }
                            )).then((function(e) {
                                if (e && e.length && void 0 !== e[0].webStorageSupport)
                                    return e[0].webStorageSupport;
                                throw Error()
                            }
                            ))
                        }
                        )(o).then((function(n) {
                            n || (e && vr(e),
                            t(i),
                            a = !0)
                        }
                        ))
                    }
                    )).o((function() {}
                    )).then((function() {
                        if (!a)
                            return function(e) {
                                return new xt((function(t) {
                                    return function n() {
                                        In(2e3).then((function() {
                                            if (e && !e.closed)
                                                return n();
                                            t()
                                        }
                                        ))
                                    }()
                                }
                                ))
                            }(e)
                    }
                    )).then((function() {
                        if (!a)
                            return In(n).then((function() {
                                t(r)
                            }
                            ))
                    }
                    ))
                }
                ,
                e.Yb = function() {
                    var e = Rr();
                    return !Lr(e) && !$r(e)
                }
                ,
                e.Ub = function() {
                    return !1
                }
                ,
                e.Nb = function(e, t, n, r, i, o, a, s) {
                    if (!e)
                        return Pt(new T("popup-blocked"));
                    if (a && !Lr())
                        return this.ma().o((function(t) {
                            vr(e),
                            i(t)
                        }
                        )),
                        r(),
                        At();
                    this.a || (this.a = bl(_l(this)));
                    var l = this;
                    return this.a.then((function() {
                        var t = l.ma().o((function(t) {
                            throw vr(e),
                            i(t),
                            t
                        }
                        ));
                        return r(),
                        t
                    }
                    )).then((function() {
                        ($o(n),
                        a) || hr(El(l.s, l.g, l.b, t, n, null, o, l.c, void 0, l.i, s, l.f), e)
                    }
                    )).o((function(e) {
                        throw "auth/network-request-failed" == e.code && (l.a = null),
                        e
                    }
                    ))
                }
                ,
                e.Ob = function(e, t, n, r) {
                    this.a || (this.a = bl(_l(this)));
                    var i = this;
                    return this.a.then((function() {
                        $o(t),
                        hr(El(i.s, i.g, i.b, e, t, pr(), n, i.c, void 0, i.i, r, i.f))
                    }
                    )).o((function(e) {
                        throw "auth/network-request-failed" == e.code && (i.a = null),
                        e
                    }
                    ))
                }
                ,
                e.ma = function() {
                    var e = this;
                    return wl(this).then((function() {
                        return e.v.sb
                    }
                    )).o((function() {
                        throw e.a = null,
                        new T("network-request-failed")
                    }
                    ))
                }
                ,
                e.ac = function() {
                    return !0
                }
                ,
                e.Ea = function(e) {
                    this.h.push(e)
                }
                ,
                e.Ta = function(e) {
                    Y(this.h, (function(t) {
                        return t == e
                    }
                    ))
                }
                ,
                (e = xl.prototype).get = function(e) {
                    return At(this.a.getItem(e)).then((function(e) {
                        return e && Br(e)
                    }
                    ))
                }
                ,
                e.set = function(e, t) {
                    return At(this.a.setItem(e, Fr(t)))
                }
                ,
                e.U = function(e) {
                    return At(this.a.removeItem(e))
                }
                ,
                e.ca = function() {}
                ,
                e.ia = function() {}
                ;
                var Sl, kl = [];
                function Tl(e, t, n) {
                    me(e.a) && e.b.addEventListener("message", e.f),
                    void 0 === e.a[t] && (e.a[t] = []),
                    e.a[t].push(n)
                }
                function Ol(e) {
                    this.a = e
                }
                function Il(e) {
                    this.c = e,
                    this.b = !1,
                    this.a = []
                }
                function Al(e, t, n, r) {
                    var i, o, a, s, l = n || {}, u = null;
                    if (e.b)
                        return Pt(Error("connection_unavailable"));
                    var c = r ? 800 : 50
                      , d = "undefined" != typeof MessageChannel ? new MessageChannel : null;
                    return new xt((function(n, r) {
                        d ? (i = Math.floor(Math.random() * Math.pow(10, 20)).toString(),
                        d.port1.start(),
                        a = setTimeout((function() {
                            r(Error("unsupported_event"))
                        }
                        ), c),
                        u = {
                            messageChannel: d,
                            onMessage: o = function(e) {
                                e.data.eventId === i && ("ack" === e.data.status ? (clearTimeout(a),
                                s = setTimeout((function() {
                                    r(Error("timeout"))
                                }
                                ), 3e3)) : "done" === e.data.status ? (clearTimeout(s),
                                void 0 !== e.data.response ? n(e.data.response) : r(Error("unknown_error"))) : (clearTimeout(a),
                                clearTimeout(s),
                                r(Error("invalid_response"))))
                            }
                        },
                        e.a.push(u),
                        d.port1.addEventListener("message", o),
                        e.c.postMessage({
                            eventType: t,
                            eventId: i,
                            data: l
                        }, [d.port2])) : r(Error("connection_unavailable"))
                    }
                    )).then((function(t) {
                        return Pl(e, u),
                        t
                    }
                    )).o((function(t) {
                        throw Pl(e, u),
                        t
                    }
                    ))
                }
                function Pl(e, t) {
                    if (t) {
                        var n = t.messageChannel
                          , r = t.onMessage;
                        n && (n.port1.removeEventListener("message", r),
                        n.port1.close()),
                        Y(e.a, (function(e) {
                            return e == t
                        }
                        ))
                    }
                }
                function Rl() {
                    if (!Dl())
                        throw new T("web-storage-unsupported");
                    this.c = {},
                    this.a = [],
                    this.b = 0,
                    this.m = l.indexedDB,
                    this.type = "indexedDB",
                    this.g = this.v = this.f = this.l = null,
                    this.s = !1,
                    this.h = null;
                    var e = this;
                    Cr() && self ? (this.v = function() {
                        var e = Cr() ? self : null;
                        if (V(kl, (function(n) {
                            n.b == e && (t = n)
                        }
                        )),
                        !t) {
                            var t = new Cl(e);
                            kl.push(t)
                        }
                        return t
                    }(),
                    Tl(this.v, "keyChanged", (function(t, n) {
                        return Bl(e).then((function(t) {
                            return 0 < t.length && V(e.a, (function(e) {
                                e(t)
                            }
                            )),
                            {
                                keyProcessed: K(t, n.key)
                            }
                        }
                        ))
                    }
                    )),
                    Tl(this.v, "ping", (function() {
                        return At(["keyChanged"])
                    }
                    ))) : function() {
                        var e = l.navigator;
                        return e && e.serviceWorker ? At().then((function() {
                            return e.serviceWorker.ready
                        }
                        )).then((function(e) {
                            return e.active || null
                        }
                        )).o((function() {
                            return null
                        }
                        )) : At(null)
                    }().then((function(t) {
                        (e.h = t) && (e.g = new Il(new Ol(t)),
                        Al(e.g, "ping", null, !0).then((function(t) {
                            t[0].fulfilled && K(t[0].value, "keyChanged") && (e.s = !0)
                        }
                        )).o((function() {}
                        )))
                    }
                    ))
                }
                function Ml(e) {
                    return new xt((function(t, n) {
                        var r = e.m.open("firebaseLocalStorageDb", 1);
                        r.onerror = function(e) {
                            try {
                                e.preventDefault()
                            } catch (e) {}
                            n(Error(e.target.error))
                        }
                        ,
                        r.onupgradeneeded = function(e) {
                            e = e.target.result;
                            try {
                                e.createObjectStore("firebaseLocalStorage", {
                                    keyPath: "fbase_key"
                                })
                            } catch (e) {
                                n(e)
                            }
                        }
                        ,
                        r.onsuccess = function(r) {
                            (r = r.target.result).objectStoreNames.contains("firebaseLocalStorage") ? t(r) : function(e) {
                                return new xt((function(t, n) {
                                    var r = e.m.deleteDatabase("firebaseLocalStorageDb");
                                    r.onsuccess = function() {
                                        t()
                                    }
                                    ,
                                    r.onerror = function(e) {
                                        n(Error(e.target.error))
                                    }
                                }
                                ))
                            }(e).then((function() {
                                return Ml(e)
                            }
                            )).then((function(e) {
                                t(e)
                            }
                            )).o((function(e) {
                                n(e)
                            }
                            ))
                        }
                    }
                    ))
                }
                function Nl(e) {
                    return e.i || (e.i = Ml(e)),
                    e.i
                }
                function Zl(e, t) {
                    var n = 0;
                    return new xt((function r(i, o) {
                        Nl(e).then(t).then(i).o((function(t) {
                            if (!(3 < ++n))
                                return Nl(e).then((function(t) {
                                    return t.close(),
                                    e.i = void 0,
                                    r(i, o)
                                }
                                )).o((function(e) {
                                    o(e)
                                }
                                ));
                            o(t)
                        }
                        ))
                    }
                    ))
                }
                function Dl() {
                    try {
                        return !!l.indexedDB
                    } catch (e) {
                        return !1
                    }
                }
                function jl(e) {
                    return e.objectStore("firebaseLocalStorage")
                }
                function Ll(e, t) {
                    return e.transaction(["firebaseLocalStorage"], t ? "readwrite" : "readonly")
                }
                function Fl(e) {
                    return new xt((function(t, n) {
                        e.onsuccess = function(e) {
                            e && e.target ? t(e.target.result) : t()
                        }
                        ,
                        e.onerror = function(e) {
                            n(e.target.error)
                        }
                    }
                    ))
                }
                function Ul(e, t) {
                    return e.g && e.h && function() {
                        var e = l.navigator;
                        return e && e.serviceWorker && e.serviceWorker.controller || null
                    }() === e.h ? Al(e.g, "keyChanged", {
                        key: t
                    }, e.s).then((function() {}
                    )).o((function() {}
                    )) : At()
                }
                function Bl(e) {
                    return Nl(e).then((function(e) {
                        var t = jl(Ll(e, !1));
                        return t.getAll ? Fl(t.getAll()) : new xt((function(e, n) {
                            var r = []
                              , i = t.openCursor();
                            i.onsuccess = function(t) {
                                (t = t.target.result) ? (r.push(t.value),
                                t.continue()) : e(r)
                            }
                            ,
                            i.onerror = function(e) {
                                n(e.target.error)
                            }
                        }
                        ))
                    }
                    )).then((function(t) {
                        var n = {}
                          , r = [];
                        if (0 == e.b) {
                            for (r = 0; r < t.length; r++)
                                n[t[r].fbase_key] = t[r].value;
                            r = mr(e.c, n),
                            e.c = n
                        }
                        return r
                    }
                    ))
                }
                function zl(e) {
                    e.l && e.l.cancel("STOP_EVENT"),
                    e.f && (clearTimeout(e.f),
                    e.f = null)
                }
                function $l(e) {
                    var t = this
                      , n = null;
                    this.a = [],
                    this.type = "indexedDB",
                    this.c = e,
                    this.b = At().then((function() {
                        if (Dl()) {
                            var e = zr()
                              , r = "__sak" + e;
                            return Sl || (Sl = new Rl),
                            (n = Sl).set(r, e).then((function() {
                                return n.get(r)
                            }
                            )).then((function(t) {
                                if (t !== e)
                                    throw Error("indexedDB not supported!");
                                return n.U(r)
                            }
                            )).then((function() {
                                return n
                            }
                            )).o((function() {
                                return t.c
                            }
                            ))
                        }
                        return t.c
                    }
                    )).then((function(e) {
                        return t.type = e.type,
                        e.ca((function(e) {
                            V(t.a, (function(t) {
                                t(e)
                            }
                            ))
                        }
                        )),
                        e
                    }
                    ))
                }
                function ql() {
                    this.a = {},
                    this.type = "inMemory"
                }
                function Vl() {
                    if (!function() {
                        var e = "Node" == Sr();
                        if (e = Wl() || e && r.default.INTERNAL.node && r.default.INTERNAL.node.localStorage,
                        !e)
                            return !1;
                        try {
                            return e.setItem("__sak", "1"),
                            e.removeItem("__sak"),
                            !0
                        } catch (e) {
                            return !1
                        }
                    }()) {
                        if ("Node" == Sr())
                            throw new T("internal-error","The LocalStorage compatibility library was not found.");
                        throw new T("web-storage-unsupported")
                    }
                    this.a = Wl() || r.default.INTERNAL.node.localStorage,
                    this.type = "localStorage"
                }
                function Wl() {
                    try {
                        var e = l.localStorage
                          , t = zr();
                        return e && (e.setItem(t, "1"),
                        e.removeItem(t)),
                        e
                    } catch (e) {
                        return null
                    }
                }
                function Hl() {
                    this.type = "nullStorage"
                }
                function Gl() {
                    if (!function() {
                        var e = "Node" == Sr();
                        if (e = Kl() || e && r.default.INTERNAL.node && r.default.INTERNAL.node.sessionStorage,
                        !e)
                            return !1;
                        try {
                            return e.setItem("__sak", "1"),
                            e.removeItem("__sak"),
                            !0
                        } catch (e) {
                            return !1
                        }
                    }()) {
                        if ("Node" == Sr())
                            throw new T("internal-error","The SessionStorage compatibility library was not found.");
                        throw new T("web-storage-unsupported")
                    }
                    this.a = Kl() || r.default.INTERNAL.node.sessionStorage,
                    this.type = "sessionStorage"
                }
                function Kl() {
                    try {
                        var e = l.sessionStorage
                          , t = zr();
                        return e && (e.setItem(t, "1"),
                        e.removeItem(t)),
                        e
                    } catch (e) {
                        return null
                    }
                }
                function Ql() {
                    var e = {};
                    e.Browser = Jl,
                    e.Node = eu,
                    e.ReactNative = tu,
                    e.Worker = nu,
                    this.a = e[Sr()]
                }
                Cl.prototype.c = function(e) {
                    var t = e.data.eventType
                      , n = e.data.eventId
                      , r = this.a[t];
                    if (r && 0 < r.length) {
                        e.ports[0].postMessage({
                            status: "ack",
                            eventId: n,
                            eventType: t,
                            response: null
                        });
                        var i = [];
                        V(r, (function(t) {
                            i.push(At().then((function() {
                                return t(e.origin, e.data.data)
                            }
                            )))
                        }
                        )),
                        Mt(i).then((function(r) {
                            var i = [];
                            V(r, (function(e) {
                                i.push({
                                    fulfilled: e.Qb,
                                    value: e.value,
                                    reason: e.reason ? e.reason.message : void 0
                                })
                            }
                            )),
                            V(i, (function(e) {
                                for (var t in e)
                                    void 0 === e[t] && delete e[t]
                            }
                            )),
                            e.ports[0].postMessage({
                                status: "done",
                                eventId: n,
                                eventType: t,
                                response: i
                            })
                        }
                        ))
                    }
                }
                ,
                Ol.prototype.postMessage = function(e, t) {
                    this.a.postMessage(e, t)
                }
                ,
                Il.prototype.close = function() {
                    for (; 0 < this.a.length; )
                        Pl(this, this.a[0]);
                    this.b = !0
                }
                ,
                (e = Rl.prototype).set = function(e, t) {
                    var n = this
                      , r = !1;
                    return Zl(this, (function(t) {
                        return Fl((t = jl(Ll(t, !0))).get(e))
                    }
                    )).then((function(i) {
                        return Zl(n, (function(o) {
                            if (o = jl(Ll(o, !0)),
                            i)
                                return i.value = t,
                                Fl(o.put(i));
                            n.b++,
                            r = !0;
                            var a = {};
                            return a.fbase_key = e,
                            a.value = t,
                            Fl(o.add(a))
                        }
                        ))
                    }
                    )).then((function() {
                        return n.c[e] = t,
                        Ul(n, e)
                    }
                    )).oa((function() {
                        r && n.b--
                    }
                    ))
                }
                ,
                e.get = function(e) {
                    return Zl(this, (function(t) {
                        return Fl(jl(Ll(t, !1)).get(e))
                    }
                    )).then((function(e) {
                        return e && e.value
                    }
                    ))
                }
                ,
                e.U = function(e) {
                    var t = this
                      , n = !1;
                    return Zl(this, (function(r) {
                        return n = !0,
                        t.b++,
                        Fl(jl(Ll(r, !0)).delete(e))
                    }
                    )).then((function() {
                        return delete t.c[e],
                        Ul(t, e)
                    }
                    )).oa((function() {
                        n && t.b--
                    }
                    ))
                }
                ,
                e.ca = function(e) {
                    0 == this.a.length && function(e) {
                        function t() {
                            e.f = setTimeout((function() {
                                e.l = Bl(e).then((function(t) {
                                    0 < t.length && V(e.a, (function(e) {
                                        e(t)
                                    }
                                    ))
                                }
                                )).then((function() {
                                    t()
                                }
                                )).o((function(e) {
                                    "STOP_EVENT" != e.message && t()
                                }
                                ))
                            }
                            ), 800)
                        }
                        zl(e),
                        t()
                    }(this),
                    this.a.push(e)
                }
                ,
                e.ia = function(e) {
                    Y(this.a, (function(t) {
                        return t == e
                    }
                    )),
                    0 == this.a.length && zl(this)
                }
                ,
                (e = $l.prototype).get = function(e) {
                    return this.b.then((function(t) {
                        return t.get(e)
                    }
                    ))
                }
                ,
                e.set = function(e, t) {
                    return this.b.then((function(n) {
                        return n.set(e, t)
                    }
                    ))
                }
                ,
                e.U = function(e) {
                    return this.b.then((function(t) {
                        return t.U(e)
                    }
                    ))
                }
                ,
                e.ca = function(e) {
                    this.a.push(e)
                }
                ,
                e.ia = function(e) {
                    Y(this.a, (function(t) {
                        return t == e
                    }
                    ))
                }
                ,
                (e = ql.prototype).get = function(e) {
                    return At(this.a[e])
                }
                ,
                e.set = function(e, t) {
                    return this.a[e] = t,
                    At()
                }
                ,
                e.U = function(e) {
                    return delete this.a[e],
                    At()
                }
                ,
                e.ca = function() {}
                ,
                e.ia = function() {}
                ,
                (e = Vl.prototype).get = function(e) {
                    var t = this;
                    return At().then((function() {
                        return Br(t.a.getItem(e))
                    }
                    ))
                }
                ,
                e.set = function(e, t) {
                    var n = this;
                    return At().then((function() {
                        var r = Fr(t);
                        null === r ? n.U(e) : n.a.setItem(e, r)
                    }
                    ))
                }
                ,
                e.U = function(e) {
                    var t = this;
                    return At().then((function() {
                        t.a.removeItem(e)
                    }
                    ))
                }
                ,
                e.ca = function(e) {
                    l.window && fn(l.window, "storage", e)
                }
                ,
                e.ia = function(e) {
                    l.window && mn(l.window, "storage", e)
                }
                ,
                (e = Hl.prototype).get = function() {
                    return At(null)
                }
                ,
                e.set = function() {
                    return At()
                }
                ,
                e.U = function() {
                    return At()
                }
                ,
                e.ca = function() {}
                ,
                e.ia = function() {}
                ,
                (e = Gl.prototype).get = function(e) {
                    var t = this;
                    return At().then((function() {
                        return Br(t.a.getItem(e))
                    }
                    ))
                }
                ,
                e.set = function(e, t) {
                    var n = this;
                    return At().then((function() {
                        var r = Fr(t);
                        null === r ? n.U(e) : n.a.setItem(e, r)
                    }
                    ))
                }
                ,
                e.U = function(e) {
                    var t = this;
                    return At().then((function() {
                        t.a.removeItem(e)
                    }
                    ))
                }
                ,
                e.ca = function() {}
                ,
                e.ia = function() {}
                ;
                var Yl, Xl, Jl = {
                    F: Vl,
                    cb: Gl
                }, eu = {
                    F: Vl,
                    cb: Gl
                }, tu = {
                    F: xl,
                    cb: Hl
                }, nu = {
                    F: Vl,
                    cb: Hl
                }, ru = {
                    rd: "local",
                    NONE: "none",
                    td: "session"
                };
                function iu() {
                    var e = !($r(Rr()) || !xr())
                      , t = Lr()
                      , n = Nr();
                    this.m = e,
                    this.h = t,
                    this.l = n,
                    this.a = {},
                    Yl || (Yl = new Ql),
                    e = Yl;
                    try {
                        this.g = !fr() && Gr() || !l.indexedDB ? new e.a.F : new $l(Cr() ? new ql : new e.a.F)
                    } catch (e) {
                        this.g = new ql,
                        this.h = !0
                    }
                    try {
                        this.i = new e.a.cb
                    } catch (e) {
                        this.i = new ql
                    }
                    this.v = new ql,
                    this.f = E(this.Zb, this),
                    this.b = {}
                }
                function ou() {
                    return Xl || (Xl = new iu),
                    Xl
                }
                function au(e, t) {
                    switch (t) {
                    case "session":
                        return e.i;
                    case "none":
                        return e.v;
                    default:
                        return e.g
                    }
                }
                function su(e, t) {
                    return "firebase:" + e.name + (t ? ":" + t : "")
                }
                function lu(e, t, n) {
                    return n = su(t, n),
                    "local" == t.F && (e.b[n] = null),
                    au(e, t.F).U(n)
                }
                function uu(e) {
                    e.c && (clearInterval(e.c),
                    e.c = null)
                }
                function cu(e) {
                    this.a = e,
                    this.b = ou()
                }
                (e = iu.prototype).get = function(e, t) {
                    return au(this, e.F).get(su(e, t))
                }
                ,
                e.set = function(e, t, n) {
                    var r = su(e, n)
                      , i = this
                      , o = au(this, e.F);
                    return o.set(r, t).then((function() {
                        return o.get(r)
                    }
                    )).then((function(t) {
                        "local" == e.F && (i.b[r] = t)
                    }
                    ))
                }
                ,
                e.addListener = function(e, t, n) {
                    e = su(e, t),
                    this.l && (this.b[e] = l.localStorage.getItem(e)),
                    me(this.a) && (au(this, "local").ca(this.f),
                    this.h || (fr() || !Gr()) && l.indexedDB || !this.l || function(e) {
                        uu(e),
                        e.c = setInterval((function() {
                            for (var t in e.a) {
                                var n = l.localStorage.getItem(t)
                                  , r = e.b[t];
                                n != r && (e.b[t] = n,
                                n = new en({
                                    type: "storage",
                                    key: t,
                                    target: window,
                                    oldValue: r,
                                    newValue: n,
                                    a: !0
                                }),
                                e.Zb(n))
                            }
                        }
                        ), 1e3)
                    }(this)),
                    this.a[e] || (this.a[e] = []),
                    this.a[e].push(n)
                }
                ,
                e.removeListener = function(e, t, n) {
                    e = su(e, t),
                    this.a[e] && (Y(this.a[e], (function(e) {
                        return e == n
                    }
                    )),
                    0 == this.a[e].length && delete this.a[e]),
                    me(this.a) && (au(this, "local").ia(this.f),
                    uu(this))
                }
                ,
                e.Zb = function(e) {
                    if (e && e.g) {
                        var t = e.a.key;
                        if (null == t)
                            for (var n in this.a) {
                                var r = this.b[n];
                                void 0 === r && (r = null);
                                var i = l.localStorage.getItem(n);
                                i !== r && (this.b[n] = i,
                                this.nb(n))
                            }
                        else if (0 == t.indexOf("firebase:") && this.a[t]) {
                            if (void 0 !== e.a.a ? au(this, "local").ia(this.f) : uu(this),
                            this.m)
                                if (n = l.localStorage.getItem(t),
                                (r = e.a.newValue) !== n)
                                    null !== r ? l.localStorage.setItem(t, r) : l.localStorage.removeItem(t);
                                else if (this.b[t] === r && void 0 === e.a.a)
                                    return;
                            var o = this;
                            n = function() {
                                void 0 === e.a.a && o.b[t] === l.localStorage.getItem(t) || (o.b[t] = l.localStorage.getItem(t),
                                o.nb(t))
                            }
                            ,
                            Qe && ut && 10 == ut && l.localStorage.getItem(t) !== e.a.newValue && e.a.newValue !== e.a.oldValue ? setTimeout(n, 10) : n()
                        }
                    } else
                        V(e, E(this.nb, this))
                }
                ,
                e.nb = function(e) {
                    this.a[e] && V(this.a[e], (function(e) {
                        e()
                    }
                    ))
                }
                ;
                var du, fu = {
                    name: "authEvent",
                    F: "local"
                };
                function pu() {
                    this.a = ou()
                }
                function hu(e, t) {
                    this.b = mu,
                    this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b),
                    this.g = this.c = 0,
                    this.a = [],
                    this.i = e,
                    this.h = t,
                    this.l = l.Int32Array ? new Int32Array(64) : Array(64),
                    void 0 === du && (du = l.Int32Array ? new Int32Array(Eu) : Eu),
                    this.reset()
                }
                S(hu, (function() {
                    this.b = -1
                }
                ));
                for (var mu = 64, gu = mu - 1, vu = [], yu = 0; yu < gu; yu++)
                    vu[yu] = 0;
                var bu = X(128, vu);
                function wu(e) {
                    for (var t = e.f, n = e.l, r = 0, i = 0; i < t.length; )
                        n[r++] = t[i] << 24 | t[i + 1] << 16 | t[i + 2] << 8 | t[i + 3],
                        i = 4 * r;
                    for (t = 16; 64 > t; t++) {
                        i = 0 | n[t - 15],
                        r = 0 | n[t - 2];
                        var o = (0 | n[t - 16]) + ((i >>> 7 | i << 25) ^ (i >>> 18 | i << 14) ^ i >>> 3) | 0
                          , a = (0 | n[t - 7]) + ((r >>> 17 | r << 15) ^ (r >>> 19 | r << 13) ^ r >>> 10) | 0;
                        n[t] = o + a | 0
                    }
                    r = 0 | e.a[0],
                    i = 0 | e.a[1];
                    var s = 0 | e.a[2]
                      , l = 0 | e.a[3]
                      , u = 0 | e.a[4]
                      , c = 0 | e.a[5]
                      , d = 0 | e.a[6];
                    for (o = 0 | e.a[7],
                    t = 0; 64 > t; t++) {
                        var f = ((r >>> 2 | r << 30) ^ (r >>> 13 | r << 19) ^ (r >>> 22 | r << 10)) + (r & i ^ r & s ^ i & s) | 0;
                        a = (o = o + ((u >>> 6 | u << 26) ^ (u >>> 11 | u << 21) ^ (u >>> 25 | u << 7)) | 0) + ((a = (a = u & c ^ ~u & d) + (0 | du[t]) | 0) + (0 | n[t]) | 0) | 0,
                        o = d,
                        d = c,
                        c = u,
                        u = l + a | 0,
                        l = s,
                        s = i,
                        i = r,
                        r = a + f | 0
                    }
                    e.a[0] = e.a[0] + r | 0,
                    e.a[1] = e.a[1] + i | 0,
                    e.a[2] = e.a[2] + s | 0,
                    e.a[3] = e.a[3] + l | 0,
                    e.a[4] = e.a[4] + u | 0,
                    e.a[5] = e.a[5] + c | 0,
                    e.a[6] = e.a[6] + d | 0,
                    e.a[7] = e.a[7] + o | 0
                }
                function _u(e, t, n) {
                    void 0 === n && (n = t.length);
                    var r = 0
                      , i = e.c;
                    if ("string" == typeof t)
                        for (; r < n; )
                            e.f[i++] = t.charCodeAt(r++),
                            i == e.b && (wu(e),
                            i = 0);
                    else {
                        if (!h(t))
                            throw Error("message must be string or array");
                        for (; r < n; ) {
                            var o = t[r++];
                            if (!("number" == typeof o && 0 <= o && 255 >= o && o == (0 | o)))
                                throw Error("message must be a byte array");
                            e.f[i++] = o,
                            i == e.b && (wu(e),
                            i = 0)
                        }
                    }
                    e.c = i,
                    e.g += n
                }
                hu.prototype.reset = function() {
                    this.g = this.c = 0,
                    this.a = l.Int32Array ? new Int32Array(this.h) : J(this.h)
                }
                ;
                var Eu = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
                function xu() {
                    hu.call(this, 8, Cu)
                }
                S(xu, hu);
                var Cu = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
                function Su(e, t, n, r, i, o) {
                    this.v = e,
                    this.i = t,
                    this.l = n,
                    this.m = r || null,
                    this.u = i || null,
                    this.s = o,
                    this.h = t + ":" + n,
                    this.C = new pu,
                    this.g = new cu(this.h),
                    this.f = null,
                    this.b = [],
                    this.a = this.c = null
                }
                function ku(e) {
                    return new T("invalid-cordova-configuration",e)
                }
                function Tu(e) {
                    var t = new xu;
                    _u(t, e),
                    e = [];
                    var n = 8 * t.g;
                    56 > t.c ? _u(t, bu, 56 - t.c) : _u(t, bu, t.b - (t.c - 56));
                    for (var r = 63; 56 <= r; r--)
                        t.f[r] = 255 & n,
                        n /= 256;
                    for (wu(t),
                    r = n = 0; r < t.i; r++)
                        for (var i = 24; 0 <= i; i -= 8)
                            e[n++] = t.a[r] >> i & 255;
                    return function(e) {
                        return H(e, (function(e) {
                            return 1 < (e = e.toString(16)).length ? e : "0" + e
                        }
                        )).join("")
                    }(e)
                }
                function Ou(e, t) {
                    for (var n = 0; n < e.b.length; n++)
                        try {
                            e.b[n](t)
                        } catch (e) {}
                }
                function Iu(e) {
                    return e.f || (e.f = e.ma().then((function() {
                        return new xt((function(t) {
                            e.Ea((function n(r) {
                                return t(r),
                                e.Ta(n),
                                !1
                            }
                            )),
                            function(e) {
                                function t(t) {
                                    r = !0,
                                    i && i.cancel(),
                                    Au(e).then((function(r) {
                                        var i = n;
                                        if (r && t && t.url) {
                                            var o = null;
                                            -1 != (i = lo(t.url)).indexOf("/__/auth/callback") && (o = (o = "object" == typeof (o = Br(Bn(o = zn(i), "firebaseError") || null)) ? O(o) : null) ? new qo(r.c,r.b,null,null,o,null,r.T()) : new qo(r.c,r.b,i,r.f,null,null,r.T())),
                                            i = o || n
                                        }
                                        Ou(e, i)
                                    }
                                    ))
                                }
                                var n = new qo("unknown",null,null,null,new T("no-auth-event"))
                                  , r = !1
                                  , i = In(500).then((function() {
                                    return Au(e).then((function() {
                                        r || Ou(e, n)
                                    }
                                    ))
                                }
                                ))
                                  , o = l.handleOpenURL;
                                l.handleOpenURL = function(e) {
                                    if (0 == e.toLowerCase().indexOf(Mr("BuildInfo.packageName", l).toLowerCase() + "://") && t({
                                        url: e
                                    }),
                                    "function" == typeof o)
                                        try {
                                            o(e)
                                        } catch (e) {
                                            console.error(e)
                                        }
                                }
                                ,
                                Go || (Go = new Wo),
                                function(e) {
                                    var t = Go;
                                    t.a.push(e),
                                    t.b || (t.b = function(e) {
                                        for (var n = 0; n < t.a.length; n++)
                                            t.a[n](e)
                                    }
                                    ,
                                    "function" == typeof (e = Mr("universalLinks.subscribe", l)) && e(null, t.b))
                                }(t)
                            }(e)
                        }
                        ))
                    }
                    ))),
                    e.f
                }
                function Au(e) {
                    var t = null;
                    return function(e) {
                        return e.b.get(fu, e.a).then((function(e) {
                            return Vo(e)
                        }
                        ))
                    }(e.g).then((function(n) {
                        return t = n,
                        lu((n = e.g).b, fu, n.a)
                    }
                    )).then((function() {
                        return t
                    }
                    ))
                }
                function Pu(e) {
                    this.a = e,
                    this.b = ou()
                }
                (e = Su.prototype).ma = function() {
                    return this.Ia ? this.Ia : this.Ia = (Er(void 0) ? _r().then((function() {
                        return new xt((function(e, t) {
                            var n = l.document
                              , r = setTimeout((function() {
                                t(Error("Cordova framework is not ready."))
                            }
                            ), 1e3);
                            n.addEventListener("deviceready", (function() {
                                clearTimeout(r),
                                e()
                            }
                            ), !1)
                        }
                        ))
                    }
                    )) : Pt(Error("Cordova must run in an Android or iOS file scheme."))).then((function() {
                        if ("function" != typeof Mr("universalLinks.subscribe", l))
                            throw ku("cordova-universal-links-plugin-fix is not installed");
                        if (void 0 === Mr("BuildInfo.packageName", l))
                            throw ku("cordova-plugin-buildinfo is not installed");
                        if ("function" != typeof Mr("cordova.plugins.browsertab.openUrl", l))
                            throw ku("cordova-plugin-browsertab is not installed");
                        if ("function" != typeof Mr("cordova.InAppBrowser.open", l))
                            throw ku("cordova-plugin-inappbrowser is not installed")
                    }
                    ), (function() {
                        throw new T("cordova-not-ready")
                    }
                    ))
                }
                ,
                e.Pb = function(e, t) {
                    return t(new T("operation-not-supported-in-this-environment")),
                    At()
                }
                ,
                e.Nb = function() {
                    return Pt(new T("operation-not-supported-in-this-environment"))
                }
                ,
                e.ac = function() {
                    return !1
                }
                ,
                e.Yb = function() {
                    return !0
                }
                ,
                e.Ub = function() {
                    return !0
                }
                ,
                e.Ob = function(e, t, n, r) {
                    if (this.c)
                        return Pt(new T("redirect-operation-pending"));
                    var i = this
                      , o = l.document
                      , a = null
                      , s = null
                      , u = null
                      , c = null;
                    return this.c = At().then((function() {
                        return $o(t),
                        Iu(i)
                    }
                    )).then((function() {
                        return function(e, t, n, r, i) {
                            var o = function() {
                                for (var e = 20, t = []; 0 < e; )
                                    t.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))),
                                    e--;
                                return t.join("")
                            }()
                              , a = new qo(t,r,null,o,new T("no-auth-event"),null,i)
                              , s = Mr("BuildInfo.packageName", l);
                            if ("string" != typeof s)
                                throw new T("invalid-cordova-configuration");
                            var u = Mr("BuildInfo.displayName", l)
                              , c = {};
                            if (Rr().toLowerCase().match(/iphone|ipad|ipod/))
                                c.ibi = s;
                            else {
                                if (!Rr().toLowerCase().match(/android/))
                                    return Pt(new T("operation-not-supported-in-this-environment"));
                                c.apn = s
                            }
                            u && (c.appDisplayName = u),
                            o = Tu(o),
                            c.sessionId = o;
                            var d = El(e.v, e.i, e.l, t, n, null, r, e.m, c, e.u, i, e.s);
                            return e.ma().then((function() {
                                var t = e.h;
                                return e.C.a.set(fu, a.w(), t)
                            }
                            )).then((function() {
                                var t = Mr("cordova.plugins.browsertab.isAvailable", l);
                                if ("function" != typeof t)
                                    throw new T("invalid-cordova-configuration");
                                var n = null;
                                t((function(t) {
                                    if (t) {
                                        if ("function" != typeof (n = Mr("cordova.plugins.browsertab.openUrl", l)))
                                            throw new T("invalid-cordova-configuration");
                                        n(d)
                                    } else {
                                        if ("function" != typeof (n = Mr("cordova.InAppBrowser.open", l)))
                                            throw new T("invalid-cordova-configuration");
                                        t = Rr(),
                                        e.a = n(d, t.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || t.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes")
                                    }
                                }
                                ))
                            }
                            ))
                        }(i, e, t, n, r)
                    }
                    )).then((function() {
                        return new xt((function(e, t) {
                            s = function() {
                                var t = Mr("cordova.plugins.browsertab.close", l);
                                return e(),
                                "function" == typeof t && t(),
                                i.a && "function" == typeof i.a.close && (i.a.close(),
                                i.a = null),
                                !1
                            }
                            ,
                            i.Ea(s),
                            u = function() {
                                a || (a = In(2e3).then((function() {
                                    t(new T("redirect-cancelled-by-user"))
                                }
                                )))
                            }
                            ,
                            c = function() {
                                Wr() && u()
                            }
                            ,
                            o.addEventListener("resume", u, !1),
                            Rr().toLowerCase().match(/android/) || o.addEventListener("visibilitychange", c, !1)
                        }
                        )).o((function(e) {
                            return Au(i).then((function() {
                                throw e
                            }
                            ))
                        }
                        ))
                    }
                    )).oa((function() {
                        u && o.removeEventListener("resume", u, !1),
                        c && o.removeEventListener("visibilitychange", c, !1),
                        a && a.cancel(),
                        s && i.Ta(s),
                        i.c = null
                    }
                    ))
                }
                ,
                e.Ea = function(e) {
                    this.b.push(e),
                    Iu(this).o((function(t) {
                        "auth/invalid-cordova-configuration" === t.code && (t = new qo("unknown",null,null,null,new T("no-auth-event")),
                        e(t))
                    }
                    ))
                }
                ,
                e.Ta = function(e) {
                    Y(this.b, (function(t) {
                        return t == e
                    }
                    ))
                }
                ;
                var Ru = {
                    name: "pendingRedirect",
                    F: "session"
                };
                function Mu(e) {
                    return lu(e.b, Ru, e.a)
                }
                function Nu(e, t, n, r) {
                    this.i = {},
                    this.u = 0,
                    this.D = e,
                    this.v = t,
                    this.m = n,
                    this.J = r,
                    this.h = [],
                    this.f = !1,
                    this.l = E(this.s, this),
                    this.b = new Ku,
                    this.C = new ec,
                    this.g = new Pu(Hu(this.v, this.m)),
                    this.c = {},
                    this.c.unknown = this.b,
                    this.c.signInViaRedirect = this.b,
                    this.c.linkViaRedirect = this.b,
                    this.c.reauthViaRedirect = this.b,
                    this.c.signInViaPopup = this.C,
                    this.c.linkViaPopup = this.C,
                    this.c.reauthViaPopup = this.C,
                    this.a = Zu(this.D, this.v, this.m, I, this.J)
                }
                function Zu(e, t, n, i, o) {
                    var a = r.default.SDK_VERSION || null;
                    return Er() ? new Su(e,t,n,a,i,o) : new yl(e,t,n,a,i,o)
                }
                function Du(e) {
                    e.f || (e.f = !0,
                    e.a.Ea(e.l));
                    var t = e.a;
                    return e.a.ma().o((function(n) {
                        throw e.a == t && e.reset(),
                        n
                    }
                    ))
                }
                function ju(e) {
                    e.a.Yb() && Du(e).o((function(t) {
                        var n = new qo("unknown",null,null,null,new T("operation-not-supported-in-this-environment"));
                        $u(t) && e.s(n)
                    }
                    )),
                    e.a.Ub() || Qu(e.b)
                }
                function Lu(e, t) {
                    K(e.h, t) || e.h.push(t),
                    e.f || function(e) {
                        return e.b.get(Ru, e.a).then((function(e) {
                            return "pending" == e
                        }
                        ))
                    }(e.g).then((function(t) {
                        t ? Mu(e.g).then((function() {
                            Du(e).o((function(t) {
                                var n = new qo("unknown",null,null,null,new T("operation-not-supported-in-this-environment"));
                                $u(t) && e.s(n)
                            }
                            ))
                        }
                        )) : ju(e)
                    }
                    )).o((function() {
                        ju(e)
                    }
                    ))
                }
                function Fu(e, t) {
                    Y(e.h, (function(e) {
                        return e == t
                    }
                    ))
                }
                Nu.prototype.reset = function() {
                    this.f = !1,
                    this.a.Ta(this.l),
                    this.a = Zu(this.D, this.v, this.m, null, this.J),
                    this.i = {}
                }
                ,
                Nu.prototype.s = function(e) {
                    if (!e)
                        throw new T("invalid-auth-event");
                    if (6e5 <= Date.now() - this.u && (this.i = {},
                    this.u = 0),
                    e && e.getUid() && this.i.hasOwnProperty(e.getUid()))
                        return !1;
                    for (var t = !1, n = 0; n < this.h.length; n++) {
                        var r = this.h[n];
                        if (r.Gb(e.c, e.b)) {
                            (t = this.c[e.c]) && (t.h(e, r),
                            e && (e.f || e.b) && (this.i[e.getUid()] = !0,
                            this.u = Date.now())),
                            t = !0;
                            break
                        }
                    }
                    return Qu(this.b),
                    t
                }
                ;
                var Uu = new Vr(2e3,1e4)
                  , Bu = new Vr(3e4,6e4);
                function zu(e, t, n, r, i, o, a) {
                    return e.a.Nb(t, n, r, (function() {
                        e.f || (e.f = !0,
                        e.a.Ea(e.l))
                    }
                    ), (function() {
                        e.reset()
                    }
                    ), i, o, a)
                }
                function $u(e) {
                    return !(!e || "auth/cordova-not-ready" != e.code)
                }
                function qu(e, t, n, r, i) {
                    var o;
                    return function(e) {
                        return e.b.set(Ru, "pending", e.a)
                    }(e.g).then((function() {
                        return e.a.Ob(t, n, r, i).o((function(t) {
                            if ($u(t))
                                throw new T("operation-not-supported-in-this-environment");
                            return o = t,
                            Mu(e.g).then((function() {
                                throw o
                            }
                            ))
                        }
                        )).then((function() {
                            return e.a.ac() ? new xt((function() {}
                            )) : Mu(e.g).then((function() {
                                return e.ra()
                            }
                            )).then((function() {}
                            )).o((function() {}
                            ))
                        }
                        ))
                    }
                    ))
                }
                function Vu(e, t, n, r, i) {
                    return e.a.Pb(r, (function(e) {
                        t.na(n, null, e, i)
                    }
                    ), Uu.get())
                }
                Nu.prototype.ra = function() {
                    return this.b.ra()
                }
                ;
                var Wu = {};
                function Hu(e, t, n) {
                    return e = e + ":" + t,
                    n && (e = e + ":" + n.url),
                    e
                }
                function Gu(e, t, n, r) {
                    var i = Hu(t, n, r);
                    return Wu[i] || (Wu[i] = new Nu(e,t,n,r)),
                    Wu[i]
                }
                function Ku() {
                    this.b = null,
                    this.f = [],
                    this.c = [],
                    this.a = null,
                    this.i = this.g = !1
                }
                function Qu(e) {
                    e.g || (e.g = !0,
                    Ju(e, !1, null, null))
                }
                function Yu(e) {
                    e.g && !e.i && Ju(e, !1, null, null)
                }
                function Xu(e, t) {
                    if (e.b = function() {
                        return At(t)
                    }
                    ,
                    e.f.length)
                        for (var n = 0; n < e.f.length; n++)
                            e.f[n](t)
                }
                function Ju(e, t, n, r) {
                    t ? r ? function(e, t) {
                        if (e.b = function() {
                            return Pt(t)
                        }
                        ,
                        e.c.length)
                            for (var n = 0; n < e.c.length; n++)
                                e.c[n](t)
                    }(e, r) : Xu(e, n) : Xu(e, {
                        user: null
                    }),
                    e.f = [],
                    e.c = []
                }
                function ec() {}
                function tc() {
                    this.jb = !1,
                    Object.defineProperty(this, "appVerificationDisabled", {
                        get: function() {
                            return this.jb
                        },
                        set: function(e) {
                            this.jb = e
                        },
                        enumerable: !1
                    })
                }
                function nc(e, t) {
                    this.a = t,
                    Jr(this, "verificationId", e)
                }
                function rc(e, t, n, r) {
                    return new Uo(e).gb(t, n).then((function(e) {
                        return new nc(e,r)
                    }
                    ))
                }
                function ic(e) {
                    var t = Gi(e);
                    if (!(t && t.exp && t.auth_time && t.iat))
                        throw new T("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
                    ei(this, {
                        token: e,
                        expirationTime: Hr(1e3 * t.exp),
                        authTime: Hr(1e3 * t.auth_time),
                        issuedAtTime: Hr(1e3 * t.iat),
                        signInProvider: t.firebase && t.firebase.sign_in_provider ? t.firebase.sign_in_provider : null,
                        signInSecondFactor: t.firebase && t.firebase.sign_in_second_factor ? t.firebase.sign_in_second_factor : null,
                        claims: t
                    })
                }
                function oc(e, t, n) {
                    var r = t && t[sc];
                    if (!r)
                        throw new T("argument-error","Internal assert: Invalid MultiFactorResolver");
                    this.a = e,
                    this.f = ge(t),
                    this.g = n,
                    this.c = new uo(null,r),
                    this.b = [];
                    var i = this;
                    V(t[ac] || [], (function(e) {
                        (e = ii(e)) && i.b.push(e)
                    }
                    )),
                    Jr(this, "auth", this.a),
                    Jr(this, "session", this.c),
                    Jr(this, "hints", this.b)
                }
                Ku.prototype.reset = function() {
                    this.b = null,
                    this.a && (this.a.cancel(),
                    this.a = null)
                }
                ,
                Ku.prototype.h = function(e, t) {
                    if (e) {
                        this.reset(),
                        this.g = !0;
                        var n = e.c
                          , r = e.b
                          , i = e.a && "auth/web-storage-unsupported" == e.a.code
                          , o = e.a && "auth/operation-not-supported-in-this-environment" == e.a.code;
                        this.i = !(!i && !o),
                        "unknown" != n || i || o ? e.a ? (Ju(this, !0, null, e.a),
                        At()) : t.Fa(n, r) ? function(e, t, n) {
                            n = n.Fa(t.c, t.b);
                            var r = t.g
                              , i = t.f
                              , o = t.i
                              , a = t.T()
                              , s = !!t.c.match(/Redirect$/);
                            n(r, i, a, o).then((function(t) {
                                Ju(e, s, t, null)
                            }
                            )).o((function(t) {
                                Ju(e, s, null, t)
                            }
                            ))
                        }(this, e, t) : Pt(new T("invalid-auth-event")) : (Ju(this, !1, null, null),
                        At())
                    } else
                        Pt(new T("invalid-auth-event"))
                }
                ,
                Ku.prototype.ra = function() {
                    var e = this;
                    return new xt((function(t, n) {
                        e.b ? e.b().then(t, n) : (e.f.push(t),
                        e.c.push(n),
                        function(e) {
                            var t = new T("timeout");
                            e.a && e.a.cancel(),
                            e.a = In(Bu.get()).then((function() {
                                e.b || (e.g = !0,
                                Ju(e, !0, null, t))
                            }
                            ))
                        }(e))
                    }
                    ))
                }
                ,
                ec.prototype.h = function(e, t) {
                    if (e) {
                        var n = e.c
                          , r = e.b;
                        e.a ? (t.na(e.c, null, e.a, e.b),
                        At()) : t.Fa(n, r) ? function(e, t) {
                            var n = e.b
                              , r = e.c;
                            t.Fa(r, n)(e.g, e.f, e.T(), e.i).then((function(e) {
                                t.na(r, e, null, n)
                            }
                            )).o((function(e) {
                                t.na(r, null, e, n)
                            }
                            ))
                        }(e, t) : Pt(new T("invalid-auth-event"))
                    } else
                        Pt(new T("invalid-auth-event"))
                }
                ,
                nc.prototype.confirm = function(e) {
                    return e = Bo(this.verificationId, e),
                    this.a(e)
                }
                ;
                var ac = "mfaInfo"
                  , sc = "mfaPendingCredential";
                function lc(e, t, n, r) {
                    T.call(this, "multi-factor-auth-required", r, t),
                    this.b = new oc(e,t,n),
                    Jr(this, "resolver", this.b)
                }
                function uc(e, t, n) {
                    if (e && g(e.serverResponse) && "auth/multi-factor-auth-required" === e.code)
                        try {
                            return new lc(t,e.serverResponse,n,e.message)
                        } catch (e) {}
                    return null
                }
                function cc() {}
                function dc(e) {
                    Jr(this, "factorId", e.fa),
                    this.a = e
                }
                function fc(e) {
                    if (dc.call(this, e),
                    this.a.fa != Uo.PROVIDER_ID)
                        throw new T("argument-error","firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential")
                }
                function pc(e, t) {
                    for (var n in Jt.call(this, e),
                    t)
                        this[n] = t[n]
                }
                function hc(e, t) {
                    this.a = e,
                    this.b = [],
                    this.c = E(this.yc, this),
                    fn(this.a, "userReloaded", this.c);
                    var n = [];
                    t && t.multiFactor && t.multiFactor.enrolledFactors && V(t.multiFactor.enrolledFactors, (function(e) {
                        var t = null
                          , r = {};
                        if (e) {
                            e.uid && (r[si] = e.uid),
                            e.displayName && (r[oi] = e.displayName),
                            e.enrollmentTime && (r[ai] = new Date(e.enrollmentTime).toISOString()),
                            e.phoneNumber && (r[li] = e.phoneNumber);
                            try {
                                t = new ui(r)
                            } catch (e) {}
                            e = t
                        } else
                            e = null;
                        e && n.push(e)
                    }
                    )),
                    mc(this, n)
                }
                function mc(e, t) {
                    e.b = t,
                    Jr(e, "enrolledFactors", t)
                }
                function gc(e, t, n) {
                    if (this.h = e,
                    this.i = t,
                    this.g = n,
                    this.c = 3e4,
                    this.f = 96e4,
                    this.b = null,
                    this.a = this.c,
                    this.f < this.c)
                        throw Error("Proactive refresh lower bound greater than upper bound!")
                }
                function vc(e, t) {
                    e.stop(),
                    e.b = In(function(e, t) {
                        return t ? (e.a = e.c,
                        e.g()) : (t = e.a,
                        e.a *= 2,
                        e.a > e.f && (e.a = e.f),
                        t)
                    }(e, t)).then((function() {
                        return function() {
                            var e = l.document
                              , t = null;
                            return Wr() || !e ? At() : new xt((function(n) {
                                t = function() {
                                    Wr() && (e.removeEventListener("visibilitychange", t, !1),
                                    n())
                                }
                                ,
                                e.addEventListener("visibilitychange", t, !1)
                            }
                            )).o((function(n) {
                                throw e.removeEventListener("visibilitychange", t, !1),
                                n
                            }
                            ))
                        }()
                    }
                    )).then((function() {
                        return e.h()
                    }
                    )).then((function() {
                        vc(e, !0)
                    }
                    )).o((function(t) {
                        e.i(t) && vc(e, !1)
                    }
                    ))
                }
                function yc(e) {
                    this.f = e,
                    this.b = this.a = null,
                    this.c = Date.now()
                }
                function bc(e, t) {
                    void 0 === t && (e.b ? t = (t = e.b).a - t.g : t = 0),
                    e.c = Date.now() + 1e3 * t
                }
                function wc(e, t) {
                    e.b = Hi(t[ns] || ""),
                    e.a = t.refreshToken,
                    bc(e, void 0 !== (t = t.expiresIn) ? Number(t) : void 0)
                }
                function _c(e, t) {
                    return function(e, t) {
                        return new xt((function(n, r) {
                            "refresh_token" == t.grant_type && t.refresh_token || "authorization_code" == t.grant_type && t.code ? ds(e, e.l + "?key=" + encodeURIComponent(e.c), (function(e) {
                                e ? e.error ? r(ul(e)) : e.access_token && e.refresh_token ? n(e) : r(new T("internal-error")) : r(new T("network-request-failed"))
                            }
                            ), "POST", er(t).toString(), e.g, e.m.get()) : r(new T("internal-error"))
                        }
                        ))
                    }(e.f, t).then((function(t) {
                        return e.b = Hi(t.access_token),
                        e.a = t.refresh_token,
                        bc(e, t.expires_in),
                        {
                            accessToken: e.b.toString(),
                            refreshToken: e.a
                        }
                    }
                    )).o((function(t) {
                        throw "auth/user-token-expired" == t.code && (e.a = null),
                        t
                    }
                    ))
                }
                function Ec(e, t) {
                    this.a = e || null,
                    this.b = t || null,
                    ei(this, {
                        lastSignInTime: Hr(t || null),
                        creationTime: Hr(e || null)
                    })
                }
                function xc(e, t, n, r, i, o) {
                    ei(this, {
                        uid: e,
                        displayName: r || null,
                        photoURL: i || null,
                        email: n || null,
                        phoneNumber: o || null,
                        providerId: t
                    })
                }
                function Cc(e, t, n) {
                    this.N = [],
                    this.l = e.apiKey,
                    this.m = e.appName,
                    this.s = e.authDomain || null;
                    var i = r.default.SDK_VERSION ? Pr(r.default.SDK_VERSION) : null;
                    this.a = new es(this.l,M(I),i),
                    (this.u = e.emulatorConfig || null) && ls(this.a, this.u),
                    this.h = new yc(this.a),
                    Mc(this, t[ns]),
                    wc(this.h, t),
                    Jr(this, "refreshToken", this.h.a),
                    Dc(this, n || {}),
                    Cn.call(this),
                    this.P = !1,
                    this.s && Zr() && (this.b = Gu(this.s, this.l, this.m, this.u)),
                    this.W = [],
                    this.i = null,
                    this.D = function(e) {
                        return new gc((function() {
                            return e.I(!0)
                        }
                        ),(function(e) {
                            return !(!e || "auth/network-request-failed" != e.code)
                        }
                        ),(function() {
                            var t = e.h.c - Date.now() - 3e5;
                            return 0 < t ? t : 0
                        }
                        ))
                    }(this),
                    this.ba = E(this.ib, this);
                    var o = this;
                    this.za = null,
                    this.Pa = function(e) {
                        o.xa(e.h)
                    }
                    ,
                    this.qa = null,
                    this.Ba = function(e) {
                        Sc(o, e.c)
                    }
                    ,
                    this.$ = null,
                    this.aa = [],
                    this.Oa = function(e) {
                        Oc(o, e.f)
                    }
                    ,
                    this.ja = null,
                    this.S = new hc(this,n),
                    Jr(this, "multiFactor", this.S)
                }
                function Sc(e, t) {
                    e.u = t,
                    ls(e.a, t),
                    e.b && (t = e.b,
                    e.b = Gu(e.s, e.l, e.m, e.u),
                    e.P && (Fu(t, e),
                    Lu(e.b, e)))
                }
                function kc(e, t) {
                    e.qa && mn(e.qa, "languageCodeChanged", e.Pa),
                    (e.qa = t) && fn(t, "languageCodeChanged", e.Pa)
                }
                function Tc(e, t) {
                    e.$ && mn(e.$, "emulatorConfigChanged", e.Ba),
                    (e.$ = t) && fn(t, "emulatorConfigChanged", e.Ba)
                }
                function Oc(e, t) {
                    e.aa = t,
                    cs(e.a, r.default.SDK_VERSION ? Pr(r.default.SDK_VERSION, e.aa) : null)
                }
                function Ic(e, t) {
                    e.ja && mn(e.ja, "frameworkChanged", e.Oa),
                    (e.ja = t) && fn(t, "frameworkChanged", e.Oa)
                }
                function Ac(e) {
                    try {
                        return r.default.app(e.m).auth()
                    } catch (t) {
                        throw new T("internal-error","No firebase.auth.Auth instance is available for the Firebase App '" + e.m + "'!")
                    }
                }
                function Pc(e) {
                    e.J || e.D.b || (e.D.start(),
                    mn(e, "tokenChanged", e.ba),
                    fn(e, "tokenChanged", e.ba))
                }
                function Rc(e) {
                    mn(e, "tokenChanged", e.ba),
                    e.D.stop()
                }
                function Mc(e, t) {
                    e.Aa = t,
                    Jr(e, "_lat", t)
                }
                function Nc(e) {
                    for (var t = [], n = 0; n < e.W.length; n++)
                        t.push(e.W[n](e));
                    return Mt(t).then((function() {
                        return e
                    }
                    ))
                }
                function Zc(e) {
                    e.b && !e.P && (e.P = !0,
                    Lu(e.b, e))
                }
                function Dc(e, t) {
                    ei(e, {
                        uid: t.uid,
                        displayName: t.displayName || null,
                        photoURL: t.photoURL || null,
                        email: t.email || null,
                        emailVerified: t.emailVerified || !1,
                        phoneNumber: t.phoneNumber || null,
                        isAnonymous: t.isAnonymous || !1,
                        tenantId: t.tenantId || null,
                        metadata: new Ec(t.createdAt,t.lastLoginAt),
                        providerData: []
                    }),
                    e.a.b = e.tenantId
                }
                function jc() {}
                function Lc(e) {
                    return At().then((function() {
                        if (e.J)
                            throw new T("app-deleted")
                    }
                    ))
                }
                function Fc(e) {
                    return H(e.providerData, (function(e) {
                        return e.providerId
                    }
                    ))
                }
                function Uc(e, t) {
                    t && (Bc(e, t.providerId),
                    e.providerData.push(t))
                }
                function Bc(e, t) {
                    Y(e.providerData, (function(e) {
                        return e.providerId == t
                    }
                    ))
                }
                function zc(e, t, n) {
                    ("uid" != t || n) && e.hasOwnProperty(t) && Jr(e, t, n)
                }
                function $c(e, t) {
                    e != t && (ei(e, {
                        uid: t.uid,
                        displayName: t.displayName,
                        photoURL: t.photoURL,
                        email: t.email,
                        emailVerified: t.emailVerified,
                        phoneNumber: t.phoneNumber,
                        isAnonymous: t.isAnonymous,
                        tenantId: t.tenantId,
                        providerData: []
                    }),
                    t.metadata ? Jr(e, "metadata", function(e) {
                        return new Ec(e.a,e.b)
                    }(t.metadata)) : Jr(e, "metadata", new Ec),
                    V(t.providerData, (function(t) {
                        Uc(e, t)
                    }
                    )),
                    function(e, t) {
                        e.b = t.b,
                        e.a = t.a,
                        e.c = t.c
                    }(e.h, t.h),
                    Jr(e, "refreshToken", e.h.a),
                    mc(e.S, t.S.b))
                }
                function qc(e) {
                    return e.I().then((function(t) {
                        var n = e.isAnonymous;
                        return function(e, t) {
                            return sl(e.a, Ls, {
                                idToken: t
                            }).then(E(e.Kc, e))
                        }(e, t).then((function() {
                            return n || zc(e, "isAnonymous", !1),
                            t
                        }
                        ))
                    }
                    ))
                }
                function Vc(e, t) {
                    t[ns] && e.Aa != t[ns] && (wc(e.h, t),
                    e.dispatchEvent(new pc("tokenChanged")),
                    Mc(e, t[ns]),
                    zc(e, "refreshToken", e.h.a))
                }
                function Wc(e, t) {
                    return qc(e).then((function() {
                        if (K(Fc(e), t))
                            return Nc(e).then((function() {
                                throw new T("provider-already-linked")
                            }
                            ))
                    }
                    ))
                }
                function Hc(e, t, n) {
                    return ti({
                        user: e,
                        credential: zo(t),
                        additionalUserInfo: t = Ji(t),
                        operationType: n
                    })
                }
                function Gc(e, t) {
                    return Vc(e, t),
                    e.reload().then((function() {
                        return e
                    }
                    ))
                }
                function Kc(e, t, n, i, o) {
                    if (!Zr())
                        return Pt(new T("operation-not-supported-in-this-environment"));
                    if (e.i && !o)
                        return Pt(e.i);
                    var a = Xi(n.providerId)
                      , s = zr(e.uid + ":::")
                      , l = null;
                    (!Lr() || xr()) && e.s && n.isOAuthProvider && (l = El(e.s, e.l, e.m, t, n, null, s, r.default.SDK_VERSION || null, null, null, e.tenantId, e.u));
                    var u = yr(l, a && a.va, a && a.ua);
                    return i = i().then((function() {
                        if (Yc(e),
                        !o)
                            return e.I().then((function() {}
                            ))
                    }
                    )).then((function() {
                        return zu(e.b, u, t, n, s, !!l, e.tenantId)
                    }
                    )).then((function() {
                        return new xt((function(n, r) {
                            e.na(t, null, new T("cancelled-popup-request"), e.g || null),
                            e.f = n,
                            e.C = r,
                            e.g = s,
                            e.c = Vu(e.b, e, t, u, s)
                        }
                        ))
                    }
                    )).then((function(e) {
                        return u && vr(u),
                        e ? ti(e) : null
                    }
                    )).o((function(e) {
                        throw u && vr(u),
                        e
                    }
                    )),
                    Xc(e, i, o)
                }
                function Qc(e, t, n, r, i) {
                    if (!Zr())
                        return Pt(new T("operation-not-supported-in-this-environment"));
                    if (e.i && !i)
                        return Pt(e.i);
                    var o = null
                      , a = zr(e.uid + ":::");
                    return r = r().then((function() {
                        if (Yc(e),
                        !i)
                            return e.I().then((function() {}
                            ))
                    }
                    )).then((function() {
                        return e.ga = a,
                        Nc(e)
                    }
                    )).then((function(t) {
                        return e.ha && (t = (t = e.ha).b.set(td, e.w(), t.a)),
                        t
                    }
                    )).then((function() {
                        return qu(e.b, t, n, a, e.tenantId)
                    }
                    )).o((function(t) {
                        if (o = t,
                        e.ha)
                            return nd(e.ha);
                        throw o
                    }
                    )).then((function() {
                        if (o)
                            throw o
                    }
                    )),
                    Xc(e, r, i)
                }
                function Yc(e) {
                    if (!e.b || !e.P) {
                        if (e.b && !e.P)
                            throw new T("internal-error");
                        throw new T("auth-domain-config-required")
                    }
                }
                function Xc(e, t, n) {
                    var r = function(e, t, n) {
                        return e.i && !n ? (t.cancel(),
                        Pt(e.i)) : t.o((function(t) {
                            throw !t || "auth/user-disabled" != t.code && "auth/user-token-expired" != t.code || (e.i || e.dispatchEvent(new pc("userInvalidated")),
                            e.i = t),
                            t
                        }
                        ))
                    }(e, t, n);
                    return e.N.push(r),
                    r.oa((function() {
                        Q(e.N, r)
                    }
                    )),
                    r.o((function(t) {
                        var n = null;
                        throw t && "auth/multi-factor-auth-required" === t.code && (n = uc(t.w(), Ac(e), E(e.jc, e))),
                        n || t
                    }
                    ))
                }
                function Jc(e) {
                    if (!e.apiKey)
                        return null;
                    var t = {
                        apiKey: e.apiKey,
                        authDomain: e.authDomain,
                        appName: e.appName,
                        emulatorConfig: e.emulatorConfig
                    }
                      , n = {};
                    if (!e.stsTokenManager || !e.stsTokenManager.accessToken)
                        return null;
                    n[ns] = e.stsTokenManager.accessToken,
                    n.refreshToken = e.stsTokenManager.refreshToken || null;
                    var r = e.stsTokenManager.expirationTime;
                    r && (n.expiresIn = (r - Date.now()) / 1e3);
                    var i = new Cc(t,n,e);
                    return e.providerData && V(e.providerData, (function(e) {
                        e && Uc(i, ti(e))
                    }
                    )),
                    e.redirectEventId && (i.ga = e.redirectEventId),
                    i
                }
                function ed(e) {
                    this.a = e,
                    this.b = ou()
                }
                oc.prototype.Rc = function(e) {
                    var t = this;
                    return e.tb(this.a.a, this.c).then((function(e) {
                        var n = ge(t.f);
                        return delete n[ac],
                        delete n[sc],
                        ye(n, e),
                        t.g(n)
                    }
                    ))
                }
                ,
                S(lc, T),
                cc.prototype.tb = function(e, t, n) {
                    return t.type == co ? function(e, t, n, r) {
                        return n.Ha().then((function(n) {
                            return n = {
                                idToken: n
                            },
                            void 0 !== r && (n.displayName = r),
                            ye(n, {
                                phoneVerificationInfo: Fo(e.a)
                            }),
                            sl(t, Ds, n)
                        }
                        ))
                    }(this, e, t, n) : function(e, t, n) {
                        return n.Ha().then((function(n) {
                            return ye(n = {
                                mfaPendingCredential: n
                            }, {
                                phoneVerificationInfo: Fo(e.a)
                            }),
                            sl(t, js, n)
                        }
                        ))
                    }(this, e, t)
                }
                ,
                S(dc, cc),
                S(fc, dc),
                S(pc, Jt),
                (e = hc.prototype).yc = function(e) {
                    mc(this, function(e) {
                        var t = [];
                        return V(e.mfaInfo || [], (function(e) {
                            (e = ii(e)) && t.push(e)
                        }
                        )),
                        t
                    }(e.hd))
                }
                ,
                e.Sb = function() {
                    return this.a.I().then((function(e) {
                        return new uo(e,null)
                    }
                    ))
                }
                ,
                e.fc = function(e, t) {
                    var n = this
                      , r = this.a.a;
                    return this.Sb().then((function(n) {
                        return e.tb(r, n, t)
                    }
                    )).then((function(e) {
                        return Vc(n.a, e),
                        n.a.reload()
                    }
                    ))
                }
                ,
                e.bd = function(e) {
                    var t = this
                      , n = "string" == typeof e ? e : e.uid
                      , r = this.a.a;
                    return this.a.I().then((function(e) {
                        return sl(r, al, {
                            idToken: e,
                            mfaEnrollmentId: n
                        })
                    }
                    )).then((function(e) {
                        var r = W(t.b, (function(e) {
                            return e.uid != n
                        }
                        ));
                        return mc(t, r),
                        Vc(t.a, e),
                        t.a.reload().o((function(e) {
                            if ("auth/user-token-expired" != e.code)
                                throw e
                        }
                        ))
                    }
                    ))
                }
                ,
                e.w = function() {
                    return {
                        multiFactor: {
                            enrolledFactors: H(this.b, (function(e) {
                                return e.w()
                            }
                            ))
                        }
                    }
                }
                ,
                gc.prototype.start = function() {
                    this.a = this.c,
                    vc(this, !0)
                }
                ,
                gc.prototype.stop = function() {
                    this.b && (this.b.cancel(),
                    this.b = null)
                }
                ,
                yc.prototype.w = function() {
                    return {
                        apiKey: this.f.c,
                        refreshToken: this.a,
                        accessToken: this.b && this.b.toString(),
                        expirationTime: this.c
                    }
                }
                ,
                yc.prototype.getToken = function(e) {
                    return e = !!e,
                    this.b && !this.a ? Pt(new T("user-token-expired")) : e || !this.b || Date.now() > this.c - 3e4 ? this.a ? _c(this, {
                        grant_type: "refresh_token",
                        refresh_token: this.a
                    }) : At(null) : At({
                        accessToken: this.b.toString(),
                        refreshToken: this.a
                    })
                }
                ,
                Ec.prototype.w = function() {
                    return {
                        lastLoginAt: this.b,
                        createdAt: this.a
                    }
                }
                ,
                S(Cc, Cn),
                Cc.prototype.xa = function(e) {
                    this.za = e,
                    ss(this.a, e)
                }
                ,
                Cc.prototype.la = function() {
                    return this.za
                }
                ,
                Cc.prototype.Ga = function() {
                    return J(this.aa)
                }
                ,
                Cc.prototype.ib = function() {
                    this.D.b && (this.D.stop(),
                    this.D.start())
                }
                ,
                Jr(Cc.prototype, "providerId", "firebase"),
                (e = Cc.prototype).reload = function() {
                    var e = this;
                    return Xc(this, Lc(this).then((function() {
                        return qc(e).then((function() {
                            return Nc(e)
                        }
                        )).then(jc)
                    }
                    )))
                }
                ,
                e.oc = function(e) {
                    return this.I(e).then((function(e) {
                        return new ic(e)
                    }
                    ))
                }
                ,
                e.I = function(e) {
                    var t = this;
                    return Xc(this, Lc(this).then((function() {
                        return t.h.getToken(e)
                    }
                    )).then((function(e) {
                        if (!e)
                            throw new T("internal-error");
                        return e.accessToken != t.Aa && (Mc(t, e.accessToken),
                        t.dispatchEvent(new pc("tokenChanged"))),
                        zc(t, "refreshToken", e.refreshToken),
                        e.accessToken
                    }
                    )))
                }
                ,
                e.Kc = function(e) {
                    if (!(e = e.users) || !e.length)
                        throw new T("internal-error");
                    Dc(this, {
                        uid: (e = e[0]).localId,
                        displayName: e.displayName,
                        photoURL: e.photoUrl,
                        email: e.email,
                        emailVerified: !!e.emailVerified,
                        phoneNumber: e.phoneNumber,
                        lastLoginAt: e.lastLoginAt,
                        createdAt: e.createdAt,
                        tenantId: e.tenantId
                    });
                    for (var t = function(e) {
                        return (e = e.providerUserInfo) && e.length ? H(e, (function(e) {
                            return new xc(e.rawId,e.providerId,e.email,e.displayName,e.photoUrl,e.phoneNumber)
                        }
                        )) : []
                    }(e), n = 0; n < t.length; n++)
                        Uc(this, t[n]);
                    zc(this, "isAnonymous", !(this.email && e.passwordHash || this.providerData && this.providerData.length)),
                    this.dispatchEvent(new pc("userReloaded",{
                        hd: e
                    }))
                }
                ,
                e.Lc = function(e) {
                    return Yr("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."),
                    this.ub(e)
                }
                ,
                e.ub = function(e) {
                    var t = this
                      , n = null;
                    return Xc(this, e.c(this.a, this.uid).then((function(e) {
                        return Vc(t, e),
                        n = Hc(t, e, "reauthenticate"),
                        t.i = null,
                        t.reload()
                    }
                    )).then((function() {
                        return n
                    }
                    )), !0)
                }
                ,
                e.Cc = function(e) {
                    return Yr("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."),
                    this.rb(e)
                }
                ,
                e.rb = function(e) {
                    var t = this
                      , n = null;
                    return Xc(this, Wc(this, e.providerId).then((function() {
                        return t.I()
                    }
                    )).then((function(n) {
                        return e.b(t.a, n)
                    }
                    )).then((function(e) {
                        return n = Hc(t, e, "link"),
                        Gc(t, e)
                    }
                    )).then((function() {
                        return n
                    }
                    )))
                }
                ,
                e.Dc = function(e, t) {
                    var n = this;
                    return Xc(this, Wc(this, "phone").then((function() {
                        return rc(Ac(n), e, t, E(n.rb, n))
                    }
                    )))
                }
                ,
                e.Mc = function(e, t) {
                    var n = this;
                    return Xc(this, At().then((function() {
                        return rc(Ac(n), e, t, E(n.ub, n))
                    }
                    )), !0)
                }
                ,
                e.Cb = function(e) {
                    var t = this;
                    return Xc(this, this.I().then((function(n) {
                        return t.a.Cb(n, e)
                    }
                    )).then((function(e) {
                        return Vc(t, e),
                        t.reload()
                    }
                    )))
                }
                ,
                e.ed = function(e) {
                    var t = this;
                    return Xc(this, this.I().then((function(n) {
                        return e.b(t.a, n)
                    }
                    )).then((function(e) {
                        return Vc(t, e),
                        t.reload()
                    }
                    )))
                }
                ,
                e.Db = function(e) {
                    var t = this;
                    return Xc(this, this.I().then((function(n) {
                        return t.a.Db(n, e)
                    }
                    )).then((function(e) {
                        return Vc(t, e),
                        t.reload()
                    }
                    )))
                }
                ,
                e.Eb = function(e) {
                    if (void 0 === e.displayName && void 0 === e.photoURL)
                        return Lc(this);
                    var t = this;
                    return Xc(this, this.I().then((function(n) {
                        return t.a.Eb(n, {
                            displayName: e.displayName,
                            photoUrl: e.photoURL
                        })
                    }
                    )).then((function(e) {
                        return Vc(t, e),
                        zc(t, "displayName", e.displayName || null),
                        zc(t, "photoURL", e.photoUrl || null),
                        V(t.providerData, (function(e) {
                            "password" === e.providerId && (Jr(e, "displayName", t.displayName),
                            Jr(e, "photoURL", t.photoURL))
                        }
                        )),
                        Nc(t)
                    }
                    )).then(jc))
                }
                ,
                e.cd = function(e) {
                    var t = this;
                    return Xc(this, qc(this).then((function(n) {
                        return K(Fc(t), e) ? function(e, t, n) {
                            return sl(e, Ms, {
                                idToken: t,
                                deleteProvider: n
                            })
                        }(t.a, n, [e]).then((function(e) {
                            var n = {};
                            return V(e.providerUserInfo || [], (function(e) {
                                n[e.providerId] = !0
                            }
                            )),
                            V(Fc(t), (function(e) {
                                n[e] || Bc(t, e)
                            }
                            )),
                            n[Uo.PROVIDER_ID] || Jr(t, "phoneNumber", null),
                            Nc(t)
                        }
                        )) : Nc(t).then((function() {
                            throw new T("no-such-provider")
                        }
                        ))
                    }
                    )))
                }
                ,
                e.delete = function() {
                    var e = this;
                    return Xc(this, this.I().then((function(t) {
                        return sl(e.a, Rs, {
                            idToken: t
                        })
                    }
                    )).then((function() {
                        e.dispatchEvent(new pc("userDeleted"))
                    }
                    ))).then((function() {
                        for (var t = 0; t < e.N.length; t++)
                            e.N[t].cancel("app-deleted");
                        kc(e, null),
                        Tc(e, null),
                        Ic(e, null),
                        e.N = [],
                        e.J = !0,
                        Rc(e),
                        Jr(e, "refreshToken", null),
                        e.b && Fu(e.b, e)
                    }
                    ))
                }
                ,
                e.Gb = function(e, t) {
                    return !!("linkViaPopup" == e && (this.g || null) == t && this.f || "reauthViaPopup" == e && (this.g || null) == t && this.f || "linkViaRedirect" == e && (this.ga || null) == t || "reauthViaRedirect" == e && (this.ga || null) == t)
                }
                ,
                e.na = function(e, t, n, r) {
                    "linkViaPopup" != e && "reauthViaPopup" != e || r != (this.g || null) || (n && this.C ? this.C(n) : t && !n && this.f && this.f(t),
                    this.c && (this.c.cancel(),
                    this.c = null),
                    delete this.f,
                    delete this.C)
                }
                ,
                e.Fa = function(e, t) {
                    return "linkViaPopup" == e && t == (this.g || null) ? E(this.Lb, this) : "reauthViaPopup" == e && t == (this.g || null) ? E(this.Mb, this) : "linkViaRedirect" == e && (this.ga || null) == t ? E(this.Lb, this) : "reauthViaRedirect" == e && (this.ga || null) == t ? E(this.Mb, this) : null
                }
                ,
                e.Ec = function(e) {
                    var t = this;
                    return Kc(this, "linkViaPopup", e, (function() {
                        return Wc(t, e.providerId).then((function() {
                            return Nc(t)
                        }
                        ))
                    }
                    ), !1)
                }
                ,
                e.Nc = function(e) {
                    return Kc(this, "reauthViaPopup", e, (function() {
                        return At()
                    }
                    ), !0)
                }
                ,
                e.Fc = function(e) {
                    var t = this;
                    return Qc(this, "linkViaRedirect", e, (function() {
                        return Wc(t, e.providerId)
                    }
                    ), !1)
                }
                ,
                e.Oc = function(e) {
                    return Qc(this, "reauthViaRedirect", e, (function() {
                        return At()
                    }
                    ), !0)
                }
                ,
                e.Lb = function(e, t, n, r) {
                    var i = this;
                    this.c && (this.c.cancel(),
                    this.c = null);
                    var o = null;
                    return Xc(this, this.I().then((function(n) {
                        return Ss(i.a, {
                            requestUri: e,
                            postBody: r,
                            sessionId: t,
                            idToken: n
                        })
                    }
                    )).then((function(e) {
                        return o = Hc(i, e, "link"),
                        Gc(i, e)
                    }
                    )).then((function() {
                        return o
                    }
                    )))
                }
                ,
                e.Mb = function(e, t, n, r) {
                    var i = this;
                    this.c && (this.c.cancel(),
                    this.c = null);
                    var o = null;
                    return Xc(this, At().then((function() {
                        return ho(ks(i.a, {
                            requestUri: e,
                            sessionId: t,
                            postBody: r,
                            tenantId: n
                        }), i.uid)
                    }
                    )).then((function(e) {
                        return o = Hc(i, e, "reauthenticate"),
                        Vc(i, e),
                        i.i = null,
                        i.reload()
                    }
                    )).then((function() {
                        return o
                    }
                    )), !0)
                }
                ,
                e.vb = function(e) {
                    var t = this
                      , n = null;
                    return Xc(this, this.I().then((function(t) {
                        return n = t,
                        void 0 === e || me(e) ? {} : $i(new Mi(e))
                    }
                    )).then((function(e) {
                        return t.a.vb(n, e)
                    }
                    )).then((function(e) {
                        if (t.email != e)
                            return t.reload()
                    }
                    )).then((function() {}
                    )))
                }
                ,
                e.Fb = function(e, t) {
                    var n = this
                      , r = null;
                    return Xc(this, this.I().then((function(e) {
                        return r = e,
                        void 0 === t || me(t) ? {} : $i(new Mi(t))
                    }
                    )).then((function(t) {
                        return n.a.Fb(r, e, t)
                    }
                    )).then((function(e) {
                        if (n.email != e)
                            return n.reload()
                    }
                    )).then((function() {}
                    )))
                }
                ,
                e.jc = function(e) {
                    var t = null
                      , n = this;
                    return Xc(this, e = ho(At(e), n.uid).then((function(e) {
                        return t = Hc(n, e, "reauthenticate"),
                        Vc(n, e),
                        n.i = null,
                        n.reload()
                    }
                    )).then((function() {
                        return t
                    }
                    )), !0)
                }
                ,
                e.toJSON = function() {
                    return this.w()
                }
                ,
                e.w = function() {
                    var e = {
                        uid: this.uid,
                        displayName: this.displayName,
                        photoURL: this.photoURL,
                        email: this.email,
                        emailVerified: this.emailVerified,
                        phoneNumber: this.phoneNumber,
                        isAnonymous: this.isAnonymous,
                        tenantId: this.tenantId,
                        providerData: [],
                        apiKey: this.l,
                        appName: this.m,
                        authDomain: this.s,
                        stsTokenManager: this.h.w(),
                        redirectEventId: this.ga || null
                    };
                    return this.metadata && ye(e, this.metadata.w()),
                    V(this.providerData, (function(t) {
                        e.providerData.push(function(e) {
                            var t, n = {};
                            for (t in e)
                                e.hasOwnProperty(t) && (n[t] = e[t]);
                            return n
                        }(t))
                    }
                    )),
                    ye(e, this.S.w()),
                    e
                }
                ;
                var td = {
                    name: "redirectUser",
                    F: "session"
                };
                function nd(e) {
                    return lu(e.b, td, e.a)
                }
                function rd(e) {
                    this.a = e,
                    this.b = ou(),
                    this.c = null,
                    this.f = function(e) {
                        var t = ad("local")
                          , n = ad("session")
                          , r = ad("none");
                        return function(e, t, n) {
                            var r = su(t, n)
                              , i = au(e, t.F);
                            return e.get(t, n).then((function(o) {
                                var a = null;
                                try {
                                    a = Br(l.localStorage.getItem(r))
                                } catch (e) {}
                                if (a && !o)
                                    return l.localStorage.removeItem(r),
                                    e.set(t, a, n);
                                a && o && "localStorage" != i.type && l.localStorage.removeItem(r)
                            }
                            ))
                        }(e.b, t, e.a).then((function() {
                            return e.b.get(n, e.a)
                        }
                        )).then((function(i) {
                            return i ? n : e.b.get(r, e.a).then((function(n) {
                                return n ? r : e.b.get(t, e.a).then((function(n) {
                                    return n ? t : e.b.get(od, e.a).then((function(e) {
                                        return e ? ad(e) : t
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        )).then((function(t) {
                            return e.c = t,
                            id(e, t.F)
                        }
                        )).o((function() {
                            e.c || (e.c = t)
                        }
                        ))
                    }(this),
                    this.b.addListener(ad("local"), this.a, E(this.g, this))
                }
                function id(e, t) {
                    var n, r = [];
                    for (n in ru)
                        ru[n] !== t && r.push(lu(e.b, ad(ru[n]), e.a));
                    return r.push(lu(e.b, od, e.a)),
                    function(e) {
                        return new xt((function(t, n) {
                            var r = e.length
                              , i = [];
                            if (r)
                                for (var o = function(e, n) {
                                    r--,
                                    i[e] = n,
                                    0 == r && t(i)
                                }, a = function(e) {
                                    n(e)
                                }, s = 0; s < e.length; s++)
                                    Rt(e[s], x(o, s), a);
                            else
                                t(i)
                        }
                        ))
                    }(r)
                }
                rd.prototype.g = function() {
                    var e = this
                      , t = ad("local");
                    cd(this, (function() {
                        return At().then((function() {
                            return e.c && "local" != e.c.F ? e.b.get(t, e.a) : null
                        }
                        )).then((function(n) {
                            if (n)
                                return id(e, "local").then((function() {
                                    e.c = t
                                }
                                ))
                        }
                        ))
                    }
                    ))
                }
                ;
                var od = {
                    name: "persistence",
                    F: "session"
                };
                function ad(e) {
                    return {
                        name: "authUser",
                        F: e
                    }
                }
                function sd(e, t) {
                    return cd(e, (function() {
                        return e.b.set(e.c, t.w(), e.a)
                    }
                    ))
                }
                function ld(e) {
                    return cd(e, (function() {
                        return lu(e.b, e.c, e.a)
                    }
                    ))
                }
                function ud(e, t, n) {
                    return cd(e, (function() {
                        return e.b.get(e.c, e.a).then((function(e) {
                            return e && t && (e.authDomain = t),
                            e && n && (e.emulatorConfig = n),
                            Jc(e || {})
                        }
                        ))
                    }
                    ))
                }
                function cd(e, t) {
                    return e.f = e.f.then(t, t),
                    e.f
                }
                function dd(e) {
                    if (this.l = !1,
                    Jr(this, "settings", new tc),
                    Jr(this, "app", e),
                    !wd(this).options || !wd(this).options.apiKey)
                        throw new T("invalid-api-key");
                    e = r.default.SDK_VERSION ? Pr(r.default.SDK_VERSION) : null,
                    this.a = new es(wd(this).options && wd(this).options.apiKey,M(I),e),
                    this.P = [],
                    this.s = [],
                    this.N = [],
                    this.Pa = r.default.INTERNAL.createSubscribe(E(this.zc, this)),
                    this.W = void 0,
                    this.ib = r.default.INTERNAL.createSubscribe(E(this.Ac, this)),
                    yd(this, null),
                    this.i = new rd(wd(this).options.apiKey + ":" + wd(this).name),
                    this.D = new ed(wd(this).options.apiKey + ":" + wd(this).name),
                    this.$ = Cd(this, function(e) {
                        var t = wd(e).options.authDomain
                          , n = function(e) {
                            var t = function(e, t) {
                                return e.b.get(td, e.a).then((function(e) {
                                    return e && t && (e.authDomain = t),
                                    Jc(e || {})
                                }
                                ))
                            }(e.D, wd(e).options.authDomain).then((function(t) {
                                return (e.m = t) && (t.ha = e.D),
                                nd(e.D)
                            }
                            ));
                            return Cd(e, t)
                        }(e).then((function() {
                            return ud(e.i, t, e.R)
                        }
                        )).then((function(t) {
                            return t ? (t.ha = e.D,
                            e.m && (e.m.ga || null) == (t.ga || null) ? t : t.reload().then((function() {
                                return sd(e.i, t).then((function() {
                                    return t
                                }
                                ))
                            }
                            )).o((function(n) {
                                return "auth/network-request-failed" == n.code ? t : ld(e.i)
                            }
                            ))) : null
                        }
                        )).then((function(t) {
                            yd(e, t || null)
                        }
                        ));
                        return Cd(e, n)
                    }(this)),
                    this.h = Cd(this, function(e) {
                        return e.$.then((function() {
                            return gd(e)
                        }
                        )).o((function() {}
                        )).then((function() {
                            if (!e.l)
                                return e.ja()
                        }
                        )).o((function() {}
                        )).then((function() {
                            if (!e.l) {
                                e.ba = !0;
                                var t = e.i;
                                t.b.addListener(ad("local"), t.a, e.ja)
                            }
                        }
                        ))
                    }(this)),
                    this.ba = !1,
                    this.ja = E(this.Zc, this),
                    this.Ba = E(this.da, this),
                    this.qa = E(this.mc, this),
                    this.za = E(this.wc, this),
                    this.Aa = E(this.xc, this),
                    this.b = null,
                    function(e) {
                        var t = wd(e).options.authDomain
                          , n = wd(e).options.apiKey;
                        t && Zr() && (e.Oa = e.$.then((function() {
                            if (!e.l) {
                                if (e.b = Gu(t, n, wd(e).name, e.R),
                                Lu(e.b, e),
                                _d(e) && Zc(_d(e)),
                                e.m) {
                                    Zc(e.m);
                                    var r = e.m;
                                    r.xa(e.la()),
                                    kc(r, e),
                                    Oc(r = e.m, e.J),
                                    Ic(r, e),
                                    Sc(r = e.m, e.R),
                                    Tc(r, e),
                                    e.m = null
                                }
                                return e.b
                            }
                        }
                        )))
                    }(this),
                    this.INTERNAL = {},
                    this.INTERNAL.delete = E(this.delete, this),
                    this.INTERNAL.logFramework = E(this.Gc, this),
                    this.u = 0,
                    Cn.call(this),
                    function(e) {
                        Object.defineProperty(e, "lc", {
                            get: function() {
                                return this.la()
                            },
                            set: function(e) {
                                this.xa(e)
                            },
                            enumerable: !1
                        }),
                        e.aa = null,
                        Object.defineProperty(e, "ti", {
                            get: function() {
                                return this.T()
                            },
                            set: function(e) {
                                this.zb(e)
                            },
                            enumerable: !1
                        }),
                        e.S = null,
                        Object.defineProperty(e, "emulatorConfig", {
                            get: function() {
                                if (this.R) {
                                    var e = zn(this.R.url);
                                    e = ti({
                                        protocol: e.c,
                                        host: e.a,
                                        port: e.g,
                                        options: ti({
                                            disableWarnings: this.R.ec
                                        })
                                    })
                                } else
                                    e = null;
                                return e
                            },
                            enumerable: !1
                        })
                    }(this),
                    this.J = [],
                    this.R = null
                }
                function fd(e) {
                    Jt.call(this, "languageCodeChanged"),
                    this.h = e
                }
                function pd(e) {
                    Jt.call(this, "emulatorConfigChanged"),
                    this.c = e
                }
                function hd(e) {
                    Jt.call(this, "frameworkChanged"),
                    this.f = e
                }
                function md(e) {
                    return e.Oa || Pt(new T("auth-domain-config-required"))
                }
                function gd(e) {
                    if (!Zr())
                        return Pt(new T("operation-not-supported-in-this-environment"));
                    var t = md(e).then((function() {
                        return e.b.ra()
                    }
                    )).then((function(e) {
                        return e ? ti(e) : null
                    }
                    ));
                    return Cd(e, t)
                }
                function vd(e, t) {
                    var n = {};
                    return n.apiKey = wd(e).options.apiKey,
                    n.authDomain = wd(e).options.authDomain,
                    n.appName = wd(e).name,
                    e.R && (n.emulatorConfig = e.R),
                    e.$.then((function() {
                        return function(e, t, n, r) {
                            var i = new Cc(e,t);
                            return n && (i.ha = n),
                            r && Oc(i, r),
                            i.reload().then((function() {
                                return i
                            }
                            ))
                        }(n, t, e.D, e.Ga())
                    }
                    )).then((function(t) {
                        return _d(e) && t.uid == _d(e).uid ? ($c(_d(e), t),
                        e.da(t)) : (yd(e, t),
                        Zc(t),
                        e.da(t))
                    }
                    )).then((function() {
                        xd(e)
                    }
                    ))
                }
                function yd(e, t) {
                    _d(e) && (function(e, t) {
                        Y(e.W, (function(e) {
                            return e == t
                        }
                        ))
                    }(_d(e), e.Ba),
                    mn(_d(e), "tokenChanged", e.qa),
                    mn(_d(e), "userDeleted", e.za),
                    mn(_d(e), "userInvalidated", e.Aa),
                    Rc(_d(e))),
                    t && (t.W.push(e.Ba),
                    fn(t, "tokenChanged", e.qa),
                    fn(t, "userDeleted", e.za),
                    fn(t, "userInvalidated", e.Aa),
                    0 < e.u && Pc(t)),
                    Jr(e, "currentUser", t),
                    t && (t.xa(e.la()),
                    kc(t, e),
                    Oc(t, e.J),
                    Ic(t, e),
                    Sc(t, e.R),
                    Tc(t, e))
                }
                function bd(e, t) {
                    var n = null
                      , r = null;
                    return Cd(e, t.then((function(t) {
                        return n = zo(t),
                        r = Ji(t),
                        vd(e, t)
                    }
                    ), (function(t) {
                        var n = null;
                        throw t && "auth/multi-factor-auth-required" === t.code && (n = uc(t.w(), e, E(e.kc, e))),
                        n || t
                    }
                    )).then((function() {
                        return ti({
                            user: _d(e),
                            credential: n,
                            additionalUserInfo: r,
                            operationType: "signIn"
                        })
                    }
                    )))
                }
                function wd(e) {
                    return e.app
                }
                function _d(e) {
                    return e.currentUser
                }
                function Ed(e) {
                    return _d(e) && _d(e)._lat || null
                }
                function xd(e) {
                    if (e.ba) {
                        for (var t = 0; t < e.s.length; t++)
                            e.s[t] && e.s[t](Ed(e));
                        if (e.W !== e.getUid() && e.N.length)
                            for (e.W = e.getUid(),
                            t = 0; t < e.N.length; t++)
                                e.N[t] && e.N[t](Ed(e))
                    }
                }
                function Cd(e, t) {
                    return e.P.push(t),
                    t.oa((function() {
                        Q(e.P, t)
                    }
                    )),
                    t
                }
                function Sd() {}
                function kd() {
                    this.a = {},
                    this.b = 1e12
                }
                rd.prototype.yb = function(e) {
                    var t = null
                      , n = this;
                    return function(e) {
                        var t = new T("invalid-persistence-type")
                          , n = new T("unsupported-persistence-type");
                        e: {
                            for (r in ru)
                                if (ru[r] == e) {
                                    var r = !0;
                                    break e
                                }
                            r = !1
                        }
                        if (!r || "string" != typeof e)
                            throw t;
                        switch (Sr()) {
                        case "ReactNative":
                            if ("session" === e)
                                throw n;
                            break;
                        case "Node":
                            if ("none" !== e)
                                throw n;
                            break;
                        case "Worker":
                            if ("session" === e || !Dl() && "none" !== e)
                                throw n;
                            break;
                        default:
                            if (!Nr() && "none" !== e)
                                throw n
                        }
                    }(e),
                    cd(this, (function() {
                        return e != n.c.F ? n.b.get(n.c, n.a).then((function(r) {
                            return t = r,
                            id(n, e)
                        }
                        )).then((function() {
                            if (n.c = ad(e),
                            t)
                                return n.b.set(n.c, t, n.a)
                        }
                        )) : At()
                    }
                    ))
                }
                ,
                S(dd, Cn),
                S(fd, Jt),
                S(pd, Jt),
                S(hd, Jt),
                (e = dd.prototype).yb = function(e) {
                    return Cd(this, e = this.i.yb(e))
                }
                ,
                e.xa = function(e) {
                    this.aa === e || this.l || (this.aa = e,
                    ss(this.a, this.aa),
                    this.dispatchEvent(new fd(this.la())))
                }
                ,
                e.la = function() {
                    return this.aa
                }
                ,
                e.fd = function() {
                    var e = l.navigator;
                    this.xa(e && (e.languages && e.languages[0] || e.language || e.userLanguage) || null)
                }
                ,
                e.gd = function(e, t) {
                    if (!this.R) {
                        if (!/^https?:\/\//.test(e))
                            throw new T("argument-error","Emulator URL must start with a valid scheme (http:// or https://).");
                        (function(e) {
                            "undefined" != typeof console && "function" == typeof console.info && console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),
                            l.document && !e && _r().then((function() {
                                var e = l.document.createElement("div");
                                e.innerText = "Running in emulator mode. Do not use with production credentials.",
                                e.style.position = "fixed",
                                e.style.width = "100%",
                                e.style.backgroundColor = "#ffffff",
                                e.style.border = ".1em solid #000000",
                                e.style.color = "#b50000",
                                e.style.bottom = "0px",
                                e.style.left = "0px",
                                e.style.margin = "0px",
                                e.style.zIndex = 1e4,
                                e.style.textAlign = "center",
                                e.classList.add("firebase-emulator-warning"),
                                l.document.body.appendChild(e)
                            }
                            ))
                        }
                        )(t = !!t && !!t.disableWarnings),
                        this.R = {
                            url: e,
                            ec: t
                        },
                        this.settings.jb = !0,
                        ls(this.a, this.R),
                        this.dispatchEvent(new pd(this.R))
                    }
                }
                ,
                e.Gc = function(e) {
                    this.J.push(e),
                    cs(this.a, r.default.SDK_VERSION ? Pr(r.default.SDK_VERSION, this.J) : null),
                    this.dispatchEvent(new hd(this.J))
                }
                ,
                e.Ga = function() {
                    return J(this.J)
                }
                ,
                e.zb = function(e) {
                    this.S === e || this.l || (this.S = e,
                    this.a.b = this.S)
                }
                ,
                e.T = function() {
                    return this.S
                }
                ,
                e.toJSON = function() {
                    return {
                        apiKey: wd(this).options.apiKey,
                        authDomain: wd(this).options.authDomain,
                        appName: wd(this).name,
                        currentUser: _d(this) && _d(this).w()
                    }
                }
                ,
                e.Gb = function(e, t) {
                    switch (e) {
                    case "unknown":
                    case "signInViaRedirect":
                        return !0;
                    case "signInViaPopup":
                        return this.g == t && !!this.f;
                    default:
                        return !1
                    }
                }
                ,
                e.na = function(e, t, n, r) {
                    "signInViaPopup" == e && this.g == r && (n && this.C ? this.C(n) : t && !n && this.f && this.f(t),
                    this.c && (this.c.cancel(),
                    this.c = null),
                    delete this.f,
                    delete this.C)
                }
                ,
                e.Fa = function(e, t) {
                    return "signInViaRedirect" == e || "signInViaPopup" == e && this.g == t && this.f ? E(this.ic, this) : null
                }
                ,
                e.ic = function(e, t, n, r) {
                    var i = this
                      , o = {
                        requestUri: e,
                        postBody: r,
                        sessionId: t,
                        tenantId: n
                    };
                    return this.c && (this.c.cancel(),
                    this.c = null),
                    i.$.then((function() {
                        return bd(i, Cs(i.a, o))
                    }
                    ))
                }
                ,
                e.Xc = function(e) {
                    if (!Zr())
                        return Pt(new T("operation-not-supported-in-this-environment"));
                    var t = this
                      , n = Xi(e.providerId)
                      , i = zr()
                      , o = null;
                    (!Lr() || xr()) && wd(this).options.authDomain && e.isOAuthProvider && (o = El(wd(this).options.authDomain, wd(this).options.apiKey, wd(this).name, "signInViaPopup", e, null, i, r.default.SDK_VERSION || null, null, null, this.T(), this.R));
                    var a = yr(o, n && n.va, n && n.ua);
                    return Cd(this, n = md(this).then((function(n) {
                        return zu(n, a, "signInViaPopup", e, i, !!o, t.T())
                    }
                    )).then((function() {
                        return new xt((function(e, n) {
                            t.na("signInViaPopup", null, new T("cancelled-popup-request"), t.g),
                            t.f = e,
                            t.C = n,
                            t.g = i,
                            t.c = Vu(t.b, t, "signInViaPopup", a, i)
                        }
                        ))
                    }
                    )).then((function(e) {
                        return a && vr(a),
                        e ? ti(e) : null
                    }
                    )).o((function(e) {
                        throw a && vr(a),
                        e
                    }
                    )))
                }
                ,
                e.Yc = function(e) {
                    if (!Zr())
                        return Pt(new T("operation-not-supported-in-this-environment"));
                    var t = this
                      , n = md(this).then((function() {
                        return function(e) {
                            return cd(e, (function() {
                                return e.b.set(od, e.c.F, e.a)
                            }
                            ))
                        }(t.i)
                    }
                    )).then((function() {
                        return qu(t.b, "signInViaRedirect", e, void 0, t.T())
                    }
                    ));
                    return Cd(this, n)
                }
                ,
                e.ra = function() {
                    var e = this;
                    return gd(this).then((function(t) {
                        return e.b && Yu(e.b.b),
                        t
                    }
                    )).o((function(t) {
                        throw e.b && Yu(e.b.b),
                        t
                    }
                    ))
                }
                ,
                e.dd = function(e) {
                    if (!e)
                        return Pt(new T("null-user"));
                    if (this.S != e.tenantId)
                        return Pt(new T("tenant-id-mismatch"));
                    var t = this
                      , n = {};
                    n.apiKey = wd(this).options.apiKey,
                    n.authDomain = wd(this).options.authDomain,
                    n.appName = wd(this).name;
                    var r = function(e, t, n, r) {
                        var i = e.h
                          , o = {};
                        return o[ns] = i.b && i.b.toString(),
                        o.refreshToken = i.a,
                        t = new Cc(t || {
                            apiKey: e.l,
                            authDomain: e.s,
                            appName: e.m
                        },o),
                        n && (t.ha = n),
                        r && Oc(t, r),
                        $c(t, e),
                        t
                    }(e, n, t.D, t.Ga());
                    return Cd(this, this.h.then((function() {
                        if (wd(t).options.apiKey != e.l)
                            return r.reload()
                    }
                    )).then((function() {
                        return _d(t) && e.uid == _d(t).uid ? ($c(_d(t), e),
                        t.da(e)) : (yd(t, r),
                        Zc(r),
                        t.da(r))
                    }
                    )).then((function() {
                        xd(t)
                    }
                    )))
                }
                ,
                e.Bb = function() {
                    var e = this;
                    return Cd(this, this.h.then((function() {
                        return e.b && Yu(e.b.b),
                        _d(e) ? (yd(e, null),
                        ld(e.i).then((function() {
                            xd(e)
                        }
                        ))) : At()
                    }
                    )))
                }
                ,
                e.Zc = function() {
                    var e = this;
                    return ud(this.i, wd(this).options.authDomain).then((function(t) {
                        if (!e.l) {
                            var n;
                            if (n = _d(e) && t) {
                                n = _d(e).uid;
                                var r = t.uid;
                                n = null != n && "" !== n && null != r && "" !== r && n == r
                            }
                            if (n)
                                return $c(_d(e), t),
                                _d(e).I();
                            (_d(e) || t) && (yd(e, t),
                            t && (Zc(t),
                            t.ha = e.D),
                            e.b && Lu(e.b, e),
                            xd(e))
                        }
                    }
                    ))
                }
                ,
                e.da = function(e) {
                    return sd(this.i, e)
                }
                ,
                e.mc = function() {
                    xd(this),
                    this.da(_d(this))
                }
                ,
                e.wc = function() {
                    this.Bb()
                }
                ,
                e.xc = function() {
                    this.Bb()
                }
                ,
                e.kc = function(e) {
                    var t = this;
                    return this.h.then((function() {
                        return bd(t, At(e))
                    }
                    ))
                }
                ,
                e.zc = function(e) {
                    var t = this;
                    this.addAuthTokenListener((function() {
                        e.next(_d(t))
                    }
                    ))
                }
                ,
                e.Ac = function(e) {
                    var t = this;
                    !function(e, t) {
                        e.N.push(t),
                        Cd(e, e.h.then((function() {
                            !e.l && K(e.N, t) && e.W !== e.getUid() && (e.W = e.getUid(),
                            t(Ed(e)))
                        }
                        )))
                    }(this, (function() {
                        e.next(_d(t))
                    }
                    ))
                }
                ,
                e.Ic = function(e, t, n) {
                    var r = this;
                    return this.ba && Promise.resolve().then((function() {
                        "function" == typeof e ? e(_d(r)) : "function" == typeof e.next && e.next(_d(r))
                    }
                    )),
                    this.Pa(e, t, n)
                }
                ,
                e.Hc = function(e, t, n) {
                    var r = this;
                    return this.ba && Promise.resolve().then((function() {
                        r.W = r.getUid(),
                        "function" == typeof e ? e(_d(r)) : "function" == typeof e.next && e.next(_d(r))
                    }
                    )),
                    this.ib(e, t, n)
                }
                ,
                e.nc = function(e) {
                    var t = this;
                    return Cd(this, this.h.then((function() {
                        return _d(t) ? _d(t).I(e).then((function(e) {
                            return {
                                accessToken: e
                            }
                        }
                        )) : null
                    }
                    )))
                }
                ,
                e.Tc = function(e) {
                    var t = this;
                    return this.h.then((function() {
                        return bd(t, sl(t.a, tl, {
                            token: e
                        }))
                    }
                    )).then((function(e) {
                        var n = e.user;
                        return zc(n, "isAnonymous", !1),
                        t.da(n),
                        e
                    }
                    ))
                }
                ,
                e.Uc = function(e, t) {
                    var n = this;
                    return this.h.then((function() {
                        return bd(n, sl(n.a, nl, {
                            email: e,
                            password: t
                        }))
                    }
                    ))
                }
                ,
                e.dc = function(e, t) {
                    var n = this;
                    return this.h.then((function() {
                        return bd(n, sl(n.a, As, {
                            email: e,
                            password: t
                        }))
                    }
                    ))
                }
                ,
                e.ab = function(e) {
                    var t = this;
                    return this.h.then((function() {
                        return bd(t, e.ka(t.a))
                    }
                    ))
                }
                ,
                e.Sc = function(e) {
                    return Yr("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."),
                    this.ab(e)
                }
                ,
                e.Ab = function() {
                    var e = this;
                    return this.h.then((function() {
                        var t = _d(e);
                        if (t && t.isAnonymous) {
                            var n = ti({
                                providerId: null,
                                isNewUser: !1
                            });
                            return ti({
                                user: t,
                                credential: null,
                                additionalUserInfo: n,
                                operationType: "signIn"
                            })
                        }
                        return bd(e, e.a.Ab()).then((function(t) {
                            var n = t.user;
                            return zc(n, "isAnonymous", !0),
                            e.da(n),
                            t
                        }
                        ))
                    }
                    ))
                }
                ,
                e.getUid = function() {
                    return _d(this) && _d(this).uid || null
                }
                ,
                e.cc = function(e) {
                    this.addAuthTokenListener(e),
                    this.u++,
                    0 < this.u && _d(this) && Pc(_d(this))
                }
                ,
                e.Pc = function(e) {
                    var t = this;
                    V(this.s, (function(n) {
                        n == e && t.u--
                    }
                    )),
                    0 > this.u && (this.u = 0),
                    0 == this.u && _d(this) && Rc(_d(this)),
                    this.removeAuthTokenListener(e)
                }
                ,
                e.addAuthTokenListener = function(e) {
                    var t = this;
                    this.s.push(e),
                    Cd(this, this.h.then((function() {
                        t.l || K(t.s, e) && e(Ed(t))
                    }
                    )))
                }
                ,
                e.removeAuthTokenListener = function(e) {
                    Y(this.s, (function(t) {
                        return t == e
                    }
                    ))
                }
                ,
                e.delete = function() {
                    this.l = !0;
                    for (var e = 0; e < this.P.length; e++)
                        this.P[e].cancel("app-deleted");
                    return this.P = [],
                    this.i && (e = this.i).b.removeListener(ad("local"), e.a, this.ja),
                    this.b && (Fu(this.b, this),
                    Yu(this.b.b)),
                    Promise.resolve()
                }
                ,
                e.hc = function(e) {
                    return Cd(this, function(e, t) {
                        return sl(e, Ps, {
                            identifier: t,
                            continueUri: Dr() ? pr() : "http://localhost"
                        }).then((function(e) {
                            return e.signinMethods || []
                        }
                        ))
                    }(this.a, e))
                }
                ,
                e.Bc = function(e) {
                    return !!Do(e)
                }
                ,
                e.xb = function(e, t) {
                    var n = this;
                    return Cd(this, At().then((function() {
                        var e = new Mi(t);
                        if (!e.c)
                            throw new T("argument-error",Di + " must be true when sending sign in link to email");
                        return $i(e)
                    }
                    )).then((function(t) {
                        return n.a.xb(e, t)
                    }
                    )).then((function() {}
                    )))
                }
                ,
                e.jd = function(e) {
                    return this.Sa(e).then((function(e) {
                        return e.data.email
                    }
                    ))
                }
                ,
                e.ob = function(e, t) {
                    return Cd(this, this.a.ob(e, t).then((function() {}
                    )))
                }
                ,
                e.Sa = function(e) {
                    return Cd(this, this.a.Sa(e).then((function(e) {
                        return new ci(e)
                    }
                    )))
                }
                ,
                e.kb = function(e) {
                    return Cd(this, this.a.kb(e).then((function() {}
                    )))
                }
                ,
                e.wb = function(e, t) {
                    var n = this;
                    return Cd(this, At().then((function() {
                        return void 0 === t || me(t) ? {} : $i(new Mi(t))
                    }
                    )).then((function(t) {
                        return n.a.wb(e, t)
                    }
                    )).then((function() {}
                    )))
                }
                ,
                e.Wc = function(e, t) {
                    return Cd(this, rc(this, e, t, E(this.ab, this)))
                }
                ,
                e.Vc = function(e, t) {
                    var n = this;
                    return Cd(this, At().then((function() {
                        var r = t || pr()
                          , i = Zo(e, r);
                        if (!(r = Do(r)))
                            throw new T("argument-error","Invalid email link!");
                        if (r.tenantId !== n.T())
                            throw new T("tenant-id-mismatch");
                        return n.ab(i)
                    }
                    )))
                }
                ,
                Sd.prototype.render = function() {}
                ,
                Sd.prototype.reset = function() {}
                ,
                Sd.prototype.getResponse = function() {}
                ,
                Sd.prototype.execute = function() {}
                ;
                var Td = null;
                function Od(e, t) {
                    return (t = Id(t)) && e.a[t] || null
                }
                function Id(e) {
                    return (e = void 0 === e ? 1e12 : e) ? e.toString() : null
                }
                function Ad(e, t) {
                    this.g = !1,
                    this.c = t,
                    this.a = this.b = null,
                    this.h = "invisible" !== this.c.size,
                    this.f = dt(e);
                    var n = this;
                    this.i = function() {
                        n.execute()
                    }
                    ,
                    this.h ? this.execute() : fn(this.f, "click", this.i)
                }
                function Pd(e) {
                    if (e.g)
                        throw Error("reCAPTCHA mock was already deleted!")
                }
                function Rd() {}
                function Md() {}
                kd.prototype.render = function(e, t) {
                    return this.a[this.b.toString()] = new Ad(e,t),
                    this.b++
                }
                ,
                kd.prototype.reset = function(e) {
                    var t = Od(this, e);
                    e = Id(e),
                    t && e && (t.delete(),
                    delete this.a[e])
                }
                ,
                kd.prototype.getResponse = function(e) {
                    return (e = Od(this, e)) ? e.getResponse() : null
                }
                ,
                kd.prototype.execute = function(e) {
                    (e = Od(this, e)) && e.execute()
                }
                ,
                Ad.prototype.getResponse = function() {
                    return Pd(this),
                    this.b
                }
                ,
                Ad.prototype.execute = function() {
                    Pd(this);
                    var e = this;
                    this.a || (this.a = setTimeout((function() {
                        e.b = function() {
                            for (var e = 50, t = []; 0 < e; )
                                t.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))),
                                e--;
                            return t.join("")
                        }();
                        var t = e.c.callback
                          , n = e.c["expired-callback"];
                        if (t)
                            try {
                                t(e.b)
                            } catch (e) {}
                        e.a = setTimeout((function() {
                            if (e.a = null,
                            e.b = null,
                            n)
                                try {
                                    n()
                                } catch (e) {}
                            e.h && e.execute()
                        }
                        ), 6e4)
                    }
                    ), 500))
                }
                ,
                Ad.prototype.delete = function() {
                    Pd(this),
                    this.g = !0,
                    clearTimeout(this.a),
                    this.a = null,
                    mn(this.f, "click", this.i)
                }
                ,
                Jr(Rd, "FACTOR_ID", "phone"),
                Md.prototype.g = function() {
                    return Td || (Td = new kd),
                    At(Td)
                }
                ,
                Md.prototype.c = function() {}
                ;
                var Nd = null;
                function Zd() {
                    this.b = l.grecaptcha ? 1 / 0 : 0,
                    this.f = null,
                    this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString()
                }
                var Dd = new we(Ce,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}")
                  , jd = new Vr(3e4,6e4);
                Zd.prototype.g = function(e) {
                    var t = this;
                    return new xt((function(n, r) {
                        var i = setTimeout((function() {
                            r(new T("network-request-failed"))
                        }
                        ), jd.get());
                        !l.grecaptcha || e !== t.f && !t.b ? (l[t.a] = function() {
                            if (l.grecaptcha) {
                                t.f = e;
                                var o = l.grecaptcha.render;
                                l.grecaptcha.render = function(e, n) {
                                    return e = o(e, n),
                                    t.b++,
                                    e
                                }
                                ,
                                clearTimeout(i),
                                n(l.grecaptcha)
                            } else
                                clearTimeout(i),
                                r(new T("internal-error"));
                            delete l[t.a]
                        }
                        ,
                        At(Ha(Oe(Dd, {
                            onload: t.a,
                            hl: e || ""
                        }))).o((function() {
                            clearTimeout(i),
                            r(new T("internal-error","Unable to load external reCAPTCHA dependencies!"))
                        }
                        ))) : (clearTimeout(i),
                        n(l.grecaptcha))
                    }
                    ))
                }
                ,
                Zd.prototype.c = function() {
                    this.b--
                }
                ;
                var Ld = null;
                function Fd(e, t, n, r, i, o, a) {
                    if (Jr(this, "type", "recaptcha"),
                    this.c = this.f = null,
                    this.J = !1,
                    this.v = t,
                    this.g = null,
                    a ? (Nd || (Nd = new Md),
                    a = Nd) : (Ld || (Ld = new Zd),
                    a = Ld),
                    this.m = a,
                    this.a = n || {
                        theme: "light",
                        type: "image"
                    },
                    this.h = [],
                    this.a[zd])
                        throw new T("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
                    if (this.i = "invisible" === this.a[$d],
                    !l.document)
                        throw new T("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
                    if (!dt(t) || !this.i && dt(t).hasChildNodes())
                        throw new T("argument-error","reCAPTCHA container is either not found or already contains inner elements!");
                    this.s = new es(e,o || null,i || null),
                    this.u = r || function() {
                        return null
                    }
                    ;
                    var s = this;
                    this.l = [];
                    var u = this.a[Ud];
                    this.a[Ud] = function(e) {
                        if (qd(s, e),
                        "function" == typeof u)
                            u(e);
                        else if ("string" == typeof u) {
                            var t = Mr(u, l);
                            "function" == typeof t && t(e)
                        }
                    }
                    ;
                    var c = this.a[Bd];
                    this.a[Bd] = function() {
                        if (qd(s, null),
                        "function" == typeof c)
                            c();
                        else if ("string" == typeof c) {
                            var e = Mr(c, l);
                            "function" == typeof e && e()
                        }
                    }
                }
                var Ud = "callback"
                  , Bd = "expired-callback"
                  , zd = "sitekey"
                  , $d = "size";
                function qd(e, t) {
                    for (var n = 0; n < e.l.length; n++)
                        try {
                            e.l[n](t)
                        } catch (e) {}
                }
                function Vd(e, t) {
                    return e.h.push(t),
                    t.oa((function() {
                        Q(e.h, t)
                    }
                    )),
                    t
                }
                function Wd(e) {
                    if (e.J)
                        throw new T("internal-error","RecaptchaVerifier instance has been destroyed.")
                }
                function Hd(e, t, n) {
                    var i = !1;
                    try {
                        this.b = n || r.default.app()
                    } catch (e) {
                        throw new T("argument-error","No firebase.app.App instance is currently initialized.")
                    }
                    if (!this.b.options || !this.b.options.apiKey)
                        throw new T("invalid-api-key");
                    n = this.b.options.apiKey;
                    var o = this
                      , a = null;
                    try {
                        a = this.b.auth().Ga()
                    } catch (e) {}
                    try {
                        i = this.b.auth().settings.appVerificationDisabledForTesting
                    } catch (e) {}
                    a = r.default.SDK_VERSION ? Pr(r.default.SDK_VERSION, a) : null,
                    Fd.call(this, n, e, t, (function() {
                        try {
                            var e = o.b.auth().la()
                        } catch (t) {
                            e = null
                        }
                        return e
                    }
                    ), a, M(I), i)
                }
                function Gd(e, t, n, r) {
                    e: {
                        n = Array.prototype.slice.call(n);
                        for (var i = 0, o = !1, a = 0; a < t.length; a++)
                            if (t[a].optional)
                                o = !0;
                            else {
                                if (o)
                                    throw new T("internal-error","Argument validator encountered a required argument after an optional argument.");
                                i++
                            }
                        if (o = t.length,
                        n.length < i || o < n.length)
                            r = "Expected " + (i == o ? 1 == i ? "1 argument" : i + " arguments" : i + "-" + o + " arguments") + " but got " + n.length + ".";
                        else {
                            for (i = 0; i < n.length; i++)
                                if (o = t[i].optional && void 0 === n[i],
                                !t[i].M(n[i]) && !o) {
                                    if (t = t[i],
                                    0 > i || i >= Kd.length)
                                        throw new T("internal-error","Argument validator received an unsupported number of arguments.");
                                    n = Kd[i],
                                    r = (r ? "" : n + " argument ") + (t.name ? '"' + t.name + '" ' : "") + "must be " + t.K + ".";
                                    break e
                                }
                            r = null
                        }
                    }
                    if (r)
                        throw new T("argument-error",e + " failed: " + r)
                }
                (e = Fd.prototype).Ia = function() {
                    var e = this;
                    return this.f ? this.f : this.f = Vd(this, At().then((function() {
                        if (Dr() && !Cr())
                            return _r();
                        throw new T("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")
                    }
                    )).then((function() {
                        return e.m.g(e.u())
                    }
                    )).then((function(t) {
                        return e.g = t,
                        sl(e.s, qs, {})
                    }
                    )).then((function(t) {
                        e.a[zd] = t.recaptchaSiteKey
                    }
                    )).o((function(t) {
                        throw e.f = null,
                        t
                    }
                    )))
                }
                ,
                e.render = function() {
                    Wd(this);
                    var e = this;
                    return Vd(this, this.Ia().then((function() {
                        if (null === e.c) {
                            var t = e.v;
                            if (!e.i) {
                                var n = dt(t);
                                t = gt("DIV"),
                                n.appendChild(t)
                            }
                            e.c = e.g.render(t, e.a)
                        }
                        return e.c
                    }
                    )))
                }
                ,
                e.verify = function() {
                    Wd(this);
                    var e = this;
                    return Vd(this, this.render().then((function(t) {
                        return new xt((function(n) {
                            var r = e.g.getResponse(t);
                            if (r)
                                n(r);
                            else {
                                var i = function(t) {
                                    t && (function(e, t) {
                                        Y(e.l, (function(e) {
                                            return e == t
                                        }
                                        ))
                                    }(e, i),
                                    n(t))
                                };
                                e.l.push(i),
                                e.i && e.g.execute(e.c)
                            }
                        }
                        ))
                    }
                    )))
                }
                ,
                e.reset = function() {
                    Wd(this),
                    null !== this.c && this.g.reset(this.c)
                }
                ,
                e.clear = function() {
                    Wd(this),
                    this.J = !0,
                    this.m.c();
                    for (var e = 0; e < this.h.length; e++)
                        this.h[e].cancel("RecaptchaVerifier instance has been destroyed.");
                    if (!this.i) {
                        e = dt(this.v);
                        for (var t; t = e.firstChild; )
                            e.removeChild(t)
                    }
                }
                ,
                S(Hd, Fd);
                var Kd = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");
                function Qd(e, t) {
                    return {
                        name: e || "",
                        K: "a valid string",
                        optional: !!t,
                        M: function(e) {
                            return "string" == typeof e
                        }
                    }
                }
                function Yd(e, t) {
                    return {
                        name: e || "",
                        K: "a boolean",
                        optional: !!t,
                        M: function(e) {
                            return "boolean" == typeof e
                        }
                    }
                }
                function Xd(e, t) {
                    return {
                        name: e || "",
                        K: "a valid object",
                        optional: !!t,
                        M: g
                    }
                }
                function Jd(e, t) {
                    return {
                        name: e || "",
                        K: "a function",
                        optional: !!t,
                        M: function(e) {
                            return "function" == typeof e
                        }
                    }
                }
                function ef(e, t) {
                    return {
                        name: e || "",
                        K: "null",
                        optional: !!t,
                        M: function(e) {
                            return null === e
                        }
                    }
                }
                function tf(e) {
                    return {
                        name: e ? e + "Credential" : "credential",
                        K: e ? "a valid " + e + " credential" : "a valid credential",
                        optional: !1,
                        M: function(t) {
                            if (!t)
                                return !1;
                            var n = !e || t.providerId === e;
                            return !(!t.ka || !n)
                        }
                    }
                }
                function nf(e, t) {
                    return g(e) && "string" == typeof e.type && e.type === t && "function" == typeof e.Ha
                }
                function rf(e) {
                    return g(e) && "string" == typeof e.uid
                }
                function of(e, t, n, r) {
                    return {
                        name: n || "",
                        K: e.K + " or " + t.K,
                        optional: !!r,
                        M: function(n) {
                            return e.M(n) || t.M(n)
                        }
                    }
                }
                function af(e, t) {
                    for (var n in t) {
                        var r = t[n].name;
                        e[r] = uf(r, e[n], t[n].j)
                    }
                }
                function sf(e, t) {
                    for (var n in t) {
                        var r = t[n].name;
                        r !== n && Object.defineProperty(e, r, {
                            get: x((function(e) {
                                return this[e]
                            }
                            ), n),
                            set: x((function(e, t, n, r) {
                                Gd(e, [n], [r], !0),
                                this[t] = r
                            }
                            ), r, n, t[n].lb),
                            enumerable: !0
                        })
                    }
                }
                function lf(e, t, n, r) {
                    e[t] = uf(t, n, r)
                }
                function uf(e, t, n) {
                    function r() {
                        var e = Array.prototype.slice.call(arguments);
                        return Gd(o, n, e),
                        t.apply(this, e)
                    }
                    if (!n)
                        return t;
                    var i, o = function(e) {
                        return e = e.split("."),
                        e[e.length - 1]
                    }(e);
                    for (i in t)
                        r[i] = t[i];
                    for (i in t.prototype)
                        r.prototype[i] = t.prototype[i];
                    return r
                }
                af(dd.prototype, {
                    kb: {
                        name: "applyActionCode",
                        j: [Qd("code")]
                    },
                    Sa: {
                        name: "checkActionCode",
                        j: [Qd("code")]
                    },
                    ob: {
                        name: "confirmPasswordReset",
                        j: [Qd("code"), Qd("newPassword")]
                    },
                    dc: {
                        name: "createUserWithEmailAndPassword",
                        j: [Qd("email"), Qd("password")]
                    },
                    hc: {
                        name: "fetchSignInMethodsForEmail",
                        j: [Qd("email")]
                    },
                    ra: {
                        name: "getRedirectResult",
                        j: []
                    },
                    Bc: {
                        name: "isSignInWithEmailLink",
                        j: [Qd("emailLink")]
                    },
                    Hc: {
                        name: "onAuthStateChanged",
                        j: [of(Xd(), Jd(), "nextOrObserver"), Jd("opt_error", !0), Jd("opt_completed", !0)]
                    },
                    Ic: {
                        name: "onIdTokenChanged",
                        j: [of(Xd(), Jd(), "nextOrObserver"), Jd("opt_error", !0), Jd("opt_completed", !0)]
                    },
                    wb: {
                        name: "sendPasswordResetEmail",
                        j: [Qd("email"), of(Xd("opt_actionCodeSettings", !0), ef(null, !0), "opt_actionCodeSettings", !0)]
                    },
                    xb: {
                        name: "sendSignInLinkToEmail",
                        j: [Qd("email"), Xd("actionCodeSettings")]
                    },
                    yb: {
                        name: "setPersistence",
                        j: [Qd("persistence")]
                    },
                    Sc: {
                        name: "signInAndRetrieveDataWithCredential",
                        j: [tf()]
                    },
                    Ab: {
                        name: "signInAnonymously",
                        j: []
                    },
                    ab: {
                        name: "signInWithCredential",
                        j: [tf()]
                    },
                    Tc: {
                        name: "signInWithCustomToken",
                        j: [Qd("token")]
                    },
                    Uc: {
                        name: "signInWithEmailAndPassword",
                        j: [Qd("email"), Qd("password")]
                    },
                    Vc: {
                        name: "signInWithEmailLink",
                        j: [Qd("email"), Qd("emailLink", !0)]
                    },
                    Wc: {
                        name: "signInWithPhoneNumber",
                        j: [Qd("phoneNumber"), {
                            name: "applicationVerifier",
                            K: "an implementation of firebase.auth.ApplicationVerifier",
                            optional: !1,
                            M: function(e) {
                                return !(!e || "string" != typeof e.type || "function" != typeof e.verify)
                            }
                        }]
                    },
                    Xc: {
                        name: "signInWithPopup",
                        j: [{
                            name: "authProvider",
                            K: "a valid Auth provider",
                            optional: !1,
                            M: function(e) {
                                return !!(e && e.providerId && e.hasOwnProperty && e.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    Yc: {
                        name: "signInWithRedirect",
                        j: [{
                            name: "authProvider",
                            K: "a valid Auth provider",
                            optional: !1,
                            M: function(e) {
                                return !!(e && e.providerId && e.hasOwnProperty && e.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    dd: {
                        name: "updateCurrentUser",
                        j: [of({
                            name: "user",
                            K: "an instance of Firebase User",
                            optional: !1,
                            M: function(e) {
                                return !!(e && e instanceof Cc)
                            }
                        }, ef(), "user")]
                    },
                    Bb: {
                        name: "signOut",
                        j: []
                    },
                    toJSON: {
                        name: "toJSON",
                        j: [Qd(null, !0)]
                    },
                    fd: {
                        name: "useDeviceLanguage",
                        j: []
                    },
                    gd: {
                        name: "useEmulator",
                        j: [Qd("url"), Xd("options", !0)]
                    },
                    jd: {
                        name: "verifyPasswordResetCode",
                        j: [Qd("code")]
                    }
                }),
                sf(dd.prototype, {
                    lc: {
                        name: "languageCode",
                        lb: of(Qd(), ef(), "languageCode")
                    },
                    ti: {
                        name: "tenantId",
                        lb: of(Qd(), ef(), "tenantId")
                    }
                }),
                dd.Persistence = ru,
                dd.Persistence.LOCAL = "local",
                dd.Persistence.SESSION = "session",
                dd.Persistence.NONE = "none",
                af(Cc.prototype, {
                    delete: {
                        name: "delete",
                        j: []
                    },
                    oc: {
                        name: "getIdTokenResult",
                        j: [Yd("opt_forceRefresh", !0)]
                    },
                    I: {
                        name: "getIdToken",
                        j: [Yd("opt_forceRefresh", !0)]
                    },
                    Cc: {
                        name: "linkAndRetrieveDataWithCredential",
                        j: [tf()]
                    },
                    rb: {
                        name: "linkWithCredential",
                        j: [tf()]
                    },
                    Dc: {
                        name: "linkWithPhoneNumber",
                        j: [Qd("phoneNumber"), {
                            name: "applicationVerifier",
                            K: "an implementation of firebase.auth.ApplicationVerifier",
                            optional: !1,
                            M: function(e) {
                                return !(!e || "string" != typeof e.type || "function" != typeof e.verify)
                            }
                        }]
                    },
                    Ec: {
                        name: "linkWithPopup",
                        j: [{
                            name: "authProvider",
                            K: "a valid Auth provider",
                            optional: !1,
                            M: function(e) {
                                return !!(e && e.providerId && e.hasOwnProperty && e.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    Fc: {
                        name: "linkWithRedirect",
                        j: [{
                            name: "authProvider",
                            K: "a valid Auth provider",
                            optional: !1,
                            M: function(e) {
                                return !!(e && e.providerId && e.hasOwnProperty && e.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    Lc: {
                        name: "reauthenticateAndRetrieveDataWithCredential",
                        j: [tf()]
                    },
                    ub: {
                        name: "reauthenticateWithCredential",
                        j: [tf()]
                    },
                    Mc: {
                        name: "reauthenticateWithPhoneNumber",
                        j: [Qd("phoneNumber"), {
                            name: "applicationVerifier",
                            K: "an implementation of firebase.auth.ApplicationVerifier",
                            optional: !1,
                            M: function(e) {
                                return !(!e || "string" != typeof e.type || "function" != typeof e.verify)
                            }
                        }]
                    },
                    Nc: {
                        name: "reauthenticateWithPopup",
                        j: [{
                            name: "authProvider",
                            K: "a valid Auth provider",
                            optional: !1,
                            M: function(e) {
                                return !!(e && e.providerId && e.hasOwnProperty && e.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    Oc: {
                        name: "reauthenticateWithRedirect",
                        j: [{
                            name: "authProvider",
                            K: "a valid Auth provider",
                            optional: !1,
                            M: function(e) {
                                return !!(e && e.providerId && e.hasOwnProperty && e.hasOwnProperty("isOAuthProvider"))
                            }
                        }]
                    },
                    reload: {
                        name: "reload",
                        j: []
                    },
                    vb: {
                        name: "sendEmailVerification",
                        j: [of(Xd("opt_actionCodeSettings", !0), ef(null, !0), "opt_actionCodeSettings", !0)]
                    },
                    toJSON: {
                        name: "toJSON",
                        j: [Qd(null, !0)]
                    },
                    cd: {
                        name: "unlink",
                        j: [Qd("provider")]
                    },
                    Cb: {
                        name: "updateEmail",
                        j: [Qd("email")]
                    },
                    Db: {
                        name: "updatePassword",
                        j: [Qd("password")]
                    },
                    ed: {
                        name: "updatePhoneNumber",
                        j: [tf("phone")]
                    },
                    Eb: {
                        name: "updateProfile",
                        j: [Xd("profile")]
                    },
                    Fb: {
                        name: "verifyBeforeUpdateEmail",
                        j: [Qd("email"), of(Xd("opt_actionCodeSettings", !0), ef(null, !0), "opt_actionCodeSettings", !0)]
                    }
                }),
                af(kd.prototype, {
                    execute: {
                        name: "execute"
                    },
                    render: {
                        name: "render"
                    },
                    reset: {
                        name: "reset"
                    },
                    getResponse: {
                        name: "getResponse"
                    }
                }),
                af(Sd.prototype, {
                    execute: {
                        name: "execute"
                    },
                    render: {
                        name: "render"
                    },
                    reset: {
                        name: "reset"
                    },
                    getResponse: {
                        name: "getResponse"
                    }
                }),
                af(xt.prototype, {
                    oa: {
                        name: "finally"
                    },
                    o: {
                        name: "catch"
                    },
                    then: {
                        name: "then"
                    }
                }),
                sf(tc.prototype, {
                    appVerificationDisabled: {
                        name: "appVerificationDisabledForTesting",
                        lb: Yd("appVerificationDisabledForTesting")
                    }
                }),
                af(nc.prototype, {
                    confirm: {
                        name: "confirm",
                        j: [Qd("verificationCode")]
                    }
                }),
                lf(po, "fromJSON", (function(e) {
                    e = "string" == typeof e ? JSON.parse(e) : e;
                    for (var t, n = [wo, Mo, Lo, vo], r = 0; r < n.length; r++)
                        if (t = n[r](e))
                            return t;
                    return null
                }
                ), [of(Qd(), Xd(), "json")]),
                lf(No, "credential", (function(e, t) {
                    return new Ro(e,t)
                }
                ), [Qd("email"), Qd("password")]),
                af(Ro.prototype, {
                    w: {
                        name: "toJSON",
                        j: [Qd(null, !0)]
                    }
                }),
                af(Co.prototype, {
                    Ca: {
                        name: "addScope",
                        j: [Qd("scope")]
                    },
                    Ka: {
                        name: "setCustomParameters",
                        j: [Xd("customOAuthParameters")]
                    }
                }),
                lf(Co, "credential", So, [of(Qd(), Xd(), "token")]),
                lf(No, "credentialWithLink", Zo, [Qd("email"), Qd("emailLink")]),
                af(ko.prototype, {
                    Ca: {
                        name: "addScope",
                        j: [Qd("scope")]
                    },
                    Ka: {
                        name: "setCustomParameters",
                        j: [Xd("customOAuthParameters")]
                    }
                }),
                lf(ko, "credential", To, [of(Qd(), Xd(), "token")]),
                af(Oo.prototype, {
                    Ca: {
                        name: "addScope",
                        j: [Qd("scope")]
                    },
                    Ka: {
                        name: "setCustomParameters",
                        j: [Xd("customOAuthParameters")]
                    }
                }),
                lf(Oo, "credential", Io, [of(Qd(), of(Xd(), ef()), "idToken"), of(Qd(), ef(), "accessToken", !0)]),
                af(Ao.prototype, {
                    Ka: {
                        name: "setCustomParameters",
                        j: [Xd("customOAuthParameters")]
                    }
                }),
                lf(Ao, "credential", Po, [of(Qd(), Xd(), "token"), Qd("secret", !0)]),
                af(xo.prototype, {
                    Ca: {
                        name: "addScope",
                        j: [Qd("scope")]
                    },
                    credential: {
                        name: "credential",
                        j: [of(Qd(), of(Xd(), ef()), "optionsOrIdToken"), of(Qd(), ef(), "accessToken", !0)]
                    },
                    Ka: {
                        name: "setCustomParameters",
                        j: [Xd("customOAuthParameters")]
                    }
                }),
                af(yo.prototype, {
                    w: {
                        name: "toJSON",
                        j: [Qd(null, !0)]
                    }
                }),
                af(mo.prototype, {
                    w: {
                        name: "toJSON",
                        j: [Qd(null, !0)]
                    }
                }),
                lf(Uo, "credential", Bo, [Qd("verificationId"), Qd("verificationCode")]),
                af(Uo.prototype, {
                    gb: {
                        name: "verifyPhoneNumber",
                        j: [of(Qd(), {
                            name: "phoneInfoOptions",
                            K: "valid phone info options",
                            optional: !1,
                            M: function(e) {
                                return !!e && (e.session && e.phoneNumber ? nf(e.session, co) && "string" == typeof e.phoneNumber : e.session && e.multiFactorHint ? nf(e.session, fo) && rf(e.multiFactorHint) : e.session && e.multiFactorUid ? nf(e.session, fo) && "string" == typeof e.multiFactorUid : !!e.phoneNumber && "string" == typeof e.phoneNumber)
                            }
                        }, "phoneInfoOptions"), {
                            name: "applicationVerifier",
                            K: "an implementation of firebase.auth.ApplicationVerifier",
                            optional: !1,
                            M: function(e) {
                                return !(!e || "string" != typeof e.type || "function" != typeof e.verify)
                            }
                        }]
                    }
                }),
                af(jo.prototype, {
                    w: {
                        name: "toJSON",
                        j: [Qd(null, !0)]
                    }
                }),
                af(T.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [Qd(null, !0)]
                    }
                }),
                af(Qo.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [Qd(null, !0)]
                    }
                }),
                af(Ko.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [Qd(null, !0)]
                    }
                }),
                af(lc.prototype, {
                    toJSON: {
                        name: "toJSON",
                        j: [Qd(null, !0)]
                    }
                }),
                af(oc.prototype, {
                    Rc: {
                        name: "resolveSignIn",
                        j: [{
                            name: "multiFactorAssertion",
                            K: "a valid multiFactorAssertion",
                            optional: !1,
                            M: function(e) {
                                return !!e && !!e.tb
                            }
                        }]
                    }
                }),
                af(hc.prototype, {
                    Sb: {
                        name: "getSession",
                        j: []
                    },
                    fc: {
                        name: "enroll",
                        j: [{
                            name: "multiFactorAssertion",
                            K: "a valid multiFactorAssertion",
                            optional: !1,
                            M: function(e) {
                                return !!e && !!e.tb
                            }
                        }, Qd("displayName", !0)]
                    },
                    bd: {
                        name: "unenroll",
                        j: [of({
                            name: "multiFactorInfo",
                            K: "a valid multiFactorInfo",
                            optional: !1,
                            M: rf
                        }, Qd(), "multiFactorInfoIdentifier")]
                    }
                }),
                af(Hd.prototype, {
                    clear: {
                        name: "clear",
                        j: []
                    },
                    render: {
                        name: "render",
                        j: []
                    },
                    verify: {
                        name: "verify",
                        j: []
                    }
                }),
                lf(Ci, "parseLink", Ri, [Qd("link")]),
                lf(Rd, "assertion", (function(e) {
                    return new fc(e)
                }
                ), [tf("phone")]),
                function() {
                    if (void 0 === r.default || !r.default.INTERNAL || !r.default.INTERNAL.registerComponent)
                        throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
                    var e = {
                        ActionCodeInfo: {
                            Operation: {
                                EMAIL_SIGNIN: fi,
                                PASSWORD_RESET: "PASSWORD_RESET",
                                RECOVER_EMAIL: "RECOVER_EMAIL",
                                REVERT_SECOND_FACTOR_ADDITION: di,
                                VERIFY_AND_CHANGE_EMAIL: pi,
                                VERIFY_EMAIL: "VERIFY_EMAIL"
                            }
                        },
                        Auth: dd,
                        AuthCredential: po,
                        Error: T
                    };
                    lf(e, "EmailAuthProvider", No, []),
                    lf(e, "FacebookAuthProvider", Co, []),
                    lf(e, "GithubAuthProvider", ko, []),
                    lf(e, "GoogleAuthProvider", Oo, []),
                    lf(e, "TwitterAuthProvider", Ao, []),
                    lf(e, "OAuthProvider", xo, [Qd("providerId")]),
                    lf(e, "SAMLAuthProvider", Eo, [Qd("providerId")]),
                    lf(e, "PhoneAuthProvider", Uo, [{
                        name: "auth",
                        K: "an instance of Firebase Auth",
                        optional: !0,
                        M: function(e) {
                            return !!(e && e instanceof dd)
                        }
                    }]),
                    lf(e, "RecaptchaVerifier", Hd, [of(Qd(), {
                        name: "",
                        K: "an HTML element",
                        optional: !1,
                        M: function(e) {
                            return !!(e && e instanceof Element)
                        }
                    }, "recaptchaContainer"), Xd("recaptchaParameters", !0), {
                        name: "app",
                        K: "an instance of Firebase App",
                        optional: !0,
                        M: function(e) {
                            return !!(e && e instanceof r.default.app.App)
                        }
                    }]),
                    lf(e, "ActionCodeURL", Ci, []),
                    lf(e, "PhoneMultiFactorGenerator", Rd, []),
                    r.default.INTERNAL.registerComponent({
                        name: "auth",
                        instanceFactory: function(e) {
                            return new dd(e = e.getProvider("app").getImmediate())
                        },
                        multipleInstances: !1,
                        serviceProps: e,
                        instantiationMode: "LAZY",
                        type: "PUBLIC",
                        onInstanceCreated: function(e) {
                            e.getProvider("auth-internal").initialize()
                        }
                    }),
                    r.default.INTERNAL.registerComponent({
                        name: "auth-internal",
                        instanceFactory: function(e) {
                            return {
                                getUid: E((e = e.getProvider("auth").getImmediate()).getUid, e),
                                getToken: E(e.nc, e),
                                addAuthTokenListener: E(e.cc, e),
                                removeAuthTokenListener: E(e.Pc, e)
                            }
                        },
                        multipleInstances: !1,
                        instantiationMode: "LAZY",
                        type: "PRIVATE"
                    }),
                    r.default.registerVersion("@firebase/auth", "0.16.8"),
                    r.default.INTERNAL.extendNamespace({
                        User: Cc
                    })
                }()
            }
            ).apply(void 0 !== n.g ? n.g : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }
        ,
        30909: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Component: ()=>o,
                ComponentContainer: ()=>l
            });
            var r = n(70655)
              , i = n(44589)
              , o = function() {
                function e(e, t, n) {
                    this.name = e,
                    this.instanceFactory = t,
                    this.type = n,
                    this.multipleInstances = !1,
                    this.serviceProps = {},
                    this.instantiationMode = "LAZY",
                    this.onInstanceCreated = null
                }
                return e.prototype.setInstantiationMode = function(e) {
                    return this.instantiationMode = e,
                    this
                }
                ,
                e.prototype.setMultipleInstances = function(e) {
                    return this.multipleInstances = e,
                    this
                }
                ,
                e.prototype.setServiceProps = function(e) {
                    return this.serviceProps = e,
                    this
                }
                ,
                e.prototype.setInstanceCreatedCallback = function(e) {
                    return this.onInstanceCreated = e,
                    this
                }
                ,
                e
            }()
              , a = "[DEFAULT]"
              , s = function() {
                function e(e, t) {
                    this.name = e,
                    this.container = t,
                    this.component = null,
                    this.instances = new Map,
                    this.instancesDeferred = new Map,
                    this.instancesOptions = new Map,
                    this.onInitCallbacks = new Map
                }
                return e.prototype.get = function(e) {
                    var t = this.normalizeInstanceIdentifier(e);
                    if (!this.instancesDeferred.has(t)) {
                        var n = new i.Deferred;
                        if (this.instancesDeferred.set(t, n),
                        this.isInitialized(t) || this.shouldAutoInitialize())
                            try {
                                var r = this.getOrInitializeService({
                                    instanceIdentifier: t
                                });
                                r && n.resolve(r)
                            } catch (e) {}
                    }
                    return this.instancesDeferred.get(t).promise
                }
                ,
                e.prototype.getImmediate = function(e) {
                    var t, n = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier), r = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
                    if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
                        if (r)
                            return null;
                        throw Error("Service " + this.name + " is not available")
                    }
                    try {
                        return this.getOrInitializeService({
                            instanceIdentifier: n
                        })
                    } catch (e) {
                        if (r)
                            return null;
                        throw e
                    }
                }
                ,
                e.prototype.getComponent = function() {
                    return this.component
                }
                ,
                e.prototype.setComponent = function(e) {
                    var t, n;
                    if (e.name !== this.name)
                        throw Error("Mismatching Component " + e.name + " for Provider " + this.name + ".");
                    if (this.component)
                        throw Error("Component for " + this.name + " has already been provided");
                    if (this.component = e,
                    this.shouldAutoInitialize()) {
                        if (function(e) {
                            return "EAGER" === e.instantiationMode
                        }(e))
                            try {
                                this.getOrInitializeService({
                                    instanceIdentifier: a
                                })
                            } catch (e) {}
                        try {
                            for (var i = (0,
                            r.__values)(this.instancesDeferred.entries()), o = i.next(); !o.done; o = i.next()) {
                                var s = (0,
                                r.__read)(o.value, 2)
                                  , l = s[0]
                                  , u = s[1]
                                  , c = this.normalizeInstanceIdentifier(l);
                                try {
                                    var d = this.getOrInitializeService({
                                        instanceIdentifier: c
                                    });
                                    u.resolve(d)
                                } catch (e) {}
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                o && !o.done && (n = i.return) && n.call(i)
                            } finally {
                                if (t)
                                    throw t.error
                            }
                        }
                    }
                }
                ,
                e.prototype.clearInstance = function(e) {
                    void 0 === e && (e = a),
                    this.instancesDeferred.delete(e),
                    this.instancesOptions.delete(e),
                    this.instances.delete(e)
                }
                ,
                e.prototype.delete = function() {
                    return (0,
                    r.__awaiter)(this, void 0, void 0, (function() {
                        var e;
                        return (0,
                        r.__generator)(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return e = Array.from(this.instances.values()),
                                [4, Promise.all((0,
                                r.__spreadArray)((0,
                                r.__spreadArray)([], (0,
                                r.__read)(e.filter((function(e) {
                                    return "INTERNAL"in e
                                }
                                )).map((function(e) {
                                    return e.INTERNAL.delete()
                                }
                                )))), (0,
                                r.__read)(e.filter((function(e) {
                                    return "_delete"in e
                                }
                                )).map((function(e) {
                                    return e._delete()
                                }
                                )))))];
                            case 1:
                                return t.sent(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.isComponentSet = function() {
                    return null != this.component
                }
                ,
                e.prototype.isInitialized = function(e) {
                    return void 0 === e && (e = a),
                    this.instances.has(e)
                }
                ,
                e.prototype.getOptions = function(e) {
                    return void 0 === e && (e = a),
                    this.instancesOptions.get(e) || {}
                }
                ,
                e.prototype.initialize = function(e) {
                    var t, n;
                    void 0 === e && (e = {});
                    var i = e.options
                      , o = void 0 === i ? {} : i
                      , a = this.normalizeInstanceIdentifier(e.instanceIdentifier);
                    if (this.isInitialized(a))
                        throw Error(this.name + "(" + a + ") has already been initialized");
                    if (!this.isComponentSet())
                        throw Error("Component " + this.name + " has not been registered yet");
                    var s = this.getOrInitializeService({
                        instanceIdentifier: a,
                        options: o
                    });
                    try {
                        for (var l = (0,
                        r.__values)(this.instancesDeferred.entries()), u = l.next(); !u.done; u = l.next()) {
                            var c = (0,
                            r.__read)(u.value, 2)
                              , d = c[0]
                              , f = c[1];
                            a === this.normalizeInstanceIdentifier(d) && f.resolve(s)
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (n = l.return) && n.call(l)
                        } finally {
                            if (t)
                                throw t.error
                        }
                    }
                    return s
                }
                ,
                e.prototype.onInit = function(e, t) {
                    var n, r = this.normalizeInstanceIdentifier(t), i = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set;
                    i.add(e),
                    this.onInitCallbacks.set(r, i);
                    var o = this.instances.get(r);
                    return o && e(o, r),
                    function() {
                        i.delete(e)
                    }
                }
                ,
                e.prototype.invokeOnInitCallbacks = function(e, t) {
                    var n, i, o = this.onInitCallbacks.get(t);
                    if (o)
                        try {
                            for (var a = (0,
                            r.__values)(o), s = a.next(); !s.done; s = a.next()) {
                                var l = s.value;
                                try {
                                    l(e, t)
                                } catch (e) {}
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                s && !s.done && (i = a.return) && i.call(a)
                            } finally {
                                if (n)
                                    throw n.error
                            }
                        }
                }
                ,
                e.prototype.getOrInitializeService = function(e) {
                    var t, n = e.instanceIdentifier, r = e.options, i = void 0 === r ? {} : r, o = this.instances.get(n);
                    if (!o && this.component && (o = this.component.instanceFactory(this.container, {
                        instanceIdentifier: (t = n,
                        t === a ? void 0 : t),
                        options: i
                    }),
                    this.instances.set(n, o),
                    this.instancesOptions.set(n, i),
                    this.invokeOnInitCallbacks(o, n),
                    this.component.onInstanceCreated))
                        try {
                            this.component.onInstanceCreated(this.container, n, o)
                        } catch (e) {}
                    return o || null
                }
                ,
                e.prototype.normalizeInstanceIdentifier = function(e) {
                    return void 0 === e && (e = a),
                    this.component ? this.component.multipleInstances ? e : a : e
                }
                ,
                e.prototype.shouldAutoInitialize = function() {
                    return !!this.component && "EXPLICIT" !== this.component.instantiationMode
                }
                ,
                e
            }();
            var l = function() {
                function e(e) {
                    this.name = e,
                    this.providers = new Map
                }
                return e.prototype.addComponent = function(e) {
                    var t = this.getProvider(e.name);
                    if (t.isComponentSet())
                        throw new Error("Component " + e.name + " has already been registered with " + this.name);
                    t.setComponent(e)
                }
                ,
                e.prototype.addOrOverwriteComponent = function(e) {
                    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
                    this.addComponent(e)
                }
                ,
                e.prototype.getProvider = function(e) {
                    if (this.providers.has(e))
                        return this.providers.get(e);
                    var t = new s(e,this);
                    return this.providers.set(e, t),
                    t
                }
                ,
                e.prototype.getProviders = function() {
                    return Array.from(this.providers.values())
                }
                ,
                e
            }()
        }
        ,
        88483: (e,t,n)=>{
            "use strict";
            var r, i = n(26099), o = n(96653), a = n(30909), s = (n(44589),
            n(14594),
            n(73705),
            {
                Firestore: o.U,
                GeoPoint: o.C,
                Timestamp: o.M,
                Blob: o.a,
                Transaction: o.j,
                WriteBatch: o.W,
                DocumentReference: o.z,
                DocumentSnapshot: o.X,
                Query: o.t,
                QueryDocumentSnapshot: o.Z,
                QuerySnapshot: o.n,
                CollectionReference: o.s,
                FieldPath: o.r,
                FieldValue: o.o,
                setLogLevel: o.Q,
                CACHE_SIZE_UNLIMITED: o.E
            });
            (function(e, t) {
                e.INTERNAL.registerComponent(new a.Component("firestore",(function(e) {
                    return function(e, t) {
                        return new o.U(e,new o.T(e,t),new o.q)
                    }(e.getProvider("app").getImmediate(), e.getProvider("auth-internal"))
                }
                ),"PUBLIC").setServiceProps(Object.assign({}, s)))
            }
            )(r = i.default),
            r.registerVersion("@firebase/firestore", "2.4.0")
        }
        ,
        96653: (e,t,n)=>{
            "use strict";
            n.d(t, {
                C: ()=>Hs,
                E: ()=>Ls,
                M: ()=>S,
                Q: ()=>iu,
                T: ()=>Fs,
                U: ()=>nu,
                W: ()=>au,
                X: ()=>fu,
                Z: ()=>pu,
                a: ()=>eu,
                j: ()=>ou,
                n: ()=>gu,
                o: ()=>wu,
                q: ()=>tu,
                r: ()=>bu,
                s: ()=>vu,
                t: ()=>hu,
                z: ()=>lu
            });
            var r = n(70655)
              , i = n(44589)
              , o = n(14594)
              , a = n(73705)
              , s = n(34155)
              , l = function() {
                function e(e, t) {
                    var n = this;
                    this.previousValue = e,
                    t && (t.sequenceNumberHandler = function(e) {
                        return n.t(e)
                    }
                    ,
                    this.i = function(e) {
                        return t.writeSequenceNumber(e)
                    }
                    )
                }
                return e.prototype.t = function(e) {
                    return this.previousValue = Math.max(e, this.previousValue),
                    this.previousValue
                }
                ,
                e.prototype.next = function() {
                    var e = ++this.previousValue;
                    return this.i && this.i(e),
                    e
                }
                ,
                e
            }();
            l.o = -1;
            var u = {
                OK: "ok",
                CANCELLED: "cancelled",
                UNKNOWN: "unknown",
                INVALID_ARGUMENT: "invalid-argument",
                DEADLINE_EXCEEDED: "deadline-exceeded",
                NOT_FOUND: "not-found",
                ALREADY_EXISTS: "already-exists",
                PERMISSION_DENIED: "permission-denied",
                UNAUTHENTICATED: "unauthenticated",
                RESOURCE_EXHAUSTED: "resource-exhausted",
                FAILED_PRECONDITION: "failed-precondition",
                ABORTED: "aborted",
                OUT_OF_RANGE: "out-of-range",
                UNIMPLEMENTED: "unimplemented",
                INTERNAL: "internal",
                UNAVAILABLE: "unavailable",
                DATA_LOSS: "data-loss"
            }
              , c = function(e) {
                function t(t, n) {
                    var r = this;
                    return (r = e.call(this, n) || this).code = t,
                    r.message = n,
                    r.name = "FirebaseError",
                    r.toString = function() {
                        return r.name + ": [code=" + r.code + "]: " + r.message
                    }
                    ,
                    r
                }
                return (0,
                r.__extends)(t, e),
                t
            }(Error)
              , d = new o.Logger("@firebase/firestore");
            function f() {
                return d.logLevel
            }
            function p(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                if (d.logLevel <= o.LogLevel.DEBUG) {
                    var i = t.map(g);
                    d.debug.apply(d, (0,
                    r.__spreadArray)(["Firestore (8.10.0): " + e], i))
                }
            }
            function h(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                if (d.logLevel <= o.LogLevel.ERROR) {
                    var i = t.map(g);
                    d.error.apply(d, (0,
                    r.__spreadArray)(["Firestore (8.10.0): " + e], i))
                }
            }
            function m(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                if (d.logLevel <= o.LogLevel.WARN) {
                    var i = t.map(g);
                    d.warn.apply(d, (0,
                    r.__spreadArray)(["Firestore (8.10.0): " + e], i))
                }
            }
            function g(e) {
                if ("string" == typeof e)
                    return e;
                try {
                    return t = e,
                    JSON.stringify(t)
                } catch (t) {
                    return e
                }
                var t
            }
            function v(e) {
                void 0 === e && (e = "Unexpected state");
                var t = "FIRESTORE (8.10.0) INTERNAL ASSERTION FAILED: " + e;
                throw h(t),
                new Error(t)
            }
            function y(e, t) {
                e || v()
            }
            function b(e, t) {
                return e
            }
            function w(e) {
                var t = "undefined" != typeof self && (self.crypto || self.msCrypto)
                  , n = new Uint8Array(e);
                if (t && "function" == typeof t.getRandomValues)
                    t.getRandomValues(n);
                else
                    for (var r = 0; r < e; r++)
                        n[r] = Math.floor(256 * Math.random());
                return n
            }
            var _ = function() {
                function e() {}
                return e.u = function() {
                    for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = Math.floor(256 / e.length) * e.length, n = ""; n.length < 20; )
                        for (var r = w(40), i = 0; i < r.length; ++i)
                            n.length < 20 && r[i] < t && (n += e.charAt(r[i] % e.length));
                    return n
                }
                ,
                e
            }();
            function E(e, t) {
                return e < t ? -1 : e > t ? 1 : 0
            }
            function x(e, t, n) {
                return e.length === t.length && e.every((function(e, r) {
                    return n(e, t[r])
                }
                ))
            }
            function C(e) {
                return e + "\0"
            }
            var S = function() {
                function e(e, t) {
                    if (this.seconds = e,
                    this.nanoseconds = t,
                    t < 0)
                        throw new c(u.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: " + t);
                    if (t >= 1e9)
                        throw new c(u.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: " + t);
                    if (e < -62135596800)
                        throw new c(u.INVALID_ARGUMENT,"Timestamp seconds out of range: " + e);
                    if (e >= 253402300800)
                        throw new c(u.INVALID_ARGUMENT,"Timestamp seconds out of range: " + e)
                }
                return e.now = function() {
                    return e.fromMillis(Date.now())
                }
                ,
                e.fromDate = function(t) {
                    return e.fromMillis(t.getTime())
                }
                ,
                e.fromMillis = function(t) {
                    var n = Math.floor(t / 1e3);
                    return new e(n,Math.floor(1e6 * (t - 1e3 * n)))
                }
                ,
                e.prototype.toDate = function() {
                    return new Date(this.toMillis())
                }
                ,
                e.prototype.toMillis = function() {
                    return 1e3 * this.seconds + this.nanoseconds / 1e6
                }
                ,
                e.prototype._compareTo = function(e) {
                    return this.seconds === e.seconds ? E(this.nanoseconds, e.nanoseconds) : E(this.seconds, e.seconds)
                }
                ,
                e.prototype.isEqual = function(e) {
                    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
                }
                ,
                e.prototype.toString = function() {
                    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")"
                }
                ,
                e.prototype.toJSON = function() {
                    return {
                        seconds: this.seconds,
                        nanoseconds: this.nanoseconds
                    }
                }
                ,
                e.prototype.valueOf = function() {
                    var e = this.seconds - -62135596800;
                    return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0")
                }
                ,
                e
            }()
              , k = function() {
                function e(e) {
                    this.timestamp = e
                }
                return e.fromTimestamp = function(t) {
                    return new e(t)
                }
                ,
                e.min = function() {
                    return new e(new S(0,0))
                }
                ,
                e.prototype.compareTo = function(e) {
                    return this.timestamp._compareTo(e.timestamp)
                }
                ,
                e.prototype.isEqual = function(e) {
                    return this.timestamp.isEqual(e.timestamp)
                }
                ,
                e.prototype.toMicroseconds = function() {
                    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
                }
                ,
                e.prototype.toString = function() {
                    return "SnapshotVersion(" + this.timestamp.toString() + ")"
                }
                ,
                e.prototype.toTimestamp = function() {
                    return this.timestamp
                }
                ,
                e
            }();
            function T(e) {
                var t = 0;
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t++;
                return t
            }
            function O(e, t) {
                for (var n in e)
                    Object.prototype.hasOwnProperty.call(e, n) && t(n, e[n])
            }
            function I(e) {
                for (var t in e)
                    if (Object.prototype.hasOwnProperty.call(e, t))
                        return !1;
                return !0
            }
            var A = function() {
                function e(e, t, n) {
                    void 0 === t ? t = 0 : t > e.length && v(),
                    void 0 === n ? n = e.length - t : n > e.length - t && v(),
                    this.segments = e,
                    this.offset = t,
                    this.len = n
                }
                return Object.defineProperty(e.prototype, "length", {
                    get: function() {
                        return this.len
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.isEqual = function(t) {
                    return 0 === e.comparator(this, t)
                }
                ,
                e.prototype.child = function(t) {
                    var n = this.segments.slice(this.offset, this.limit());
                    return t instanceof e ? t.forEach((function(e) {
                        n.push(e)
                    }
                    )) : n.push(t),
                    this.construct(n)
                }
                ,
                e.prototype.limit = function() {
                    return this.offset + this.length
                }
                ,
                e.prototype.popFirst = function(e) {
                    return e = void 0 === e ? 1 : e,
                    this.construct(this.segments, this.offset + e, this.length - e)
                }
                ,
                e.prototype.popLast = function() {
                    return this.construct(this.segments, this.offset, this.length - 1)
                }
                ,
                e.prototype.firstSegment = function() {
                    return this.segments[this.offset]
                }
                ,
                e.prototype.lastSegment = function() {
                    return this.get(this.length - 1)
                }
                ,
                e.prototype.get = function(e) {
                    return this.segments[this.offset + e]
                }
                ,
                e.prototype.isEmpty = function() {
                    return 0 === this.length
                }
                ,
                e.prototype.isPrefixOf = function(e) {
                    if (e.length < this.length)
                        return !1;
                    for (var t = 0; t < this.length; t++)
                        if (this.get(t) !== e.get(t))
                            return !1;
                    return !0
                }
                ,
                e.prototype.isImmediateParentOf = function(e) {
                    if (this.length + 1 !== e.length)
                        return !1;
                    for (var t = 0; t < this.length; t++)
                        if (this.get(t) !== e.get(t))
                            return !1;
                    return !0
                }
                ,
                e.prototype.forEach = function(e) {
                    for (var t = this.offset, n = this.limit(); t < n; t++)
                        e(this.segments[t])
                }
                ,
                e.prototype.toArray = function() {
                    return this.segments.slice(this.offset, this.limit())
                }
                ,
                e.comparator = function(e, t) {
                    for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
                        var i = e.get(r)
                          , o = t.get(r);
                        if (i < o)
                            return -1;
                        if (i > o)
                            return 1
                    }
                    return e.length < t.length ? -1 : e.length > t.length ? 1 : 0
                }
                ,
                e
            }()
              , P = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return (0,
                r.__extends)(t, e),
                t.prototype.construct = function(e, n, r) {
                    return new t(e,n,r)
                }
                ,
                t.prototype.canonicalString = function() {
                    return this.toArray().join("/")
                }
                ,
                t.prototype.toString = function() {
                    return this.canonicalString()
                }
                ,
                t.fromString = function() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                        e[n] = arguments[n];
                    for (var r = [], i = 0, o = e; i < o.length; i++) {
                        var a = o[i];
                        if (a.indexOf("//") >= 0)
                            throw new c(u.INVALID_ARGUMENT,"Invalid segment (" + a + "). Paths must not contain // in them.");
                        r.push.apply(r, a.split("/").filter((function(e) {
                            return e.length > 0
                        }
                        )))
                    }
                    return new t(r)
                }
                ,
                t.emptyPath = function() {
                    return new t([])
                }
                ,
                t
            }(A)
              , R = /^[_a-zA-Z][_a-zA-Z0-9]*$/
              , M = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return (0,
                r.__extends)(t, e),
                t.prototype.construct = function(e, n, r) {
                    return new t(e,n,r)
                }
                ,
                t.isValidIdentifier = function(e) {
                    return R.test(e)
                }
                ,
                t.prototype.canonicalString = function() {
                    return this.toArray().map((function(e) {
                        return e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"),
                        t.isValidIdentifier(e) || (e = "`" + e + "`"),
                        e
                    }
                    )).join(".")
                }
                ,
                t.prototype.toString = function() {
                    return this.canonicalString()
                }
                ,
                t.prototype.isKeyField = function() {
                    return 1 === this.length && "__name__" === this.get(0)
                }
                ,
                t.keyField = function() {
                    return new t(["__name__"])
                }
                ,
                t.fromServerFormat = function(e) {
                    for (var n = [], r = "", i = 0, o = function() {
                        if (0 === r.length)
                            throw new c(u.INVALID_ARGUMENT,"Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
                        n.push(r),
                        r = ""
                    }, a = !1; i < e.length; ) {
                        var s = e[i];
                        if ("\\" === s) {
                            if (i + 1 === e.length)
                                throw new c(u.INVALID_ARGUMENT,"Path has trailing escape character: " + e);
                            var l = e[i + 1];
                            if ("\\" !== l && "." !== l && "`" !== l)
                                throw new c(u.INVALID_ARGUMENT,"Path has invalid escape sequence: " + e);
                            r += l,
                            i += 2
                        } else
                            "`" === s ? (a = !a,
                            i++) : "." !== s || a ? (r += s,
                            i++) : (o(),
                            i++)
                    }
                    if (o(),
                    a)
                        throw new c(u.INVALID_ARGUMENT,"Unterminated ` in path: " + e);
                    return new t(n)
                }
                ,
                t.emptyPath = function() {
                    return new t([])
                }
                ,
                t
            }(A)
              , N = function() {
                function e(e) {
                    this.fields = e,
                    e.sort(M.comparator)
                }
                return e.prototype.covers = function(e) {
                    for (var t = 0, n = this.fields; t < n.length; t++)
                        if (n[t].isPrefixOf(e))
                            return !0;
                    return !1
                }
                ,
                e.prototype.isEqual = function(e) {
                    return x(this.fields, e.fields, (function(e, t) {
                        return e.isEqual(t)
                    }
                    ))
                }
                ,
                e
            }()
              , Z = function() {
                function e(e) {
                    this.binaryString = e
                }
                return e.fromBase64String = function(t) {
                    return new e(atob(t))
                }
                ,
                e.fromUint8Array = function(t) {
                    return new e(function(e) {
                        for (var t = "", n = 0; n < e.length; ++n)
                            t += String.fromCharCode(e[n]);
                        return t
                    }(t))
                }
                ,
                e.prototype.toBase64 = function() {
                    return e = this.binaryString,
                    btoa(e);
                    var e
                }
                ,
                e.prototype.toUint8Array = function() {
                    return function(e) {
                        for (var t = new Uint8Array(e.length), n = 0; n < e.length; n++)
                            t[n] = e.charCodeAt(n);
                        return t
                    }(this.binaryString)
                }
                ,
                e.prototype.approximateByteSize = function() {
                    return 2 * this.binaryString.length
                }
                ,
                e.prototype.compareTo = function(e) {
                    return E(this.binaryString, e.binaryString)
                }
                ,
                e.prototype.isEqual = function(e) {
                    return this.binaryString === e.binaryString
                }
                ,
                e
            }();
            Z.EMPTY_BYTE_STRING = new Z("");
            var D = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
            function j(e) {
                if (y(!!e),
                "string" == typeof e) {
                    var t = 0
                      , n = D.exec(e);
                    if (y(!!n),
                    n[1]) {
                        var r = n[1];
                        r = (r + "000000000").substr(0, 9),
                        t = Number(r)
                    }
                    var i = new Date(e);
                    return {
                        seconds: Math.floor(i.getTime() / 1e3),
                        nanos: t
                    }
                }
                return {
                    seconds: L(e.seconds),
                    nanos: L(e.nanos)
                }
            }
            function L(e) {
                return "number" == typeof e ? e : "string" == typeof e ? Number(e) : 0
            }
            function F(e) {
                return "string" == typeof e ? Z.fromBase64String(e) : Z.fromUint8Array(e)
            }
            function U(e) {
                var t, n;
                return "server_timestamp" === (null === (n = ((null === (t = null == e ? void 0 : e.mapValue) || void 0 === t ? void 0 : t.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue)
            }
            function B(e) {
                var t = e.mapValue.fields.__previous_value__;
                return U(t) ? B(t) : t
            }
            function z(e) {
                var t = j(e.mapValue.fields.__local_write_time__.timestampValue);
                return new S(t.seconds,t.nanos)
            }
            function $(e) {
                return null == e
            }
            function q(e) {
                return 0 === e && 1 / e == -1 / 0
            }
            function V(e) {
                return "number" == typeof e && Number.isInteger(e) && !q(e) && e <= Number.MAX_SAFE_INTEGER && e >= Number.MIN_SAFE_INTEGER
            }
            var W = function() {
                function e(e) {
                    this.path = e
                }
                return e.fromPath = function(t) {
                    return new e(P.fromString(t))
                }
                ,
                e.fromName = function(t) {
                    return new e(P.fromString(t).popFirst(5))
                }
                ,
                e.prototype.hasCollectionId = function(e) {
                    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e
                }
                ,
                e.prototype.isEqual = function(e) {
                    return null !== e && 0 === P.comparator(this.path, e.path)
                }
                ,
                e.prototype.toString = function() {
                    return this.path.toString()
                }
                ,
                e.comparator = function(e, t) {
                    return P.comparator(e.path, t.path)
                }
                ,
                e.isDocumentKey = function(e) {
                    return e.length % 2 == 0
                }
                ,
                e.fromSegments = function(t) {
                    return new e(new P(t.slice()))
                }
                ,
                e
            }();
            function H(e) {
                return "nullValue"in e ? 0 : "booleanValue"in e ? 1 : "integerValue"in e || "doubleValue"in e ? 2 : "timestampValue"in e ? 3 : "stringValue"in e ? 5 : "bytesValue"in e ? 6 : "referenceValue"in e ? 7 : "geoPointValue"in e ? 8 : "arrayValue"in e ? 9 : "mapValue"in e ? U(e) ? 4 : 10 : v()
            }
            function G(e, t) {
                var n = H(e);
                if (n !== H(t))
                    return !1;
                switch (n) {
                case 0:
                    return !0;
                case 1:
                    return e.booleanValue === t.booleanValue;
                case 4:
                    return z(e).isEqual(z(t));
                case 3:
                    return function(e, t) {
                        if ("string" == typeof e.timestampValue && "string" == typeof t.timestampValue && e.timestampValue.length === t.timestampValue.length)
                            return e.timestampValue === t.timestampValue;
                        var n = j(e.timestampValue)
                          , r = j(t.timestampValue);
                        return n.seconds === r.seconds && n.nanos === r.nanos
                    }(e, t);
                case 5:
                    return e.stringValue === t.stringValue;
                case 6:
                    return function(e, t) {
                        return F(e.bytesValue).isEqual(F(t.bytesValue))
                    }(e, t);
                case 7:
                    return e.referenceValue === t.referenceValue;
                case 8:
                    return function(e, t) {
                        return L(e.geoPointValue.latitude) === L(t.geoPointValue.latitude) && L(e.geoPointValue.longitude) === L(t.geoPointValue.longitude)
                    }(e, t);
                case 2:
                    return function(e, t) {
                        if ("integerValue"in e && "integerValue"in t)
                            return L(e.integerValue) === L(t.integerValue);
                        if ("doubleValue"in e && "doubleValue"in t) {
                            var n = L(e.doubleValue)
                              , r = L(t.doubleValue);
                            return n === r ? q(n) === q(r) : isNaN(n) && isNaN(r)
                        }
                        return !1
                    }(e, t);
                case 9:
                    return x(e.arrayValue.values || [], t.arrayValue.values || [], G);
                case 10:
                    return function(e, t) {
                        var n = e.mapValue.fields || {}
                          , r = t.mapValue.fields || {};
                        if (T(n) !== T(r))
                            return !1;
                        for (var i in n)
                            if (n.hasOwnProperty(i) && (void 0 === r[i] || !G(n[i], r[i])))
                                return !1;
                        return !0
                    }(e, t);
                default:
                    return v()
                }
            }
            function K(e, t) {
                return void 0 !== (e.values || []).find((function(e) {
                    return G(e, t)
                }
                ))
            }
            function Q(e, t) {
                var n = H(e)
                  , r = H(t);
                if (n !== r)
                    return E(n, r);
                switch (n) {
                case 0:
                    return 0;
                case 1:
                    return E(e.booleanValue, t.booleanValue);
                case 2:
                    return function(e, t) {
                        var n = L(e.integerValue || e.doubleValue)
                          , r = L(t.integerValue || t.doubleValue);
                        return n < r ? -1 : n > r ? 1 : n === r ? 0 : isNaN(n) ? isNaN(r) ? 0 : -1 : 1
                    }(e, t);
                case 3:
                    return Y(e.timestampValue, t.timestampValue);
                case 4:
                    return Y(z(e), z(t));
                case 5:
                    return E(e.stringValue, t.stringValue);
                case 6:
                    return function(e, t) {
                        var n = F(e)
                          , r = F(t);
                        return n.compareTo(r)
                    }(e.bytesValue, t.bytesValue);
                case 7:
                    return function(e, t) {
                        for (var n = e.split("/"), r = t.split("/"), i = 0; i < n.length && i < r.length; i++) {
                            var o = E(n[i], r[i]);
                            if (0 !== o)
                                return o
                        }
                        return E(n.length, r.length)
                    }(e.referenceValue, t.referenceValue);
                case 8:
                    return function(e, t) {
                        var n = E(L(e.latitude), L(t.latitude));
                        return 0 !== n ? n : E(L(e.longitude), L(t.longitude))
                    }(e.geoPointValue, t.geoPointValue);
                case 9:
                    return function(e, t) {
                        for (var n = e.values || [], r = t.values || [], i = 0; i < n.length && i < r.length; ++i) {
                            var o = Q(n[i], r[i]);
                            if (o)
                                return o
                        }
                        return E(n.length, r.length)
                    }(e.arrayValue, t.arrayValue);
                case 10:
                    return function(e, t) {
                        var n = e.fields || {}
                          , r = Object.keys(n)
                          , i = t.fields || {}
                          , o = Object.keys(i);
                        r.sort(),
                        o.sort();
                        for (var a = 0; a < r.length && a < o.length; ++a) {
                            var s = E(r[a], o[a]);
                            if (0 !== s)
                                return s;
                            var l = Q(n[r[a]], i[o[a]]);
                            if (0 !== l)
                                return l
                        }
                        return E(r.length, o.length)
                    }(e.mapValue, t.mapValue);
                default:
                    throw v()
                }
            }
            function Y(e, t) {
                if ("string" == typeof e && "string" == typeof t && e.length === t.length)
                    return E(e, t);
                var n = j(e)
                  , r = j(t)
                  , i = E(n.seconds, r.seconds);
                return 0 !== i ? i : E(n.nanos, r.nanos)
            }
            function X(e) {
                return J(e)
            }
            function J(e) {
                return "nullValue"in e ? "null" : "booleanValue"in e ? "" + e.booleanValue : "integerValue"in e ? "" + e.integerValue : "doubleValue"in e ? "" + e.doubleValue : "timestampValue"in e ? function(e) {
                    var t = j(e);
                    return "time(" + t.seconds + "," + t.nanos + ")"
                }(e.timestampValue) : "stringValue"in e ? e.stringValue : "bytesValue"in e ? F(e.bytesValue).toBase64() : "referenceValue"in e ? (n = e.referenceValue,
                W.fromName(n).toString()) : "geoPointValue"in e ? "geo(" + (t = e.geoPointValue).latitude + "," + t.longitude + ")" : "arrayValue"in e ? function(e) {
                    for (var t = "[", n = !0, r = 0, i = e.values || []; r < i.length; r++)
                        n ? n = !1 : t += ",",
                        t += J(i[r]);
                    return t + "]"
                }(e.arrayValue) : "mapValue"in e ? function(e) {
                    for (var t = "{", n = !0, r = 0, i = Object.keys(e.fields || {}).sort(); r < i.length; r++) {
                        var o = i[r];
                        n ? n = !1 : t += ",",
                        t += o + ":" + J(e.fields[o])
                    }
                    return t + "}"
                }(e.mapValue) : v();
                var t, n
            }
            function ee(e, t) {
                return {
                    referenceValue: "projects/" + e.projectId + "/databases/" + e.database + "/documents/" + t.path.canonicalString()
                }
            }
            function te(e) {
                return !!e && "integerValue"in e
            }
            function ne(e) {
                return !!e && "arrayValue"in e
            }
            function re(e) {
                return !!e && "nullValue"in e
            }
            function ie(e) {
                return !!e && "doubleValue"in e && isNaN(Number(e.doubleValue))
            }
            function oe(e) {
                return !!e && "mapValue"in e
            }
            function ae(e) {
                if (e.geoPointValue)
                    return {
                        geoPointValue: Object.assign({}, e.geoPointValue)
                    };
                if (e.timestampValue && "object" == typeof e.timestampValue)
                    return {
                        timestampValue: Object.assign({}, e.timestampValue)
                    };
                if (e.mapValue) {
                    var t = {
                        mapValue: {
                            fields: {}
                        }
                    };
                    return O(e.mapValue.fields, (function(e, n) {
                        return t.mapValue.fields[e] = ae(n)
                    }
                    )),
                    t
                }
                if (e.arrayValue) {
                    for (var n = {
                        arrayValue: {
                            values: []
                        }
                    }, r = 0; r < (e.arrayValue.values || []).length; ++r)
                        n.arrayValue.values[r] = ae(e.arrayValue.values[r]);
                    return n
                }
                return Object.assign({}, e)
            }
            var se = function() {
                function e(e) {
                    this.value = e
                }
                return e.empty = function() {
                    return new e({
                        mapValue: {}
                    })
                }
                ,
                e.prototype.field = function(e) {
                    if (e.isEmpty())
                        return this.value;
                    for (var t = this.value, n = 0; n < e.length - 1; ++n)
                        if (!oe(t = (t.mapValue.fields || {})[e.get(n)]))
                            return null;
                    return (t = (t.mapValue.fields || {})[e.lastSegment()]) || null
                }
                ,
                e.prototype.set = function(e, t) {
                    this.getFieldsMap(e.popLast())[e.lastSegment()] = ae(t)
                }
                ,
                e.prototype.setAll = function(e) {
                    var t = this
                      , n = M.emptyPath()
                      , r = {}
                      , i = [];
                    e.forEach((function(e, o) {
                        if (!n.isImmediateParentOf(o)) {
                            var a = t.getFieldsMap(n);
                            t.applyChanges(a, r, i),
                            r = {},
                            i = [],
                            n = o.popLast()
                        }
                        e ? r[o.lastSegment()] = ae(e) : i.push(o.lastSegment())
                    }
                    ));
                    var o = this.getFieldsMap(n);
                    this.applyChanges(o, r, i)
                }
                ,
                e.prototype.delete = function(e) {
                    var t = this.field(e.popLast());
                    oe(t) && t.mapValue.fields && delete t.mapValue.fields[e.lastSegment()]
                }
                ,
                e.prototype.isEqual = function(e) {
                    return G(this.value, e.value)
                }
                ,
                e.prototype.getFieldsMap = function(e) {
                    var t = this.value;
                    t.mapValue.fields || (t.mapValue = {
                        fields: {}
                    });
                    for (var n = 0; n < e.length; ++n) {
                        var r = t.mapValue.fields[e.get(n)];
                        oe(r) && r.mapValue.fields || (r = {
                            mapValue: {
                                fields: {}
                            }
                        },
                        t.mapValue.fields[e.get(n)] = r),
                        t = r
                    }
                    return t.mapValue.fields
                }
                ,
                e.prototype.applyChanges = function(e, t, n) {
                    O(t, (function(t, n) {
                        return e[t] = n
                    }
                    ));
                    for (var r = 0, i = n; r < i.length; r++) {
                        var o = i[r];
                        delete e[o]
                    }
                }
                ,
                e.prototype.clone = function() {
                    return new e(ae(this.value))
                }
                ,
                e
            }();
            function le(e) {
                var t = [];
                return O(e.fields, (function(e, n) {
                    var r = new M([e]);
                    if (oe(n)) {
                        var i = le(n.mapValue).fields;
                        if (0 === i.length)
                            t.push(r);
                        else
                            for (var o = 0, a = i; o < a.length; o++) {
                                var s = a[o];
                                t.push(r.child(s))
                            }
                    } else
                        t.push(r)
                }
                )),
                new N(t)
            }
            var ue = function() {
                function e(e, t, n, r, i) {
                    this.key = e,
                    this.documentType = t,
                    this.version = n,
                    this.data = r,
                    this.documentState = i
                }
                return e.newInvalidDocument = function(t) {
                    return new e(t,0,k.min(),se.empty(),0)
                }
                ,
                e.newFoundDocument = function(t, n, r) {
                    return new e(t,1,n,r,0)
                }
                ,
                e.newNoDocument = function(t, n) {
                    return new e(t,2,n,se.empty(),0)
                }
                ,
                e.newUnknownDocument = function(t, n) {
                    return new e(t,3,n,se.empty(),2)
                }
                ,
                e.prototype.convertToFoundDocument = function(e, t) {
                    return this.version = e,
                    this.documentType = 1,
                    this.data = t,
                    this.documentState = 0,
                    this
                }
                ,
                e.prototype.convertToNoDocument = function(e) {
                    return this.version = e,
                    this.documentType = 2,
                    this.data = se.empty(),
                    this.documentState = 0,
                    this
                }
                ,
                e.prototype.convertToUnknownDocument = function(e) {
                    return this.version = e,
                    this.documentType = 3,
                    this.data = se.empty(),
                    this.documentState = 2,
                    this
                }
                ,
                e.prototype.setHasCommittedMutations = function() {
                    return this.documentState = 2,
                    this
                }
                ,
                e.prototype.setHasLocalMutations = function() {
                    return this.documentState = 1,
                    this
                }
                ,
                Object.defineProperty(e.prototype, "hasLocalMutations", {
                    get: function() {
                        return 1 === this.documentState
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "hasCommittedMutations", {
                    get: function() {
                        return 2 === this.documentState
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "hasPendingWrites", {
                    get: function() {
                        return this.hasLocalMutations || this.hasCommittedMutations
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.isValidDocument = function() {
                    return 0 !== this.documentType
                }
                ,
                e.prototype.isFoundDocument = function() {
                    return 1 === this.documentType
                }
                ,
                e.prototype.isNoDocument = function() {
                    return 2 === this.documentType
                }
                ,
                e.prototype.isUnknownDocument = function() {
                    return 3 === this.documentType
                }
                ,
                e.prototype.isEqual = function(t) {
                    return t instanceof e && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.documentType === t.documentType && this.documentState === t.documentState && this.data.isEqual(t.data)
                }
                ,
                e.prototype.clone = function() {
                    return new e(this.key,this.documentType,this.version,this.data.clone(),this.documentState)
                }
                ,
                e.prototype.toString = function() {
                    return "Document(" + this.key + ", " + this.version + ", " + JSON.stringify(this.data.value) + ", {documentType: " + this.documentType + "}), {documentState: " + this.documentState + "})"
                }
                ,
                e
            }()
              , ce = function(e, t, n, r, i, o, a) {
                void 0 === t && (t = null),
                void 0 === n && (n = []),
                void 0 === r && (r = []),
                void 0 === i && (i = null),
                void 0 === o && (o = null),
                void 0 === a && (a = null),
                this.path = e,
                this.collectionGroup = t,
                this.orderBy = n,
                this.filters = r,
                this.limit = i,
                this.startAt = o,
                this.endAt = a,
                this.h = null
            };
            function de(e, t, n, r, i, o, a) {
                return void 0 === t && (t = null),
                void 0 === n && (n = []),
                void 0 === r && (r = []),
                void 0 === i && (i = null),
                void 0 === o && (o = null),
                void 0 === a && (a = null),
                new ce(e,t,n,r,i,o,a)
            }
            function fe(e) {
                var t = b(e);
                if (null === t.h) {
                    var n = t.path.canonicalString();
                    null !== t.collectionGroup && (n += "|cg:" + t.collectionGroup),
                    n += "|f:",
                    n += t.filters.map((function(e) {
                        return function(e) {
                            return e.field.canonicalString() + e.op.toString() + X(e.value)
                        }(e)
                    }
                    )).join(","),
                    n += "|ob:",
                    n += t.orderBy.map((function(e) {
                        return function(e) {
                            return e.field.canonicalString() + e.dir
                        }(e)
                    }
                    )).join(","),
                    $(t.limit) || (n += "|l:",
                    n += t.limit),
                    t.startAt && (n += "|lb:",
                    n += Se(t.startAt)),
                    t.endAt && (n += "|ub:",
                    n += Se(t.endAt)),
                    t.h = n
                }
                return t.h
            }
            function pe(e, t) {
                if (e.limit !== t.limit)
                    return !1;
                if (e.orderBy.length !== t.orderBy.length)
                    return !1;
                for (var n = 0; n < e.orderBy.length; n++)
                    if (!Te(e.orderBy[n], t.orderBy[n]))
                        return !1;
                if (e.filters.length !== t.filters.length)
                    return !1;
                for (var r = 0; r < e.filters.length; r++)
                    if (i = e.filters[r],
                    o = t.filters[r],
                    i.op !== o.op || !i.field.isEqual(o.field) || !G(i.value, o.value))
                        return !1;
                var i, o;
                return e.collectionGroup === t.collectionGroup && !!e.path.isEqual(t.path) && !!Ie(e.startAt, t.startAt) && Ie(e.endAt, t.endAt)
            }
            function he(e) {
                return W.isDocumentKey(e.path) && null === e.collectionGroup && 0 === e.filters.length
            }
            var me = function(e) {
                function t(t, n, r) {
                    var i = this;
                    return (i = e.call(this) || this).field = t,
                    i.op = n,
                    i.value = r,
                    i
                }
                return (0,
                r.__extends)(t, e),
                t.create = function(e, n, r) {
                    return e.isKeyField() ? "in" === n || "not-in" === n ? this.l(e, n, r) : new ge(e,n,r) : "array-contains" === n ? new we(e,r) : "in" === n ? new _e(e,r) : "not-in" === n ? new Ee(e,r) : "array-contains-any" === n ? new xe(e,r) : new t(e,n,r)
                }
                ,
                t.l = function(e, t, n) {
                    return "in" === t ? new ve(e,n) : new ye(e,n)
                }
                ,
                t.prototype.matches = function(e) {
                    var t = e.data.field(this.field);
                    return "!=" === this.op ? null !== t && this.m(Q(t, this.value)) : null !== t && H(this.value) === H(t) && this.m(Q(t, this.value))
                }
                ,
                t.prototype.m = function(e) {
                    switch (this.op) {
                    case "<":
                        return e < 0;
                    case "<=":
                        return e <= 0;
                    case "==":
                        return 0 === e;
                    case "!=":
                        return 0 !== e;
                    case ">":
                        return e > 0;
                    case ">=":
                        return e >= 0;
                    default:
                        return v()
                    }
                }
                ,
                t.prototype.g = function() {
                    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0
                }
                ,
                t
            }((function() {}
            ))
              , ge = function(e) {
                function t(t, n, r) {
                    var i = this;
                    return (i = e.call(this, t, n, r) || this).key = W.fromName(r.referenceValue),
                    i
                }
                return (0,
                r.__extends)(t, e),
                t.prototype.matches = function(e) {
                    var t = W.comparator(e.key, this.key);
                    return this.m(t)
                }
                ,
                t
            }(me)
              , ve = function(e) {
                function t(t, n) {
                    var r = this;
                    return (r = e.call(this, t, "in", n) || this).keys = be("in", n),
                    r
                }
                return (0,
                r.__extends)(t, e),
                t.prototype.matches = function(e) {
                    return this.keys.some((function(t) {
                        return t.isEqual(e.key)
                    }
                    ))
                }
                ,
                t
            }(me)
              , ye = function(e) {
                function t(t, n) {
                    var r = this;
                    return (r = e.call(this, t, "not-in", n) || this).keys = be("not-in", n),
                    r
                }
                return (0,
                r.__extends)(t, e),
                t.prototype.matches = function(e) {
                    return !this.keys.some((function(t) {
                        return t.isEqual(e.key)
                    }
                    ))
                }
                ,
                t
            }(me);
            function be(e, t) {
                var n;
                return ((null === (n = t.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((function(e) {
                    return W.fromName(e.referenceValue)
                }
                ))
            }
            var we = function(e) {
                function t(t, n) {
                    return e.call(this, t, "array-contains", n) || this
                }
                return (0,
                r.__extends)(t, e),
                t.prototype.matches = function(e) {
                    var t = e.data.field(this.field);
                    return ne(t) && K(t.arrayValue, this.value)
                }
                ,
                t
            }(me)
              , _e = function(e) {
                function t(t, n) {
                    return e.call(this, t, "in", n) || this
                }
                return (0,
                r.__extends)(t, e),
                t.prototype.matches = function(e) {
                    var t = e.data.field(this.field);
                    return null !== t && K(this.value.arrayValue, t)
                }
                ,
                t
            }(me)
              , Ee = function(e) {
                function t(t, n) {
                    return e.call(this, t, "not-in", n) || this
                }
                return (0,
                r.__extends)(t, e),
                t.prototype.matches = function(e) {
                    if (K(this.value.arrayValue, {
                        nullValue: "NULL_VALUE"
                    }))
                        return !1;
                    var t = e.data.field(this.field);
                    return null !== t && !K(this.value.arrayValue, t)
                }
                ,
                t
            }(me)
              , xe = function(e) {
                function t(t, n) {
                    return e.call(this, t, "array-contains-any", n) || this
                }
                return (0,
                r.__extends)(t, e),
                t.prototype.matches = function(e) {
                    var t = this
                      , n = e.data.field(this.field);
                    return !(!ne(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(e) {
                        return K(t.value.arrayValue, e)
                    }
                    ))
                }
                ,
                t
            }(me)
              , Ce = function(e, t) {
                this.position = e,
                this.before = t
            };
            function Se(e) {
                return (e.before ? "b" : "a") + ":" + e.position.map((function(e) {
                    return X(e)
                }
                )).join(",")
            }
            var ke = function(e, t) {
                void 0 === t && (t = "asc"),
                this.field = e,
                this.dir = t
            };
            function Te(e, t) {
                return e.dir === t.dir && e.field.isEqual(t.field)
            }
            function Oe(e, t, n) {
                for (var r = 0, i = 0; i < e.position.length; i++) {
                    var o = t[i]
                      , a = e.position[i];
                    if (r = o.field.isKeyField() ? W.comparator(W.fromName(a.referenceValue), n.key) : Q(a, n.data.field(o.field)),
                    "desc" === o.dir && (r *= -1),
                    0 !== r)
                        break
                }
                return e.before ? r <= 0 : r < 0
            }
            function Ie(e, t) {
                if (null === e)
                    return null === t;
                if (null === t)
                    return !1;
                if (e.before !== t.before || e.position.length !== t.position.length)
                    return !1;
                for (var n = 0; n < e.position.length; n++)
                    if (!G(e.position[n], t.position[n]))
                        return !1;
                return !0
            }
            var Ae = function(e, t, n, r, i, o, a, s) {
                void 0 === t && (t = null),
                void 0 === n && (n = []),
                void 0 === r && (r = []),
                void 0 === i && (i = null),
                void 0 === o && (o = "F"),
                void 0 === a && (a = null),
                void 0 === s && (s = null),
                this.path = e,
                this.collectionGroup = t,
                this.explicitOrderBy = n,
                this.filters = r,
                this.limit = i,
                this.limitType = o,
                this.startAt = a,
                this.endAt = s,
                this.p = null,
                this.T = null,
                this.startAt,
                this.endAt
            };
            function Pe(e, t, n, r, i, o, a, s) {
                return new Ae(e,t,n,r,i,o,a,s)
            }
            function Re(e) {
                return new Ae(e)
            }
            function Me(e) {
                return !$(e.limit) && "F" === e.limitType
            }
            function Ne(e) {
                return !$(e.limit) && "L" === e.limitType
            }
            function Ze(e) {
                return e.explicitOrderBy.length > 0 ? e.explicitOrderBy[0].field : null
            }
            function De(e) {
                for (var t = 0, n = e.filters; t < n.length; t++) {
                    var r = n[t];
                    if (r.g())
                        return r.field
                }
                return null
            }
            function je(e) {
                return null !== e.collectionGroup
            }
            function Le(e) {
                var t = b(e);
                if (null === t.p) {
                    t.p = [];
                    var n = De(t)
                      , r = Ze(t);
                    if (null !== n && null === r)
                        n.isKeyField() || t.p.push(new ke(n)),
                        t.p.push(new ke(M.keyField(),"asc"));
                    else {
                        for (var i = !1, o = 0, a = t.explicitOrderBy; o < a.length; o++) {
                            var s = a[o];
                            t.p.push(s),
                            s.field.isKeyField() && (i = !0)
                        }
                        if (!i) {
                            var l = t.explicitOrderBy.length > 0 ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir : "asc";
                            t.p.push(new ke(M.keyField(),l))
                        }
                    }
                }
                return t.p
            }
            function Fe(e) {
                var t = b(e);
                if (!t.T)
                    if ("F" === t.limitType)
                        t.T = de(t.path, t.collectionGroup, Le(t), t.filters, t.limit, t.startAt, t.endAt);
                    else {
                        for (var n = [], r = 0, i = Le(t); r < i.length; r++) {
                            var o = i[r]
                              , a = "desc" === o.dir ? "asc" : "desc";
                            n.push(new ke(o.field,a))
                        }
                        var s = t.endAt ? new Ce(t.endAt.position,!t.endAt.before) : null
                          , l = t.startAt ? new Ce(t.startAt.position,!t.startAt.before) : null;
                        t.T = de(t.path, t.collectionGroup, n, t.filters, t.limit, s, l)
                    }
                return t.T
            }
            function Ue(e, t, n) {
                return new Ae(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)
            }
            function Be(e, t) {
                return pe(Fe(e), Fe(t)) && e.limitType === t.limitType
            }
            function ze(e) {
                return fe(Fe(e)) + "|lt:" + e.limitType
            }
            function $e(e) {
                return "Query(target=" + function(e) {
                    var t = e.path.canonicalString();
                    return null !== e.collectionGroup && (t += " collectionGroup=" + e.collectionGroup),
                    e.filters.length > 0 && (t += ", filters: [" + e.filters.map((function(e) {
                        return (t = e).field.canonicalString() + " " + t.op + " " + X(t.value);
                        var t
                    }
                    )).join(", ") + "]"),
                    $(e.limit) || (t += ", limit: " + e.limit),
                    e.orderBy.length > 0 && (t += ", orderBy: [" + e.orderBy.map((function(e) {
                        return function(e) {
                            return e.field.canonicalString() + " (" + e.dir + ")"
                        }(e)
                    }
                    )).join(", ") + "]"),
                    e.startAt && (t += ", startAt: " + Se(e.startAt)),
                    e.endAt && (t += ", endAt: " + Se(e.endAt)),
                    "Target(" + t + ")"
                }(Fe(e)) + "; limitType=" + e.limitType + ")"
            }
            function qe(e, t) {
                return t.isFoundDocument() && function(e, t) {
                    var n = t.key.path;
                    return null !== e.collectionGroup ? t.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(n) : W.isDocumentKey(e.path) ? e.path.isEqual(n) : e.path.isImmediateParentOf(n)
                }(e, t) && function(e, t) {
                    for (var n = 0, r = e.explicitOrderBy; n < r.length; n++) {
                        var i = r[n];
                        if (!i.field.isKeyField() && null === t.data.field(i.field))
                            return !1
                    }
                    return !0
                }(e, t) && function(e, t) {
                    for (var n = 0, r = e.filters; n < r.length; n++)
                        if (!r[n].matches(t))
                            return !1;
                    return !0
                }(e, t) && function(e, t) {
                    return !(e.startAt && !Oe(e.startAt, Le(e), t) || e.endAt && Oe(e.endAt, Le(e), t))
                }(e, t)
            }
            function Ve(e) {
                return function(t, n) {
                    for (var r = !1, i = 0, o = Le(e); i < o.length; i++) {
                        var a = o[i]
                          , s = We(a, t, n);
                        if (0 !== s)
                            return s;
                        r = r || a.field.isKeyField()
                    }
                    return 0
                }
            }
            function We(e, t, n) {
                var r = e.field.isKeyField() ? W.comparator(t.key, n.key) : function(e, t, n) {
                    var r = t.data.field(e)
                      , i = n.data.field(e);
                    return null !== r && null !== i ? Q(r, i) : v()
                }(e.field, t, n);
                switch (e.dir) {
                case "asc":
                    return r;
                case "desc":
                    return -1 * r;
                default:
                    return v()
                }
            }
            function He(e, t) {
                if (e.I) {
                    if (isNaN(t))
                        return {
                            doubleValue: "NaN"
                        };
                    if (t === 1 / 0)
                        return {
                            doubleValue: "Infinity"
                        };
                    if (t === -1 / 0)
                        return {
                            doubleValue: "-Infinity"
                        }
                }
                return {
                    doubleValue: q(t) ? "-0" : t
                }
            }
            function Ge(e) {
                return {
                    integerValue: "" + e
                }
            }
            function Ke(e, t) {
                return V(t) ? Ge(t) : He(e, t)
            }
            var Qe = function() {
                this._ = void 0
            };
            function Ye(e, t, n) {
                return e instanceof et ? function(e, t) {
                    var n = {
                        fields: {
                            __type__: {
                                stringValue: "server_timestamp"
                            },
                            __local_write_time__: {
                                timestampValue: {
                                    seconds: e.seconds,
                                    nanos: e.nanoseconds
                                }
                            }
                        }
                    };
                    return t && (n.fields.__previous_value__ = t),
                    {
                        mapValue: n
                    }
                }(n, t) : e instanceof tt ? nt(e, t) : e instanceof rt ? it(e, t) : function(e, t) {
                    var n = Je(e, t)
                      , r = at(n) + at(e.A);
                    return te(n) && te(e.A) ? Ge(r) : He(e.R, r)
                }(e, t)
            }
            function Xe(e, t, n) {
                return e instanceof tt ? nt(e, t) : e instanceof rt ? it(e, t) : n
            }
            function Je(e, t) {
                return e instanceof ot ? te(n = t) || function(e) {
                    return !!e && "doubleValue"in e
                }(n) ? t : {
                    integerValue: 0
                } : null;
                var n
            }
            var et = function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return (0,
                r.__extends)(t, e),
                t
            }(Qe)
              , tt = function(e) {
                function t(t) {
                    var n = this;
                    return (n = e.call(this) || this).elements = t,
                    n
                }
                return (0,
                r.__extends)(t, e),
                t
            }(Qe);
            function nt(e, t) {
                for (var n = st(t), r = function(e) {
                    n.some((function(t) {
                        return G(t, e)
                    }
                    )) || n.push(e)
                }, i = 0, o = e.elements; i < o.length; i++)
                    r(o[i]);
                return {
                    arrayValue: {
                        values: n
                    }
                }
            }
            var rt = function(e) {
                function t(t) {
                    var n = this;
                    return (n = e.call(this) || this).elements = t,
                    n
                }
                return (0,
                r.__extends)(t, e),
                t
            }(Qe);
            function it(e, t) {
                for (var n = st(t), r = function(e) {
                    n = n.filter((function(t) {
                        return !G(t, e)
                    }
                    ))
                }, i = 0, o = e.elements; i < o.length; i++)
                    r(o[i]);
                return {
                    arrayValue: {
                        values: n
                    }
                }
            }
            var ot = function(e) {
                function t(t, n) {
                    var r = this;
                    return (r = e.call(this) || this).R = t,
                    r.A = n,
                    r
                }
                return (0,
                r.__extends)(t, e),
                t
            }(Qe);
            function at(e) {
                return L(e.integerValue || e.doubleValue)
            }
            function st(e) {
                return ne(e) && e.arrayValue.values ? e.arrayValue.values.slice() : []
            }
            var lt = function(e, t) {
                this.field = e,
                this.transform = t
            }
              , ut = function(e, t) {
                this.version = e,
                this.transformResults = t
            }
              , ct = function() {
                function e(e, t) {
                    this.updateTime = e,
                    this.exists = t
                }
                return e.none = function() {
                    return new e
                }
                ,
                e.exists = function(t) {
                    return new e(void 0,t)
                }
                ,
                e.updateTime = function(t) {
                    return new e(t)
                }
                ,
                Object.defineProperty(e.prototype, "isNone", {
                    get: function() {
                        return void 0 === this.updateTime && void 0 === this.exists
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.isEqual = function(e) {
                    return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime)
                }
                ,
                e
            }();
            function dt(e, t) {
                return void 0 !== e.updateTime ? t.isFoundDocument() && t.version.isEqual(e.updateTime) : void 0 === e.exists || e.exists === t.isFoundDocument()
            }
            var ft = function() {};
            function pt(e, t, n) {
                e instanceof yt ? function(e, t, n) {
                    var r = e.value.clone()
                      , i = _t(e.fieldTransforms, t, n.transformResults);
                    r.setAll(i),
                    t.convertToFoundDocument(n.version, r).setHasCommittedMutations()
                }(e, t, n) : e instanceof bt ? function(e, t, n) {
                    if (dt(e.precondition, t)) {
                        var r = _t(e.fieldTransforms, t, n.transformResults)
                          , i = t.data;
                        i.setAll(wt(e)),
                        i.setAll(r),
                        t.convertToFoundDocument(n.version, i).setHasCommittedMutations()
                    } else
                        t.convertToUnknownDocument(n.version)
                }(e, t, n) : function(e, t, n) {
                    t.convertToNoDocument(n.version).setHasCommittedMutations()
                }(0, t, n)
            }
            function ht(e, t, n) {
                e instanceof yt ? function(e, t, n) {
                    if (dt(e.precondition, t)) {
                        var r = e.value.clone()
                          , i = Et(e.fieldTransforms, n, t);
                        r.setAll(i),
                        t.convertToFoundDocument(vt(t), r).setHasLocalMutations()
                    }
                }(e, t, n) : e instanceof bt ? function(e, t, n) {
                    if (dt(e.precondition, t)) {
                        var r = Et(e.fieldTransforms, n, t)
                          , i = t.data;
                        i.setAll(wt(e)),
                        i.setAll(r),
                        t.convertToFoundDocument(vt(t), i).setHasLocalMutations()
                    }
                }(e, t, n) : function(e, t) {
                    dt(e.precondition, t) && t.convertToNoDocument(k.min())
                }(e, t)
            }
            function mt(e, t) {
                for (var n = null, r = 0, i = e.fieldTransforms; r < i.length; r++) {
                    var o = i[r]
                      , a = t.data.field(o.field)
                      , s = Je(o.transform, a || null);
                    null != s && (null == n && (n = se.empty()),
                    n.set(o.field, s))
                }
                return n || null
            }
            function gt(e, t) {
                return e.type === t.type && !!e.key.isEqual(t.key) && !!e.precondition.isEqual(t.precondition) && !!function(e, t) {
                    return void 0 === e && void 0 === t || !(!e || !t) && x(e, t, (function(e, t) {
                        return function(e, t) {
                            return e.field.isEqual(t.field) && function(e, t) {
                                return e instanceof tt && t instanceof tt || e instanceof rt && t instanceof rt ? x(e.elements, t.elements, G) : e instanceof ot && t instanceof ot ? G(e.A, t.A) : e instanceof et && t instanceof et
                            }(e.transform, t.transform)
                        }(e, t)
                    }
                    ))
                }(e.fieldTransforms, t.fieldTransforms) && (0 === e.type ? e.value.isEqual(t.value) : 1 !== e.type || e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask))
            }
            function vt(e) {
                return e.isFoundDocument() ? e.version : k.min()
            }
            var yt = function(e) {
                function t(t, n, r, i) {
                    void 0 === i && (i = []);
                    var o = this;
                    return (o = e.call(this) || this).key = t,
                    o.value = n,
                    o.precondition = r,
                    o.fieldTransforms = i,
                    o.type = 0,
                    o
                }
                return (0,
                r.__extends)(t, e),
                t
            }(ft)
              , bt = function(e) {
                function t(t, n, r, i, o) {
                    void 0 === o && (o = []);
                    var a = this;
                    return (a = e.call(this) || this).key = t,
                    a.data = n,
                    a.fieldMask = r,
                    a.precondition = i,
                    a.fieldTransforms = o,
                    a.type = 1,
                    a
                }
                return (0,
                r.__extends)(t, e),
                t
            }(ft);
            function wt(e) {
                var t = new Map;
                return e.fieldMask.fields.forEach((function(n) {
                    if (!n.isEmpty()) {
                        var r = e.data.field(n);
                        t.set(n, r)
                    }
                }
                )),
                t
            }
            function _t(e, t, n) {
                var r = new Map;
                y(e.length === n.length);
                for (var i = 0; i < n.length; i++) {
                    var o = e[i]
                      , a = o.transform
                      , s = t.data.field(o.field);
                    r.set(o.field, Xe(a, s, n[i]))
                }
                return r
            }
            function Et(e, t, n) {
                for (var r = new Map, i = 0, o = e; i < o.length; i++) {
                    var a = o[i]
                      , s = a.transform
                      , l = n.data.field(a.field);
                    r.set(a.field, Ye(s, l, t))
                }
                return r
            }
            var xt, Ct, St = function(e) {
                function t(t, n) {
                    var r = this;
                    return (r = e.call(this) || this).key = t,
                    r.precondition = n,
                    r.type = 2,
                    r.fieldTransforms = [],
                    r
                }
                return (0,
                r.__extends)(t, e),
                t
            }(ft), kt = function(e) {
                function t(t, n) {
                    var r = this;
                    return (r = e.call(this) || this).key = t,
                    r.precondition = n,
                    r.type = 3,
                    r.fieldTransforms = [],
                    r
                }
                return (0,
                r.__extends)(t, e),
                t
            }(ft), Tt = function(e) {
                this.count = e
            };
            function Ot(e) {
                switch (e) {
                case u.OK:
                    return v();
                case u.CANCELLED:
                case u.UNKNOWN:
                case u.DEADLINE_EXCEEDED:
                case u.RESOURCE_EXHAUSTED:
                case u.INTERNAL:
                case u.UNAVAILABLE:
                case u.UNAUTHENTICATED:
                    return !1;
                case u.INVALID_ARGUMENT:
                case u.NOT_FOUND:
                case u.ALREADY_EXISTS:
                case u.PERMISSION_DENIED:
                case u.FAILED_PRECONDITION:
                case u.ABORTED:
                case u.OUT_OF_RANGE:
                case u.UNIMPLEMENTED:
                case u.DATA_LOSS:
                    return !0;
                default:
                    return v()
                }
            }
            function It(e) {
                if (void 0 === e)
                    return h("GRPC error has no .code"),
                    u.UNKNOWN;
                switch (e) {
                case xt.OK:
                    return u.OK;
                case xt.CANCELLED:
                    return u.CANCELLED;
                case xt.UNKNOWN:
                    return u.UNKNOWN;
                case xt.DEADLINE_EXCEEDED:
                    return u.DEADLINE_EXCEEDED;
                case xt.RESOURCE_EXHAUSTED:
                    return u.RESOURCE_EXHAUSTED;
                case xt.INTERNAL:
                    return u.INTERNAL;
                case xt.UNAVAILABLE:
                    return u.UNAVAILABLE;
                case xt.UNAUTHENTICATED:
                    return u.UNAUTHENTICATED;
                case xt.INVALID_ARGUMENT:
                    return u.INVALID_ARGUMENT;
                case xt.NOT_FOUND:
                    return u.NOT_FOUND;
                case xt.ALREADY_EXISTS:
                    return u.ALREADY_EXISTS;
                case xt.PERMISSION_DENIED:
                    return u.PERMISSION_DENIED;
                case xt.FAILED_PRECONDITION:
                    return u.FAILED_PRECONDITION;
                case xt.ABORTED:
                    return u.ABORTED;
                case xt.OUT_OF_RANGE:
                    return u.OUT_OF_RANGE;
                case xt.UNIMPLEMENTED:
                    return u.UNIMPLEMENTED;
                case xt.DATA_LOSS:
                    return u.DATA_LOSS;
                default:
                    return v()
                }
            }
            (Ct = xt || (xt = {}))[Ct.OK = 0] = "OK",
            Ct[Ct.CANCELLED = 1] = "CANCELLED",
            Ct[Ct.UNKNOWN = 2] = "UNKNOWN",
            Ct[Ct.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT",
            Ct[Ct.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED",
            Ct[Ct.NOT_FOUND = 5] = "NOT_FOUND",
            Ct[Ct.ALREADY_EXISTS = 6] = "ALREADY_EXISTS",
            Ct[Ct.PERMISSION_DENIED = 7] = "PERMISSION_DENIED",
            Ct[Ct.UNAUTHENTICATED = 16] = "UNAUTHENTICATED",
            Ct[Ct.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED",
            Ct[Ct.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION",
            Ct[Ct.ABORTED = 10] = "ABORTED",
            Ct[Ct.OUT_OF_RANGE = 11] = "OUT_OF_RANGE",
            Ct[Ct.UNIMPLEMENTED = 12] = "UNIMPLEMENTED",
            Ct[Ct.INTERNAL = 13] = "INTERNAL",
            Ct[Ct.UNAVAILABLE = 14] = "UNAVAILABLE",
            Ct[Ct.DATA_LOSS = 15] = "DATA_LOSS";
            var At = function() {
                function e(e, t) {
                    this.comparator = e,
                    this.root = t || Rt.EMPTY
                }
                return e.prototype.insert = function(t, n) {
                    return new e(this.comparator,this.root.insert(t, n, this.comparator).copy(null, null, Rt.BLACK, null, null))
                }
                ,
                e.prototype.remove = function(t) {
                    return new e(this.comparator,this.root.remove(t, this.comparator).copy(null, null, Rt.BLACK, null, null))
                }
                ,
                e.prototype.get = function(e) {
                    for (var t = this.root; !t.isEmpty(); ) {
                        var n = this.comparator(e, t.key);
                        if (0 === n)
                            return t.value;
                        n < 0 ? t = t.left : n > 0 && (t = t.right)
                    }
                    return null
                }
                ,
                e.prototype.indexOf = function(e) {
                    for (var t = 0, n = this.root; !n.isEmpty(); ) {
                        var r = this.comparator(e, n.key);
                        if (0 === r)
                            return t + n.left.size;
                        r < 0 ? n = n.left : (t += n.left.size + 1,
                        n = n.right)
                    }
                    return -1
                }
                ,
                e.prototype.isEmpty = function() {
                    return this.root.isEmpty()
                }
                ,
                Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this.root.size
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.minKey = function() {
                    return this.root.minKey()
                }
                ,
                e.prototype.maxKey = function() {
                    return this.root.maxKey()
                }
                ,
                e.prototype.inorderTraversal = function(e) {
                    return this.root.inorderTraversal(e)
                }
                ,
                e.prototype.forEach = function(e) {
                    this.inorderTraversal((function(t, n) {
                        return e(t, n),
                        !1
                    }
                    ))
                }
                ,
                e.prototype.toString = function() {
                    var e = [];
                    return this.inorderTraversal((function(t, n) {
                        return e.push(t + ":" + n),
                        !1
                    }
                    )),
                    "{" + e.join(", ") + "}"
                }
                ,
                e.prototype.reverseTraversal = function(e) {
                    return this.root.reverseTraversal(e)
                }
                ,
                e.prototype.getIterator = function() {
                    return new Pt(this.root,null,this.comparator,!1)
                }
                ,
                e.prototype.getIteratorFrom = function(e) {
                    return new Pt(this.root,e,this.comparator,!1)
                }
                ,
                e.prototype.getReverseIterator = function() {
                    return new Pt(this.root,null,this.comparator,!0)
                }
                ,
                e.prototype.getReverseIteratorFrom = function(e) {
                    return new Pt(this.root,e,this.comparator,!0)
                }
                ,
                e
            }()
              , Pt = function() {
                function e(e, t, n, r) {
                    this.isReverse = r,
                    this.nodeStack = [];
                    for (var i = 1; !e.isEmpty(); )
                        if (i = t ? n(e.key, t) : 1,
                        r && (i *= -1),
                        i < 0)
                            e = this.isReverse ? e.left : e.right;
                        else {
                            if (0 === i) {
                                this.nodeStack.push(e);
                                break
                            }
                            this.nodeStack.push(e),
                            e = this.isReverse ? e.right : e.left
                        }
                }
                return e.prototype.getNext = function() {
                    var e = this.nodeStack.pop()
                      , t = {
                        key: e.key,
                        value: e.value
                    };
                    if (this.isReverse)
                        for (e = e.left; !e.isEmpty(); )
                            this.nodeStack.push(e),
                            e = e.right;
                    else
                        for (e = e.right; !e.isEmpty(); )
                            this.nodeStack.push(e),
                            e = e.left;
                    return t
                }
                ,
                e.prototype.hasNext = function() {
                    return this.nodeStack.length > 0
                }
                ,
                e.prototype.peek = function() {
                    if (0 === this.nodeStack.length)
                        return null;
                    var e = this.nodeStack[this.nodeStack.length - 1];
                    return {
                        key: e.key,
                        value: e.value
                    }
                }
                ,
                e
            }()
              , Rt = function() {
                function e(t, n, r, i, o) {
                    this.key = t,
                    this.value = n,
                    this.color = null != r ? r : e.RED,
                    this.left = null != i ? i : e.EMPTY,
                    this.right = null != o ? o : e.EMPTY,
                    this.size = this.left.size + 1 + this.right.size
                }
                return e.prototype.copy = function(t, n, r, i, o) {
                    return new e(null != t ? t : this.key,null != n ? n : this.value,null != r ? r : this.color,null != i ? i : this.left,null != o ? o : this.right)
                }
                ,
                e.prototype.isEmpty = function() {
                    return !1
                }
                ,
                e.prototype.inorderTraversal = function(e) {
                    return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e)
                }
                ,
                e.prototype.reverseTraversal = function(e) {
                    return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
                }
                ,
                e.prototype.min = function() {
                    return this.left.isEmpty() ? this : this.left.min()
                }
                ,
                e.prototype.minKey = function() {
                    return this.min().key
                }
                ,
                e.prototype.maxKey = function() {
                    return this.right.isEmpty() ? this.key : this.right.maxKey()
                }
                ,
                e.prototype.insert = function(e, t, n) {
                    var r = this
                      , i = n(e, r.key);
                    return (r = i < 0 ? r.copy(null, null, null, r.left.insert(e, t, n), null) : 0 === i ? r.copy(null, t, null, null, null) : r.copy(null, null, null, null, r.right.insert(e, t, n))).fixUp()
                }
                ,
                e.prototype.removeMin = function() {
                    if (this.left.isEmpty())
                        return e.EMPTY;
                    var t = this;
                    return t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()),
                    (t = t.copy(null, null, null, t.left.removeMin(), null)).fixUp()
                }
                ,
                e.prototype.remove = function(t, n) {
                    var r, i = this;
                    if (n(t, i.key) < 0)
                        i.left.isEmpty() || i.left.isRed() || i.left.left.isRed() || (i = i.moveRedLeft()),
                        i = i.copy(null, null, null, i.left.remove(t, n), null);
                    else {
                        if (i.left.isRed() && (i = i.rotateRight()),
                        i.right.isEmpty() || i.right.isRed() || i.right.left.isRed() || (i = i.moveRedRight()),
                        0 === n(t, i.key)) {
                            if (i.right.isEmpty())
                                return e.EMPTY;
                            r = i.right.min(),
                            i = i.copy(r.key, r.value, null, null, i.right.removeMin())
                        }
                        i = i.copy(null, null, null, null, i.right.remove(t, n))
                    }
                    return i.fixUp()
                }
                ,
                e.prototype.isRed = function() {
                    return this.color
                }
                ,
                e.prototype.fixUp = function() {
                    var e = this;
                    return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
                    e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
                    e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
                    e
                }
                ,
                e.prototype.moveRedLeft = function() {
                    var e = this.colorFlip();
                    return e.right.left.isRed() && (e = (e = (e = e.copy(null, null, null, null, e.right.rotateRight())).rotateLeft()).colorFlip()),
                    e
                }
                ,
                e.prototype.moveRedRight = function() {
                    var e = this.colorFlip();
                    return e.left.left.isRed() && (e = (e = e.rotateRight()).colorFlip()),
                    e
                }
                ,
                e.prototype.rotateLeft = function() {
                    var t = this.copy(null, null, e.RED, null, this.right.left);
                    return this.right.copy(null, null, this.color, t, null)
                }
                ,
                e.prototype.rotateRight = function() {
                    var t = this.copy(null, null, e.RED, this.left.right, null);
                    return this.left.copy(null, null, this.color, null, t)
                }
                ,
                e.prototype.colorFlip = function() {
                    var e = this.left.copy(null, null, !this.left.color, null, null)
                      , t = this.right.copy(null, null, !this.right.color, null, null);
                    return this.copy(null, null, !this.color, e, t)
                }
                ,
                e.prototype.checkMaxDepth = function() {
                    var e = this.check();
                    return Math.pow(2, e) <= this.size + 1
                }
                ,
                e.prototype.check = function() {
                    if (this.isRed() && this.left.isRed())
                        throw v();
                    if (this.right.isRed())
                        throw v();
                    var e = this.left.check();
                    if (e !== this.right.check())
                        throw v();
                    return e + (this.isRed() ? 0 : 1)
                }
                ,
                e
            }();
            Rt.EMPTY = null,
            Rt.RED = !0,
            Rt.BLACK = !1,
            Rt.EMPTY = new (function() {
                function e() {
                    this.size = 0
                }
                return Object.defineProperty(e.prototype, "key", {
                    get: function() {
                        throw v()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "value", {
                    get: function() {
                        throw v()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "color", {
                    get: function() {
                        throw v()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "left", {
                    get: function() {
                        throw v()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "right", {
                    get: function() {
                        throw v()
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.copy = function(e, t, n, r, i) {
                    return this
                }
                ,
                e.prototype.insert = function(e, t, n) {
                    return new Rt(e,t)
                }
                ,
                e.prototype.remove = function(e, t) {
                    return this
                }
                ,
                e.prototype.isEmpty = function() {
                    return !0
                }
                ,
                e.prototype.inorderTraversal = function(e) {
                    return !1
                }
                ,
                e.prototype.reverseTraversal = function(e) {
                    return !1
                }
                ,
                e.prototype.minKey = function() {
                    return null
                }
                ,
                e.prototype.maxKey = function() {
                    return null
                }
                ,
                e.prototype.isRed = function() {
                    return !1
                }
                ,
                e.prototype.checkMaxDepth = function() {
                    return !0
                }
                ,
                e.prototype.check = function() {
                    return 0
                }
                ,
                e
            }());
            var Mt = function() {
                function e(e) {
                    this.comparator = e,
                    this.data = new At(this.comparator)
                }
                return e.prototype.has = function(e) {
                    return null !== this.data.get(e)
                }
                ,
                e.prototype.first = function() {
                    return this.data.minKey()
                }
                ,
                e.prototype.last = function() {
                    return this.data.maxKey()
                }
                ,
                Object.defineProperty(e.prototype, "size", {
                    get: function() {
                        return this.data.size
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.indexOf = function(e) {
                    return this.data.indexOf(e)
                }
                ,
                e.prototype.forEach = function(e) {
                    this.data.inorderTraversal((function(t, n) {
                        return e(t),
                        !1
                    }
                    ))
                }
                ,
                e.prototype.forEachInRange = function(e, t) {
                    for (var n = this.data.getIteratorFrom(e[0]); n.hasNext(); ) {
                        var r = n.getNext();
                        if (this.comparator(r.key, e[1]) >= 0)
                            return;
                        t(r.key)
                    }
                }
                ,
                e.prototype.forEachWhile = function(e, t) {
                    var n;
                    for (n = void 0 !== t ? this.data.getIteratorFrom(t) : this.data.getIterator(); n.hasNext(); )
                        if (!e(n.getNext().key))
                            return
                }
                ,
                e.prototype.firstAfterOrEqual = function(e) {
                    var t = this.data.getIteratorFrom(e);
                    return t.hasNext() ? t.getNext().key : null
                }
                ,
                e.prototype.getIterator = function() {
                    return new Nt(this.data.getIterator())
                }
                ,
                e.prototype.getIteratorFrom = function(e) {
                    return new Nt(this.data.getIteratorFrom(e))
                }
                ,
                e.prototype.add = function(e) {
                    return this.copy(this.data.remove(e).insert(e, !0))
                }
                ,
                e.prototype.delete = function(e) {
                    return this.has(e) ? this.copy(this.data.remove(e)) : this
                }
                ,
                e.prototype.isEmpty = function() {
                    return this.data.isEmpty()
                }
                ,
                e.prototype.unionWith = function(e) {
                    var t = this;
                    return t.size < e.size && (t = e,
                    e = this),
                    e.forEach((function(e) {
                        t = t.add(e)
                    }
                    )),
                    t
                }
                ,
                e.prototype.isEqual = function(t) {
                    if (!(t instanceof e))
                        return !1;
                    if (this.size !== t.size)
                        return !1;
                    for (var n = this.data.getIterator(), r = t.data.getIterator(); n.hasNext(); ) {
                        var i = n.getNext().key
                          , o = r.getNext().key;
                        if (0 !== this.comparator(i, o))
                            return !1
                    }
                    return !0
                }
                ,
                e.prototype.toArray = function() {
                    var e = [];
                    return this.forEach((function(t) {
                        e.push(t)
                    }
                    )),
                    e
                }
                ,
                e.prototype.toString = function() {
                    var e = [];
                    return this.forEach((function(t) {
                        return e.push(t)
                    }
                    )),
                    "SortedSet(" + e.toString() + ")"
                }
                ,
                e.prototype.copy = function(t) {
                    var n = new e(this.comparator);
                    return n.data = t,
                    n
                }
                ,
                e
            }()
              , Nt = function() {
                function e(e) {
                    this.iter = e
                }
                return e.prototype.getNext = function() {
                    return this.iter.getNext().key
                }
                ,
                e.prototype.hasNext = function() {
                    return this.iter.hasNext()
                }
                ,
                e
            }()
              , Zt = new At(W.comparator);
            function Dt() {
                return Zt
            }
            var jt = new At(W.comparator);
            function Lt() {
                return jt
            }
            var Ft = new At(W.comparator);
            function Ut() {
                return Ft
            }
            var Bt = new Mt(W.comparator);
            function zt() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                for (var n = Bt, r = 0, i = e; r < i.length; r++) {
                    var o = i[r];
                    n = n.add(o)
                }
                return n
            }
            var $t = new Mt(E);
            function qt() {
                return $t
            }
            var Vt = function() {
                function e(e, t, n, r, i) {
                    this.snapshotVersion = e,
                    this.targetChanges = t,
                    this.targetMismatches = n,
                    this.documentUpdates = r,
                    this.resolvedLimboDocuments = i
                }
                return e.createSynthesizedRemoteEventForCurrentChange = function(t, n) {
                    var r = new Map;
                    return r.set(t, Wt.createSynthesizedTargetChangeForCurrentChange(t, n)),
                    new e(k.min(),r,qt(),Dt(),zt())
                }
                ,
                e
            }()
              , Wt = function() {
                function e(e, t, n, r, i) {
                    this.resumeToken = e,
                    this.current = t,
                    this.addedDocuments = n,
                    this.modifiedDocuments = r,
                    this.removedDocuments = i
                }
                return e.createSynthesizedTargetChangeForCurrentChange = function(t, n) {
                    return new e(Z.EMPTY_BYTE_STRING,n,zt(),zt(),zt())
                }
                ,
                e
            }()
              , Ht = function(e, t, n, r) {
                this.v = e,
                this.removedTargetIds = t,
                this.key = n,
                this.P = r
            }
              , Gt = function(e, t) {
                this.targetId = e,
                this.V = t
            }
              , Kt = function(e, t, n, r) {
                void 0 === n && (n = Z.EMPTY_BYTE_STRING),
                void 0 === r && (r = null),
                this.state = e,
                this.targetIds = t,
                this.resumeToken = n,
                this.cause = r
            }
              , Qt = function() {
                function e() {
                    this.S = 0,
                    this.D = Jt(),
                    this.C = Z.EMPTY_BYTE_STRING,
                    this.N = !1,
                    this.k = !0
                }
                return Object.defineProperty(e.prototype, "current", {
                    get: function() {
                        return this.N
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "resumeToken", {
                    get: function() {
                        return this.C
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "F", {
                    get: function() {
                        return 0 !== this.S
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "$", {
                    get: function() {
                        return this.k
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.O = function(e) {
                    e.approximateByteSize() > 0 && (this.k = !0,
                    this.C = e)
                }
                ,
                e.prototype.M = function() {
                    var e = zt()
                      , t = zt()
                      , n = zt();
                    return this.D.forEach((function(r, i) {
                        switch (i) {
                        case 0:
                            e = e.add(r);
                            break;
                        case 2:
                            t = t.add(r);
                            break;
                        case 1:
                            n = n.add(r);
                            break;
                        default:
                            v()
                        }
                    }
                    )),
                    new Wt(this.C,this.N,e,t,n)
                }
                ,
                e.prototype.L = function() {
                    this.k = !1,
                    this.D = Jt()
                }
                ,
                e.prototype.B = function(e, t) {
                    this.k = !0,
                    this.D = this.D.insert(e, t)
                }
                ,
                e.prototype.q = function(e) {
                    this.k = !0,
                    this.D = this.D.remove(e)
                }
                ,
                e.prototype.U = function() {
                    this.S += 1
                }
                ,
                e.prototype.K = function() {
                    this.S -= 1
                }
                ,
                e.prototype.j = function() {
                    this.k = !0,
                    this.N = !0
                }
                ,
                e
            }()
              , Yt = function() {
                function e(e) {
                    this.W = e,
                    this.G = new Map,
                    this.H = Dt(),
                    this.J = Xt(),
                    this.Y = new Mt(E)
                }
                return e.prototype.X = function(e) {
                    for (var t = 0, n = e.v; t < n.length; t++) {
                        var r = n[t];
                        e.P && e.P.isFoundDocument() ? this.Z(r, e.P) : this.tt(r, e.key, e.P)
                    }
                    for (var i = 0, o = e.removedTargetIds; i < o.length; i++)
                        r = o[i],
                        this.tt(r, e.key, e.P)
                }
                ,
                e.prototype.et = function(e) {
                    var t = this;
                    this.forEachTarget(e, (function(n) {
                        var r = t.nt(n);
                        switch (e.state) {
                        case 0:
                            t.st(n) && r.O(e.resumeToken);
                            break;
                        case 1:
                            r.K(),
                            r.F || r.L(),
                            r.O(e.resumeToken);
                            break;
                        case 2:
                            r.K(),
                            r.F || t.removeTarget(n);
                            break;
                        case 3:
                            t.st(n) && (r.j(),
                            r.O(e.resumeToken));
                            break;
                        case 4:
                            t.st(n) && (t.it(n),
                            r.O(e.resumeToken));
                            break;
                        default:
                            v()
                        }
                    }
                    ))
                }
                ,
                e.prototype.forEachTarget = function(e, t) {
                    var n = this;
                    e.targetIds.length > 0 ? e.targetIds.forEach(t) : this.G.forEach((function(e, r) {
                        n.st(r) && t(r)
                    }
                    ))
                }
                ,
                e.prototype.rt = function(e) {
                    var t = e.targetId
                      , n = e.V.count
                      , r = this.ot(t);
                    if (r) {
                        var i = r.target;
                        if (he(i))
                            if (0 === n) {
                                var o = new W(i.path);
                                this.tt(t, o, ue.newNoDocument(o, k.min()))
                            } else
                                y(1 === n);
                        else
                            this.ct(t) !== n && (this.it(t),
                            this.Y = this.Y.add(t))
                    }
                }
                ,
                e.prototype.ut = function(e) {
                    var t = this
                      , n = new Map;
                    this.G.forEach((function(r, i) {
                        var o = t.ot(i);
                        if (o) {
                            if (r.current && he(o.target)) {
                                var a = new W(o.target.path);
                                null !== t.H.get(a) || t.at(i, a) || t.tt(i, a, ue.newNoDocument(a, e))
                            }
                            r.$ && (n.set(i, r.M()),
                            r.L())
                        }
                    }
                    ));
                    var r = zt();
                    this.J.forEach((function(e, n) {
                        var i = !0;
                        n.forEachWhile((function(e) {
                            var n = t.ot(e);
                            return !n || 2 === n.purpose || (i = !1,
                            !1)
                        }
                        )),
                        i && (r = r.add(e))
                    }
                    ));
                    var i = new Vt(e,n,this.Y,this.H,r);
                    return this.H = Dt(),
                    this.J = Xt(),
                    this.Y = new Mt(E),
                    i
                }
                ,
                e.prototype.Z = function(e, t) {
                    if (this.st(e)) {
                        var n = this.at(e, t.key) ? 2 : 0;
                        this.nt(e).B(t.key, n),
                        this.H = this.H.insert(t.key, t),
                        this.J = this.J.insert(t.key, this.ht(t.key).add(e))
                    }
                }
                ,
                e.prototype.tt = function(e, t, n) {
                    if (this.st(e)) {
                        var r = this.nt(e);
                        this.at(e, t) ? r.B(t, 1) : r.q(t),
                        this.J = this.J.insert(t, this.ht(t).delete(e)),
                        n && (this.H = this.H.insert(t, n))
                    }
                }
                ,
                e.prototype.removeTarget = function(e) {
                    this.G.delete(e)
                }
                ,
                e.prototype.ct = function(e) {
                    var t = this.nt(e).M();
                    return this.W.getRemoteKeysForTarget(e).size + t.addedDocuments.size - t.removedDocuments.size
                }
                ,
                e.prototype.U = function(e) {
                    this.nt(e).U()
                }
                ,
                e.prototype.nt = function(e) {
                    var t = this.G.get(e);
                    return t || (t = new Qt,
                    this.G.set(e, t)),
                    t
                }
                ,
                e.prototype.ht = function(e) {
                    var t = this.J.get(e);
                    return t || (t = new Mt(E),
                    this.J = this.J.insert(e, t)),
                    t
                }
                ,
                e.prototype.st = function(e) {
                    var t = null !== this.ot(e);
                    return t || p("WatchChangeAggregator", "Detected inactive target", e),
                    t
                }
                ,
                e.prototype.ot = function(e) {
                    var t = this.G.get(e);
                    return t && t.F ? null : this.W.lt(e)
                }
                ,
                e.prototype.it = function(e) {
                    var t = this;
                    this.G.set(e, new Qt),
                    this.W.getRemoteKeysForTarget(e).forEach((function(n) {
                        t.tt(e, n, null)
                    }
                    ))
                }
                ,
                e.prototype.at = function(e, t) {
                    return this.W.getRemoteKeysForTarget(e).has(t)
                }
                ,
                e
            }();
            function Xt() {
                return new At(W.comparator)
            }
            function Jt() {
                return new At(W.comparator)
            }
            var en = {
                asc: "ASCENDING",
                desc: "DESCENDING"
            }
              , tn = {
                "<": "LESS_THAN",
                "<=": "LESS_THAN_OR_EQUAL",
                ">": "GREATER_THAN",
                ">=": "GREATER_THAN_OR_EQUAL",
                "==": "EQUAL",
                "!=": "NOT_EQUAL",
                "array-contains": "ARRAY_CONTAINS",
                in: "IN",
                "not-in": "NOT_IN",
                "array-contains-any": "ARRAY_CONTAINS_ANY"
            }
              , nn = function(e, t) {
                this.databaseId = e,
                this.I = t
            };
            function rn(e, t) {
                return e.I ? new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + t.nanoseconds).slice(-9) + "Z" : {
                    seconds: "" + t.seconds,
                    nanos: t.nanoseconds
                }
            }
            function on(e, t) {
                return e.I ? t.toBase64() : t.toUint8Array()
            }
            function an(e, t) {
                return rn(e, t.toTimestamp())
            }
            function sn(e) {
                return y(!!e),
                k.fromTimestamp(function(e) {
                    var t = j(e);
                    return new S(t.seconds,t.nanos)
                }(e))
            }
            function ln(e, t) {
                return function(e) {
                    return new P(["projects", e.projectId, "databases", e.database])
                }(e).child("documents").child(t).canonicalString()
            }
            function un(e) {
                var t = P.fromString(e);
                return y(Mn(t)),
                t
            }
            function cn(e, t) {
                return ln(e.databaseId, t.path)
            }
            function dn(e, t) {
                var n = un(t);
                if (n.get(1) !== e.databaseId.projectId)
                    throw new c(u.INVALID_ARGUMENT,"Tried to deserialize key from different project: " + n.get(1) + " vs " + e.databaseId.projectId);
                if (n.get(3) !== e.databaseId.database)
                    throw new c(u.INVALID_ARGUMENT,"Tried to deserialize key from different database: " + n.get(3) + " vs " + e.databaseId.database);
                return new W(mn(n))
            }
            function fn(e, t) {
                return ln(e.databaseId, t)
            }
            function pn(e) {
                var t = un(e);
                return 4 === t.length ? P.emptyPath() : mn(t)
            }
            function hn(e) {
                return new P(["projects", e.databaseId.projectId, "databases", e.databaseId.database]).canonicalString()
            }
            function mn(e) {
                return y(e.length > 4 && "documents" === e.get(4)),
                e.popFirst(5)
            }
            function gn(e, t, n) {
                return {
                    name: cn(e, t),
                    fields: n.value.mapValue.fields
                }
            }
            function vn(e, t, n) {
                var r = dn(e, t.name)
                  , i = sn(t.updateTime)
                  , o = new se({
                    mapValue: {
                        fields: t.fields
                    }
                })
                  , a = ue.newFoundDocument(r, i, o);
                return n && a.setHasCommittedMutations(),
                n ? a.setHasCommittedMutations() : a
            }
            function yn(e, t) {
                var n;
                if (t instanceof yt)
                    n = {
                        update: gn(e, t.key, t.value)
                    };
                else if (t instanceof St)
                    n = {
                        delete: cn(e, t.key)
                    };
                else if (t instanceof bt)
                    n = {
                        update: gn(e, t.key, t.data),
                        updateMask: Rn(t.fieldMask)
                    };
                else {
                    if (!(t instanceof kt))
                        return v();
                    n = {
                        verify: cn(e, t.key)
                    }
                }
                return t.fieldTransforms.length > 0 && (n.updateTransforms = t.fieldTransforms.map((function(e) {
                    return function(e, t) {
                        var n = t.transform;
                        if (n instanceof et)
                            return {
                                fieldPath: t.field.canonicalString(),
                                setToServerValue: "REQUEST_TIME"
                            };
                        if (n instanceof tt)
                            return {
                                fieldPath: t.field.canonicalString(),
                                appendMissingElements: {
                                    values: n.elements
                                }
                            };
                        if (n instanceof rt)
                            return {
                                fieldPath: t.field.canonicalString(),
                                removeAllFromArray: {
                                    values: n.elements
                                }
                            };
                        if (n instanceof ot)
                            return {
                                fieldPath: t.field.canonicalString(),
                                increment: n.A
                            };
                        throw v()
                    }(0, e)
                }
                ))),
                t.precondition.isNone || (n.currentDocument = function(e, t) {
                    return void 0 !== t.updateTime ? {
                        updateTime: an(e, t.updateTime)
                    } : void 0 !== t.exists ? {
                        exists: t.exists
                    } : v()
                }(e, t.precondition)),
                n
            }
            function bn(e, t) {
                var n = t.currentDocument ? function(e) {
                    return void 0 !== e.updateTime ? ct.updateTime(sn(e.updateTime)) : void 0 !== e.exists ? ct.exists(e.exists) : ct.none()
                }(t.currentDocument) : ct.none()
                  , r = t.updateTransforms ? t.updateTransforms.map((function(t) {
                    return function(e, t) {
                        var n = null;
                        if ("setToServerValue"in t)
                            y("REQUEST_TIME" === t.setToServerValue),
                            n = new et;
                        else if ("appendMissingElements"in t) {
                            var r = t.appendMissingElements.values || [];
                            n = new tt(r)
                        } else if ("removeAllFromArray"in t) {
                            var i = t.removeAllFromArray.values || [];
                            n = new rt(i)
                        } else
                            "increment"in t ? n = new ot(e,t.increment) : v();
                        var o = M.fromServerFormat(t.fieldPath);
                        return new lt(o,n)
                    }(e, t)
                }
                )) : [];
                if (t.update) {
                    t.update.name;
                    var i = dn(e, t.update.name)
                      , o = new se({
                        mapValue: {
                            fields: t.update.fields
                        }
                    });
                    if (t.updateMask) {
                        var a = function(e) {
                            var t = e.fieldPaths || [];
                            return new N(t.map((function(e) {
                                return M.fromServerFormat(e)
                            }
                            )))
                        }(t.updateMask);
                        return new bt(i,o,a,n,r)
                    }
                    return new yt(i,o,n,r)
                }
                if (t.delete) {
                    var s = dn(e, t.delete);
                    return new St(s,n)
                }
                if (t.verify) {
                    var l = dn(e, t.verify);
                    return new kt(l,n)
                }
                return v()
            }
            function wn(e, t) {
                return {
                    documents: [fn(e, t.path)]
                }
            }
            function _n(e, t) {
                var n = {
                    structuredQuery: {}
                }
                  , r = t.path;
                null !== t.collectionGroup ? (n.parent = fn(e, r),
                n.structuredQuery.from = [{
                    collectionId: t.collectionGroup,
                    allDescendants: !0
                }]) : (n.parent = fn(e, r.popLast()),
                n.structuredQuery.from = [{
                    collectionId: r.lastSegment()
                }]);
                var i = function(e) {
                    if (0 !== e.length) {
                        var t = e.map((function(e) {
                            return function(e) {
                                if ("==" === e.op) {
                                    if (ie(e.value))
                                        return {
                                            unaryFilter: {
                                                field: On(e.field),
                                                op: "IS_NAN"
                                            }
                                        };
                                    if (re(e.value))
                                        return {
                                            unaryFilter: {
                                                field: On(e.field),
                                                op: "IS_NULL"
                                            }
                                        }
                                } else if ("!=" === e.op) {
                                    if (ie(e.value))
                                        return {
                                            unaryFilter: {
                                                field: On(e.field),
                                                op: "IS_NOT_NAN"
                                            }
                                        };
                                    if (re(e.value))
                                        return {
                                            unaryFilter: {
                                                field: On(e.field),
                                                op: "IS_NOT_NULL"
                                            }
                                        }
                                }
                                return {
                                    fieldFilter: {
                                        field: On(e.field),
                                        op: Tn(e.op),
                                        value: e.value
                                    }
                                }
                            }(e)
                        }
                        ));
                        return 1 === t.length ? t[0] : {
                            compositeFilter: {
                                op: "AND",
                                filters: t
                            }
                        }
                    }
                }(t.filters);
                i && (n.structuredQuery.where = i);
                var o = function(e) {
                    if (0 !== e.length)
                        return e.map((function(e) {
                            return function(e) {
                                return {
                                    field: On(e.field),
                                    direction: kn(e.dir)
                                }
                            }(e)
                        }
                        ))
                }(t.orderBy);
                o && (n.structuredQuery.orderBy = o);
                var a = function(e, t) {
                    return e.I || $(t) ? t : {
                        value: t
                    }
                }(e, t.limit);
                return null !== a && (n.structuredQuery.limit = a),
                t.startAt && (n.structuredQuery.startAt = Cn(t.startAt)),
                t.endAt && (n.structuredQuery.endAt = Cn(t.endAt)),
                n
            }
            function En(e) {
                var t = pn(e.parent)
                  , n = e.structuredQuery
                  , r = n.from ? n.from.length : 0
                  , i = null;
                if (r > 0) {
                    y(1 === r);
                    var o = n.from[0];
                    o.allDescendants ? i = o.collectionId : t = t.child(o.collectionId)
                }
                var a = [];
                n.where && (a = xn(n.where));
                var s = [];
                n.orderBy && (s = n.orderBy.map((function(e) {
                    return function(e) {
                        return new ke(In(e.field),function(e) {
                            switch (e) {
                            case "ASCENDING":
                                return "asc";
                            case "DESCENDING":
                                return "desc";
                            default:
                                return
                            }
                        }(e.direction))
                    }(e)
                }
                )));
                var l = null;
                n.limit && (l = function(e) {
                    var t;
                    return $(t = "object" == typeof e ? e.value : e) ? null : t
                }(n.limit));
                var u = null;
                n.startAt && (u = Sn(n.startAt));
                var c = null;
                return n.endAt && (c = Sn(n.endAt)),
                Pe(t, i, s, a, l, "F", u, c)
            }
            function xn(e) {
                return e ? void 0 !== e.unaryFilter ? [Pn(e)] : void 0 !== e.fieldFilter ? [An(e)] : void 0 !== e.compositeFilter ? e.compositeFilter.filters.map((function(e) {
                    return xn(e)
                }
                )).reduce((function(e, t) {
                    return e.concat(t)
                }
                )) : v() : []
            }
            function Cn(e) {
                return {
                    before: e.before,
                    values: e.position
                }
            }
            function Sn(e) {
                var t = !!e.before
                  , n = e.values || [];
                return new Ce(n,t)
            }
            function kn(e) {
                return en[e]
            }
            function Tn(e) {
                return tn[e]
            }
            function On(e) {
                return {
                    fieldPath: e.canonicalString()
                }
            }
            function In(e) {
                return M.fromServerFormat(e.fieldPath)
            }
            function An(e) {
                return me.create(In(e.fieldFilter.field), function(e) {
                    switch (e) {
                    case "EQUAL":
                        return "==";
                    case "NOT_EQUAL":
                        return "!=";
                    case "GREATER_THAN":
                        return ">";
                    case "GREATER_THAN_OR_EQUAL":
                        return ">=";
                    case "LESS_THAN":
                        return "<";
                    case "LESS_THAN_OR_EQUAL":
                        return "<=";
                    case "ARRAY_CONTAINS":
                        return "array-contains";
                    case "IN":
                        return "in";
                    case "NOT_IN":
                        return "not-in";
                    case "ARRAY_CONTAINS_ANY":
                        return "array-contains-any";
                    default:
                        return v()
                    }
                }(e.fieldFilter.op), e.fieldFilter.value)
            }
            function Pn(e) {
                switch (e.unaryFilter.op) {
                case "IS_NAN":
                    var t = In(e.unaryFilter.field);
                    return me.create(t, "==", {
                        doubleValue: NaN
                    });
                case "IS_NULL":
                    var n = In(e.unaryFilter.field);
                    return me.create(n, "==", {
                        nullValue: "NULL_VALUE"
                    });
                case "IS_NOT_NAN":
                    var r = In(e.unaryFilter.field);
                    return me.create(r, "!=", {
                        doubleValue: NaN
                    });
                case "IS_NOT_NULL":
                    var i = In(e.unaryFilter.field);
                    return me.create(i, "!=", {
                        nullValue: "NULL_VALUE"
                    });
                default:
                    return v()
                }
            }
            function Rn(e) {
                var t = [];
                return e.fields.forEach((function(e) {
                    return t.push(e.canonicalString())
                }
                )),
                {
                    fieldPaths: t
                }
            }
            function Mn(e) {
                return e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2)
            }
            function Nn(e) {
                for (var t = "", n = 0; n < e.length; n++)
                    t.length > 0 && (t = Dn(t)),
                    t = Zn(e.get(n), t);
                return Dn(t)
            }
            function Zn(e, t) {
                for (var n = t, r = e.length, i = 0; i < r; i++) {
                    var o = e.charAt(i);
                    switch (o) {
                    case "\0":
                        n += "\x01\x10";
                        break;
                    case "\x01":
                        n += "\x01\x11";
                        break;
                    default:
                        n += o
                    }
                }
                return n
            }
            function Dn(e) {
                return e + "\x01\x01"
            }
            function jn(e) {
                var t = e.length;
                if (y(t >= 2),
                2 === t)
                    return y("\x01" === e.charAt(0) && "\x01" === e.charAt(1)),
                    P.emptyPath();
                for (var n = t - 2, r = [], i = "", o = 0; o < t; ) {
                    var a = e.indexOf("\x01", o);
                    switch ((a < 0 || a > n) && v(),
                    e.charAt(a + 1)) {
                    case "\x01":
                        var s = e.substring(o, a)
                          , l = void 0;
                        0 === i.length ? l = s : (l = i += s,
                        i = ""),
                        r.push(l);
                        break;
                    case "\x10":
                        i += e.substring(o, a),
                        i += "\0";
                        break;
                    case "\x11":
                        i += e.substring(o, a + 1);
                        break;
                    default:
                        v()
                    }
                    o = a + 2
                }
                return new P(r)
            }
            var Ln = function(e, t) {
                this.seconds = e,
                this.nanoseconds = t
            }
              , Fn = function(e, t, n) {
                this.ownerId = e,
                this.allowTabSynchronization = t,
                this.leaseTimestampMs = n
            };
            Fn.store = "owner",
            Fn.key = "owner";
            var Un = function(e, t, n) {
                this.userId = e,
                this.lastAcknowledgedBatchId = t,
                this.lastStreamToken = n
            };
            Un.store = "mutationQueues",
            Un.keyPath = "userId";
            var Bn = function(e, t, n, r, i) {
                this.userId = e,
                this.batchId = t,
                this.localWriteTimeMs = n,
                this.baseMutations = r,
                this.mutations = i
            };
            Bn.store = "mutations",
            Bn.keyPath = "batchId",
            Bn.userMutationsIndex = "userMutationsIndex",
            Bn.userMutationsKeyPath = ["userId", "batchId"];
            var zn = function() {
                function e() {}
                return e.prefixForUser = function(e) {
                    return [e]
                }
                ,
                e.prefixForPath = function(e, t) {
                    return [e, Nn(t)]
                }
                ,
                e.key = function(e, t, n) {
                    return [e, Nn(t), n]
                }
                ,
                e
            }();
            zn.store = "documentMutations",
            zn.PLACEHOLDER = new zn;
            var $n = function(e, t) {
                this.path = e,
                this.readTime = t
            }
              , qn = function(e, t) {
                this.path = e,
                this.version = t
            }
              , Vn = function(e, t, n, r, i, o) {
                this.unknownDocument = e,
                this.noDocument = t,
                this.document = n,
                this.hasCommittedMutations = r,
                this.readTime = i,
                this.parentPath = o
            };
            Vn.store = "remoteDocuments",
            Vn.readTimeIndex = "readTimeIndex",
            Vn.readTimeIndexPath = "readTime",
            Vn.collectionReadTimeIndex = "collectionReadTimeIndex",
            Vn.collectionReadTimeIndexPath = ["parentPath", "readTime"];
            var Wn = function(e) {
                this.byteSize = e
            };
            Wn.store = "remoteDocumentGlobal",
            Wn.key = "remoteDocumentGlobalKey";
            var Hn = function(e, t, n, r, i, o, a) {
                this.targetId = e,
                this.canonicalId = t,
                this.readTime = n,
                this.resumeToken = r,
                this.lastListenSequenceNumber = i,
                this.lastLimboFreeSnapshotVersion = o,
                this.query = a
            };
            Hn.store = "targets",
            Hn.keyPath = "targetId",
            Hn.queryTargetsIndexName = "queryTargetsIndex",
            Hn.queryTargetsKeyPath = ["canonicalId", "targetId"];
            var Gn = function(e, t, n) {
                this.targetId = e,
                this.path = t,
                this.sequenceNumber = n
            };
            Gn.store = "targetDocuments",
            Gn.keyPath = ["targetId", "path"],
            Gn.documentTargetsIndex = "documentTargetsIndex",
            Gn.documentTargetsKeyPath = ["path", "targetId"];
            var Kn = function(e, t, n, r) {
                this.highestTargetId = e,
                this.highestListenSequenceNumber = t,
                this.lastRemoteSnapshotVersion = n,
                this.targetCount = r
            };
            Kn.key = "targetGlobalKey",
            Kn.store = "targetGlobal";
            var Qn = function(e, t) {
                this.collectionId = e,
                this.parent = t
            };
            Qn.store = "collectionParents",
            Qn.keyPath = ["collectionId", "parent"];
            var Yn = function(e, t, n, r) {
                this.clientId = e,
                this.updateTimeMs = t,
                this.networkEnabled = n,
                this.inForeground = r
            };
            Yn.store = "clientMetadata",
            Yn.keyPath = "clientId";
            var Xn = function(e, t, n) {
                this.bundleId = e,
                this.createTime = t,
                this.version = n
            };
            Xn.store = "bundles",
            Xn.keyPath = "bundleId";
            var Jn = function(e, t, n) {
                this.name = e,
                this.readTime = t,
                this.bundledQuery = n
            };
            Jn.store = "namedQueries",
            Jn.keyPath = "name";
            var er = (0,
            r.__spreadArray)((0,
            r.__spreadArray)([], (0,
            r.__spreadArray)((0,
            r.__spreadArray)([], (0,
            r.__spreadArray)((0,
            r.__spreadArray)([], (0,
            r.__spreadArray)((0,
            r.__spreadArray)([], [Un.store, Bn.store, zn.store, Vn.store, Hn.store, Fn.store, Kn.store, Gn.store]), [Yn.store])), [Wn.store])), [Qn.store])), [Xn.store, Jn.store])
              , tr = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."
              , nr = function() {
                function e() {
                    this.onCommittedListeners = []
                }
                return e.prototype.addOnCommittedListener = function(e) {
                    this.onCommittedListeners.push(e)
                }
                ,
                e.prototype.raiseOnCommittedEvent = function() {
                    this.onCommittedListeners.forEach((function(e) {
                        return e()
                    }
                    ))
                }
                ,
                e
            }()
              , rr = function() {
                var e = this;
                this.promise = new Promise((function(t, n) {
                    e.resolve = t,
                    e.reject = n
                }
                ))
            }
              , ir = function() {
                function e(e) {
                    var t = this;
                    this.nextCallback = null,
                    this.catchCallback = null,
                    this.result = void 0,
                    this.error = void 0,
                    this.isDone = !1,
                    this.callbackAttached = !1,
                    e((function(e) {
                        t.isDone = !0,
                        t.result = e,
                        t.nextCallback && t.nextCallback(e)
                    }
                    ), (function(e) {
                        t.isDone = !0,
                        t.error = e,
                        t.catchCallback && t.catchCallback(e)
                    }
                    ))
                }
                return e.prototype.catch = function(e) {
                    return this.next(void 0, e)
                }
                ,
                e.prototype.next = function(t, n) {
                    var r = this;
                    return this.callbackAttached && v(),
                    this.callbackAttached = !0,
                    this.isDone ? this.error ? this.wrapFailure(n, this.error) : this.wrapSuccess(t, this.result) : new e((function(e, i) {
                        r.nextCallback = function(n) {
                            r.wrapSuccess(t, n).next(e, i)
                        }
                        ,
                        r.catchCallback = function(t) {
                            r.wrapFailure(n, t).next(e, i)
                        }
                    }
                    ))
                }
                ,
                e.prototype.toPromise = function() {
                    var e = this;
                    return new Promise((function(t, n) {
                        e.next(t, n)
                    }
                    ))
                }
                ,
                e.prototype.wrapUserFunction = function(t) {
                    try {
                        var n = t();
                        return n instanceof e ? n : e.resolve(n)
                    } catch (t) {
                        return e.reject(t)
                    }
                }
                ,
                e.prototype.wrapSuccess = function(t, n) {
                    return t ? this.wrapUserFunction((function() {
                        return t(n)
                    }
                    )) : e.resolve(n)
                }
                ,
                e.prototype.wrapFailure = function(t, n) {
                    return t ? this.wrapUserFunction((function() {
                        return t(n)
                    }
                    )) : e.reject(n)
                }
                ,
                e.resolve = function(t) {
                    return new e((function(e, n) {
                        e(t)
                    }
                    ))
                }
                ,
                e.reject = function(t) {
                    return new e((function(e, n) {
                        n(t)
                    }
                    ))
                }
                ,
                e.waitFor = function(t) {
                    return new e((function(e, n) {
                        var r = 0
                          , i = 0
                          , o = !1;
                        t.forEach((function(t) {
                            ++r,
                            t.next((function() {
                                ++i,
                                o && i === r && e()
                            }
                            ), (function(e) {
                                return n(e)
                            }
                            ))
                        }
                        )),
                        o = !0,
                        i === r && e()
                    }
                    ))
                }
                ,
                e.or = function(t) {
                    for (var n = e.resolve(!1), r = function(t) {
                        n = n.next((function(n) {
                            return n ? e.resolve(n) : t()
                        }
                        ))
                    }, i = 0, o = t; i < o.length; i++)
                        r(o[i]);
                    return n
                }
                ,
                e.forEach = function(e, t) {
                    var n = this
                      , r = [];
                    return e.forEach((function(e, i) {
                        r.push(t.call(n, e, i))
                    }
                    )),
                    this.waitFor(r)
                }
                ,
                e
            }()
              , or = function() {
                function e(e, t) {
                    var n = this;
                    this.action = e,
                    this.transaction = t,
                    this.aborted = !1,
                    this.ft = new rr,
                    this.transaction.oncomplete = function() {
                        n.ft.resolve()
                    }
                    ,
                    this.transaction.onabort = function() {
                        t.error ? n.ft.reject(new lr(e,t.error)) : n.ft.resolve()
                    }
                    ,
                    this.transaction.onerror = function(t) {
                        var r = pr(t.target.error);
                        n.ft.reject(new lr(e,r))
                    }
                }
                return e.open = function(t, n, r, i) {
                    try {
                        return new e(n,t.transaction(i, r))
                    } catch (t) {
                        throw new lr(n,t)
                    }
                }
                ,
                Object.defineProperty(e.prototype, "dt", {
                    get: function() {
                        return this.ft.promise
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.abort = function(e) {
                    e && this.ft.reject(e),
                    this.aborted || (p("SimpleDb", "Aborting transaction:", e ? e.message : "Client-initiated abort"),
                    this.aborted = !0,
                    this.transaction.abort())
                }
                ,
                e.prototype.store = function(e) {
                    var t = this.transaction.objectStore(e);
                    return new cr(t)
                }
                ,
                e
            }()
              , ar = function() {
                function e(t, n, r) {
                    this.name = t,
                    this.version = n,
                    this.wt = r,
                    12.2 === e._t((0,
                    i.getUA)()) && h("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
                }
                return e.delete = function(e) {
                    return p("SimpleDb", "Removing database:", e),
                    dr(window.indexedDB.deleteDatabase(e)).toPromise()
                }
                ,
                e.yt = function() {
                    if ("undefined" == typeof indexedDB)
                        return !1;
                    if (e.gt())
                        return !0;
                    var t = (0,
                    i.getUA)()
                      , n = e._t(t)
                      , r = 0 < n && n < 10
                      , o = e.Et(t)
                      , a = 0 < o && o < 4.5;
                    return !(t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0 || r || a)
                }
                ,
                e.gt = function() {
                    var e;
                    return void 0 !== s && "YES" === (null === (e = s.env) || void 0 === e ? void 0 : e.Tt)
                }
                ,
                e.It = function(e, t) {
                    return e.store(t)
                }
                ,
                e._t = function(e) {
                    var t = e.match(/i(?:phone|pad|pod) os ([\d_]+)/i)
                      , n = t ? t[1].split("_").slice(0, 2).join(".") : "-1";
                    return Number(n)
                }
                ,
                e.Et = function(e) {
                    var t = e.match(/Android ([\d.]+)/i)
                      , n = t ? t[1].split(".").slice(0, 2).join(".") : "-1";
                    return Number(n)
                }
                ,
                e.prototype.At = function(e) {
                    return (0,
                    r.__awaiter)(this, void 0, void 0, (function() {
                        var t, n = this;
                        return (0,
                        r.__generator)(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return this.db ? [3, 2] : (p("SimpleDb", "Opening database:", this.name),
                                t = this,
                                [4, new Promise((function(t, r) {
                                    var i = indexedDB.open(n.name, n.version);
                                    i.onsuccess = function(e) {
                                        var n = e.target.result;
                                        t(n)
                                    }
                                    ,
                                    i.onblocked = function() {
                                        r(new lr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))
                                    }
                                    ,
                                    i.onerror = function(t) {
                                        var n = t.target.error;
                                        "VersionError" === n.name ? r(new c(u.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : r(new lr(e,n))
                                    }
                                    ,
                                    i.onupgradeneeded = function(e) {
                                        p("SimpleDb", 'Database "' + n.name + '" requires upgrade from version:', e.oldVersion);
                                        var t = e.target.result;
                                        n.wt.Rt(t, i.transaction, e.oldVersion, n.version).next((function() {
                                            p("SimpleDb", "Database upgrade to version " + n.version + " complete")
                                        }
                                        ))
                                    }
                                }
                                ))]);
                            case 1:
                                t.db = r.sent(),
                                r.label = 2;
                            case 2:
                                return [2, (this.bt && (this.db.onversionchange = function(e) {
                                    return n.bt(e)
                                }
                                ),
                                this.db)]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.vt = function(e) {
                    this.bt = e,
                    this.db && (this.db.onversionchange = function(t) {
                        return e(t)
                    }
                    )
                }
                ,
                e.prototype.runTransaction = function(e, t, n, i) {
                    return (0,
                    r.__awaiter)(this, void 0, void 0, (function() {
                        var o, a, s, l, u;
                        return (0,
                        r.__generator)(this, (function(c) {
                            switch (c.label) {
                            case 0:
                                o = "readonly" === t,
                                a = 0,
                                s = function() {
                                    var t, s, u, c, d;
                                    return (0,
                                    r.__generator)(this, (function(r) {
                                        switch (r.label) {
                                        case 0:
                                            ++a,
                                            r.label = 1;
                                        case 1:
                                            return r.trys.push([1, 4, , 5]),
                                            [4, l.At(e)];
                                        case 2:
                                            return l.db = r.sent(),
                                            t = or.open(l.db, e, o ? "readonly" : "readwrite", n),
                                            s = i(t).catch((function(e) {
                                                return t.abort(e),
                                                ir.reject(e)
                                            }
                                            )).toPromise(),
                                            u = {},
                                            s.catch((function() {}
                                            )),
                                            [4, t.dt];
                                        case 3:
                                            return [2, (u.value = (r.sent(),
                                            s),
                                            u)];
                                        case 4:
                                            return c = r.sent(),
                                            d = "FirebaseError" !== c.name && a < 3,
                                            p("SimpleDb", "Transaction failed with error:", c.message, "Retrying:", d),
                                            l.close(),
                                            d ? [3, 5] : [2, {
                                                value: Promise.reject(c)
                                            }];
                                        case 5:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ,
                                l = this,
                                c.label = 1;
                            case 1:
                                return [5, s()];
                            case 2:
                                if ("object" == typeof (u = c.sent()))
                                    return [2, u.value];
                                c.label = 3;
                            case 3:
                                return [3, 1];
                            case 4:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.close = function() {
                    this.db && this.db.close(),
                    this.db = void 0
                }
                ,
                e
            }()
              , sr = function() {
                function e(e) {
                    this.Pt = e,
                    this.Vt = !1,
                    this.St = null
                }
                return Object.defineProperty(e.prototype, "isDone", {
                    get: function() {
                        return this.Vt
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "Dt", {
                    get: function() {
                        return this.St
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "cursor", {
                    set: function(e) {
                        this.Pt = e
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.done = function() {
                    this.Vt = !0
                }
                ,
                e.prototype.Ct = function(e) {
                    this.St = e
                }
                ,
                e.prototype.delete = function() {
                    return dr(this.Pt.delete())
                }
                ,
                e
            }()
              , lr = function(e) {
                function t(t, n) {
                    var r = this;
                    return (r = e.call(this, u.UNAVAILABLE, "IndexedDB transaction '" + t + "' failed: " + n) || this).name = "IndexedDbTransactionError",
                    r
                }
                return (0,
                r.__extends)(t, e),
                t
            }(c);
            function ur(e) {
                return "IndexedDbTransactionError" === e.name
            }
            var cr = function() {
                function e(e) {
                    this.store = e
                }
                return e.prototype.put = function(e, t) {
                    var n;
                    return void 0 !== t ? (p("SimpleDb", "PUT", this.store.name, e, t),
                    n = this.store.put(t, e)) : (p("SimpleDb", "PUT", this.store.name, "<auto-key>", e),
                    n = this.store.put(e)),
                    dr(n)
                }
                ,
                e.prototype.add = function(e) {
                    return p("SimpleDb", "ADD", this.store.name, e, e),
                    dr(this.store.add(e))
                }
                ,
                e.prototype.get = function(e) {
                    var t = this;
                    return dr(this.store.get(e)).next((function(n) {
                        return void 0 === n && (n = null),
                        p("SimpleDb", "GET", t.store.name, e, n),
                        n
                    }
                    ))
                }
                ,
                e.prototype.delete = function(e) {
                    return p("SimpleDb", "DELETE", this.store.name, e),
                    dr(this.store.delete(e))
                }
                ,
                e.prototype.count = function() {
                    return p("SimpleDb", "COUNT", this.store.name),
                    dr(this.store.count())
                }
                ,
                e.prototype.Nt = function(e, t) {
                    var n = this.cursor(this.options(e, t))
                      , r = [];
                    return this.xt(n, (function(e, t) {
                        r.push(t)
                    }
                    )).next((function() {
                        return r
                    }
                    ))
                }
                ,
                e.prototype.kt = function(e, t) {
                    p("SimpleDb", "DELETE ALL", this.store.name);
                    var n = this.options(e, t);
                    n.Ft = !1;
                    var r = this.cursor(n);
                    return this.xt(r, (function(e, t, n) {
                        return n.delete()
                    }
                    ))
                }
                ,
                e.prototype.$t = function(e, t) {
                    var n;
                    t ? n = e : (n = {},
                    t = e);
                    var r = this.cursor(n);
                    return this.xt(r, t)
                }
                ,
                e.prototype.Ot = function(e) {
                    var t = this.cursor({});
                    return new ir((function(n, r) {
                        t.onerror = function(e) {
                            var t = pr(e.target.error);
                            r(t)
                        }
                        ,
                        t.onsuccess = function(t) {
                            var r = t.target.result;
                            r ? e(r.primaryKey, r.value).next((function(e) {
                                e ? r.continue() : n()
                            }
                            )) : n()
                        }
                    }
                    ))
                }
                ,
                e.prototype.xt = function(e, t) {
                    var n = [];
                    return new ir((function(r, i) {
                        e.onerror = function(e) {
                            i(e.target.error)
                        }
                        ,
                        e.onsuccess = function(e) {
                            var i = e.target.result;
                            if (i) {
                                var o = new sr(i)
                                  , a = t(i.primaryKey, i.value, o);
                                if (a instanceof ir) {
                                    var s = a.catch((function(e) {
                                        return o.done(),
                                        ir.reject(e)
                                    }
                                    ));
                                    n.push(s)
                                }
                                o.isDone ? r() : null === o.Dt ? i.continue() : i.continue(o.Dt)
                            } else
                                r()
                        }
                    }
                    )).next((function() {
                        return ir.waitFor(n)
                    }
                    ))
                }
                ,
                e.prototype.options = function(e, t) {
                    var n;
                    return void 0 !== e && ("string" == typeof e ? n = e : t = e),
                    {
                        index: n,
                        range: t
                    }
                }
                ,
                e.prototype.cursor = function(e) {
                    var t = "next";
                    if (e.reverse && (t = "prev"),
                    e.index) {
                        var n = this.store.index(e.index);
                        return e.Ft ? n.openKeyCursor(e.range, t) : n.openCursor(e.range, t)
                    }
                    return this.store.openCursor(e.range, t)
                }
                ,
                e
            }();
            function dr(e) {
                return new ir((function(t, n) {
                    e.onsuccess = function(e) {
                        var n = e.target.result;
                        t(n)
                    }
                    ,
                    e.onerror = function(e) {
                        var t = pr(e.target.error);
                        n(t)
                    }
                }
                ))
            }
            var fr = !1;
            function pr(e) {
                var t = ar._t((0,
                i.getUA)());
                if (t >= 12.2 && t < 13) {
                    var n = "An internal error was encountered in the Indexed Database server";
                    if (e.message.indexOf(n) >= 0) {
                        var r = new c("internal","IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
                        return fr || (fr = !0,
                        setTimeout((function() {
                            throw r
                        }
                        ), 0)),
                        r
                    }
                }
                return e
            }
            var hr = function(e) {
                function t(t, n) {
                    var r = this;
                    return (r = e.call(this) || this).Mt = t,
                    r.currentSequenceNumber = n,
                    r
                }
                return (0,
                r.__extends)(t, e),
                t
            }(nr);
            function mr(e, t) {
                var n = b(e);
                return ar.It(n.Mt, t)
            }
            var gr = function() {
                function e(e, t, n, r) {
                    this.batchId = e,
                    this.localWriteTime = t,
                    this.baseMutations = n,
                    this.mutations = r
                }
                return e.prototype.applyToRemoteDocument = function(e, t) {
                    for (var n = t.mutationResults, r = 0; r < this.mutations.length; r++) {
                        var i = this.mutations[r];
                        i.key.isEqual(e.key) && pt(i, e, n[r])
                    }
                }
                ,
                e.prototype.applyToLocalView = function(e) {
                    for (var t = 0, n = this.baseMutations; t < n.length; t++)
                        (o = n[t]).key.isEqual(e.key) && ht(o, e, this.localWriteTime);
                    for (var r = 0, i = this.mutations; r < i.length; r++) {
                        var o;
                        (o = i[r]).key.isEqual(e.key) && ht(o, e, this.localWriteTime)
                    }
                }
                ,
                e.prototype.applyToLocalDocumentSet = function(e) {
                    var t = this;
                    this.mutations.forEach((function(n) {
                        var r = e.get(n.key)
                          , i = r;
                        t.applyToLocalView(i),
                        r.isValidDocument() || i.convertToNoDocument(k.min())
                    }
                    ))
                }
                ,
                e.prototype.keys = function() {
                    return this.mutations.reduce((function(e, t) {
                        return e.add(t.key)
                    }
                    ), zt())
                }
                ,
                e.prototype.isEqual = function(e) {
                    return this.batchId === e.batchId && x(this.mutations, e.mutations, (function(e, t) {
                        return gt(e, t)
                    }
                    )) && x(this.baseMutations, e.baseMutations, (function(e, t) {
                        return gt(e, t)
                    }
                    ))
                }
                ,
                e
            }()
              , vr = function() {
                function e(e, t, n, r) {
                    this.batch = e,
                    this.commitVersion = t,
                    this.mutationResults = n,
                    this.docVersions = r
                }
                return e.from = function(t, n, r) {
                    y(t.mutations.length === r.length);
                    for (var i = Ut(), o = t.mutations, a = 0; a < o.length; a++)
                        i = i.insert(o[a].key, r[a].version);
                    return new e(t,n,r,i)
                }
                ,
                e
            }()
              , yr = function() {
                function e(e, t, n, r, i, o, a) {
                    void 0 === i && (i = k.min()),
                    void 0 === o && (o = k.min()),
                    void 0 === a && (a = Z.EMPTY_BYTE_STRING),
                    this.target = e,
                    this.targetId = t,
                    this.purpose = n,
                    this.sequenceNumber = r,
                    this.snapshotVersion = i,
                    this.lastLimboFreeSnapshotVersion = o,
                    this.resumeToken = a
                }
                return e.prototype.withSequenceNumber = function(t) {
                    return new e(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)
                }
                ,
                e.prototype.withResumeToken = function(t, n) {
                    return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)
                }
                ,
                e.prototype.withLastLimboFreeSnapshotVersion = function(t) {
                    return new e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)
                }
                ,
                e
            }()
              , br = function(e) {
                this.Lt = e
            };
            function wr(e, t) {
                if (t.document)
                    return vn(e.Lt, t.document, !!t.hasCommittedMutations);
                if (t.noDocument) {
                    var n = W.fromSegments(t.noDocument.path)
                      , r = Sr(t.noDocument.readTime)
                      , i = ue.newNoDocument(n, r);
                    return t.hasCommittedMutations ? i.setHasCommittedMutations() : i
                }
                if (t.unknownDocument) {
                    var o = W.fromSegments(t.unknownDocument.path);
                    return r = Sr(t.unknownDocument.version),
                    ue.newUnknownDocument(o, r)
                }
                return v()
            }
            function _r(e, t, n) {
                var r = Er(n)
                  , i = t.key.path.popLast().toArray();
                if (t.isFoundDocument()) {
                    var o = function(e, t) {
                        return {
                            name: cn(e, t.key),
                            fields: t.data.value.mapValue.fields,
                            updateTime: rn(e, t.version.toTimestamp())
                        }
                    }(e.Lt, t)
                      , a = t.hasCommittedMutations;
                    return new Vn(null,null,o,a,r,i)
                }
                if (t.isNoDocument()) {
                    var s = t.key.path.toArray()
                      , l = Cr(t.version);
                    return a = t.hasCommittedMutations,
                    new Vn(null,new $n(s,l),null,a,r,i)
                }
                if (t.isUnknownDocument()) {
                    var u = t.key.path.toArray()
                      , c = Cr(t.version);
                    return new Vn(new qn(u,c),null,null,!0,r,i)
                }
                return v()
            }
            function Er(e) {
                var t = e.toTimestamp();
                return [t.seconds, t.nanoseconds]
            }
            function xr(e) {
                var t = new S(e[0],e[1]);
                return k.fromTimestamp(t)
            }
            function Cr(e) {
                var t = e.toTimestamp();
                return new Ln(t.seconds,t.nanoseconds)
            }
            function Sr(e) {
                var t = new S(e.seconds,e.nanoseconds);
                return k.fromTimestamp(t)
            }
            function kr(e, t) {
                for (var n = (t.baseMutations || []).map((function(t) {
                    return bn(e.Lt, t)
                }
                )), r = 0; r < t.mutations.length - 1; ++r) {
                    var i = t.mutations[r];
                    if (r + 1 < t.mutations.length && void 0 !== t.mutations[r + 1].transform) {
                        var o = t.mutations[r + 1];
                        i.updateTransforms = o.transform.fieldTransforms,
                        t.mutations.splice(r + 1, 1),
                        ++r
                    }
                }
                var a = t.mutations.map((function(t) {
                    return bn(e.Lt, t)
                }
                ))
                  , s = S.fromMillis(t.localWriteTimeMs);
                return new gr(t.batchId,s,n,a)
            }
            function Tr(e) {
                var t, n, r = Sr(e.readTime), i = void 0 !== e.lastLimboFreeSnapshotVersion ? Sr(e.lastLimboFreeSnapshotVersion) : k.min();
                return void 0 !== e.query.documents ? (y(1 === (n = e.query).documents.length),
                t = Fe(Re(pn(n.documents[0])))) : t = function(e) {
                    return Fe(En(e))
                }(e.query),
                new yr(t,e.targetId,0,e.lastListenSequenceNumber,r,i,Z.fromBase64String(e.resumeToken))
            }
            function Or(e, t) {
                var n, r = Cr(t.snapshotVersion), i = Cr(t.lastLimboFreeSnapshotVersion);
                n = he(t.target) ? wn(e.Lt, t.target) : _n(e.Lt, t.target);
                var o = t.resumeToken.toBase64();
                return new Hn(t.targetId,fe(t.target),r,o,t.sequenceNumber,i,n)
            }
            function Ir(e) {
                var t = En({
                    parent: e.parent,
                    structuredQuery: e.structuredQuery
                });
                return "LAST" === e.limitType ? Ue(t, t.limit, "L") : t
            }
            var Ar = function() {
                function e() {}
                return e.prototype.getBundleMetadata = function(e, t) {
                    return Pr(e).get(t).next((function(e) {
                        if (e)
                            return {
                                id: (t = e).bundleId,
                                createTime: Sr(t.createTime),
                                version: t.version
                            };
                        var t
                    }
                    ))
                }
                ,
                e.prototype.saveBundleMetadata = function(e, t) {
                    return Pr(e).put({
                        bundleId: (n = t).id,
                        createTime: Cr(sn(n.createTime)),
                        version: n.version
                    });
                    var n
                }
                ,
                e.prototype.getNamedQuery = function(e, t) {
                    return Rr(e).get(t).next((function(e) {
                        if (e)
                            return {
                                name: (t = e).name,
                                query: Ir(t.bundledQuery),
                                readTime: Sr(t.readTime)
                            };
                        var t
                    }
                    ))
                }
                ,
                e.prototype.saveNamedQuery = function(e, t) {
                    return Rr(e).put(function(e) {
                        return {
                            name: e.name,
                            readTime: Cr(sn(e.readTime)),
                            bundledQuery: e.bundledQuery
                        }
                    }(t))
                }
                ,
                e
            }();
            function Pr(e) {
                return mr(e, Xn.store)
            }
            function Rr(e) {
                return mr(e, Jn.store)
            }
            var Mr = function() {
                function e() {
                    this.Bt = new Nr
                }
                return e.prototype.addToCollectionParentIndex = function(e, t) {
                    return this.Bt.add(t),
                    ir.resolve()
                }
                ,
                e.prototype.getCollectionParents = function(e, t) {
                    return ir.resolve(this.Bt.getEntries(t))
                }
                ,
                e
            }()
              , Nr = function() {
                function e() {
                    this.index = {}
                }
                return e.prototype.add = function(e) {
                    var t = e.lastSegment()
                      , n = e.popLast()
                      , r = this.index[t] || new Mt(P.comparator)
                      , i = !r.has(n);
                    return this.index[t] = r.add(n),
                    i
                }
                ,
                e.prototype.has = function(e) {
                    var t = e.lastSegment()
                      , n = e.popLast()
                      , r = this.index[t];
                    return r && r.has(n)
                }
                ,
                e.prototype.getEntries = function(e) {
                    return (this.index[e] || new Mt(P.comparator)).toArray()
                }
                ,
                e
            }()
              , Zr = function() {
                function e() {
                    this.qt = new Nr
                }
                return e.prototype.addToCollectionParentIndex = function(e, t) {
                    var n = this;
                    if (!this.qt.has(t)) {
                        var r = t.lastSegment()
                          , i = t.popLast();
                        e.addOnCommittedListener((function() {
                            n.qt.add(t)
                        }
                        ));
                        var o = {
                            collectionId: r,
                            parent: Nn(i)
                        };
                        return Dr(e).put(o)
                    }
                    return ir.resolve()
                }
                ,
                e.prototype.getCollectionParents = function(e, t) {
                    var n = []
                      , r = IDBKeyRange.bound([t, ""], [C(t), ""], !1, !0);
                    return Dr(e).Nt(r).next((function(e) {
                        for (var r = 0, i = e; r < i.length; r++) {
                            var o = i[r];
                            if (o.collectionId !== t)
                                break;
                            n.push(jn(o.parent))
                        }
                        return n
                    }
                    ))
                }
                ,
                e
            }();
            function Dr(e) {
                return mr(e, Qn.store)
            }
            var jr = {
                didRun: !1,
                sequenceNumbersCollected: 0,
                targetsRemoved: 0,
                documentsRemoved: 0
            }
              , Lr = function() {
                function e(e, t, n) {
                    this.cacheSizeCollectionThreshold = e,
                    this.percentileToCollect = t,
                    this.maximumSequenceNumbersToCollect = n
                }
                return e.withCacheSize = function(t) {
                    return new e(t,e.DEFAULT_COLLECTION_PERCENTILE,e.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)
                }
                ,
                e
            }();
            function Fr(e, t, n) {
                var r = e.store(Bn.store)
                  , i = e.store(zn.store)
                  , o = []
                  , a = IDBKeyRange.only(n.batchId)
                  , s = 0
                  , l = r.$t({
                    range: a
                }, (function(e, t, n) {
                    return s++,
                    n.delete()
                }
                ));
                o.push(l.next((function() {
                    y(1 === s)
                }
                )));
                for (var u = [], c = 0, d = n.mutations; c < d.length; c++) {
                    var f = d[c]
                      , p = zn.key(t, f.key.path, n.batchId);
                    o.push(i.delete(p)),
                    u.push(f.key)
                }
                return ir.waitFor(o).next((function() {
                    return u
                }
                ))
            }
            function Ur(e) {
                if (!e)
                    return 0;
                var t;
                if (e.document)
                    t = e.document;
                else if (e.unknownDocument)
                    t = e.unknownDocument;
                else {
                    if (!e.noDocument)
                        throw v();
                    t = e.noDocument
                }
                return JSON.stringify(t).length
            }
            Lr.DEFAULT_COLLECTION_PERCENTILE = 10,
            Lr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3,
            Lr.DEFAULT = new Lr(41943040,Lr.DEFAULT_COLLECTION_PERCENTILE,Lr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),
            Lr.DISABLED = new Lr(-1,0,0);
            var Br = function() {
                function e(e, t, n, r) {
                    this.userId = e,
                    this.R = t,
                    this.Ut = n,
                    this.referenceDelegate = r,
                    this.Kt = {}
                }
                return e.Qt = function(t, n, r, i) {
                    return y("" !== t.uid),
                    new e(t.isAuthenticated() ? t.uid : "",n,r,i)
                }
                ,
                e.prototype.checkEmpty = function(e) {
                    var t = !0
                      , n = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]);
                    return $r(e).$t({
                        index: Bn.userMutationsIndex,
                        range: n
                    }, (function(e, n, r) {
                        t = !1,
                        r.done()
                    }
                    )).next((function() {
                        return t
                    }
                    ))
                }
                ,
                e.prototype.addMutationBatch = function(e, t, n, r) {
                    var i = this
                      , o = qr(e)
                      , a = $r(e);
                    return a.add({}).next((function(s) {
                        y("number" == typeof s);
                        for (var l = new gr(s,t,n,r), u = function(e, t, n) {
                            var r = n.baseMutations.map((function(t) {
                                return yn(e.Lt, t)
                            }
                            ))
                              , i = n.mutations.map((function(t) {
                                return yn(e.Lt, t)
                            }
                            ));
                            return new Bn(t,n.batchId,n.localWriteTime.toMillis(),r,i)
                        }(i.R, i.userId, l), c = [], d = new Mt((function(e, t) {
                            return E(e.canonicalString(), t.canonicalString())
                        }
                        )), f = 0, p = r; f < p.length; f++) {
                            var h = p[f]
                              , m = zn.key(i.userId, h.key.path, s);
                            d = d.add(h.key.path.popLast()),
                            c.push(a.put(u)),
                            c.push(o.put(m, zn.PLACEHOLDER))
                        }
                        return d.forEach((function(t) {
                            c.push(i.Ut.addToCollectionParentIndex(e, t))
                        }
                        )),
                        e.addOnCommittedListener((function() {
                            i.Kt[s] = l.keys()
                        }
                        )),
                        ir.waitFor(c).next((function() {
                            return l
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.lookupMutationBatch = function(e, t) {
                    var n = this;
                    return $r(e).get(t).next((function(e) {
                        return e ? (y(e.userId === n.userId),
                        kr(n.R, e)) : null
                    }
                    ))
                }
                ,
                e.prototype.jt = function(e, t) {
                    var n = this;
                    return this.Kt[t] ? ir.resolve(this.Kt[t]) : this.lookupMutationBatch(e, t).next((function(e) {
                        if (e) {
                            var r = e.keys();
                            return n.Kt[t] = r,
                            r
                        }
                        return null
                    }
                    ))
                }
                ,
                e.prototype.getNextMutationBatchAfterBatchId = function(e, t) {
                    var n = this
                      , r = t + 1
                      , i = IDBKeyRange.lowerBound([this.userId, r])
                      , o = null;
                    return $r(e).$t({
                        index: Bn.userMutationsIndex,
                        range: i
                    }, (function(e, t, i) {
                        t.userId === n.userId && (y(t.batchId >= r),
                        o = kr(n.R, t)),
                        i.done()
                    }
                    )).next((function() {
                        return o
                    }
                    ))
                }
                ,
                e.prototype.getHighestUnacknowledgedBatchId = function(e) {
                    var t = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY])
                      , n = -1;
                    return $r(e).$t({
                        index: Bn.userMutationsIndex,
                        range: t,
                        reverse: !0
                    }, (function(e, t, r) {
                        n = t.batchId,
                        r.done()
                    }
                    )).next((function() {
                        return n
                    }
                    ))
                }
                ,
                e.prototype.getAllMutationBatches = function(e) {
                    var t = this
                      , n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]);
                    return $r(e).Nt(Bn.userMutationsIndex, n).next((function(e) {
                        return e.map((function(e) {
                            return kr(t.R, e)
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.getAllMutationBatchesAffectingDocumentKey = function(e, t) {
                    var n = this
                      , r = zn.prefixForPath(this.userId, t.path)
                      , i = IDBKeyRange.lowerBound(r)
                      , o = [];
                    return qr(e).$t({
                        range: i
                    }, (function(r, i, a) {
                        var s = r[0]
                          , l = r[1]
                          , u = r[2]
                          , c = jn(l);
                        if (s === n.userId && t.path.isEqual(c))
                            return $r(e).get(u).next((function(e) {
                                if (!e)
                                    throw v();
                                y(e.userId === n.userId),
                                o.push(kr(n.R, e))
                            }
                            ));
                        a.done()
                    }
                    )).next((function() {
                        return o
                    }
                    ))
                }
                ,
                e.prototype.getAllMutationBatchesAffectingDocumentKeys = function(e, t) {
                    var n = this
                      , r = new Mt(E)
                      , i = [];
                    return t.forEach((function(t) {
                        var o = zn.prefixForPath(n.userId, t.path)
                          , a = IDBKeyRange.lowerBound(o)
                          , s = qr(e).$t({
                            range: a
                        }, (function(e, i, o) {
                            var a = e[0]
                              , s = e[1]
                              , l = e[2]
                              , u = jn(s);
                            a === n.userId && t.path.isEqual(u) ? r = r.add(l) : o.done()
                        }
                        ));
                        i.push(s)
                    }
                    )),
                    ir.waitFor(i).next((function() {
                        return n.Wt(e, r)
                    }
                    ))
                }
                ,
                e.prototype.getAllMutationBatchesAffectingQuery = function(e, t) {
                    var n = this
                      , r = t.path
                      , i = r.length + 1
                      , o = zn.prefixForPath(this.userId, r)
                      , a = IDBKeyRange.lowerBound(o)
                      , s = new Mt(E);
                    return qr(e).$t({
                        range: a
                    }, (function(e, t, o) {
                        var a = e[0]
                          , l = e[1]
                          , u = e[2]
                          , c = jn(l);
                        a === n.userId && r.isPrefixOf(c) ? c.length === i && (s = s.add(u)) : o.done()
                    }
                    )).next((function() {
                        return n.Wt(e, s)
                    }
                    ))
                }
                ,
                e.prototype.Wt = function(e, t) {
                    var n = this
                      , r = []
                      , i = [];
                    return t.forEach((function(t) {
                        i.push($r(e).get(t).next((function(e) {
                            if (null === e)
                                throw v();
                            y(e.userId === n.userId),
                            r.push(kr(n.R, e))
                        }
                        )))
                    }
                    )),
                    ir.waitFor(i).next((function() {
                        return r
                    }
                    ))
                }
                ,
                e.prototype.removeMutationBatch = function(e, t) {
                    var n = this;
                    return Fr(e.Mt, this.userId, t).next((function(r) {
                        return e.addOnCommittedListener((function() {
                            n.Gt(t.batchId)
                        }
                        )),
                        ir.forEach(r, (function(t) {
                            return n.referenceDelegate.markPotentiallyOrphaned(e, t)
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.Gt = function(e) {
                    delete this.Kt[e]
                }
                ,
                e.prototype.performConsistencyCheck = function(e) {
                    var t = this;
                    return this.checkEmpty(e).next((function(n) {
                        if (!n)
                            return ir.resolve();
                        var r = IDBKeyRange.lowerBound(zn.prefixForUser(t.userId))
                          , i = [];
                        return qr(e).$t({
                            range: r
                        }, (function(e, n, r) {
                            if (e[0] === t.userId) {
                                var o = jn(e[1]);
                                i.push(o)
                            } else
                                r.done()
                        }
                        )).next((function() {
                            y(0 === i.length)
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.containsKey = function(e, t) {
                    return zr(e, this.userId, t)
                }
                ,
                e.prototype.zt = function(e) {
                    var t = this;
                    return Vr(e).get(this.userId).next((function(e) {
                        return e || new Un(t.userId,-1,"")
                    }
                    ))
                }
                ,
                e
            }();
            function zr(e, t, n) {
                var r = zn.prefixForPath(t, n.path)
                  , i = r[1]
                  , o = IDBKeyRange.lowerBound(r)
                  , a = !1;
                return qr(e).$t({
                    range: o,
                    Ft: !0
                }, (function(e, n, r) {
                    var o = e[0]
                      , s = e[1];
                    e[2],
                    o === t && s === i && (a = !0),
                    r.done()
                }
                )).next((function() {
                    return a
                }
                ))
            }
            function $r(e) {
                return mr(e, Bn.store)
            }
            function qr(e) {
                return mr(e, zn.store)
            }
            function Vr(e) {
                return mr(e, Un.store)
            }
            var Wr = function() {
                function e(e) {
                    this.Ht = e
                }
                return e.prototype.next = function() {
                    return this.Ht += 2,
                    this.Ht
                }
                ,
                e.Jt = function() {
                    return new e(0)
                }
                ,
                e.Yt = function() {
                    return new e(-1)
                }
                ,
                e
            }()
              , Hr = function() {
                function e(e, t) {
                    this.referenceDelegate = e,
                    this.R = t
                }
                return e.prototype.allocateTargetId = function(e) {
                    var t = this;
                    return this.Xt(e).next((function(n) {
                        var r = new Wr(n.highestTargetId);
                        return n.highestTargetId = r.next(),
                        t.Zt(e, n).next((function() {
                            return n.highestTargetId
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.getLastRemoteSnapshotVersion = function(e) {
                    return this.Xt(e).next((function(e) {
                        return k.fromTimestamp(new S(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))
                    }
                    ))
                }
                ,
                e.prototype.getHighestSequenceNumber = function(e) {
                    return this.Xt(e).next((function(e) {
                        return e.highestListenSequenceNumber
                    }
                    ))
                }
                ,
                e.prototype.setTargetsMetadata = function(e, t, n) {
                    var r = this;
                    return this.Xt(e).next((function(i) {
                        return i.highestListenSequenceNumber = t,
                        n && (i.lastRemoteSnapshotVersion = n.toTimestamp()),
                        t > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = t),
                        r.Zt(e, i)
                    }
                    ))
                }
                ,
                e.prototype.addTargetData = function(e, t) {
                    var n = this;
                    return this.te(e, t).next((function() {
                        return n.Xt(e).next((function(r) {
                            return r.targetCount += 1,
                            n.ee(t, r),
                            n.Zt(e, r)
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.updateTargetData = function(e, t) {
                    return this.te(e, t)
                }
                ,
                e.prototype.removeTargetData = function(e, t) {
                    var n = this;
                    return this.removeMatchingKeysForTargetId(e, t.targetId).next((function() {
                        return Gr(e).delete(t.targetId)
                    }
                    )).next((function() {
                        return n.Xt(e)
                    }
                    )).next((function(t) {
                        return y(t.targetCount > 0),
                        t.targetCount -= 1,
                        n.Zt(e, t)
                    }
                    ))
                }
                ,
                e.prototype.removeTargets = function(e, t, n) {
                    var r = this
                      , i = 0
                      , o = [];
                    return Gr(e).$t((function(a, s) {
                        var l = Tr(s);
                        l.sequenceNumber <= t && null === n.get(l.targetId) && (i++,
                        o.push(r.removeTargetData(e, l)))
                    }
                    )).next((function() {
                        return ir.waitFor(o)
                    }
                    )).next((function() {
                        return i
                    }
                    ))
                }
                ,
                e.prototype.forEachTarget = function(e, t) {
                    return Gr(e).$t((function(e, n) {
                        var r = Tr(n);
                        t(r)
                    }
                    ))
                }
                ,
                e.prototype.Xt = function(e) {
                    return Kr(e).get(Kn.key).next((function(e) {
                        return y(null !== e),
                        e
                    }
                    ))
                }
                ,
                e.prototype.Zt = function(e, t) {
                    return Kr(e).put(Kn.key, t)
                }
                ,
                e.prototype.te = function(e, t) {
                    return Gr(e).put(Or(this.R, t))
                }
                ,
                e.prototype.ee = function(e, t) {
                    var n = !1;
                    return e.targetId > t.highestTargetId && (t.highestTargetId = e.targetId,
                    n = !0),
                    e.sequenceNumber > t.highestListenSequenceNumber && (t.highestListenSequenceNumber = e.sequenceNumber,
                    n = !0),
                    n
                }
                ,
                e.prototype.getTargetCount = function(e) {
                    return this.Xt(e).next((function(e) {
                        return e.targetCount
                    }
                    ))
                }
                ,
                e.prototype.getTargetData = function(e, t) {
                    var n = fe(t)
                      , r = IDBKeyRange.bound([n, Number.NEGATIVE_INFINITY], [n, Number.POSITIVE_INFINITY])
                      , i = null;
                    return Gr(e).$t({
                        range: r,
                        index: Hn.queryTargetsIndexName
                    }, (function(e, n, r) {
                        var o = Tr(n);
                        pe(t, o.target) && (i = o,
                        r.done())
                    }
                    )).next((function() {
                        return i
                    }
                    ))
                }
                ,
                e.prototype.addMatchingKeys = function(e, t, n) {
                    var r = this
                      , i = []
                      , o = Qr(e);
                    return t.forEach((function(t) {
                        var a = Nn(t.path);
                        i.push(o.put(new Gn(n,a))),
                        i.push(r.referenceDelegate.addReference(e, n, t))
                    }
                    )),
                    ir.waitFor(i)
                }
                ,
                e.prototype.removeMatchingKeys = function(e, t, n) {
                    var r = this
                      , i = Qr(e);
                    return ir.forEach(t, (function(t) {
                        var o = Nn(t.path);
                        return ir.waitFor([i.delete([n, o]), r.referenceDelegate.removeReference(e, n, t)])
                    }
                    ))
                }
                ,
                e.prototype.removeMatchingKeysForTargetId = function(e, t) {
                    var n = Qr(e)
                      , r = IDBKeyRange.bound([t], [t + 1], !1, !0);
                    return n.delete(r)
                }
                ,
                e.prototype.getMatchingKeysForTargetId = function(e, t) {
                    var n = IDBKeyRange.bound([t], [t + 1], !1, !0)
                      , r = Qr(e)
                      , i = zt();
                    return r.$t({
                        range: n,
                        Ft: !0
                    }, (function(e, t, n) {
                        var r = jn(e[1])
                          , o = new W(r);
                        i = i.add(o)
                    }
                    )).next((function() {
                        return i
                    }
                    ))
                }
                ,
                e.prototype.containsKey = function(e, t) {
                    var n = Nn(t.path)
                      , r = IDBKeyRange.bound([n], [C(n)], !1, !0)
                      , i = 0;
                    return Qr(e).$t({
                        index: Gn.documentTargetsIndex,
                        Ft: !0,
                        range: r
                    }, (function(e, t, n) {
                        var r = e[0];
                        e[1],
                        0 !== r && (i++,
                        n.done())
                    }
                    )).next((function() {
                        return i > 0
                    }
                    ))
                }
                ,
                e.prototype.lt = function(e, t) {
                    return Gr(e).get(t).next((function(e) {
                        return e ? Tr(e) : null
                    }
                    ))
                }
                ,
                e
            }();
            function Gr(e) {
                return mr(e, Hn.store)
            }
            function Kr(e) {
                return mr(e, Kn.store)
            }
            function Qr(e) {
                return mr(e, Gn.store)
            }
            function Yr(e) {
                return (0,
                r.__awaiter)(this, void 0, void 0, (function() {
                    return (0,
                    r.__generator)(this, (function(t) {
                        if (e.code !== u.FAILED_PRECONDITION || e.message !== tr)
                            throw e;
                        return p("LocalStore", "Unexpectedly lost primary lease"),
                        [2]
                    }
                    ))
                }
                ))
            }
            function Xr(e, t) {
                var n = e[0]
                  , r = e[1]
                  , i = t[0]
                  , o = t[1]
                  , a = E(n, i);
                return 0 === a ? E(r, o) : a
            }
            var Jr = function() {
                function e(e) {
                    this.ne = e,
                    this.buffer = new Mt(Xr),
                    this.se = 0
                }
                return e.prototype.ie = function() {
                    return ++this.se
                }
                ,
                e.prototype.re = function(e) {
                    var t = [e, this.ie()];
                    if (this.buffer.size < this.ne)
                        this.buffer = this.buffer.add(t);
                    else {
                        var n = this.buffer.last();
                        Xr(t, n) < 0 && (this.buffer = this.buffer.delete(n).add(t))
                    }
                }
                ,
                Object.defineProperty(e.prototype, "maxValue", {
                    get: function() {
                        return this.buffer.last()[0]
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e
            }()
              , ei = function() {
                function e(e, t) {
                    this.garbageCollector = e,
                    this.asyncQueue = t,
                    this.oe = !1,
                    this.ce = null
                }
                return e.prototype.start = function(e) {
                    -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold && this.ue(e)
                }
                ,
                e.prototype.stop = function() {
                    this.ce && (this.ce.cancel(),
                    this.ce = null)
                }
                ,
                Object.defineProperty(e.prototype, "started", {
                    get: function() {
                        return null !== this.ce
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.ue = function(e) {
                    var t = this
                      , n = this.oe ? 3e5 : 6e4;
                    p("LruGarbageCollector", "Garbage collection scheduled in " + n + "ms"),
                    this.ce = this.asyncQueue.enqueueAfterDelay("lru_garbage_collection", n, (function() {
                        return (0,
                        r.__awaiter)(t, void 0, void 0, (function() {
                            var t;
                            return (0,
                            r.__generator)(this, (function(n) {
                                switch (n.label) {
                                case 0:
                                    this.ce = null,
                                    this.oe = !0,
                                    n.label = 1;
                                case 1:
                                    return n.trys.push([1, 3, , 7]),
                                    [4, e.collectGarbage(this.garbageCollector)];
                                case 2:
                                    return n.sent(),
                                    [3, 7];
                                case 3:
                                    return ur(t = n.sent()) ? (p("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", t),
                                    [3, 6]) : [3, 4];
                                case 4:
                                    return [4, Yr(t)];
                                case 5:
                                    n.sent(),
                                    n.label = 6;
                                case 6:
                                    return [3, 7];
                                case 7:
                                    return [4, this.ue(e)];
                                case 8:
                                    return n.sent(),
                                    [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                e
            }()
              , ti = function() {
                function e(e, t) {
                    this.ae = e,
                    this.params = t
                }
                return e.prototype.calculateTargetCount = function(e, t) {
                    return this.ae.he(e).next((function(e) {
                        return Math.floor(t / 100 * e)
                    }
                    ))
                }
                ,
                e.prototype.nthSequenceNumber = function(e, t) {
                    var n = this;
                    if (0 === t)
                        return ir.resolve(l.o);
                    var r = new Jr(t);
                    return this.ae.forEachTarget(e, (function(e) {
                        return r.re(e.sequenceNumber)
                    }
                    )).next((function() {
                        return n.ae.le(e, (function(e) {
                            return r.re(e)
                        }
                        ))
                    }
                    )).next((function() {
                        return r.maxValue
                    }
                    ))
                }
                ,
                e.prototype.removeTargets = function(e, t, n) {
                    return this.ae.removeTargets(e, t, n)
                }
                ,
                e.prototype.removeOrphanedDocuments = function(e, t) {
                    return this.ae.removeOrphanedDocuments(e, t)
                }
                ,
                e.prototype.collect = function(e, t) {
                    var n = this;
                    return -1 === this.params.cacheSizeCollectionThreshold ? (p("LruGarbageCollector", "Garbage collection skipped; disabled"),
                    ir.resolve(jr)) : this.getCacheSize(e).next((function(r) {
                        return r < n.params.cacheSizeCollectionThreshold ? (p("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.cacheSizeCollectionThreshold),
                        jr) : n.fe(e, t)
                    }
                    ))
                }
                ,
                e.prototype.getCacheSize = function(e) {
                    return this.ae.getCacheSize(e)
                }
                ,
                e.prototype.fe = function(e, t) {
                    var n, r, i, a, s, l, u, c = this, d = Date.now();
                    return this.calculateTargetCount(e, this.params.percentileToCollect).next((function(t) {
                        return t > c.params.maximumSequenceNumbersToCollect ? (p("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + c.params.maximumSequenceNumbersToCollect + " from " + t),
                        r = c.params.maximumSequenceNumbersToCollect) : r = t,
                        a = Date.now(),
                        c.nthSequenceNumber(e, r)
                    }
                    )).next((function(r) {
                        return n = r,
                        s = Date.now(),
                        c.removeTargets(e, n, t)
                    }
                    )).next((function(t) {
                        return i = t,
                        l = Date.now(),
                        c.removeOrphanedDocuments(e, n)
                    }
                    )).next((function(e) {
                        return u = Date.now(),
                        f() <= o.LogLevel.DEBUG && p("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (a - d) + "ms\n\tDetermined least recently used " + r + " in " + (s - a) + "ms\n\tRemoved " + i + " targets in " + (l - s) + "ms\n\tRemoved " + e + " documents in " + (u - l) + "ms\nTotal Duration: " + (u - d) + "ms"),
                        ir.resolve({
                            didRun: !0,
                            sequenceNumbersCollected: r,
                            targetsRemoved: i,
                            documentsRemoved: e
                        })
                    }
                    ))
                }
                ,
                e
            }()
              , ni = function() {
                function e(e, t) {
                    this.db = e,
                    this.garbageCollector = function(e, t) {
                        return new ti(e,t)
                    }(this, t)
                }
                return e.prototype.he = function(e) {
                    var t = this.de(e);
                    return this.db.getTargetCache().getTargetCount(e).next((function(e) {
                        return t.next((function(t) {
                            return e + t
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.de = function(e) {
                    var t = 0;
                    return this.le(e, (function(e) {
                        t++
                    }
                    )).next((function() {
                        return t
                    }
                    ))
                }
                ,
                e.prototype.forEachTarget = function(e, t) {
                    return this.db.getTargetCache().forEachTarget(e, t)
                }
                ,
                e.prototype.le = function(e, t) {
                    return this.we(e, (function(e, n) {
                        return t(n)
                    }
                    ))
                }
                ,
                e.prototype.addReference = function(e, t, n) {
                    return ri(e, n)
                }
                ,
                e.prototype.removeReference = function(e, t, n) {
                    return ri(e, n)
                }
                ,
                e.prototype.removeTargets = function(e, t, n) {
                    return this.db.getTargetCache().removeTargets(e, t, n)
                }
                ,
                e.prototype.markPotentiallyOrphaned = function(e, t) {
                    return ri(e, t)
                }
                ,
                e.prototype._e = function(e, t) {
                    return function(e, t) {
                        var n = !1;
                        return Vr(e).Ot((function(r) {
                            return zr(e, r, t).next((function(e) {
                                return e && (n = !0),
                                ir.resolve(!e)
                            }
                            ))
                        }
                        )).next((function() {
                            return n
                        }
                        ))
                    }(e, t)
                }
                ,
                e.prototype.removeOrphanedDocuments = function(e, t) {
                    var n = this
                      , r = this.db.getRemoteDocumentCache().newChangeBuffer()
                      , i = []
                      , o = 0;
                    return this.we(e, (function(a, s) {
                        if (s <= t) {
                            var l = n._e(e, a).next((function(t) {
                                if (!t)
                                    return o++,
                                    r.getEntry(e, a).next((function() {
                                        return r.removeEntry(a),
                                        Qr(e).delete([0, Nn(a.path)])
                                    }
                                    ))
                            }
                            ));
                            i.push(l)
                        }
                    }
                    )).next((function() {
                        return ir.waitFor(i)
                    }
                    )).next((function() {
                        return r.apply(e)
                    }
                    )).next((function() {
                        return o
                    }
                    ))
                }
                ,
                e.prototype.removeTarget = function(e, t) {
                    var n = t.withSequenceNumber(e.currentSequenceNumber);
                    return this.db.getTargetCache().updateTargetData(e, n)
                }
                ,
                e.prototype.updateLimboDocument = function(e, t) {
                    return ri(e, t)
                }
                ,
                e.prototype.we = function(e, t) {
                    var n, r = Qr(e), i = l.o;
                    return r.$t({
                        index: Gn.documentTargetsIndex
                    }, (function(e, r) {
                        var o = e[0];
                        e[1];
                        var a = r.path
                          , s = r.sequenceNumber;
                        0 === o ? (i !== l.o && t(new W(jn(n)), i),
                        i = s,
                        n = a) : i = l.o
                    }
                    )).next((function() {
                        i !== l.o && t(new W(jn(n)), i)
                    }
                    ))
                }
                ,
                e.prototype.getCacheSize = function(e) {
                    return this.db.getRemoteDocumentCache().getSize(e)
                }
                ,
                e
            }();
            function ri(e, t) {
                return Qr(e).put(function(e, t) {
                    return new Gn(0,Nn(e.path),t)
                }(t, e.currentSequenceNumber))
            }
            var ii = function() {
                function e(e, t) {
                    this.mapKeyFn = e,
                    this.equalsFn = t,
                    this.inner = {}
                }
                return e.prototype.get = function(e) {
                    var t = this.mapKeyFn(e)
                      , n = this.inner[t];
                    if (void 0 !== n)
                        for (var r = 0, i = n; r < i.length; r++) {
                            var o = i[r]
                              , a = o[0]
                              , s = o[1];
                            if (this.equalsFn(a, e))
                                return s
                        }
                }
                ,
                e.prototype.has = function(e) {
                    return void 0 !== this.get(e)
                }
                ,
                e.prototype.set = function(e, t) {
                    var n = this.mapKeyFn(e)
                      , r = this.inner[n];
                    if (void 0 !== r) {
                        for (var i = 0; i < r.length; i++)
                            if (this.equalsFn(r[i][0], e))
                                return void (r[i] = [e, t]);
                        r.push([e, t])
                    } else
                        this.inner[n] = [[e, t]]
                }
                ,
                e.prototype.delete = function(e) {
                    var t = this.mapKeyFn(e)
                      , n = this.inner[t];
                    if (void 0 === n)
                        return !1;
                    for (var r = 0; r < n.length; r++)
                        if (this.equalsFn(n[r][0], e))
                            return 1 === n.length ? delete this.inner[t] : n.splice(r, 1),
                            !0;
                    return !1
                }
                ,
                e.prototype.forEach = function(e) {
                    O(this.inner, (function(t, n) {
                        for (var r = 0, i = n; r < i.length; r++) {
                            var o = i[r]
                              , a = o[0]
                              , s = o[1];
                            e(a, s)
                        }
                    }
                    ))
                }
                ,
                e.prototype.isEmpty = function() {
                    return I(this.inner)
                }
                ,
                e
            }()
              , oi = function() {
                function e() {
                    this.changes = new ii((function(e) {
                        return e.toString()
                    }
                    ),(function(e, t) {
                        return e.isEqual(t)
                    }
                    )),
                    this.changesApplied = !1
                }
                return e.prototype.getReadTime = function(e) {
                    var t = this.changes.get(e);
                    return t ? t.readTime : k.min()
                }
                ,
                e.prototype.addEntry = function(e, t) {
                    this.assertNotApplied(),
                    this.changes.set(e.key, {
                        document: e,
                        readTime: t
                    })
                }
                ,
                e.prototype.removeEntry = function(e, t) {
                    void 0 === t && (t = null),
                    this.assertNotApplied(),
                    this.changes.set(e, {
                        document: ue.newInvalidDocument(e),
                        readTime: t
                    })
                }
                ,
                e.prototype.getEntry = function(e, t) {
                    this.assertNotApplied();
                    var n = this.changes.get(t);
                    return void 0 !== n ? ir.resolve(n.document) : this.getFromCache(e, t)
                }
                ,
                e.prototype.getEntries = function(e, t) {
                    return this.getAllFromCache(e, t)
                }
                ,
                e.prototype.apply = function(e) {
                    return this.assertNotApplied(),
                    this.changesApplied = !0,
                    this.applyChanges(e)
                }
                ,
                e.prototype.assertNotApplied = function() {}
                ,
                e
            }()
              , ai = function() {
                function e(e, t) {
                    this.R = e,
                    this.Ut = t
                }
                return e.prototype.addEntry = function(e, t, n) {
                    return ui(e).put(ci(t), n)
                }
                ,
                e.prototype.removeEntry = function(e, t) {
                    var n = ui(e)
                      , r = ci(t);
                    return n.delete(r)
                }
                ,
                e.prototype.updateMetadata = function(e, t) {
                    var n = this;
                    return this.getMetadata(e).next((function(r) {
                        return r.byteSize += t,
                        n.me(e, r)
                    }
                    ))
                }
                ,
                e.prototype.getEntry = function(e, t) {
                    var n = this;
                    return ui(e).get(ci(t)).next((function(e) {
                        return n.ye(t, e)
                    }
                    ))
                }
                ,
                e.prototype.ge = function(e, t) {
                    var n = this;
                    return ui(e).get(ci(t)).next((function(e) {
                        return {
                            document: n.ye(t, e),
                            size: Ur(e)
                        }
                    }
                    ))
                }
                ,
                e.prototype.getEntries = function(e, t) {
                    var n = this
                      , r = Dt();
                    return this.pe(e, t, (function(e, t) {
                        var i = n.ye(e, t);
                        r = r.insert(e, i)
                    }
                    )).next((function() {
                        return r
                    }
                    ))
                }
                ,
                e.prototype.Ee = function(e, t) {
                    var n = this
                      , r = Dt()
                      , i = new At(W.comparator);
                    return this.pe(e, t, (function(e, t) {
                        var o = n.ye(e, t);
                        r = r.insert(e, o),
                        i = i.insert(e, Ur(t))
                    }
                    )).next((function() {
                        return {
                            documents: r,
                            Te: i
                        }
                    }
                    ))
                }
                ,
                e.prototype.pe = function(e, t, n) {
                    if (t.isEmpty())
                        return ir.resolve();
                    var r = IDBKeyRange.bound(t.first().path.toArray(), t.last().path.toArray())
                      , i = t.getIterator()
                      , o = i.getNext();
                    return ui(e).$t({
                        range: r
                    }, (function(e, t, r) {
                        for (var a = W.fromSegments(e); o && W.comparator(o, a) < 0; )
                            n(o, null),
                            o = i.getNext();
                        o && o.isEqual(a) && (n(o, t),
                        o = i.hasNext() ? i.getNext() : null),
                        o ? r.Ct(o.path.toArray()) : r.done()
                    }
                    )).next((function() {
                        for (; o; )
                            n(o, null),
                            o = i.hasNext() ? i.getNext() : null
                    }
                    ))
                }
                ,
                e.prototype.getDocumentsMatchingQuery = function(e, t, n) {
                    var r = this
                      , i = Dt()
                      , o = t.path.length + 1
                      , a = {};
                    if (n.isEqual(k.min())) {
                        var s = t.path.toArray();
                        a.range = IDBKeyRange.lowerBound(s)
                    } else {
                        var l = t.path.toArray()
                          , u = Er(n);
                        a.range = IDBKeyRange.lowerBound([l, u], !0),
                        a.index = Vn.collectionReadTimeIndex
                    }
                    return ui(e).$t(a, (function(e, n, a) {
                        if (e.length === o) {
                            var s = wr(r.R, n);
                            t.path.isPrefixOf(s.key.path) ? qe(t, s) && (i = i.insert(s.key, s)) : a.done()
                        }
                    }
                    )).next((function() {
                        return i
                    }
                    ))
                }
                ,
                e.prototype.newChangeBuffer = function(e) {
                    return new si(this,!!e && e.trackRemovals)
                }
                ,
                e.prototype.getSize = function(e) {
                    return this.getMetadata(e).next((function(e) {
                        return e.byteSize
                    }
                    ))
                }
                ,
                e.prototype.getMetadata = function(e) {
                    return li(e).get(Wn.key).next((function(e) {
                        return y(!!e),
                        e
                    }
                    ))
                }
                ,
                e.prototype.me = function(e, t) {
                    return li(e).put(Wn.key, t)
                }
                ,
                e.prototype.ye = function(e, t) {
                    if (t) {
                        var n = wr(this.R, t);
                        if (!n.isNoDocument() || !n.version.isEqual(k.min()))
                            return n
                    }
                    return ue.newInvalidDocument(e)
                }
                ,
                e
            }()
              , si = function(e) {
                function t(t, n) {
                    var r = this;
                    return (r = e.call(this) || this).Ie = t,
                    r.trackRemovals = n,
                    r.Ae = new ii((function(e) {
                        return e.toString()
                    }
                    ),(function(e, t) {
                        return e.isEqual(t)
                    }
                    )),
                    r
                }
                return (0,
                r.__extends)(t, e),
                t.prototype.applyChanges = function(e) {
                    var t = this
                      , n = []
                      , r = 0
                      , i = new Mt((function(e, t) {
                        return E(e.canonicalString(), t.canonicalString())
                    }
                    ));
                    return this.changes.forEach((function(o, a) {
                        var s = t.Ae.get(o);
                        if (a.document.isValidDocument()) {
                            var l = _r(t.Ie.R, a.document, t.getReadTime(o));
                            i = i.add(o.path.popLast());
                            var u = Ur(l);
                            r += u - s,
                            n.push(t.Ie.addEntry(e, o, l))
                        } else if (r -= s,
                        t.trackRemovals) {
                            var c = _r(t.Ie.R, ue.newNoDocument(o, k.min()), t.getReadTime(o));
                            n.push(t.Ie.addEntry(e, o, c))
                        } else
                            n.push(t.Ie.removeEntry(e, o))
                    }
                    )),
                    i.forEach((function(r) {
                        n.push(t.Ie.Ut.addToCollectionParentIndex(e, r))
                    }
                    )),
                    n.push(this.Ie.updateMetadata(e, r)),
                    ir.waitFor(n)
                }
                ,
                t.prototype.getFromCache = function(e, t) {
                    var n = this;
                    return this.Ie.ge(e, t).next((function(e) {
                        return n.Ae.set(t, e.size),
                        e.document
                    }
                    ))
                }
                ,
                t.prototype.getAllFromCache = function(e, t) {
                    var n = this;
                    return this.Ie.Ee(e, t).next((function(e) {
                        var t = e.documents;
                        return e.Te.forEach((function(e, t) {
                            n.Ae.set(e, t)
                        }
                        )),
                        t
                    }
                    ))
                }
                ,
                t
            }(oi);
            function li(e) {
                return mr(e, Wn.store)
            }
            function ui(e) {
                return mr(e, Vn.store)
            }
            function ci(e) {
                return e.path.toArray()
            }
            var di = function() {
                function e(e) {
                    this.R = e
                }
                return e.prototype.Rt = function(e, t, n, r) {
                    var i = this;
                    y(n < r && n >= 0 && r <= 11);
                    var o = new or("createOrUpgrade",t);
                    n < 1 && r >= 1 && (function(e) {
                        e.createObjectStore(Fn.store)
                    }(e),
                    function(e) {
                        e.createObjectStore(Un.store, {
                            keyPath: Un.keyPath
                        }),
                        e.createObjectStore(Bn.store, {
                            keyPath: Bn.keyPath,
                            autoIncrement: !0
                        }).createIndex(Bn.userMutationsIndex, Bn.userMutationsKeyPath, {
                            unique: !0
                        }),
                        e.createObjectStore(zn.store)
                    }(e),
                    fi(e),
                    function(e) {
                        e.createObjectStore(Vn.store)
                    }(e));
                    var a = ir.resolve();
                    return n < 3 && r >= 3 && (0 !== n && (function(e) {
                        e.deleteObjectStore(Gn.store),
                        e.deleteObjectStore(Hn.store),
                        e.deleteObjectStore(Kn.store)
                    }(e),
                    fi(e)),
                    a = a.next((function() {
                        return function(e) {
                            var t = e.store(Kn.store)
                              , n = new Kn(0,0,k.min().toTimestamp(),0);
                            return t.put(Kn.key, n)
                        }(o)
                    }
                    ))),
                    n < 4 && r >= 4 && (0 !== n && (a = a.next((function() {
                        return function(e, t) {
                            return t.store(Bn.store).Nt().next((function(n) {
                                e.deleteObjectStore(Bn.store),
                                e.createObjectStore(Bn.store, {
                                    keyPath: Bn.keyPath,
                                    autoIncrement: !0
                                }).createIndex(Bn.userMutationsIndex, Bn.userMutationsKeyPath, {
                                    unique: !0
                                });
                                var r = t.store(Bn.store)
                                  , i = n.map((function(e) {
                                    return r.put(e)
                                }
                                ));
                                return ir.waitFor(i)
                            }
                            ))
                        }(e, o)
                    }
                    ))),
                    a = a.next((function() {
                        !function(e) {
                            e.createObjectStore(Yn.store, {
                                keyPath: Yn.keyPath
                            })
                        }(e)
                    }
                    ))),
                    n < 5 && r >= 5 && (a = a.next((function() {
                        return i.Re(o)
                    }
                    ))),
                    n < 6 && r >= 6 && (a = a.next((function() {
                        return function(e) {
                            e.createObjectStore(Wn.store)
                        }(e),
                        i.be(o)
                    }
                    ))),
                    n < 7 && r >= 7 && (a = a.next((function() {
                        return i.ve(o)
                    }
                    ))),
                    n < 8 && r >= 8 && (a = a.next((function() {
                        return i.Pe(e, o)
                    }
                    ))),
                    n < 9 && r >= 9 && (a = a.next((function() {
                        !function(e) {
                            e.objectStoreNames.contains("remoteDocumentChanges") && e.deleteObjectStore("remoteDocumentChanges")
                        }(e),
                        function(e) {
                            var t = e.objectStore(Vn.store);
                            t.createIndex(Vn.readTimeIndex, Vn.readTimeIndexPath, {
                                unique: !1
                            }),
                            t.createIndex(Vn.collectionReadTimeIndex, Vn.collectionReadTimeIndexPath, {
                                unique: !1
                            })
                        }(t)
                    }
                    ))),
                    n < 10 && r >= 10 && (a = a.next((function() {
                        return i.Ve(o)
                    }
                    ))),
                    n < 11 && r >= 11 && (a = a.next((function() {
                        !function(e) {
                            e.createObjectStore(Xn.store, {
                                keyPath: Xn.keyPath
                            })
                        }(e),
                        function(e) {
                            e.createObjectStore(Jn.store, {
                                keyPath: Jn.keyPath
                            })
                        }(e)
                    }
                    ))),
                    a
                }
                ,
                e.prototype.be = function(e) {
                    var t = 0;
                    return e.store(Vn.store).$t((function(e, n) {
                        t += Ur(n)
                    }
                    )).next((function() {
                        var n = new Wn(t);
                        return e.store(Wn.store).put(Wn.key, n)
                    }
                    ))
                }
                ,
                e.prototype.Re = function(e) {
                    var t = this
                      , n = e.store(Un.store)
                      , r = e.store(Bn.store);
                    return n.Nt().next((function(n) {
                        return ir.forEach(n, (function(n) {
                            var i = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]);
                            return r.Nt(Bn.userMutationsIndex, i).next((function(r) {
                                return ir.forEach(r, (function(r) {
                                    y(r.userId === n.userId);
                                    var i = kr(t.R, r);
                                    return Fr(e, n.userId, i).next((function() {}
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.ve = function(e) {
                    var t = e.store(Gn.store)
                      , n = e.store(Vn.store);
                    return e.store(Kn.store).get(Kn.key).next((function(e) {
                        var r = [];
                        return n.$t((function(n, i) {
                            var o = new P(n)
                              , a = function(e) {
                                return [0, Nn(e)]
                            }(o);
                            r.push(t.get(a).next((function(n) {
                                return n ? ir.resolve() : function(n) {
                                    return t.put(new Gn(0,Nn(n),e.highestListenSequenceNumber))
                                }(o)
                            }
                            )))
                        }
                        )).next((function() {
                            return ir.waitFor(r)
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.Pe = function(e, t) {
                    e.createObjectStore(Qn.store, {
                        keyPath: Qn.keyPath
                    });
                    var n = t.store(Qn.store)
                      , r = new Nr
                      , i = function(e) {
                        if (r.add(e)) {
                            var t = e.lastSegment()
                              , i = e.popLast();
                            return n.put({
                                collectionId: t,
                                parent: Nn(i)
                            })
                        }
                    };
                    return t.store(Vn.store).$t({
                        Ft: !0
                    }, (function(e, t) {
                        var n = new P(e);
                        return i(n.popLast())
                    }
                    )).next((function() {
                        return t.store(zn.store).$t({
                            Ft: !0
                        }, (function(e, t) {
                            e[0];
                            var n = e[1];
                            e[2];
                            var r = jn(n);
                            return i(r.popLast())
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.Ve = function(e) {
                    var t = this
                      , n = e.store(Hn.store);
                    return n.$t((function(e, r) {
                        var i = Tr(r)
                          , o = Or(t.R, i);
                        return n.put(o)
                    }
                    ))
                }
                ,
                e
            }();
            function fi(e) {
                e.createObjectStore(Gn.store, {
                    keyPath: Gn.keyPath
                }).createIndex(Gn.documentTargetsIndex, Gn.documentTargetsKeyPath, {
                    unique: !0
                }),
                e.createObjectStore(Hn.store, {
                    keyPath: Hn.keyPath
                }).createIndex(Hn.queryTargetsIndexName, Hn.queryTargetsKeyPath, {
                    unique: !0
                }),
                e.createObjectStore(Kn.store)
            }
            var pi = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time."
              , hi = function() {
                function e(t, n, r, i, o, a, s, l, d, f) {
                    if (this.allowTabSynchronization = t,
                    this.persistenceKey = n,
                    this.clientId = r,
                    this.Se = o,
                    this.window = a,
                    this.document = s,
                    this.De = d,
                    this.Ce = f,
                    this.Ne = null,
                    this.xe = !1,
                    this.isPrimary = !1,
                    this.networkEnabled = !0,
                    this.ke = null,
                    this.inForeground = !1,
                    this.Fe = null,
                    this.$e = null,
                    this.Oe = Number.NEGATIVE_INFINITY,
                    this.Me = function(e) {
                        return Promise.resolve()
                    }
                    ,
                    !e.yt())
                        throw new c(u.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
                    this.referenceDelegate = new ni(this,i),
                    this.Le = n + "main",
                    this.R = new br(l),
                    this.Be = new ar(this.Le,11,new di(this.R)),
                    this.qe = new Hr(this.referenceDelegate,this.R),
                    this.Ut = new Zr,
                    this.Ue = function(e, t) {
                        return new ai(e,t)
                    }(this.R, this.Ut),
                    this.Ke = new Ar,
                    this.window && this.window.localStorage ? this.Qe = this.window.localStorage : (this.Qe = null,
                    !1 === f && h("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))
                }
                return e.prototype.start = function() {
                    var e = this;
                    return this.je().then((function() {
                        if (!e.isPrimary && !e.allowTabSynchronization)
                            throw new c(u.FAILED_PRECONDITION,pi);
                        return e.We(),
                        e.Ge(),
                        e.ze(),
                        e.runTransaction("getHighestListenSequenceNumber", "readonly", (function(t) {
                            return e.qe.getHighestSequenceNumber(t)
                        }
                        ))
                    }
                    )).then((function(t) {
                        e.Ne = new l(t,e.De)
                    }
                    )).then((function() {
                        e.xe = !0
                    }
                    )).catch((function(t) {
                        return e.Be && e.Be.close(),
                        Promise.reject(t)
                    }
                    ))
                }
                ,
                e.prototype.He = function(e) {
                    var t = this;
                    return this.Me = function(n) {
                        return (0,
                        r.__awaiter)(t, void 0, void 0, (function() {
                            return (0,
                            r.__generator)(this, (function(t) {
                                return this.started ? [2, e(n)] : [2]
                            }
                            ))
                        }
                        ))
                    }
                    ,
                    e(this.isPrimary)
                }
                ,
                e.prototype.setDatabaseDeletedListener = function(e) {
                    var t = this;
                    this.Be.vt((function(n) {
                        return (0,
                        r.__awaiter)(t, void 0, void 0, (function() {
                            return (0,
                            r.__generator)(this, (function(t) {
                                switch (t.label) {
                                case 0:
                                    return null === n.newVersion ? [4, e()] : [3, 2];
                                case 1:
                                    t.sent(),
                                    t.label = 2;
                                case 2:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.setNetworkEnabled = function(e) {
                    var t = this;
                    this.networkEnabled !== e && (this.networkEnabled = e,
                    this.Se.enqueueAndForget((function() {
                        return (0,
                        r.__awaiter)(t, void 0, void 0, (function() {
                            return (0,
                            r.__generator)(this, (function(e) {
                                switch (e.label) {
                                case 0:
                                    return this.started ? [4, this.je()] : [3, 2];
                                case 1:
                                    e.sent(),
                                    e.label = 2;
                                case 2:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    }
                    )))
                }
                ,
                e.prototype.je = function() {
                    var e = this;
                    return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (function(t) {
                        return gi(t).put(new Yn(e.clientId,Date.now(),e.networkEnabled,e.inForeground)).next((function() {
                            if (e.isPrimary)
                                return e.Je(t).next((function(t) {
                                    t || (e.isPrimary = !1,
                                    e.Se.enqueueRetryable((function() {
                                        return e.Me(!1)
                                    }
                                    )))
                                }
                                ))
                        }
                        )).next((function() {
                            return e.Ye(t)
                        }
                        )).next((function(n) {
                            return e.isPrimary && !n ? e.Xe(t).next((function() {
                                return !1
                            }
                            )) : !!n && e.Ze(t).next((function() {
                                return !0
                            }
                            ))
                        }
                        ))
                    }
                    )).catch((function(t) {
                        if (ur(t))
                            return p("IndexedDbPersistence", "Failed to extend owner lease: ", t),
                            e.isPrimary;
                        if (!e.allowTabSynchronization)
                            throw t;
                        return p("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", t),
                        !1
                    }
                    )).then((function(t) {
                        e.isPrimary !== t && e.Se.enqueueRetryable((function() {
                            return e.Me(t)
                        }
                        )),
                        e.isPrimary = t
                    }
                    ))
                }
                ,
                e.prototype.Je = function(e) {
                    var t = this;
                    return mi(e).get(Fn.key).next((function(e) {
                        return ir.resolve(t.tn(e))
                    }
                    ))
                }
                ,
                e.prototype.en = function(e) {
                    return gi(e).delete(this.clientId)
                }
                ,
                e.prototype.nn = function() {
                    return (0,
                    r.__awaiter)(this, void 0, void 0, (function() {
                        var e, t, n, i, o = this;
                        return (0,
                        r.__generator)(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return !this.isPrimary || this.sn(this.Oe, 18e5) ? [3, 2] : (this.Oe = Date.now(),
                                [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function(e) {
                                    var t = mr(e, Yn.store);
                                    return t.Nt().next((function(e) {
                                        var n = o.rn(e, 18e5)
                                          , r = e.filter((function(e) {
                                            return -1 === n.indexOf(e)
                                        }
                                        ));
                                        return ir.forEach(r, (function(e) {
                                            return t.delete(e.clientId)
                                        }
                                        )).next((function() {
                                            return r
                                        }
                                        ))
                                    }
                                    ))
                                }
                                )).catch((function() {
                                    return []
                                }
                                ))]);
                            case 1:
                                if (e = r.sent(),
                                this.Qe)
                                    for (t = 0,
                                    n = e; t < n.length; t++)
                                        i = n[t],
                                        this.Qe.removeItem(this.on(i.clientId));
                                r.label = 2;
                            case 2:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.ze = function() {
                    var e = this;
                    this.$e = this.Se.enqueueAfterDelay("client_metadata_refresh", 4e3, (function() {
                        return e.je().then((function() {
                            return e.nn()
                        }
                        )).then((function() {
                            return e.ze()
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.tn = function(e) {
                    return !!e && e.ownerId === this.clientId
                }
                ,
                e.prototype.Ye = function(e) {
                    var t = this;
                    return this.Ce ? ir.resolve(!0) : mi(e).get(Fn.key).next((function(n) {
                        if (null !== n && t.sn(n.leaseTimestampMs, 5e3) && !t.cn(n.ownerId)) {
                            if (t.tn(n) && t.networkEnabled)
                                return !0;
                            if (!t.tn(n)) {
                                if (!n.allowTabSynchronization)
                                    throw new c(u.FAILED_PRECONDITION,pi);
                                return !1
                            }
                        }
                        return !(!t.networkEnabled || !t.inForeground) || gi(e).Nt().next((function(e) {
                            return void 0 === t.rn(e, 5e3).find((function(e) {
                                if (t.clientId !== e.clientId) {
                                    var n = !t.networkEnabled && e.networkEnabled
                                      , r = !t.inForeground && e.inForeground
                                      , i = t.networkEnabled === e.networkEnabled;
                                    if (n || r && i)
                                        return !0
                                }
                                return !1
                            }
                            ))
                        }
                        ))
                    }
                    )).next((function(e) {
                        return t.isPrimary !== e && p("IndexedDbPersistence", "Client " + (e ? "is" : "is not") + " eligible for a primary lease."),
                        e
                    }
                    ))
                }
                ,
                e.prototype.shutdown = function() {
                    return (0,
                    r.__awaiter)(this, void 0, void 0, (function() {
                        var e = this;
                        return (0,
                        r.__generator)(this, (function(t) {
                            switch (t.label) {
                            case 0:
                                return this.xe = !1,
                                this.un(),
                                this.$e && (this.$e.cancel(),
                                this.$e = null),
                                this.an(),
                                this.hn(),
                                [4, this.Be.runTransaction("shutdown", "readwrite", [Fn.store, Yn.store], (function(t) {
                                    var n = new hr(t,l.o);
                                    return e.Xe(n).next((function() {
                                        return e.en(n)
                                    }
                                    ))
                                }
                                ))];
                            case 1:
                                return t.sent(),
                                this.Be.close(),
                                this.ln(),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.rn = function(e, t) {
                    var n = this;
                    return e.filter((function(e) {
                        return n.sn(e.updateTimeMs, t) && !n.cn(e.clientId)
                    }
                    ))
                }
                ,
                e.prototype.fn = function() {
                    var e = this;
                    return this.runTransaction("getActiveClients", "readonly", (function(t) {
                        return gi(t).Nt().next((function(t) {
                            return e.rn(t, 18e5).map((function(e) {
                                return e.clientId
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                ,
                Object.defineProperty(e.prototype, "started", {
                    get: function() {
                        return this.xe
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.getMutationQueue = function(e) {
                    return Br.Qt(e, this.R, this.Ut, this.referenceDelegate)
                }
                ,
                e.prototype.getTargetCache = function() {
                    return this.qe
                }
                ,
                e.prototype.getRemoteDocumentCache = function() {
                    return this.Ue
                }
                ,
                e.prototype.getIndexManager = function() {
                    return this.Ut
                }
                ,
                e.prototype.getBundleCache = function() {
                    return this.Ke
                }
                ,
                e.prototype.runTransaction = function(e, t, n) {
                    var r = this;
                    p("IndexedDbPersistence", "Starting transaction:", e);
                    var i, o = "readonly" === t ? "readonly" : "readwrite";
                    return this.Be.runTransaction(e, o, er, (function(o) {
                        return i = new hr(o,r.Ne ? r.Ne.next() : l.o),
                        "readwrite-primary" === t ? r.Je(i).next((function(e) {
                            return !!e || r.Ye(i)
                        }
                        )).next((function(t) {
                            if (!t)
                                throw h("Failed to obtain primary lease for action '" + e + "'."),
                                r.isPrimary = !1,
                                r.Se.enqueueRetryable((function() {
                                    return r.Me(!1)
                                }
                                )),
                                new c(u.FAILED_PRECONDITION,tr);
                            return n(i)
                        }
                        )).next((function(e) {
                            return r.Ze(i).next((function() {
                                return e
                            }
                            ))
                        }
                        )) : r.dn(i).next((function() {
                            return n(i)
                        }
                        ))
                    }
                    )).then((function(e) {
                        return i.raiseOnCommittedEvent(),
                        e
                    }
                    ))
                }
                ,
                e.prototype.dn = function(e) {
                    var t = this;
                    return mi(e).get(Fn.key).next((function(e) {
                        if (null !== e && t.sn(e.leaseTimestampMs, 5e3) && !t.cn(e.ownerId) && !t.tn(e) && !(t.Ce || t.allowTabSynchronization && e.allowTabSynchronization))
                            throw new c(u.FAILED_PRECONDITION,pi)
                    }
                    ))
                }
                ,
                e.prototype.Ze = function(e) {
                    var t = new Fn(this.clientId,this.allowTabSynchronization,Date.now());
                    return mi(e).put(Fn.key, t)
                }
                ,
                e.yt = function() {
                    return ar.yt()
                }
                ,
                e.prototype.Xe = function(e) {
                    var t = this
                      , n = mi(e);
                    return n.get(Fn.key).next((function(e) {
                        return t.tn(e) ? (p("IndexedDbPersistence", "Releasing primary lease."),
                        n.delete(Fn.key)) : ir.resolve()
                    }
                    ))
                }
                ,
                e.prototype.sn = function(e, t) {
                    var n = Date.now();
                    return !(e < n - t || e > n && (h("Detected an update time that is in the future: " + e + " > " + n),
                    1))
                }
                ,
                e.prototype.We = function() {
                    var e = this;
                    null !== this.document && "function" == typeof this.document.addEventListener && (this.Fe = function() {
                        e.Se.enqueueAndForget((function() {
                            return e.inForeground = "visible" === e.document.visibilityState,
                            e.je()
                        }
                        ))
                    }
                    ,
                    this.document.addEventListener("visibilitychange", this.Fe),
                    this.inForeground = "visible" === this.document.visibilityState)
                }
                ,
                e.prototype.an = function() {
                    this.Fe && (this.document.removeEventListener("visibilitychange", this.Fe),
                    this.Fe = null)
                }
                ,
                e.prototype.Ge = function() {
                    var e, t = this;
                    "function" == typeof (null === (e = this.window) || void 0 === e ? void 0 : e.addEventListener) && (this.ke = function() {
                        t.un(),
                        (0,
                        i.isSafari)() && navigator.appVersion.match("Version/14") && t.Se.enterRestrictedMode(!0),
                        t.Se.enqueueAndForget((function() {
                            return t.shutdown()
                        }
                        ))
                    }
                    ,
                    this.window.addEventListener("pagehide", this.ke))
                }
                ,
                e.prototype.hn = function() {
                    this.ke && (this.window.removeEventListener("pagehide", this.ke),
                    this.ke = null)
                }
                ,
                e.prototype.cn = function(e) {
                    var t;
                    try {
                        var n = null !== (null === (t = this.Qe) || void 0 === t ? void 0 : t.getItem(this.on(e)));
                        return p("IndexedDbPersistence", "Client '" + e + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"),
                        n
                    } catch (e) {
                        return h("IndexedDbPersistence", "Failed to get zombied client id.", e),
                        !1
                    }
                }
                ,
                e.prototype.un = function() {
                    if (this.Qe)
                        try {
                            this.Qe.setItem(this.on(this.clientId), String(Date.now()))
                        } catch (e) {
                            h("Failed to set zombie client id.", e)
                        }
                }
                ,
                e.prototype.ln = function() {
                    if (this.Qe)
                        try {
                            this.Qe.removeItem(this.on(this.clientId))
                        } catch (e) {}
                }
                ,
                e.prototype.on = function(e) {
                    return "firestore_zombie_" + this.persistenceKey + "_" + e
                }
                ,
                e
            }();
            function mi(e) {
                return mr(e, Fn.store)
            }
            function gi(e) {
                return mr(e, Yn.store)
            }
            function vi(e, t) {
                var n = e.projectId;
                return e.isDefaultDatabase || (n += "." + e.database),
                "firestore/" + t + "/" + n + "/"
            }
            var yi = function(e, t) {
                this.progress = e,
                this.wn = t
            }
              , bi = function() {
                function e(e, t, n) {
                    this.Ue = e,
                    this._n = t,
                    this.Ut = n
                }
                return e.prototype.mn = function(e, t) {
                    var n = this;
                    return this._n.getAllMutationBatchesAffectingDocumentKey(e, t).next((function(r) {
                        return n.yn(e, t, r)
                    }
                    ))
                }
                ,
                e.prototype.yn = function(e, t, n) {
                    return this.Ue.getEntry(e, t).next((function(e) {
                        for (var t = 0, r = n; t < r.length; t++)
                            r[t].applyToLocalView(e);
                        return e
                    }
                    ))
                }
                ,
                e.prototype.gn = function(e, t) {
                    e.forEach((function(e, n) {
                        for (var r = 0, i = t; r < i.length; r++)
                            i[r].applyToLocalView(n)
                    }
                    ))
                }
                ,
                e.prototype.pn = function(e, t) {
                    var n = this;
                    return this.Ue.getEntries(e, t).next((function(t) {
                        return n.En(e, t).next((function() {
                            return t
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.En = function(e, t) {
                    var n = this;
                    return this._n.getAllMutationBatchesAffectingDocumentKeys(e, t).next((function(e) {
                        return n.gn(t, e)
                    }
                    ))
                }
                ,
                e.prototype.getDocumentsMatchingQuery = function(e, t, n) {
                    return function(e) {
                        return W.isDocumentKey(e.path) && null === e.collectionGroup && 0 === e.filters.length
                    }(t) ? this.Tn(e, t.path) : je(t) ? this.In(e, t, n) : this.An(e, t, n)
                }
                ,
                e.prototype.Tn = function(e, t) {
                    return this.mn(e, new W(t)).next((function(e) {
                        var t = Lt();
                        return e.isFoundDocument() && (t = t.insert(e.key, e)),
                        t
                    }
                    ))
                }
                ,
                e.prototype.In = function(e, t, n) {
                    var r = this
                      , i = t.collectionGroup
                      , o = Lt();
                    return this.Ut.getCollectionParents(e, i).next((function(a) {
                        return ir.forEach(a, (function(a) {
                            var s = function(e, t) {
                                return new Ae(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)
                            }(t, a.child(i));
                            return r.An(e, s, n).next((function(e) {
                                e.forEach((function(e, t) {
                                    o = o.insert(e, t)
                                }
                                ))
                            }
                            ))
                        }
                        )).next((function() {
                            return o
                        }
                        ))
                    }
                    ))
                }
                ,
                e.prototype.An = function(e, t, n) {
                    var r, i, o = this;
                    return this.Ue.getDocumentsMatchingQuery(e, t, n).next((function(n) {
                        return r = n,
                        o._n.getAllMutationBatchesAffectingQuery(e, t)
                    }
                    )).next((function(t) {
                        return i = t,
                        o.Rn(e, i, r).next((function(e) {
                            r = e;
                            for (var t = 0, n = i; t < n.length; t++)
                                for (var o = n[t], a = 0, s = o.mutations; a < s.length; a++) {
                                    var l = s[a]
                                      , u = l.key
                                      , c = r.get(u);
                                    null == c && (c = ue.newInvalidDocument(u),
                                    r = r.insert(u, c)),
                                    ht(l, c, o.localWriteTime),
                                    c.isFoundDocument() || (r = r.remove(u))
                                }
                        }
                        ))
                    }
                    )).next((function() {
                        return r.forEach((function(e, n) {
                            qe(t, n) || (r = r.remove(e))
                        }
                        )),
                        r
                    }
                    ))
                }
                ,
                e.prototype.Rn = function(e, t, n) {
                    for (var r = zt(), i = 0, o = t; i < o.length; i++)
                        for (var a = 0, s = o[i].mutations; a < s.length; a++) {
                            var l = s[a];
                            l instanceof bt && null === n.get(l.key) && (r = r.add(l.key))
                        }
                    var u = n;
                    return this.Ue.getEntries(e, r).next((function(e) {
                        return e.forEach((function(e, t) {
                            t.isFoundDocument() && (u = u.insert(e, t))
                        }
                        )),
                        u
                    }
                    ))
                }
                ,
                e
            }()
              , wi = function() {
                function e(e, t, n, r) {
                    this.targetId = e,
                    this.fromCache = t,
                    this.bn = n,
                    this.vn = r
                }
                return e.Pn = function(t, n) {
                    for (var r = zt(), i = zt(), o = 0, a = n.docChanges; o < a.length; o++) {
                        var s = a[o];
                        switch (s.type) {
                        case 0:
                            r = r.add(s.doc.key);
                            break;
                        case 1:
                            i = i.add(s.doc.key)
                        }
                    }
                    return new e(t,n.fromCache,r,i)
                }
                ,
                e
            }()
              , _i = function() {
                function e() {}
                return e.prototype.Vn = function(e) {
                    this.Sn = e
                }
                ,
                e.prototype.getDocumentsMatchingQuery = function(e, t, n, r) {
                    var i = this;
                    return function(e) {
                        return 0 === e.filters.length && null === e.limit && null == e.startAt && null == e.endAt && (0 === e.explicitOrderBy.length || 1 === e.explicitOrderBy.length && e.explicitOrderBy[0].field.isKeyField())
                    }(t) || n.isEqual(k.min()) ? this.Dn(e, t) : this.Sn.pn(e, r).next((function(a) {
                        var s = i.Cn(t, a);
                        return (Me(t) || Ne(t)) && i.Nn(t.limitType, s, r, n) ? i.Dn(e, t) : (f() <= o.LogLevel.DEBUG && p("QueryEngine", "Re-using previous result from %s to execute query: %s", n.toString(), $e(t)),
                        i.Sn.getDocumentsMatchingQuery(e, t, n).next((function(e) {
                            return s.forEach((function(t) {
                                e = e.insert(t.key, t)
                            }
                            )),
                            e
                        }
                        )))
                    }
                    ))
                }
                ,
                e.prototype.Cn = function(e, t) {
                    var n = new Mt(Ve(e));
                    return t.forEach((function(t, r) {
                        qe(e, r) && (n = n.add(r))
                    }
                    )),
                    n
                }
                ,
                e.prototype.Nn = function(e, t, n, r) {
                    if (n.size !== t.size)
                        return !0;
                    var i = "F" === e ? t.last() : t.first();
                    return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0)
                }
                ,
                e.prototype.Dn = function(e, t) {
                    return f() <= o.LogLevel.DEBUG && p("QueryEngine", "Using full collection scan to execute query:", $e(t)),
                    this.Sn.getDocumentsMatchingQuery(e, t, k.min())
                }
                ,
                e
            }()
              , Ei = function() {
                function e(e, t, n, r) {
                    this.persistence = e,
                    this.xn = t,
                    this.R = r,
                    this.kn = new At(E),
                    this.Fn = new ii((function(e) {
                        return fe(e)
                    }
                    ),pe),
                    this.$n = k.min(),
                    this._n = e.getMutationQueue(n),
                    this.On = e.getRemoteDocumentCache(),
                    this.qe = e.getTargetCache(),
                    this.Mn = new bi(this.On,this._n,this.persistence.getIndexManager()),
                    this.Ke = e.getBundleCache(),
                    this.xn.Vn(this.Mn)
                }
                return e.prototype.collectGarbage = function(e) {
                    var t = this;
                    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
                        return e.collect(n, t.kn)
                    }
                    ))
                }
                ,
                e
            }();
            function xi(e, t, n, r) {
                return new Ei(e,t,n,r)
            }
            function Ci(e, t) {
                return (0,
                r.__awaiter)(this, void 0, void 0, (function() {
                    var n, i, o, a;
                    return (0,
                    r.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return n = b(e),
                            i = n._n,
                            o = n.Mn,
                            [4, n.persistence.runTransaction("Handle user change", "readonly", (function(e) {
                                var r;
                                return n._n.getAllMutationBatches(e).next((function(a) {
                                    return r = a,
                                    i = n.persistence.getMutationQueue(t),
                                    o = new bi(n.On,i,n.persistence.getIndexManager()),
                                    i.getAllMutationBatches(e)
                                }
                                )).next((function(t) {
                                    for (var n = [], i = [], a = zt(), s = 0, l = r; s < l.length; s++) {
                                        var u = l[s];
                                        n.push(u.batchId);
                                        for (var c = 0, d = u.mutations; c < d.length; c++) {
                                            var f = d[c];
                                            a = a.add(f.key)
                                        }
                                    }
                                    for (var p = 0, h = t; p < h.length; p++) {
                                        var m = h[p];
                                        i.push(m.batchId);
                                        for (var g = 0, v = m.mutations; g < v.length; g++) {
                                            var y = v[g];
                                            a = a.add(y.key)
                                        }
                                    }
                                    return o.pn(e, a).next((function(e) {
                                        return {
                                            Ln: e,
                                            removedBatchIds: n,
                                            addedBatchIds: i
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            ))];
                        case 1:
                            return a = r.sent(),
                            [2, (n._n = i,
                            n.Mn = o,
                            n.xn.Vn(n.Mn),
                            a)]
                        }
                    }
                    ))
                }
                ))
            }
            function Si(e, t) {
                var n = b(e);
                return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(e) {
                    var r = t.batch.keys()
                      , i = n.On.newChangeBuffer({
                        trackRemovals: !0
                    });
                    return function(e, t, n, r) {
                        var i = n.batch
                          , o = i.keys()
                          , a = ir.resolve();
                        return o.forEach((function(e) {
                            a = a.next((function() {
                                return r.getEntry(t, e)
                            }
                            )).next((function(t) {
                                var o = n.docVersions.get(e);
                                y(null !== o),
                                t.version.compareTo(o) < 0 && (i.applyToRemoteDocument(t, n),
                                t.isValidDocument() && r.addEntry(t, n.commitVersion))
                            }
                            ))
                        }
                        )),
                        a.next((function() {
                            return e._n.removeMutationBatch(t, i)
                        }
                        ))
                    }(n, e, t, i).next((function() {
                        return i.apply(e)
                    }
                    )).next((function() {
                        return n._n.performConsistencyCheck(e)
                    }
                    )).next((function() {
                        return n.Mn.pn(e, r)
                    }
                    ))
                }
                ))
            }
            function ki(e) {
                var t = b(e);
                return t.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(e) {
                    return t.qe.getLastRemoteSnapshotVersion(e)
                }
                ))
            }
            function Ti(e, t) {
                var n = b(e)
                  , r = t.snapshotVersion
                  , i = n.kn;
                return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(e) {
                    var o = n.On.newChangeBuffer({
                        trackRemovals: !0
                    });
                    i = n.kn;
                    var a = [];
                    t.targetChanges.forEach((function(t, o) {
                        var s = i.get(o);
                        if (s) {
                            a.push(n.qe.removeMatchingKeys(e, t.removedDocuments, o).next((function() {
                                return n.qe.addMatchingKeys(e, t.addedDocuments, o)
                            }
                            )));
                            var l = t.resumeToken;
                            if (l.approximateByteSize() > 0) {
                                var u = s.withResumeToken(l, r).withSequenceNumber(e.currentSequenceNumber);
                                i = i.insert(o, u),
                                function(e, t, n) {
                                    return y(t.resumeToken.approximateByteSize() > 0),
                                    0 === e.resumeToken.approximateByteSize() || t.snapshotVersion.toMicroseconds() - e.snapshotVersion.toMicroseconds() >= 3e8 || n.addedDocuments.size + n.modifiedDocuments.size + n.removedDocuments.size > 0
                                }(s, u, t) && a.push(n.qe.updateTargetData(e, u))
                            }
                        }
                    }
                    ));
                    var s = Dt();
                    if (t.documentUpdates.forEach((function(r, i) {
                        t.resolvedLimboDocuments.has(r) && a.push(n.persistence.referenceDelegate.updateLimboDocument(e, r))
                    }
                    )),
                    a.push(Oi(e, o, t.documentUpdates, r, void 0).next((function(e) {
                        s = e
                    }
                    ))),
                    !r.isEqual(k.min())) {
                        var l = n.qe.getLastRemoteSnapshotVersion(e).next((function(t) {
                            return n.qe.setTargetsMetadata(e, e.currentSequenceNumber, r)
                        }
                        ));
                        a.push(l)
                    }
                    return ir.waitFor(a).next((function() {
                        return o.apply(e)
                    }
                    )).next((function() {
                        return n.Mn.En(e, s)
                    }
                    )).next((function() {
                        return s
                    }
                    ))
                }
                )).then((function(e) {
                    return n.kn = i,
                    e
                }
                ))
            }
            function Oi(e, t, n, r, i) {
                var o = zt();
                return n.forEach((function(e) {
                    return o = o.add(e)
                }
                )),
                t.getEntries(e, o).next((function(e) {
                    var o = Dt();
                    return n.forEach((function(n, a) {
                        var s = e.get(n)
                          , l = (null == i ? void 0 : i.get(n)) || r;
                        a.isNoDocument() && a.version.isEqual(k.min()) ? (t.removeEntry(n, l),
                        o = o.insert(n, a)) : !s.isValidDocument() || a.version.compareTo(s.version) > 0 || 0 === a.version.compareTo(s.version) && s.hasPendingWrites ? (t.addEntry(a, l),
                        o = o.insert(n, a)) : p("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", s.version, " Watch version:", a.version)
                    }
                    )),
                    o
                }
                ))
            }
            function Ii(e, t) {
                var n = b(e);
                return n.persistence.runTransaction("Get next mutation batch", "readonly", (function(e) {
                    return void 0 === t && (t = -1),
                    n._n.getNextMutationBatchAfterBatchId(e, t)
                }
                ))
            }
            function Ai(e, t) {
                var n = b(e);
                return n.persistence.runTransaction("Allocate target", "readwrite", (function(e) {
                    var r;
                    return n.qe.getTargetData(e, t).next((function(i) {
                        return i ? (r = i,
                        ir.resolve(r)) : n.qe.allocateTargetId(e).next((function(i) {
                            return r = new yr(t,i,0,e.currentSequenceNumber),
                            n.qe.addTargetData(e, r).next((function() {
                                return r
                            }
                            ))
                        }
                        ))
                    }
                    ))
                }
                )).then((function(e) {
                    var r = n.kn.get(e.targetId);
                    return (null === r || e.snapshotVersion.compareTo(r.snapshotVersion) > 0) && (n.kn = n.kn.insert(e.targetId, e),
                    n.Fn.set(t, e.targetId)),
                    e
                }
                ))
            }
            function Pi(e, t, n) {
                return (0,
                r.__awaiter)(this, void 0, void 0, (function() {
                    var i, o, a, s;
                    return (0,
                    r.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            i = b(e),
                            o = i.kn.get(t),
                            a = n ? "readwrite" : "readwrite-primary",
                            r.label = 1;
                        case 1:
                            return r.trys.push([1, 4, , 5]),
                            n ? [3, 3] : [4, i.persistence.runTransaction("Release target", a, (function(e) {
                                return i.persistence.referenceDelegate.removeTarget(e, o)
                            }
                            ))];
                        case 2:
                            r.sent(),
                            r.label = 3;
                        case 3:
                            return [3, 5];
                        case 4:
                            if (!ur(s = r.sent()))
                                throw s;
                            return p("LocalStore", "Failed to update sequence numbers for target " + t + ": " + s),
                            [3, 5];
                        case 5:
                            return i.kn = i.kn.remove(t),
                            i.Fn.delete(o.target),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            function Ri(e, t, n) {
                var r = b(e)
                  , i = k.min()
                  , o = zt();
                return r.persistence.runTransaction("Execute query", "readonly", (function(e) {
                    return function(e, t, n) {
                        var r = b(e)
                          , i = r.Fn.get(n);
                        return void 0 !== i ? ir.resolve(r.kn.get(i)) : r.qe.getTargetData(t, n)
                    }(r, e, Fe(t)).next((function(t) {
                        if (t)
                            return i = t.lastLimboFreeSnapshotVersion,
                            r.qe.getMatchingKeysForTargetId(e, t.targetId).next((function(e) {
                                o = e
                            }
                            ))
                    }
                    )).next((function() {
                        return r.xn.getDocumentsMatchingQuery(e, t, n ? i : k.min(), n ? o : zt())
                    }
                    )).next((function(e) {
                        return {
                            documents: e,
                            Bn: o
                        }
                    }
                    ))
                }
                ))
            }
            function Mi(e, t) {
                var n = b(e)
                  , r = b(n.qe)
                  , i = n.kn.get(t);
                return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (function(e) {
                    return r.lt(e, t).next((function(e) {
                        return e ? e.target : null
                    }
                    ))
                }
                ))
            }
            function Ni(e) {
                var t = b(e);
                return t.persistence.runTransaction("Get new document changes", "readonly", (function(e) {
                    return function(e, t, n) {
                        var r = b(e)
                          , i = Dt()
                          , o = Er(n)
                          , a = ui(t)
                          , s = IDBKeyRange.lowerBound(o, !0);
                        return a.$t({
                            index: Vn.readTimeIndex,
                            range: s
                        }, (function(e, t) {
                            var n = wr(r.R, t);
                            i = i.insert(n.key, n),
                            o = t.readTime
                        }
                        )).next((function() {
                            return {
                                wn: i,
                                readTime: xr(o)
                            }
                        }
                        ))
                    }(t.On, e, t.$n)
                }
                )).then((function(e) {
                    var n = e.wn
                      , r = e.readTime;
                    return t.$n = r,
                    n
                }
                ))
            }
            function Zi(e) {
                return (0,
                r.__awaiter)(this, void 0, void 0, (function() {
                    var t;
                    return (0,
                    r.__generator)(this, (function(n) {
                        return [2, (t = b(e)).persistence.runTransaction("Synchronize last document change read time", "readonly", (function(e) {
                            return function(e) {
                                var t = ui(e)
                                  , n = k.min();
                                return t.$t({
                                    index: Vn.readTimeIndex,
                                    reverse: !0
                                }, (function(e, t, r) {
                                    t.readTime && (n = xr(t.readTime)),
                                    r.done()
                                }
                                )).next((function() {
                                    return n
                                }
                                ))
                            }(e)
                        }
                        )).then((function(e) {
                            t.$n = e
                        }
                        ))]
                    }
                    ))
                }
                ))
            }
            function Di(e, t, n, i) {
                return (0,
                r.__awaiter)(this, void 0, void 0, (function() {
                    var o, a, s, l, u, c, d, f, p, h;
                    return (0,
                    r.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            for (o = b(e),
                            a = zt(),
                            s = Dt(),
                            l = Ut(),
                            u = 0,
                            c = n; u < c.length; u++)
                                d = c[u],
                                f = t.qn(d.metadata.name),
                                d.document && (a = a.add(f)),
                                s = s.insert(f, t.Un(d)),
                                l = l.insert(f, t.Kn(d.metadata.readTime));
                            return p = o.On.newChangeBuffer({
                                trackRemovals: !0
                            }),
                            [4, Ai(o, function(e) {
                                return Fe(Re(P.fromString("__bundle__/docs/" + e)))
                            }(i))];
                        case 1:
                            return h = r.sent(),
                            [2, o.persistence.runTransaction("Apply bundle documents", "readwrite", (function(e) {
                                return Oi(e, p, s, k.min(), l).next((function(t) {
                                    return p.apply(e),
                                    t
                                }
                                )).next((function(t) {
                                    return o.qe.removeMatchingKeysForTargetId(e, h.targetId).next((function() {
                                        return o.qe.addMatchingKeys(e, a, h.targetId)
                                    }
                                    )).next((function() {
                                        return o.Mn.En(e, t)
                                    }
                                    )).next((function() {
                                        return t
                                    }
                                    ))
                                }
                                ))
                            }
                            ))]
                        }
                    }
                    ))
                }
                ))
            }
            function ji(e, t, n) {
                return void 0 === n && (n = zt()),
                (0,
                r.__awaiter)(this, void 0, void 0, (function() {
                    var i, o;
                    return (0,
                    r.__generator)(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, Ai(e, Fe(Ir(t.bundledQuery)))];
                        case 1:
                            return i = r.sent(),
                            [2, (o = b(e)).persistence.runTransaction("Save named query", "readwrite", (function(e) {
                                var r = sn(t.readTime);
                                if (i.snapshotVersion.compareTo(r) >= 0)
                                    return o.Ke.saveNamedQuery(e, t);
                                var a = i.withResumeToken(Z.EMPTY_BYTE_STRING, r);
                                return o.kn = o.kn.insert(a.targetId, a),
                                o.qe.updateTargetData(e, a).next((function() {
                                    return o.qe.removeMatchingKeysForTargetId(e, i.targetId)
                                }
                                )).next((function() {
                                    return o.qe.addMatchingKeys(e, n, i.targetId)
                                }
                                )).next((function() {
                                    return o.Ke.saveNamedQuery(e, t)
                                }
                                ))
                            }
                            ))]
                        }
                    }
                    ))
                }
                ))
            }
            var Li = function() {
                function e(e) {
                    this.R = e,
                    this.Qn = new Map,
                    this.jn = new Map
                }
                return e.prototype.getBundleMetadata = function(e, t) {
                    return ir.resolve(this.Qn.get(t))
                }
                ,
                e.prototype.saveBundleMetadata = function(e, t) {
                    var n;
                    return this.Qn.set(t.id, {
                        id: (n = t).id,
                        version: n.version,
                        createTime: sn(n.createTime)
                    }),
                    ir.resolve()
                }
                ,
                e.prototype.getNamedQuery = function(e, t) {
                    return ir.resolve(this.jn.get(t))
                }
                ,
                e.prototype.saveNamedQuery = function(e, t) {
                    return this.jn.set(t.name, function(e) {
                        return {
                            name: e.name,
                            query: Ir(e.bundledQuery),
                            readTime: sn(e.readTime)
                        }
                    }(t)),
                    ir.resolve()
                }
                ,
                e
            }()
              , Fi = function() {
                function e() {
                    this.Wn = new Mt(Ui.Gn),
                    this.zn = new Mt(Ui.Hn)
                }
                return e.prototype.isEmpty = function() {
                    return this.Wn.isEmpty()
                }
                ,
                e.prototype.addReference = function(e, t) {
                    var n = new Ui(e,t);
                    this.Wn = this.Wn.add(n),
                    this.zn = this.zn.add(n)
                }
                ,
                e.prototype.Jn = function(e, t) {
                    var n = this;
                    e.forEach((function(e) {
                        return n.addReference(e, t)
                    }
                    ))
                }
                ,
                e.prototype.removeReference = function(e, t) {
                    this.Yn(new Ui(e,t))
                }
                ,
                e.prototype.Xn = function(e, t) {
                    var n = this;
                    e.forEach((function(e) {
                        return n.removeReference(e, t)
                    }
                    ))
                }
                ,
                e.prototype.Zn = function(e) {
                    var t = this
                      , n = new W(new P([]))
                      , r = new Ui(n,e)
                      , i = new Ui(n,e + 1)
                      , o = [];
                    return this.zn.forEachInRange([r, i], (function(e) {
                        t.Yn(e),
                        o.push(e.key)
                    }
                    )),
                    o
                }
                ,
                e.prototype.ts = function() {
                    var e = this;
                    this.Wn.forEach((function(t) {
                        return e.Yn(t)
                    }
                    ))
                }
                ,
                e.prototype.Yn = function(e) {
                    this.Wn = this.Wn.delete(e),
                    this.zn = this.zn.delete(e)
                }
                ,
                e.prototype.es = function(e) {
                    var t = new W(new P([]))
                      , n = new Ui(t,e)
                      , r = new Ui(t,e + 1)
                      , i = zt();
                    return this.zn.forEachInRange([n, r], (function(e) {
                        i = i.add(e.key)
                    }
                    )),
                    i
                }
                ,
                e.prototype.containsKey = function(e) {
                    var t = new Ui(e,0)
                      , n = this.Wn.firstAfterOrEqual(t);
                    return null !== n && e.isEqual(n.key)
                }
                ,
                e
            }()
              , Ui = function() {
                function e(e, t) {
                    this.key = e,
                    this.ns = t
                }
                return e.Gn = function(e, t) {
                    return W.comparator(e.key, t.key) || E(e.ns, t.ns)
                }
                ,
                e.Hn = function(e, t) {
                    return E(e.ns, t.ns) || W.comparator(e.key, t.key)
                }
                ,
                e
            }()
              , Bi = function() {
                function e(e, t) {
                    this.Ut = e,
                    this.referenceDelegate = t,
                    this._n = [],
                    this.ss = 1,
                    this.rs = new Mt(Ui.Gn)
                }
                return e.prototype.checkEmpty = function(e) {
                    return ir.resolve(0 === this._n.length)
                }
                ,
                e.prototype.addMutationBatch = function(e, t, n, r) {
                    var i = this.ss;
                    this.ss++,
                    this._n.length > 0 && this._n[this._n.length - 1];
                    var o = new gr(i,t,n,r);
                    this._n.push(o);
                    for (var a = 0, s = r; a < s.length; a++) {
                        var l = s[a];
                        this.rs = this.rs.add(new Ui(l.key,i)),
                        this.Ut.addToCollectionParentIndex(e, l.key.path.popLast())
                    }
                    return ir.resolve(o)
                }
                ,
                e.prototype.lookupMutationBatch = function(e, t) {
                    return ir.resolve(this.os(t))
                }
                ,
                e.prototype.getNextMutationBatchAfterBatchId = function(e, t) {
                    var n = t + 1
                      , r = this.cs(n)
                      , i = r < 0 ? 0 : r;
                    return ir.resolve(this._n.length > i ? this._n[i] : null)
                }
                ,
                e.prototype.getHighestUnacknowledgedBatchId = function() {
                    return ir.resolve(0 === this._n.length ? -1 : this.ss - 1)
                }
                ,
                e.prototype.getAllMutationBatches = function(e) {
                    return ir.resolve(this._n.slice())
                }
                ,
                e.prototype.getAllMutationBatchesAffectingDocumentKey = function(e, t) {
                    var n = this
                      , r = new Ui(t,0)
                      , i = new Ui(t,Number.POSITIVE_INFINITY)
                      , o = [];
                    return this.rs.forEachInRange([r, i], (function(e) {
                        var t = n.os(e.ns);
                        o.push(t)
                    }
                    )),
                    ir.resolve(o)
                }
                ,
                e.prototype.getAllMutationBatchesAffectingDocumentKeys = function(e, t) {
                    var n = this
                      , r = new Mt(E);
                    return t.forEach((function(e) {
                        var t = new Ui(e,0)
                          , i = new Ui(e,Number.POSITIVE_INFINITY);
                        n.rs.forEachInRange([t, i], (function(e) {
                            r = r.add(e.ns)
                        }
                        ))
                    }
                    )),
                    ir.resolve(this.us(r))
                }
                ,
                e.prototype.getAllMutationBatchesAffectingQuery = function(e, t) {
                    var n = t.path
                      , r = n.length + 1
                      , i = n;
                    W.isDocumentKey(i) || (i = i.child(""));
                    var o = new Ui(new W(i),0)
                      , a = new Mt(E);
                    return this.rs.forEachWhile((function(e) {
                        var t = e.key.path;
                        return !!n.isPrefixOf(t) && (t.length === r && (a = a.add(e.ns)),
                        !0)
                    }
                    ), o),
                    ir.resolve(this.us(a))
                }
                ,
                e.prototype.us = function(e) {
                    var t = this
                      , n = [];
                    return e.forEach((function(e) {
                        var r = t.os(e);
                        null !== r && n.push(r)
                    }
                    )),
                    n
                }
                ,
                e.prototype.removeMutationBatch = function(e, t) {
                    var n = this;
                    y(0 === this.hs(t.batchId, "removed")),
                    this._n.shift();
                    var r = this.rs;
                    return ir.forEach(t.mutations, (function(i) {
                        var o = new Ui(i.key,t.batchId);
                        return r = r.delete(o),
                        n.referenceDelegate.markPotentiallyOrphaned(e, i.key)
                    }
                    )).next((function() {
                        n.rs = r
                    }
                    ))
                }
                ,
                e.prototype.Gt = function(e) {}
                ,
                e.prototype.containsKey = function(e, t) {
                    var n = new Ui(t,0)
                      , r = this.rs.firstAfterOrEqual(n);
                    return ir.resolve(t.isEqual(r && r.key))
                }
                ,
                e.prototype.performConsistencyCheck = function(e) {
                    return this._n.length,
                    ir.resolve()
                }
                ,
                e.prototype.hs = function(e, t) {
                    return this.cs(e)
                }
                ,
                e.prototype.cs = function(e) {
                    return 0 === this._n.length ? 0 : e - this._n[0].batchId
                }
                ,
                e.prototype.os = function(e) {
                    var t = this.cs(e);
                    return t < 0 || t >= this._n.length ? null : this._n[t]
                }
                ,
                e
            }()
              , zi = function() {
                function e(e, t) {
                    this.Ut = e,
                    this.ls = t,
                    this.docs = new At(W.comparator),
                    this.size = 0
                }
                return e.prototype.addEntry = function(e, t, n) {
                    var r = t.key
                      , i = this.docs.get(r)
                      , o = i ? i.size : 0
                      , a = this.ls(t);
                    return this.docs = this.docs.insert(r, {
                        document: t.clone(),
                        size: a,
                        readTime: n
                    }),
                    this.size += a - o,
                    this.Ut.addToCollectionParentIndex(e, r.path.popLast())
                }
                ,
                e.prototype.removeEntry = function(e) {
                    var t = this.docs.get(e);
                    t && (this.docs = this.docs.remove(e),
                    this.size -= t.size)
                }
                ,
                e.prototype.getEntry = function(e, t) {
                    var n = this.docs.get(t);
                    return ir.resolve(n ? n.document.clone() : ue.newInvalidDocument(t))
                }
                ,
                e.prototype.getEntries = function(e, t) {
                    var n = this
                      , r = Dt();
                    return t.forEach((function(e) {
                        var t = n.docs.get(e);
                        r = r.insert(e, t ? t.document.clone() : ue.newInvalidDocument(e))
                    }
                    )),
                    ir.resolve(r)
                }
                ,
                e.prototype.getDocumentsMatchingQuery = function(e, t, n) {
                    for (var r = Dt(), i = new W(t.path.child("")), o = this.docs.getIteratorFrom(i); o.hasNext(); ) {
                        var a = o.getNext()
                          , s = a.key
                          , l = a.value
                          , u = l.document
                          , c = l.readTime;
                        if (!t.path.isPrefixOf(s.path))
                            break;
                        c.compareTo(n) <= 0 || qe(t, u) && (r = r.insert(u.key, u.clone()))
                    }
                    return ir.resolve(r)
                }
                ,
                e.prototype.fs = function(e, t) {
                    return ir.forEach(this.docs, (function(e) {
                        return t(e)
                    }
                    ))
                }
                ,
                e.prototype.newChangeBuffer = function(e) {
                    return new $i(this)
                }
                ,
                e.prototype.getSize = function(e) {
                    return ir.resolve(this.size)
                }
                ,
                e
            }()
              , $i = function(e) {
                function t(t) {
                    var n = this;
                    return (n = e.call(this) || this).Ie = t,
                    n
                }
                return (0,
                r.__extends)(t, e),
                t.prototype.applyChanges = function(e) {
                    var t = this
                      , n = [];
                    return this.changes.forEach((function(r, i) {
                        i.document.isValidDocument() ? n.push(t.Ie.addEntry(e, i.document, t.getReadTime(r))) : t.Ie.removeEntry(r)
                    }
                    )),
                    ir.waitFor(n)
                }
                ,
                t.prototype.getFromCache = function(e, t) {
                    return this.Ie.getEntry(e, t)
                }
                ,
                t.prototype.getAllFromCache = function(e, t) {
                    return this.Ie.getEntries(e, t)
                }
                ,
                t
            }(oi)
              , qi = function() {
                function e(e) {
                    this.persistence = e,
                    this.ds = new ii((function(e) {
                        return fe(e)
                    }
                    ),pe),
                    this.lastRemoteSnapshotVersion = k.min(),
                    this.highestTargetId = 0,
                    this.ws = 0,
                    this._s = new Fi,
                    this.targetCount = 0,
                    this.ys = Wr.Jt()
                }
                return e.prototype.forEachTarget = function(e, t) {
                    return this.ds.forEach((function(e, n) {
                        return t(n)
                    }
                    )),
                    ir.resolve()
                }
                ,
                e.prototype.getLastRemoteSnapshotVersion = function(e) {
                    return ir.resolve(this.lastRemoteSnapshotVersion)
                }
                ,
                e.prototype.getHighestSequenceNumber = function(e) {
                    return ir.resolve(this.ws)
                }
                ,
                e.prototype.allocateTargetId = function(e) {
                    return this.highestTargetId = this.ys.next(),
                    ir.resolve(this.highestTargetId)
                }
                ,
                e.prototype.setTargetsMetadata = function(e, t, n) {
                    return n && (this.lastRemoteSnapshotVersion = n),
                    t > this.ws && (this.ws = t),
                    ir.resolve()
                }
                ,
                e.prototype.te = function(e) {
                    this.ds.set(e.target, e);
                    var t = e.targetId;
                    t > this.highestTargetId && (this.ys = new Wr(t),
                    this.highestTargetId = t),
                    e.sequenceNumber > this.ws && (this.ws = e.sequenceNumber)
                }
                ,
                e.prototype.addTargetData = function(e, t) {
                    return this.te(t),
                    this.targetCount += 1,
                    ir.resolve()
                }
                ,
                e.prototype.updateTargetData = function(e, t) {
                    return this.te(t),
                    ir.resolve()
                }
                ,
                e.prototype.removeTargetData = function(e, t) {
                    return this.ds.delete(t.target),
                    this._s.Zn(t.targetId),
                    this.targetCount -= 1,
                    ir.resolve()
                }
                ,
                e.prototype.removeTargets = function(e, t, n) {
                    var r = this
                      , i = 0
                      , o = [];
                    return this.ds.forEach((function(a, s) {
                        s.sequenceNumber <= t && null === n.get(s.targetId) && (r.ds.delete(a),
                        o.push(r.removeMatchingKeysForTargetId(e, s.targetId)),
                        i++)
                    }
                    )),
                    ir.waitFor(o).next((function() {
                        return i
                    }
                    ))
                }
                ,
                e.prototype.getTargetCount = function(e) {
                    return ir.resolve(this.targetCount)
                }
                ,
                e.prototype.getTargetData = function(e, t) {
                    var n = this.ds.get(t) || null;
                    return ir.resolve(n)
                }
                ,
                e.prototype.addMatchingKeys = function(e, t, n) {
                    return this._s.Jn(t, n),
                    ir.resolve()
                }
                ,
                e.prototype.removeMatchingKeys = function(e, t, n) {
                    this._s.Xn(t, n);
                    var r = this.persistence.referenceDelegate
                      , i = [];
                    return r && t.forEach((function(t) {
                        i.push(r.markPotentiallyOrphaned(e, t))
                    }
                    )),
                    ir.waitFor(i)
                }
                ,
                e.prototype.removeMatchingKeysForTargetId = function(e, t) {
                    return this._s.Zn(t),
                    ir.resolve()
                }
                ,
                e.prototype.getMatchingKeysForTargetId = function(e, t) {
                    var n = this._s.es(t);
                    return ir.resolve(n)
                }
                ,
                e.prototype.containsKey = function(e, t) {
                    return ir.resolve(this._s.containsKey(t))
                }
                ,
                e
            }()
              , Vi = function() {
                function e(e, t) {
                    var n = this;
                    this.gs = {},
                    this.Ne = new l(0),
                    this.xe = !1,
                    this.xe = !0,
                    this.referenceDelegate = e(this),
                    this.qe = new qi(this),
                    this.Ut = new Mr,
                    this.Ue = function(e, t) {
                        return new zi(e,(function(e) {
                            return n.referenceDelegate.ps(e)
                        }
                        ))
                    }(this.Ut),
                    this.R = new br(t),
                    this.Ke = new Li(this.R)
                }
                return e.prototype.start = function() {
                    return Promise.resolve()
                }
                ,
                e.prototype.shutdown = function() {
                    return this.xe = !1,
                    Promise.resolve()
                }
                ,
                Object.defineProperty(e.prototype, "started", {
                    get: function() {
                        return this.xe
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                e.prototype.setDatabaseDeletedListener = function() {}
                ,
                e.prototype.setNetworkEnabled = function() {}