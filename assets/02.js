import {
    d as z,
    a as J,
    A as q,
    e as i,
    f as g,
    g as a,
    k as d,
    a9 as V,
    G as S,
    h as B,
    i as $,
    w as f,
    y as _,
    l as n,
    Y as A,
    j as C,
    t as I,
    a1 as P,
    C as Q,
    _ as R,
    n as se,
    ar as ae,
    M as re,
    b5 as le,
    b as ie,
    E as W,
    I as H,
    o as ue,
    aH as ce,
    ad as de,
    a8 as pe,
    aa as j,
    F as me,
    z as ge,
    m as ye,
    a6 as ve,
    b6 as Y,
    b7 as be
} from "./index-CPOGT4b2.js";
import {
    T as X
} from "./TwentyFourLabel-BI_qnuj3.js";
import {
    _ as he
} from "./BaseLayout-D-ZuHZ1x.js";
import {
    _ as fe
} from "./StaticPicture.vue_vue_type_script_setup_true_lang-C_zOsbu-.js";
import {
    _ as _e
} from "./MutedVideo.vue_vue_type_script_setup_true_lang-BRMfdalv.js";
import {
    u as ke
} from "./useIsReadyHelper-C835y3vs.js";
import "./PictureComponent-r7i8M6gc.js";
const Be = z({
        __name: "AdaptivePictureNoFallback",
        props: {
            mobileImage: {},
            desktopImage: {}
        },
        setup(c) {
            const s = c,
                {
                    isMobile: u
                } = J(),
                e = q(() => u.value ? s.mobileImage : s.desktopImage);
            return (y, w) => e.value ? (i(), g(a(fe), {
                key: 0,
                image: e.value
            }, null, 8, ["image"])) : d("", !0)
        }
    }),
    we = (c, s) => {
        V({
            event: S.EventName.TrackEvent,
            eventCategory: S.EventCategory.LinkTracking,
            eventAction: `Klik op - ContentBlockCarousel - ${c} - ${s+1}`,
            eventLabel: c,
            event_params: {
                event_name: "klik_banner",
                interaction_context: "Carrousel",
                interaction_content: c
            }
        })
    },
    Te = (c, s, u) => {
        V({
            event: S.EventName.TrackEvent,
            eventCategory: S.EventCategory.LinkTracking,
            eventAction: `Klik op - ContentBlockCarousel - ${c} - ${s+1}`,
            eventLabel: u,
            event_params: {
                event_name: "klik_button",
                interaction_context: "Carrousel",
                interaction_content: `${c} - ${u??""} - ${s+1}`
            }
        })
    },
    M = {
        pushBannerTapEvent: we,
        pushButtonClickEvent: Te
    },
    Ce = z({
        __name: "CarouselRegularSlide",
        props: {
            carouselItemType: {},
            desktopForegroundImage: {},
            desktopImage: {},
            endDateTime: {},
            firstButton: {},
            hideFromUnderTwentyFourPlayers: {
                type: Boolean
            },
            link: {},
            mobileForegroundImage: {},
            mobileImage: {},
            secondButton: {},
            showWhen: {},
            startDateTime: {},
            subtitle: {},
            title: {},
            useReadabilityOverlay: {
                type: Boolean
            },
            index: {},
            isMoreThanOneSlide: {
                type: Boolean
            }
        },
        setup(c) {
            const s = c,
                u = () => {
                    M.pushBannerTapEvent(s.title, s.index)
                };
            return (e, y) => (i(), B("div", {
                class: n([e.baseStyles.container, e.styles.container, e.isMoreThanOneSlide && e.styles.container_withArrowsPlaceholder, s.hideFromUnderTwentyFourPlayers && e.styles.container_hideFromUnderTwentyFourPlayers, e.useReadabilityOverlay && e.styles.container_withOverlay]),
                onTap: u
            }, [$(a(Q), {
                type: "boxed-xl"
            }, {
                default: f(() => {
                    var w, t, m, r, T, v, p;
                    return [_("div", {
                        class: n(e.styles.contentWrapper)
                    }, [_("div", {
                        class: n(e.styles.content)
                    }, [$(a(A), {
                        tag: "h2",
                        variant: "h1"
                    }, {
                        default: f(() => [C(I(e.title), 1)]),
                        _: 1
                    }), e.subtitle ? (i(), g(a(A), {
                        key: 0,
                        class: n(e.styles.subtitle),
                        tag: "p",
                        variant: "paragraph-md-400"
                    }, {
                        default: f(() => [C(I(e.subtitle), 1)]),
                        _: 1
                    }, 8, ["class"])) : d("", !0), e.firstButton || e.secondButton ? (i(), B("div", {
                        key: 1,
                        class: n(e.styles.buttons)
                    }, [(w = e.firstButton) != null && w.url ? (i(), g(a(P), {
                        key: 0,
                        class: n(e.styles.button),
                        to: (t = e.firstButton) == null ? void 0 : t.url,
                        target: (m = e.firstButton) != null && m.targetIsBlank ? "_blank" : "_self",
                        ariaLabel: e.firstButton.text,
                        type: "primary",
                        size: "large",
                        authRequired: (r = e.firstButton) == null ? void 0 : r.showLoginModal,
                        onClick: y[0] || (y[0] = () => {
                            var b;
                            return a(M).pushButtonClickEvent(e.title, e.index, (b = e.firstButton) == null ? void 0 : b.text)
                        })
                    }, {
                        default: f(() => [C(I(e.firstButton.text), 1)]),
                        _: 1
                    }, 8, ["class", "to", "target", "ariaLabel", "authRequired"])) : d("", !0), (T = e.secondButton) != null && T.url ? (i(), g(a(P), {
                        key: 1,
                        class: n(e.styles.button),
                        to: e.secondButton.url,
                        ariaLabel: e.secondButton.text,
                        target: (v = e.secondButton) != null && v.targetIsBlank ? "_blank" : "_self",
                        type: "secondary",
                        size: "large",
                        showLoginModal: (p = e.secondButton) == null ? void 0 : p.showLoginModal,
                        onClick: y[1] || (y[1] = () => {
                            var b;
                            return a(M).pushButtonClickEvent(e.title, e.index, (b = e.secondButton) == null ? void 0 : b.text)
                        })
                    }, {
                        default: f(() => [C(I(e.secondButton.text), 1)]),
                        _: 1
                    }, 8, ["class", "to", "ariaLabel", "target", "showLoginModal"])) : d("", !0)], 2)) : d("", !0), s.hideFromUnderTwentyFourPlayers ? (i(), g(a(X), {
                        key: 2,
                        class: n(e.styles.twentyFourLabel)
                    }, null, 8, ["class"])) : d("", !0)], 2), _("div", {
                        class: n(e.styles.foregroundImageWrapper)
                    }, [$(a(Be), {
                        class: n(e.styles.foregroundImage),
                        "mobile-image": e.mobileForegroundImage ? {
                            ...e.mobileForegroundImage,
                            sizes: "320px"
                        } : void 0,
                        "desktop-image": e.desktopForegroundImage ? {
                            ...e.desktopForegroundImage,
                            sizes: "320px"
                        } : void 0,
                        mode: "contain",
                        loading: "eager"
                    }, null, 8, ["class", "mobile-image", "desktop-image"])], 2)], 2)]
                }),
                _: 1
            }), $(a(he), {
                "mobile-image": {
                    ...e.mobileImage,
                    sizes: "100vw"
                },
                "desktop-image": {
                    ...e.desktopImage,
                    sizes: "100vw"
                },
                class: n(e.styles.background),
                mode: "cover",
                loading: "eager"
            }, null, 8, ["mobile-image", "desktop-image", "class"])], 34))
        }
    }),
    Ie = "_container_r9b48_1",
    Z = {
        container: Ie
    },
    Le = "_container_1adrz_2",
    Fe = "_container_withArrowsPlaceholder_1adrz_14",
    $e = "_container_hideFromUnderTwentyFourPlayers_1adrz_20",
    Me = "_container_withOverlay_1adrz_24",
    Se = "_contentWrapper_1adrz_39",
    Pe = "_content_1adrz_39",
    Ee = "_background_1adrz_68",
    We = "_foregroundImageWrapper_1adrz_75",
    ze = "_foregroundImage_1adrz_75",
    Oe = "_subtitle_1adrz_99",
    qe = "_buttons_1adrz_103",
    Ae = "_button_1adrz_103",
    De = "_twentyFourLabel_1adrz_124",
    Ue = {
        container: Le,
        container_withArrowsPlaceholder: Fe,
        container_hideFromUnderTwentyFourPlayers: $e,
        container_withOverlay: Me,
        contentWrapper: Se,
        content: Pe,
        background: Ee,
        foregroundImageWrapper: We,
        foregroundImage: ze,
        subtitle: Oe,
        buttons: qe,
        button: Ae,
        twentyFourLabel: De
    },
    Ve = {
        baseStyles: Z,
        styles: Ue
    },
    Re = R(Ce, [
        ["__cssModules", Ve]
    ]),
    Ne = z({
        __name: "CarouselVideoSlide",
        props: {
            carouselItemType: {},
            desktopImage: {},
            desktopVideo: {},
            endDateTime: {},
            firstButton: {},
            hideFromUnderTwentyFourPlayers: {
                type: Boolean
            },
            link: {},
            mobileImage: {},
            mobileVideo: {},
            secondButton: {},
            showWhen: {},
            startDateTime: {},
            subtitle: {},
            title: {},
            index: {},
            isMoreThanOneSlide: {
                type: Boolean
            }
        },
        setup(c) {
            const s = c,
                u = () => {
                    M.pushBannerTapEvent(s.title, s.index)
                },
                {
                    isMobile: e
                } = J(),
                y = q(() => {
                    var t, m, r;
                    return e.value && ((t = s.mobileVideo) != null && t.videoUrl) ? (m = s.mobileVideo) == null ? void 0 : m.videoUrl : (r = s.desktopVideo) == null ? void 0 : r.videoUrl
                }),
                w = q(() => e.value && s.mobileImage ? s.mobileImage : s.desktopImage);
            return (t, m) => (i(), B("div", {
                class: n([t.baseStyles.container, t.styles.container, t.isMoreThanOneSlide && t.styles.container_withArrowsPlaceholder]),
                onTap: u
            }, [$(a(Q), {
                type: "boxed-xl",
                "padding-mode": "desktop",
                class: n(t.styles.innerContainer)
            }, {
                default: f(() => {
                    var r, T, v, p, b, h, O, E;
                    return [_("div", {
                        class: n(t.styles.videoWrapper)
                    }, [y.value ? (i(), g(a(_e), {
                        key: 0,
                        class: n(t.styles.video),
                        "video-url": y.value,
                        loop: !0,
                        poster: (r = w.value) == null ? void 0 : r.srcSet
                    }, null, 8, ["class", "video-url", "poster"])) : d("", !0), _("div", {
                        class: n(t.styles.gradientOverlay)
                    }, null, 2)], 2), _("div", {
                        class: n(t.styles.contentWrapper)
                    }, [_("div", null, [$(a(A), {
                        class: n(t.styles.title),
                        tag: "h2",
                        variant: "h1"
                    }, {
                        default: f(() => [C(I(t.title), 1)]),
                        _: 1
                    }, 8, ["class"]), t.subtitle ? (i(), g(a(A), {
                        key: 0,
                        class: n(t.styles.subtitle),
                        tag: "p",
                        variant: "paragraph-md-400"
                    }, {
                        default: f(() => [C(I(t.subtitle), 1)]),
                        _: 1
                    }, 8, ["class"])) : d("", !0)]), t.firstButton || t.secondButton ? (i(), B("div", {
                        key: 0,
                        class: n(t.styles.buttons)
                    }, [(T = t.firstButton) != null && T.url ? (i(), g(a(P), {
                        key: 0,
                        to: (v = t.firstButton) == null ? void 0 : v.url,
                        target: (p = t.firstButton) != null && p.targetIsBlank ? "_blank" : "_self",
                        ariaLabel: t.firstButton.text,
                        type: "primary",
                        size: "large",
                        class: n(t.styles.button),
                        authRequired: (b = t.firstButton) == null ? void 0 : b.showLoginModal,
                        onClick: m[0] || (m[0] = () => {
                            var k;
                            return a(M).pushButtonClickEvent(t.title, t.index, (k = t.firstButton) == null ? void 0 : k.text)
                        })
                    }, {
                        default: f(() => [C(I(t.firstButton.text), 1)]),
                        _: 1
                    }, 8, ["to", "target", "ariaLabel", "class", "authRequired"])) : d("", !0), (h = t.secondButton) != null && h.url ? (i(), g(a(P), {
                        key: 1,
                        to: t.secondButton.url,
                        ariaLabel: t.secondButton.text,
                        target: (O = t.secondButton) != null && O.targetIsBlank ? "_blank" : "_self",
                        type: "secondary",
                        size: "large",
                        class: n(t.styles.button),
                        showLoginModal: (E = t.secondButton) == null ? void 0 : E.showLoginModal,
                        onClick: m[1] || (m[1] = () => {
                            var k;
                            return a(M).pushButtonClickEvent(t.title, t.index, (k = t.secondButton) == null ? void 0 : k.text)
                        })
                    }, {
                        default: f(() => [C(I(t.secondButton.text), 1)]),
                        _: 1
                    }, 8, ["to", "ariaLabel", "target", "class", "showLoginModal"])) : d("", !0)], 2)) : d("", !0), s.hideFromUnderTwentyFourPlayers ? (i(), g(a(X), {
                        key: 1,
                        class: n(t.styles.twentyFourLabel)
                    }, null, 8, ["class"])) : d("", !0)], 2)]
                }),
                _: 1
            }, 8, ["class"])], 34))
        }
    }),
    Ge = "_container_1bcw0_2",
    Ke = "_container_withArrowsPlaceholder_1bcw0_14",
    He = "_innerContainer_1bcw0_20",
    je = "_contentWrapper_1bcw0_30",
    Ye = "_subtitle_1bcw0_48",
    Je = "_buttons_1bcw0_52",
    Qe = "_button_1bcw0_52",
    Xe = "_videoWrapper_1bcw0_72",
    Ze = "_video_1bcw0_72",
    xe = "_gradientOverlay_1bcw0_95",
    et = "_twentyFourLabel_1bcw0_106",
    tt = {
        container: Ge,
        container_withArrowsPlaceholder: Ke,
        innerContainer: He,
        contentWrapper: je,
        subtitle: Ye,
        buttons: Je,
        button: Qe,
        videoWrapper: Xe,
        video: Ze,
        gradientOverlay: xe,
        twentyFourLabel: et
    },
    ot = {
        baseStyles: Z,
        styles: tt
    },
    nt = R(Ne, [
        ["__cssModules", ot]
    ]),
    st = z({
        __name: "CarouselSlide",
        props: {
            carouselItemType: {},
            desktopForegroundImage: {},
            desktopImage: {},
            endDateTime: {},
            firstButton: {},
            hideFromUnderTwentyFourPlayers: {
                type: Boolean
            },
            link: {},
            mobileForegroundImage: {},
            mobileImage: {},
            secondButton: {},
            showWhen: {},
            startDateTime: {},
            subtitle: {},
            title: {},
            useReadabilityOverlay: {
                type: Boolean
            },
            desktopVideo: {},
            mobileVideo: {},
            index: {},
            isMoreThanOneSlide: {
                type: Boolean
            }
        },
        setup(c) {
            const s = c;
            return (u, e) => (i(), g(re(u.carouselItemType === a(le).Video ? a(nt) : a(Re)), se(ae(s)), null, 16))
        }
    }),
    at = (c, s) => {
        const u = c === "next" ? "Volgende" : "Vorige";
        V({
            event: S.EventName.TrackEvent,
            eventCategory: S.EventCategory.LinkTracking,
            eventAction: `Klik op Carousel navigatie - ${u}`,
            eventLabel: `${s}`,
            event_params: {
                event_name: "klik_button",
                interaction_context: "Carrousel",
                interaction_content: `${s} - ${u}`
            }
        })
    },
    rt = {
        pushControlClickEvent: at
    },
    F = 7e3,
    lt = z({
        __name: "CarouselBlock",
        props: {
            items: {},
            fallbackItem: {},
            doSsr: {
                type: Boolean
            },
            pageBlockType: {},
            vwoId: {}
        },
        emits: ["ready"],
        setup(c, {
            emit: s
        }) {
            let u;
            const e = c,
                y = ie(),
                w = ve(),
                t = s,
                {
                    emitChildReady: m
                } = ke(t),
                r = W(null),
                T = W(Date.now()),
                v = W(F),
                p = W(null),
                b = () => {
                    const o = e.items.filter(l => {
                        var L;
                        return !(y.value && l.hideFromUnderTwentyFourPlayers && ((L = w.value) != null && L.isBonusExcluded) || l.showWhen === Y.OnlyLoggedIn && !y.value || l.showWhen === Y.OnlyLoggedOut && y.value || l.startDateTime && new Date(l.startDateTime).getTime() > Date.now() || l.endDateTime && new Date(l.endDateTime).getTime() < Date.now())
                    });
                    return !o.length && e.fallbackItem && o.push(e.fallbackItem), o
                },
                h = W(b()),
                O = () => r.value ? Math.round(r.value.scrollLeft / r.value.clientWidth) : 0,
                E = o => {
                    rt.pushControlClickEvent(o, O()), o === "next" ? G() : oe(), N()
                },
                k = q(() => h.value.length > 1),
                N = () => {
                    var o;
                    (o = p.value) == null || o.getAnimations().forEach(l => {
                        l.cancel(), l.play(), l.pause()
                    })
                },
                D = o => {
                    p.value && (clearTimeout(u), u = setTimeout(() => {
                        G(), D(F)
                    }, o), T.value = Date.now(), p.value.style.animationDuration = `${F}ms`, p.value.getAnimations().forEach(l => {
                        l.play()
                    }))
                },
                U = () => {
                    const o = b();
                    if (h.value = o, o.length <= 1 || be()) {
                        m();
                        return
                    }
                    m()
                };
            H(w, U), ue(U), ce(U), H(p, () => {
                D(F)
            }), de(() => {
                u && clearTimeout(u)
            });
            const x = () => {
                    h.value.length <= 1 || (N(), clearTimeout(u))
                },
                ee = () => {
                    var l;
                    if (h.value.length <= 1) return;
                    (l = p.value) == null || l.getAnimations().forEach(L => {
                        L.pause()
                    });
                    const o = Date.now() - T.value;
                    v.value = (v.value ?? F) - o, clearTimeout(u)
                },
                te = () => {
                    var o;
                    h.value.length <= 1 || ((o = p.value) == null || o.getAnimations().forEach(l => {
                        l.play()
                    }), D(v.value))
                },
                G = () => {
                    if (!r.value) return;
                    let o = ~~(r.value.scrollLeft + r.value.clientWidth);
                    o === r.value.scrollWidth && (o = 0), r.value.scrollTo({
                        left: o,
                        behavior: "smooth"
                    }), v.value = F
                },
                oe = () => {
                    if (!r.value) return;
                    let o = r.value.scrollLeft - r.value.clientWidth;
                    r.value.scrollTo({
                        left: o < 0 ? r.value.scrollWidth : o,
                        behavior: "smooth"
                    }), v.value = F
                },
                {
                    t: K
                } = pe();
            return (o, l) => (i(), B("div", null, [_("section", {
                class: n(o.styles.container),
                onMouseenterPassive: ee,
                onTouchmovePassive: x,
                onMouseleavePassive: te
            }, [_("div", {
                class: n(o.styles.controlsLayer)
            }, [k.value ? (i(), g(a(P), {
                key: 0,
                class: n(o.styles.previousButton),
                ariaLabel: a(K)("a11y.previousSlide"),
                onClick: l[0] || (l[0] = j(() => E("previous"), ["stop"])),
                type: "tonal",
                icon: "chevron_left"
            }, null, 8, ["class", "ariaLabel"])) : d("", !0), k.value ? (i(), g(a(P), {
                key: 1,
                class: n(o.styles.nextButton),
                ariaLabel: a(K)("a11y.nextSlide"),
                onClick: l[1] || (l[1] = j(() => E("next"), ["stop"])),
                type: "tonal",
                icon: "chevron_right"
            }, null, 8, ["class", "ariaLabel"])) : d("", !0)], 2), h.value.length ? (i(), B("div", {
                key: 0,
                class: n(o.styles.carousel),
                ref_key: "carousel",
                ref: r
            }, [(i(!0), B(me, null, ge(h.value, (L, ne) => (i(), B("div", {
                key: L.title,
                class: n(o.styles.slide)
            }, [$(a(st), ye({
                index: ne,
                isMoreThanOneSlide: k.value,
                ref_for: !0
            }, L), null, 16, ["index", "isMoreThanOneSlide"])], 2))), 128))], 2)) : d("", !0)], 34), h.value.length > 1 ? (i(), B("div", {
                key: 0,
                class: n(o.styles.progress)
            }, [_("div", {
                ref_key: "progressBar",
                ref: p,
                class: n(o.styles.progressBar)
            }, null, 2)], 2)) : d("", !0)]))
        }
    }),
    it = "_container_qcqhc_2",
    ut = "_carousel_qcqhc_12",
    ct = "_controlsLayer_qcqhc_30",
    dt = "_previousButton_qcqhc_35",
    pt = "_nextButton_qcqhc_36",
    mt = "_slide_qcqhc_51",
    gt = "_progress_qcqhc_59",
    yt = "_progressBar_qcqhc_68",
    vt = "_animateLinear_qcqhc_1",
    bt = {
        container: it,
        carousel: ut,
        controlsLayer: ct,
        previousButton: dt,
        nextButton: pt,
        slide: mt,
        progress: gt,
        progressBar: yt,
        animateLinear: vt
    },
    ht = {
        styles: bt
    },
    It = R(lt, [
        ["__cssModules", ht]
    ]);
export {
    It as
    default
};