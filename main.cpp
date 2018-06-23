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

NAN_METHOD(on)
{
  digitalWrite(info[0]->NumberValue(), HIGH);

  info.GetReturnValue().Set(Nan::Undefined());
}

NAN_METHOD(off)
{
  digitalWrite(info[0]->NumberValue(), LOW);

  info.GetReturnValue().Set(Nan::Undefined());
}

NAN_MODULE_INIT(InitModule)
{
  NAN_EXPORT(target, Init);
  NAN_EXPORT(target, SetOut);
  NAN_EXPORT(target, on);
  NAN_EXPORT(target, off);
}

NODE_MODULE(GPIO, InitModule);