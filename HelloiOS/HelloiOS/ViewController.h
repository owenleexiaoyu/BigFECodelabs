//
//  ViewController.h
//  HelloiOS
//
//  Created by ByteDance on 2023/12/7.
//

#import <UIKit/UIKit.h>

NSString *taskStoragePath(void);

@interface ViewController : UIViewController <UITableViewDataSource>

@property (nonatomic) UITableView *taskTable;
@property (nonatomic) UITextField *taskField;
@property (nonatomic) UIButton *insertButton;

@property (nonatomic) NSMutableArray *tasks;

- (void)addTask:(id)sender;

- (void)cacheTasks;

@end

