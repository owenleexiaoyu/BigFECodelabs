//
//  StockHolding.h
//  HelloObjectiveC
//
//  Created by Owen on 2023/11/26.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface StockHolding : NSObject {
    float _purchaseSharePrice;
    float _currentSharePrice;
    int _numberOfShares;
}

- (float)purchaseSharePrice;
- (void)setPurchaseSharePrice:(float)purchasePrice;
- (float)currentSharePrice;
- (void)setCurrentSharePrice:(float)currentPrice;
- (int)numberOfShares;
- (void)setNumberOfShares:(int)sharesNumber;

- (float)costInDollars;
- (float)valueInDollars;

@end

NS_ASSUME_NONNULL_END
