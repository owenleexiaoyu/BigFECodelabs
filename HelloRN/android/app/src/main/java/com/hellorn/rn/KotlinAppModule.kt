package com.hellorn.rn

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.hellorn.BuildConfig
import com.hellorn.utils.DeviceUtil

/**
 * Kotlin 实现的 [AppModule]
 */
class KotlinAppModule(reactContext: ReactApplicationContext): ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "App"
    }

    override fun getConstants(): MutableMap<String, Any>? {
        return mutableMapOf(
            "version_name" to BuildConfig.VERSION_NAME,
            "version_code" to BuildConfig.VERSION_CODE,
            "debug" to BuildConfig.DEBUG,
        )
    }

    @ReactMethod
    fun openGallery() {
        val activity = currentActivity ?: return
        DeviceUtil.openGallery(activity)
    }

    @ReactMethod
    fun getVersionName(promise: Promise) {
        val versionName = BuildConfig.VERSION_NAME
        if (versionName == null) {
            promise.reject(Throwable("获取版本号失败"))
        } else {
            promise.resolve(versionName)
        }
    }
}