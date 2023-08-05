package com.hellorn

import com.facebook.react.bridge.ReactContextBaseJavaModule

class MyNativeModule: ReactContextBaseJavaModule() {
    override fun getName(): String {
        return "A"
    }
}