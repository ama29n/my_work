#include "strategy/DriveStrategy.h"

class Vehicle {
private:
    DriveStrategy *driveObj;
public:  
    Vehicle() {

    }

    // Constructor Injection
    Vehicle(DriveStrategy *_driveObj) {
        driveObj = _driveObj;
    }

    void drive() {
        driveObj->drive();
    }
};
