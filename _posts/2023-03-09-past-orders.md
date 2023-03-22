---
title: Получение закрытых заказов
layout: default
---

В API V8Preview4 была расширена возможность получения информации о закрытых заказах.

 
Метод [`GetPastOrder`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetPastOrder.htm) был изменен, и теперь требует только Id заказа.

Также были добавлены два новых метода:
[`GetPastOrders`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetPastOrders.htm) и
[`GetPastOrdersBySum`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetPastOrdersBySum.htm).

[`GetPastOrders`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetPastOrders.htm)
позволяет искать заказ по его номеру.
В случае отсутствия номере заказа будет возвращена информация о всех закрытых заказах за указанный интервал времени.

[`GetPastOrdersBySum`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_GetPastOrdersBySum.htm)
ищет заказы по итоговой сумме оплаты (после всех скидок и надбавок).

В вышеприведенных методах задание временного интервала является необязательным.
При его отсутствии в качестве интервала будет задан промежуток времени за последние 3 месяца. 
