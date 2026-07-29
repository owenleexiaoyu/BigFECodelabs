//
//  Employee.h
//  HelloObjectiveC
//
//  Created by Owen on 2023/11/27.
//

#import <Foundation/Foundation.h>
#import "PersonWithProperties.h"
@class Asset; // 使用 @class 加快文件处理速度

NS_ASSUME_NONNULL_BEGIN

@interface Employee : PersonWithProperties
//{
//    NSMutableArray *_assets;
//}

@property (nonatomic) unsigned int employeeId;
@property (nonatomic) NSDate *hireDate;
@property (nonatomic, copy) NSArray *assets;

- (double)yearOfEmployment;
- (void)addAsset:(Asset *)a;
- (unsigned int)valueOfAssets;

@end

NS_ASSUME_NONNULL_END
