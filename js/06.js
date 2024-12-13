import {
    s as i,
    v as l,
    x as r,
    ag as h,
    d as Y,
    a as Z,
    A as U,
    aN as x,
    c as _,
    ay as ee,
    I as ae,
    e as n,
    h as L,
    g as e,
    m as I,
    i as F,
    l as T,
    y as se,
    w as O,
    X as V,
    f,
    a1 as te,
    aO as oe,
    j as le,
    t as re,
    k as d,
    L as ie,
    p as ne,
    q as de,
    n as ce,
    F as ue,
    _ as me
} from "./index-CPOGT4b2.js";
import {
    G as he
} from "./GridControls-DsUKMXQL.js";
import {
    f as A
} from "./useIsomorphicViewData-dEXAvQ6M.js";
import {
    u as ge
} from "./useGridSetup-BCsV9-gz.js";
import {
    _ as pe
} from "./BaseLayout-D-ZuHZ1x.js";
import {
    u as ye
} from "./useIsReadyHelper-C835y3vs.js";
import {
    u as fe
} from "./useUrlPrefixer-BUgJkrpc.js";
import {
    s as be
} from "./GamesBlock.css_vue_type_style_index_0_src_true_lang.module-DKOg2fTf.js";
const ve = async t => A(`${r}/game/slide`, {
    method: "POST",
    headers: l,
    body: JSON.stringify(t),
    credentials: "include"
}), Ne = async (t, o) => {
    const s = new URLSearchParams(o);
    return A(`${r}/game/user-filters?${s}`, {
        method: "POST",
        headers: l,
        body: JSON.stringify(t)
    })
}, Ue = async (t, o) => i(`${r}/game/id/${t}${o?"?mobile=true":""}`, {
    headers: {
        ...l
    },
    credentials: "include"
}), Le = async (t, o) => i(`${r}/game/slug/${t}${o?"?mobile=true":""}`, {
    headers: {
        ...l
    },
    credentials: "include"
}), Ie = async (t, o = h.casino, s) => i(`${r}/game/block/${t}/?vertical=${o}${s?"&mobile=true":""}`, {
    headers: {
        ...l
    },
    credentials: "include"
}), Fe = async (t = h.casino, o) => {
    const s = new URLSearchParams;
    return o && s.append("mobile", "true"), s.append("vertical", t), i(`${r}/game/block/favorites?${s}`, {
        headers: {
            ...l
        },
        credentials: "include"
    })
}, Te = async (t = h.casino, o) => {
    const s = new URLSearchParams;
    return o && s.append("mobile", "true"), s.append("vertical", t), i(`${r}/game/block/lastplayed?${s}`, {
        headers: {
            ...l
        },
        credentials: "include"
    })
}, Oe = async (t, o = h.casino, s) => i(`${r}/game/block/gameprovider/${t}/?vertical=${o}${s?"&mobile=true":""}`, {
    headers: l
}), Ve = async t => i(`${r}/game/gamesoftheweek${t?"?mobile=true":""}`, {
    headers: {
        ...l
    },
    credentials: "include"
}), ke = Y({
    __name: "GamesBlock",
    props: {
        isImplicit: {
            type: Boolean
        },
        customContainerLayout: {},
        shouldManageWidth: {
            type: Boolean,
            default: !0
        },
        class: {},
        refreshOnActivated: {
            type: Boolean
        },
        doSsr: {
            type: Boolean,
            default: !0
        },
        id: {},
        intro: {},
        isShowMoreAlwaysVisible: {
            type: Boolean
        },
        loadBehavior: {},
        pageBlockType: {},
        request: {},
        showMoreUrl: {},
        slides: {},
        theme: {},
        title: {},
        totalSlides: {},
        useGreyBackground: {
            type: Boolean
        },
        userFilters: {},
        vwoId: {}
    },
    emits: ["register-restart-method", "ready"],
    setup(t, {
        emit: o
    }) {
        const s = t,
            b = o,
            {
                emitChildReady: z
            } = ye(b),
            {
                isMobile: v
            } = Z(),
            W = async a => {
                const m = {
                    ...s.request,
                    mobile: v.value,
                    slide: a
                };
                return await ve(m)
            }, {
                fetchNextPage: q,
                registerScrollMethods: E,
                setStartAndEndReached: J,
                reinitialize: H,
                slidesRef: g,
                isLoading: c,
                totalSlidesRef: p,
                gridScrollMethods: k,
                endReached: j,
                loadBehaviorComputed: y,
                startReached: D,
                shouldSkipContentRendering: X,
                getFirstTileGlobalIndex: K
            } = ge(s, {
                fetchSlide: W
            }), {
                addPrefix: Q
            } = fe(), u = U(() => s.showMoreUrl ? x(s.showMoreUrl) ? s.showMoreUrl : Q(s.showMoreUrl) : null), S = U(() => p.value > 1 || s.isShowMoreAlwaysVisible), {
                t: $
            } = _();
        return ee(() => {
            b("register-restart-method", H)
        }), ae(c, () => {
            c.value || z()
        }, {
            immediate: !0
        }), (a, m) => {
            var w, B, M, C, G, P;
            return n(), L(ue, null, [((w = e(g)) == null ? void 0 : w.length) > 0 ? (n(), L("section", I({
                key: 0
            }, a.$attrs, {
                class: [a.styles.container, (B = a.theme) != null && B.darkTheme ? a.styles.inverted : null, s.class]
            }), [F(e(pe), {
                "mobile-image": (M = a.theme) == null ? void 0 : M.mobileBackground,
                "desktop-image": (C = a.theme) == null ? void 0 : C.background,
                loading: "eager",
                mode: "cover",
                class: T(a.styles.backgroundImage)
            }, null, 8, ["mobile-image", "desktop-image", "class"]), se("div", {
                class: T(a.styles.content)
            }, [F(e(ne), {
                "load-behavior": e(y),
                title: a.title,
                intro: a.intro,
                "custom-title-tag": a.isImplicit ? "h1" : void 0,
                "custom-title-variant": a.isImplicit ? "h1" : void 0,
                "custom-container-layout": a.customContainerLayout,
                icon: (G = a.theme) == null ? void 0 : G.icon,
                "is-inverted-mode": (P = a.theme) == null ? void 0 : P.darkTheme,
                "should-manage-width": a.shouldManageWidth,
                "title-url": u.value && S.value ? u.value : null
            }, {
                default: O(() => [V(a.$slots, "headingRight", {}, () => {
                    var R, N;
                    return [u.value && S.value ? (n(), f(e(te), {
                        key: 0,
                        type: "tertiary",
                        size: e(v) ? "small" : "large",
                        to: u.value,
                        ariaLabel: e($)("blocks.gamesBlock.viewMore"),
                        onClick: m[0] || (m[0] = () => e(oe).pushViewMoreClickEvent(a.title))
                    }, {
                        default: O(() => [le(re(e($)("blocks.gamesBlock.viewMore")), 1)]),
                        _: 1
                    }, 8, ["size", "to", "ariaLabel"])) : d("", !0), e(y) === e(ie).Sidescrolling ? (n(), f(e(he), {
                        key: 1,
                        onNextClicked: (R = e(k)) == null ? void 0 : R.scrollToNext,
                        onPreviousClicked: (N = e(k)) == null ? void 0 : N.scrollToPrevious,
                        "next-button-disabled": e(j),
                        "prev-button-disabled": e(D)
                    }, null, 8, ["onNextClicked", "onPreviousClicked", "next-button-disabled", "prev-button-disabled"])) : d("", !0)]
                })]),
                _: 3
            }, 8, ["load-behavior", "title", "intro", "custom-title-tag", "custom-title-variant", "custom-container-layout", "icon", "is-inverted-mode", "should-manage-width", "title-url"]), e(g).length && !e(X) ? (n(), f(e(de), {
                key: 0,
                onFetchNextPage: e(q),
                onOnContainerScrolled: e(J),
                onRegisterScrollMethods: e(E),
                slides: e(g),
                "total-slides": e(p),
                "load-behavior": e(y),
                "is-loading": e(c),
                "custom-container-layout": a.customContainerLayout,
                "should-manage-width": a.shouldManageWidth,
                "block-title": a.title,
                "get-first-tile-global-index": e(K)
            }, null, 8, ["onFetchNextPage", "onOnContainerScrolled", "onRegisterScrollMethods", "slides", "total-slides", "load-behavior", "is-loading", "custom-container-layout", "should-manage-width", "block-title", "get-first-tile-global-index"])) : d("", !0)], 2)], 16)) : d("", !0), e(p) < 1 && !e(c) ? V(a.$slots, "noResults", ce(I({
                key: 1
            }, a.$attrs))) : d("", !0)], 64)
        }
    }
}), Se = {
    styles: be
}, Ae = me(ke, [
    ["__cssModules", Se]
]);
export {
    Ae as G, Le as a, Ue as b, Ve as c, Ie as d, Te as e, Fe as f, Oe as g, Ne as h
};