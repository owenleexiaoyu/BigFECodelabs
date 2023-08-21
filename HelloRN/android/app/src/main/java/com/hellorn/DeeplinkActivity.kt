package com.hellorn

import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity


class DeeplinkActivity: AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_deeplink)

        val tvData = findViewById<TextView>(R.id.tv_data)
        val data = intent.data
        data?.let {
            val name = it.getQueryParameter("name") ?: ""
            if (name.isNotEmpty()) {
                tvData.text = "姓名：$name"
            }
        }

        val name = intent.getStringExtra("name") ?: ""
        if (name.isNotEmpty()) {
            tvData.text = "姓名：$name"
        }
    }
}