#include <bits/stdc++.h>
#include <mutex>
using namespace std;

// NOTE
// 1. The class unique_lock is a mutex ownership locker.
// 2. It allows:
//      a. different locking strategies.
//      b. time-constrained attempts at locking (try_lock, try_lock_until).
//      c. recursive locking.
//      d. transfer of lock ownership (move not copy).
//      e. condition variables

// LOCKING STRATEGIES
// 1. defer_lock        do not acquire ownership of mutex.
// 2. try_to_lock       try to acquire ownership of the mutex without blocking.
// 3. adopt_lock        assume the calling thread already has ownership of the mutex.

std::mutex m;

int buffer = 0;

// EXAMPLE 1
class A {
    public:
    void run(int l, int r) {
        std::unique_lock<mutex> lock(m1);
        for(int i = l; i <= r; i++) {
            buffer++;
        }
    }
    int main() {
        thread t1(run, 1, 1000000);
        thread t2(run, 1, 1000000);
        t1.join();
        t2.join();
        cout << buffer << endl;
    }
};

// EXAMPLE 2 
void run(int l, int r) {
    std::unique_lock<mutex> lock(m1, std::defer_lock); // It does not lock the mutex
    lock.lock();
    // lock.try_lock(chrono::seconds(2));
    // lock.try_lock_until(chrono::seconds(2));
    for(int i = l; i <= r; i++) {
        buffer++;
    }
    // lock.unlock(); // No need as it will automatically happen when it goes out of scope
}

int main() {
    thread t1(run, 1, 1000000);
    thread t2(run, 1, 1000000);
    t1.join();
    t2.join();
    cout << buffer << endl;
}