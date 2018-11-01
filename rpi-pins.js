const PINS = require("./build/Release/GPIO");

const HIGH = 1;
const LOW = 0;

const INPUT = 1;
const OUTPUT = 0;
const PWM_OUTPUT = 2;

const PULL_UP = 1;
const PULL_DOWN = 0;
const PULL_OFF = 2;

class GPIO {
    constructor() {
        let result = PINS.Init();
        if (result < 0)
            throw new Error("GPIO Init exit with code: " + result);
    }

    SetPin(pin, mode) {
        if(arguments.length >= 2) {
            if (Number.isInteger(pin) && Number.isInteger(mode)) {
                if (mode == 1)
                    PINS.SetIn(pin);
                else if (mode == 0)
                    PINS.SetOut(pin);
                else if (mode == 2)
                    PINS.SetPWM(pin);
            } else
                throw new Error("SetPin: Argument(s) have to be integer!");
        } else
            throw new Error("SetPin: Too few arguments!");
    }

    Write(pin, state) {
        if(arguments.length >= 2) {
            if (Number.isInteger(pin) && Number.isInteger(state)) {
                if (state == 1)
                    PINS.On(pin);
                else if (state == 0)
                    PINS.Off(pin);
            } else
                throw new Error("Write: Argument(s) have to be integer!");
        } else
            throw new Error("Write: Too few arguments!");
    }

    Read(pin) {
        if(arguments.length >= 1) {
            if (Number.isInteger(pin)) {
                return PINS.In(pin);
            } else
                throw new Error("Read: Argument have to be integer!");
        } else
            throw new Error("Read: Too few arguments!");
    }

    PullControl(pin, mode) {
        if(arguments.length >= 2) {
            if (Number.isInteger(pin) && Number.isInteger(mode)) {
                if (mode == 1)
                    PINS.PullUp(pin);
                else if (mode == 0)
                    PINS.PullDown(pin);
                else if (mode == 2)
                    PINS.PullOff(pin);
            } else
                throw new Error("PullControl: Argument(s) have to be integer!");
        } else
            throw new Error("PullControl: Too few arguments!");
    }

    PWM(pin, value) {
        if(arguments.length >= 2) {
            if (Number.isInteger(pin) && Number.isInteger(value)) {
                PINS.PWM(pin, value);
            } else
                throw new Error("PWM: Argument(s) have to be integer!");
        } else
            throw new Error("PWM: Too few arguments!");
    }

    Wait(ms) {
        if(arguments.length >= 1) {
            if (Number.isInteger(ms)) {
                PINS.Wait(ms);
            } else
                throw new Error("Wait: Argument have to be integer!");
        } else
            throw new Error("Wait: Too few arguments!");
    }
}

class MODE {
    constructor() {}

    static get HIGH() {
        return HIGH;
    }    
    static get LOW() {
        return LOW;
    }

    static get INPUT() {
        return INPUT;
    }    
    static get OUTPUT() {
        return OUTPUT;
    }
    static get PWM_OUTPUT() {
        return PWM_OUTPUT;
    }


    static get PULL_UP() {
        return PULL_UP;
    }
    static get PULL_DOWN() {
        return PULL_DOWN;
    }
    static get PULL_OFF() {
        return PULL_OFF;
    }
}

exports.GPIO = GPIO;
exports.MODE = MODE;