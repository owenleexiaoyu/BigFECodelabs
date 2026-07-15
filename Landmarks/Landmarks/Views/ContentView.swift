//
//  ContentView.swift
//  Landmarks
//
//  Created by Owen on 2025/8/7.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        LandmarkList()
    }
}

#Preview {
    ContentView()
        .environment(ModelData())
}
