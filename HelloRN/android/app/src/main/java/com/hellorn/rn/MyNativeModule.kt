package com.hellorn.rn

import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.hellorn.utils.DeviceUtil

public class MyNativeModule(): ReactContextBaseJavaModule() {
    override fun getName(): String {
        return "App"
    }

    @ReactMethod
    fun openGallery() {
        val activity = currentActivity ?: return
        DeviceUtil.openGallery(activity)
    }
}