(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/data/data.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"products":[{"id":1,"image":"/images/bridal-set.jpg","text":"Traditional Bridal Set","category":"Bridal Sets","inStock":false,"material":"22K Gold","style":"Bridal","weight":"65g","quantity":1},{"id":2,"image":"/images/gold-necklace.jpg","text":"Choker Necklace","category":"Necklaces","inStock":true,"material":"21K Gold","style":"Traditional","weight":"22g","quantity":1},{"id":3,"image":"/images/gold-bangles.jpg","text":"Pair of Bangles","category":"Bangles","inStock":true,"material":"21K Gold","style":"Classic","weight":"18g","quantity":1},{"id":4,"image":"/images/gold-ring.jpg","text":"Engagement Ring","category":"Rings","inStock":true,"material":"21K Gold with Stone","style":"Elegant","weight":"5g","quantity":1},{"id":5,"image":"/images/gold-jhumkay.jpg","text":"Jhumkay Earrings","category":"Earrings","inStock":true,"material":"22K Gold","style":"Traditional","weight":"7g","quantity":1},{"id":6,"image":"/images/gold-mala.jpg","text":"Mala Set","category":"Necklaces","inStock":true,"material":"22K Gold","style":"Cultural","weight":"28g","quantity":1},{"id":7,"image":"/images/gold-kara.jpg","text":"Men’s Kara","category":"Men’s Jewelry","inStock":true,"material":"22K Gold","style":"Traditional","weight":"20g","quantity":1},{"id":8,"image":"/images/gold-chain.jpg","text":"Simple Chain","category":"Chains","inStock":true,"material":"21K Gold","style":"Minimal","weight":"12g","quantity":1},{"id":9,"image":"/images/gold-nosepin.jpg","text":"Nose Pin","category":"Nose Pins","inStock":true,"material":"21K Gold","style":"Simple","weight":"1g","quantity":1},{"id":10,"image":"/images/gold-tikka.jpg","text":"Matha Patti / Tikka","category":"Head Jewelry","inStock":true,"material":"22K Gold","style":"Bridal","weight":"8g","quantity":1},{"id":11,"image":"/images/gold-kids.jpg","text":"Kids Bangle","category":"Kids Jewelry","inStock":true,"material":"21K Gold","style":"Simple","weight":"3g","quantity":1}],"categories":[{"image":"/images/jewelry.jpg","buttonText":"Buy New Jewelry"},{"image":"/images/sell.png","buttonText":"Sell Your Gold"},{"image":"/images/repair.jpg","buttonText":"Jewelry Repair"}]});}),
"[project]/app/components/Productcard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$cartSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/cartSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$wishlistSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/wishlistSlice.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const Productcard = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(55);
    if ($[0] !== "e798cf0dd93124be8e67aa1f01831356310396f2a3cc3e3d95ce6f87976fcc30") {
        for(let $i = 0; $i < 55; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e798cf0dd93124be8e67aa1f01831356310396f2a3cc3e3d95ce6f87976fcc30";
    }
    const { id, image, text, weight, category, inStock } = t0;
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const cartItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_temp);
    const wishlistItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_temp2);
    let t1;
    if ($[1] !== cartItems || $[2] !== id) {
        let t2;
        if ($[4] !== id) {
            t2 = (item)=>item.id === id;
            $[4] = id;
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        t1 = cartItems.some(t2);
        $[1] = cartItems;
        $[2] = id;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const isInCart = t1;
    let t2;
    if ($[6] !== id || $[7] !== wishlistItems) {
        let t3;
        if ($[9] !== id) {
            t3 = (item_0)=>item_0.id === id;
            $[9] = id;
            $[10] = t3;
        } else {
            t3 = $[10];
        }
        t2 = wishlistItems.some(t3);
        $[6] = id;
        $[7] = wishlistItems;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    const isInWishlist = t2;
    let t3;
    if ($[11] !== weight) {
        t3 = typeof weight === "string" ? parseFloat(weight.replace("g", "").trim()) || 0 : Number(weight) || 0;
        $[11] = weight;
        $[12] = t3;
    } else {
        t3 = $[12];
    }
    const numericWeight = t3;
    let t4;
    if ($[13] !== category || $[14] !== dispatch || $[15] !== id || $[16] !== image || $[17] !== inStock || $[18] !== isInWishlist || $[19] !== numericWeight || $[20] !== text) {
        t4 = async ()=>{
            ;
            try {
                const authenticationResponse = await fetch("/api/check-auth", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });
                const data = await authenticationResponse.json();
                if (!data.authenticated) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Login First");
                    return;
                }
                if (isInWishlist) {
                    await fetch("/api/wishlist/remove", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            productId: id
                        }),
                        credentials: "include"
                    });
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$wishlistSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromWishlist"])(id));
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Removed from wishlist");
                } else {
                    await fetch("/api/wishlist/add", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            productId: id,
                            image,
                            text,
                            weight: numericWeight,
                            category,
                            inStock
                        }),
                        credentials: "include"
                    });
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$wishlistSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToWishlist"])({
                        id,
                        image,
                        text,
                        weight: numericWeight,
                        category,
                        inStock
                    }));
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Added to wishlist");
                }
            } catch (t5) {
                const err = t5;
                console.error(err);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Something went wrong");
            }
        };
        $[13] = category;
        $[14] = dispatch;
        $[15] = id;
        $[16] = image;
        $[17] = inStock;
        $[18] = isInWishlist;
        $[19] = numericWeight;
        $[20] = text;
        $[21] = t4;
    } else {
        t4 = $[21];
    }
    const handleToggleWishlist = t4;
    let t5;
    if ($[22] !== category || $[23] !== dispatch || $[24] !== id || $[25] !== image || $[26] !== inStock || $[27] !== isInCart || $[28] !== numericWeight || $[29] !== text) {
        t5 = async ()=>{
            ;
            try {
                const authenticationResponse_0 = await fetch("/api/check-auth", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });
                const data_0 = await authenticationResponse_0.json();
                if (!data_0.authenticated) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Login First");
                    return;
                }
                if (isInCart) {
                    await fetch("/api/cart/remove", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            productId: id
                        }),
                        credentials: "include"
                    });
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$cartSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromCart"])(id));
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Removed from cart");
                } else {
                    await fetch("/api/cart/add", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            productId: id,
                            image,
                            text,
                            weight: numericWeight,
                            quantity: 1,
                            category,
                            inStock
                        }),
                        credentials: "include"
                    });
                    dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$cartSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCart"])({
                        id,
                        image,
                        text,
                        weight: numericWeight,
                        quantity: 1,
                        category,
                        inStock
                    }));
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success("Added to cart");
                }
            } catch (t6) {
                const err_0 = t6;
                console.error(err_0);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Something went wrong");
            }
        };
        $[22] = category;
        $[23] = dispatch;
        $[24] = id;
        $[25] = image;
        $[26] = inStock;
        $[27] = isInCart;
        $[28] = numericWeight;
        $[29] = text;
        $[30] = t5;
    } else {
        t5 = $[30];
    }
    const handleToggleCart = t5;
    let t6;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            objectFit: "cover"
        };
        $[31] = t6;
    } else {
        t6 = $[31];
    }
    let t7;
    if ($[32] !== image || $[33] !== text) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-[200px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: image,
                fill: true,
                alt: text,
                style: t6
            }, void 0, false, {
                fileName: "[project]/app/components/Productcard.jsx",
                lineNumber: 238,
                columnNumber: 53
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/Productcard.jsx",
            lineNumber: 238,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = image;
        $[33] = text;
        $[34] = t7;
    } else {
        t7 = $[34];
    }
    let t8;
    if ($[35] !== text) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-gray-800 px-4 py-3 m-0",
            children: text
        }, void 0, false, {
            fileName: "[project]/app/components/Productcard.jsx",
            lineNumber: 247,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = text;
        $[36] = t8;
    } else {
        t8 = $[36];
    }
    let t9;
    if ($[37] !== numericWeight) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-lg font-bold text-gray-700",
            children: [
                numericWeight,
                "g"
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Productcard.jsx",
            lineNumber: 255,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = numericWeight;
        $[38] = t9;
    } else {
        t9 = $[38];
    }
    const t10 = `cursor-pointer ${isInWishlist ? "text-red-500" : "text-gray-600 hover:text-red-500"}`;
    let t11;
    if ($[39] !== handleToggleWishlist || $[40] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHeart"], {
            className: t10,
            onClick: handleToggleWishlist
        }, void 0, false, {
            fileName: "[project]/app/components/Productcard.jsx",
            lineNumber: 264,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = handleToggleWishlist;
        $[40] = t10;
        $[41] = t11;
    } else {
        t11 = $[41];
    }
    const t12 = `cursor-pointer ${isInCart ? "text-green-500" : "text-gray-600 hover:text-green-500"}`;
    let t13;
    if ($[42] !== handleToggleCart || $[43] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaShoppingCart"], {
            className: t12,
            onClick: handleToggleCart
        }, void 0, false, {
            fileName: "[project]/app/components/Productcard.jsx",
            lineNumber: 274,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = handleToggleCart;
        $[43] = t12;
        $[44] = t13;
    } else {
        t13 = $[44];
    }
    let t14;
    if ($[45] !== t11 || $[46] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex space-x-3",
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Productcard.jsx",
            lineNumber: 283,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t11;
        $[46] = t13;
        $[47] = t14;
    } else {
        t14 = $[47];
    }
    let t15;
    if ($[48] !== t14 || $[49] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center px-4 pt-0 pb-4 m-0",
            children: [
                t9,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Productcard.jsx",
            lineNumber: 292,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t14;
        $[49] = t9;
        $[50] = t15;
    } else {
        t15 = $[50];
    }
    let t16;
    if ($[51] !== t15 || $[52] !== t7 || $[53] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-md overflow-visible flex flex-col h-[280px]",
            children: [
                t7,
                t8,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Productcard.jsx",
            lineNumber: 301,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t15;
        $[52] = t7;
        $[53] = t8;
        $[54] = t16;
    } else {
        t16 = $[54];
    }
    return t16;
};
_s(Productcard, "mJ3FQoDdL2AHmfCfc1qkQILtxOw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Productcard;
const __TURBOPACK__default__export__ = Productcard;
function _temp(state) {
    return state.cart.items;
}
function _temp2(state_0) {
    return state_0.wishlist.items;
}
var _c;
__turbopack_context__.k.register(_c, "Productcard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/products/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$data$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/data/data.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Productcard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Productcard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ProductsPage = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(72);
    if ($[0] !== "3db6a66aa1fba2a86130c1c8d26583bf2090a633aa20346f2138489ce481f05b") {
        for(let $i = 0; $i < 72; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3db6a66aa1fba2a86130c1c8d26583bf2090a633aa20346f2138489ce481f05b";
    }
    const [isFilterModelOpen, setIsFilterModelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("default");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            category: [],
            availability: []
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let handleSort;
    let sortedProducts;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    if ($[2] !== filters || $[3] !== isFilterModelOpen || $[4] !== sortOrder) {
        const uniqueCategories = [
            ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$data$2e$json__$28$json$29$__["default"].products.map(_temp))
        ].sort();
        let t8;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = (filterType, value)=>{
                setFilters((prev)=>({
                        ...prev,
                        [filterType]: prev[filterType].includes(value) ? prev[filterType].filter((v)=>v !== value) : [
                            ...prev[filterType],
                            value
                        ]
                    }));
            };
            $[14] = t8;
        } else {
            t8 = $[14];
        }
        const handleFilterChange = t8;
        const parseWeight = _temp2;
        if ($[15] !== filters || $[16] !== sortOrder) {
            let t9;
            if ($[18] !== filters) {
                t9 = (product)=>{
                    const categoryMatch = filters.category.length === 0 || filters.category.includes(product.category);
                    const availabilityMatch = filters.availability.length === 0 || filters.availability.includes(product.inStock ? "In Stock" : "Out of Stock");
                    return categoryMatch && availabilityMatch;
                };
                $[18] = filters;
                $[19] = t9;
            } else {
                t9 = $[19];
            }
            const filteredProducts = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$data$2e$json__$28$json$29$__["default"].products.filter(t9);
            sortedProducts = [
                ...filteredProducts
            ];
            if (sortOrder === "weight-low") {
                let t10;
                if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
                    t10 = (a, b)=>parseWeight(a.weight) - parseWeight(b.weight);
                    $[20] = t10;
                } else {
                    t10 = $[20];
                }
                sortedProducts.sort(t10);
            } else {
                if (sortOrder === "weight-high") {
                    let t10;
                    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
                        t10 = (a_0, b_0)=>parseWeight(b_0.weight) - parseWeight(a_0.weight);
                        $[21] = t10;
                    } else {
                        t10 = $[21];
                    }
                    sortedProducts.sort(t10);
                } else {
                    if (sortOrder === "name") {
                        sortedProducts.sort(_temp3);
                    }
                }
            }
            $[15] = filters;
            $[16] = sortOrder;
            $[17] = sortedProducts;
        } else {
            sortedProducts = $[17];
        }
        let t9;
        if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = (order)=>setSortOrder(order);
            $[22] = t9;
        } else {
            t9 = $[22];
        }
        handleSort = t9;
        t6 = "w-full max-w-7xl mx-auto my-12 px-4 max-[774px]:my-8 max-[774px]:px-3";
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl md:text-4xl font-bold text-gray-800 mb-6 max-[774px]:text-xl",
                children: "Products"
            }, void 0, false, {
                fileName: "[project]/app/products/page.jsx",
                lineNumber: 110,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[23] = t7;
        } else {
            t7 = $[23];
        }
        t4 = "flex flex-col md:flex-row gap-6";
        let t10;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-xl font-semibold text-gray-800 mb-4",
                children: "Filter Options"
            }, void 0, false, {
                fileName: "[project]/app/products/page.jsx",
                lineNumber: 118,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[24] = t10;
        } else {
            t10 = $[24];
        }
        let t11;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-lg font-medium text-gray-700",
                children: "Category"
            }, void 0, false, {
                fileName: "[project]/app/products/page.jsx",
                lineNumber: 125,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[25] = t11;
        } else {
            t11 = $[25];
        }
        let t12;
        if ($[26] !== filters) {
            t12 = (category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    className: "block mt-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            className: "mr-2",
                            checked: filters.category.includes(category),
                            onChange: ()=>handleFilterChange("category", category)
                        }, void 0, false, {
                            fileName: "[project]/app/products/page.jsx",
                            lineNumber: 132,
                            columnNumber: 70
                        }, ("TURBOPACK compile-time value", void 0)),
                        category
                    ]
                }, category, true, {
                    fileName: "[project]/app/products/page.jsx",
                    lineNumber: 132,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0));
            $[26] = filters;
            $[27] = t12;
        } else {
            t12 = $[27];
        }
        let t13;
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "text-lg font-medium text-gray-700",
                children: "Availability"
            }, void 0, false, {
                fileName: "[project]/app/products/page.jsx",
                lineNumber: 140,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[28] = t13;
        } else {
            t13 = $[28];
        }
        let t14;
        if ($[29] !== filters) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t13,
                    [
                        "In Stock",
                        "Out of Stock"
                    ].map((avail)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "block mt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    className: "mr-2",
                                    checked: filters.availability.includes(avail),
                                    onChange: ()=>handleFilterChange("availability", avail)
                                }, void 0, false, {
                                    fileName: "[project]/app/products/page.jsx",
                                    lineNumber: 147,
                                    columnNumber: 108
                                }, ("TURBOPACK compile-time value", void 0)),
                                avail
                            ]
                        }, avail, true, {
                            fileName: "[project]/app/products/page.jsx",
                            lineNumber: 147,
                            columnNumber: 66
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/page.jsx",
                lineNumber: 147,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[29] = filters;
            $[30] = t14;
        } else {
            t14 = $[30];
        }
        const t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        t11,
                        uniqueCategories.map(t12)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/products/page.jsx",
                    lineNumber: 153,
                    columnNumber: 44
                }, ("TURBOPACK compile-time value", void 0)),
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/app/products/page.jsx",
            lineNumber: 153,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0));
        if ($[31] !== t15) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden min-[774px]:block w-full md:w-1/4 bg-white rounded-lg shadow-md p-6",
                children: [
                    t10,
                    t15
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/page.jsx",
                lineNumber: 155,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[31] = t15;
            $[32] = t5;
        } else {
            t5 = $[32];
        }
        t1 = "w-full md:w-3/4";
        let t16;
        if ($[33] !== sortedProducts.length) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-semibold text-gray-800",
                children: [
                    "Products List (",
                    sortedProducts.length,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/page.jsx",
                lineNumber: 164,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[33] = sortedProducts.length;
            $[34] = t16;
        } else {
            t16 = $[34];
        }
        let t17;
        if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-700 font-medium",
                children: "Sort By:"
            }, void 0, false, {
                fileName: "[project]/app/products/page.jsx",
                lineNumber: 172,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[35] = t17;
        } else {
            t17 = $[35];
        }
        let t18;
        if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = (e)=>handleSort(e.target.value);
            $[36] = t18;
        } else {
            t18 = $[36];
        }
        let t19;
        let t20;
        let t21;
        let t22;
        if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "default",
                children: "Newest"
            }, void 0, false, {
                fileName: "[project]/app/products/page.jsx",
                lineNumber: 189,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "weight-low",
                children: "Weight: Low to High"
            }, void 0, false, {
                fileName: "[project]/app/products/page.jsx",
                lineNumber: 190,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "weight-high",
                children: "Weight: High to Low"
            }, void 0, false, {
                fileName: "[project]/app/products/page.jsx",
                lineNumber: 191,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "name",
                children: "Name: A to Z"
            }, void 0, false, {
                fileName: "[project]/app/products/page.jsx",
                lineNumber: 192,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[37] = t19;
            $[38] = t20;
            $[39] = t21;
            $[40] = t22;
        } else {
            t19 = $[37];
            t20 = $[38];
            t21 = $[39];
            t22 = $[40];
        }
        let t23;
        if ($[41] !== sortOrder) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden min-[774px]:flex items-center gap-3",
                children: [
                    t17,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: sortOrder,
                        onChange: t18,
                        className: "border border-gray-300 rounded-md px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a91f64]",
                        children: [
                            t19,
                            t20,
                            t21,
                            t22
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/products/page.jsx",
                        lineNumber: 205,
                        columnNumber: 78
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/page.jsx",
                lineNumber: 205,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[41] = sortOrder;
            $[42] = t23;
        } else {
            t23 = $[42];
        }
        if ($[43] !== t16 || $[44] !== t23) {
            t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    t16,
                    t23
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/page.jsx",
                lineNumber: 212,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[43] = t16;
            $[44] = t23;
            $[45] = t2;
        } else {
            t2 = $[45];
        }
        t3 = isFilterModelOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-gray-900 bg-opacity-30 z-20 flex justify-center items-center p-4 min-[774px]:hidden",
            onClick: ()=>setIsFilterModelOpen(false),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto shadow-lg z-30",
                onClick: _temp4,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold text-gray-800",
                                children: "Filters"
                            }, void 0, false, {
                                fileName: "[project]/app/products/page.jsx",
                                lineNumber: 219,
                                columnNumber: 367
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-gray-700 hover:text-[#a91f64] text-lg",
                                onClick: ()=>setIsFilterModelOpen(false),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                                    fileName: "[project]/app/products/page.jsx",
                                    lineNumber: 219,
                                    columnNumber: 538
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/products/page.jsx",
                                lineNumber: 219,
                                columnNumber: 431
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/products/page.jsx",
                        lineNumber: 219,
                        columnNumber: 311
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-base font-medium text-gray-700",
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/page.jsx",
                                        lineNumber: 219,
                                        columnNumber: 596
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    uniqueCategories.map((category_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center mt-2 text-base",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    className: "mr-2 h-4 w-4",
                                                    checked: filters.category.includes(category_0),
                                                    onChange: ()=>handleFilterChange("category", category_0)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/page.jsx",
                                                    lineNumber: 219,
                                                    columnNumber: 766
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                category_0
                                            ]
                                        }, category_0, true, {
                                            fileName: "[project]/app/products/page.jsx",
                                            lineNumber: 219,
                                            columnNumber: 697
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/products/page.jsx",
                                lineNumber: 219,
                                columnNumber: 591
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-base font-medium text-gray-700",
                                        children: "Availability"
                                    }, void 0, false, {
                                        fileName: "[project]/app/products/page.jsx",
                                        lineNumber: 219,
                                        columnNumber: 957
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    [
                                        "In Stock",
                                        "Out of Stock"
                                    ].map((avail_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "flex items-center mt-2 text-base",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    className: "mr-2 h-4 w-4",
                                                    checked: filters.availability.includes(avail_0),
                                                    onChange: ()=>handleFilterChange("availability", avail_0)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/products/page.jsx",
                                                    lineNumber: 219,
                                                    columnNumber: 1137
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                avail_0
                                            ]
                                        }, avail_0, true, {
                                            fileName: "[project]/app/products/page.jsx",
                                            lineNumber: 219,
                                            columnNumber: 1071
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/products/page.jsx",
                                lineNumber: 219,
                                columnNumber: 952
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "mt-6 w-full bg-[#a91f64] text-white px-4 py-2 rounded-md text-base font-medium",
                                onClick: ()=>setIsFilterModelOpen(false),
                                children: "Apply Filter"
                            }, void 0, false, {
                                fileName: "[project]/app/products/page.jsx",
                                lineNumber: 219,
                                columnNumber: 1322
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/products/page.jsx",
                        lineNumber: 219,
                        columnNumber: 564
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/page.jsx",
                lineNumber: 219,
                columnNumber: 193
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/products/page.jsx",
            lineNumber: 219,
            columnNumber: 31
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = filters;
        $[3] = isFilterModelOpen;
        $[4] = sortOrder;
        $[5] = handleSort;
        $[6] = sortedProducts;
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
        $[13] = t7;
    } else {
        handleSort = $[5];
        sortedProducts = $[6];
        t1 = $[7];
        t2 = $[8];
        t3 = $[9];
        t4 = $[10];
        t5 = $[11];
        t6 = $[12];
        t7 = $[13];
    }
    let t8;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>setIsFilterModelOpen(true),
            className: "bg-[#a91f64] text-white px-4 py-2 rounded-md text-sm font-medium flex-1",
            children: "Filter"
        }, void 0, false, {
            fileName: "[project]/app/products/page.jsx",
            lineNumber: 245,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[46] = t8;
    } else {
        t8 = $[46];
    }
    let t9;
    if ($[47] !== handleSort) {
        t9 = (e_1)=>handleSort(e_1.target.value);
        $[47] = handleSort;
        $[48] = t9;
    } else {
        t9 = $[48];
    }
    let t10;
    let t11;
    let t12;
    let t13;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "default",
            children: "Newest"
        }, void 0, false, {
            fileName: "[project]/app/products/page.jsx",
            lineNumber: 263,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "weight-low",
            children: "Weight: Low to High"
        }, void 0, false, {
            fileName: "[project]/app/products/page.jsx",
            lineNumber: 264,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "weight-high",
            children: "Weight: High to Low"
        }, void 0, false, {
            fileName: "[project]/app/products/page.jsx",
            lineNumber: 265,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "name",
            children: "Name: A to Z"
        }, void 0, false, {
            fileName: "[project]/app/products/page.jsx",
            lineNumber: 266,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t10;
        $[50] = t11;
        $[51] = t12;
        $[52] = t13;
    } else {
        t10 = $[49];
        t11 = $[50];
        t12 = $[51];
        t13 = $[52];
    }
    let t14;
    if ($[53] !== sortOrder || $[54] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-[774px]:hidden sticky top-8 bg-transparent z-10 p-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2",
                children: [
                    t8,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: sortOrder,
                        onChange: t9,
                        className: "border border-gray-300 rounded-md px-2 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a91f64] flex-1",
                        children: [
                            t10,
                            t11,
                            t12,
                            t13
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/products/page.jsx",
                        lineNumber: 279,
                        columnNumber: 145
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/products/page.jsx",
                lineNumber: 279,
                columnNumber: 84
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/products/page.jsx",
            lineNumber: 279,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = sortOrder;
        $[54] = t9;
        $[55] = t14;
    } else {
        t14 = $[55];
    }
    let t15;
    if ($[56] !== sortedProducts) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-6 min-[774px]:grid-cols-2 md:grid-cols-3",
            children: sortedProducts.map(_temp5)
        }, void 0, false, {
            fileName: "[project]/app/products/page.jsx",
            lineNumber: 288,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = sortedProducts;
        $[57] = t15;
    } else {
        t15 = $[57];
    }
    let t16;
    if ($[58] !== t1 || $[59] !== t14 || $[60] !== t15 || $[61] !== t2 || $[62] !== t3) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t3,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/app/products/page.jsx",
            lineNumber: 296,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = t1;
        $[59] = t14;
        $[60] = t15;
        $[61] = t2;
        $[62] = t3;
        $[63] = t16;
    } else {
        t16 = $[63];
    }
    let t17;
    if ($[64] !== t16 || $[65] !== t4 || $[66] !== t5) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t5,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/app/products/page.jsx",
            lineNumber: 308,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[64] = t16;
        $[65] = t4;
        $[66] = t5;
        $[67] = t17;
    } else {
        t17 = $[67];
    }
    let t18;
    if ($[68] !== t17 || $[69] !== t6 || $[70] !== t7) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/app/products/page.jsx",
            lineNumber: 318,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[68] = t17;
        $[69] = t6;
        $[70] = t7;
        $[71] = t18;
    } else {
        t18 = $[71];
    }
    return t18;
};
_s(ProductsPage, "WfqwgvVoFS7Qs4HcX6oIwfAKZmA=");
_c = ProductsPage;
const __TURBOPACK__default__export__ = ProductsPage;
function _temp(p) {
    return p.category;
}
function _temp2(weight) {
    return parseFloat(weight.replace(/[^\d.]/g, "")) || 0;
}
function _temp3(a_1, b_1) {
    return a_1.text.localeCompare(b_1.text);
}
function _temp4(e_0) {
    return e_0.stopPropagation();
}
function _temp5(product_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Productcard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: product_0.id,
        image: product_0.image,
        text: product_0.text,
        weight: product_0.weight,
        category: product_0.category,
        inStock: product_0.inStock
    }, product_0.id, false, {
        fileName: "[project]/app/products/page.jsx",
        lineNumber: 342,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ProductsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d75f2080._.js.map