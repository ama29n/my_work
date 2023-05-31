#include <bits/stdc++.h>
#include <chrono>
using namespace std;

// NOTES 
// 1. This is used to detach newly created thread from the parent thread.
// 2. Always check before detaching if the thread is joinable otherwise we may end up double detaching and double detach()
//    may result into program termination.
// 3. If we have a detached thread and main method is retruning then the detached thread execution is suspended.

void run(int count) {
    for(int i = 1; i <= count; i++) {
        cout << i << endl;
    }
    std::this_thread::sleep_for(chrono::seconds(3));
}

int main() {
    cout << "Before" << endl;
    thread t1(run, 10);
    t1.detach();
    cout << "After 3 seconds";
}

// Output 
// Before
// After 3 seconds 

// It didn't wait for the t1 thread to finsish execution