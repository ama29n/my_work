#include <bits/stdc++.h>
using namespace std;

// 3. Non static member function of a class
class Base {
    public:
    void fn(int x) {
        for(int i = 0; i < x; i++) {
            cout << i << " ";
        }
    }
    static void func(int x) {
        for(int i = 0; i < x; i++) {
            cout << i << " ";
        }
    }
};

int main() {
    Base obj;
    int x = 9;
    std::thread t1(&Base::fn, &obj, x);
    t1.join();
}

// 4. Static member functions of a class

int main() {
    std::thread t1(&Base::func, 8);
    t1.join();
}