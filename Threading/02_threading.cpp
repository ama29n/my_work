#include <bits/stdc++.h>
#include <chrono>
#include <algorithm>

using namespace std;
using namespace std::chrono;

typedef long long int ll;

ll sum1 = 0, sum2 = 0;

void even_sum(int start, int end) {
    for(int i = start; i < end; i++) {
        if(i % 2 == 0) sum1 += i;
    }
}

void odd_sum(int start, int end) {
    for(int i = start; i < end; i++) {
        if(i % 2 != 0) sum2 += i;
    }
}

int main() {
    auto start_time = high_resolution_clock::now();

    std::thread t1(even_sum, 0, 1000000);
    std::thread t2(odd_sum, 0, 1000000);
    
    t1.join(); t2.join();

    cout << sum1 << endl << sum2 << endl;
    
    auto end_time = high_resolution_clock::now();
    auto duration = duration_cast<microseconds>(end_time - start_time);
    cout << duration.count();
}

// WORKING

// even_sum() is called using new thread t1
// odd_sum() is called using new thread t2
// In defualt scenerio 1st even_sum() completes it's execution and then odd_sum is called
// However, here both run concurrently and t1.join() waits for t1 thread to finish execution
// t2.join() waits for t2 thread to finish execution
// Final result is produced 