#include <bits/stdc++.h>
#include <chrono>
#include <algorithm>

// In every C++ program, there is a default thread which is main(), in which we can create other threads.

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

    even_sum(0, 1000000);
    odd_sum(0, 1000000);

    cout << sum1 << endl << sum2 << endl;
    
    auto end_time = high_resolution_clock::now();
    auto duration = duration_cast<microseconds>(end_time - start_time);
    cout << duration.count();
}