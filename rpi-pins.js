const PINS = require("./build/Release/GPIO");

const HIGH = 1;
const LOW = 0;

const INPUT = 1;
const OUTPUT = 0;

const PULL_UP = 1;
const PULL_DOWN = 0;
const PULL_OFF = 2;

class GPIO 
{
    constructor()
    {
        PINS.Init();
        /*if (PINS.Init() > -1)
            return true;
        else
            return false;*/
    }

    SetPin(pin, mode)
    {
        if (mode == 1)
            PINS.SetIn(pin);
        else if (mode == 0)
            PINS.SetOut(pin);
    }

    Write(pin, state)
    {
        if (state == 1)
            PINS.On(pin);
        else if (state == 0)
            PINS.Off(pin);
    }

    Read(pin)
    {
        return PINS.In(pin);
    }

    PullControl(pin, mode)
    {
        if (mode == 1)
            PINS.PullUp(pin);
        else if (mode == 0)
            PINS.PullDown(pin);
        else if (mode == 2)
            PINS.PullOff(pin);
    }
}

class MODE
{
    constructor() {}

    static get HIGH()
    {
        return HIGH;
    }    
    static get LOW()
    {
        return LOW;
    }

    
    static get INPUT()
    {
        return INPUT;
    }    
    static get OUTPUT()
    {
        return OUTPUT;
    }


    static get PULL_UP()
    {
        return PULL_UP;
    }
    static get PULL_DOWN()
    {
        return PULL_DOWN;
    }
    static get PULL_OFF()
    {
        return PULL_OFF;
    }
}

exports.GPIO = GPIO;
exports.MODE = MODE;