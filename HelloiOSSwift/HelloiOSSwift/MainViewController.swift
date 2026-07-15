//
//  MainViewController.swift
//  HelloiOSSwift
//
//  Created by Owen on 2025/8/19.
//

import UIKit

class MainViewController: UIViewController {
    

    @IBAction func goToQuizPage(_ sender: UIButton) {
        let quizStoryBoard = UIStoryboard(name: "Quiz", bundle: nil)
        if let quizVC = quizStoryBoard.instantiateViewController(withIdentifier: "QuizVC") as? QuizViewController {
            navigationController?.pushViewController(quizVC, animated: true)
        }
    }

    @IBAction func goToWorldTrotterPage(_ sender: UIButton) {
        let worldTrotterStoryBoard = UIStoryboard(name: "WorldTrotter", bundle: nil)
        if let worldTrotterVC = worldTrotterStoryBoard.instantiateViewController(withIdentifier: "WorldTrotterVC") as? UITabBarController {
            navigationController?.pushViewController(worldTrotterVC, animated: true)
        }
    }
    
    @IBAction func goToBugglyPage(_ sender: UIButton) {
        let bugglyStoryboard = UIStoryboard(name: "Buggly", bundle: nil)
        if let bugglyVC = bugglyStoryboard.instantiateViewController(withIdentifier: "BugglyVC") as? BugglyViewController {
            navigationController?.pushViewController(bugglyVC, animated: true)
        }
    }
    
    @IBAction func goToLootLoggerPage(_ sender: UIButton) {
        let lootLoggerVC = LootLoggerTableViewController()
        navigationController?.pushViewController(lootLoggerVC, animated: true)
    }
    
}

