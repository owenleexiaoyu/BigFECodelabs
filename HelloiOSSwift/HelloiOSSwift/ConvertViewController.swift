//
//  ConvertViewController.swift
//  HelloiOSSwift
//
//  Created by Owen on 2025/8/23.
//

import UIKit

class ConvertViewController: UIViewController, UITextFieldDelegate {
    
    @IBOutlet var textField: UITextField!
    @IBOutlet var celsiusLabel: UILabel!
    
    var fahrenheitValue: Measurement<UnitTemperature>? {
        didSet {
            updateCelsiusLabel()
        }
    }
    
    var celsiusValue: Measurement<UnitTemperature>? {
        if let fahrenheitValue = fahrenheitValue {
            return fahrenheitValue.converted(to: .celsius)
        } else {
            return nil
        }
    }
    
    var numberFormatter: NumberFormatter = {
        let nf = NumberFormatter()
        nf.numberStyle = .decimal
        nf.minimumFractionDigits = 0
        nf.maximumFractionDigits = 2
        return nf
    }()
    
    func updateCelsiusLabel() {
        if let celsiusValue = celsiusValue {
//            celsiusLabel.text = "\(celsiusValue.value)"
            celsiusLabel.text = numberFormatter.string(from: NSNumber(value: celsiusValue.value))
        } else {
            celsiusLabel.text = "???"
        }
    }
    
    @IBAction func fahrenheitFieldEditingChanged(_ textField: UITextField) {
        print("text field content changed, content = \(textField.text ?? "")")
        
        if let text = textField.text, let number = numberFormatter.number(from: text) {
            fahrenheitValue = Measurement(value: number.doubleValue, unit: .fahrenheit)
        } else {
            fahrenheitValue = nil
        }
    }
    
    func textField(
        _ textField: UITextField,
        shouldChangeCharactersIn range: NSRange,
        replacementString string: String) -> Bool {
            print("Current text: \(String(describing: textField.text))")
            print("Replacement text: \(string)")
            let currentLocale = Locale.current
            print("Current locale: \(currentLocale)")
            let decimalSeparator = currentLocale.decimalSeparator ?? "."
            print("decimalSeparator: \(decimalSeparator)")
            // 限制输入只能是数字或小数点
            // 判断 replacement text 是否包含字母
//            let replacementTextContainsLetter = string.rangeOfCharacter(from: .letters) != nil
//            print("replacementTextContainsLetter = \(replacementTextContainsLetter)")
            let replacementTextIsOnlyDecimalDigitsAndDecimalSeparator = string.rangeOfCharacter(from: .decimalDigits.inverted) == nil || string == decimalSeparator
            print("replacementTextIsOnlyDecimalDigitsAndDecimalSeparator = \(replacementTextIsOnlyDecimalDigitsAndDecimalSeparator)")
            if !replacementTextIsOnlyDecimalDigitsAndDecimalSeparator {
                return false
            }
            // 限制文本中只能有一个小数点
            
            let existingTextHasDecimalSeparator = textField.text?.range(of: decimalSeparator)
            let replacementTextHasDecimalSeparator = string.range(of: decimalSeparator)
            if existingTextHasDecimalSeparator != nil,
               replacementTextHasDecimalSeparator != nil {
                return false
            } else {
                return true
            }
    }
    
    @IBAction func dismissKeyBoard(_ sender: UITapGestureRecognizer) {
        textField.resignFirstResponder()
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        
        print("ConvertViewController viewDidLoad")
        
        // Demo code
//        let firstFrame = CGRect(x: 160, y: 240, width: 100, height: 150)
//        let firstView = UIView(frame: firstFrame)
//        firstView.backgroundColor = UIColor.blue
//        view.addSubview(firstView)
//        
//        let secordFrame = CGRect(x: 20, y: 30, width: 50, height: 50)
//        let secrodView = UIView(frame: secordFrame)
//        secrodView.backgroundColor = UIColor.green
//        firstView.addSubview(secrodView)
        
        // 添加渐变层
        let gradientLayer = CAGradientLayer()
        // 设置渐变颜色
        gradientLayer.colors = [
            UIColor.systemBlue.cgColor, // 起始颜色
            UIColor.systemPurple.cgColor // 结束颜色
        ]
        // 设置渐变方向（从上到下）
        gradientLayer.startPoint = CGPoint(x: 0.5, y: 0) // 顶部中心
        gradientLayer.endPoint = CGPoint(x: 0.5, y: 1)   // 底部中心
        // 设置渐变层大小和视图一致
        gradientLayer.frame = view.bounds
        // 将渐变层插入到视图层的最低部
        view.layer.insertSublayer(gradientLayer, at: 0)
        
        // 更新 UI
        updateCelsiusLabel()
    }
    
    override func viewWillAppear(_ animated: Bool) {
        print("ConvertViewController viewWillAppear")
    }
    
    override func viewDidAppear(_ animated: Bool) {
        print("ConvertViewController viewDidAppear")
    }
    
    override func viewWillDisappear(_ animated: Bool) {
        print("ConvertViewController viewWillDisappear")
    }
    
    override func viewDidDisappear(_ animated: Bool) {
        print("ConvertViewController viewDidDisappear")
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        // 找到渐变层并更新其 frame
        if let gradientLayer = view.layer.sublayers?.first(where: { $0 is CAGradientLayer }) {
            gradientLayer.frame = view.bounds
        }
    }

}
