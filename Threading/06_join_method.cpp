#include <bits/stdc++.h>
#include <chrono>
using namespace std;

// NOTES 
// 1. Once a thread is started, we wait for it to finish execution by calling join() method on thread object.
// 2. Using double join will throw an error and terminate the program. 
// 3. If needed to use join again, we should check if the thread is joinable before joining using joinable() method.

void run(int count) {
    for(int i = 1; i <= count; i++) {
        cout << i << endl;
    }
    std::this_thread::sleep_for(chrono::seconds(3));
}

int main() {
    cout << "Before" << endl;
    thread t1(run, 10);
    t1.join();
    if(t1.joinable()) {
        t1.join();
    }
    cout << "After 3 seconds";
}