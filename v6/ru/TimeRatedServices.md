---
title: Повременные услуги
layout: default
---
## Общее описание 

Приложение iikoFront может использоваться для продажи не только товаров и блюд, но также услуг с повременной тарификацией.
Это могут быть заведения с оплатой за проведённое время (аквапарки, антикафе), прокат инвентаря и многое другое, но классический пример — бильярд, именно он будет использован в данной статье для описания предметной области.

### Запуск и остановка
Услугу можно запускать и останавливать.
Когда услуга запущена, ведётся отсчёт времени, растёт «количество» и, соответственно, стоимость.
Когда услуга остановлена, отсчёт времени приостанавливается, эти периоды не оплачиваются.

Услугу можно заказать на определённое время, в этом случае оплачивается всё заказанное время, даже если фактически услуга использовалась меньшее время.
Например, посетитель может заказать бильярд на час, при этом стоимость изначально будет установлена за 1 час и не будет меняться, а «количество» будет расти с течением времени.
При достижении заданного лимита времени услуга автоматически остановится.
Другой вариант — оплата по факту, можно играть, пока не надоест, и заплатить за итоговое время, тогда лимит не задаётся, но услуга в любом случае остановится при достижении максимально возможной продолжительности в 12 часов.

Запуск и остановка услуги могут сопровождаться дополнительным действием, привязанным к столу, на котором расположен заказ.
В случае бильярда это может быть включение освещения над столом на время игры: изначально свет выключен, запустили услугу — свет включился, остановили — погас.
Отсюда возникает ограничение — не более одной запущенной услуги на столе.
Пока это ограничение действует для всех столов независимо от того, настроены ли подобные дополнительные действия.
В будущих версиях это ограничение не будет распространяться на столы или услуги, не имеющие привязок к внешним устройствам.

### Тарификация
Стоимость услуги может зависеть от дня недели и меняться со временем. Возможны два варианта тарификации:

- по времени суток — например, днём услуга может стоить дешевле, а в вечерние часы дороже, это позволяет сбалансировать периоды низкого и высокого спроса;
- по времени самой услуги — например, когда первый час самый дорогой, а каждый следующий всё дешевле, это мотивирует посетителей потреблять услугу в большем объёме.

Учёт времени ведётся по следующим правилам:

- Задаётся единица измерения, и время действия услуги округляется вверх до кратного значения, например, если настроена почасовая тарификация и услуга была запущена 70 минут, платить надо будет за два часа.
- Может быть задана минимальная продолжительность — например, если услугу запускали всего на 10 минут, а минимальная продолжительность — полчаса, платить надо будет за полчаса, даже если выбрана поминутная тарификация. Если при тех же настройках услугу запускали на 31 минуту, то и заплатить надо будет за 31 минуту. 
- С течением времени переключение между тарифами происходит автоматически, запоминается продолжительность использования услуги по каждому из тарифов. Периоды, соответствующие разным тарифам, будут оплачиваться по разным ценам.  

## Структуры данных ##

### Услуга
[`IOrderServiceItem`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_IOrderServiceItem.htm) — элемент заказа, соответствующий повременной услуге. Расположен в коллекции [`IOrder.Items`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrder_Items.htm) наряду с блюдами, которые можно готовить ([`IOrderCookingItem`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_IOrderCookingItem.htm)).
В меню повременной услуге соответствует продукт ([`IProduct`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Assortment_IProduct.htm)) с типом [`ProductType.Service`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Assortment_ProductType.htm) и имеющий параметры тарификации [`IProduct.RateSchedule`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Assortment_IProduct_RateSchedule.htm) (если параметры тарификации не заданы, то это услуга без повременной тарификации, она добавляется в заказ и оплачивается как обычное блюдо).

Ключевые свойства повременной услуги:

- [`Service`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrderServiceItem_Service.htm) — продукт, соответствующий этой услуге, определяет доступность в меню, базовую цену (тариф по умолчанию) и т. п.
- [`Periods`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrderServiceItem_Periods.htm) — список периодов работы услуги, соответствующих разным тарифам.
При запуске услуги в список добавляется первый период, его время и стоимость растут до тех пор, пока не произойдёт переключение на другой тариф, для другого тарифа будет добавлен второй период и так далее.
Каждому тарифу соответствует один период: если тарифная сетка настроена таким образом, что сначала действует один тариф, затем другой, а после него снова первый, то сначала будет расти время первого периода, затем второго, а потом снова первого.
- [`IsStarted`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrderServiceItem_IsStarted.htm) — запущена ли услуга в данный момент. 
- [`Price`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrderServiceItem_Price.htm) — базовая цена за единицу времени (отдельные периоды могут тарифицироваться по другим ценам).
- [`TimeLimit`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrderServiceItem_TimeLimit.htm) — лимит времени.
Если он задан, услуга автоматически остановится при достижении лимита. Даже если вручную остановить услугу раньше, оплатить все равно надо будет всё заказанное время, при этом использованное время учитывается и оплачивается в рамках периодов, а неиспользованное — в рамках самой услуги (см. `RemainingLimitCost`). 
- [`RemainingLimitCost`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrderServiceItem_RemainingLimitCost.htm) — стоимость неиспользованной части лимита времени. Если лимит не задан, 0. При задании лимита изначально будет полная стоимость лимита времени (ибо услугу ещё не запускали, нет ни одного периода работы, всё заказанное время ещё не использовано), со временем будет уменьшаться одновременно с увеличением стоимостей периодов (всё меньше неиспользованная часть лимита и всё больше использованная), пока не дойдёт до нуля.
- [`Cost`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrderServiceItem_Cost.htm) — полная стоимость этой услуги, включает в себя сумму за все периоды и стоимость неиспользованного остатка лимита времени.
- [`ResultSum`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrderServiceItem_ResultSum.htm) — итоговая стоимость этой услуги, включая скидки, надбавки и НДС.

### Период услуги
[`IOrderServiceItemPeriod`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_IOrderServiceItemPeriod.htm) — период работы услуги по определённому тарифу, включает в себя все отрезки времени, когда соответствующий тариф был активен.

Ключевые свойства периода повременной услуги:

- [`Service`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrderServiceItemPeriod_Service.htm) — продукт, соответствующий тарифу этого периода. Либо продукт типа  [`ProductType.Service`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Assortment_ProductType.htm), взятый из услуги как тариф по умолчанию, либо продукт типа  [`ProductType.Rate`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Assortment_ProductType.htm), взятый из тарифной сетки.
- [`Price`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrderServiceItemPeriod_Price.htm) — цена за единицу времени.
- [`ElapsedTime`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrderServiceItemPeriod_ElapsedTime.htm) — суммарное время, когда соответствующий тариф был активен.
Если услугу несколько раз запускали и останавливали, либо были переключения между тарифами туда и обратно, все отрезки времени, когда тариф был активен, будут собраны в один период, и здесь будет точная (не округлённая) суммарная длина всех этих отрезков.
Оплачивается округлённое время, но запоминается фактическое. Например, если оплата почасовая, а в `ElapsedTime` набралось всего 10 минут, стоимость периода будет соответствовать одному часу и не изменится в следующие 50 минут действия этого тарифа.
- [`Cost`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrderServiceItemPeriod_Cost.htm) — полная стоимость этого периода, соответствует произведению цены за единицу времени на округлённое прошедшее время. Эта стоимость уже включена в полную стоимость услуги ([`IOrderServiceItem.Cost`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrderServiceItem_Cost.htm)) и учтена в её итоговой стоимости ([`IOrderServiceItem.ResultSum`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_IOrderServiceItem_ResultSum.htm)). Эта сумма доступна для возможности детализации стоимости услуги по тарифам, не следует повторно прибавлять стоимость стоимость периода к стоимости услуги.

### Настройки тарификации
[`RateSchedule`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_RateSchedule.htm) — настройки повременной услуги, ключевые свойства:

- [`TimingMode`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_RateSchedule_TimingMode.htm) — режим тарификации, по времени суток или по времени самой услуги.
- [`Items`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_RateSchedule_Items.htm) — тарифная сетка, список элементов типа [`RateScheduleItem`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_RateScheduleItem.htm), определяющих отрезки времени с отличными от базового тарифами. Отрезок времени ([`RateScheduleInterval`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_V6_Data_Orders_RateScheduleInterval.htm)) определяется днём недели и смещением начала и конца отрезка относительно начала шкалы тарификации. В зависимости от выбранного режима тарификации (`TimingMode`) началом шкалы будет либо начало суток (вся шкала *[0;24)* часа), либо начало действия услуги (вся шкала *[0;12)* часов).
Гарантируется, что отрезки времени не пересекаются.
Если список пуст, всегда действует базовый тариф.
- [`TimingStep`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_RateSchedule_TimingStep.htm) — единица измерения. Фактическое время работы услуги округляется вверх до ближайшего кратного значения.
- [`MinimumDuration`](https://iiko.github.io/front.api.sdk/v6/html/P_Resto_Front_Api_V6_Data_Orders_RateSchedule_MinimumDuration.htm) — минимальная продолжительность услуги, либо `null`, если нижняя граница не задана.

## Управление услугой
[`AddOrderServiceItem`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_Editors_IEditSession_AddOrderServiceItem.htm) — добавление услуги в заказ.

[`StartService`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_IOperationService_StartService.htm) — запуск услуги.

[`StopService`](https://iiko.github.io/front.api.sdk/v6/html/M_Resto_Front_Api_V6_IOperationService_StopService.htm) — остановка услуги. При пречеке или оплате заказа услуга остановится автоматически.

## Примеры
В плагине SamplePlugin, входящем в состав SDK, появились примеры добавления услуги в заказ, запуска и остановки услуги — методы [`StartService`] и [`StopService`] в классе [`EditorTester`](https://github.com/iiko/front.api.sdk/blob/master/sample/Resto.Front.Api.SamplePlugin/EditorTester.cs):

```cs
private static void StartService()
{
    var order = PluginContext.Operations.GetOrders().Last(x => x.Status == OrderStatus.New);
    var serviceProduct = PluginContext.Operations.GetActiveProducts().Last(x => x.Type == ProductType.Service && x.RateSchedule != null);
    var credentials = PluginContext.Operations.GetCredentials();
    var service = PluginContext.Operations.AddOrderServiceItem(serviceProduct, order, order.Guests.Last(), credentials, TimeSpan.FromHours(2));
    PluginContext.Operations.StartService(credentials, order, service);
}

private static void StopService()
{
    var order = PluginContext.Operations.GetOrders().Last(x => x.Status == OrderStatus.New);
    var service = order.Items.OfType<IOrderServiceItem>().Last(x => x.IsStarted);
    PluginContext.Operations.StopService(PluginContext.Operations.GetCredentials(), order, service);
}
```