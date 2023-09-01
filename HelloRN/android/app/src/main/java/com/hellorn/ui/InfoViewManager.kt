package com.hellorn.ui

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext

class InfoViewManager: SimpleViewManager<InfoView>() {
    override fun getName(): String = "NativeInfoView"

    override fun createViewInstance(p0: ThemedReactContext): InfoView {
        return InfoView(p0)
    }
}