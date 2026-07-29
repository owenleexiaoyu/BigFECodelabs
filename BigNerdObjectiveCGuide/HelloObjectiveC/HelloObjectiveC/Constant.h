//
//  Constant.h
//  HelloObjectiveC
//
//  Created by Owen on 2023/12/3.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

extern const NSString *ConstantApple;

// 枚举常规的定义
//enum FruitILike {
//    Apple = 1,
//    Banana = 2,
//    Orange = 3,
//};

//enum FruitILike {
//    Apple,
//    Banana=9,
//    Orange,
//};

//enum FruitILike {
//    Apple = 'a',
//    Banana,
//    Orange,
//};

typedef NS_ENUM(char, FruitILike) {
    Apple,
    Banana,
    Orange,
};


//typedef enum {
//    Apple = 1,
//    Banana = 2,
//    Orange = 3,
//} FruitILike;

@interface Constant : NSObject

@end

NS_ASSUME_NONNULL_END
