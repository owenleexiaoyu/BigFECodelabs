package com.hellorn.ui

import android.content.Context
import android.view.LayoutInflater
import android.widget.Button
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import com.bumptech.glide.Glide
import com.bumptech.glide.load.resource.bitmap.CircleCrop
import com.bumptech.glide.load.resource.bitmap.RoundedCorners
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.uimanager.events.RCTEventEmitter
import com.hellorn.R

class InfoView(context: Context): LinearLayout(context) {

    private var imgAvatar: ImageView? = null
    private var tvName: TextView? = null
    private var tvDesc: TextView? = null
    private var btnChangeShape: Button? = null

    private var shape: String = "circle" // circle, round
    private var url: String? = null

    init {
        LayoutInflater.from(context).inflate(R.layout.layout_info_view, this)
        imgAvatar = findViewById(R.id.img_avatar)
        tvName = findViewById(R.id.tv_name)
        tvDesc = findViewById(R.id.tv_desc)
        btnChangeShape = findViewById(R.id.btn_change_shape)
        btnChangeShape?.setOnClickListener {
            shape = if (shape == "circle") {
                "round"
            } else {
                "circle"
            }
            this.url?.let { url ->
                loadAvatar(url)
            }
            val params = Arguments.createMap().apply {
                putString("shape", shape)
            }
            val reactContext: ReactContext? = getContext() as? ReactContext
            reactContext?.getJSModule(RCTEventEmitter::class.java)
                ?.receiveEvent(id, "onShapeChange", params)
        }
    }

    fun setAvatar(url: String) {
        this.url = url
        loadAvatar(url)
    }

    private fun loadAvatar(url: String) {
        imgAvatar?.let {
            Glide.with(this)
                .load(url)
                .placeholder(R.drawable.icon_avatar)
                .transform(if (this.shape == "circle") CircleCrop() else RoundedCorners(40))
                .into(it)
        }
    }

    fun setName(name: String) {
        tvName?.text = name
    }

    fun setDesc(desc: String) {
        tvDesc?.text = desc
    }
}