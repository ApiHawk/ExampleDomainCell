!function (t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e(require("ng.common"), require("tslib"), require("ng.forms"), require("ngx.translate"), require("ng.http"), require("apihawk.billia-customer-portal-common"), require("ng.core")) : "function" == typeof define && define.amd ? define(["ng.common", "tslib", "ng.forms", "ngx.translate", "ng.http", "apihawk.billia-customer-portal-common", "ng.core"], e) : "object" == typeof exports ? exports.shared = e(require("ng.common"), require("tslib"), require("ng.forms"), require("ngx.translate"), require("ng.http"), require("apihawk.billia-customer-portal-common"), require("ng.core")) : t.shared = e(t["ng.common"], t.tslib, t["ng.forms"], t["ngx.translate"], t["ng.http"], t["apihawk.billia-customer-portal-common"], t["ng.core"])
}("undefined" != typeof self ? self : this, function (t, e, r, s, n, o, i) {
	return function (t) {
		var e = {};

		function r(s) {
			if (e[s]) return e[s].exports;
			var n = e[s] = {i: s, l: !1, exports: {}};
			return t[s].call(n.exports, n, n.exports, r), n.l = !0, n.exports
		}

		return r.m = t, r.c = e, r.d = function (t, e, s) {
			r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: s})
		}, r.r = function (t) {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
		}, r.t = function (t, e) {
			if (1 & e && (t = r(t)), 8 & e) return t;
			if (4 & e && "object" == typeof t && t && t.__esModule) return t;
			var s = Object.create(null);
			if (r.r(s), Object.defineProperty(s, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t) for (var n in t) r.d(s, n, (function (e) {
				return t[e]
			}).bind(null, n));
			return s
		}, r.n = function (t) {
			var e = t && t.__esModule ? function () {
				return t.default
			} : function () {
				return t
			};
			return r.d(e, "a", e), e
		}, r.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, r.p = "", r(r.s = 0)
	}({
		0: function (t, e, r) {
			t.exports = r("gmml")
		}, "0S4P": function (e, r) {
			e.exports = t
		}, "17wl": function (t, r) {
			t.exports = e
		}, "3xDq": function (t, e) {
			t.exports = r
		}, TGDj: function (t, e) {
			t.exports = s
		}, gmml: function (t, e, r) {
			"use strict";
			r.r(e), r("17wl");
			var s = r("0S4P"), n = r("vOrQ"), o = r("3xDq"), i = r("TGDj"), c = r("jyyq"), u = r("o9n9");

			function a(t) {
				return "function" == typeof t
			}

			let l = !1;
			const h = {
				Promise: void 0, set useDeprecatedSynchronousErrorHandling(t) {
					l = t
				}, get useDeprecatedSynchronousErrorHandling() {
					return l
				}
			};

			function p(t) {
				setTimeout(() => {
					throw t
				})
			}

			const b = {
				closed: !0, next(t) {
				}, error(t) {
					if (h.useDeprecatedSynchronousErrorHandling) throw t;
					p(t)
				}, complete() {
				}
			}, d = Array.isArray || (t => t && "number" == typeof t.length);

			function f(t) {
				return Error.call(this), this.message = t ? `${t.length} errors occurred during unsubscription:\n${t.map((t, e) => `${e + 1}) ${t.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = t, this
			}

			f.prototype = Object.create(Error.prototype);
			const _ = f, m = function () {
				class t {
					constructor(t) {
						this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t)
					}

					unsubscribe() {
						let t, e = !1;
						if (this.closed) return;
						let {_parent: r, _parents: s, _unsubscribe: n, _subscriptions: o} = this;
						this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
						let i = -1, c = s ? s.length : 0;
						for (; r;) r.remove(this), r = ++i < c && s[i] || null;
						if (a(n)) try {
							n.call(this)
						} catch (l) {
							e = !0, t = l instanceof _ ? y(l.errors) : [l]
						}
						if (d(o)) for (i = -1, c = o.length; ++i < c;) {
							const r = o[i];
							if (null !== (u = r) && "object" == typeof u) try {
								r.unsubscribe()
							} catch (l) {
								e = !0, t = t || [], l instanceof _ ? t = t.concat(y(l.errors)) : t.push(l)
							}
						}
						var u;
						if (e) throw new _(t)
					}

					add(e) {
						let r = e;
						switch (typeof e) {
							case"function":
								r = new t(e);
							case"object":
								if (r === this || r.closed || "function" != typeof r.unsubscribe) return r;
								if (this.closed) return r.unsubscribe(), r;
								if (!(r instanceof t)) {
									const e = r;
									(r = new t)._subscriptions = [e]
								}
								break;
							default:
								if (!e) return t.EMPTY;
								throw new Error("unrecognized teardown " + e + " added to Subscription.")
						}
						if (r._addParent(this)) {
							const t = this._subscriptions;
							t ? t.push(r) : this._subscriptions = [r]
						}
						return r
					}

					remove(t) {
						const e = this._subscriptions;
						if (e) {
							const r = e.indexOf(t);
							-1 !== r && e.splice(r, 1)
						}
					}

					_addParent(t) {
						let {_parent: e, _parents: r} = this;
						return e !== t && (e ? r ? -1 === r.indexOf(t) && (r.push(t), !0) : (this._parents = [t], !0) : (this._parent = t, !0))
					}
				}

				var e;
				return t.EMPTY = ((e = new t).closed = !0, e), t
			}();

			function y(t) {
				return t.reduce((t, e) => t.concat(e instanceof _ ? e.errors : e), [])
			}

			const g = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();

			class w extends m {
				constructor(t, e, r) {
					switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
						case 0:
							this.destination = b;
							break;
						case 1:
							if (!t) {
								this.destination = b;
								break
							}
							if ("object" == typeof t) {
								t instanceof w ? (this.syncErrorThrowable = t.syncErrorThrowable, this.destination = t, t.add(this)) : (this.syncErrorThrowable = !0, this.destination = new S(this, t));
								break
							}
						default:
							this.syncErrorThrowable = !0, this.destination = new S(this, t, e, r)
					}
				}

				[g]() {
					return this
				}

				static create(t, e, r) {
					const s = new w(t, e, r);
					return s.syncErrorThrowable = !1, s
				}

				next(t) {
					this.isStopped || this._next(t)
				}

				error(t) {
					this.isStopped || (this.isStopped = !0, this._error(t))
				}

				complete() {
					this.isStopped || (this.isStopped = !0, this._complete())
				}

				unsubscribe() {
					this.closed || (this.isStopped = !0, super.unsubscribe())
				}

				_next(t) {
					this.destination.next(t)
				}

				_error(t) {
					this.destination.error(t), this.unsubscribe()
				}

				_complete() {
					this.destination.complete(), this.unsubscribe()
				}

				_unsubscribeAndRecycle() {
					const {_parent: t, _parents: e} = this;
					return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = e, this
				}
			}

			class S extends w {
				constructor(t, e, r, s) {
					let n;
					super(), this._parentSubscriber = t;
					let o = this;
					a(e) ? n = e : e && (n = e.next, r = e.error, s = e.complete, e !== b && (a((o = Object.create(e)).unsubscribe) && this.add(o.unsubscribe.bind(o)), o.unsubscribe = this.unsubscribe.bind(this))), this._context = o, this._next = n, this._error = r, this._complete = s
				}

				next(t) {
					if (!this.isStopped && this._next) {
						const {_parentSubscriber: e} = this;
						h.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
					}
				}

				error(t) {
					if (!this.isStopped) {
						const {_parentSubscriber: e} = this, {useDeprecatedSynchronousErrorHandling: r} = h;
						if (this._error) r && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe()); else if (e.syncErrorThrowable) r ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : p(t), this.unsubscribe(); else {
							if (this.unsubscribe(), r) throw t;
							p(t)
						}
					}
				}

				complete() {
					if (!this.isStopped) {
						const {_parentSubscriber: t} = this;
						if (this._complete) {
							const e = () => this._complete.call(this._context);
							h.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, e), this.unsubscribe()) : (this.__tryOrUnsub(e), this.unsubscribe())
						} else this.unsubscribe()
					}
				}

				__tryOrUnsub(t, e) {
					try {
						t.call(this._context, e)
					} catch (r) {
						if (this.unsubscribe(), h.useDeprecatedSynchronousErrorHandling) throw r;
						p(r)
					}
				}

				__tryOrSetError(t, e, r) {
					if (!h.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
					try {
						e.call(this._context, r)
					} catch (s) {
						return h.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = s, t.syncErrorThrown = !0, !0) : (p(s), !0)
					}
					return !1
				}

				_unsubscribe() {
					const {_parentSubscriber: t} = this;
					this._context = null, this._parentSubscriber = null, t.unsubscribe()
				}
			}

			const E = "function" == typeof Symbol && Symbol.observable || "@@observable";
			const v = function () {
				class t {
					constructor(t) {
						this._isScalar = !1, t && (this._subscribe = t)
					}

					lift(e) {
						const r = new t;
						return r.source = this, r.operator = e, r
					}

					subscribe(t, e, r) {
						const {operator: s} = this, n = function (t, e, r) {
							if (t) {
								if (t instanceof w) return t;
								if (t[g]) return t[g]()
							}
							return t || e || r ? new w(t, e, r) : new w(b)
						}(t, e, r);
						if (n.add(s ? s.call(n, this.source) : this.source || h.useDeprecatedSynchronousErrorHandling && !n.syncErrorThrowable ? this._subscribe(n) : this._trySubscribe(n)), h.useDeprecatedSynchronousErrorHandling && n.syncErrorThrowable && (n.syncErrorThrowable = !1, n.syncErrorThrown)) throw n.syncErrorValue;
						return n
					}

					_trySubscribe(t) {
						try {
							return this._subscribe(t)
						} catch (e) {
							h.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), function (t) {
								for (; t;) {
									const {closed: e, destination: r, isStopped: s} = t;
									if (e || s) return !1;
									t = r && r instanceof w ? r : null
								}
								return !0
							}(t) ? t.error(e) : console.warn(e)
						}
					}

					forEach(t, e) {
						return new (e = T(e))((e, r) => {
							let s;
							s = this.subscribe(e => {
								try {
									t(e)
								} catch (n) {
									r(n), s && s.unsubscribe()
								}
							}, r, e)
						})
					}

					_subscribe(t) {
						const {source: e} = this;
						return e && e.subscribe(t)
					}

					[E]() {
						return this
					}

					pipe(...t) {
						return 0 === t.length ? this : ((e = t) ? 1 === e.length ? e[0] : function (t) {
							return e.reduce((t, e) => e(t), t)
						} : function () {
						})(this);
						var e
					}

					toPromise(t) {
						return new (t = T(t))((t, e) => {
							let r;
							this.subscribe(t => r = t, t => e(t), () => t(r))
						})
					}
				}

				return t.create = (e => new t(e)), t
			}();

			function T(t) {
				if (t || (t = h.Promise || Promise), !t) throw new Error("no Promise impl found");
				return t
			}

			function x() {
				return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
			}

			x.prototype = Object.create(Error.prototype);
			const j = x;

			class C extends m {
				constructor(t, e) {
					super(), this.subject = t, this.subscriber = e, this.closed = !1
				}

				unsubscribe() {
					if (this.closed) return;
					this.closed = !0;
					const t = this.subject, e = t.observers;
					if (this.subject = null, !e || 0 === e.length || t.isStopped || t.closed) return;
					const r = e.indexOf(this.subscriber);
					-1 !== r && e.splice(r, 1)
				}
			}

			class O extends w {
				constructor(t) {
					super(t), this.destination = t
				}
			}

			const q = function () {
				class t extends v {
					constructor() {
						super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
					}

					[g]() {
						return new O(this)
					}

					lift(t) {
						const e = new P(this, this);
						return e.operator = t, e
					}

					next(t) {
						if (this.closed) throw new j;
						if (!this.isStopped) {
							const {observers: e} = this, r = e.length, s = e.slice();
							for (let n = 0; n < r; n++) s[n].next(t)
						}
					}

					error(t) {
						if (this.closed) throw new j;
						this.hasError = !0, this.thrownError = t, this.isStopped = !0;
						const {observers: e} = this, r = e.length, s = e.slice();
						for (let n = 0; n < r; n++) s[n].error(t);
						this.observers.length = 0
					}

					complete() {
						if (this.closed) throw new j;
						this.isStopped = !0;
						const {observers: t} = this, e = t.length, r = t.slice();
						for (let s = 0; s < e; s++) r[s].complete();
						this.observers.length = 0
					}

					unsubscribe() {
						this.isStopped = !0, this.closed = !0, this.observers = null
					}

					_trySubscribe(t) {
						if (this.closed) throw new j;
						return super._trySubscribe(t)
					}

					_subscribe(t) {
						if (this.closed) throw new j;
						return this.hasError ? (t.error(this.thrownError), m.EMPTY) : this.isStopped ? (t.complete(), m.EMPTY) : (this.observers.push(t), new C(this, t))
					}

					asObservable() {
						const t = new v;
						return t.source = this, t
					}
				}

				return t.create = ((t, e) => new P(t, e)), t
			}();

			class P extends q {
				constructor(t, e) {
					super(), this.destination = t, this.source = e
				}

				next(t) {
					const {destination: e} = this;
					e && e.next && e.next(t)
				}

				error(t) {
					const {destination: e} = this;
					e && e.error && this.destination.error(t)
				}

				complete() {
					const {destination: t} = this;
					t && t.complete && this.destination.complete()
				}

				_subscribe(t) {
					const {source: e} = this;
					return e ? this.source.subscribe(t) : m.EMPTY
				}
			}

			function D() {
				return function (t) {
					return t.lift(new M(t))
				}
			}

			class M {
				constructor(t) {
					this.connectable = t
				}

				call(t, e) {
					const {connectable: r} = this;
					r._refCount++;
					const s = new F(t, r), n = e.subscribe(s);
					return s.closed || (s.connection = r.connect()), n
				}
			}

			class F extends w {
				constructor(t, e) {
					super(t), this.connectable = e
				}

				_unsubscribe() {
					const {connectable: t} = this;
					if (!t) return void (this.connection = null);
					this.connectable = null;
					const e = t._refCount;
					if (e <= 0) return void (this.connection = null);
					if (t._refCount = e - 1, e > 1) return void (this.connection = null);
					const {connection: r} = this, s = t._connection;
					this.connection = null, !s || r && s !== r || s.unsubscribe()
				}
			}

			const k = class extends v {
				constructor(t, e) {
					super(), this.source = t, this.subjectFactory = e, this._refCount = 0, this._isComplete = !1
				}

				_subscribe(t) {
					return this.getSubject().subscribe(t)
				}

				getSubject() {
					const t = this._subject;
					return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
				}

				connect() {
					let t = this._connection;
					return t || (this._isComplete = !1, (t = this._connection = new m).add(this.source.subscribe(new A(this.getSubject(), this))), t.closed ? (this._connection = null, t = m.EMPTY) : this._connection = t), t
				}

				refCount() {
					return D()(this)
				}
			}.prototype, H = {
				operator: {value: null},
				_refCount: {value: 0, writable: !0},
				_subject: {value: null, writable: !0},
				_connection: {value: null, writable: !0},
				_subscribe: {value: k._subscribe},
				_isComplete: {value: k._isComplete, writable: !0},
				getSubject: {value: k.getSubject},
				connect: {value: k.connect},
				refCount: {value: k.refCount}
			};

			class A extends O {
				constructor(t, e) {
					super(t), this.connectable = e
				}

				_error(t) {
					this._unsubscribe(), super._error(t)
				}

				_complete() {
					this.connectable._isComplete = !0, this._unsubscribe(), super._complete()
				}

				_unsubscribe() {
					const t = this.connectable;
					if (t) {
						this.connectable = null;
						const e = t._connection;
						t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
					}
				}
			}

			function L(t, e) {
				return function (r) {
					let s;
					if (s = "function" == typeof t ? t : function () {
						return t
					}, "function" == typeof e) return r.lift(new U(s, e));
					const n = Object.create(r, H);
					return n.source = r, n.subjectFactory = s, n
				}
			}

			class U {
				constructor(t, e) {
					this.subjectFactory = t, this.selector = e
				}

				call(t, e) {
					const {selector: r} = this, s = this.subjectFactory(), n = r(s).subscribe(t);
					return n.add(e.subscribe(s)), n
				}
			}

			function $(t) {
				return t ? L(() => new q, t) : L(new q)
			}

			var R = {
				"Add new": "\u0414\u043e\u0431\u0430\u0432\u0438 \u043d\u043e\u0432",
				Address: "\u0410\u0434\u0440\u0435\u0441",
				"Address 2 (optional)": "\u0410\u0434\u0440\u0435\u0441 2 (\u043d\u0435\u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u043e)",
				"Address is required.": "\u0410\u0434\u0440\u0435\u0441\u044a\u0442 \u0435 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u0435\u043d.",
				Administrator: "\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440",
				"Assign contacts": "\u0417\u0430\u0434\u0430\u0432\u0430\u043d\u0435 \u043d\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438",
				Billing: "\u0424\u0438\u043d\u0430\u043d\u0441\u043e\u0432",
				Cancel: "\u041e\u0442\u043a\u0430\u0437",
				City: "\u0413\u0440\u0430\u0434",
				"City is required.": "\u0413\u0440\u0430\u0434\u044a\u0442 \u0435 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u0435\u043d.",
				Company: "\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f",
				"Contact successfully deleted!": "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044a\u0442 \u0435 \u0438\u0437\u0442\u0440\u0438\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!",
				"Contact was successfully created.": "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044a\u0442 \u0435 \u0441\u044a\u0437\u0434\u0430\u0434\u0435\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e.",
				"Contact was successfully updated.": "\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044a\u0442 \u0431\u0435\u0448\u0435 \u043e\u0431\u043d\u043e\u0432\u0435\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e.",
				"Contacts management": "\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438",
				Country: "\u0414\u044a\u0440\u0436\u0430\u0432\u0430",
				"Create contact": "\u0421\u044a\u0437\u0434\u0430\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",
				"Delete contact": "\u0418\u0437\u0442\u0440\u0438\u0432\u0430\u043d\u0435 \u043d\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",
				"Delete contact?": "\u0418\u0437\u0442\u0440\u0438\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442?",
				Email: "\u0418\u043c\u0435\u0439\u043b",
				"Email address": "\u0418\u043c\u0435\u0439\u043b \u0430\u0434\u0440\u0435\u0441",
				"Email is required.": "\u0418\u043c\u0435\u0439\u043b\u044a\u0442 \u0435 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u0435\u043d.",
				"First name": "\u0418\u043c\u0435",
				"First name is required.": "\u0418\u043c\u0435\u0442\u043e \u0435 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u043e.",
				ID: "ID",
				"Job title": "\u0414\u043b\u044a\u0436\u043d\u043e\u0441\u0442",
				"Job title is required.": "\u0414\u043b\u044a\u0436\u043d\u043e\u0441\u0442\u0442\u0430 \u0435 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u0430.",
				"Last name": "\u0424\u0430\u043c\u0438\u043b\u0438\u044f",
				"Last name is required.": "\u0424\u0430\u043c\u0438\u043b\u0438\u044f\u0442\u0430 \u0435 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u0430.",
				Name: "\u0418\u043c\u0435",
				"Organization is required.": "\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f\u0442\u0430 \u0435 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u0430.",
				Phone: "\u0422\u0435\u043b. \u043d\u043e\u043c\u0435\u0440",
				"Phone is required.": "\u0422\u0435\u043b. \u043d\u043e\u043c\u0435\u0440 \u0435 \u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u0435\u043d.",
				"Phone number": "\u0422\u0435\u043b\u0435\u0444\u043e\u043d\u0435\u043d \u043d\u043e\u043c\u0435\u0440",
				Registrant: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u043d\u0442",
				Reset: "\u0412\u044a\u0440\u043d\u0438",
				Save: "\u0417\u0430\u043f\u0430\u0437\u0438",
				"State (optional)": "\u041e\u0431\u043b\u0430\u0441\u0442 (\u043d\u0435\u0437\u0430\u0434\u044a\u043b\u0436\u0438\u0442\u0435\u043b\u043d\u043e)",
				"Tech Person": "\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438 \u0447\u043e\u0432\u0435\u043a",
				"The country is a required field.": "\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0435 \u0434\u0430 \u0432\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u0434\u044a\u0440\u0436\u0430\u0432\u0430.",
				"There are no contacts.": "\u0412\u0441\u0435 \u043e\u0449\u0435 \u043d\u044f\u043c\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0438.",
				"Update contact": "\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0430\u0439\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",
				"Zip code": "\u041f\u043e\u0449\u0435\u043d\u0441\u043a\u0438 \u043a\u043e\u0434",
				"Zip code is required.": "\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0435 \u0434\u0430 \u0432\u044a\u0432\u0435\u0434\u0435\u0442\u0435 \u043f\u043e\u0449\u0435\u043d\u0441\u043a\u0438 \u043a\u043e\u0434."
			};
			let N = class {
				constructor(t) {
					this.translate = t, this.translate.setTranslation("bg", R, !0)
				}
			}, I = class {
				constructor(t, e, r) {
					this.http = t, this.dataService = e, this.queryTools = r, this.api = this.dataService.get("apiBase") + "/plugins"
				}

				listContacts(t, e) {
					const r = this.queryTools.queryToHttpParams(t);
					let s = new c.HttpHeaders;
					return e && e.skipCache && (s = s.append("X-Cache-Strategy", u.CacheStrategies.NetworkFirst)), this.http.get(`${this.api}/domain-contacts`, {
						headers: s,
						params: r
					}).pipe($(), D())
				}

				createContact(t) {
					return this.http.post(`${this.api}/domain-contacts`, t).pipe($(), D())
				}

				updateContact(t) {
					return this.http.patch(`${this.api}/domain-contacts/${t.contact_id}`, t).pipe($(), D())
				}

				deleteContact(t) {
					return this.http.delete(`${this.api}/domain-contacts/${t}`).pipe($(), D())
				}

				listAssignedContacts(t) {
					return this.http.post(`${this.api}/domain-contacts/assigned-contacts`, {customer_product_id: t}).pipe($(), D())
				}

				assignContacts(t, e) {
					return this.http.post(`${this.api}/domain-contacts/assign-contact`, {
						customer_product_id: t,
						contacts: e
					}).pipe($(), D())
				}
			};
			I.ngInjectableDef = Object(n["\u0275\u0275defineInjectable"])({
				factory: function () {
					return new I(Object(n["\u0275\u0275inject"])(c.HttpClient), Object(n["\u0275\u0275inject"])(u.SharedDataService), Object(n["\u0275\u0275inject"])(u.QueryToolsService))
				}, token: I, providedIn: "root"
			});
			var Y = n["\u0275cmf"](N, [], function (t) {
				return n["\u0275mod"]([n["\u0275mpd"](512, n.ComponentFactoryResolver, n["\u0275CodegenComponentFactoryResolver"], [[8, []], [3, n.ComponentFactoryResolver], n.NgModuleRef]), n["\u0275mpd"](4608, s.NgLocalization, s.NgLocaleLocalization, [n.LOCALE_ID, [2, s["\u0275angular_packages_common_common_a"]]]), n["\u0275mpd"](4608, o["\u0275angular_packages_forms_forms_o"], o["\u0275angular_packages_forms_forms_o"], []), n["\u0275mpd"](4608, o.FormBuilder, o.FormBuilder, []), n["\u0275mpd"](1073742336, s.CommonModule, s.CommonModule, []), n["\u0275mpd"](1073742336, o["\u0275angular_packages_forms_forms_d"], o["\u0275angular_packages_forms_forms_d"], []), n["\u0275mpd"](1073742336, o.FormsModule, o.FormsModule, []), n["\u0275mpd"](1073742336, o.ReactiveFormsModule, o.ReactiveFormsModule, []), n["\u0275mpd"](1073742336, i.TranslateModule, i.TranslateModule, []), n["\u0275mpd"](512, i.TranslateLoader, i.TranslateFakeLoader, []), n["\u0275mpd"](512, i.TranslateCompiler, i.TranslateFakeCompiler, []), n["\u0275mpd"](512, i.TranslateParser, i.TranslateDefaultParser, []), n["\u0275mpd"](512, i.MissingTranslationHandler, i.FakeMissingTranslationHandler, []), n["\u0275mpd"](256, i.USE_DEFAULT_LANG, void 0, []), n["\u0275mpd"](256, i.USE_STORE, void 0, []), n["\u0275mpd"](512, i.TranslateService, i.TranslateService, [i.TranslateStore, i.TranslateLoader, i.TranslateCompiler, i.TranslateParser, i.MissingTranslationHandler, i.USE_DEFAULT_LANG, i.USE_STORE]), n["\u0275mpd"](1073742336, N, N, [i.TranslateService])])
			});
			r.d(e, "DomainContactsManagementService", function () {
				return I
			}), r.d(e, "SharedModule", function () {
				return N
			}), r.d(e, "SharedModuleNgFactory", function () {
				return Y
			}), e.default = Y
		}, jyyq: function (t, e) {
			t.exports = n
		}, o9n9: function (t, e) {
			t.exports = o
		}, vOrQ: function (t, e) {
			t.exports = i
		}
	})
});
