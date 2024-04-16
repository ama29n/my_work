#include <bits/stdc++.h>
#include <chrono>
#include <mutex>
using namespace std;

// Mutex is used to avoid race condition

std::mutex m;

int amount = 0;

void run(int n) {
    // m.lock();
    for(int i = 1; i <= n; i++) {
        amount++;
    }
    // m.unlock();
}

int main() {
    thread t1(run, 100000);
    thread t2(run, 100000);
    t1.join();
    t2.join();
    cout << amount;
}