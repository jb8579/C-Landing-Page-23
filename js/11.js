const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/index-DY6zd-pf.js", "assets/index-CPOGT4b2.js", "assets/index-DSHaY1gc.css", "assets/GridControls-DsUKMXQL.js", "assets/GridControls-0pl2RMOF.css", "assets/bingoApi-eJHSOU_p.js", "assets/useIsomorphicViewData-dEXAvQ6M.js", "assets/useGridSetup-BCsV9-gz.js", "assets/useIsClient-aQDC_Aq5.js", "assets/useIsReadyHelper-C835y3vs.js", "assets/BaseLayout-D-ZuHZ1x.js", "assets/PictureComponent-r7i8M6gc.js", "assets/PictureComponent-Cp0Rs6kz.css", "assets/BaseLayout-DzWzVvoG.css", "assets/GamesBlock.css_vue_type_style_index_0_src_true_lang.module-DKOg2fTf.js", "assets/GamesBlock.css_vue_type_style_index_0_src_true_lang-CTvc8ZAR.css", "assets/index-CXlY9_q2.js", "assets/BonusExceptionBlock-D3fmrvjq.js", "assets/RichTextComponent-Bwo4lVBx.js", "assets/RichTextComponent-aSR_jKLq.css", "assets/BonusExceptionBlock-Y3DqUnmu.css", "assets/index-C4Zlzq8R.js", "assets/TwentyFourLabel-BI_qnuj3.js", "assets/TwentyFourLabel-SUdYTSHD.css", "assets/StaticPicture.vue_vue_type_script_setup_true_lang-C_zOsbu-.js", "assets/MutedVideo.vue_vue_type_script_setup_true_lang-BRMfdalv.js", "assets/index-CDdX8kZZ.css", "assets/index-Bo7xX-ld.js", "assets/index-BuEeYDkh.css", "assets/index--2vmGIPO.js", "assets/GamesBlock-Ckn0OopJ.js", "assets/useUrlPrefixer-BUgJkrpc.js", "assets/index-B-zEEZF6.js", "assets/index-DOJ5UCJp.css", "assets/index-CebRV5iQ.js", "assets/index-VCdAQ8GX.css", "assets/index-azIdwFWe.js", "assets/gameProviderApi-ClKtOIFL.js", "assets/index-DUIfzH1l.css", "assets/index-JipAO6y_.js", "assets/index-iWKqcNn5.js", "assets/JackpotCounters-DXRF7kiU.js", "assets/useTimeLeft-DGDUgqwW.js", "assets/getVisibleJackpotValue-C3qDs2oG.js", "assets/useIdsSubscription-C9EQAEyg.js", "assets/formatTimeInterval-ul0_vMlm.js", "assets/formatAmount-D013uid5.js", "assets/JackpotCounters-BeWsYhj3.css", "assets/index-GZc0fxwj.css", "assets/index-KESQeNRd.js", "assets/index-CoFLprNa.js", "assets/index-gV3L282U.js", "assets/index-BTvShj5H.css", "assets/index-m823pZI7.js", "assets/index-Byhjz1Nv.js", "assets/PreFooterBlock-CrBexb8p.js", "assets/CollapsibleItemControlled-ghxWKWrA.js", "assets/CollapsibleItemControlled-D4PxTj-M.css", "assets/PreFooterBlock-D2jxAtz-.css", "assets/index-ahJPdSfi.js", "assets/index-06cMrlm6.css", "assets/index-D7XZo3hS.js", "assets/index-CvTpvty-.css", "assets/index-D2vR885k.js", "assets/index-Cu_QvDFz.js", "assets/TournamentsBlock-CcuCWwjU.js", "assets/TournamentsBlock-B4WNmfwn.css", "assets/index-BZR0aPDd.js", "assets/SkeletonItem-CPV39xlz.js", "assets/SkeletonItem-DaGDg__-.css", "assets/GamesBlockSkeleton-BCIIJ-6-.js", "assets/GamesBlockSkeleton-Bm34CoMM.css", "assets/useSelfUpdatingRefWhenActivated-dhrNk-ou.js", "assets/index-DxebURG7.css"]))) => i.map(i => d[i]);
import {
	s as H,
	v as C,
	x as E,
	d as B,
	e as l,
	h as T,
	i as u,
	w as m,
	y as g,
	l as d,
	g as s,
	_ as v,
	a as R,
	f as _,
	k as f,
	C as b,
	F as M,
	z as G,
	A as P,
	B as A,
	D as V,
	n as q,
	m as I,
	P as o,
	E as $,
	H as U,
	I as O,
	J as K,
	K as Q,
	M as F,
	O as N,
	Q as X,
	R as c,
	u as J,
	S as D,
	T as L,
	U as Y
} from "./index-CPOGT4b2.js";
import {
	S as n
} from "./SkeletonItem-CPV39xlz.js";
import {
	G as h
} from "./GamesBlockSkeleton-BCIIJ-6-.js";
import {
	f as j,
	u as Z
} from "./useIsomorphicViewData-dEXAvQ6M.js";
import {
	u as ee,
	B as se
} from "./BaseLayout-D-ZuHZ1x.js";
import {
	u as oe
} from "./useSelfUpdatingRefWhenActivated-dhrNk-ou.js";
const te = async (a, e, t) => H(`${E}/page?path=${a}${e?"&mobile=true":""}${t?"&preview="+t:""}`, {
	headers: {
		...C
	},
	credentials: "include"
}), ae = async () => j(`${E}/page/skeletons`, {
	headers: C
}), gs = async a => j(`${E}/page/winnersblock/slide`, {
	method: "POST",
	headers: C,
	body: JSON.stringify(a)
}), le = B({
	__name: "CarouselBlockSkeleton",
	setup(a) {
		return (e, t) => (l(), T("div", {
			class: d(e.styles.container)
		}, [u(s(n), {
			theme: "dark",
			width: "100%",
			height: "100%"
		}, {
			default: m(() => [g("div", {
				class: d(e.styles.skeleton)
			}, [g("div", {
				class: d(e.styles.column)
			}, [u(s(n), {
				theme: "light",
				radius: "var(--radius-sm)",
				width: "100%",
				height: "30px"
			}), u(s(n), {
				theme: "light",
				radius: "var(--radius-sm)",
				width: "80%",
				height: "20px"
			})], 2)], 2)]),
			_: 1
		})], 2))
	}
}), ne = "_container_1vzj5_2", re = "_skeleton_1vzj5_11", ce = "_column_1vzj5_18", ie = {
	container: ne,
	skeleton: re,
	column: ce
}, ue = {
	styles: ie
}, de = v(le, [
	["__cssModules", ue]
]), _e = B({
	__name: "ContentCardSkeleton",
	setup(a) {
		const {
			isMobile: e
		} = R();
		return (t, r) => (l(), _(s(b), {
			type: "boxed-xl",
			class: d(t.styles.wrapper)
		}, {
			default: m(() => [u(s(n), {
				height: "320px",
				width: "100%",
				radius: "var(--radius-lg)"
			}), s(e) ? f("", !0) : (l(), _(s(n), {
				key: 0,
				height: "320px",
				width: "100%",
				radius: "var(--radius-lg)"
			})), s(e) ? f("", !0) : (l(), _(s(n), {
				key: 1,
				height: "320px",
				width: "100%",
				radius: "var(--radius-lg)"
			}))]),
			_: 1
		}, 8, ["class"]))
	}
}), pe = "_wrapper_15wqo_2", ke = {
	wrapper: pe
}, me = {
	styles: ke
}, Be = v(_e, [
	["__cssModules", me]
]), he = B({
	__name: "FullWidthContentBlockSkeleton",
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
	setup(a) {
		return (e, t) => e.items ? (l(), _(s(b), {
			key: 0,
			type: "boxed-xl"
		}, {
			default: m(() => [(l(!0), T(M, null, G(e.items, (r, i) => (l(), _(s(n), {
				key: i,
				height: "100%",
				width: "100%",
				radius: "var(--radius-lg)",
				class: d(e.styles.block)
			}, null, 8, ["class"]))), 128))]),
			_: 1
		})) : f("", !0)
	}
}), ye = "_block_1iy0j_2", ve = {
	block: ye
}, ge = {
	styles: ve
}, we = v(he, [
	["__cssModules", ge]
]), fe = B({
	__name: "JackpotCountersBlockSkeleton",
	setup(a) {
		return (e, t) => (l(), _(s(b), {
			type: "boxed-xl",
			class: d(e.styles.container)
		}, {
			default: m(() => [u(s(n), {
				width: "100%",
				radius: "var(--radius-lg)",
				class: d(e.styles.block)
			}, null, 8, ["class"])]),
			_: 1
		}, 8, ["class"]))
	}
}), be = "_container_p0m78_2", Te = "_block_p0m78_9", xe = {
	container: be,
	block: Te
}, Pe = {
	styles: xe
}, Se = v(fe, [
	["__cssModules", Pe]
]), $e = B({
	__name: "MidpageBannerBlockSkeleton",
	setup(a) {
		return (e, t) => (l(), _(s(b), {
			type: "boxed-xl",
			class: d(e.styles.wrapper)
		}, {
			default: m(() => [u(s(n), {
				height: "320px",
				width: "100%",
				radius: "var(--radius-lg)"
			})]),
			_: 1
		}, 8, ["class"]))
	}
}), Re = "_wrapper_1sqo8_2", Ce = {
	wrapper: Re
}, Ee = {
	styles: Ce
}, Me = v($e, [
	["__cssModules", Ee]
]), Ge = B({
	__name: "PreFooterBlockSkeleton",
	setup(a) {
		const {
			isMobile: e
		} = R();
		return (t, r) => (l(), _(s(b), {
			type: "boxed-xl",
			class: d(t.styles.wrapper)
		}, {
			default: m(() => [u(s(n), {
				height: "100%",
				width: "100%",
				radius: "var(--radius-lg)"
			}), s(e) ? f("", !0) : (l(), _(s(n), {
				key: 0,
				height: "100%",
				width: "100%",
				radius: "var(--radius-lg)"
			}))]),
			_: 1
		}, 8, ["class"]))
	}
}), Ie = "_wrapper_16zn8_2", Ae = {
	wrapper: Ie
}, Ve = {
	styles: Ae
}, De = v(Ge, [
	["__cssModules", Ve]
]), Le = B({
	__name: "RichHeaderBlockSkeleton",
	setup(a) {
		return (e, t) => (l(), T("div", {
			class: d(e.styles.wrapper)
		}, [u(s(n), {
			theme: "dark",
			width: "100%",
			height: "100%"
		}, {
			default: m(() => [u(s(b), {
				type: "boxed-xl",
				class: d(e.styles.content)
			}, {
				default: m(() => [g("div", {
					class: d(e.styles.skeleton)
				}, [g("div", {
					class: d(e.styles.column)
				}, [u(s(n), {
					theme: "light",
					radius: "var(--radius-sm)",
					width: "100%",
					height: "40px"
				}), g("div", {
					class: d(e.styles.buttons)
				}, [u(s(n), {
					theme: "light",
					radius: "var(--radius-sm)",
					width: "110px",
					height: "40px"
				}), u(s(n), {
					theme: "light",
					radius: "var(--radius-sm)",
					width: "110px",
					height: "40px"
				})], 2)], 2)], 2)]),
				_: 1
			}, 8, ["class"])]),
			_: 1
		})], 2))
	}
}), Oe = "_wrapper_7cnjy_2", Fe = "_content_7cnjy_12", Je = "_skeleton_7cnjy_17", je = "_column_7cnjy_27", ze = "_buttons_7cnjy_45", We = {
	wrapper: Oe,
	content: Fe,
	skeleton: Je,
	column: je,
	buttons: ze
}, He = {
	styles: We
}, qe = v(Le, [
	["__cssModules", He]
]), Ue = B({
	__name: "SearchBlockSkeleton",
	setup(a) {
		const {
			isMobile: e
		} = R();
		return (t, r) => s(e) ? (l(), _(s(n), {
			key: 0,
			class: d(t.styles.wrapper),
			theme: "light",
			width: "100%",
			height: "100%"
		}, {
			default: m(() => [u(s(n), {
				theme: "dark",
				radius: "var(--radius-sm)",
				width: "100%",
				height: "48px"
			})]),
			_: 1
		}, 8, ["class"])) : f("", !0)
	}
}), Ke = "_wrapper_muhta_2", Qe = {
	wrapper: Ke
}, Ne = {
	styles: Qe
}, Xe = v(Ue, [
	["__cssModules", Ne]
]), Ye = B({
	__name: "TournamentsBlockSkeleton",
	props: {
		desktopSlide: {},
		mobileSlide: {},
		pageBlockType: {},
		showTitles: {
			type: Boolean
		},
		useGreyBackground: {
			type: Boolean
		}
	},
	setup(a) {
		const e = a,
			t = P(() => ({
				...e,
				desktopSlide: {
					...e.desktopSlide,
					tiles: Array.from(Array(6)).map(() => ({
						aspectRatio: A.ThreeByTwo,
						tileType: V.TournamentTile
					}))
				},
				mobileSlide: {
					...e.mobileSlide,
					tiles: Array.from(Array(3)).map(() => ({
						aspectRatio: A.ThreeByTwo,
						tileType: V.TournamentTile
					}))
				}
			}));
		return (r, i) => t.value ? (l(), _(h, q(I({
			key: 0
		}, t.value)), null, 16)) : (l(), T("div", {
			key: 1,
			class: d(r.styles.wrapper)
		}, [u(s(b), {
			type: "boxed-xl"
		}, {
			default: m(() => [u(s(n), {
				height: "30px",
				width: "33%",
				radius: "var(--radius-md)"
			}), g("div", {
				class: d(r.styles.content)
			}, [u(s(n), {
				width: "50px",
				height: "50px",
				radius: "var(--radius-md)"
			}), u(s(n), {
				width: "30px",
				height: "30px",
				radius: "var(--radius-md)"
			}), u(s(n), {
				width: "420px",
				height: "20px",
				radius: "var(--radius-md)"
			})], 2)]),
			_: 1
		})], 2))
	}
}), Ze = "_wrapper_zo7xh_2", es = "_content_zo7xh_5", ss = {
	wrapper: Ze,
	content: es
}, os = {
	styles: ss
}, ts = v(Ye, [
	["__cssModules", os]
]), z = [o.CarouselBlock, o.RichHeaderBlock, o.SearchBlock, o.TournamentsBlock, o.BingoRoomsBlock, o.GamesBlock, o.LastPlayedGamesBlock, o.JackpotGamesBlock, o.FilterableGamesBlock, o.FavoriteGamesBlock, o.TopGamesBlock, o.MidpageBannerBlock, o.ContentCardsBlock, o.PreFooterBlock, o.FullWidthContentBlock, o.GameProvidersBlock, o.JackpotCountersBlock, o.WinnersBlock], as = {
	CarouselBlock: de,
	RichHeaderBlock: qe,
	SearchBlock: Xe,
	TournamentsBlock: ts,
	BingoRoomsBlock: h,
	GamesBlock: h,
	LastPlayedGamesBlock: h,
	JackpotGamesBlock: h,
	FilterableGamesBlock: h,
	FavoriteGamesBlock: h,
	TopGamesBlock: h,
	MidpageBannerBlock: Me,
	ContentCardsBlock: Be,
	PreFooterBlock: De,
	FullWidthContentBlock: we,
	GameProvidersBlock: h,
	JackpotCountersBlock: Se,
	WinnersBlock: h
}, ls = (a, e) => {
	const t = $(!1),
		r = new Set,
		i = P(() => e.blocks.filter(y => y.pageBlockType && z.includes(y.pageBlockType)).length),
		p = async y => {
			r.add(y), r.size >= i.value && !t.value && (await K(), t.value = !0, a("ready"))
		};
	return U(() => {
		r.clear(), t.value = !1
	}), O(i, () => {
		i.value === 0 && a("ready")
	}, {
		immediate: !0
	}), {
		onBlockReady: p
	}
}, ns = B({
	__name: "BlockMapper",
	props: {
		blocks: {}
	},
	emits: ["ready"],
	setup(a, {
		emit: e
	}) {
		const t = a,
			r = e,
			{
				onBlockReady: i
			} = ls(r, t),
			p = Q("enableCasinoVwoIds"),
			y = w => w && rs.includes(w) ? N(() => X(Object.assign({
				"../../blocks/BingoRoomsBlock/index.ts": () => c(() => import("./index-DY6zd-pf.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])),
				"../../blocks/BonusExceptionBlock/index.ts": () => c(() => import("./index-CXlY9_q2.js"), __vite__mapDeps([16, 17, 1, 2, 10, 11, 12, 13, 18, 19, 20])),
				"../../blocks/CarouselBlock/index.ts": () => c(() => import("./index-C4Zlzq8R.js"), __vite__mapDeps([21, 1, 2, 22, 23, 10, 11, 12, 13, 24, 25, 9, 26])),
				"../../blocks/ContentCardsBlock/index.ts": () => c(() => import("./index-Bo7xX-ld.js"), __vite__mapDeps([27, 1, 2, 24, 11, 12, 28])),
				"../../blocks/FavoriteGamesBlock/index.ts": () => c(() => import("./index--2vmGIPO.js"), __vite__mapDeps([29, 30, 1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 9, 31, 14, 15])),
				"../../blocks/FilterableGamesBlock/index.ts": () => c(() => import("./index-B-zEEZF6.js"), __vite__mapDeps([32, 30, 1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 9, 31, 14, 15, 33])),
				"../../blocks/FullWidthContentBlock/index.ts": () => c(() => import("./index-CebRV5iQ.js"), __vite__mapDeps([34, 1, 2, 24, 11, 12, 18, 19, 35])),
				"../../blocks/GameProvidersBlock/index.ts": () => c(() => import("./index-azIdwFWe.js"), __vite__mapDeps([36, 1, 2, 3, 4, 37, 6, 7, 8, 38])),
				"../../blocks/GamesBlock/index.ts": () => c(() => import("./index-JipAO6y_.js"), __vite__mapDeps([39, 30, 1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 9, 31, 14, 15])),
				"../../blocks/JackpotCountersBlock/index.ts": () => c(() => import("./index-iWKqcNn5.js"), __vite__mapDeps([40, 1, 2, 41, 42, 43, 44, 45, 46, 47, 48])),
				"../../blocks/JackpotGamesBlock/index.ts": () => c(() => import("./index-KESQeNRd.js"), __vite__mapDeps([49, 30, 1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 9, 31, 14, 15])),
				"../../blocks/LastPlayedGamesBlock/index.ts": () => c(() => import("./index-CoFLprNa.js"), __vite__mapDeps([50, 30, 1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 9, 31, 14, 15])),
				"../../blocks/MidpageBannerBlock/index.ts": () => c(() => import("./index-gV3L282U.js"), __vite__mapDeps([51, 1, 2, 22, 23, 10, 11, 12, 13, 24, 52])),
				"../../blocks/PersonalizedGamesBlock/index.ts": () => c(() => import("./index-m823pZI7.js"), __vite__mapDeps([53, 30, 1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 9, 31, 14, 15])),
				"../../blocks/PreFooterBlock/index.ts": () => c(() => import("./index-Byhjz1Nv.js"), __vite__mapDeps([54, 55, 1, 2, 18, 19, 56, 57, 58])),
				"../../blocks/RichHeaderBlock/index.ts": () => c(() => import("./index-ahJPdSfi.js"), __vite__mapDeps([59, 1, 2, 22, 23, 25, 60])),
				"../../blocks/SearchBlock/index.ts": () => c(() => import("./index-D7XZo3hS.js"), __vite__mapDeps([61, 1, 2, 62])),
				"../../blocks/TopGamesBlock/index.ts": () => c(() => import("./index-D2vR885k.js"), __vite__mapDeps([63, 30, 1, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 9, 31, 14, 15])),
				"../../blocks/TournamentsBlock/index.ts": () => c(() => import("./index-Cu_QvDFz.js"), __vite__mapDeps([64, 65, 1, 2, 6, 7, 8, 66])),
				"../../blocks/WinnersBlock/index.ts": () => c(() => import("./index-BZR0aPDd.js"), __vite__mapDeps([67, 1, 2, 3, 4, 7, 8, 68, 69, 70, 71, 6, 10, 11, 12, 13, 72, 73]))
			}), `../../blocks/${w}/index.ts`, 5)) : null;
		return (w, S) => (l(!0), T(M, null, G(w.blocks, (k, x) => (l(), _(F(y(k.pageBlockType)), I({
			key: `${k.pageBlockType}-${x}`,
			ref_for: !0
		}, k, {
			onReady: ps => s(i)(x),
			"data-vwo-id": s(p) ? k.vwoId : void 0
		}), null, 16, ["onReady", "data-vwo-id"]))), 128))
	}
}), rs = [o.CarouselBlock, o.GamesBlock, o.LastPlayedGamesBlock, o.JackpotGamesBlock, o.FilterableGamesBlock, o.JackpotCountersBlock, o.MidpageBannerBlock, o.FavoriteGamesBlock, o.GameProvidersBlock, o.PreFooterBlock, o.TopGamesBlock, o.RichHeaderBlock, o.TournamentsBlock, o.WinnersBlock, o.BonusExceptionBlock, o.SearchBlock, o.ContentCardsBlock, o.BingoRoomsBlock, o.FullWidthContentBlock, o.PersonalizedGamesBlock], cs = B({
	__name: "SkeletonMapper",
	props: {
		blocks: {}
	},
	setup(a) {
		const e = t => t && z.includes(t) ? as[t] : null;
		return (t, r) => (l(!0), T(M, null, G(t.blocks, (i, p) => (l(), _(F(e(i.pageBlockType)), I({
			key: `${i.pageBlockType}-${p}`,
			ref_for: !0
		}, i), null, 16))), 128))
	}
}), is = ae(), W = $([]);
is.then(a => W.value = a ?? []);
const us = () => {
	const a = J();
	return {
		activePageSkeleton: P(() => W.value.find(t => t.path === a.path))
	}
};

function ds() {
	const a = J(),
		{
			isMobile: e
		} = R(),
		t = oe(() => {
			var p;
			return ((p = a == null ? void 0 : a.query) == null ? void 0 : p.preview) && encodeURIComponent(a.query.preview)
		}, {
			skipOneTick: !0
		}),
		{
			data: r,
			error: i
		} = Z({
			fetchData: async () => te(a.path, !!e.value, t.value)
		});
	return ee(() => {
		var p;
		return ((p = r.value) == null ? void 0 : p.metaData) ?? null
	}), {
		page: r,
		error: i
	}
}
const _s = B({
		__name: "ContentView",
		setup(a) {
			const {
				page: e,
				error: t
			} = ds(), r = $(!!e.value), i = $(!!e.value), p = P(() => r.value && i.value), {
				activePageSkeleton: y
			} = us();
			O(e, () => {
				r.value = !!e.value, i.value = !!e.value
			});
			const w = P(() => {
				var S;
				return (S = e.value) == null ? void 0 : S.pageBlocks.some(k => k.pageBlockType === o.PreFooterBlock)
			});
			return (S, k) => (l(), _(s(se), {
				"has-bottom-spacing": !w.value,
				error: s(t)
			}, {
				default: m(() => [D(g("div", null, [s(y) ? (l(), _(s(cs), {
					key: 0,
					blocks: s(y).blocks
				}, null, 8, ["blocks"])) : f("", !0)], 512), [
					[L, !p.value]
				]), D(g("div", null, [(l(), _(Y, {
					onPending: k[1] || (k[1] = x => i.value = !1),
					onResolve: k[2] || (k[2] = x => i.value = !0)
				}, {
					default: m(() => [s(e) ? (l(), _(s(ns), {
						onReady: k[0] || (k[0] = x => r.value = !0),
						blocks: s(e).pageBlocks,
						key: s(e).id
					}, null, 8, ["blocks"])) : f("", !0)]),
					_: 1
				}))], 512), [
					[L, p.value]
				])]),
				_: 1
			}, 8, ["has-bottom-spacing", "error"]))
		}
	}),
	ws = Object.freeze(Object.defineProperty({
		__proto__: null,
		default: _s
	}, Symbol.toStringTag, {
		value: "Module"
	}));
export {
	ws as C, gs as f
};