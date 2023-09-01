package com.hellorn.rn

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import com.hellorn.ui.InfoViewManager

class KotlinMyReactNativePackage: ReactPackage {
    override fun createNativeModules(p0: ReactApplicationContext): MutableList<NativeModule> {
        return mutableListOf(
            KotlinAppModule(p0)
        )
    }

    override fun createViewManagers(p0: ReactApplicationContext): MutableList<ViewManager<*, *>> {
        return mutableListOf(
            InfoViewManager()
        )
    }
}