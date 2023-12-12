---
title: Больше информации в заказах закрытых кассовых смен
layout: default
---

В API V8Preview7 была добавлена информация о том, был ли данный заказ удалён, сторнирован, информация о том, из какого заказа текущий был сторнирован, а также список заказов, которые входят в ту же группу, что и текущий заказ.

- [`PastOrder.Deleted`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_PastOrder_Deleted.htm)
— был ли заказ удалён;
- [`PastOrder.Storned`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_PastOrder_Storned.htm)
— был ли заказ сторнирован в кассовой смене, в которой был оплачен, или текущий заказ — это заказ, возвращающий заказ из закрытой кассовой смены (примечание: если исходный заказ не был сторнирован в кассовой смене, в которой был оплачен, и возвращался только из закрытой кассовой смены, данное свойство будет равно `false`);
- [`PastOrder.SourceOrderInfo`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_PastOrder_SourceOrderInfo.htm)
— информация о заказе, из которого был скопирован текущий заказ при сторнировании или возврате из закрытой кассовой смены;
- [`PastOrder.GroupOrderInfo`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_PastOrder_GroupOrderInfo.htm)
— информация о заказе, в группу которого входит текущий заказ
(здесь будет информация либо о заказе, из которого был скопирован текущий заказ при сторнировании,
либо о заказе, дозаказом которого является текущий заказ,
либо о заказе, который был первым в результате деления на 2ФР,
если перечисленные исходные заказы сами были первыми в группе;
либо о текущем заказе, если он является первым (или единственным) в группе,
а если исходный заказ сам входил в группу, то группой текущего заказа будет группа исходного заказа);
- [`PastOrder.GroupPastOrders`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_PastOrder_GroupPastOrders.htm)
— список заказов, входящих в ту же группу, что и текущий заказ
(заказы имеющие такое же свойство [`GroupOrderInfo`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_PastOrder_GroupOrderInfo.htm), что и текущий заказ).

Таким образом, чтобы понять, был ли хоть раз текущий заказ сторнирован, нужно проверить его свойство
[`Storned`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_PastOrder_Storned.htm),
если же оно равно `false`, то дополнительно нужно проверить, нет ли среди сгруппированных заказов, ссылающихся на текущий через свойство
[`SourceOrderInfo`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Orders_PastOrder_SourceOrderInfo.htm):

```
if (pastOrder.Storned || pastOrder.GroupPastOrders.Any(o => o.SourceOrderInfo?.OrderId == pastOrder.OrderId)
    // Данный заказ уже сторнировался.
```

При попытке повторного возврата
([`StornoPastOrder`](https://iiko.github.io/front.api.sdk/v8/html/M_Resto_Front_Api_IOperationService_StornoPastOrder.htm))
уже сторнированного заказа iikoFront будет проверять новое право `CAN_STORN_CLOSED_ORDERS_AGAIN ("F_STRNA", "Повторный возврат заказа закрытой кассовой смены")`.