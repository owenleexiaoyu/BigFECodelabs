package com.hellorn.ui

import android.content.Context
import android.view.LayoutInflater
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import com.bumptech.glide.Glide
import com.hellorn.R

class InfoView(context: Context): LinearLayout(context) {

    private var imgAvatar: ImageView? = null
    private var tvName: TextView? = null
    private var tvDesc: TextView? = null

    init {
        LayoutInflater.from(context).inflate(R.layout.layout_info_view, this)
        imgAvatar = findViewById(R.id.img_avatar)
        tvName = findViewById(R.id.tv_name)
        tvDesc = findViewById(R.id.tv_desc)
    }

    fun setAvatar(url: String) {
        imgAvatar?.let {
            Glide.with(this).load(url).into(it)
        }
    }

    fun setName(name: String) {
        tvName?.text = name
    }

    fun setDesc(desc: String) {
        tvDesc?.text = desc
    }
}