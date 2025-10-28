---
title: Произвольные окна
layout: default
---
# FAQ по UI и .Net 
Если [диалоговых окон iikoFront API](ViewManager.html "ViewManager") недостаточно, плагин может показывать собственные окна, однако, необходимо учитывать некоторые нюансы.

Во-первых, хост-процесс плагина по умолчанию не содержит необходимого для UI [STA-потока](https://msdn.microsoft.com/library/ms809971.aspx "Understanding and Using COM Threading Models"). Плагин должен создать его самостоятельно. Пример кода:

```cs
ctor()
{
    var windowThread = new Thread(EntryPoint);
    windowThread.SetApartmentState(ApartmentState.STA);
    windowThread.Start();
}
...
private void EntryPoint()
{
    Window window = new MyWindow();
    window.ShowDialog();
}
```

Во-вторых, открытое фоновым процессом окно по умолчанию не имеет фокуса, поэтому события ввода будут направлены прежнему активному окну (то есть окну iikoFront). По [задумке](https://devblogs.microsoft.com/oldnewthing/20090220-00/?p=19083 "Foreground activation permission is like love: You can’t steal it, it has to be given to you") Microsoft, приложение не может стать активным само по себе, эстафету ему может передать только предыдущее активное окно, либо фокус может назначить пользователь. Однако, последнее можно имитировать программно:
```cs
public static void ClickWindow(Window wnd)
{
    try
    {
        var wih = new WindowInteropHelper(wnd);
        WinApi.RECT rect;
        WinApi.GetWindowRect(new HandleRef(wnd, wih.Handle), out rect);
        var x = rect.Left + (rect.Right - rect.Left) / 2;
        var y = rect.Top + (rect.Bottom - rect.Top) / 4;
        WinApi.LeftMouseClick(x, y);
    }
    catch (Exception) { }
}
```

В-третьих, окно плагина, будучи независимым окном, может оказаться позади окна iikoFront. Режим отображения поверх всех окон — тоже [не панацея](https://social.msdn.microsoft.com/Forums/en-US/fb4a7d5f-c98b-461f-a527-7d5dd4cd03e6/multiple-topmost-windows?forum=wpf "Multiple Topmost Windows"), потому что могут быть и другие topmost-окна (в том числе само приложение iikoFront). Плагин может привязать своё окно как дочернее к окну iikoFront через WinApi-функцию `SetParent`. Хотя в API не публикуется hwnd фронтового окна, плагин может самостоятельно его [найти](https://stackoverflow.com/questions/10676649/attach-window-to-window-of-another-process).




