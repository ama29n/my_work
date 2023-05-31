#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
using namespace std;

// NOTE: CV are used for 2 purposes
// 1. Notify other threads
// 2. Wait for some conditions

// A. CV allow running threads to wait on some condition and once it is met, the waiting thread
//    is notified using:
//      a. notify_one()
//      b. notify_all()
// B. mutex is needed to use condition variable/
// C. If some thread has to be waited on some condition, then:
//      a. Acquire the mutex lock using std::unique_lock<std::mutex> lock(m).
//      b. Execute wait(), wait_for() or wait_until(). The wait operation atomically releases the mutex and suspends 
//         execution of the thread.
//      c. When the CV is notified, the thread is awakened and the mutex is automatcially acquired.

// CV are used to synchronise 2 or more threads.


std::condition_variable cv;
std::mutex m;

long balance = 0;

void addMoney(int money) {
    std::lock_guard<mutex> lg(m);
    balance += money;
    cout << "Amount Added Successfully, Balance: " << balance << endl;
    cv.notify_one();
}

void withdrawMoney(int money) {
    std::unique_lock<mutex> ul(m);
    cv.wait(ul, [] {
        cout << "Wait thread" << endl;
        return balance != 0 ? true : false;
    });
    if(balance >= money) {
        balance -= money;
        cout << "Amount Withdrawn Successfully, Balance: " << balance << endl;
    } else {
        cout << "Not Sufficient Balance" << endl;
    }
}

int main() {
    thread t1(withdrawMoney, 250);
    thread t2(addMoney, 500);
    t1.join();
    t2.join();
}