#include <iostream>

#include "AlertObserver.h"
#include "../observable/StockObservable.h"

using namespace std;

class EmailAlertObserver : public AlertObserver {
private:
    StockObservable *stockItemObj;
public:

    // Default Constructor
    EmailAlertObserver() {

    }

    // Constructor Injection
    EmailAlertObserver(StockObservable *obj) {
        stockItemObj = obj;

        // Add the observer to observable's list
        stockItemObj->add(this);
    }

    // method to get updates from observable
    void update() override {
        int count = stockItemObj->getUpdate();
        cout << "Email: Available Iphones = " << count << endl;
    }
};