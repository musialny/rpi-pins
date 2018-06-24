# rpi-pins
Raspberry Pi GPIO Pins + GPIO Interfaces in Node.js

## Install

Install the package using npm:

    npm install rpi-pins --save

Package require wiring pi, to check if exist enter 

    gpio -v

If command not exist install wiring pi using 

    sudo apt-get install wiringpi

## Usage
rpi-pins using wiring pi pin numeration

    const PIN = require("rpi-pins");

    const GPIO = new PIN.GPIO();
    GPIO.SetPin(27, PIN.MODE.OUTPUT);
    GPIO.SetPin(31, PIN.MODE.INPUT);

    GPIO.PullControl(31, PIN.MODE.PULL_UP);

    if (GPIO.Read(31))
    {
        GPIO.Write(27, PIN.MODE.HIGH);
    }
    else if (!GPIO.Read(31))
    {
        GPIO.Write(27, PIN.MODE.LOW);
    }
    
**Import rpi-pins**

    const PIN = require("rpi-pins");
    
**Create instance of GPIO class**

    const GPIO = new PIN.GPIO();
    
**Set pin mode**

    GPIO.SetPin(pinNumber, pinMode);
    
pinMode:

    PIN.MODE.OUTPUT
    PIN.MODE.INPUT
    
**Pull Up or Pull Down input pin**

    GPIO.PullControl(pinNumber, pullMode);
    
pullMode:

    PIN.MODE.PULL_UP
    PIN.MODE.PULL_DOWN
    PIN.MODE.PULL_OFF
    
**Read input pin state**

    var state = GPIO.Read(pin);
    
**Write output pin state**

    GPIO.Write(pinNumber, pullMode);
    
pinMode:

    PIN.MODE.OUTPUT
    PIN.MODE.INPUT

## License

    MIT
