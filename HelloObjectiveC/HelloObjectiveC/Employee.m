//
//  Employee.m
//  HelloObjectiveC
//
//  Created by Owen on 2023/11/27.
//

#import "Employee.h"
#import "Asset.h"

@interface Employee() {
    NSMutableArray *_assets;
}
@property (nonatomic) unsigned int officeAlarmCode;

@end

@implementation Employee

- (void)setAssets:(NSArray *)assets {
    _assets = [assets mutableCopy];
}

- (NSArray *)assets {
    return [_assets copy];
}

- (double)yearOfEmployment {
    if (self.hireDate) {
        NSDate *now = [NSDate date];
        NSTimeInterval intervalInSec = [now timeIntervalSinceDate:self.hireDate];
        return intervalInSec / 31557600.0;
    } else {
        return 0;
    }
}

// 覆盖父类中的方法实现
- (float)bodyMassIndex {
    return [super bodyMassIndex] * 0.8;
}

- (NSString *)description {
    NSString *desc = [NSString stringWithFormat:@"<Employee %d: $%d in assets>", self.employeeId, [self valueOfAssets]];
    return desc;
}

- (void)addAsset:(Asset *)a {
    if (!_assets) {
        _assets = [[NSMutableArray alloc] init];
    }
    [_assets addObject:a];
    a.holder = self;
}

- (unsigned int)valueOfAssets {
    unsigned int sum = 0;
    for (Asset *a in _assets) {
        sum += a.resaleValue;
    }
    return sum;
}

- (void)dealloc {
    NSLog(@"Employee deallocating %@", self);
}

@end
