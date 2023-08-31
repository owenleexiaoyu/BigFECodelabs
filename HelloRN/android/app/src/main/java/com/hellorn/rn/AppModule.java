package com.hellorn.rn;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.hellorn.BuildConfig;
import com.hellorn.utils.DeviceUtil;

import java.util.HashMap;
import java.util.Map;

public class AppModule extends ReactContextBaseJavaModule {

    public AppModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "App";
    }
//
//    private static final Person person = new Person("张三", 12, true);

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        Map<String, Object> map = new HashMap<>();
        map.put("version_name", BuildConfig.VERSION_NAME);
        map.put("version_code", BuildConfig.VERSION_CODE);
        map.put("debug", BuildConfig.DEBUG);
//        map.put("person", person);
        return map;
    }

    @ReactMethod
    public void openGallery() {
        if (getCurrentActivity() == null) {
            return;
        }
        DeviceUtil.openGallery(getCurrentActivity());
    }

    @ReactMethod
    public void getVersionName(Promise promise) {
        String versionName = BuildConfig.VERSION_NAME;
        if (versionName == null) {
            promise.reject(new Throwable("获取版本号失败"));
        } else {
            promise.resolve(versionName);
        }
    }
}
