const PIN = require("../rpi-pins");

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