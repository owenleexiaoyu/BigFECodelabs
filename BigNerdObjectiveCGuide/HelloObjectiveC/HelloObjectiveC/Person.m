//
//  Person.m
//  HelloObjectiveC
//
//  Created by Owen on 2023/11/26.
//

#import "Person.h"

@implementation Person

- (float)heightInMeters {
    return _heightInMeters;
}

- (void)setHeightInMeters:(float)h {
    _heightInMeters = h;
}

- (int)weightInKilos {
    return _weightInKilos;
}

- (void)setWeightInKilos:(int)w {
    _weightInKilos = w;
}

- (float)bodyMassIndex {
    float h = [self heightInMeters];
    return _weightInKilos / (h * h);
}

- (void)testTwoArgs:(int)arg1 arg2:(nonnull NSString *)arg2 {
    NSLog(@"arg1 = %d, arg2 = %@", arg1, arg2);
}

- (void)eat {
    NSLog(@"Person eat");
}

- (void)drink {
    NSLog(@"Person drink");
}

- (void)sayHello {
    NSLog(@"Person say hello");
}


@end
