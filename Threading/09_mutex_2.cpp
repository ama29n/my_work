#include <bits/stdc++.h>
#include <chrono>
#include <mutex>
using namespace std;

std::mutex m;

void run(int n, int x) {
    // m.lock();
    for(int i = 1; i <= n; i++) {
        cout << x;
        if(i == 5 && x == 1) {
            std::this_thread::sleep_for(chrono::seconds(2));
        }
    }
    // m.unlock();
}

int main() {
    thread t1(run, 10, 1);
    thread t2(run, 10, 2);
    t1.join();
    t2.join();
}