#include <bits/stdc++.h>
using namespace std;

// NOTE
// If we create multiple threads at the same time, there is no mechanism to make sure which thread runs first

// 1. Function Pointer
void print(int x) {
    for(int i = 1; i < 10; i++) {
        cout << x << " * " << i << " = " << x * i << endl;
    }
}
int main() {
    std::thread t1(print, 1);
    std::thread t2(print, 2);
    std::thread t3(print, 3);
    std::thread t4(print, 4);
    std::thread t5(print, 5);
    std::thread t6(print, 6);
    std::thread t7(print, 7);
    std::thread t8(print, 8);
    std::thread t9(print, 9);
    t1.join();
    t2.join();
    t3.join();
    t4.join();
    t4.join();
    t5.join();
    t6.join();
    t7.join();
    t8.join();
    t9.join();
}