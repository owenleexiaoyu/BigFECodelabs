//
//  CalculateEngine.h
//  CalculatorOC
//
//  Created by Owen on 2026/7/19.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

typedef NS_ENUM(NSInteger, CalculatorOperator) {
    CalculatorOperatorNone,         // 无操作
    CalculatorOperatorAdd,          // +
    CalculatorOperatorSubtract,     // -
    CalculatorOperatorMultiply,     // *
    CalculatorOperatorDivide        // /
};

@interface CalculatorEngine : NSObject

@property (nonatomic, copy, readonly) NSString *displayText;

- (void)inputDigit:(NSString *)digit;
- (void)inputDecimalPoint;
- (void)inputOperator:(CalculatorOperator)operatorType;
- (void)inputEqual;
- (void)clear;
- (void)toggleSign;
- (void)percentage;

@end

NS_ASSUME_NONNULL_END
