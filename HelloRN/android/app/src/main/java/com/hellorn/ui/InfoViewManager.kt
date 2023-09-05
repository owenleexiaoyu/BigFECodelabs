package com.hellorn.ui

import com.facebook.react.common.MapBuilder
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class InfoViewManager: SimpleViewManager<InfoView>() {
    override fun getName(): String = "NativeInfoView"

    override fun createViewInstance(p0: ThemedReactContext): InfoView {
        return InfoView(p0)
    }

    @ReactProp(name = "avatar")
    fun setAvatar(view: InfoView, url: String) {
        view.setAvatar(url)
    }

    @ReactProp(name = "name")
    fun setName(view: InfoView, name: String) {
        view.setName(name)
    }

    @ReactProp(name = "desc")
    fun setDesc(view: InfoView, desc: String) {
        view.setDesc(desc)
    }

    override fun getExportedCustomBubblingEventTypeConstants(): MutableMap<String, Any>? {
        return MapBuilder.builder<String, Any>()
            .put(
                "onShapeChange", MapBuilder.of(
                    "phasedRegistrationNames", MapBuilder.of("bubbled", "onShapeChange")
                )
            ).build()
    }
}