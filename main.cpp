#include <nan.h>
#include <wiringPi.h>

NAN_METHOD(Init)
{
  info.GetReturnValue().Set(wiringPiSetup());
}

NAN_METHOD(SetOut)
{
  pinMode(info[0]->NumberValue(), OUTPUT);
}

NAN_METHOD(SetIn)
{
  pinMode(info[0]->NumberValue(), INPUT);
}

NAN_METHOD(On)
{
  digitalWrite(info[0]->NumberValue(), HIGH);
}

NAN_METHOD(Off)
{
  digitalWrite(info[0]->NumberValue(), LOW);
}

NAN_METHOD(In)
{
  info.GetReturnValue().Set(digitalRead(info[0]->NumberValue()));
}

NAN_METHOD(PullUp)
{
  pullUpDnControl(info[0]->NumberValue(), PUD_UP);
}

NAN_METHOD(PullDown)
{
  pullUpDnControl(info[0]->NumberValue(), PUD_DOWN);
}

NAN_METHOD(PullOff)
{
  pullUpDnControl(info[0]->NumberValue(), PUD_OFF);
}

NAN_MODULE_INIT(InitModule)
{
  NAN_EXPORT(target, Init);

  NAN_EXPORT(target, SetOut);
  NAN_EXPORT(target, SetIn);

  NAN_EXPORT(target, On);
  NAN_EXPORT(target, Off);

  NAN_EXPORT(target, In);

  NAN_EXPORT(target, PullUp);
  NAN_EXPORT(target, PullDown);
  NAN_EXPORT(target, PullOff);
}

NODE_MODULE(GPIO, InitModule);