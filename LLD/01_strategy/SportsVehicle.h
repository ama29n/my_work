#include "Vehicle.h"
#include "strategy/SpecialDrive.h"

class SportsVehicle : public Vehicle {
public:
    SportsVehicle() : Vehicle(new SpecialDrive) {
        
    }
};
