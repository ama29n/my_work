#include "strategy/DriveStrategy.h"

class Vehicle {
public:
    DriveStrategy *driveObj;
    Vehicle() {

    }
    Vehicle(DriveStrategy *_driveObj) {
        driveObj = _driveObj;
    }
    void drive() {
        driveObj->drive();
    }
};
