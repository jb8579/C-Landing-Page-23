import {
    d as e,
    e as t,
    h as n,
    l as o,
    _ as c
} from "./index-CPOGT4b2.js";
const r = ["innerHTML"],
    _ = e({
        __name: "RichTextComponent",
        props: {
            content: {},
            variant: {
                default: "md"
            }
        },
        setup(d) {
            return (s, h) => (t(), n("div", {
                innerHTML: s.content,
                class: o([s.styles.richText, s.styles[s.variant]])
            }, null, 10, r))
        }
    }),
    a = "_richText_69bk9_2",
    i = "_md_69bk9_3",
    l = "_sm_69bk9_7",
    m = {
        richText: a,
        md: i,
        sm: l
    },
    p = {
        styles: m
    },
    u = c(_, [
        ["__cssModules", p]
    ]);
export {
    u as R
};