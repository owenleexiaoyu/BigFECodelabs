//
//  14_io.m
//  HelloOC
//
//  Created by ByteDance on 2023/12/5.
//

//#import <Foundation/Foundation.h>
//
//int main(int argc, const char *argv[]) {
//    @autoreleasepool {
        // Write NSString content to file
//        NSMutableString *str = [[NSMutableString alloc] init];
//        for (int i = 0; i < 10; i++) {
//            [str appendString:@"Owen is good\n"];
//        }
//        NSString *path = [@"~/Desktop/test_oc_io.txt" stringByExpandingTildeInPath];
//        NSLog(@"Path is: %@", path);
//        NSError *error;
//        BOOL success = [str writeToFile:path
//                             atomically:YES
//                               encoding:NSUTF8StringEncoding
//                                  error:&error];
//        if (success) {
//            NSLog(@"Done write file");
//        } else {
//            NSLog(@"Error happen when writing file, %@", [error localizedDescription]);
//        }
        
        // Read file content to NSString
//        NSError *error;
//        NSString *path = [@"~/Desktop/test_oc_io.txt" stringByExpandingTildeInPath];
//        NSString *str = [[NSString alloc] initWithContentsOfFile:path encoding:NSUTF8StringEncoding error:&error];
//        if (!str) {
//            NSLog(@"Read file fail, error: %@", [error localizedDescription]);
//        } else {
//            NSLog(@"Read file success, result: %@", str);
//        }
        
        // NSData write to file
//        NSURL *url = [NSURL URLWithString:@"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgS7YYO_8EGOv5dsIg44rMwLFyk4-J3XDlbObe3NGV6RDskGr0-Nn_7M3VK-PCPV7MIBiNUHSVk9eHaCpWsjruciZ7jqO8yHU65uLHD7946nun6Yp-W3NjgXL84tdQ_-ehQ0PftUY8M9rWc88j-Csm7HACTUIdk4V_FXAw2ZRdi6Lx7FLggmsnRu8gHf2k/s1600/Social-%20Android-Studio-Hedgehog.png"];
//        NSURLRequest *request = [NSURLRequest requestWithURL:url];
//        NSError *error;
//        NSData *imageData = [NSURLConnection sendSynchronousRequest:request returningResponse:NULL error:&error];
//        if (!imageData) {
//            NSLog(@"Fetch image failed, error: %@", [error localizedDescription]);
//            return 1;
//        }
//        NSLog(@"Fetch image success, file size: %lu bytes", [imageData length]);
//        NSString *imagePath = [@"~/Desktop/ash.png" stringByExpandingTildeInPath];
//        BOOL writen = [imageData writeToFile:imagePath options:0 error:&error];
//        if (!writen) {
//            NSLog(@"Write image to file fail, error: %@", [error localizedDescription]);
//            return 1;
//        }
//        NSLog(@"Write image to file success");
//        NSData *localmageData = [NSData dataWithContentsOfFile:imagePath];
//        NSLog(@"Get local image data success, file size: %lu bytes", [localmageData length]);
//    }
//    return 0;
//}
