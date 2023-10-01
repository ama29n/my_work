#include <bits/stdc++.h>

#include "DriveStrategy.h"

using namespace std;

class SpecialDrive : public DriveStrategy {
public:
    void drive() override {
        cout << "Special Drive Implimenting Drive Strategy" << endl;
    }
};
