//
//  ViewController.h
//  SimpleTodoOC
//
//  Created by Owen on 2026/7/29.
//

#import <UIKit/UIKit.h>

NSString *taskStoragePath(void);

@interface ViewController : UIViewController

@property (nonatomic) UITableView *taskTable;
@property (nonatomic) UITextField *taskField;
@property (nonatomic) UIButton *insertButton;

@property (nonatomic) NSMutableArray *tasks;

- (void)addTask:(id)sender;

- (void)cacheTasks;

@end

