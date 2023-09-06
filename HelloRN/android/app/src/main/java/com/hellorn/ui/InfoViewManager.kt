package com.hellorn.ui

import com.facebook.react.bridge.ReadableArray
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



    override fun getCommandsMap(): MutableMap<String, Int>? {
        return mutableMapOf(
            "setShape" to SET_SHAPE_CODE
        )
    }

    override fun receiveCommand(root: InfoView, commandId: String?, args: ReadableArray?) {
        val commandCode = commandId?.toInt() ?: return
        if (commandCode == SET_SHAPE_CODE) {
            if ((args?.size() ?: 0) > 0) {
                val shape = args!!.getString(0)
                root.setShape(shape)
            }
        } else {
            super.receiveCommand(root, commandId, args)
        }
    }

    companion object {
        const val SET_SHAPE_CODE = 100
    }
}