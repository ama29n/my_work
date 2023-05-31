#include <bits/stdc++.h >
using namespace std;

// Buffer
queue<int> buffer;
int buffer_capacity = 10;
int buffer_size = 0;

// Producer Function
void producer(int val) {
    while(val) {
        while(buffer_capacity == buffer_size);
        buffer_size++;
        buffer.push(val);
        cout << "Producer produced: " << val << endl;
        val--;
    }
}

// Consumer Function
void consumer() {
    while(true) {
        while(buffer_size == 0);
        buffer_size--;
        int x = buffer.front();
        buffer.pop();
        cout << "Consumer consumed: " << x << endl;
        if(x == 1) {
            break;
        }
    }
}

int main() {
    thread t1(producer, 10);
    thread t2(consumer);
    t1.join();
    t2.join();
}