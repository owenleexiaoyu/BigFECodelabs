//
//  NetworkRequestDelegate.m
//  HelloOC
//
//  Created by ByteDance on 2023/12/5.
//

#import "NetworkRequestDelegate.h"

@interface NetworkRequestDelegate() {
    NSMutableData *_incomingData;
}

@end

@implementation NetworkRequestDelegate

- (void)connection:(NSURLConnection *)connection didReceiveData:(NSData *)data {
    NSLog(@"receive data, size: %lu", [data length]);
    if (!_incomingData) {
        _incomingData = [[NSMutableData alloc] init];
    }
    [_incomingData appendData:data];
}

- (void)connectionDidFinishLoading:(NSURLConnection *)connection {
    NSLog(@"finish receive data, total size: %lu", [_incomingData length]);
    NSError *error;
    NSString *imagePath = [@"~/Desktop/ash.png" stringByExpandingTildeInPath];
    BOOL writen = [_incomingData writeToFile:imagePath options:0 error:&error];
    if (!writen) {
        NSLog(@"Write image to file fail, error: %@", [error localizedDescription]);
        return;
    }
    NSLog(@"Write image to file success");
    _incomingData = nil;
}

- (void)connection:(NSURLConnection *)connection didFailWithError:(NSError *)error {
    NSLog(@"Connection failed, error: %@", [error localizedDescription]);
    _incomingData = nil;
}

@end
