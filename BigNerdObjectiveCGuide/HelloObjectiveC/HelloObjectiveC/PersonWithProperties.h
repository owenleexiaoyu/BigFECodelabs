//
//  PersonWithProperties.h
//  HelloObjectiveC
//
//  Created by Owen on 2023/11/27.
//

#import <Foundation/Foundation.h>
#import "Constant.h"

NS_ASSUME_NONNULL_BEGIN

@interface PersonWithProperties : NSObject

@property (nonatomic) float heightInMeters;
@property (nonatomic) int weightInKilos;
@property (nonatomic) enum FruitILike fruitILike;

- (float)bodyMassIndex;

@end

NS_ASSUME_NONNULL_END
