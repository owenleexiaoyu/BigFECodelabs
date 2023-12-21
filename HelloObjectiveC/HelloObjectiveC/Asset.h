//
//  Asset.h
//  HelloObjectiveC
//
//  Created by Owen on 2023/12/2.
//

#import <Foundation/Foundation.h>
@class Employee;

NS_ASSUME_NONNULL_BEGIN

@interface Asset : NSObject

@property (nonatomic, copy) NSString *label;
@property (nonatomic) unsigned int resaleValue;

@property (nonatomic, weak) Employee *holder;

@end

NS_ASSUME_NONNULL_END
