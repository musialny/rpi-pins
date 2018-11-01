const PIN = require("../rpi-pins");

const GPIO = new PIN.GPIO();
GPIO.SetPin(27, PIN.MODE.OUTPUT);
GPIO.SetPin(31, PIN.MODE.INPUT);

GPIO.SetPin(23, PIN.MODE.PWM_OUTPUT);

GPIO.PullControl(31, PIN.MODE.PULL_UP);

if (GPIO.Read(31)) {
    GPIO.Write(27, PIN.MODE.HIGH);
} else if (!GPIO.Read(31)) {
    GPIO.Write(27, PIN.MODE.LOW);
}

for (let o = 0; o < 5; o++) {
    for (let i = 0; i < 1025; i++) {
        GPIO.PWM(23, i);
        console.log(i);
        GPIO.Wait(1);
    }

    for (let i = 1024; i >= 0; i--) {
        GPIO.PWM(23, i);
        console.log(i);
        GPIO.Wait(1);
    }
}