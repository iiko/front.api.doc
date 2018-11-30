---
title: FAQ по UI и .Net
layout: default
---
# FAQ по UI и .Net 
Если [диалоговых окон iikoFront API](ViewManager.md "ViewManager") недостаточно, плагин может показывать собственные окна, однако, необходимо учитывать некоторые нюансы.

Во-первых, по умолчанию в процессе плагина нет [STA-потока](https://msdn.microsoft.com/library/ms809971.aspx "Understanding and Using COM Threading Models"). Вам нужно его явно инициализировать. Пример кода:

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

Во-вторых, т.к. плагин это отдельный процесс, по умолчанию показанное из плагина окно не приобретает фокус. Фокус окну может быть дан только в явном виде под контролем ОС. Есть разные способы решить задачу форсированного назначения фокуса окну. Вот один из них:
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
Но тут стоит иметь ввиду, что окно плагина может оказаться под окном iikoFront.

В-третьих, т.к. iikoFront запускается как topmost window, [есть нюансы](https://social.msdn.microsoft.com/Forums/en-US/fb4a7d5f-c98b-461f-a527-7d5dd4cd03e6/multiple-topmost-windows?forum=wpf "Multiple Topmost Windows") с показом диалоговых окон поверх iikoFront.
Можно попробовать цеплять окно плагина как дочернее к окну iikoFront через winapi-функцию `SetParent`. API не дает возможности получить hwnd фронтового окна. Но плагин может самостоятельно его вычислять. См. [stackoverflow](https://stackoverflow.com/questions/10676649/attach-window-to-window-of-another-process).




