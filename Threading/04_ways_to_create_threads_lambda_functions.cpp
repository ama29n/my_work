#include <bits/stdc++.h>
using namespace std;

// 2. Lambda Functions

int main() {
    auto fn = [](int x) {
        for(int i = 0; i < x; i++) {
            cout << i << " ";
        }
    };
    std::thread t1(fn, 10);
    t1.join();
}

// NOTE 
// We can directly inject Lambda at thread creation time

int main() {
    std::thread t1([](int x) {
        for(int i = 0; i < x; i++) {
            cout << i << " ";
        }
    }, 10);
    t1.join();
}
