//
//  Behavior.h
//  HelloObjectiveC
//
//  Created by Owen on 2023/12/3.
//

#ifndef Behavior_h
#define Behavior_h

@protocol Behavior <NSObject>

@required
- (void)eat;
- (void)drink;


@optional;
- (void)sayHello;
- (int)calculate:(int)arg1 arg2:(int)arg2;


@end

#endif /* Behavior_h */
