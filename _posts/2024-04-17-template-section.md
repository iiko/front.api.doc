---
title: Возможности расширения шаблонов чеков из плагинов
layout: default
tags: v9 v9preview2

---

В API V9Preview2 добавлена возможность менять печатаемый `XDocument` через [`BeforeFormatDocumentHandler`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_RegisterBeforeFormatDocumentHandler.htm) и [`AfterFormatDocumentHandler`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_RegisterAfterFormatDocumentHandler.htm).

Сама разметка может содержать в себе тег `<section>`, который используется для логического разделения документа на блоки. Тег имеет обязательный атрибут `name` и опциональный атрибут `data`

```
<section name="section_name" data="section_data" />
```
Атрибут `name` определяет конкретную секцию. Также может использоваться для определения вида документа (гостевой счет, квитанция об оплате, сервисный чек и т.д.)

Опциональный атрибут `data`  может содержать дополнительную информацию, которая требуется плагину. Например, можно передать `orderId`.

Подписка `BeforeFormatDocument` предназначена для добавления дополнительной информации в чек, которой нет в модели данных, но которая может быть в модели данных плагина.
Либо для выполнения бизнес-логики, которая зависит от модели данных плагина и недоступна в razor-шаблонах и DocumentService.

##### Пример 1.
[Resto.Front.Api.SamplePlugin.PrintTester.cs](https://github.com/iiko/front.api.sdk/blob/master/sample/v9preview2/Resto.Front.Api.SamplePlugin/PrintTester.cs)


##### Пример 2.

Добавить номер автомобиля в накладную. В модели данных ITemplateRootModel и в DocumentService номер автомобиля отсутствует. Допустим, эта информация есть в некотором плагине. Чтобы реализовать задачу через этот плагин, в шаблоне накладной мы добавляем тег `<section>`. 
```
<doc>
  ...
  ...
  <section name="plate_number" data="@orderId">
  ...
  ...
</doc>
```
В коде плагина: приведен пример кода, который добавляет номер автомобиля в секцию с именем "plate_number".
```
public XDocument BeforeFormatDocument(XDocument doc)
{
    XElement section = doc
        .Elements("section")
        .FirstOrDefault(e => e.Attribute("name") != null && (string)e.Attribute("name") == "plate_number");
  
    if (section != null)
    {
        XElement newElement = new XElement("pair",
            new XAttribute("left", "Номер автомобиля:"),
            new XAttribute("right", "А001МР77")); //подставить реальные данные
        section.AddAfterSelf(newElement);
    }
    return markup;
}
```

##### Пример 3.

Настраиваемая во внешней системе лояльности отправка квитанции об оплате и товарного чека по электронной почте вместо печати на принтере.

Добавляем теги `<section>` в шаблоны квитанций об оплате и товарный чек:
```
@inherits TemplateBase<IReceiptCheque>
@{
    var order = Model.Order;
}

<doc>
  <section name="ReceiptCheque" data="@order.Id">
  ...
</doc>
```
В шаблоне товарного чека:

```
@inherits TemplateBase<ICashMemoCheque>
@{
    var order = Model.Order;
}
  
<doc>
  <section name="CashMemo" data="@order.Id">
  ...
</doc>
```
В коде плагина:
```
public XDocument BeforeFormatDocument(XDocument doc)
{
    XElement receiptChequeSection = doc
        .Elements("section")
        .FirstOrDefault(e => e.Attribute("name") != null && Attribute("name") == "ReceiptCheque");
  
    if (receiptChequeSection != null)
    {
        //текущий документ - квитанция об оплате
        orderId = receiptChequeSection.Attributes["orderId"]?.Value
        if (orderId != null)
        {
            //Используем плагинную модель данных (настройки покупателя)
            var customerInfo = GetCustomerInfo(orderId);
            if (customerSettings != null && customerSettings.SendElectronicReceiptOnly)
            {
                SendElectronicReceipt(customerInfo.UserId, doc); //Какой-то метод плагина для отправки электронного чека
                return new XElement("nodoc"); //не печатаем документ на принтере
            }
        }
    }
  
    //Аналогичный код для товарного чека
  
    return doc;
}
```
В данном примере плагин получил настройки покупателя (недоступны в razor-модели ITemplateRootModel), и если настроена опция `SendElectronicReceiptOnly`, то весь документ заменяется на`<nodoc />`

При финальной отправке документа на принтер теги `<section>` игнорируются и никак не влияют на внешний вид документа.
