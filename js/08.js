import {
    B as c
} from "./BetLimits-BsDoYv9t.js";
import {
    G as m
} from "./GameTileTemplate-DMddCv9F.js";
import {
    c as p,
    a as d,
    b as f
} from "./GameTileLabel-L-YHUiVX.js";
import {
    d as b,
    A as o,
    e as s,
    f as u,
    w as B,
    h as k,
    l as y,
    i as _,
    g as r,
    k as g,
    m as h,
    _ as v
} from "./index-CPOGT4b2.js";
import "./useFavoriteButtonSetup-BgnO8pTQ.js";
import "./StaticPicture.vue_vue_type_script_setup_true_lang-C_zOsbu-.js";
import "./PictureComponent-r7i8M6gc.js";
import "./GameTileTemplate.utils-CcIZO8uI.js";
import "./useIsClient-aQDC_Aq5.js";
const G = b({
        __name: "GameTile",
        props: {
            aspectRatio: {},
            category: {},
            id: {},
            images: {},
            jackpotId: {},
            labels: {},
            livePreviewImage: {},
            maxBet: {},
            minBet: {},
            nyxGameId: {},
            pageBlockTileType: {},
            pageUrl: {},
            provider: {},
            rank: {},
            showTitle: {
                type: Boolean
            },
            tableId: {},
            tableIsOpen: {
                type: Boolean
            },
            title: {},
            tryPageUrl: {},
            variant: {},
            showNLLabel: {
                type: Boolean
            },
            blockTitle: {},
            index: {},
            slideIndex: {},
            isDisabled: {
                type: Boolean
            },
            disableGradient: {
                type: Boolean
            }
        },
        setup(l) {
            const e = l,
                a = o(() => !(e.rank || !e.minBet)),
                i = t => p(t) && (d(t, e.provider) || f(t, e.provider, !!e.nyxGameId)),
                n = o(() => e.labels ? !!e.labels.filter(i).length : !1);
            return (t, I) => (s(), u(r(m), h(e, {
                disableGradient: !a.value
            }), {
                default: B(() => [a.value ? (s(), k("footer", {
                    key: 0,
                    class: y([t.styles.footer])
                }, [_(r(c), {
                    "min-bet": t.minBet,
                    align: n.value ? "left" : "center"
                }, null, 8, ["min-bet", "align"])], 2)) : g("", !0)]),
                _: 1
            }, 16, ["disableGradient"]))
        }
    }),
    x = "_footer_oesvh_2",
    L = {
        footer: x
    },
    T = {
        styles: L
    },
    E = v(G, [
        ["__cssModules", T]
    ]);
export {
    E as
    default
};