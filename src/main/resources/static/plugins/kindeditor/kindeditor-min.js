/* KindEditor 4.1.10 (2013-11-23), Copyright (C) kindsoft.net, Licence: http://www.kindsoft.net/license.php */
(function(w, i) {
	function Z(a) {
		if(!a) return !1;
		return Object.prototype.toString.call(a) === "[object Array]"
	}

	function wa(a) {
		if(!a) return !1;
		return Object.prototype.toString.call(a) === "[object Function]"
	}

	function J(a, b) {
		for(var c = 0, d = b.length; c < d; c++)
			if(a === b[c]) return c;
		return -1
	}

	function m(a, b) {
		if(Z(a))
			for(var c = 0, d = a.length; c < d; c++) {
				if(b.call(a[c], c, a[c]) === !1) break
			} else
				for(c in a)
					if(a.hasOwnProperty(c) && b.call(a[c], c, a[c]) === !1) break
	}

	function B(a) {
		return a.replace(/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g,
			"")
	}

	function xa(a, b, c) {
		c = c === i ? "," : c;
		return(c + b + c).indexOf(c + a + c) >= 0
	}

	function s(a, b) {
		b = b || "px";
		return a && /^\d+$/.test(a) ? a + b : a
	}

	function t(a) {
		var b;
		return a && (b = /(\d+)/.exec(a)) ? parseInt(b[1], 10) : 0
	}

	function C(a) {
		return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
	}

	function fa(a) {
		return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&")
	}

	function ga(a) {
		var b = a.split("-"),
			a = "";
		m(b, function(b, d) {
			a += b > 0 ? d.charAt(0).toUpperCase() +
				d.substr(1) : d
		});
		return a
	}

	function ya(a) {
		function b(a) {
			a = parseInt(a, 10).toString(16).toUpperCase();
			return a.length > 1 ? a : "0" + a
		}
		return a.replace(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/ig, function(a, d, e, g) {
			return "#" + b(d) + b(e) + b(g)
		})
	}

	function u(a, b) {
		var b = b === i ? "," : b,
			c = {},
			d = Z(a) ? a : a.split(b),
			e;
		m(d, function(a, b) {
			if(e = /^(\d+)\.\.(\d+)$/.exec(b))
				for(var d = parseInt(e[1], 10); d <= parseInt(e[2], 10); d++) c[d.toString()] = !0;
			else c[b] = !0
		});
		return c
	}

	function Ja(a, b) {
		return Array.prototype.slice.call(a, b || 0)
	}

	function l(a, b) {
		return a === i ? b : a
	}

	function E(a, b, c) {
		c || (c = b, b = null);
		var d;
		if(b) {
			var e = function() {};
			e.prototype = b.prototype;
			d = new e;
			m(c, function(a, b) {
				d[a] = b
			})
		} else d = c;
		d.constructor = a;
		a.prototype = d;
		a.parent = b ? b.prototype : null
	}

	function eb(a) {
		var b;
		if(b = /\{[\s\S]*\}|\[[\s\S]*\]/.exec(a)) a = b[0];
		b = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
		b.lastIndex = 0;
		b.test(a) && (a = a.replace(b, function(a) {
			return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
		}));
		if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return eval("(" + a + ")");
		throw "JSON parse error";
	}

	function Rb(a, b, c) {
		a.addEventListener ? a.addEventListener(b, c, fb) : a.attachEvent && a.attachEvent("on" + b, c)
	}

	function za(a, b, c) {
		a.removeEventListener ? a.removeEventListener(b, c, fb) : a.detachEvent && a.detachEvent("on" + b, c)
	}

	function gb(a, b) {
		this.init(a, b)
	}

	function hb(a) {
		try {
			delete a[$]
		} catch(b) {
			a.removeAttribute &&
				a.removeAttribute($)
		}
	}

	function aa(a, b, c) {
		if(b.indexOf(",") >= 0) m(b.split(","), function() {
			aa(a, this, c)
		});
		else {
			var d = a[$] || null;
			d || (a[$] = ++ib, d = ib);
			v[d] === i && (v[d] = {});
			var e = v[d][b];
			e && e.length > 0 ? za(a, b, e[0]) : (v[d][b] = [], v[d].el = a);
			e = v[d][b];
			e.length === 0 && (e[0] = function(b) {
				var c = b ? new gb(a, b) : i;
				m(e, function(b, d) {
					b > 0 && d && d.call(a, c)
				})
			});
			J(c, e) < 0 && e.push(c);
			Rb(a, b, e[0])
		}
	}

	function ha(a, b, c) {
		if(b && b.indexOf(",") >= 0) m(b.split(","), function() {
			ha(a, this, c)
		});
		else {
			var d = a[$] || null;
			if(d)
				if(b === i) d in v && (m(v[d],
					function(b, c) {
						b != "el" && c.length > 0 && za(a, b, c[0])
					}), delete v[d], hb(a));
				else if(v[d]) {
				var e = v[d][b];
				if(e && e.length > 0) {
					c === i ? (za(a, b, e[0]), delete v[d][b]) : (m(e, function(a, b) {
						a > 0 && b === c && e.splice(a, 1)
					}), e.length == 1 && (za(a, b, e[0]), delete v[d][b]));
					var g = 0;
					m(v[d], function() {
						g++
					});
					g < 2 && (delete v[d], hb(a))
				}
			}
		}
	}

	function jb(a, b) {
		if(b.indexOf(",") >= 0) m(b.split(","), function() {
			jb(a, this)
		});
		else {
			var c = a[$] || null;
			if(c) {
				var d = v[c][b];
				if(v[c] && d && d.length > 0) d[0]()
			}
		}
	}

	function Ka(a, b, c) {
		b = /^\d{2,}$/.test(b) ? b : b.toUpperCase().charCodeAt(0);
		aa(a, "keydown", function(d) {
			d.ctrlKey && d.which == b && !d.shiftKey && !d.altKey && (c.call(a), d.stop())
		})
	}

	function ba(a) {
		for(var b = {}, c = /\s*([\w\-]+)\s*:([^;]*)(;|$)/g, d; d = c.exec(a);) {
			var e = B(d[1].toLowerCase());
			d = B(ya(d[2]));
			b[e] = d
		}
		return b
	}

	function I(a) {
		for(var b = {}, c = /\s+(?:([\w\-:]+)|(?:([\w\-:]+)=([^\s"'<>]+))|(?:([\w\-:"]+)="([^"]*)")|(?:([\w\-:"]+)='([^']*)'))(?=(?:\s|\/|>)+)/g, d; d = c.exec(a);) {
			var e = (d[1] || d[2] || d[4] || d[6]).toLowerCase();
			b[e] = (d[2] ? d[3] : d[4] ? d[5] : d[7]) || ""
		}
		return b
	}

	function Sb(a, b) {
		return a =
			/\s+class\s*=/.test(a) ? a.replace(/(\s+class=["']?)([^"']*)(["']?[\s>])/, function(a, d, e, g) {
				return(" " + e + " ").indexOf(" " + b + " ") < 0 ? e === "" ? d + b + g : d + e + " " + b + g : a
			}) : a.substr(0, a.length - 1) + ' class="' + b + '">'
	}

	function Tb(a) {
		var b = "";
		m(ba(a), function(a, d) {
			b += a + ":" + d + ";"
		});
		return b
	}

	function ia(a, b, c, d) {
		function e(a) {
			for(var a = a.split("/"), b = [], c = 0, d = a.length; c < d; c++) {
				var e = a[c];
				e == ".." ? b.length > 0 && b.pop() : e !== "" && e != "." && b.push(e)
			}
			return "/" + b.join("/")
		}

		function g(b, c) {
			if(a.substr(0, b.length) === b) {
				for(var e = [],
						h = 0; h < c; h++) e.push("..");
				h = ".";
				e.length > 0 && (h += "/" + e.join("/"));
				d == "/" && (h += "/");
				return h + a.substr(b.length)
			} else if(f = /^(.*)\//.exec(b)) return g(f[1], ++c)
		}
		b = l(b, "").toLowerCase();
		a.substr(0, 5) != "data:" && (a = a.replace(/([^:])\/\//g, "$1/"));
		if(J(b, ["absolute", "relative", "domain"]) < 0) return a;
		c = c || location.protocol + "//" + location.host;
		if(d === i) var h = location.pathname.match(/^(\/.*)\//),
			d = h ? h[1] : "";
		var f;
		if(f = /^(\w+:\/\/[^\/]*)/.exec(a)) {
			if(f[1] !== c) return a
		} else if(/^\w+:/.test(a)) return a;
		/^\//.test(a) ?
			a = c + e(a.substr(1)) : /^\w+:\/\//.test(a) || (a = c + e(d + "/" + a));
		b === "relative" ? a = g(c + d, 0).substr(2) : b === "absolute" && a.substr(0, c.length) === c && (a = a.substr(c.length));
		return a
	}

	function U(a, b, c, d, e) {
		a == null && (a = "");
		var c = c || "",
			d = l(d, !1),
			e = l(e, "\t"),
			g = "xx-small,x-small,small,medium,large,x-large,xx-large".split(","),
			a = a.replace(/(<(?:pre|pre\s[^>]*)>)([\s\S]*?)(<\/pre>)/ig, function(a, b, c, d) {
				return b + c.replace(/<(?:br|br\s[^>]*)>/ig, "\n") + d
			}),
			a = a.replace(/<(?:br|br\s[^>]*)\s*\/?>\s*<\/p>/ig, "</p>"),
			a = a.replace(/(<(?:p|p\s[^>]*)>)\s*(<\/p>)/ig,
				"$1<br />$2"),
			a = a.replace(/\u200B/g, ""),
			a = a.replace(/\u00A9/g, "&copy;"),
			a = a.replace(/\u00AE/g, "&reg;"),
			a = a.replace(/<[^>]+/g, function(a) {
				return a.replace(/\s+/g, " ")
			}),
			h = {};
		b && (m(b, function(a, b) {
			for(var c = a.split(","), d = 0, e = c.length; d < e; d++) h[c[d]] = u(b)
		}), h.script || (a = a.replace(/(<(?:script|script\s[^>]*)>)([\s\S]*?)(<\/script>)/ig, "")), h.style || (a = a.replace(/(<(?:style|style\s[^>]*)>)([\s\S]*?)(<\/style>)/ig, "")));
		var f = [],
			a = a.replace(/(\s*)<(\/)?([\w\-:]+)((?:\s+|(?:\s+[\w\-:]+)|(?:\s+[\w\-:]+=[^\s"'<>]+)|(?:\s+[\w\-:"]+="[^"]*")|(?:\s+[\w\-:"]+='[^']*'))*)(\/)?>(\s*)/g,
				function(a, n, q, r, K, ja, i) {
					var n = n || "",
						q = q || "",
						l = r.toLowerCase(),
						o = K || "",
						r = ja ? " " + ja : "",
						i = i || "";
					if(b && !h[l]) return "";
					r === "" && kb[l] && (r = " /");
					lb[l] && (n && (n = " "), i && (i = " "));
					La[l] && (q ? i = "\n" : n = "\n");
					d && l == "br" && (i = "\n");
					if(mb[l] && !La[l])
						if(d) {
							q && f.length > 0 && f[f.length - 1] === l ? f.pop() : f.push(l);
							i = n = "\n";
							K = 0;
							for(ja = q ? f.length : f.length - 1; K < ja; K++) n += e, q || (i += e);
							r ? f.pop() : q || (i += e)
						} else n = i = "";
					if(o !== "") {
						var z = I(a);
						if(l === "font") {
							var L = {},
								F = "";
							m(z, function(a, b) {
								if(a === "color") L.color = b, delete z[a];
								a === "size" &&
									(L["font-size"] = g[parseInt(b, 10) - 1] || "", delete z[a]);
								a === "face" && (L["font-family"] = b, delete z[a]);
								a === "style" && (F = b)
							});
							F && !/;$/.test(F) && (F += ";");
							m(L, function(a, b) {
								b !== "" && (/\s/.test(b) && (b = "'" + b + "'"), F += a + ":" + b + ";")
							});
							z.style = F
						}
						m(z, function(a, d) {
							Ub[a] && (z[a] = a);
							J(a, ["src", "href"]) >= 0 && (z[a] = ia(d, c));
							(b && a !== "style" && !h[l]["*"] && !h[l][a] || l === "body" && a === "contenteditable" || /^kindeditor_\d+$/.test(a)) && delete z[a];
							if(a === "style" && d !== "") {
								var e = ba(d);
								m(e, function(a) {
									b && !h[l].style && !h[l]["." + a] && delete e[a]
								});
								var g = "";
								m(e, function(a, b) {
									g += a + ":" + b + ";"
								});
								z.style = g
							}
						});
						o = "";
						m(z, function(a, b) {
							a === "style" && b === "" || (b = b.replace(/"/g, "&quot;"), o += " " + a + '="' + b + '"')
						})
					}
					l === "font" && (l = "span");
					return n + "<" + q + l + o + r + ">" + i
				}),
			a = a.replace(/(<(?:pre|pre\s[^>]*)>)([\s\S]*?)(<\/pre>)/ig, function(a, b, c, d) {
				return b + c.replace(/\n/g, '<span id="__kindeditor_pre_newline__">\n') + d
			}),
			a = a.replace(/\n\s*\n/g, "\n"),
			a = a.replace(/<span id="__kindeditor_pre_newline__">\n/g, "\n");
		return B(a)
	}

	function nb(a, b) {
		a = a.replace(/<meta[\s\S]*?>/ig,
			"").replace(/<![\s\S]*?>/ig, "").replace(/<style[^>]*>[\s\S]*?<\/style>/ig, "").replace(/<script[^>]*>[\s\S]*?<\/script>/ig, "").replace(/<w:[^>]+>[\s\S]*?<\/w:[^>]+>/ig, "").replace(/<o:[^>]+>[\s\S]*?<\/o:[^>]+>/ig, "").replace(/<xml>[\s\S]*?<\/xml>/ig, "").replace(/<(?:table|td)[^>]*>/ig, function(a) {
			return a.replace(/border-bottom:([#\w\s]+)/ig, "border:$1")
		});
		return U(a, b)
	}

	function ob(a) {
		if(/\.(rm|rmvb)(\?|$)/i.test(a)) return "audio/x-pn-realaudio-plugin";
		if(/\.(swf|flv)(\?|$)/i.test(a)) return "application/x-shockwave-flash";
		return "video/x-ms-asf-plugin"
	}

	function pb(a) {
		return I(unescape(a))
	}

	function Ma(a) {
		var b = "<embed ";
		m(a, function(a, d) {
			b += a + '="' + d + '" '
		});
		b += "/>";
		return b
	}

	function qb(a, b) {
		var c = b.width,
			d = b.height,
			e = b.type || ob(b.src),
			g = Ma(b),
			h = "";
		/\D/.test(c) ? h += "width:" + c + ";" : c > 0 && (h += "width:" + c + "px;");
		/\D/.test(d) ? h += "height:" + d + ";" : d > 0 && (h += "height:" + d + "px;");
		c = /realaudio/i.test(e) ? "ke-rm" : /flash/i.test(e) ? "ke-flash" : "ke-media";
		c = '<img class="' + c + '" src="' + a + '" ';
		h !== "" && (c += 'style="' + h + '" ');
		c += 'data-ke-tag="' + escape(g) +
			'" alt="" />';
		return c
	}

	function Aa(a, b) {
		if(a.nodeType == 9 && b.nodeType != 9) return !0;
		for(; b = b.parentNode;)
			if(b == a) return !0;
		return !1
	}

	function Ba(a, b) {
		var b = b.toLowerCase(),
			c = null;
		if(!Vb && a.nodeName.toLowerCase() != "script") {
			var d = a.ownerDocument.createElement("div");
			d.appendChild(a.cloneNode(!1));
			d = I(fa(d.innerHTML));
			b in d && (c = d[b])
		} else try {
			c = a.getAttribute(b, 2)
		} catch(e) {
			c = a.getAttribute(b, 1)
		}
		b === "style" && c !== null && (c = Tb(c));
		return c
	}

	function Ca(a, b) {
		function c(a) {
			if(typeof a != "string") return a;
			return a.replace(/([^\w\-])/g,
				"\\$1")
		}

		function d(a, b) {
			return a === "*" || a.toLowerCase() === c(b.toLowerCase())
		}

		function e(a, b, c) {
			var e = [];
			(a = (c.ownerDocument || c).getElementById(a.replace(/\\/g, ""))) && d(b, a.nodeName) && Aa(c, a) && e.push(a);
			return e
		}

		function g(a, b, c) {
			var e = c.ownerDocument || c,
				g = [],
				h, f, j;
			if(c.getElementsByClassName) {
				e = c.getElementsByClassName(a.replace(/\\/g, ""));
				h = 0;
				for(f = e.length; h < f; h++) j = e[h], d(b, j.nodeName) && g.push(j)
			} else if(e.querySelectorAll) {
				e = e.querySelectorAll((c.nodeName !== "#document" ? c.nodeName + " " : "") + b + "." +
					a);
				h = 0;
				for(f = e.length; h < f; h++) j = e[h], Aa(c, j) && g.push(j)
			} else {
				e = c.getElementsByTagName(b);
				a = " " + a + " ";
				h = 0;
				for(f = e.length; h < f; h++)
					if(j = e[h], j.nodeType == 1)(b = j.className) && (" " + b + " ").indexOf(a) > -1 && g.push(j)
			}
			return g
		}

		function h(a, b, d, e) {
			for(var g = [], d = e.getElementsByTagName(d), h = 0, f = d.length; h < f; h++) e = d[h], e.nodeType == 1 && (b === null ? Ba(e, a) !== null && g.push(e) : b === c(Ba(e, a)) && g.push(e));
			return g
		}

		function f(a, b) {
			var c = [],
				j, k = (j = /^((?:\\.|[^.#\s\[<>])+)/.exec(a)) ? j[1] : "*";
			if(j = /#((?:[\w\-]|\\.)+)$/.exec(a)) c =
				e(j[1], k, b);
			else if(j = /\.((?:[\w\-]|\\.)+)$/.exec(a)) c = g(j[1], k, b);
			else if(j = /\[((?:[\w\-]|\\.)+)\]/.exec(a)) c = h(j[1].toLowerCase(), null, k, b);
			else if(j = /\[((?:[\w\-]|\\.)+)\s*=\s*['"]?((?:\\.|[^'"]+)+)['"]?\]/.exec(a)) {
				c = j[1].toLowerCase();
				j = j[2];
				if(c === "id") k = e(j, k, b);
				else if(c === "class") k = g(j, k, b);
				else if(c === "name") {
					c = [];
					j = (b.ownerDocument || b).getElementsByName(j.replace(/\\/g, ""));
					for(var n, r = 0, q = j.length; r < q; r++) n = j[r], d(k, n.nodeName) && Aa(b, n) && n.getAttribute("name") !== null && c.push(n);
					k = c
				} else k =
					h(c, j, k, b);
				c = k
			} else {
				k = b.getElementsByTagName(k);
				n = 0;
				for(r = k.length; n < r; n++) j = k[n], j.nodeType == 1 && c.push(j)
			}
			return c
		}
		var k = a.split(",");
		if(k.length > 1) {
			var n = [];
			m(k, function() {
				m(Ca(this, b), function() {
					J(this, n) < 0 && n.push(this)
				})
			});
			return n
		}
		for(var b = b || document, k = [], q, r = /((?:\\.|[^\s>])+|[\s>])/g; q = r.exec(a);) q[1] !== " " && k.push(q[1]);
		q = [];
		if(k.length == 1) return f(k[0], b);
		var r = !1,
			K, l, i, o, p, z, L, F, s, t;
		z = 0;
		for(lenth = k.length; z < lenth; z++)
			if(K = k[z], K === ">") r = !0;
			else {
				if(z > 0) {
					l = [];
					L = 0;
					for(s = q.length; L < s; L++) {
						o =
							q[L];
						i = f(K, o);
						F = 0;
						for(t = i.length; F < t; F++) p = i[F], r ? o === p.parentNode && l.push(p) : l.push(p)
					}
					q = l
				} else q = f(K, b);
				if(q.length === 0) return []
			}
		return q
	}

	function V(a) {
		if(!a) return document;
		return a.ownerDocument || a.document || a
	}

	function W(a) {
		if(!a) return w;
		a = V(a);
		return a.parentWindow || a.defaultView
	}

	function Wb(a, b) {
		if(a.nodeType == 1) {
			var c = V(a);
			try {
				a.innerHTML = '<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />' + b;
				var d = c.getElementById("__kindeditor_temp_tag__");
				d.parentNode.removeChild(d)
			} catch(e) {
				f(a).empty(),
					f("@" + b, c).each(function() {
						a.appendChild(this)
					})
			}
		}
	}

	function Na(a, b, c) {
		o && A < 8 && b.toLowerCase() == "class" && (b = "className");
		a.setAttribute(b, "" + c)
	}

	function Oa(a) {
		if(!a || !a.nodeName) return "";
		return a.nodeName.toLowerCase()
	}

	function Xb(a, b) {
		var c = W(a),
			d = ga(b),
			e = "";
		c.getComputedStyle ? (c = c.getComputedStyle(a, null), e = c[d] || c.getPropertyValue(b) || a.style[d]) : a.currentStyle && (e = a.currentStyle[d] || a.style[d]);
		return e
	}

	function G(a) {
		a = a || document;
		return P ? a.body : a.documentElement
	}

	function ca(a) {
		var a = a || document,
			b;
		o || Yb || Pa ? (b = G(a).scrollLeft, a = G(a).scrollTop) : (b = W(a).scrollX, a = W(a).scrollY);
		return {
			x: b,
			y: a
		}
	}

	function D(a) {
		this.init(a)
	}

	function rb(a) {
		a.collapsed = a.startContainer === a.endContainer && a.startOffset === a.endOffset;
		return a
	}

	function Qa(a, b, c) {
		function d(d, e, g) {
			var h = d.nodeValue.length,
				k;
			b && (k = d.cloneNode(!0), k = e > 0 ? k.splitText(e) : k, g < h && k.splitText(g - e));
			if(c) {
				var n = d;
				e > 0 && (n = d.splitText(e), a.setStart(d, e));
				g < h && (d = n.splitText(g - e), a.setEnd(d, 0));
				f.push(n)
			}
			return k
		}

		function e() {
			c && a.up().collapse(!0);
			for(var b = 0, d = f.length; b < d; b++) {
				var e = f[b];
				e.parentNode && e.parentNode.removeChild(e)
			}
		}

		function g(e, l) {
			for(var i = e.firstChild, o; i;) {
				o = (new M(h)).selectNode(i);
				n = o.compareBoundaryPoints(ka, a);
				n >= 0 && q <= 0 && (q = o.compareBoundaryPoints(la, a));
				q >= 0 && r <= 0 && (r = o.compareBoundaryPoints(da, a));
				r >= 0 && m <= 0 && (m = o.compareBoundaryPoints(ma, a));
				if(m >= 0) return !1;
				o = i.nextSibling;
				if(n > 0)
					if(i.nodeType == 1)
						if(q >= 0 && r <= 0) b && l.appendChild(i.cloneNode(!0)), c && f.push(i);
						else {
							var p;
							b && (p = i.cloneNode(!1), l.appendChild(p));
							if(g(i,
									p) === !1) return !1
						}
				else if(i.nodeType == 3 && (i = i == k.startContainer ? d(i, k.startOffset, i.nodeValue.length) : i == k.endContainer ? d(i, 0, k.endOffset) : d(i, 0, i.nodeValue.length), b)) try {
					l.appendChild(i)
				} catch(ja) {}
				i = o
			}
		}
		var h = a.doc,
			f = [],
			k = a.cloneRange().down(),
			n = -1,
			q = -1,
			r = -1,
			m = -1,
			l = a.commonAncestor(),
			i = h.createDocumentFragment();
		if(l.nodeType == 3) return l = d(l, a.startOffset, a.endOffset), b && i.appendChild(l), e(), b ? i : a;
		g(l, i);
		c && a.up().collapse(!0);
		for(var l = 0, o = f.length; l < o; l++) {
			var p = f[l];
			p.parentNode && p.parentNode.removeChild(p)
		}
		return b ?
			i : a
	}

	function na(a, b) {
		for(var c = b; c;) {
			var d = f(c);
			if(d.name == "marquee" || d.name == "select") return;
			c = c.parentNode
		}
		try {
			a.moveToElementText(b)
		} catch(e) {}
	}

	function sb(a, b) {
		var c = a.parentElement().ownerDocument,
			d = a.duplicate();
		d.collapse(b);
		var e = d.parentElement(),
			g = e.childNodes;
		if(g.length === 0) return {
			node: e.parentNode,
			offset: f(e).index()
		};
		var h = c,
			j = 0,
			k = -1,
			n = a.duplicate();
		na(n, e);
		for(var q = 0, r = g.length; q < r; q++) {
			var i = g[q],
				k = n.compareEndPoints("StartToStart", d);
			if(k === 0) return {
				node: i.parentNode,
				offset: q
			};
			if(i.nodeType ==
				1) {
				var l = a.duplicate(),
					m, o = f(i),
					p = i;
				o.isControl() && (m = c.createElement("span"), o.after(m), p = m, j += o.text().replace(/\r\n|\n|\r/g, "").length);
				na(l, p);
				n.setEndPoint("StartToEnd", l);
				k > 0 ? j += l.text.replace(/\r\n|\n|\r/g, "").length : j = 0;
				m && f(m).remove()
			} else i.nodeType == 3 && (n.moveStart("character", i.nodeValue.length), j += i.nodeValue.length);
			k < 0 && (h = i)
		}
		if(k < 0 && h.nodeType == 1) return {
			node: e,
			offset: f(e.lastChild).index() + 1
		};
		if(k > 0)
			for(; h.nextSibling && h.nodeType == 1;) h = h.nextSibling;
		n = a.duplicate();
		na(n, e);
		n.setEndPoint("StartToEnd",
			d);
		j -= n.text.replace(/\r\n|\n|\r/g, "").length;
		if(k > 0 && h.nodeType == 3)
			for(c = h.previousSibling; c && c.nodeType == 3;) j -= c.nodeValue.length, c = c.previousSibling;
		return {
			node: h,
			offset: j
		}
	}

	function tb(a, b) {
		var c = a.ownerDocument || a,
			d = c.body.createTextRange();
		if(c == a) return d.collapse(!0), d;
		if(a.nodeType == 1 && a.childNodes.length > 0) {
			var e = a.childNodes,
				g;
			b === 0 ? (g = e[0], e = !0) : (g = e[b - 1], e = !1);
			if(!g) return d;
			if(f(g).name === "head") return b === 1 && (e = !0), b === 2 && (e = !1), d.collapse(e), d;
			if(g.nodeType == 1) {
				var h = f(g),
					j;
				h.isControl() &&
					(j = c.createElement("span"), e ? h.before(j) : h.after(j), g = j);
				na(d, g);
				d.collapse(e);
				j && f(j).remove();
				return d
			}
			a = g;
			b = e ? 0 : g.nodeValue.length
		}
		c = c.createElement("span");
		f(a).before(c);
		na(d, c);
		d.moveStart("character", b);
		f(c).remove();
		return d
	}

	function ub(a) {
		function b(a) {
			if(f(a.node).name == "tr") a.node = a.node.cells[a.offset], a.offset = 0
		}
		var c;
		if(H) {
			if(a.item) return c = V(a.item(0)), c = new M(c), c.selectNode(a.item(0)), c;
			c = a.parentElement().ownerDocument;
			var d = sb(a, !0),
				a = sb(a, !1);
			b(d);
			b(a);
			c = new M(c);
			c.setStart(d.node,
				d.offset);
			c.setEnd(a.node, a.offset);
			return c
		}
		d = a.startContainer;
		c = d.ownerDocument || d;
		c = new M(c);
		c.setStart(d, a.startOffset);
		c.setEnd(a.endContainer, a.endOffset);
		return c
	}

	function M(a) {
		this.init(a)
	}

	function Ra(a) {
		if(!a.nodeName) return a.constructor === M ? a : ub(a);
		return new M(a)
	}

	function Q(a, b, c) {
		try {
			a.execCommand(b, !1, c)
		} catch(d) {}
	}

	function vb(a, b) {
		var c = "";
		try {
			c = a.queryCommandValue(b)
		} catch(d) {}
		typeof c !== "string" && (c = "");
		return c
	}

	function Sa(a) {
		var b = W(a);
		return H ? a.selection : b.getSelection()
	}

	function wb(a) {
		var b = {},
			c, d;
		m(a, function(a, g) {
			c = a.split(",");
			for(var h = 0, f = c.length; h < f; h++) d = c[h], b[d] = g
		});
		return b
	}

	function Ta(a, b) {
		return xb(a, b, "*") || xb(a, b)
	}

	function xb(a, b, c) {
		c = c || a.name;
		if(a.type !== 1) return !1;
		b = wb(b);
		if(!b[c]) return !1;
		for(var c = b[c].split(","), b = 0, d = c.length; b < d; b++) {
			var e = c[b];
			if(e === "*") return !0;
			var g = /^(\.?)([^=]+)(?:=([^=]*))?$/.exec(e),
				h = g[1] ? "css" : "attr",
				e = g[2],
				g = g[3] || "";
			if(g === "" && a[h](e) !== "") return !0;
			if(g !== "" && a[h](e) === g) return !0
		}
		return !1
	}

	function Ua(a, b) {
		a.type == 1 && (yb(a, b, "*"), yb(a,
			b))
	}

	function yb(a, b, c) {
		c = c || a.name;
		if(a.type === 1 && (b = wb(b), b[c])) {
			for(var c = b[c].split(","), b = !1, d = 0, e = c.length; d < e; d++) {
				var g = c[d];
				if(g === "*") {
					b = !0;
					break
				}
				var h = /^(\.?)([^=]+)(?:=([^=]*))?$/.exec(g),
					g = h[2];
				h[1] ? (g = ga(g), a[0].style[g] && (a[0].style[g] = "")) : a.removeAttr(g)
			}
			b && a.remove(!0)
		}
	}

	function Va(a) {
		for(; a.first();) a = a.first();
		return a
	}

	function ea(a) {
		if(a.type != 1 || a.isSingle()) return !1;
		return a.html().replace(/<[^>]+>/g, "") === ""
	}

	function Zb(a, b, c) {
		m(b, function(b, c) {
			b !== "style" && a.attr(b, c)
		});
		m(c,
			function(b, c) {
				a.css(b, c)
			})
	}

	function oa(a) {
		this.init(a)
	}

	function zb(a) {
		a.nodeName && (a = V(a), a = Ra(a).selectNodeContents(a.body).collapse(!1));
		return new oa(a)
	}

	function Wa(a) {
		var b = a.moveEl,
			c = a.moveFn,
			d = a.clickEl || b,
			e = a.beforeDrag,
			g = [document];
		(a.iframeFix === i || a.iframeFix) && f("iframe").each(function() {
			if(!/^https?:\/\//.test(ia(this.src || "", "absolute"))) {
				var a;
				try {
					a = Xa(this)
				} catch(b) {}
				if(a) {
					var c = f(this).pos();
					f(a).data("pos-x", c.x);
					f(a).data("pos-y", c.y);
					g.push(a)
				}
			}
		});
		d.mousedown(function(a) {
			function j(a) {
				a.preventDefault();
				var b = f(V(a.target)),
					e = R((b.data("pos-x") || 0) + a.pageX - p),
					a = R((b.data("pos-y") || 0) + a.pageY - s);
				c.call(d, r, l, m, o, e, a)
			}

			function k(a) {
				a.preventDefault()
			}

			function n(a) {
				a.preventDefault();
				f(g).unbind("mousemove", j).unbind("mouseup", n).unbind("selectstart", k);
				i.releaseCapture && i.releaseCapture()
			}
			a.stopPropagation();
			var i = d.get(),
				r = t(b.css("left")),
				l = t(b.css("top")),
				m = b.width(),
				o = b.height(),
				p = a.pageX,
				s = a.pageY;
			e && e();
			f(g).mousemove(j).mouseup(n).bind("selectstart", k);
			i.setCapture && i.setCapture()
		})
	}

	function S(a) {
		this.init(a)
	}

	function Ya(a) {
		return new S(a)
	}

	function Xa(a) {
		a = f(a)[0];
		return a.contentDocument || a.contentWindow.document
	}

	function $b(a, b, c, d) {
		var e = [Za === "" ? "<html>" : '<html dir="' + Za + '">', '<head><meta charset="utf-8" /><title></title>', "<style>", "html {margin:0;padding:0;}", "body {margin:0;padding:5px;}", 'body, td {font:15px/1.5 "sans serif",tahoma,verdana,helvetica;}', "body, p, div {word-wrap: break-word;}", "p {margin:5px 0;}", "table {border-collapse:collapse;}", "img {border:0;}", "noscript {display:none;}", "table.ke-zeroborder td {border:1px dotted #AAA;}",
			"img.ke-flash {", "\tborder:1px solid #AAA;", "\tbackground-image:url(" + a + "common/flash.gif);", "\tbackground-position:center center;", "\tbackground-repeat:no-repeat;", "\twidth:100px;", "\theight:100px;", "}", "img.ke-rm {", "\tborder:1px solid #AAA;", "\tbackground-image:url(" + a + "common/rm.gif);", "\tbackground-position:center center;", "\tbackground-repeat:no-repeat;", "\twidth:100px;", "\theight:100px;", "}", "img.ke-media {", "\tborder:1px solid #AAA;", "\tbackground-image:url(" + a + "common/media.gif);", "\tbackground-position:center center;",
			"\tbackground-repeat:no-repeat;", "\twidth:100px;", "\theight:100px;", "}", "img.ke-anchor {", "\tborder:1px dashed #666;", "\twidth:16px;", "\theight:16px;", "}", ".ke-script, .ke-noscript, .ke-display-none {", "\tdisplay:none;", "\tfont-size:0;", "\twidth:0;", "\theight:0;", "}", ".ke-pagebreak {", "\tborder:1px dotted #AAA;", "\tfont-size:0;", "\theight:2px;", "}", "</style>"
		];
		Z(c) || (c = [c]);
		m(c, function(a, b) {
			b && e.push('<link href="' + b + '" rel="stylesheet" />')
		});
		d && e.push("<style>" + d + "</style>");
		e.push("</head><body " +
			(b ? 'class="' + b + '"' : "") + "></body></html>");
		return e.join("\n")
	}

	function pa(a, b) {
		if(a.hasVal()) {
			if(b === i) {
				var c = a.val();
				return c = c.replace(/(<(?:p|p\s[^>]*)>) *(<\/p>)/ig, "")
			}
			return a.val(b)
		}
		return a.html(b)
	}

	function qa(a) {
		this.init(a)
	}

	function Ab(a) {
		return new qa(a)
	}

	function Bb(a, b) {
		var c = this.get(a);
		c && !c.hasClass("ke-disabled") && b(c)
	}

	function Da(a) {
		this.init(a)
	}

	function Cb(a) {
		return new Da(a)
	}

	function ra(a) {
		this.init(a)
	}

	function $a(a) {
		return new ra(a)
	}

	function sa(a) {
		this.init(a)
	}

	function Db(a) {
		return new sa(a)
	}

	function ab(a) {
		this.init(a)
	}

	function ta(a) {
		this.init(a)
	}

	function Eb(a) {
		return new ta(a)
	}

	function bb(a, b) {
		var c = document.getElementsByTagName("head")[0] || (P ? document.body : document.documentElement),
			d = document.createElement("script");
		c.appendChild(d);
		d.src = a;
		d.charset = "utf-8";
		d.onload = d.onreadystatechange = function() {
			if(!this.readyState || this.readyState === "loaded") b && b(), d.onload = d.onreadystatechange = null, c.removeChild(d)
		}
	}

	function Fb(a) {
		var b = a.indexOf("?");
		return b > 0 ? a.substr(0, b) : a
	}

	function cb(a) {
		for(var b =
				document.getElementsByTagName("head")[0] || (P ? document.body : document.documentElement), c = document.createElement("link"), d = Fb(ia(a, "absolute")), e = f('link[rel="stylesheet"]', b), g = 0, h = e.length; g < h; g++)
			if(Fb(ia(e[g].href, "absolute")) === d) return;
		b.appendChild(c);
		c.href = a;
		c.rel = "stylesheet"
	}

	function Gb(a, b) {
		if(a === i) return N;
		if(!b) return N[a];
		N[a] = b
	}

	function Hb(a) {
		var b, c = "core";
		if(b = /^(\w+)\.(\w+)$/.exec(a)) c = b[1], a = b[2];
		return {
			ns: c,
			key: a
		}
	}

	function Ib(a, b) {
		b = b === i ? f.options.langType : b;
		if(typeof a === "string") {
			if(!O[b]) return "no language";
			var c = a.length - 1;
			if(a.substr(c) === ".") return O[b][a.substr(0, c)];
			c = Hb(a);
			return O[b][c.ns][c.key]
		}
		m(a, function(a, c) {
			var g = Hb(a);
			O[b] || (O[b] = {});
			O[b][g.ns] || (O[b][g.ns] = {});
			O[b][g.ns][g.key] = c
		})
	}

	function Ea(a, b) {
		if(!a.collapsed) {
			var a = a.cloneRange().up(),
				c = a.startContainer,
				d = a.startOffset;
			if(X || a.isControl())
				if((c = f(c.childNodes[d])) && c.name == "img" && b(c)) return c
		}
	}

	function ac() {
		var a = this;
		f(a.edit.doc).contextmenu(function(b) {
			a.menu && a.hideMenu();
			if(a.useContextmenu) {
				if(a._contextmenus.length !== 0) {
					var c =
						0,
						d = [];
					for(m(a._contextmenus, function() {
							if(this.title == "-") d.push(this);
							else if(this.cond && this.cond() && (d.push(this), this.width && this.width > c)) c = this.width
						}); d.length > 0 && d[0].title == "-";) d.shift();
					for(; d.length > 0 && d[d.length - 1].title == "-";) d.pop();
					var e = null;
					m(d, function(a) {
						this.title == "-" && e.title == "-" && delete d[a];
						e = this
					});
					if(d.length > 0) {
						b.preventDefault();
						var g = f(a.edit.iframe).pos(),
							h = $a({
								x: g.x + b.clientX,
								y: g.y + b.clientY,
								width: c,
								css: {
									visibility: "hidden"
								},
								shadowMode: a.shadowMode
							});
						m(d, function() {
							this.title &&
								h.addItem(this)
						});
						var g = G(h.doc),
							j = h.div.height();
						b.clientY + j >= g.clientHeight - 100 && h.pos(h.x, t(h.y) - j);
						h.div.css("visibility", "visible");
						a.menu = h
					}
				}
			} else b.preventDefault()
		})
	}

	function bc() {
		function a(a) {
			for(a = f(a.commonAncestor()); a;) {
				if(a.type == 1 && !a.isStyle()) break;
				a = a.parent()
			}
			return a.name
		}
		var b = this,
			c = b.edit.doc,
			d = b.newlineTag;
		if(!(o && d !== "br") && (!Y || !(A < 3 && d !== "p")) && !(Pa && A < 9)) {
			var e = u("h1,h2,h3,h4,h5,h6,pre,li"),
				g = u("p,h1,h2,h3,h4,h5,h6,pre,li,blockquote");
			f(c).keydown(function(f) {
				if(!(f.which !=
						13 || f.shiftKey || f.ctrlKey || f.altKey)) {
					b.cmd.selection();
					var j = a(b.cmd.range);
					j == "marquee" || j == "select" || (d === "br" && !e[j] ? (f.preventDefault(), b.insertHtml("<br />" + (o && A < 9 ? "" : "\u200b"))) : g[j] || Q(c, "formatblock", "<p>"))
				}
			});
			f(c).keyup(function(e) {
				if(!(e.which != 13 || e.shiftKey || e.ctrlKey || e.altKey) && d != "br")
					if(Y) {
						var e = b.cmd.commonAncestor("p"),
							j = b.cmd.commonAncestor("a");
						j && j.text() == "" && (j.remove(!0), b.cmd.range.selectNodeContents(e[0]).collapse(!0), b.cmd.select())
					} else if(b.cmd.selection(), e = a(b.cmd.range), !(e == "marquee" || e == "select"))
					if(g[e] || Q(c, "formatblock", "<p>"), e = b.cmd.commonAncestor("div")) {
						for(var j = f("<p></p>"), k = e[0].firstChild; k;) {
							var n = k.nextSibling;
							j.append(k);
							k = n
						}
						e.before(j);
						e.remove();
						b.cmd.range.selectNodeContents(j[0]);
						b.cmd.select()
					}
			})
		}
	}

	function cc() {
		var a = this,
			b = a.edit.doc;
		f(b).keydown(function(c) {
			if(c.which == 9)
				if(c.preventDefault(), a.afterTab) a.afterTab.call(a, c);
				else {
					var c = a.cmd,
						d = c.range;
					d.shrink();
					d.collapsed && d.startContainer.nodeType == 1 && (d.insertNode(f("@&nbsp;", b)[0]), c.select());
					a.insertHtml("&nbsp;&nbsp;&nbsp;&nbsp;")
				}
		})
	}

	function dc() {
		var a = this;
		f(a.edit.textarea[0], a.edit.win).focus(function(b) {
			a.afterFocus && a.afterFocus.call(a, b)
		}).blur(function(b) {
			a.afterBlur && a.afterBlur.call(a, b)
		})
	}

	function T(a) {
		return B(a.replace(/<span [^>]*id="?__kindeditor_bookmark_\w+_\d+__"?[^>]*><\/span>/ig, ""))
	}

	function Fa(a) {
		return a.replace(/<div[^>]+class="?__kindeditor_paste__"?[^>]*>[\s\S]*?<\/div>/ig, "")
	}

	function Jb(a, b) {
		if(a.length === 0) a.push(b);
		else {
			var c = a[a.length - 1];
			T(b.html) !== T(c.html) &&
				a.push(b)
		}
	}

	function Kb(a, b) {
		var c = this.edit,
			d = c.doc.body,
			e, g;
		if(a.length === 0) return this;
		c.designMode ? (e = this.cmd.range, g = e.createBookmark(!0), g.html = d.innerHTML) : g = {
			html: d.innerHTML
		};
		Jb(b, g);
		var h = a.pop();
		T(g.html) === T(h.html) && a.length > 0 && (h = a.pop());
		c.designMode ? (c.html(h.html), h.start && (e.moveToBookmark(h), this.select())) : f(d).html(T(h.html));
		return this
	}

	function ua(a) {
		function b(a, b) {
			ua.prototype[a] === i && (c[a] = b);
			c.options[a] = b
		}
		var c = this;
		c.options = {};
		m(a, function(c) {
			b(c, a[c])
		});
		m(f.options,
			function(a, d) {
				c[a] === i && b(a, d)
			});
		var d = f(c.srcElement || "<textarea/>");
		if(!c.width) c.width = d[0].style.width || d.width();
		if(!c.height) c.height = d[0].style.height || d.height();
		b("width", l(c.width, c.minWidth));
		b("height", l(c.height, c.minHeight));
		b("width", s(c.width));
		b("height", s(c.height));
		if(ec && (!fc || A < 534)) c.designMode = !1;
		c.srcElement = d;
		c.initContent = "";
		c.plugin = {};
		c.isCreated = !1;
		c._handlers = {};
		c._contextmenus = [];
		c._undoStack = [];
		c._redoStack = [];
		c._firstAddBookmark = !0;
		c.menu = c.contextmenu = null;
		c.dialogs = []
	}

	function Lb(a, b) {
		function c(a) {
			m(N, function(b, c) {
				wa(c) && c.call(a, KindEditor)
			});
			return a.create()
		}
		b = b || {};
		b.basePath = l(b.basePath, f.basePath);
		b.themesPath = l(b.themesPath, b.basePath + "themes/");
		b.langPath = l(b.langPath, b.basePath + "lang/");
		b.pluginsPath = l(b.pluginsPath, b.basePath + "plugins/");
		if(l(b.loadStyleMode, f.options.loadStyleMode)) {
			var d = l(b.themeType, f.options.themeType);
			cb(b.themesPath + "default/default.css");
			cb(b.themesPath + d + "/" + d + ".css")
		}
		if((d = f(a)) && d.length !== 0) {
			if(d.length > 1) return d.each(function() {
				Lb(this,
					b)
			}), _instances[0];
			b.srcElement = d[0];
			var e = new ua(b);
			_instances.push(e);
			if(O[e.langType]) return c(e);
			bb(e.langPath + e.langType + ".js?ver=" + encodeURIComponent(f.DEBUG ? Ga : Ha), function() {
				c(e)
			});
			return e
		}
	}

	function va(a, b) {
		f(a).each(function(a, d) {
			f.each(_instances, function(a, c) {
				if(c && c.srcElement[0] == d) return b.call(c, a), !1
			})
		})
	}
	if(!w.KindEditor) {
		if(!w.console) w.console = {};
		if(!console.log) console.log = function() {};
		var Ha = "4.1.10 (2013-11-23)",
			p = navigator.userAgent.toLowerCase(),
			o = p.indexOf("msie") > -1 && p.indexOf("opera") ==
			-1,
			Yb = p.indexOf("msie") == -1 && p.indexOf("trident") > -1,
			Y = p.indexOf("gecko") > -1 && p.indexOf("khtml") == -1,
			X = p.indexOf("applewebkit") > -1,
			Pa = p.indexOf("opera") > -1,
			ec = p.indexOf("mobile") > -1,
			fc = /ipad|iphone|ipod/.test(p),
			P = document.compatMode != "CSS1Compat",
			H = !w.getSelection,
			A = (p = /(?:msie|firefox|webkit|opera)[\/:\s](\d+)/.exec(p)) ? p[1] : "0",
			Ga = (new Date).getTime(),
			R = Math.round,
			f = {
				DEBUG: !1,
				VERSION: Ha,
				IE: o,
				GECKO: Y,
				WEBKIT: X,
				OPERA: Pa,
				V: A,
				TIME: Ga,
				each: m,
				isArray: Z,
				isFunction: wa,
				inArray: J,
				inString: xa,
				trim: B,
				addUnit: s,
				removeUnit: t,
				escape: C,
				unescape: fa,
				toCamel: ga,
				toHex: ya,
				toMap: u,
				toArray: Ja,
				undef: l,
				invalidUrl: function(a) {
					return !a || /[<>"]/.test(a)
				},
				addParam: function(a, b) {
					return a.indexOf("?") >= 0 ? a + "&" + b : a + "?" + b
				},
				extend: E,
				json: eb
			},
			lb = u("a,abbr,acronym,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,img,input,ins,kbd,label,map,q,s,samp,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),
			mb = u("address,applet,blockquote,body,center,dd,dir,div,dl,dt,fieldset,form,frameset,h1,h2,h3,h4,h5,h6,head,hr,html,iframe,ins,isindex,li,map,menu,meta,noframes,noscript,object,ol,p,pre,script,style,table,tbody,td,tfoot,th,thead,title,tr,ul"),
			kb = u("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed"),
			Mb = u("b,basefont,big,del,em,font,i,s,small,span,strike,strong,sub,sup,u"),
			gc = u("img,table,input,textarea,button"),
			La = u("pre,style,script"),
			Ia = u("html,head,body,td,tr,table,ol,ul,li");
		u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");
		var Ub = u("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),
			Nb = u("input,button,textarea,select");
		f.basePath = function() {
			for(var a =
					document.getElementsByTagName("script"), b, c = 0, d = a.length; c < d; c++)
				if(b = a[c].src || "", /kindeditor[\w\-\.]*\.js/.test(b)) return b.substring(0, b.lastIndexOf("/") + 1);
			return ""
		}();
		f.options = {
			designMode: !0,
			fullscreenMode: !1,
			filterMode: !0,
			wellFormatMode: !0,
			shadowMode: !0,
			loadStyleMode: !0,
			basePath: f.basePath,
			themesPath: f.basePath + "themes/",
			langPath: f.basePath + "lang/",
			pluginsPath: f.basePath + "plugins/",
			themeType: "default",
			langType: "zh_CN",
			urlType: "",
			newlineTag: "p",
			resizeType: 2,
			syncType: "form",
			pasteType: 2,
			dialogAlignType: "page",
			useContextmenu: !0,
			fullscreenShortcut: !1,
			bodyClass: "ke-content",
			indentChar: "\t",
			cssPath: "",
			cssData: "",
			minWidth: 650,
			minHeight: 100,
			minChangeSize: 50,
			zIndex: 811213,
			items: ["source", "|", "undo", "redo", "|", "preview", "print", "template", "code", "cut", "copy", "paste", "plainpaste", "wordpaste", "|", "justifyleft", "justifycenter", "justifyright", "justifyfull", "insertorderedlist", "insertunorderedlist", "indent", "outdent", "subscript", "superscript", "clearhtml", "quickformat", "selectall", "|", "fullscreen", "/", "formatblock",
				"fontname", "fontsize", "|", "forecolor", "hilitecolor", "bold", "italic", "underline", "strikethrough", "lineheight", "removeformat", "|", "image", "multiimage", "flash", "media", "insertfile", "table", "hr", "emoticons", "baidumap", "pagebreak", "anchor", "link", "unlink", "|", "about"
			],
			noDisableItems: ["source", "fullscreen"],
			colorTable: [
				["#E53333", "#E56600", "#FF9900", "#64451D", "#DFC5A4", "#FFE500"],
				["#009900", "#006600", "#99BB00", "#B8D100", "#60D978", "#00D5FF"],
				["#337FE5", "#003399", "#4C33E5", "#9933E5", "#CC33E5", "#EE33EE"],
				["#FFFFFF", "#CCCCCC", "#999999", "#666666", "#333333", "#000000"]
			],
			fontSizeTable: ["9px", "10px", "12px", "14px", "16px", "18px", "24px", "32px"],
			htmlTags: {
				font: ["id", "class", "color", "size", "face", ".background-color"],
				span: ["id", "class", ".color", ".background-color", ".font-size", ".font-family", ".background", ".font-weight", ".font-style", ".text-decoration", ".vertical-align", ".line-height"],
				div: ["id", "class", "align", ".border", ".margin", ".padding", ".text-align", ".color", ".background-color", ".font-size", ".font-family",
					".font-weight", ".background", ".font-style", ".text-decoration", ".vertical-align", ".margin-left"
				],
				table: ["id", "class", "border", "cellspacing", "cellpadding", "width", "height", "align", "bordercolor", ".padding", ".margin", ".border", "bgcolor", ".text-align", ".color", ".background-color", ".font-size", ".font-family", ".font-weight", ".font-style", ".text-decoration", ".background", ".width", ".height", ".border-collapse"],
				"td,th": ["id", "class", "align", "valign", "width", "height", "colspan", "rowspan", "bgcolor", ".text-align",
					".color", ".background-color", ".font-size", ".font-family", ".font-weight", ".font-style", ".text-decoration", ".vertical-align", ".background", ".border"
				],
				a: ["id", "class", "href", "target", "name"],
				embed: ["id", "class", "src", "width", "height", "type", "loop", "autostart", "quality", ".width", ".height", "align", "allowscriptaccess"],
				img: ["id", "class", "src", "width", "height", "border", "alt", "title", "align", ".width", ".height", ".border"],
				"p,ol,ul,li,blockquote,h1,h2,h3,h4,h5,h6": ["id", "class", "align", ".text-align", ".color",
					".background-color", ".font-size", ".font-family", ".background", ".font-weight", ".font-style", ".text-decoration", ".vertical-align", ".text-indent", ".margin-left"
				],
				pre: ["id", "class"],
				hr: ["id", "class", ".page-break-after"],
				"br,tbody,tr,strong,b,sub,sup,em,i,u,strike,s,del": ["id", "class"],
				iframe: ["id", "class", "src", "frameborder", "width", "height", ".width", ".height"]
			},
			layout: '<div class="container"><div class="toolbar"></div><div class="edit"></div><div class="statusbar"></div></div>'
		};
		var fb = !1,
			Ob = u("8,9,13,32,46,48..57,59,61,65..90,106,109..111,188,190..192,219..222"),
			p = u("33..40"),
			db = {};
		m(Ob, function(a, b) {
			db[a] = b
		});
		m(p, function(a, b) {
			db[a] = b
		});
		var hc = "altKey,attrChange,attrName,bubbles,button,cancelable,charCode,clientX,clientY,ctrlKey,currentTarget,data,detail,eventPhase,fromElement,handler,keyCode,metaKey,newValue,offsetX,offsetY,originalTarget,pageX,pageY,prevValue,relatedNode,relatedTarget,screenX,screenY,shiftKey,srcElement,target,toElement,view,wheelDelta,which".split(",");
		E(gb, {
			init: function(a, b) {
				var c = this,
					d = a.ownerDocument || a.document || a;
				c.event = b;
				m(hc,
					function(a, d) {
						c[d] = b[d]
					});
				if(!c.target) c.target = c.srcElement || d;
				if(c.target.nodeType === 3) c.target = c.target.parentNode;
				if(!c.relatedTarget && c.fromElement) c.relatedTarget = c.fromElement === c.target ? c.toElement : c.fromElement;
				if(c.pageX == null && c.clientX != null) {
					var e = d.documentElement,
						d = d.body;
					c.pageX = c.clientX + (e && e.scrollLeft || d && d.scrollLeft || 0) - (e && e.clientLeft || d && d.clientLeft || 0);
					c.pageY = c.clientY + (e && e.scrollTop || d && d.scrollTop || 0) - (e && e.clientTop || d && d.clientTop || 0)
				}
				if(!c.which && (c.charCode || c.charCode ===
						0 ? c.charCode : c.keyCode)) c.which = c.charCode || c.keyCode;
				if(!c.metaKey && c.ctrlKey) c.metaKey = c.ctrlKey;
				if(!c.which && c.button !== i) c.which = c.button & 1 ? 1 : c.button & 2 ? 3 : c.button & 4 ? 2 : 0;
				switch(c.which) {
					case 186:
						c.which = 59;
						break;
					case 187:
					case 107:
					case 43:
						c.which = 61;
						break;
					case 189:
					case 45:
						c.which = 109;
						break;
					case 42:
						c.which = 106;
						break;
					case 47:
						c.which = 111;
						break;
					case 78:
						c.which = 110
				}
				c.which >= 96 && c.which <= 105 && (c.which -= 48)
			},
			preventDefault: function() {
				var a = this.event;
				a.preventDefault ? a.preventDefault() : a.returnValue = !1
			},
			stopPropagation: function() {
				var a = this.event;
				a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
			},
			stop: function() {
				this.preventDefault();
				this.stopPropagation()
			}
		});
		var $ = "kindeditor_" + Ga,
			ib = 0,
			v = {},
			Pb = !1;
		o && w.attachEvent("onunload", function() {
			m(v, function(a, b) {
				b.el && ha(b.el)
			})
		});
		f.ctrl = Ka;
		f.ready = function(a) {
			function b() {
				e || (e = !0, a(KindEditor), Pb = !0)
			}

			function c() {
				if(!e) {
					try {
						document.documentElement.doScroll("left")
					} catch(a) {
						setTimeout(c, 100);
						return
					}
					b()
				}
			}

			function d() {
				document.readyState === "complete" &&
					b()
			}
			if(Pb) a(KindEditor);
			else {
				var e = !1;
				if(document.addEventListener) aa(document, "DOMContentLoaded", b);
				else if(document.attachEvent) {
					aa(document, "readystatechange", d);
					var g = !1;
					try {
						g = w.frameElement == null
					} catch(f) {}
					document.documentElement.doScroll && g && c()
				}
				aa(w, "load", b)
			}
		};
		f.formatUrl = ia;
		f.formatHtml = U;
		f.getCssList = ba;
		f.getAttrList = I;
		f.mediaType = ob;
		f.mediaAttrs = pb;
		f.mediaEmbed = Ma;
		f.mediaImg = qb;
		f.clearMsWord = nb;
		f.tmpl = function(a, b) {
			var c = new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" +
				a.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");
			return b ? c(b) : c
		};
		p = document.createElement("div");
		p.setAttribute("className", "t");
		var Vb = p.className !== "t";
		f.query = function(a, b) {
			var c = Ca(a, b);
			return c.length > 0 ? c[0] : null
		};
		f.queryAll = Ca;
		E(D, {
			init: function(a) {
				for(var a = Z(a) ? a : [a], b = 0, c = 0, d = a.length; c < d; c++) a[c] && (this[c] = a[c].constructor ===
					D ? a[c][0] : a[c], b++);
				this.length = b;
				this.doc = V(this[0]);
				this.name = Oa(this[0]);
				this.type = this.length > 0 ? this[0].nodeType : null;
				this.win = W(this[0])
			},
			each: function(a) {
				for(var b = 0; b < this.length; b++)
					if(a.call(this[b], b, this[b]) === !1) break;
				return this
			},
			bind: function(a, b) {
				this.each(function() {
					aa(this, a, b)
				});
				return this
			},
			unbind: function(a, b) {
				this.each(function() {
					ha(this, a, b)
				});
				return this
			},
			fire: function(a) {
				if(this.length < 1) return this;
				jb(this[0], a);
				return this
			},
			hasAttr: function(a) {
				if(this.length < 1) return !1;
				return !!Ba(this[0],
					a)
			},
			attr: function(a, b) {
				var c = this;
				if(a === i) return I(c.outer());
				if(typeof a === "object") return m(a, function(a, b) {
					c.attr(a, b)
				}), c;
				if(b === i) return b = c.length < 1 ? null : Ba(c[0], a), b === null ? "" : b;
				c.each(function() {
					Na(this, a, b)
				});
				return c
			},
			removeAttr: function(a) {
				this.each(function() {
					var b = a;
					o && A < 8 && b.toLowerCase() == "class" && (b = "className");
					Na(this, b, "");
					this.removeAttribute(b)
				});
				return this
			},
			get: function(a) {
				if(this.length < 1) return null;
				return this[a || 0]
			},
			eq: function(a) {
				if(this.length < 1) return null;
				return this[a] ?
					new D(this[a]) : null
			},
			hasClass: function(a) {
				if(this.length < 1) return !1;
				return xa(a, this[0].className, " ")
			},
			addClass: function(a) {
				this.each(function() {
					if(!xa(a, this.className, " ")) this.className = B(this.className + " " + a)
				});
				return this
			},
			removeClass: function(a) {
				this.each(function() {
					if(xa(a, this.className, " ")) this.className = B(this.className.replace(RegExp("(^|\\s)" + a + "(\\s|$)"), " "))
				});
				return this
			},
			html: function(a) {
				if(a === i) {
					if(this.length < 1 || this.type != 1) return "";
					return U(this[0].innerHTML)
				}
				this.each(function() {
					Wb(this,
						a)
				});
				return this
			},
			text: function() {
				if(this.length < 1) return "";
				return o ? this[0].innerText : this[0].textContent
			},
			hasVal: function() {
				if(this.length < 1) return !1;
				return !!Nb[Oa(this[0])]
			},
			val: function(a) {
				if(a === i) {
					if(this.length < 1) return "";
					return this.hasVal() ? this[0].value : this.attr("value")
				} else return this.each(function() {
					Nb[Oa(this)] ? this.value = a : Na(this, "value", a)
				}), this
			},
			css: function(a, b) {
				var c = this;
				if(a === i) return ba(c.attr("style"));
				if(typeof a === "object") return m(a, function(a, b) {
					c.css(a, b)
				}), c;
				if(b ===
					i) {
					if(c.length < 1) return "";
					return c[0].style[ga(a)] || Xb(c[0], a) || ""
				}
				c.each(function() {
					this.style[ga(a)] = b
				});
				return c
			},
			width: function(a) {
				if(a === i) {
					if(this.length < 1) return 0;
					return this[0].offsetWidth
				}
				return this.css("width", s(a))
			},
			height: function(a) {
				if(a === i) {
					if(this.length < 1) return 0;
					return this[0].offsetHeight
				}
				return this.css("height", s(a))
			},
			opacity: function(a) {
				this.each(function() {
					this.style.opacity === i ? this.style.filter = a == 1 ? "" : "alpha(opacity=" + a * 100 + ")" : this.style.opacity = a == 1 ? "" : a
				});
				return this
			},
			data: function(a, b) {
				a = "kindeditor_data_" + a;
				if(b === i) {
					if(this.length < 1) return null;
					return this[0][a]
				}
				this.each(function() {
					this[a] = b
				});
				return this
			},
			pos: function() {
				var a = this[0],
					b = 0,
					c = 0;
				if(a)
					if(a.getBoundingClientRect) a = a.getBoundingClientRect(), c = ca(this.doc), b = a.left + c.x, c = a.top + c.y;
					else
						for(; a;) b += a.offsetLeft, c += a.offsetTop, a = a.offsetParent;
				return {
					x: R(b),
					y: R(c)
				}
			},
			clone: function(a) {
				if(this.length < 1) return new D([]);
				return new D(this[0].cloneNode(a))
			},
			append: function(a) {
				this.each(function() {
					this.appendChild &&
						this.appendChild(f(a)[0])
				});
				return this
			},
			appendTo: function(a) {
				this.each(function() {
					f(a)[0].appendChild(this)
				});
				return this
			},
			before: function(a) {
				this.each(function() {
					this.parentNode.insertBefore(f(a)[0], this)
				});
				return this
			},
			after: function(a) {
				this.each(function() {
					this.nextSibling ? this.parentNode.insertBefore(f(a)[0], this.nextSibling) : this.parentNode.appendChild(f(a)[0])
				});
				return this
			},
			replaceWith: function(a) {
				var b = [];
				this.each(function(c, d) {
					ha(d);
					var e = f(a)[0];
					d.parentNode.replaceChild(e, d);
					b.push(e)
				});
				return f(b)
			},
			empty: function() {
				this.each(function(a, b) {
					for(var c = b.firstChild; c;) {
						if(!b.parentNode) break;
						var d = c.nextSibling;
						c.parentNode.removeChild(c);
						c = d
					}
				});
				return this
			},
			remove: function(a) {
				var b = this;
				b.each(function(c, d) {
					if(d.parentNode) {
						ha(d);
						if(a)
							for(var e = d.firstChild; e;) {
								var g = e.nextSibling;
								d.parentNode.insertBefore(e, d);
								e = g
							}
						d.parentNode.removeChild(d);
						delete b[c]
					}
				});
				b.length = 0;
				return b
			},
			show: function(a) {
				a === i && (a = this._originDisplay || "");
				if(this.css("display") != "none") return this;
				return this.css("display",
					a)
			},
			hide: function() {
				if(this.length < 1) return this;
				this._originDisplay = this[0].style.display;
				return this.css("display", "none")
			},
			outer: function() {
				if(this.length < 1) return "";
				var a = this.doc.createElement("div");
				a.appendChild(this[0].cloneNode(!0));
				return U(a.innerHTML)
			},
			isSingle: function() {
				return !!kb[this.name]
			},
			isInline: function() {
				return !!lb[this.name]
			},
			isBlock: function() {
				return !!mb[this.name]
			},
			isStyle: function() {
				return !!Mb[this.name]
			},
			isControl: function() {
				return !!gc[this.name]
			},
			contains: function(a) {
				if(this.length <
					1) return !1;
				return Aa(this[0], f(a)[0])
			},
			parent: function() {
				if(this.length < 1) return null;
				var a = this[0].parentNode;
				return a ? new D(a) : null
			},
			children: function() {
				if(this.length < 1) return new D([]);
				for(var a = [], b = this[0].firstChild; b;)(b.nodeType != 3 || B(b.nodeValue) !== "") && a.push(b), b = b.nextSibling;
				return new D(a)
			},
			first: function() {
				var a = this.children();
				return a.length > 0 ? a.eq(0) : null
			},
			last: function() {
				var a = this.children();
				return a.length > 0 ? a.eq(a.length - 1) : null
			},
			index: function() {
				if(this.length < 1) return -1;
				for(var a = -1, b = this[0]; b;) a++, b = b.previousSibling;
				return a
			},
			prev: function() {
				if(this.length < 1) return null;
				var a = this[0].previousSibling;
				return a ? new D(a) : null
			},
			next: function() {
				if(this.length < 1) return null;
				var a = this[0].nextSibling;
				return a ? new D(a) : null
			},
			scan: function(a, b) {
				function c(d) {
					for(d = b ? d.firstChild : d.lastChild; d;) {
						var e = b ? d.nextSibling : d.previousSibling;
						if(a(d) === !1) return !1;
						if(c(d) === !1) return !1;
						d = e
					}
				}
				if(!(this.length < 1)) return b = b === i ? !0 : b, c(this[0]), this
			}
		});
		m("blur,focus,focusin,focusout,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error,contextmenu".split(","),
			function(a, b) {
				D.prototype[b] = function(a) {
					return a ? this.bind(b, a) : this.fire(b)
				}
			});
		p = f;
		f = function(a, b) {
			function c(a) {
				a[0] || (a = []);
				return new D(a)
			}
			if(!(a === i || a === null)) {
				if(typeof a === "string") {
					b && (b = f(b)[0]);
					var d = a.length;
					a.charAt(0) === "@" && (a = a.substr(1));
					if(a.length !== d || /<.+>/.test(a)) {
						var d = (b ? b.ownerDocument || b : document).createElement("div"),
							e = [];
						d.innerHTML = '<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />' + a;
						for(var g = 0, h = d.childNodes.length; g < h; g++) {
							var j = d.childNodes[g];
							j.id != "__kindeditor_temp_tag__" && e.push(j)
						}
						return c(e)
					}
					return c(Ca(a, b))
				}
				if(a && a.constructor === D) return a;
				a.toArray && (a = a.toArray());
				if(Z(a)) return c(a);
				return c(Ja(arguments))
			}
		};
		m(p, function(a, b) {
			f[a] = b
		});
		f.NodeClass = D;
		w.KindEditor = f;
		var la = 0,
			ka = 1,
			da = 2,
			ma = 3,
			Qb = 0;
		E(M, {
			init: function(a) {
				this.startContainer = a;
				this.startOffset = 0;
				this.endContainer = a;
				this.endOffset = 0;
				this.collapsed = !0;
				this.doc = a
			},
			commonAncestor: function() {
				function a(a) {
					for(var b = []; a;) b.push(a), a = a.parentNode;
					return b
				}
				for(var b = a(this.startContainer),
						c = a(this.endContainer), d = 0, e = b.length, g = c.length, f, j; ++d;)
					if(f = b[e - d], j = c[g - d], !f || !j || f !== j) break;
				return b[e - d + 1]
			},
			setStart: function(a, b) {
				var c = this.doc;
				this.startContainer = a;
				this.startOffset = b;
				if(this.endContainer === c) this.endContainer = a, this.endOffset = b;
				return rb(this)
			},
			setEnd: function(a, b) {
				var c = this.doc;
				this.endContainer = a;
				this.endOffset = b;
				if(this.startContainer === c) this.startContainer = a, this.startOffset = b;
				return rb(this)
			},
			setStartBefore: function(a) {
				return this.setStart(a.parentNode || this.doc,
					f(a).index())
			},
			setStartAfter: function(a) {
				return this.setStart(a.parentNode || this.doc, f(a).index() + 1)
			},
			setEndBefore: function(a) {
				return this.setEnd(a.parentNode || this.doc, f(a).index())
			},
			setEndAfter: function(a) {
				return this.setEnd(a.parentNode || this.doc, f(a).index() + 1)
			},
			selectNode: function(a) {
				return this.setStartBefore(a).setEndAfter(a)
			},
			selectNodeContents: function(a) {
				var b = f(a);
				if(b.type == 3 || b.isSingle()) return this.selectNode(a);
				b = b.children();
				if(b.length > 0) return this.setStartBefore(b[0]).setEndAfter(b[b.length -
					1]);
				return this.setStart(a, 0).setEnd(a, 0)
			},
			collapse: function(a) {
				if(a) return this.setEnd(this.startContainer, this.startOffset);
				return this.setStart(this.endContainer, this.endOffset)
			},
			compareBoundaryPoints: function(a, b) {
				var c = this.get(),
					d = b.get();
				if(H) {
					var e = {};
					e[la] = "StartToStart";
					e[ka] = "EndToStart";
					e[da] = "EndToEnd";
					e[ma] = "StartToEnd";
					c = c.compareEndPoints(e[a], d);
					if(c !== 0) return c;
					var g, h, j, k;
					if(a === la || a === ma) g = this.startContainer, j = this.startOffset;
					if(a === ka || a === da) g = this.endContainer, j = this.endOffset;
					if(a === la || a === ka) h = b.startContainer, k = b.startOffset;
					if(a === da || a === ma) h = b.endContainer, k = b.endOffset;
					if(g === h) return g = j - k, g > 0 ? 1 : g < 0 ? -1 : 0;
					for(c = h; c && c.parentNode !== g;) c = c.parentNode;
					if(c) return f(c).index() >= j ? -1 : 1;
					for(c = g; c && c.parentNode !== h;) c = c.parentNode;
					if(c) return f(c).index() >= k ? 1 : -1;
					if((c = f(h).next()) && c.contains(g)) return 1;
					if((c = f(g).next()) && c.contains(h)) return -1
				} else return c.compareBoundaryPoints(a, d)
			},
			cloneRange: function() {
				return(new M(this.doc)).setStart(this.startContainer, this.startOffset).setEnd(this.endContainer,
					this.endOffset)
			},
			toString: function() {
				var a = this.get();
				return(H ? a.text : a.toString()).replace(/\r\n|\n|\r/g, "")
			},
			cloneContents: function() {
				return Qa(this, !0, !1)
			},
			deleteContents: function() {
				return Qa(this, !1, !0)
			},
			extractContents: function() {
				return Qa(this, !0, !0)
			},
			insertNode: function(a) {
				var b = this.startContainer,
					c = this.startOffset,
					d = this.endContainer,
					e = this.endOffset,
					g, f, j, k = 1;
				if(a.nodeName.toLowerCase() === "#document-fragment") g = a.firstChild, f = a.lastChild, k = a.childNodes.length;
				b.nodeType == 1 ? (j = b.childNodes[c]) ?
					(b.insertBefore(a, j), b === d && (e += k)) : b.appendChild(a) : b.nodeType == 3 && (c === 0 ? (b.parentNode.insertBefore(a, b), b.parentNode === d && (e += k)) : c >= b.nodeValue.length ? b.nextSibling ? b.parentNode.insertBefore(a, b.nextSibling) : b.parentNode.appendChild(a) : (j = c > 0 ? b.splitText(c) : b, b.parentNode.insertBefore(a, j), b === d && (d = j, e -= c)));
				g ? this.setStartBefore(g).setEndAfter(f) : this.selectNode(a);
				if(this.compareBoundaryPoints(da, this.cloneRange().setEnd(d, e)) >= 1) return this;
				return this.setEnd(d, e)
			},
			surroundContents: function(a) {
				a.appendChild(this.extractContents());
				return this.insertNode(a).selectNode(a)
			},
			isControl: function() {
				var a = this.startContainer,
					b = this.startOffset,
					c = this.endContainer,
					d = this.endOffset;
				return a.nodeType == 1 && a === c && b + 1 === d && f(a.childNodes[b]).isControl()
			},
			get: function(a) {
				var b = this.doc;
				if(!H) {
					b = b.createRange();
					try {
						b.setStart(this.startContainer, this.startOffset), b.setEnd(this.endContainer, this.endOffset)
					} catch(c) {}
					return b
				}
				if(a && this.isControl()) return b = b.body.createControlRange(), b.addElement(this.startContainer.childNodes[this.startOffset]),
					b;
				a = this.cloneRange().down();
				b = b.body.createTextRange();
				b.setEndPoint("StartToStart", tb(a.startContainer, a.startOffset));
				b.setEndPoint("EndToStart", tb(a.endContainer, a.endOffset));
				return b
			},
			html: function() {
				return f(this.cloneContents()).outer()
			},
			down: function() {
				function a(a, d, e) {
					if(a.nodeType == 1 && (a = f(a).children(), a.length !== 0)) {
						var g, h, j, k;
						d > 0 && (g = a.eq(d - 1));
						d < a.length && (h = a.eq(d));
						if(g && g.type == 3) j = g[0], k = j.nodeValue.length;
						h && h.type == 3 && (j = h[0], k = 0);
						j && (e ? b.setStart(j, k) : b.setEnd(j, k))
					}
				}
				var b =
					this;
				a(b.startContainer, b.startOffset, !0);
				a(b.endContainer, b.endOffset, !1);
				return b
			},
			up: function() {
				function a(a, d, e) {
					a.nodeType == 3 && (d === 0 ? e ? b.setStartBefore(a) : b.setEndBefore(a) : d == a.nodeValue.length && (e ? b.setStartAfter(a) : b.setEndAfter(a)))
				}
				var b = this;
				a(b.startContainer, b.startOffset, !0);
				a(b.endContainer, b.endOffset, !1);
				return b
			},
			enlarge: function(a) {
				function b(b, e, g) {
					b = f(b);
					if(!(b.type == 3 || Ia[b.name] || !a && b.isBlock()))
						if(e === 0) {
							for(; !b.prev();) {
								e = b.parent();
								if(!e || Ia[e.name] || !a && e.isBlock()) break;
								b = e
							}
							g ? c.setStartBefore(b[0]) : c.setEndBefore(b[0])
						} else if(e == b.children().length) {
						for(; !b.next();) {
							e = b.parent();
							if(!e || Ia[e.name] || !a && e.isBlock()) break;
							b = e
						}
						g ? c.setStartAfter(b[0]) : c.setEndAfter(b[0])
					}
				}
				var c = this;
				c.up();
				b(c.startContainer, c.startOffset, !0);
				b(c.endContainer, c.endOffset, !1);
				return c
			},
			shrink: function() {
				for(var a, b = this.collapsed; this.startContainer.nodeType == 1 && (a = this.startContainer.childNodes[this.startOffset]) && a.nodeType == 1 && !f(a).isSingle();) this.setStart(a, 0);
				if(b) return this.collapse(b);
				for(; this.endContainer.nodeType == 1 && this.endOffset > 0 && (a = this.endContainer.childNodes[this.endOffset - 1]) && a.nodeType == 1 && !f(a).isSingle();) this.setEnd(a, a.childNodes.length);
				return this
			},
			createBookmark: function(a) {
				var b, c = f('<span style="display:none;"></span>', this.doc)[0];
				c.id = "__kindeditor_bookmark_start_" + Qb++ + "__";
				if(!this.collapsed) b = c.cloneNode(!0), b.id = "__kindeditor_bookmark_end_" + Qb++ + "__";
				b && this.cloneRange().collapse(!1).insertNode(b).setEndBefore(b);
				this.insertNode(c).setStartAfter(c);
				return {
					start: a ? "#" + c.id : c,
					end: b ? a ? "#" + b.id : b : null
				}
			},
			moveToBookmark: function(a) {
				var b = this.doc,
					c = f(a.start, b),
					a = a.end ? f(a.end, b) : null;
				if(!c || c.length < 1) return this;
				this.setStartBefore(c[0]);
				c.remove();
				a && a.length > 0 ? (this.setEndBefore(a[0]), a.remove()) : this.collapse(!0);
				return this
			},
			dump: function() {
				console.log("--------------------");
				console.log(this.startContainer.nodeType == 3 ? this.startContainer.nodeValue : this.startContainer, this.startOffset);
				console.log(this.endContainer.nodeType == 3 ? this.endContainer.nodeValue :
					this.endContainer, this.endOffset)
			}
		});
		f.RangeClass = M;
		f.range = Ra;
		f.START_TO_START = la;
		f.START_TO_END = ka;
		f.END_TO_END = da;
		f.END_TO_START = ma;
		E(oa, {
			init: function(a) {
				var b = a.doc;
				this.doc = b;
				this.win = W(b);
				this.sel = Sa(b);
				this.range = a
			},
			selection: function(a) {
				var b = this.doc,
					c;
				c = Sa(b);
				var d;
				try {
					d = c.rangeCount > 0 ? c.getRangeAt(0) : c.createRange()
				} catch(e) {}
				c = H && (!d || !d.item && d.parentElement().ownerDocument !== b) ? null : d;
				this.sel = Sa(b);
				if(c) return this.range = Ra(c), f(this.range.startContainer).name == "html" && this.range.selectNodeContents(b.body).collapse(!1),
					this;
				a && this.range.selectNodeContents(b.body).collapse(!1);
				return this
			},
			select: function(a) {
				var a = l(a, !0),
					b = this.sel,
					c = this.range.cloneRange().shrink(),
					d = c.startContainer,
					e = c.startOffset,
					g = V(d),
					h = this.win,
					j, k = !1;
				if(a && d.nodeType == 1 && c.collapsed) {
					if(H) {
						b = f("<span>&nbsp;</span>", g);
						c.insertNode(b[0]);
						j = g.body.createTextRange();
						try {
							j.moveToElementText(b[0])
						} catch(n) {}
						j.collapse(!1);
						j.select();
						b.remove();
						h.focus();
						return this
					}
					if(X && (a = d.childNodes, f(d).isInline() || e > 0 && f(a[e - 1]).isInline() || a[e] && f(a[e]).isInline())) c.insertNode(g.createTextNode("\u200b")),
						k = !0
				}
				if(H) try {
					j = c.get(!0), j.select()
				} catch(i) {} else k && c.collapse(!1), j = c.get(!0), b.removeAllRanges(), b.addRange(j), g !== document && (c = f(j.endContainer).pos(), h.scrollTo(c.x, c.y));
				h.focus();
				return this
			},
			wrap: function(a) {
				var b = this.range,
					c;
				c = f(a, this.doc);
				if(b.collapsed) return b.shrink(), b.insertNode(c[0]).selectNodeContents(c[0]), this;
				if(c.isBlock()) {
					for(var d = a = c.clone(!0); d.first();) d = d.first();
					d.append(b.extractContents());
					b.insertNode(a[0]).selectNode(a[0]);
					return this
				}
				b.enlarge();
				var e = b.createBookmark(),
					a = b.commonAncestor(),
					g = !1;
				f(a).scan(function(a) {
					if(!g && a == e.start) g = !0;
					else if(g) {
						if(a == e.end) return !1;
						var b = f(a),
							d;
						a: {
							for(d = b; d && d.name != "body";) {
								if(La[d.name] || d.name == "div" && d.hasClass("ke-script")) {
									d = !0;
									break a
								}
								d = d.parent()
							}
							d = !1
						}
						if(!d && b.type == 3 && B(a.nodeValue).length > 0) {
							for(var n;
								(n = b.parent()) && n.isStyle() && n.children().length == 1;) b = n;
							n = c;
							n = n.clone(!0);
							if(b.type == 3) Va(n).append(b.clone(!1)), b.replaceWith(n);
							else {
								for(var a = b, i;
									(i = b.first()) && i.children().length == 1;) b = i;
								i = b.first();
								for(b = b.doc.createDocumentFragment(); i;) b.appendChild(i[0]),
									i = i.next();
								i = a.clone(!0);
								d = Va(i);
								for(var r = i, l = !1; n;) {
									for(; r;) r.name === n.name && (Zb(r, n.attr(), n.css()), l = !0), r = r.first();
									l || d.append(n.clone(!1));
									l = !1;
									n = n.first()
								}
								n = i;
								b.firstChild && Va(n).append(b);
								a.replaceWith(n)
							}
						}
					}
				});
				b.moveToBookmark(e);
				return this
			},
			split: function(a, b) {
				for(var c = this.range, d = c.doc, e = c.cloneRange().collapse(a), g = e.startContainer, h = e.startOffset, j = g.nodeType == 3 ? g.parentNode : g, k = !1, n; j && j.parentNode;) {
					n = f(j);
					if(b) {
						if(!n.isStyle()) break;
						if(!Ta(n, b)) break
					} else if(Ia[n.name]) break;
					k = !0;
					j = j.parentNode
				}
				if(k) d = d.createElement("span"), c.cloneRange().collapse(!a).insertNode(d), a ? e.setStartBefore(j.firstChild).setEnd(g, h) : e.setStart(g, h).setEndAfter(j.lastChild), g = e.extractContents(), h = g.firstChild, k = g.lastChild, a ? (e.insertNode(g), c.setStartAfter(k).setEndBefore(d)) : (j.appendChild(g), c.setStartBefore(d).setEndBefore(h)), e = d.parentNode, e == c.endContainer && (j = f(d).prev(), g = f(d).next(), j && g && j.type == 3 && g.type == 3 ? c.setEnd(j[0], j[0].nodeValue.length) : a || c.setEnd(c.endContainer, c.endOffset -
					1)), e.removeChild(d);
				return this
			},
			remove: function(a) {
				var b = this.doc,
					c = this.range;
				c.enlarge();
				if(c.startOffset === 0) {
					for(var d = f(c.startContainer), e;
						(e = d.parent()) && e.isStyle() && e.children().length == 1;) d = e;
					c.setStart(d[0], 0);
					d = f(c.startContainer);
					d.isBlock() && Ua(d, a);
					(d = d.parent()) && d.isBlock() && Ua(d, a)
				}
				if(c.collapsed) {
					this.split(!0, a);
					b = c.startContainer;
					d = c.startOffset;
					if(d > 0 && (e = f(b.childNodes[d - 1])) && ea(e)) e.remove(), c.setStart(b, d - 1);
					(d = f(b.childNodes[d])) && ea(d) && d.remove();
					ea(b) && (c.startBefore(b),
						b.remove());
					c.collapse(!0);
					return this
				}
				this.split(!0, a);
				this.split(!1, a);
				var g = b.createElement("span"),
					h = b.createElement("span");
				c.cloneRange().collapse(!1).insertNode(h);
				c.cloneRange().collapse(!0).insertNode(g);
				var j = [],
					k = !1;
				f(c.commonAncestor()).scan(function(a) {
					if(!k && a == g) k = !0;
					else {
						if(a == h) return !1;
						k && j.push(a)
					}
				});
				f(g).remove();
				f(h).remove();
				b = c.startContainer;
				d = c.startOffset;
				e = c.endContainer;
				var n = c.endOffset;
				if(d > 0) {
					var i = f(b.childNodes[d - 1]);
					i && ea(i) && (i.remove(), c.setStart(b, d - 1), b == e && c.setEnd(e,
						n - 1));
					if((d = f(b.childNodes[d])) && ea(d)) d.remove(), b == e && c.setEnd(e, n - 1)
				}(b = f(e.childNodes[c.endOffset])) && ea(b) && b.remove();
				b = c.createBookmark(!0);
				m(j, function(b, c) {
					Ua(f(c), a)
				});
				c.moveToBookmark(b);
				return this
			},
			commonNode: function(a) {
				function b(b) {
					for(var c = b; b;) {
						if(Ta(f(b), a)) return f(b);
						b = b.parentNode
					}
					for(; c && (c = c.lastChild);)
						if(Ta(f(c), a)) return f(c);
					return null
				}
				var c = this.range,
					d = c.endContainer,
					c = c.endOffset,
					e = d.nodeType == 3 || c === 0 ? d : d.childNodes[c - 1],
					g = b(e);
				if(g) return g;
				if(e.nodeType == 1 || d.nodeType ==
					3 && c === 0)
					if(d = f(e).prev()) return b(d);
				return null
			},
			commonAncestor: function(a) {
				function b(b) {
					for(; b;) {
						if(b.nodeType == 1 && b.tagName.toLowerCase() === a) return b;
						b = b.parentNode
					}
					return null
				}
				var c = this.range,
					d = c.startContainer,
					e = c.startOffset,
					g = c.endContainer,
					c = c.endOffset,
					g = g.nodeType == 3 || c === 0 ? g : g.childNodes[c - 1],
					d = b(d.nodeType == 3 || e === 0 ? d : d.childNodes[e - 1]),
					e = b(g);
				if(d && e && d === e) return f(d);
				return null
			},
			state: function(a) {
				var b = this.doc,
					c = !1;
				try {
					c = b.queryCommandState(a)
				} catch(d) {}
				return c
			},
			val: function(a) {
				var b =
					this.doc,
					a = a.toLowerCase(),
					c = "";
				if(a === "fontfamily" || a === "fontname") return c = vb(b, "fontname"), c = c.replace(/['"]/g, ""), c.toLowerCase();
				if(a === "formatblock") {
					c = vb(b, a);
					if(c === "" && (a = this.commonNode({
							"h1,h2,h3,h4,h5,h6,p,div,pre,address": "*"
						}))) c = a.name;
					c === "Normal" && (c = "p");
					return c.toLowerCase()
				}
				if(a === "fontsize") return(a = this.commonNode({
					"*": ".font-size"
				})) && (c = a.css("font-size")), c.toLowerCase();
				if(a === "forecolor") return(a = this.commonNode({
						"*": ".color"
					})) && (c = a.css("color")), c = ya(c), c === "" && (c = "default"),
					c.toLowerCase();
				if(a === "hilitecolor") return(a = this.commonNode({
					"*": ".background-color"
				})) && (c = a.css("background-color")), c = ya(c), c === "" && (c = "default"), c.toLowerCase();
				return c
			},
			toggle: function(a, b) {
				this.commonNode(b) ? this.remove(b) : this.wrap(a);
				return this.select()
			},
			bold: function() {
				return this.toggle("<strong></strong>", {
					span: ".font-weight=bold",
					strong: "*",
					b: "*"
				})
			},
			italic: function() {
				return this.toggle("<em></em>", {
					span: ".font-style=italic",
					em: "*",
					i: "*"
				})
			},
			underline: function() {
				return this.toggle("<u></u>", {
					span: ".text-decoration=underline",
					u: "*"
				})
			},
			strikethrough: function() {
				return this.toggle("<s></s>", {
					span: ".text-decoration=line-through",
					s: "*"
				})
			},
			forecolor: function(a) {
				return this.wrap('<span style="color:' + a + ';"></span>').select()
			},
			hilitecolor: function(a) {
				return this.wrap('<span style="background-color:' + a + ';"></span>').select()
			},
			fontsize: function(a) {
				return this.wrap('<span style="font-size:' + a + ';"></span>').select()
			},
			fontname: function(a) {
				return this.fontfamily(a)
			},
			fontfamily: function(a) {
				return this.wrap('<span style="font-family:' +
					a + ';"></span>').select()
			},
			removeformat: function() {
				var a = {
					"*": ".font-weight,.font-style,.text-decoration,.color,.background-color,.font-size,.font-family,.text-indent"
				};
				m(Mb, function(b) {
					a[b] = "*"
				});
				this.remove(a);
				return this.select()
			},
			inserthtml: function(a, b) {
				function c(a, b) {
					var b = '<img id="__kindeditor_temp_tag__" width="0" height="0" style="display:none;" />' + b,
						c = a.get();
					c.item ? c.item(0).outerHTML = b : c.pasteHTML(b);
					var d = a.doc.getElementById("__kindeditor_temp_tag__");
					d.parentNode.removeChild(d);
					c =
						ub(c);
					a.setEnd(c.endContainer, c.endOffset);
					a.collapse(!1);
					e.select(!1)
				}

				function d(a, b) {
					var c = a.doc,
						d = c.createDocumentFragment();
					f("@" + b, c).each(function() {
						d.appendChild(this)
					});
					a.deleteContents();
					a.insertNode(d);
					a.collapse(!1);
					e.select(!1)
				}
				var e = this,
					g = e.range;
				if(a === "") return e;
				if(H && b) {
					try {
						c(g, a)
					} catch(h) {
						d(g, a)
					}
					return e
				}
				d(g, a);
				return e
			},
			hr: function() {
				return this.inserthtml("<hr />")
			},
			print: function() {
				this.win.print();
				return this
			},
			insertimage: function(a, b, c, d, e, g) {
				b = l(b, "");
				l(e, 0);
				a = '<img src="' +
					C(a) + '" data-ke-src="' + C(a) + '" ';
				c && (a += 'width="' + C(c) + '" ');
				d && (a += 'height="' + C(d) + '" ');
				b && (a += 'title="' + C(b) + '" ');
				g && (a += 'align="' + C(g) + '" ');
				a += 'alt="' + C(b) + '" ';
				a += "/>";
				return this.inserthtml(a)
			},
			createlink: function(a, b) {
				function c(a, b, c) {
					f(a).attr("href", b).attr("data-ke-src", b);
					c ? f(a).attr("target", c) : f(a).removeAttr("target")
				}
				var d = this.doc,
					e = this.range;
				this.select();
				var g = this.commonNode({
					a: "*"
				});
				g && !e.isControl() && (e.selectNode(g.get()), this.select());
				g = '<a href="' + C(a) + '" data-ke-src="' +
					C(a) + '" ';
				b && (g += ' target="' + C(b) + '"');
				if(e.collapsed) return g += ">" + C(a) + "</a>", this.inserthtml(g);
				if(e.isControl()) {
					var h = f(e.startContainer.childNodes[e.startOffset]);
					g += "></a>";
					h.after(f(g, d));
					h.next().append(h);
					e.selectNode(h[0]);
					return this.select()
				}
				var g = e.startContainer,
					h = e.startOffset,
					j = e.endContainer,
					e = e.endOffset;
				if(g.nodeType == 1 && g === j && h + 1 === e && (e = g.childNodes[h], e.nodeName.toLowerCase() == "a")) return c(e, a, b), this;
				Q(d, "createlink", "__kindeditor_temp_url__");
				f('a[href="__kindeditor_temp_url__"]',
					d).each(function() {
					c(this, a, b)
				});
				return this
			},
			unlink: function() {
				var a = this.doc,
					b = this.range;
				this.select();
				if(b.collapsed) {
					var c = this.commonNode({
						a: "*"
					});
					c && (b.selectNode(c.get()), this.select());
					Q(a, "unlink", null);
					X && f(b.startContainer).name === "img" && (a = f(b.startContainer).parent(), a.name === "a" && a.remove(!0))
				} else Q(a, "unlink", null);
				return this
			}
		});
		m("formatblock,selectall,justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,indent,outdent,subscript,superscript".split(","),
			function(a, b) {
				oa.prototype[b] = function(a) {
					this.select();
					Q(this.doc, b, a);
					H && J(b, "justifyleft,justifycenter,justifyright,justifyfull".split(",")) >= 0 && this.selection();
					(!H || J(b, "formatblock,selectall,insertorderedlist,insertunorderedlist".split(",")) >= 0) && this.selection();
					return this
				}
			});
		m("cut,copy,paste".split(","), function(a, b) {
			oa.prototype[b] = function() {
				if(!this.doc.queryCommandSupported(b)) throw "not supported";
				this.select();
				Q(this.doc, b, null);
				return this
			}
		});
		f.CmdClass = oa;
		f.cmd = zb;
		E(S, {
			init: function(a) {
				var b =
					this;
				b.name = a.name || "";
				b.doc = a.doc || document;
				b.win = W(b.doc);
				b.x = s(a.x);
				b.y = s(a.y);
				b.z = a.z;
				b.width = s(a.width);
				b.height = s(a.height);
				b.div = f('<div style="display:block;"></div>');
				b.options = a;
				b._alignEl = a.alignEl;
				b.width && b.div.css("width", b.width);
				b.height && b.div.css("height", b.height);
				b.z && b.div.css({
					position: "absolute",
					left: b.x,
					top: b.y,
					"z-index": b.z
				});
				b.z && (b.x === i || b.y === i) && b.autoPos(b.width, b.height);
				a.cls && b.div.addClass(a.cls);
				a.shadowMode && b.div.addClass("ke-shadow");
				a.css && b.div.css(a.css);
				a.src ? f(a.src).replaceWith(b.div) : f(b.doc.body).append(b.div);
				a.html && b.div.html(a.html);
				if(a.autoScroll)
					if(o && A < 7 || P) {
						var c = ca();
						f(b.win).bind("scroll", function() {
							var a = ca(),
								e = a.x - c.x,
								a = a.y - c.y;
							b.pos(t(b.x) + e, t(b.y) + a, !1)
						})
					} else b.div.css("position", "fixed")
			},
			pos: function(a, b, c) {
				c = l(c, !0);
				if(a !== null && (a = a < 0 ? 0 : s(a), this.div.css("left", a), c)) this.x = a;
				if(b !== null && (b = b < 0 ? 0 : s(b), this.div.css("top", b), c)) this.y = b;
				return this
			},
			autoPos: function(a, b) {
				var c = t(a) || 0,
					d = t(b) || 0,
					e = ca();
				if(this._alignEl) {
					var g =
						f(this._alignEl),
						h = g.pos(),
						c = R(g[0].clientWidth / 2 - c / 2),
						d = R(g[0].clientHeight / 2 - d / 2);
					x = c < 0 ? h.x : h.x + c;
					y = d < 0 ? h.y : h.y + d
				} else h = G(this.doc), x = R(e.x + (h.clientWidth - c) / 2), y = R(e.y + (h.clientHeight - d) / 2);
				o && A < 7 || P || (x -= e.x, y -= e.y);
				return this.pos(x, y)
			},
			remove: function() {
				var a = this;
				(o && A < 7 || P) && f(a.win).unbind("scroll");
				a.div.remove();
				m(a, function(b) {
					a[b] = null
				});
				return this
			},
			show: function() {
				this.div.show();
				return this
			},
			hide: function() {
				this.div.hide();
				return this
			},
			draggable: function(a) {
				var b = this,
					a = a || {};
				a.moveEl =
					b.div;
				a.moveFn = function(a, d, e, g, f, j) {
					if((a += f) < 0) a = 0;
					if((d += j) < 0) d = 0;
					b.pos(a, d)
				};
				Wa(a);
				return b
			}
		});
		f.WidgetClass = S;
		f.widget = Ya;
		var Za = "";
		if(p = document.getElementsByTagName("html")) Za = p[0].dir;
		E(qa, S, {
			init: function(a) {
				function b() {
					var b = Xa(c.iframe);
					b.open();
					if(j) b.domain = document.domain;
					b.write($b(d, e, g, h));
					b.close();
					c.win = c.iframe[0].contentWindow;
					c.doc = b;
					var k = zb(b);
					c.afterChange(function() {
						k.selection()
					});
					X && f(b).click(function(a) {
						f(a.target).name === "img" && (k.selection(!0), k.range.selectNode(a.target),
							k.select())
					});
					if(o) c._mousedownHandler = function() {
						var a = k.range.cloneRange();
						a.shrink();
						a.isControl() && c.blur()
					}, f(document).mousedown(c._mousedownHandler), f(b).keydown(function(a) {
						if(a.which == 8) {
							k.selection();
							var b = k.range;
							b.isControl() && (b.collapse(!0), f(b.startContainer.childNodes[b.startOffset]).remove(), a.preventDefault())
						}
					});
					c.cmd = k;
					c.html(pa(c.srcElement));
					o ? (b.body.disabled = !0, b.body.contentEditable = !0, b.body.removeAttribute("disabled")) : b.designMode = "on";
					a.afterCreate && a.afterCreate.call(c)
				}
				var c = this;
				qa.parent.init.call(c, a);
				c.srcElement = f(a.srcElement);
				c.div.addClass("ke-edit");
				c.designMode = l(a.designMode, !0);
				c.beforeGetHtml = a.beforeGetHtml;
				c.beforeSetHtml = a.beforeSetHtml;
				c.afterSetHtml = a.afterSetHtml;
				var d = l(a.themesPath, ""),
					e = a.bodyClass,
					g = a.cssPath,
					h = a.cssData,
					j = location.protocol != "res:" && location.host.replace(/:\d+/, "") !== document.domain,
					k = "document.open();" + (j ? 'document.domain="' + document.domain + '";' : "") + "document.close();",
					k = o ? ' src="javascript:void(function(){' + encodeURIComponent(k) +
					'}())"' : "";
				c.iframe = f('<iframe class="ke-edit-iframe" hidefocus="true" frameborder="0"' + k + "></iframe>").css("width", "100%");
				c.textarea = f('<textarea class="ke-edit-textarea" hidefocus="true"></textarea>').css("width", "100%");
				c.tabIndex = isNaN(parseInt(a.tabIndex, 10)) ? c.srcElement.attr("tabindex") : parseInt(a.tabIndex, 10);
				c.iframe.attr("tabindex", c.tabIndex);
				c.textarea.attr("tabindex", c.tabIndex);
				c.width && c.setWidth(c.width);
				c.height && c.setHeight(c.height);
				c.designMode ? c.textarea.hide() : c.iframe.hide();
				j && c.iframe.bind("load", function() {
					c.iframe.unbind("load");
					o ? b() : setTimeout(b, 0)
				});
				c.div.append(c.iframe);
				c.div.append(c.textarea);
				c.srcElement.hide();
				!j && b()
			},
			setWidth: function(a) {
				this.width = a = s(a);
				this.div.css("width", a);
				return this
			},
			setHeight: function(a) {
				this.height = a = s(a);
				this.div.css("height", a);
				this.iframe.css("height", a);
				if(o && A < 8 || P) a = s(t(a) - 2);
				this.textarea.css("height", a);
				return this
			},
			remove: function() {
				var a = this.doc;
				f(a.body).unbind();
				f(a).unbind();
				f(this.win).unbind();
				this._mousedownHandler &&
					f(document).unbind("mousedown", this._mousedownHandler);
				pa(this.srcElement, this.html());
				this.srcElement.show();
				a.write("");
				this.iframe.unbind();
				this.textarea.unbind();
				qa.parent.remove.call(this)
			},
			html: function(a, b) {
				var c = this.doc;
				if(this.designMode) {
					c = c.body;
					if(a === i) return a = b ? "<!doctype html><html>" + c.parentNode.innerHTML + "</html>" : c.innerHTML, this.beforeGetHtml && (a = this.beforeGetHtml(a)), Y && a == "<br />" && (a = ""), a;
					this.beforeSetHtml && (a = this.beforeSetHtml(a));
					o && A >= 9 && (a = a.replace(/(<.*?checked=")checked(".*>)/ig,
						"$1$2"));
					f(c).html(a);
					this.afterSetHtml && this.afterSetHtml();
					return this
				}
				if(a === i) return this.textarea.val();
				this.textarea.val(a);
				return this
			},
			design: function(a) {
				if(a === i ? !this.designMode : a) {
					if(!this.designMode) a = this.html(), this.designMode = !0, this.html(a), this.textarea.hide(), this.iframe.show()
				} else if(this.designMode) a = this.html(), this.designMode = !1, this.html(a), this.iframe.hide(), this.textarea.show();
				return this.focus()
			},
			focus: function() {
				this.designMode ? this.win.focus() : this.textarea[0].focus();
				return this
			},
			blur: function() {
				if(o) {
					var a = f('<input type="text" style="float:left;width:0;height:0;padding:0;margin:0;border:0;" value="" />', this.div);
					this.div.append(a);
					a[0].focus();
					a.remove()
				} else this.designMode ? this.win.blur() : this.textarea[0].blur();
				return this
			},
			afterChange: function(a) {
				function b(b) {
					setTimeout(function() {
						a(b)
					}, 1)
				}
				var c = this.doc,
					d = c.body;
				f(c).keyup(function(b) {
					!b.ctrlKey && !b.altKey && db[b.which] && a(b)
				});
				f(c).mouseup(a).contextmenu(a);
				f(this.win).blur(a);
				f(d).bind("paste", b);
				f(d).bind("cut",
					b);
				return this
			}
		});
		f.EditClass = qa;
		f.edit = Ab;
		f.iframeDoc = Xa;
		E(Da, S, {
			init: function(a) {
				function b(a) {
					a = f(a);
					if(a.hasClass("ke-outline")) return a;
					if(a.hasClass("ke-toolbar-icon")) return a.parent()
				}

				function c(a, c) {
					var d = b(a.target);
					if(d && !d.hasClass("ke-disabled") && !d.hasClass("ke-selected")) d[c]("ke-on")
				}
				var d = this;
				Da.parent.init.call(d, a);
				d.disableMode = l(a.disableMode, !1);
				d.noDisableItemMap = u(l(a.noDisableItems, []));
				d._itemMap = {};
				d.div.addClass("ke-toolbar").bind("contextmenu,mousedown,mousemove", function(a) {
					a.preventDefault()
				}).attr("unselectable",
					"on");
				d.div.mouseover(function(a) {
					c(a, "addClass")
				}).mouseout(function(a) {
					c(a, "removeClass")
				}).click(function(a) {
					var c = b(a.target);
					c && !c.hasClass("ke-disabled") && d.options.click.call(this, a, c.attr("data-name"))
				})
			},
			get: function(a) {
				if(this._itemMap[a]) return this._itemMap[a];
				return this._itemMap[a] = f("span.ke-icon-" + a, this.div).parent()
			},
			select: function(a) {
				Bb.call(this, a, function(a) {
					a.addClass("ke-selected")
				});
				return self
			},
			unselect: function(a) {
				Bb.call(this, a, function(a) {
					a.removeClass("ke-selected").removeClass("ke-on")
				});
				return self
			},
			enable: function(a) {
				if(a = a.get ? a : this.get(a)) a.removeClass("ke-disabled"), a.opacity(1);
				return this
			},
			disable: function(a) {
				if(a = a.get ? a : this.get(a)) a.removeClass("ke-selected").addClass("ke-disabled"), a.opacity(0.5);
				return this
			},
			disableAll: function(a, b) {
				var c = this,
					d = c.noDisableItemMap;
				b && (d = u(b));
				(a === i ? !c.disableMode : a) ? (f("span.ke-outline", c.div).each(function() {
					var a = f(this),
						b = a[0].getAttribute("data-name", 2);
					d[b] || c.disable(a)
				}), c.disableMode = !0) : (f("span.ke-outline", c.div).each(function() {
					var a =
						f(this),
						b = a[0].getAttribute("data-name", 2);
					d[b] || c.enable(a)
				}), c.disableMode = !1);
				return c
			}
		});
		f.ToolbarClass = Da;
		f.toolbar = Cb;
		E(ra, S, {
			init: function(a) {
				a.z = a.z || 811213;
				ra.parent.init.call(this, a);
				this.centerLineMode = l(a.centerLineMode, !0);
				this.div.addClass("ke-menu").bind("click,mousedown", function(a) {
					a.stopPropagation()
				}).attr("unselectable", "on")
			},
			addItem: function(a) {
				if(a.title === "-") this.div.append(f('<div class="ke-menu-separator"></div>'));
				else {
					var b = f('<div class="ke-menu-item" unselectable="on"></div>'),
						c = f('<div class="ke-inline-block ke-menu-item-left"></div>'),
						d = f('<div class="ke-inline-block ke-menu-item-right"></div>'),
						e = s(a.height),
						g = l(a.iconClass, "");
					this.div.append(b);
					e && (b.css("height", e), d.css("line-height", e));
					var h;
					this.centerLineMode && (h = f('<div class="ke-inline-block ke-menu-item-center"></div>'), e && h.css("height", e));
					b.mouseover(function() {
						f(this).addClass("ke-menu-item-on");
						h && h.addClass("ke-menu-item-center-on")
					}).mouseout(function() {
						f(this).removeClass("ke-menu-item-on");
						h && h.removeClass("ke-menu-item-center-on")
					}).click(function(b) {
						a.click.call(f(this));
						b.stopPropagation()
					}).append(c);
					h && b.append(h);
					b.append(d);
					a.checked && (g = "ke-icon-checked");
					g !== "" && c.html('<span class="ke-inline-block ke-toolbar-icon ke-toolbar-icon-url ' + g + '"></span>');
					d.html(a.title);
					return this
				}
			},
			remove: function() {
				this.options.beforeRemove && this.options.beforeRemove.call(this);
				f(".ke-menu-item", this.div[0]).unbind();
				ra.parent.remove.call(this);
				return this
			}
		});
		f.MenuClass = ra;
		f.menu = $a;
		E(sa, S, {
			init: function(a) {
				a.z = a.z || 811213;
				sa.parent.init.call(this, a);
				var b = a.colors || [
					["#E53333",
						"#E56600", "#FF9900", "#64451D", "#DFC5A4", "#FFE500"
					],
					["#009900", "#006600", "#99BB00", "#B8D100", "#60D978", "#00D5FF"],
					["#337FE5", "#003399", "#4C33E5", "#9933E5", "#CC33E5", "#EE33EE"],
					["#FFFFFF", "#CCCCCC", "#999999", "#666666", "#333333", "#000000"]
				];
				this.selectedColor = (a.selectedColor || "").toLowerCase();
				this._cells = [];
				this.div.addClass("ke-colorpicker").bind("click,mousedown", function(a) {
					a.stopPropagation()
				}).attr("unselectable", "on");
				a = this.doc.createElement("table");
				this.div.append(a);
				a.className = "ke-colorpicker-table";
				a.cellPadding = 0;
				a.cellSpacing = 0;
				a.border = 0;
				var c = a.insertRow(0),
					d = c.insertCell(0);
				d.colSpan = b[0].length;
				this._addAttr(d, "", "ke-colorpicker-cell-top");
				for(var e = 0; e < b.length; e++)
					for(var c = a.insertRow(e + 1), g = 0; g < b[e].length; g++) d = c.insertCell(g), this._addAttr(d, b[e][g], "ke-colorpicker-cell")
			},
			_addAttr: function(a, b, c) {
				var d = this,
					a = f(a).addClass(c);
				d.selectedColor === b.toLowerCase() && a.addClass("ke-colorpicker-cell-selected");
				a.attr("title", b || d.options.noColor);
				a.mouseover(function() {
					f(this).addClass("ke-colorpicker-cell-on")
				});
				a.mouseout(function() {
					f(this).removeClass("ke-colorpicker-cell-on")
				});
				a.click(function(a) {
					a.stop();
					d.options.click.call(f(this), b)
				});
				b ? a.append(f('<div class="ke-colorpicker-cell-color" unselectable="on"></div>').css("background-color", b)) : a.html(d.options.noColor);
				f(a).attr("unselectable", "on");
				d._cells.push(a)
			},
			remove: function() {
				m(this._cells, function() {
					this.unbind()
				});
				sa.parent.remove.call(this);
				return this
			}
		});
		f.ColorPickerClass = sa;
		f.colorpicker = Db;
		E(ab, {
			init: function(a) {
				var b = f(a.button),
					c = a.fieldName ||
					"file",
					d = a.url || "",
					e = b.val(),
					g = a.extraParams || {},
					h = b[0].className || "",
					j = a.target || "kindeditor_upload_iframe_" + (new Date).getTime();
				a.afterError = a.afterError || function(a) {
					alert(a)
				};
				var k = [],
					i;
				for(i in g) k.push('<input type="hidden" name="' + i + '" value="' + g[i] + '" />');
				c = ['<div class="ke-inline-block ' + h + '">', a.target ? "" : '<iframe name="' + j + '" style="display:none;"></iframe>', a.form ? '<div class="ke-upload-area">' : '<form class="ke-upload-area ke-form" method="post" enctype="multipart/form-data" target="' +
					j + '" action="' + d + '">', '<span class="ke-button-common">', k.join(""), '<input type="button" class="ke-button-common ke-button" value="' + e + '" />', "</span>", '<input type="file" class="ke-upload-file" name="' + c + '" tabindex="-1" />', a.form ? "</div>" : "</form>", "</div>"
				].join("");
				c = f(c, b.doc);
				b.hide();
				b.before(c);
				this.div = c;
				this.button = b;
				this.iframe = a.target ? f('iframe[name="' + j + '"]') : f("iframe", c);
				this.form = a.form ? f(a.form) : f("form", c);
				this.fileBox = f(".ke-upload-file", c);
				b = a.width || f(".ke-button-common", c).width();
				f(".ke-upload-area", c).width(b);
				this.options = a
			},
			submit: function() {
				var a = this,
					b = a.iframe;
				b.bind("load", function() {
					b.unbind();
					var c = document.createElement("form");
					a.fileBox.before(c);
					f(c).append(a.fileBox);
					c.reset();
					f(c).remove(!0);
					var c = f.iframeDoc(b),
						d = c.getElementsByTagName("pre")[0],
						e = "",
						g, e = d ? d.innerHTML : c.body.innerHTML,
						e = fa(e);
					b[0].src = "javascript:false";
					try {
						g = f.json(e)
					} catch(h) {
						a.options.afterError.call(a, "<!doctype html><html>" + c.body.parentNode.innerHTML + "</html>")
					}
					g && a.options.afterUpload.call(a,
						g)
				});
				a.form[0].submit();
				return a
			},
			remove: function() {
				this.fileBox && this.fileBox.unbind();
				this.iframe.remove();
				this.div.remove();
				this.button.show();
				return this
			}
		});
		f.UploadButtonClass = ab;
		f.uploadbutton = function(a) {
			return new ab(a)
		};
		E(ta, S, {
			init: function(a) {
				var b = l(a.shadowMode, !0);
				a.z = a.z || 811213;
				a.shadowMode = !1;
				a.autoScroll = l(a.autoScroll, !0);
				ta.parent.init.call(this, a);
				var c = a.title,
					d = f(a.body, this.doc),
					e = a.previewBtn,
					g = a.yesBtn,
					h = a.noBtn,
					j = a.closeBtn,
					k = l(a.showMask, !0);
				this.div.addClass("ke-dialog").bind("click,mousedown",
					function(a) {
						a.stopPropagation()
					});
				var i = f('<div class="ke-dialog-content"></div>').appendTo(this.div);
				o && A < 7 ? this.iframeMask = f('<iframe src="about:blank" class="ke-dialog-shadow"></iframe>').appendTo(this.div) : b && f('<div class="ke-dialog-shadow"></div>').appendTo(this.div);
				b = f('<div class="ke-dialog-header"></div>');
				i.append(b);
				b.html(c);
				this.closeIcon = f('<span class="ke-dialog-icon-close" title="' + j.name + '"></span>').click(j.click);
				b.append(this.closeIcon);
				this.draggable({
					clickEl: b,
					beforeDrag: a.beforeDrag
				});
				a = f('<div class="ke-dialog-body"></div>');
				i.append(a);
				a.append(d);
				var q = f('<div class="ke-dialog-footer"></div>');
				(e || g || h) && i.append(q);
				m([{
					btn: e,
					name: "preview"
				}, {
					btn: g,
					name: "yes"
				}, {
					btn: h,
					name: "no"
				}], function() {
					if(this.btn) {
						var a = this.btn,
							a = a || {},
							b = a.name || "",
							c = f('<span class="ke-button-common ke-button-outer" title="' + b + '"></span>'),
							b = f('<input class="ke-button-common ke-button" type="button" value="' + b + '" />');
						a.click && b.click(a.click);
						c.append(b);
						c.addClass("ke-dialog-" + this.name);
						q.append(c)
					}
				});
				this.height && a.height(t(this.height) - b.height() - q.height());
				this.div.width(this.div.width());
				this.div.height(this.div.height());
				this.mask = null;
				if(k) d = G(this.doc), this.mask = Ya({
					x: 0,
					y: 0,
					z: this.z - 1,
					cls: "ke-dialog-mask",
					width: Math.max(d.scrollWidth, d.clientWidth),
					height: Math.max(d.scrollHeight, d.clientHeight)
				});
				this.autoPos(this.div.width(), this.div.height());
				this.footerDiv = q;
				this.bodyDiv = a;
				this.headerDiv = b;
				this.isLoading = !1
			},
			setMaskIndex: function(a) {
				this.mask.div.css("z-index", a)
			},
			showLoading: function(a) {
				var a =
					l(a, ""),
					b = this.bodyDiv;
				this.loading = f('<div class="ke-dialog-loading"><div class="ke-inline-block ke-dialog-loading-content" style="margin-top:' + Math.round(b.height() / 3) + 'px;">' + a + "</div></div>").width(b.width()).height(b.height()).css("top", this.headerDiv.height() + "px");
				b.css("visibility", "hidden").after(this.loading);
				this.isLoading = !0;
				return this
			},
			hideLoading: function() {
				this.loading && this.loading.remove();
				this.bodyDiv.css("visibility", "visible");
				this.isLoading = !1;
				return this
			},
			remove: function() {
				this.options.beforeRemove &&
					this.options.beforeRemove.call(this);
				this.mask && this.mask.remove();
				this.iframeMask && this.iframeMask.remove();
				this.closeIcon.unbind();
				f("input", this.div).unbind();
				f("button", this.div).unbind();
				this.footerDiv.unbind();
				this.bodyDiv.unbind();
				this.headerDiv.unbind();
				f("iframe", this.div).each(function() {
					f(this).remove()
				});
				ta.parent.remove.call(this);
				return this
			}
		});
		f.DialogClass = ta;
		f.dialog = Eb;
		f.tabs = function(a) {
			var b = Ya(a),
				c = b.remove,
				d = a.afterSelect,
				a = b.div,
				e = [];
			a.addClass("ke-tabs").bind("contextmenu,mousedown,mousemove",
				function(a) {
					a.preventDefault()
				});
			var g = f('<ul class="ke-tabs-ul ke-clearfix"></ul>');
			a.append(g);
			b.add = function(a) {
				var b = f('<li class="ke-tabs-li">' + a.title + "</li>");
				b.data("tab", a);
				e.push(b);
				g.append(b)
			};
			b.selectedIndex = 0;
			b.select = function(a) {
				b.selectedIndex = a;
				m(e, function(c, d) {
					d.unbind();
					c === a ? (d.addClass("ke-tabs-li-selected"), f(d.data("tab").panel).show("")) : (d.removeClass("ke-tabs-li-selected").removeClass("ke-tabs-li-on").mouseover(function() {
							f(this).addClass("ke-tabs-li-on")
						}).mouseout(function() {
							f(this).removeClass("ke-tabs-li-on")
						}).click(function() {
							b.select(c)
						}),
						f(d.data("tab").panel).hide())
				});
				d && d.call(b, a)
			};
			b.remove = function() {
				m(e, function() {
					this.remove()
				});
				g.remove();
				c.call(b)
			};
			return b
		};
		f.loadScript = bb;
		f.loadStyle = cb;
		f.ajax = function(a, b, c, d, e) {
			var c = c || "GET",
				e = e || "json",
				g = w.XMLHttpRequest ? new w.XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
			g.open(c, a, !0);
			g.onreadystatechange = function() {
				if(g.readyState == 4 && g.status == 200 && b) {
					var a = B(g.responseText);
					e == "json" && (a = eb(a));
					b(a)
				}
			};
			if(c == "POST") {
				var f = [];
				m(d, function(a, b) {
					f.push(encodeURIComponent(a) +
						"=" + encodeURIComponent(b))
				});
				try {
					g.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
				} catch(j) {}
				g.send(f.join("&"))
			} else g.send(null)
		};
		var N = {},
			O = {};
		ua.prototype = {
			lang: function(a) {
				return Ib(a, this.langType)
			},
			loadPlugin: function(a, b) {
				var c = this;
				if(N[a]) {
					if(!wa(N[a])) return setTimeout(function() {
						c.loadPlugin(a, b)
					}, 100), c;
					N[a].call(c, KindEditor);
					b && b.call(c);
					return c
				}
				N[a] = "loading";
				bb(c.pluginsPath + a + "/" + a + ".js?ver=" + encodeURIComponent(f.DEBUG ? Ga : Ha), function() {
					setTimeout(function() {
						N[a] &&
							c.loadPlugin(a, b)
					}, 0)
				});
				return c
			},
			handler: function(a, b) {
				var c = this;
				c._handlers[a] || (c._handlers[a] = []);
				if(wa(b)) return c._handlers[a].push(b), c;
				m(c._handlers[a], function() {
					b = this.call(c, b)
				});
				return b
			},
			clickToolbar: function(a, b) {
				var c = this,
					d = "clickToolbar" + a;
				if(b === i) {
					if(c._handlers[d]) return c.handler(d);
					c.loadPlugin(a, function() {
						c.handler(d)
					});
					return c
				}
				return c.handler(d, b)
			},
			updateState: function() {
				var a = this;
				m("justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,subscript,superscript,bold,italic,underline,strikethrough".split(","),
					function(b, c) {
						a.cmd.state(c) ? a.toolbar.select(c) : a.toolbar.unselect(c)
					});
				return a
			},
			addContextmenu: function(a) {
				this._contextmenus.push(a);
				return this
			},
			afterCreate: function(a) {
				return this.handler("afterCreate", a)
			},
			beforeRemove: function(a) {
				return this.handler("beforeRemove", a)
			},
			beforeGetHtml: function(a) {
				return this.handler("beforeGetHtml", a)
			},
			beforeSetHtml: function(a) {
				return this.handler("beforeSetHtml", a)
			},
			afterSetHtml: function(a) {
				return this.handler("afterSetHtml", a)
			},
			create: function() {
				function a() {
					k.height() ===
						0 ? setTimeout(a, 100) : b.resize(d, e, !1)
				}
				var b = this,
					c = b.fullscreenMode;
				if(b.isCreated) return b;
				if(b.srcElement.data("kindeditor")) return b;
				b.srcElement.data("kindeditor", "true");
				c ? G().style.overflow = "hidden" : G().style.overflow = "";
				var d = c ? G().clientWidth + "px" : b.width,
					e = c ? G().clientHeight + "px" : b.height;
				if(o && A < 8 || P) e = s(t(e) + 2);
				var g = b.container = f(b.layout);
				c ? f(document.body).append(g) : b.srcElement.before(g);
				var h = f(".toolbar", g),
					j = f(".edit", g),
					k = b.statusbar = f(".statusbar", g);
				g.removeClass("container").addClass("ke-container ke-container-" +
					b.themeType).css("width", d);
				if(c) {
					g.css({
						position: "absolute",
						left: 0,
						top: 0,
						"z-index": 811211
					});
					if(!Y) b._scrollPos = ca();
					w.scrollTo(0, 0);
					f(document.body).css({
						height: "1px",
						overflow: "hidden"
					});
					f(document.body.parentNode).css("overflow", "hidden");
					b._fullscreenExecuted = !0
				} else b._fullscreenExecuted && (f(document.body).css({
					height: "",
					overflow: ""
				}), f(document.body.parentNode).css("overflow", "")), b._scrollPos && w.scrollTo(b._scrollPos.x, b._scrollPos.y);
				var i = [];
				f.each(b.items, function(a, c) {
					c == "|" ? i.push('<span class="ke-inline-block ke-separator"></span>') :
						c == "/" ? i.push('<div class="ke-hr"></div>') : (i.push('<span class="ke-outline" data-name="' + c + '" title="' + b.lang(c) + '" unselectable="on">'), i.push('<span class="ke-toolbar-icon ke-toolbar-icon-url ke-icon-' + c + '" unselectable="on"></span></span>'))
				});
				var h = b.toolbar = Cb({
						src: h,
						html: i.join(""),
						noDisableItems: b.noDisableItems,
						click: function(a, c) {
							a.stop();
							if(b.menu) {
								var d = b.menu.name;
								b.hideMenu();
								if(d === c) return
							}
							b.clickToolbar(c)
						}
					}),
					l = t(e) - h.div.height(),
					m = b.edit = Ab({
						height: l > 0 && t(e) > b.minHeight ? l : b.minHeight,
						src: j,
						srcElement: b.srcElement,
						designMode: b.designMode,
						themesPath: b.themesPath,
						bodyClass: b.bodyClass,
						cssPath: b.cssPath,
						cssData: b.cssData,
						beforeGetHtml: function(a) {
							a = b.beforeGetHtml(a);
							a = T(Fa(a));
							return U(a, b.filterMode ? b.htmlTags : null, b.urlType, b.wellFormatMode, b.indentChar)
						},
						beforeSetHtml: function(a) {
							a = U(a, b.filterMode ? b.htmlTags : null, "", !1);
							return b.beforeSetHtml(a)
						},
						afterSetHtml: function() {
							b.edit = m = this;
							b.afterSetHtml()
						},
						afterCreate: function() {
							b.edit = m = this;
							b.cmd = m.cmd;
							b._docMousedownFn = function() {
								b.menu &&
									b.hideMenu()
							};
							f(m.doc, document).mousedown(b._docMousedownFn);
							ac.call(b);
							bc.call(b);
							cc.call(b);
							dc.call(b);
							m.afterChange(function() {
								m.designMode && (b.updateState(), b.addBookmark(), b.options.afterChange && b.options.afterChange.call(b))
							});
							m.textarea.keyup(function(a) {
								!a.ctrlKey && !a.altKey && Ob[a.which] && b.options.afterChange && b.options.afterChange.call(b)
							});
							b.readonlyMode && b.readonly();
							b.isCreated = !0;
							if(b.initContent === "") b.initContent = b.html();
							if(b._undoStack.length > 0) {
								var a = b._undoStack.pop();
								a.start &&
									(b.html(a.html), m.cmd.range.moveToBookmark(a), b.select())
							}
							b.afterCreate();
							b.options.afterCreate && b.options.afterCreate.call(b)
						}
					});
				k.removeClass("statusbar").addClass("ke-statusbar").append('<span class="ke-inline-block ke-statusbar-center-icon"></span>').append('<span class="ke-inline-block ke-statusbar-right-icon"></span>');
				if(b._fullscreenResizeHandler) f(w).unbind("resize", b._fullscreenResizeHandler), b._fullscreenResizeHandler = null;
				a();
				c ? (b._fullscreenResizeHandler = function() {
					b.isCreated && b.resize(G().clientWidth,
						G().clientHeight, !1)
				}, f(w).bind("resize", b._fullscreenResizeHandler), h.select("fullscreen"), k.first().css("visibility", "hidden"), k.last().css("visibility", "hidden")) : (Y && f(w).bind("scroll", function() {
					b._scrollPos = ca()
				}), b.resizeType > 0 ? Wa({
					moveEl: g,
					clickEl: k,
					moveFn: function(a, c, d, e, g, f) {
						e += f;
						b.resize(null, e)
					}
				}) : k.first().css("visibility", "hidden"), b.resizeType === 2 ? Wa({
					moveEl: g,
					clickEl: k.last(),
					moveFn: function(a, c, d, e, g, f) {
						d += g;
						e += f;
						b.resize(d, e)
					}
				}) : k.last().css("visibility", "hidden"));
				return b
			},
			remove: function() {
				var a =
					this;
				if(!a.isCreated) return a;
				a.beforeRemove();
				a.srcElement.data("kindeditor", "");
				a.menu && a.hideMenu();
				m(a.dialogs, function() {
					a.hideDialog()
				});
				f(document).unbind("mousedown", a._docMousedownFn);
				a.toolbar.remove();
				a.edit.remove();
				a.statusbar.last().unbind();
				a.statusbar.unbind();
				a.container.remove();
				a.container = a.toolbar = a.edit = a.menu = null;
				a.dialogs = [];
				a.isCreated = !1;
				return a
			},
			resize: function(a, b, c) {
				c = l(c, !0);
				if(a && (/%/.test(a) || (a = t(a), a = a < this.minWidth ? this.minWidth : a), this.container.css("width", s(a)),
						c)) this.width = s(a);
				if(b && (b = t(b), editHeight = t(b) - this.toolbar.div.height() - this.statusbar.height(), editHeight = editHeight < this.minHeight ? this.minHeight : editHeight, this.edit.setHeight(editHeight), c)) this.height = s(b);
				return this
			},
			select: function() {
				this.isCreated && this.cmd.select();
				return this
			},
			html: function(a) {
				if(a === i) return this.isCreated ? this.edit.html() : pa(this.srcElement);
				this.isCreated ? this.edit.html(a) : pa(this.srcElement, a);
				this.isCreated && this.cmd.selection();
				return this
			},
			fullHtml: function() {
				return this.isCreated ?
					this.edit.html(i, !0) : ""
			},
			text: function(a) {
				return a === i ? B(this.html().replace(/<(?!img|embed).*?>/ig, "").replace(/&nbsp;/ig, " ")) : this.html(C(a))
			},
			isEmpty: function() {
				return B(this.text().replace(/\r\n|\n|\r/, "")) === ""
			},
			isDirty: function() {
				return B(this.initContent.replace(/\r\n|\n|\r|t/g, "")) !== B(this.html().replace(/\r\n|\n|\r|t/g, ""))
			},
			selectedHtml: function() {
				var a = this.isCreated ? this.cmd.range.html() : "";
				return a = T(Fa(a))
			},
			count: function(a) {
				a = (a || "html").toLowerCase();
				if(a === "html") return this.html().length;
				if(a === "text") return this.text().replace(/<(?:img|embed).*?>/ig, "K").replace(/\r\n|\n|\r/g, "").length;
				return 0
			},
			exec: function(a) {
				var a = a.toLowerCase(),
					b = this.cmd,
					c = J(a, "selectall,copy,paste,print".split(",")) < 0;
				c && this.addBookmark(!1);
				b[a].apply(b, Ja(arguments, 1));
				c && (this.updateState(), this.addBookmark(!1), this.options.afterChange && this.options.afterChange.call(this));
				return this
			},
			insertHtml: function(a, b) {
				if(!this.isCreated) return this;
				a = this.beforeSetHtml(a);
				this.exec("inserthtml", a, b);
				return this
			},
			appendHtml: function(a) {
				this.html(this.html() + a);
				if(this.isCreated) a = this.cmd, a.range.selectNodeContents(a.doc.body).collapse(!1), a.select();
				return this
			},
			sync: function() {
				pa(this.srcElement, this.html());
				return this
			},
			focus: function() {
				this.isCreated ? this.edit.focus() : this.srcElement[0].focus();
				return this
			},
			blur: function() {
				this.isCreated ? this.edit.blur() : this.srcElement[0].blur();
				return this
			},
			addBookmark: function(a) {
				var a = l(a, !0),
					b = this.edit,
					c = b.doc.body,
					d = Fa(c.innerHTML);
				if(a && this._undoStack.length >
					0 && Math.abs(d.length - T(this._undoStack[this._undoStack.length - 1].html).length) < this.minChangeSize) return this;
				b.designMode && !this._firstAddBookmark ? (b = this.cmd.range, a = b.createBookmark(!0), a.html = Fa(c.innerHTML), b.moveToBookmark(a)) : a = {
					html: d
				};
				this._firstAddBookmark = !1;
				Jb(this._undoStack, a);
				return this
			},
			undo: function() {
				return Kb.call(this, this._undoStack, this._redoStack)
			},
			redo: function() {
				return Kb.call(this, this._redoStack, this._undoStack)
			},
			fullscreen: function(a) {
				this.fullscreenMode = a === i ? !this.fullscreenMode :
					a;
				this.addBookmark(!1);
				return this.remove().create()
			},
			readonly: function(a) {
				var a = l(a, !0),
					b = this,
					c = b.edit,
					d = c.doc;
				b.designMode ? b.toolbar.disableAll(a, []) : m(b.noDisableItems, function() {
					b.toolbar[a ? "disable" : "enable"](this)
				});
				o ? d.body.contentEditable = !a : d.designMode = a ? "off" : "on";
				c.textarea[0].disabled = a
			},
			createMenu: function(a) {
				var b = this.toolbar.get(a.name),
					c = b.pos();
				a.x = c.x;
				a.y = c.y + b.height();
				a.z = this.options.zIndex;
				a.shadowMode = l(a.shadowMode, this.shadowMode);
				a.selectedColor !== i ? (a.cls = "ke-colorpicker-" +
					this.themeType, a.noColor = this.lang("noColor"), this.menu = Db(a)) : (a.cls = "ke-menu-" + this.themeType, a.centerLineMode = !1, this.menu = $a(a));
				return this.menu
			},
			hideMenu: function() {
				this.menu.remove();
				this.menu = null;
				return this
			},
			hideContextmenu: function() {
				this.contextmenu.remove();
				this.contextmenu = null;
				return this
			},
			createDialog: function(a) {
				var b = this;
				a.z = b.options.zIndex;
				a.shadowMode = l(a.shadowMode, b.shadowMode);
				a.closeBtn = l(a.closeBtn, {
					name: b.lang("close"),
					click: function() {
						b.hideDialog();
						o && b.cmd && b.cmd.select()
					}
				});
				a.noBtn = l(a.noBtn, {
					name: b.lang(a.yesBtn ? "no" : "close"),
					click: function() {
						b.hideDialog();
						o && b.cmd && b.cmd.select()
					}
				});
				if(b.dialogAlignType != "page") a.alignEl = b.container;
				a.cls = "ke-dialog-" + b.themeType;
				if(b.dialogs.length > 0) {
					var c = b.dialogs[b.dialogs.length - 1];
					b.dialogs[0].setMaskIndex(c.z + 2);
					a.z = c.z + 3;
					a.showMask = !1
				}
				a = Eb(a);
				b.dialogs.push(a);
				return a
			},
			hideDialog: function() {
				this.dialogs.length > 0 && this.dialogs.pop().remove();
				this.dialogs.length > 0 && this.dialogs[0].setMaskIndex(this.dialogs[this.dialogs.length -
					1].z - 1);
				return this
			},
			errorDialog: function(a) {
				var b = this.createDialog({
						width: 750,
						title: this.lang("uploadError"),
						body: '<div style="padding:10px 20px;"><iframe frameborder="0" style="width:708px;height:400px;"></iframe></div>'
					}),
					b = f("iframe", b.div),
					c = f.iframeDoc(b);
				c.open();
				c.write(a);
				c.close();
				f(c.body).css("background-color", "#FFF");
				b[0].contentWindow.focus();
				return this
			}
		};
		_instances = [];
		f.remove = function(a) {
			va(a, function(a) {
				this.remove();
				_instances.splice(a, 1)
			})
		};
		f.sync = function(a) {
			va(a, function() {
				this.sync()
			})
		};
		f.html = function(a, b) {
			va(a, function() {
				this.html(b)
			})
		};
		f.insertHtml = function(a, b) {
			va(a, function() {
				this.insertHtml(b)
			})
		};
		f.appendHtml = function(a, b) {
			va(a, function() {
				this.appendHtml(b)
			})
		};
		o && A < 7 && Q(document, "BackgroundImageCache", !0);
		f.EditorClass = ua;
		f.editor = function(a) {
			return new ua(a)
		};
		f.create = Lb;
		f.instances = _instances;
		f.plugin = Gb;
		f.lang = Ib;
		Gb("core", function(a) {
			var b = this,
				c = {
					undo: "Z",
					redo: "Y",
					bold: "B",
					italic: "I",
					underline: "U",
					print: "P",
					selectall: "A"
				};
			b.afterSetHtml(function() {
				b.options.afterChange &&
					b.options.afterChange.call(b)
			});
			b.afterCreate(function() {
				if(b.syncType == "form") {
					for(var c = a(b.srcElement), d = !1; c = c.parent();)
						if(c.name == "form") {
							d = !0;
							break
						}
					if(d) {
						c.bind("submit", function() {
							b.sync();
							a(w).bind("unload", function() {
								b.edit.textarea.remove()
							})
						});
						var f = a('[type="reset"]', c);
						f.click(function() {
							b.html(b.initContent);
							b.cmd.selection()
						});
						b.beforeRemove(function() {
							c.unbind();
							f.unbind()
						})
					}
				}
			});
			b.clickToolbar("source", function() {
				b.edit.designMode ? (b.toolbar.disableAll(!0), b.edit.design(!1), b.toolbar.select("source")) :
					(b.toolbar.disableAll(!1), b.edit.design(!0), b.toolbar.unselect("source"), Y ? setTimeout(function() {
						b.cmd.selection()
					}, 0) : b.cmd.selection());
				b.designMode = b.edit.designMode
			});
			b.afterCreate(function() {
				b.designMode || b.toolbar.disableAll(!0).select("source")
			});
			b.clickToolbar("fullscreen", function() {
				b.fullscreen()
			});
			if(b.fullscreenShortcut) {
				var d = !1;
				b.afterCreate(function() {
					a(b.edit.doc, b.edit.textarea).keyup(function(a) {
						a.which == 27 && setTimeout(function() {
							b.fullscreen()
						}, 0)
					});
					if(d) {
						if(o && !b.designMode) return;
						b.focus()
					}
					d || (d = !0)
				})
			}
			m("undo,redo".split(","), function(a, d) {
				c[d] && b.afterCreate(function() {
					Ka(this.edit.doc, c[d], function() {
						b.clickToolbar(d)
					})
				});
				b.clickToolbar(d, function() {
					b[d]()
				})
			});
			b.clickToolbar("formatblock", function() {
				var a = b.lang("formatblock.formatBlock"),
					c = {
						h1: 28,
						h2: 24,
						h3: 18,
						H4: 14,
						p: 12
					},
					d = b.cmd.val("formatblock"),
					f = b.createMenu({
						name: "formatblock",
						width: b.langType == "en" ? 200 : 150
					});
				m(a, function(a, e) {
					var i = "font-size:" + c[a] + "px;";
					a.charAt(0) === "h" && (i += "font-weight:bold;");
					f.addItem({
						title: '<span style="' +
							i + '" unselectable="on">' + e + "</span>",
						height: c[a] + 12,
						checked: d === a || d === e,
						click: function() {
							b.select().exec("formatblock", "<" + a + ">").hideMenu()
						}
					})
				})
			});
			b.clickToolbar("fontname", function() {
				var a = b.cmd.val("fontname"),
					c = b.createMenu({
						name: "fontname",
						width: 150
					});
				m(b.lang("fontname.fontName"), function(d, f) {
					c.addItem({
						title: '<span style="font-family: ' + d + ';" unselectable="on">' + f + "</span>",
						checked: a === d.toLowerCase() || a === f.toLowerCase(),
						click: function() {
							b.exec("fontname", d).hideMenu()
						}
					})
				})
			});
			b.clickToolbar("fontsize",
				function() {
					var a = b.cmd.val("fontsize"),
						c = b.createMenu({
							name: "fontsize",
							width: 150
						});
					m(b.fontSizeTable, function(d, f) {
						c.addItem({
							title: '<span style="font-size:' + f + ';" unselectable="on">' + f + "</span>",
							height: t(f) + 12,
							checked: a === f,
							click: function() {
								b.exec("fontsize", f).hideMenu()
							}
						})
					})
				});
			m("forecolor,hilitecolor".split(","), function(a, c) {
				b.clickToolbar(c, function() {
					b.createMenu({
						name: c,
						selectedColor: b.cmd.val(c) || "default",
						colors: b.colorTable,
						click: function(a) {
							b.exec(c, a).hideMenu()
						}
					})
				})
			});
			m("cut,copy,paste".split(","),
				function(a, c) {
					b.clickToolbar(c, function() {
						b.focus();
						try {
							b.exec(c, null)
						} catch(a) {
							alert(b.lang(c + "Error"))
						}
					})
				});
			b.clickToolbar("about", function() {
				var a = '<div style="margin:20px;"><div>KindEditor ' + Ha + '</div><div>Copyright &copy; <a href="http://www.kindsoft.net/" target="_blank">kindsoft.net</a> All rights reserved.</div></div>';
				b.createDialog({
					name: "about",
					width: 350,
					title: b.lang("about"),
					body: a
				})
			});
			b.plugin.getSelectedLink = function() {
				return b.cmd.commonAncestor("a")
			};
			b.plugin.getSelectedImage = function() {
				return Ea(b.edit.cmd.range,
					function(a) {
						return !/^ke-\w+$/i.test(a[0].className)
					})
			};
			b.plugin.getSelectedFlash = function() {
				return Ea(b.edit.cmd.range, function(a) {
					return a[0].className == "ke-flash"
				})
			};
			b.plugin.getSelectedMedia = function() {
				return Ea(b.edit.cmd.range, function(a) {
					return a[0].className == "ke-media" || a[0].className == "ke-rm"
				})
			};
			b.plugin.getSelectedAnchor = function() {
				return Ea(b.edit.cmd.range, function(a) {
					return a[0].className == "ke-anchor"
				})
			};
			m("link,image,flash,media,anchor".split(","), function(a, c) {
				var d = c.charAt(0).toUpperCase() +
					c.substr(1);
				m("edit,delete".split(","), function(a, e) {
					b.addContextmenu({
						title: b.lang(e + d),
						click: function() {
							b.loadPlugin(c, function() {
								b.plugin[c][e]();
								b.hideMenu()
							})
						},
						cond: b.plugin["getSelected" + d],
						width: 150,
						iconClass: e == "edit" ? "ke-icon-" + c : i
					})
				});
				b.addContextmenu({
					title: "-"
				})
			});
			b.plugin.getSelectedTable = function() {
				return b.cmd.commonAncestor("table")
			};
			b.plugin.getSelectedRow = function() {
				return b.cmd.commonAncestor("tr")
			};
			b.plugin.getSelectedCell = function() {
				return b.cmd.commonAncestor("td")
			};
			m("prop,cellprop,colinsertleft,colinsertright,rowinsertabove,rowinsertbelow,rowmerge,colmerge,rowsplit,colsplit,coldelete,rowdelete,insert,delete".split(","),
				function(a, c) {
					var d = J(c, ["prop", "delete"]) < 0 ? b.plugin.getSelectedCell : b.plugin.getSelectedTable;
					b.addContextmenu({
						title: b.lang("table" + c),
						click: function() {
							b.loadPlugin("table", function() {
								b.plugin.table[c]();
								b.hideMenu()
							})
						},
						cond: d,
						width: 170,
						iconClass: "ke-icon-table" + c
					})
				});
			b.addContextmenu({
				title: "-"
			});
			m("selectall,justifyleft,justifycenter,justifyright,justifyfull,insertorderedlist,insertunorderedlist,indent,outdent,subscript,superscript,hr,print,bold,italic,underline,strikethrough,removeformat,unlink".split(","),
				function(a, d) {
					c[d] && b.afterCreate(function() {
						Ka(this.edit.doc, c[d], function() {
							b.cmd.selection();
							b.clickToolbar(d)
						})
					});
					b.clickToolbar(d, function() {
						b.focus().exec(d, null)
					})
				});
			b.afterCreate(function() {
				function c() {
					f.range.moveToBookmark(j);
					f.select();
					X && (a("div." + l, i).each(function() {
						a(this).after("<br />").remove(!0)
					}), a("span.Apple-style-span", i).remove(!0), a("span.Apple-tab-span", i).remove(!0), a("span[style]", i).each(function() {
						a(this).css("white-space") == "nowrap" && a(this).remove(!0)
					}), a("meta", i).remove());
					var d = i[0].innerHTML;
					i.remove();
					d !== "" && (X && (d = d.replace(/(<br>)\1/ig, "$1")), b.pasteType === 2 && (d = d.replace(/(<(?:p|p\s[^>]*)>) *(<\/p>)/ig, ""), /schemas-microsoft-com|worddocument|mso-\w+/i.test(d) ? d = nb(d, b.filterMode ? b.htmlTags : a.options.htmlTags) : (d = U(d, b.filterMode ? b.htmlTags : null), d = b.beforeSetHtml(d))), b.pasteType === 1 && (d = d.replace(/&nbsp;/ig, " "), d = d.replace(/\n\s*\n/g, "\n"), d = d.replace(/<br[^>]*>/ig, "\n"), d = d.replace(/<\/p><p[^>]*>/ig, "\n"), d = d.replace(/<[^>]+>/g, ""), d = d.replace(/ {2}/g, " &nbsp;"),
						b.newlineTag == "p" ? /\n/.test(d) && (d = d.replace(/^/, "<p>").replace(/$/, "<br /></p>").replace(/\n/g, "<br /></p><p>")) : d = d.replace(/\n/g, "<br />$&")), b.insertHtml(d, !0))
				}
				var d = b.edit.doc,
					f, j, i, l = "__kindeditor_paste__",
					m = !1;
				a(d.body).bind("paste", function(p) {
					if(b.pasteType === 0) p.stop();
					else if(!m) {
						m = !0;
						a("div." + l, d).remove();
						f = b.cmd.selection();
						j = f.range.createBookmark();
						i = a('<div class="' + l + '"></div>', d).css({
							position: "absolute",
							width: "1px",
							height: "1px",
							overflow: "hidden",
							left: "-1981px",
							top: a(j.start).pos().y +
								"px",
							"white-space": "nowrap"
						});
						a(d.body).append(i);
						if(o) {
							var s = f.range.get(!0);
							s.moveToElementText(i[0]);
							s.select();
							s.execCommand("paste");
							p.preventDefault()
						} else f.range.selectNodeContents(i[0]), f.select();
						setTimeout(function() {
							c();
							m = !1
						}, 0)
					}
				})
			});
			b.beforeGetHtml(function(a) {
				o && A <= 8 && (a = a.replace(/<div\s+[^>]*data-ke-input-tag="([^"]*)"[^>]*>([\s\S]*?)<\/div>/ig, function(a, b) {
					return unescape(b)
				}), a = a.replace(/(<input)((?:\s+[^>]*)?>)/ig, function(a, b, c) {
					if(!/\s+type="[^"]+"/i.test(a)) return b + ' type="text"' +
						c;
					return a
				}));
				return a.replace(/(<(?:noscript|noscript\s[^>]*)>)([\s\S]*?)(<\/noscript>)/ig, function(a, b, c, d) {
					return b + fa(c).replace(/\s+/g, " ") + d
				}).replace(/<img[^>]*class="?ke-(flash|rm|media)"?[^>]*>/ig, function(a) {
					var a = I(a),
						b = ba(a.style || ""),
						c = pb(a["data-ke-tag"]),
						d = l(b.width, ""),
						b = l(b.height, "");
					/px/i.test(d) && (d = t(d));
					/px/i.test(b) && (b = t(b));
					c.width = l(a.width, d);
					c.height = l(a.height, b);
					return Ma(c)
				}).replace(/<img[^>]*class="?ke-anchor"?[^>]*>/ig, function(a) {
					a = I(a);
					return '<a name="' + unescape(a["data-ke-name"]) +
						'"></a>'
				}).replace(/<div\s+[^>]*data-ke-script-attr="([^"]*)"[^>]*>([\s\S]*?)<\/div>/ig, function(a, b, c) {
					return "<script" + unescape(b) + ">" + unescape(c) + "<\/script>"
				}).replace(/<div\s+[^>]*data-ke-noscript-attr="([^"]*)"[^>]*>([\s\S]*?)<\/div>/ig, function(a, b, c) {
					return "<noscript" + unescape(b) + ">" + unescape(c) + "</noscript>"
				}).replace(/(<[^>]*)data-ke-src="([^"]*)"([^>]*>)/ig, function(a, b, c) {
					a = a.replace(/(\s+(?:href|src)=")[^"]*(")/i, function(a, b, d) {
						return b + fa(c) + d
					});
					return a = a.replace(/\s+data-ke-src="[^"]*"/i,
						"")
				}).replace(/(<[^>]+\s)data-ke-(on\w+="[^"]*"[^>]*>)/ig, function(a, b, c) {
					return b + c
				})
			});
			b.beforeSetHtml(function(a) {
				o && A <= 8 && (a = a.replace(/<input[^>]*>|<(select|button)[^>]*>[\s\S]*?<\/\1>/ig, function(a) {
					var b = I(a);
					if(ba(b.style || "").display == "none") return '<div class="ke-display-none" data-ke-input-tag="' + escape(a) + '"></div>';
					return a
				}));
				return a.replace(/<embed[^>]*type="([^"]+)"[^>]*>(?:<\/embed>)?/ig, function(a) {
					a = I(a);
					a.src = l(a.src, "");
					a.width = l(a.width, 0);
					a.height = l(a.height, 0);
					return qb(b.themesPath +
						"common/blank.gif", a)
				}).replace(/<a[^>]*name="([^"]+)"[^>]*>(?:<\/a>)?/ig, function(a) {
					var c = I(a);
					if(c.href !== i) return a;
					return '<img class="ke-anchor" src="' + b.themesPath + 'common/anchor.gif" data-ke-name="' + escape(c.name) + '" />'
				}).replace(/<script([^>]*)>([\s\S]*?)<\/script>/ig, function(a, b, c) {
					return '<div class="ke-script" data-ke-script-attr="' + escape(b) + '">' + escape(c) + "</div>"
				}).replace(/<noscript([^>]*)>([\s\S]*?)<\/noscript>/ig, function(a, b, c) {
					return '<div class="ke-noscript" data-ke-noscript-attr="' +
						escape(b) + '">' + escape(c) + "</div>"
				}).replace(/(<[^>]*)(href|src)="([^"]*)"([^>]*>)/ig, function(a, b, c, d, e) {
					if(a.match(/\sdata-ke-src="[^"]*"/i)) return a;
					return a = b + c + '="' + d + '" data-ke-src="' + C(d) + '"' + e
				}).replace(/(<[^>]+\s)(on\w+="[^"]*"[^>]*>)/ig, function(a, b, c) {
					return b + "data-ke-" + c
				}).replace(/<table[^>]*\s+border="0"[^>]*>/ig, function(a) {
					if(a.indexOf("ke-zeroborder") >= 0) return a;
					return Sb(a, "ke-zeroborder")
				})
			})
		})
	}
})(window);