//
//  LootLoggerTableViewController.swift
//  HelloiOSSwift
//
//  Created by Owen on 2025/9/5.
//

import UIKit

class LootLoggerTableViewController: UITableViewController {
    
    var itemStore: ItemStore = ItemStore()

    override func viewDidLoad() {
        super.viewDidLoad()
        setupTableView()
        setupTableHeader()
    }
    
    private func setupTableView() {
        tableView.register(LootLoggerItemCell.self, forCellReuseIdentifier: "UITableViewCell")
    }
    
    private func setupTableHeader() {
        let headerView = UIView(frame: CGRect(x: 0, y: 0, width: view.frame.width, height: 60))
        headerView.backgroundColor = .systemGray3
        
        let editButton = UIButton(type: .system)
        editButton.translatesAutoresizingMaskIntoConstraints = false
        editButton.setTitle("Edit", for: .normal)
        editButton.setTitleColor(.systemBlue, for: .normal)
        editButton.addTarget(self, action: #selector(editButtonTapped(_:)), for: .touchUpInside)
//        editButton.titleLabel?.text = "Edit"
//        editButton.titleLabel?.textColor = .systemBlue
        headerView.addSubview(editButton)
        
        let addItemButton = UIButton(type: .system)
        addItemButton.translatesAutoresizingMaskIntoConstraints = false
        addItemButton.setTitle("Add", for: .normal)
        addItemButton.setTitleColor(.systemBlue, for: .normal)
        addItemButton.addTarget(self, action: #selector(addItemButtonTapped(_:)), for: .touchUpInside)
//        addItemButton.titleLabel?.text = "Add"
//        addItemButton.titleLabel?.textColor = .systemBlue
        headerView.addSubview(addItemButton)
        
        NSLayoutConstraint.activate([
            editButton.centerYAnchor.constraint(equalTo: headerView.centerYAnchor),
            editButton.leadingAnchor.constraint(equalTo: headerView.layoutMarginsGuide.leadingAnchor),
            addItemButton.centerYAnchor.constraint(equalTo: headerView.centerYAnchor),
            addItemButton.trailingAnchor.constraint(equalTo: headerView.layoutMarginsGuide.trailingAnchor)
        ])
        
        tableView.tableHeaderView = headerView
    }
    
    override func numberOfSections(in tableView: UITableView) -> Int {
        return itemStore.groupedItems.count
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return itemStore.groupedItems[section].count
    }
    
    override func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        if (section == 0) {
            return "Value < $5"
        } else {
            return "Value >= $5"
        }
    }


    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        // 直接实例化一个 UITableViewCell
//        let cell = UITableViewCell(style: .value1, reuseIdentifier: "UITableViewCell")

        // 从缓存池中获取或者创建一个 UITableViewCell
        let cell = tableView.dequeueReusableCell(withIdentifier: "UITableViewCell", for: indexPath)
        
        let item = itemStore.groupedItems[indexPath.section][indexPath.row]
        
        cell.textLabel?.text = item.name
        cell.detailTextLabel?.text = "$\(item.valueInDollars)"

        return cell
    }

    override func tableView(_ tableView: UITableView,
                            commit editingStyle: UITableViewCell.EditingStyle,
                            forRowAt indexPath: IndexPath) {
        if (editingStyle == .delete) {
            // 找到操作的 Item
            let item = itemStore.allItems[indexPath.row]
            // 从 ItemStore 中移除
            itemStore.removeItem(item)
            // 同时从列表中移除
            tableView.deleteRows(at: [indexPath], with: .automatic)
        }
    }
    
    override func tableView(_ tableView: UITableView,
                            moveRowAt sourceIndexPath: IndexPath,
                            to destinationIndexPath: IndexPath) {
        itemStore.moveItem(from: sourceIndexPath.row, to: destinationIndexPath.row)
    }

    /*
    // Override to support conditional editing of the table view.
    override func tableView(_ tableView: UITableView, canEditRowAt indexPath: IndexPath) -> Bool {
        // Return false if you do not want the specified item to be editable.
        return true
    }
    */

    /*
    // Override to support editing the table view.
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath) {
        if editingStyle == .delete {
            // Delete the row from the data source
            tableView.deleteRows(at: [indexPath], with: .fade)
        } else if editingStyle == .insert {
            // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view
        }    
    }
    */

    /*
    // Override to support rearranging the table view.
    override func tableView(_ tableView: UITableView, moveRowAt fromIndexPath: IndexPath, to: IndexPath) {

    }
    */

    /*
    // Override to support conditional rearranging of the table view.
    override func tableView(_ tableView: UITableView, canMoveRowAt indexPath: IndexPath) -> Bool {
        // Return false if you do not want the item to be re-orderable.
        return true
    }
    */
    
    @objc private func editButtonTapped(_ sender: UIButton) {
        print("editButtonTapped")
        if isEditing {
            sender.setTitle("Edit", for: .normal)
            setEditing(false, animated: true)
        } else {
            sender.setTitle("Done", for: .normal)
            setEditing(true, animated: true)
        }
    }
    
    @objc private func addItemButtonTapped(_ sender: UIButton) {
        print("addItemButtonTapped")
//        let lastRow = tableView.numberOfRows(inSection: 0)
//        let indexPath = IndexPath(row: lastRow, section: 0)
//        tableView.insertRows(at: [indexPath], with: .automatic)
        
        let newItem = itemStore.createItem()
//        if let index = itemStore.allItems.firstIndex(of: newItem) {
//            print("newItem index: \(index)")
//            let indexPath = IndexPath(row: index, section: 0)
//            tableView.insertRows(at: [indexPath], with: .automatic)
//        }
        
        tableView.reloadData()
    }

}
