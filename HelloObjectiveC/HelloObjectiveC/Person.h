//
//  Person.h
//  HelloObjectiveC
//
//  Created by Owen on 2023/11/26.
//

#import <Foundation/Foundation.h>
#import "Behavior.h"

NS_ASSUME_NONNULL_BEGIN

@interface Person : NSObject <Behavior> {
    float _heightInMeters;
    int _weightInKilos;
}

- (float)heightInMeters;
- (void)setHeightInMeters:(float)h;
- (int)weightInKilos;
- (void)setWeightInKilos:(int)w;

// Person 类拥有计算 Body Mass Index 的方法
- (float)bodyMassIndex;
- (void)testTwoArgs:(int)arg1 arg2:(NSString *)arg2;

@end

NS_ASSUME_NONNULL_END
