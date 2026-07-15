//
//  ItemStore.swift
//  HelloiOSSwift
//
//  Created by Owen on 2025/9/5.
//

import UIKit

class ItemStore {
    
    var allItems = [Item]()
    
    var groupedItems: [[Item]] = []
    
    // @discardableResult 表示函数调用方可以自由忽略这个函数的返回值
    @discardableResult func createItem() -> Item {
        let newIem = Item(random: true)
        allItems.append(newIem)
        groupItemByPrice()
        return newIem
    }
    
    func removeItem(_ item: Item) {
        if let index = allItems.firstIndex(of: item) {
            allItems.remove(at: index)
        }
        groupItemByPrice()
    }
    
    func moveItem(from fromIndex: Int, to toIndex: Int) {
        if (fromIndex == toIndex) {
            return
        }
        let movedItem = allItems[fromIndex]
        allItems.remove(at: fromIndex)
        allItems.insert(movedItem, at: toIndex)
        groupItemByPrice()
    }
    
    private func groupItemByPrice() {
        let section0 = allItems.filter { $0.valueInDollars < 5 }
        let section1 = allItems.filter { $0.valueInDollars >= 5 }
        groupedItems = [section0, section1]
    }
 
//    init() {
//        for _ in 0..<5 {
//            createItem()
//        }
//    }
}
