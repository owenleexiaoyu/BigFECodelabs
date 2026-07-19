//
//  CalculateEngine.m
//  CalculatorOC
//
//  Created by Owen on 2026/7/19.
//

#import "CalculatorEngine.h"

@interface CalculatorEngine ()

// 当前屏幕显示内容
@property (nonatomic, copy, readwrite) NSString *displayText;

// 上一个参与运算的数字。例如输入 12 + 3 时，12 会被保存到这里
@property (nonatomic, assign) double storedValue;
// 当前显示的数字值
@property (nonatomic, assign) double currentValue;

// 等待执行的运算符。例如用户输入了 +，但还没输入右侧数字
@property (nonatomic, assign) CalculatorOperator pendingOperator;

// 用户是否正在输入一个数字
@property (nonatomic, assign) BOOL isTypingNumber;
// 下一次输入数字时，是否应该清空显示区
@property (nonatomic, assign) BOOL shouldResetDisplay;
// 是否处于错误状态，比如除以 0
@property (nonatomic, assign) BOOL hasError;

@end

@implementation CalculatorEngine

- (instancetype)init {
    self = [super init];
    if (self) {
        [self clear];
    }
    return self;
}

// 清理重置
- (void)clear {
    self.displayText = @"0";
    self.storedValue = 0;
    self.currentValue = 0;
    self.pendingOperator = CalculatorOperatorNone;
    self.isTypingNumber = NO;
    self.shouldResetDisplay = NO;
    self.hasError = NO;
}

/**
 输入数字的逻辑
 */
- (void)inputDigit:(NSString *)digit {
    NSLog(@"CalculatorEngine inputDigit: %@", digit);
    if (self.hasError) {
        [self clear];
    }
    
    if (self.shouldResetDisplay || !self.isTypingNumber) {
        self.displayText = digit;
        self.shouldResetDisplay = NO;
        self.isTypingNumber = YES;
    } else {
        if ([self.displayText isEqualToString:@"0"]) {
            self.displayText = digit;
        } else {
            self.displayText = [self.displayText stringByAppendingString:digit];
        }
    }
    self.currentValue = self.displayText.doubleValue;
}

/**
 输入小数点的逻辑，需要避免重复输入
 */
- (void)inputDecimalPoint {
    if (self.hasError) {
        [self clear];
    }
    
    if (self.shouldResetDisplay || !self.isTypingNumber) {
        self.displayText = @"0.";
        self.shouldResetDisplay = NO;
        self.isTypingNumber = YES;
        return;
    }
    
    if (![self.displayText containsString:@"."]) {
        self.displayText = [self.displayText stringByAppendingString:@"."];
    }
}

- (void)inputOperator:(CalculatorOperator)operatorType {
    NSLog(@"CalculatorEngine inputOperator: %ld", (long)operatorType);
    if (self.hasError) {
        return;
    }
    
    self.currentValue = self.displayText.doubleValue;
    
    if (self.pendingOperator != CalculatorOperatorNone && self.isTypingNumber) {
        [self performPendingCalculation];
    } else {
        self.storedValue = self.currentValue;
    }
    self.pendingOperator = operatorType;
    self.shouldResetDisplay = YES;
    self.isTypingNumber = NO;
}

- (void)inputEqual {
    if (self.hasError) {
        return;
    }
    if (self.pendingOperator == CalculatorOperatorNone) {
        return;
    }
    
    self.currentValue = self.displayText.doubleValue;
    [self performPendingCalculation];
    
    self.pendingOperator = CalculatorOperatorNone;
    self.shouldResetDisplay = YES;
    self.isTypingNumber = NO;
}

- (void)toggleSign {
    if (self.hasError) {
        return;
    }
    if ([@"0" isEqualToString:self.displayText]) {
        return;
    }
    if ([self.displayText hasPrefix:@"-"]) {
        self.displayText = [self.displayText substringFromIndex:1];
    } else {
        self.displayText = [@"-" stringByAppendingString: self.displayText];
    }
    self.currentValue = self.displayText.doubleValue;
}

- (void)percentage {
    if (self.hasError) {
        return;
    }
    self.currentValue = self.displayText.doubleValue / 100.0;
    self.displayText = [self formattedStringFromDouble:self.currentValue];
}

- (void)performPendingCalculation {
    double left = self.storedValue;
    double right = self.currentValue;
    double result = 0;
    switch (self.pendingOperator) {
        case CalculatorOperatorAdd:
            result = left + right;
            break;
        case CalculatorOperatorSubtract:
            result = left - right;
            break;
        case CalculatorOperatorMultiply:
            result = left * right;
            break;
        case CalculatorOperatorDivide:
            if (right == 0) {
                self.displayText = @"Error!";
                self.hasError = YES;
                return;
            }
            result = left / right;
            break;
        case CalculatorOperatorNone:
            return;
    }
    self.storedValue = result;
    self.currentValue = result;
    self.displayText = [self formattedStringFromDouble:result];
}

- (NSString *) formattedStringFromDouble: (double)value {
    if (isnan(value) || isinf(value)) {
        return @"Error!";
    }
    if (fabs(value) > 999999999999.0) {
        return [NSString stringWithFormat:@"%.6e", value];
    }
    if (floor(value) == value) {
        return [NSString stringWithFormat:@"%.0f", value];
    }
    NSString *text = [NSString stringWithFormat:@"%.10f", value];
    while([text hasSuffix:@"0"]) {
        text = [text substringToIndex:text.length - 1];
    }
    if ([text hasSuffix:@"."]) {
        text = [text substringToIndex:text.length - 1];
    }
    return text;
}

@end
