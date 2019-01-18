const PIN = require("../rpi-pins");

const GPIO = new PIN.GPIO();
GPIO.setPin(27, PIN.MODE.OUTPUT);
GPIO.setPin(31, PIN.MODE.INPUT);

GPIO.setPin(23, PIN.MODE.PWM_OUTPUT);

GPIO.pullControl(31, PIN.MODE.PULL_UP);

function checkSetLedState() {
    if (GPIO.read(31)) {
        GPIO.write(27, PIN.MODE.HIGH);
    } else if (!GPIO.read(31)) {
        GPIO.write(27, PIN.MODE.LOW);
    }
}

for (let o = 0; o < 5; o++) {
    for (let i = 0; i < 1025; i++) {
        checkSetLedState();

        GPIO.pwm(23, i);
        console.log(i);
        GPIO.wait(1);
    }

    for (let i = 1024; i >= 0; i--) {
        checkSetLedState();

        GPIO.pwm(23, i);
        console.log(i);
        GPIO.wait(1);
    }
}