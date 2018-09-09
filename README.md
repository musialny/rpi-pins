# rpi-pins
Raspberry Pi GPIO Pins

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

    PIN.MODE.INPUT
    PIN.MODE.OUTPUT
    PIN.MODE.PWM_OUTPUT
    
**Pull Up or Pull Down input pin**

    GPIO.PullControl(pinNumber, pullMode);
    
pullMode:

    PIN.MODE.PULL_UP
    PIN.MODE.PULL_DOWN
    PIN.MODE.PULL_OFF
    
**Read input pin state**

    var state = GPIO.Read(pin);
    
**Write output pin state**

    GPIO.Write(pinNumber, pinMode);
    
pinMode:

    PIN.MODE.HIGH
    PIN.MODE.LOW

**Write PWM output pin state**

    GPIO.PWM(pinNumber, value);

PWM value range is 0-1024.
Check which pins in your Raspberry Pi have PWM output.
If you using PWM, you have to run node/npm as sudo.

## License

    MIT
