#include <bits/stdc++.h>
#include <mutex>
using namespace std;

// NOTE
// 1. It is a very light wrapper for owning mutex on scoped basis.
// 2. It acquires mutex lock the moment the object of lock_guard is created.
// 3. It automatically removes the lock while it goes out of scope.
// 4. lock_guard cannot be explicitly unlocked.
// 5. lock_guard cannot be copied.

std::mutex m;

int buffer = 0;

void run(int l, int r) {
    // m.lock();
    std::lock_guard<mutex> lock(m);
    for(int i = l; i <= r; i++) {
        buffer++;
    }
    // m.unlock();
}

int main() {
    thread t1(run, 1, 1000000);
    thread t2(run, 1, 1000000);
    t1.join();
    t2.join();
    cout << buffer << endl;
}