//
//  ViewController.m
//  HelloiOS
//
//  Created by ByteDance on 2023/12/7.
//

#import "ViewController.h"

NSString *taskStoragePath(void) {
    NSArray *pathList = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
    return [pathList[0] stringByAppendingPathComponent:@"data.td"];
}

@interface ViewController ()

- (void)loadTaskFromCache;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    CGRect winFrame = [[UIScreen mainScreen] bounds];
    // 设置三个 UI 对象的 frame 属性
    // CGReactMake() 函数可以创建 CGRect 结构，参数是(x, y, width, height)
    CGRect tableFrame = CGRectMake(0, 130, winFrame.size.width, winFrame.size.height - 140);
    CGRect fieldFrame = CGRectMake(20, 60, 200, 60);
    CGRect buttonFrame = CGRectMake(230, 60, 100, 60);
    
    [self loadTaskFromCache];

    // 创建并设置 UITableView 对象
    self.taskTable = [[UITableView alloc] initWithFrame:tableFrame style:UITableViewStylePlain];
    self.taskTable.separatorStyle = UITableViewCellSeparatorStyleNone;
    self.taskTable.dataSource = self;
    // 需要创建新的单元格时，告诉 UITableView 对象要实例化哪个类
    [self.taskTable registerClass:[UITableViewCell class] forCellReuseIdentifier:@"Cell"];
    [self.taskTable reloadData];

    // 创建并设置 UITextField 对象，以便用户能够输入新任务并设置 UIButton 对象（类型是圆角按钮），按下时，将新任务插入 UITableView 对象
    self.taskField = [[UITextField alloc] initWithFrame:fieldFrame];
    self.taskField.borderStyle = UITextBorderStyleRoundedRect;
    self.taskField.placeholder = @"Type a task, tap Insent";

    // 创建并设置 UIButton 对象
    self.insertButton = [UIButton buttonWithType:UIButtonTypeRoundedRect];
    self.insertButton.frame = buttonFrame;
    [self.insertButton setTitle:@"Inset" forState:UIControlStateNormal];
    [self.insertButton addTarget:self action:@selector(addTask:) forControlEvents:UIControlEventTouchUpInside];

    // 将三个 UI 对象加入 UIWindow 实例
    [self.view addSubview:self.taskTable];
    [self.view addSubview:self.taskField];
    [self.view addSubview:self.insertButton];

}

- (void)addTask:(id)sender {
    // 获取新任务的文字描述
    NSString *text = [self.taskField text];
    // 如果没有内容，则直接返回
    if ([text length] == 0) {
        return;
    }
    NSLog(@"Task entered: %@", text);
    [self.tasks addObject:text];
    // 这行代码很关键，需要重新加载最新的数据
    [self.taskTable reloadData];
    // 清空输入框内容
    [self.taskField setText:@""];
    [self.taskField resignFirstResponder];
}

- (void)cacheTasks {
    [self.tasks writeToFile:taskStoragePath() atomically:YES];
}

- (void)loadTaskFromCache {
    NSArray *plist = [NSArray arrayWithContentsOfFile:taskStoragePath()];
    if (plist) {
        self.tasks = [plist mutableCopy];
    } else {
        self.tasks = [NSMutableArray array];
    }
}

//- (void)viewWillDisappear:(BOOL)animated {
//    NSLog(@"viewWillDisappear");
//    [self cacheTasks];
//}



#pragma mark - 管理表格视图

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return [self.tasks count];
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    UITableViewCell *c = [self.taskTable dequeueReusableCellWithIdentifier:@"Cell"];
    
    NSString *item = [self.tasks objectAtIndex:indexPath.row];
    c.textLabel.text = item;
    return c;
}


@end
