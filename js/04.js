import {
    d as l,
    aP as i,
    e as t,
    h as o,
    F as u,
    z as _,
    m,
    y as p,
    l as c,
    g as d,
    _ as f
} from "./index-CPOGT4b2.js";
const g = e => Array.isArray(e) ? e : [e],
    v = ["srcset", "alt", "loading"],
    y = l({
        __name: "PictureComponent",
        props: {
            sources: {},
            fallback: {},
            mode: {
                default: "cover"
            },
            loading: {
                default: "lazy"
            },
            aspectRatio: {
                default: "auto"
            },
            imgClass: {}
        },
        setup(e) {
            i(s => ({
                bf9c98d2: s.aspectRatio
            }));
            const a = e;
            return (s, z) => (t(), o("picture", {
                class: c(s.styles.picture)
            }, [(t(!0), o(u, null, _(a.sources, (r, n) => (t(), o("source", m({
                key: n,
                ref_for: !0
            }, r), null, 16))), 128)), p("img", {
                class: c([s.styles.img, s.styles[s.mode], ...d(g)(s.imgClass)]),
                srcset: a.fallback.srcSet,
                alt: a.fallback.alt,
                loading: a.loading
            }, null, 10, v)], 2))
        }
    }),
    k = "_picture_vxx2v_2",
    C = "_img_vxx2v_5",
    x = "_cover_vxx2v_12",
    P = "_contain_vxx2v_16",
    b = {
        picture: k,
        img: C,
        cover: x,
        contain: P
    },
    h = {
        styles: b
    },
    F = f(y, [
        ["__cssModules", h]
    ]);
export {
    F as P
};