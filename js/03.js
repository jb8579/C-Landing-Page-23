import {
    a9 as W,
    G as m,
    d as v,
    e as s,
    h as o,
    i as k,
    w as u,
    y as c,
    l as n,
    F as g,
    z as B,
    g as l,
    b9 as f,
    k as a,
    Y as d,
    j as y,
    t as C,
    f as h,
    a1 as F,
    C as w,
    _ as b
} from "./index-CPOGT4b2.js";
import {
    _ as E
} from "./StaticPicture.vue_vue_type_script_setup_true_lang-C_zOsbu-.js";
import {
    R as L
} from "./RichTextComponent-Bwo4lVBx.js";
import "./PictureComponent-r7i8M6gc.js";
const T = (i, t, r) => {
        W({
            event: m.EventName.TrackEvent,
            eventCategory: m.EventCategory.LinkTracking,
            eventAction: `Klik op - Full Width Content Block - ${i} - ${r}`,
            eventLabel: t,
            event_params: {
                event_name: "klik_button",
                interaction_content: "Full Width Content Block",
                interaction_context: `Full Width Content Block - ${i} - ${r}`
            }
        })
    },
    N = {
        pushFullWidthContentBlockClickEvent: T
    },
    $ = v({
        __name: "FullWidthContentBlock",
        props: {
            doSsr: {
                type: Boolean
            },
            items: {},
            pageBlockType: {},
            useGrayBackground: {
                type: Boolean
            },
            vwoId: {}
        },
        setup(i) {
            return (t, r) => (s(), o("section", {
                class: n(t.styles.outerWrapper)
            }, [k(l(w), {
                type: "boxed-xl"
            }, {
                default: u(() => [c("div", {
                    class: n(t.styles.wrapper)
                }, [(s(!0), o(g, null, B(t.items, (e, p) => (s(), o(g, {
                    key: p
                }, [c("div", {
                    class: n([t.styles.contentBlock, e.alignment != l(f).Full ? t.styles[e.alignment.toLocaleLowerCase()] : t.styles.fullWidth])
                }, [e.image ? (s(), o("div", {
                    key: 0,
                    class: n(t.styles.imageWrapper)
                }, [k(l(E), {
                    image: e.image,
                    mode: "cover",
                    imgClass: t.styles.image
                }, null, 8, ["image", "imgClass"])], 2)) : a("", !0), c("div", {
                    class: n(t.styles.contentWrapper)
                }, [k(l(d), {
                    variant: "h2",
                    tag: "h2",
                    class: n(t.styles.title)
                }, {
                    default: u(() => [y(C(e.title), 1)]),
                    _: 2
                }, 1032, ["class"]), e.intro ? (s(), h(l(L), {
                    key: 0,
                    content: e.intro,
                    class: n(t.styles.intro)
                }, null, 8, ["content", "class"])) : a("", !0), e != null && e.link ? (s(), h(l(F), {
                    key: 1,
                    to: e.link.url,
                    target: e.link.targetIsBlank ? "_blank" : "_self",
                    ariaLabel: e.link.text,
                    type: "primary",
                    size: "large",
                    class: n(t.styles.link),
                    onClick: () => {
                        var _;
                        return l(N).pushFullWidthContentBlockClickEvent(e.title, ((_ = e.link) == null ? void 0 : _.text) ?? "", p)
                    }
                }, {
                    default: u(() => [y(C(e == null ? void 0 : e.link.text), 1)]),
                    _: 2
                }, 1032, ["to", "target", "ariaLabel", "class", "onClick"])) : a("", !0)], 2)], 2), p + 1 !== t.items.length ? (s(), o("span", {
                    key: 0,
                    class: n(t.styles.divider)
                }, null, 2)) : a("", !0)], 64))), 128))], 2)]),
                _: 1
            })], 2))
        }
    }),
    G = "_outerWrapper_59u8k_2",
    V = "_wrapper_59u8k_10",
    z = "_contentBlock_59u8k_24",
    A = "_fullWidth_59u8k_28",
    I = "_left_59u8k_29",
    M = "_right_59u8k_30",
    R = "_contentWrapper_59u8k_48",
    S = "_title_59u8k_56",
    j = "_intro_59u8k_57",
    D = "_image_59u8k_61",
    K = "_link_59u8k_67",
    U = "_divider_59u8k_72",
    Y = "_imageWrapper_59u8k_77",
    q = {
        outerWrapper: G,
        wrapper: V,
        contentBlock: z,
        fullWidth: A,
        left: I,
        right: M,
        contentWrapper: R,
        title: S,
        intro: j,
        image: D,
        link: K,
        divider: U,
        imageWrapper: Y
    },
    H = {
        styles: q
    },
    X = b($, [
        ["__cssModules", H]
    ]);
export {
    X as
    default
};