package com.hellorn.ui

import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewGroupManager

class InfoViewGroupManager: ViewGroupManager<InfoViewGroup>() {
    override fun getName(): String = "NativeInfoViewGroup"

    override fun createViewInstance(p0: ThemedReactContext): InfoViewGroup {
        return InfoViewGroup(p0)
    }
}