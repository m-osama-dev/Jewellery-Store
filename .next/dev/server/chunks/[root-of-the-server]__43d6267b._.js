module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/lib/dbConnection.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const MONGODB_URI = process.env.MONGODB_URI;
const connectMongoDB = async ()=>{
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, {
            dbName: "muhammadosama_db"
        });
        console.log("✅ Connected to MongoDB.");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
    }
};
const __TURBOPACK__default__export__ = connectMongoDB;
}),
"[project]/app/models/userModel.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/node_modules/mongoose)");
;
const userSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].models.User || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongoose$29$__["default"].model("User", userSchema);
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[project]/app/api/login/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dbConnection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/dbConnection.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$models$2f$userModel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/models/userModel.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-route] (ecmascript)");
;
;
;
;
;
const JWT_SECRET = process.env.JWT_SECRET;
async function POST(req) {
    try {
        const { email, password } = await req.json();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dbConnection$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        // check if user exists
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$models$2f$userModel$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            email
        });
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "User not found"
            }, {
                status: 404
            });
        }
        // compare password
        const isMatch = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, user.password);
        if (!isMatch) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Invalid credentials"
            }, {
                status: 401
            });
        }
        // generate JWT
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].sign({
            id: user._id,
            email: user.email
        }, JWT_SECRET, {
            expiresIn: "7d"
        });
        // set cookie
        const response = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Login successful",
            user: {
                name: user.name,
                email: user.email
            }
        });
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: ("TURBOPACK compile-time value", "development") === "production",
            sameSite: "strict",
            path: "/",
            maxAge: 7 * 24 * 60 * 60
        });
        return response;
    } catch (error) {
        console.error("Login error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__43d6267b._.js.map