package com.hellorn.ui

import android.content.Context
import android.view.LayoutInflater
import android.widget.LinearLayout
import com.hellorn.R

class InfoView(context: Context): LinearLayout(context) {
    init {
        LayoutInflater.from(context).inflate(R.layout.layout_info_view, this)
    }
}