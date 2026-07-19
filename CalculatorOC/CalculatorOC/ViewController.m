//
//  ViewController.m
//  CalculatorOC
//
//  Created by Owen on 2026/7/15.
//

#import "ViewController.h"
#import "CalculatorEngine.h"

@interface ViewController ()

@property (nonatomic, strong) UILabel *displayLabel;
@property (nonatomic, strong) UIStackView *rootContainer;
@property (nonatomic, strong) CalculatorEngine *calculatorEngine;
@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // 设置页面背景色
    self.view.backgroundColor = [UIColor blackColor];
    
    // 初始化根容器
    [self initRootContainer];
    
    // 初始化 Display Label
    [self initDisplayLabel];
    // 把 Display Label 加入 Root container
    [self.rootContainer addArrangedSubview:self.displayLabel];
    
    // 添加所有按键行
    [self addCalcButtonsRow:@[@"AC", @"+/-", @"%", @"/"]];
    [self addCalcButtonsRow:@[@"7", @"8", @"9", @"*"]];
    [self addCalcButtonsRow:@[@"4", @"5", @"6", @"-"]];
    [self addCalcButtonsRow:@[@"1", @"2", @"3", @"+"]];
    
    // 添加最后一行按键
    [self addLastRow];
    
    // 初始化 calculatorEngine
    self.calculatorEngine = [[CalculatorEngine alloc] init];
}

- (void)initDisplayLabel {
    self.displayLabel = [[UILabel alloc] init];
    // 设置初始文字
    self.displayLabel.text = @"0";
    // 设置文字颜色
    self.displayLabel.textColor = UIColor.whiteColor;
    // 设置字号字重
    self.displayLabel.font = [UIFont systemFontOfSize: 60 weight: UIFontWeightBold];
    // 设置文字具右显示
    self.displayLabel.textAlignment = NSTextAlignmentRight;
    // 禁用 Autoresizing
    self.displayLabel.translatesAutoresizingMaskIntoConstraints = NO;
}

- (void)initRootContainer {
    // 初始化 UIStackView 实例
    self.rootContainer = [[UIStackView alloc] init];
    // 设置垂直方向排列
    self.rootContainer.axis = UILayoutConstraintAxisVertical;
    // 设置每个子 View 间间隔 12
    self.rootContainer.spacing = 12.0f;
    // 禁用 Autoresizing
    self.rootContainer.translatesAutoresizingMaskIntoConstraints = NO;
    
    // 添加到页面根 View 中
    [self.view addSubview:self.rootContainer];
    
    // 添加约束，左右底部留边
    [NSLayoutConstraint activateConstraints:@[
       [self.rootContainer.topAnchor constraintEqualToAnchor:self.view.safeAreaLayoutGuide.topAnchor],
       [self.rootContainer.leadingAnchor constraintEqualToAnchor:self.view.leadingAnchor constant:8.0f],
       [self.rootContainer.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor constant:-8.0f],
       [self.rootContainer.bottomAnchor constraintEqualToAnchor:self.view.safeAreaLayoutGuide.bottomAnchor constant:-8.0f]
    ]];
}

- (UIButton *)createCalcButton:(NSString *)title {
    // 创建一个 UIButton 实例
    UIButton *calcBtn = [UIButton buttonWithType:UIButtonTypeSystem];
    // 设置 title
    [calcBtn setTitle:title forState:UIControlStateNormal];
    // 设置 title 显示的字号字重
    calcBtn.titleLabel.font = [UIFont systemFontOfSize:30 weight:UIFontWeightSemibold];
    // 禁用 Autoresizing
    calcBtn.translatesAutoresizingMaskIntoConstraints = NO;
    
    // 样式区分运算符和普通数字
    if ([@[@"/", @"*", @"-", @"+", @"="] containsObject:title]) {
        // 设置运算符按钮的背景色为橙色
        calcBtn.backgroundColor = UIColor.systemOrangeColor;
        // 设置运算符按钮的文字颜色为白色
        [calcBtn setTitleColor:UIColor.whiteColor forState:UIControlStateNormal];
    } else {
        // 设置数字按钮的背景色为灰色
        calcBtn.backgroundColor = UIColor.systemGray3Color;
        // 设置数字按钮的文字颜色为黑色
        [calcBtn setTitleColor:UIColor.blackColor forState:UIControlStateNormal];
    }
    // 设置按钮宽度和高度一样（除 = 按钮）
    if (![title isEqualToString:@"="]) {
        [[calcBtn.heightAnchor constraintEqualToAnchor:calcBtn.widthAnchor] setActive:YES];
    }
    // 给按钮设置圆角
    calcBtn.layer.cornerRadius = 32;
    // 按圆角进行裁切
    calcBtn.clipsToBounds = YES;
    // 添加点击事件，添加一个 target
    [calcBtn addTarget:self action:@selector(onButtonClicked:) forControlEvents:UIControlEventTouchUpInside];
    return calcBtn;
}

- (void)addCalcButtonsRow:(NSArray<NSString *> *)titles {
    // 创建一个 UIStackView
    UIStackView *rowStack = [[UIStackView alloc] init];
    // 设置排列方向为横向
    rowStack.axis = UILayoutConstraintAxisHorizontal;
    // 设置里面每个 UI 控件的间隔
    rowStack.spacing = 8.0f;
    // 设置里面每个 UI 控件均分父容器
    rowStack.distribution = UIStackViewDistributionFillEqually;
    
    // 创建这一行中的按钮，并添加到 UIStackView 中
    for (NSString *title in titles) {
        UIButton *calcBtn = [self createCalcButton:title];
        [rowStack addArrangedSubview:calcBtn];
    }
    [self.rootContainer addArrangedSubview:rowStack];
}

- (void)addLastRow{
    // 创建一个 UIStackView
    UIStackView *rowStack = [[UIStackView alloc] init];
    // 设置排列方向为横向
    rowStack.axis = UILayoutConstraintAxisHorizontal;
    // 设置里面每个 UI 控件的间隔
    rowStack.spacing = 8.0f;
    
    // 创建这一行中的按钮，并添加到 UIStackView 中
    UIButton *zeroBtn = [self createCalcButton:@"0"];
    UIButton *dotBtn = [self createCalcButton:@"."];
    UIButton *equalBtn = [self createCalcButton:@"="];
    
    [rowStack addArrangedSubview:zeroBtn];
    [rowStack addArrangedSubview:dotBtn];
    [rowStack addArrangedSubview:equalBtn];
    
    // 把 = 按钮的宽度设为普通按钮的两倍 + 一个间隔
    [[equalBtn.widthAnchor constraintEqualToAnchor:dotBtn.widthAnchor multiplier:2.0f constant:8.0f] setActive:YES];
    
    [self.rootContainer addArrangedSubview:rowStack];
}

- (void)onButtonClicked:(UIButton *)sender {
    NSLog(@"Click %@", sender.currentTitle);
    NSString *title = sender.currentTitle;
    if (title == nil) {
        return;
    }
    if ([@[@"0", @"1", @"2", @"3", @"4", @"5", @"6", @"7", @"8", @"9"] containsObject:title]) {
        // 输入数字
        [self.calculatorEngine inputDigit:title];
        [self.displayLabel setText:self.calculatorEngine.displayText];
    } else if ([@"." isEqualToString:title]) {
        // 输入小数点
        [self.calculatorEngine inputDecimalPoint];
        [self.displayLabel setText:self.calculatorEngine.displayText];
    } else if ([@"+" isEqualToString:title]) {
        [self.calculatorEngine inputOperator:CalculatorOperatorAdd];
        [self.displayLabel setText:self.calculatorEngine.displayText];
    } else if ([@"-" isEqualToString:title]) {
        [self.calculatorEngine inputOperator:CalculatorOperatorSubtract];
        [self.displayLabel setText:self.calculatorEngine.displayText];
    } else if ([@"*" isEqualToString:title]) {
        [self.calculatorEngine inputOperator:CalculatorOperatorMultiply];
        [self.displayLabel setText:self.calculatorEngine.displayText];
    } else if ([@"/" isEqualToString:title]) {
        [self.calculatorEngine inputOperator:CalculatorOperatorDivide];
        [self.displayLabel setText:self.calculatorEngine.displayText];
    } else if ([@"=" isEqualToString:title]) {
        [self.calculatorEngine inputEqual];
        [self.displayLabel setText:self.calculatorEngine.displayText];
    } else if ([@"AC" isEqualToString:title]) {
        [self.calculatorEngine clear];
        [self.displayLabel setText:self.calculatorEngine.displayText];
    } else if ([@"+/-" isEqualToString:title]) {
        [self.calculatorEngine toggleSign];
        [self.displayLabel setText:self.calculatorEngine.displayText];
    } else if ([@"%" isEqualToString:title]) {
        [self.calculatorEngine percentage];
        [self.displayLabel setText:self.calculatorEngine.displayText];
    }
}

@end
