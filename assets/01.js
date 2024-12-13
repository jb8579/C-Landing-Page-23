import {
    a9 as U,
    d as B,
    A as M,
    aI as L,
    e as u,
    f as S,
    g as o,
    k as C,
    aJ as G,
    E as T,
    aK as q,
    I as R,
    ad as j,
    aq as O,
    a2 as X,
    aL as J,
    aM as K,
    ac as Y,
    c as W,
    u as Z,
    o as N,
    G as x,
    h as d,
    i as m,
    w as _,
    y as g,
    l as c,
    j as v,
    Y as w,
    t as f,
    F as $,
    z as A,
    a1 as E,
    C as z,
    ae as Q,
    _ as F,
    X as D
} from "./index-CPOGT4b2.js";
import {
    P as ee
} from "./PictureComponent-r7i8M6gc.js";
const V = s => U({
        pageType: s
    }),
    te = B({
        __name: "AdaptivePicture",
        props: {
            mobileImage: {},
            desktopImage: {}
        },
        setup(s) {
            const t = s,
                a = M(() => {
                    const {
                        mobileImage: r,
                        desktopImage: i
                    } = t, n = [];
                    return r && n.push({
                        ...r,
                        media: i ? `(max-width: ${L.md-1}px)` : void 0
                    }), i && n.push({
                        ...i,
                        media: r ? `(min-width: ${L.md}px)` : void 0
                    }), n
                });
            return (r, i) => a.value.length ? (u(), S(o(ee), {
                key: 0,
                sources: a.value,
                fallback: a.value[0]
            }, null, 8, ["sources", "fallback"])) : C("", !0)
        }
    });

function ne(s, t = {}) {
    const a = t.head || G();
    if (a) return a.ssr ? a.push(s, t) : se(a, s, t)
}

function se(s, t, a = {}) {
    const r = T(!1),
        i = T({});
    q(() => {
        i.value = r.value ? {} : J(t)
    });
    const n = s.push(i.value, a);
    return R(i, p => {
        n.patch(p)
    }), K() && (j(() => {
        n.dispose()
    }), O(() => {
        r.value = !0
    }), X(() => {
        r.value = !1
    })), n
}

function H(s) {
    var p, h;
    const {
        verticalConfig: t
    } = Y(), a = (h = (p = t.value) == null ? void 0 : p.meta) == null ? void 0 : h.appleItunesApp, r = window.location.origin, i = e => {
        var y, I;
        if (!e) return "";
        const l = (y = t == null ? void 0 : t.value) == null ? void 0 : y.postfix;
        return l && ((I = s()) != null && I.hidePostfix) ? e : `${e} | ${l}`
    }, n = e => {
        if (!e) return "";
        if (/^(http|https):\/\/[^ "]+$/.test(e)) return e;
        const y = r.endsWith("/") || e.startsWith("/") ? "" : "/";
        return `${r}${y}${e}`
    };
    ne({
        title: () => {
            var e;
            return i((e = s()) == null ? void 0 : e.title)
        },
        meta: [{
            name: "description",
            content: () => {
                var e;
                return ((e = s()) == null ? void 0 : e.description) ?? null
            }
        }, {
            property: "og:site_name",
            content: "http://TOTO.nl"
        }, {
            property: "og:locale",
            content: "nl-NL"
        }, {
            property: "og:title",
            content: () => {
                var e;
                return i((e = s()) == null ? void 0 : e.title)
            }
        }, {
            property: "og:description",
            content: () => {
                var e;
                return ((e = s()) == null ? void 0 : e.description) ?? null
            }
        }, {
            property: "og:image",
            content: "https://casino.toto.nl/images/open-graph/toto.webp"
        }, {
            name: "twitter:card",
            content: "summary"
        }, {
            name: "twitter:site",
            content: "@totocasino121"
        }, {
            name: "twitter:title",
            content: () => {
                var e;
                return i((e = s()) == null ? void 0 : e.title)
            }
        }, {
            name: "twitter:description",
            content: () => {
                var e;
                return ((e = s()) == null ? void 0 : e.description) ?? null
            }
        }, {
            name: "twitter:image:alt",
            content: "Casino Logo"
        }, {
            name: "theme-color",
            content: () => {
                var e, l;
                return (l = (e = t.value) == null ? void 0 : e.meta) == null ? void 0 : l.themeColor
            }
        }, {
            name: "msapplication-TileColor",
            content: () => {
                var e, l;
                return (l = (e = t.value) == null ? void 0 : e.meta) == null ? void 0 : l.themeColor
            }
        }, {
            name: "apple-mobile-web-app-status-bar-style",
            content: "default"
        }, {
            name: "twitter:image",
            content: "https://casino.toto.nl/images/open-graph/toto.webp"
        }, {
            name: "robots",
            content: () => {
                var e, l;
                return `${(e=s())!=null&&e.index?"index":"noindex"}, ${(l=s())!=null&&l.follow?"follow":"nofollow"}`
            }
        }, {
            name: "apple-itunes-app",
            content: () => {
                var e;
                return (e = s()) != null && e.showSmartAppBanner && a ? `app-id=${a}` : null
            }
        }],
        link: [{
            rel: "canonical",
            href: () => {
                var e, l;
                return (e = s()) != null && e.canonicalUrl ? n((l = s()) == null ? void 0 : l.canonicalUrl) : ""
            }
        }, {
            rel: "apple-touch-icon",
            href: () => {
                var e;
                return `/favicons/${(e=t.value)==null?void 0:e.name}/apple-touch-icon.png`
            }
        }, {
            rel: "icon",
            type: "image/x-icon",
            sizes: "16x16",
            href: () => {
                var e;
                return `/favicons/${(e=t.value)==null?void 0:e.name}/icon-16.ico`
            }
        }, {
            rel: "icon",
            type: "image/x-icon",
            sizes: "32x32",
            href: () => {
                var e;
                return `/favicons/${(e=t.value)==null?void 0:e.name}/icon-32.ico`
            }
        }, {
            rel: "icon",
            type: "image/png",
            sizes: "192x192",
            href: () => {
                var e;
                return `/favicons/${(e=t.value)==null?void 0:e.name}/icon-192.png`
            }
        }, {
            rel: "icon",
            type: "image/png",
            sizes: "512x512",
            href: () => {
                var e;
                return `/favicons/${(e=t.value)==null?void 0:e.name}/icon-512.png`
            }
        }, {
            rel: "icon",
            type: "image/svg+xml",
            href: () => {
                var e;
                return `/favicons/${(e=t.value)==null?void 0:e.name}/icon.svg`
            }
        }]
    })
}
const oe = "/assets/404-BdtFzS14.mov",
    ae = "/assets/404-DxVqXFRo.webm",
    re = "/assets/404-CZsn7CMk.mp4",
    b = [{
        name: "Home",
        url: "/"
    }, {
        name: "Slots",
        url: "/casino/slots"
    }, {
        name: "Live Casino",
        url: "/live-casino"
    }, {
        name: "Winn Itt",
        url: "/winn-itt"
    }, {
        name: "Alle Spellen",
        url: "/casino/alle-spellen"
    }],
    ie = g("source", {
        src: oe,
        type: "video/quicktime",
        width: "300",
        height: "150"
    }, null, -1),
    le = ["src"],
    ce = ["src"],
    pe = B({
        __name: "NotFoundBanner",
        setup(s) {
            const {
                t
            } = W(), a = Z(), {
                appInsights: r
            } = Q(), i = {
                title: t("common.notFoundPageMetaTitle")
            };
            return H(() => i), N(() => {
                V(x.PageType.NotFoundPage), r == null || r.trackEvent({
                    name: "404 Not Found",
                    properties: {
                        path: a.path
                    }
                })
            }), (n, P) => (u(), d("section", {
                class: c(n.styles.wrapper)
            }, [m(o(z), {
                type: "boxed-lg"
            }, {
                default: _(() => [g("video", {
                    class: c(n.styles.animation),
                    autoplay: "",
                    muted: "",
                    playsinline: ""
                }, [ie, g("source", {
                    src: o(ae),
                    type: "video/webm",
                    width: "300",
                    height: "150"
                }, null, 8, le), g("source", {
                    src: o(re),
                    type: "video/mp4",
                    width: "300",
                    height: "150"
                }, null, 8, ce), v(" 404 ")], 2), g("div", {
                    class: c(n.styles.content)
                }, [m(o(w), {
                    tag: "h1",
                    variant: "h1",
                    class: c(n.styles.title)
                }, {
                    default: _(() => [v(f(o(t)("common.notFoundPageTitle")), 1)]),
                    _: 1
                }, 8, ["class"]), m(o(w), {
                    tag: "p",
                    variant: "paragraph-lg-400",
                    class: c(n.styles.caption)
                }, {
                    default: _(() => [v(f(o(t)("common.notFoundPageCaption")), 1)]),
                    _: 1
                }, 8, ["class"])], 2), g("div", {
                    class: c(n.styles.linksWrapper)
                }, [(u(!0), d($, null, A(o(b), (p, h) => (u(), d($, {
                    key: h
                }, [m(o(E), {
                    ariaLabel: p.name,
                    type: "link",
                    to: p.url
                }, {
                    default: _(() => [v(f(p.name), 1)]),
                    _: 2
                }, 1032, ["ariaLabel", "to"]), h + 1 != o(b).length ? (u(), d("span", {
                    key: 0,
                    class: c(n.styles.divider)
                }, "|", 2)) : C("", !0)], 64))), 128))], 2)]),
                _: 1
            })], 2))
        }
    }),
    ue = "_wrapper_1vhgh_2",
    me = "_title_1vhgh_7",
    de = "_content_1vhgh_11",
    he = "_caption_1vhgh_18",
    ge = "_linksWrapper_1vhgh_23",
    _e = "_divider_1vhgh_31",
    ve = "_animation_1vhgh_35",
    fe = {
        wrapper: ue,
        title: me,
        content: de,
        caption: he,
        linksWrapper: ge,
        divider: _e,
        animation: ve
    },
    ye = {
        styles: fe
    },
    ke = F(pe, [
        ["__cssModules", ye]
    ]),
    k = "/assets/500-cards-BFS7HwCP.webp",
    we = B({
        __name: "ServerErrorBanner",
        setup(s) {
            const {
                t
            } = W(), a = {
                title: t("common.errorPageMetaTitle")
            };
            H(() => a);
            const r = {
                    src: k,
                    srcSet: k,
                    alt: "500 error"
                },
                i = {
                    src: k,
                    srcSet: k,
                    alt: "500 error"
                };
            return N(() => {
                V(x.PageType.ErrorPage)
            }), (n, P) => (u(), d("section", {
                class: c(n.styles.wrapper)
            }, [m(o(z), {
                type: "boxed-lg"
            }, {
                default: _(() => [m(o(te), {
                    "mobile-image": r,
                    "desktop-image": i,
                    mode: "contain",
                    class: c(n.styles.image),
                    loading: "eager"
                }, null, 8, ["class"]), g("div", {
                    class: c(n.styles.content)
                }, [m(o(w), {
                    tag: "h1",
                    variant: "h1",
                    class: "title"
                }, {
                    default: _(() => [v(f(o(t)("common.errorPageTitle")), 1)]),
                    _: 1
                }), m(o(w), {
                    tag: "p",
                    variant: "paragraph-lg-400",
                    class: c(n.styles.caption)
                }, {
                    default: _(() => [v(f(o(t)("common.errorPageMessage")), 1)]),
                    _: 1
                }, 8, ["class"])], 2), g("div", {
                    class: c(n.styles.linksWrapper)
                }, [(u(!0), d($, null, A(o(b), (p, h) => (u(), d($, {
                    key: h
                }, [m(o(E), {
                    ariaLabel: p.name,
                    type: "link",
                    to: p.url,
                    class: c(n.styles.link)
                }, {
                    default: _(() => [v(f(p.name), 1)]),
                    _: 2
                }, 1032, ["ariaLabel", "to", "class"]), h + 1 != o(b).length ? (u(), d("span", {
                    key: 0,
                    class: c(n.styles.divider)
                }, "|", 2)) : C("", !0)], 64))), 128))], 2)]),
                _: 1
            })], 2))
        }
    }),
    $e = "_wrapper_1fuke_2",
    be = "_content_1fuke_7",
    Be = "_caption_1fuke_13",
    Ce = "_linksWrapper_1fuke_18",
    Pe = "_divider_1fuke_26",
    Se = "_image_1fuke_30",
    Fe = {
        wrapper: $e,
        content: be,
        caption: Be,
        linksWrapper: Ce,
        divider: Pe,
        image: Se
    },
    Ie = {
        styles: Fe
    },
    Le = F(we, [
        ["__cssModules", Ie]
    ]),
    Te = B({
        __name: "BaseLayout",
        props: {
            error: {},
            hasBottomSpacing: {
                type: Boolean,
                default: !0
            }
        },
        setup(s) {
            return (t, a) => (u(), d("div", {
                class: c(t.hasBottomSpacing ? t.styles.bottomSpacing : null)
            }, [D(t.$slots, "default"), t.error === "notFound" ? (u(), S(o(ke), {
                key: 0
            })) : t.error ? (u(), S(o(Le), {
                key: 1
            })) : C("", !0)], 2))
        }
    }),
    We = "_bottomSpacing_1cr10_2",
    Ne = {
        bottomSpacing: We
    },
    xe = {
        styles: Ne
    },
    ze = F(Te, [
        ["__cssModules", xe]
    ]);
export {
    ze as B, te as _, V as p, H as u
};