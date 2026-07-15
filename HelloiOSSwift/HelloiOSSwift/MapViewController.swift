//
//  MapViewController.swift
//  HelloiOSSwift
//
//  Created by Owen on 2025/8/24.
//

import UIKit
import MapKit

class MapViewController: UIViewController, CLLocationManagerDelegate {
    
    private var mapView: MKMapView!
    
    private var locationManager = CLLocationManager()
    
    override func loadView() {
        // Create a map view
        mapView = MKMapView()
        mapView.pointOfInterestFilter = .excludingAll
        // 显示用户位置（蓝色圆点）
        mapView.showsUserLocation = true
        // Set it as the view of this view controller
        self.view = mapView
        
        let standardString = NSLocalizedString("segmented_label_standard", comment: "Standard map view")
        let hybridString = NSLocalizedString("segmented_label_hybrid", comment: "Hybrid map view")
        let satelliteString = NSLocalizedString("segmented_label_satellite", comment: "Satellite map view")
        let segmentedControl = UISegmentedControl(items: [standardString, hybridString, satelliteString])
        segmentedControl.backgroundColor = UIColor.systemBackground
        segmentedControl.selectedSegmentIndex = 0
        segmentedControl.translatesAutoresizingMaskIntoConstraints = false
        
        segmentedControl.addTarget(self, action: #selector(mapTypeChanged(_:)), for: .valueChanged)
        view.addSubview(segmentedControl)
        
        // define constraints
        let topConstraint = segmentedControl.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor)
//        let leadingConstraint = segmentedControl.leadingAnchor.constraint(equalTo: view.leadingAnchor)
//        let trailingConstraint = segmentedControl.trailingAnchor.constraint(equalTo: view.trailingAnchor)
        
        let margins = view.layoutMarginsGuide
    
        let leadingConstraint = segmentedControl.leadingAnchor.constraint(equalTo: margins.leadingAnchor)
        let trailingConstraint = segmentedControl.trailingAnchor.constraint(equalTo: margins.trailingAnchor)
        
        // active constraints
        topConstraint.isActive = true
        leadingConstraint.isActive = true
        trailingConstraint.isActive = true
        
        // Add points of interest
        let poiLabel = UILabel()
        poiLabel.text = NSLocalizedString("poi_switch_title", comment: "Poi Switch")
        poiLabel.translatesAutoresizingMaskIntoConstraints = false
        let poiSwitch = UISwitch()
        poiSwitch.isOn = false
        poiSwitch.translatesAutoresizingMaskIntoConstraints = false
        poiSwitch.addTarget(self, action: #selector(switchToggled(_:)), for: .valueChanged)
        
        view.addSubview(poiLabel)
        view.addSubview(poiSwitch)
        
        let poiLabelTopConstraint = poiLabel.topAnchor.constraint(equalTo: segmentedControl.bottomAnchor, constant: 12)
        let poiLabelLeadingConstraint = poiLabel.leadingAnchor.constraint(equalTo: segmentedControl.leadingAnchor)
        
        let poiSwitchCenterXConstraint = poiSwitch.centerYAnchor.constraint(equalTo: poiLabel.centerYAnchor)
        let poiSwitchLeadingConstraint = poiSwitch.leadingAnchor.constraint(equalTo: poiLabel.trailingAnchor, constant: 8)

        poiLabelTopConstraint.isActive = true
        poiLabelLeadingConstraint.isActive = true
        poiSwitchCenterXConstraint.isActive = true
        poiSwitchLeadingConstraint.isActive = true
        
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        print("MapViewController loaded its view")
        
        setupLocationManager()
        requestLocationPermission()
        
    }
    
    private func setupLocationManager() {
        locationManager.delegate = self
        // 设置位置精度（越高越耗电，根据需求调整）
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
    }
    
    private func requestLocationPermission() {
        // 请求前台使用位置权限
        locationManager.requestWhenInUseAuthorization()
    }
    
    @objc func mapTypeChanged(_ segControl: UISegmentedControl) {
        switch segControl.selectedSegmentIndex {
        case 0:
            mapView.mapType = .standard
        case 1:
            mapView.mapType = .hybrid
        case 2:
            mapView.mapType = .satellite
        default:
            break
        }
    }
    
    /**
            在 Switch 切换时，展示或隐藏地图上的 POI 点
     */
    @objc func switchToggled(_ sender: UISwitch) {
        if sender.isOn {
            mapView.pointOfInterestFilter = .includingAll
        } else {
            mapView.pointOfInterestFilter = .excludingAll
        }
    }
    
    // 权限请求的回调处理
    func locationManagerDidChangeAuthorization(_ manager: CLLocationManager) {
        switch manager.authorizationStatus {
        case .authorizedWhenInUse, .authorizedAlways:
            // 已授权，开始获取位置
            locationManager.startUpdatingLocation()
        case .denied, .restricted:
            // 权限被拒绝，可提示用户去设置开启
            showLocationPermissionAlert()
        case .notDetermined:
            // 尚未决定，等待用户选择
            break
        default:
            break
        }
    }
    
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        // 获取最新的位置（数组最后一个是最新的）
        guard let userLocation = locations.last else { return }
        
        // 缩放地图到用户位置
        zoomToLocation(userLocation)
        
        // 只需要一次定位，停止更新位置
        locationManager.stopUpdatingLocation()
    }
    
    private func zoomToLocation(_ location: CLLocation) {
        let regionRadius: CLLocationDistance = 1000
        let coordinateRegion = MKCoordinateRegion(
            center: location.coordinate,
            latitudinalMeters: regionRadius,
            longitudinalMeters: regionRadius
        )
        mapView.setRegion(mapView.regionThatFits(coordinateRegion), animated: true)
    }
    
    private func showLocationPermissionAlert() {
        let alert = UIAlertController(
            title: "需要位置权限", message: "请在设置中开启位置权限，以便显示您当前的位置", preferredStyle: .alert)
        alert.addAction(UIAlertAction(title: "取消", style: .cancel))
        alert.addAction(UIAlertAction(title: "设置", style: .default) {_ in
            // 跳转到应用设置页面
            guard let settingsURL = URL(string: UIApplication.openSettingsURLString) else {
                return
            }
            UIApplication.shared.open(settingsURL)
        })
        present(alert, animated: true)
    }
    
}
