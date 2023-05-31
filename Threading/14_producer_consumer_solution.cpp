#include <bits/stdc++.h >
using namespace std;

std::mutex m;
std::condition_variable cv;

// Buffer
queue<int> buffer;
int buffer_capacity = 10;
int buffer_size = 0;

// Producer Function
void producer(int val) {
    while(val) {
        std::unique_lock<std::mutex> lock(m);
        cv.wait(lock, []() {
            return buffer_size < buffer_capacity;
        });
        buffer_size++;
        buffer.push(val);
        cout << "Producer produced: " << val << endl;
        val--;
        lock.unlock();
        cv.notify_one();
    }
}

// Consumer Function
void consumer() {
    while(true) {
        std::unique_lock<std::mutex> lock(m);
        cv.wait(lock, []() {
            return buffer_size > 0;
        });
        buffer_size--;
        int x = buffer.front();
        buffer.pop();
        cout << "Consumer consumed: " << x << endl;
        if(x == 1) {
            break;
        }
        lock.unlock();
        cv.notify_one();
    }
}

int main() {
    thread t1(producer, 100);
    thread t2(consumer);
    t1.join();
    t2.join();
}