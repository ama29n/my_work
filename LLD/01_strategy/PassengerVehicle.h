#include "Vehicle.h"
#include "strategy/NormalDrive.h"

class PassengerVehicle : public Vehicle {
public:
    PassengerVehicle() : Vehicle(new NormalDrive()) {
        
    }
};
