//
//  PersonWithProperties.m
//  HelloObjectiveC
//
//  Created by Owen on 2023/11/27.
//

#import "PersonWithProperties.h"

@implementation PersonWithProperties

- (float)bodyMassIndex {
    float h = [self heightInMeters];
    return _weightInKilos / (h * h);
}

@end
