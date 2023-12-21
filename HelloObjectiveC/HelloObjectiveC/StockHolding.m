//
//  StockHolding.m
//  HelloObjectiveC
//
//  Created by Owen on 2023/11/26.
//

#import "StockHolding.h"

@implementation StockHolding : NSObject 

- (float)purchaseSharePrice {
    return _purchaseSharePrice;
}

- (void)setPurchaseSharePrice:(float)purchasePrice {
    _purchaseSharePrice = purchasePrice;
}

- (float)currentSharePrice {
    return _currentSharePrice;
}

- (void)setCurrentSharePrice:(float)currentPrice {
    _currentSharePrice = currentPrice;
}

- (int)numberOfShares {
    return _numberOfShares;
}

- (void)setNumberOfShares:(int)sharesNumber {
    _numberOfShares = sharesNumber;
}

- (float)costInDollars {
    return _purchaseSharePrice * _numberOfShares;
}

- (float)valueInDollars {
    return _currentSharePrice * _numberOfShares;
}

@end
