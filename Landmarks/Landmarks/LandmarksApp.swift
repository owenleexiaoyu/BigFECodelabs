//
//  LandmarksApp.swift
//  Landmarks
//
//  Created by Owen on 2025/8/7.
//

import SwiftUI

@main
struct LandmarksApp: App {
    
    @State private var modelData = ModelData()
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(modelData)
        }
    }
}
