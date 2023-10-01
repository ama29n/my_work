#include "Vehicle.h"
#include "strategy/SpecialDrive.h"

class OffroadVehicle : public Vehicle {
public:
    OffroadVehicle() : Vehicle(new SpecialDrive()) {
        
    }
};
