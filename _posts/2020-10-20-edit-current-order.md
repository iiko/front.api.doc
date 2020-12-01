---
title: Экран редактирования заказа позволяет вносить изменения по инициативе плагина
layout: default
---

Начиная с V7Preview5 плагин может редактировать через API текущий заказ, не получая [`EntityAlreadyInUseException`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_Exceptions_EntityAlreadyInUseException.htm) :-)

Ранее в V7Preview4 была добавлена возможность редактировать текущий заказ при обработке карты или штрихкода ([подробности]({{ site.baseurl }}{% post_url 2020-07-24-order-edit-card-barcode-handlers%})).
Теперь аналогичная возможность доступна в любой момент, когда не выполняются другие операции.

Для внесения изменений в заказ, открытый на экране редактирования, плагину необходимо вызвать метод [`TryEditCurrentOrder`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_TryEditCurrentOrder.htm) и передать в него ссылку на callback, который iikoFront вызовет, как только появится такая возможность.
При бездействии это произойдёт немедленно, а если в этот момент выполняются другие операции, то callback будет вызван сразу по их завершении.
В любом случае, метод `TryEditCurrentOrder` вернёт управление после вызова callback'а.
Если callback выбросит исключение, оно вылетит из `TryEditCurrentOrder`.
В случае, если в момент вызова `TryEditCurrentOrder` выполнялась другая операция, которая в итоге привела к выходу с экрана редактирования заказа, callback не удастся вызвать ни сразу, ни отложенно, а метод `TryEditCurrentOrder` сгенерирует исключение `OperationCanceledException`.

Пока метод `TryEditCurrentOrder` поддерживается только на экране редактирования заказа в режиме фастфуда или ресторана ([`IOrderEditScreen`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_Data_Screens_IOrderEditScreen.htm)).
Позднее появится поддержка экранов редактирования доставки, банкета, экрана оплаты и т. п.

На время выполнения callback'а показывается прогрессбар.
В callback будут переданы текущий заказ, локальная версия [`IOperationService`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_IOperationService.htm) для редактирования текущего заказа, а также [`IViewManager`](https://iiko.github.io/front.api.sdk/v7/html/T_Resto_Front_Api_UI_IViewManager.htm) с возможностью показывать диалоговые окна и [менять текст](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_UI_IViewManager_ChangeProgressBarMessage.htm) на прогрессбаре.

Во входящее в SamplePlugin окно `EditorTester`, где собраны примеры редактирования заказа, добавлена галочка «Apply changes to order that is opened in iikoFront», при её включении изменения применяются к текущему открытому на экране заказу. 