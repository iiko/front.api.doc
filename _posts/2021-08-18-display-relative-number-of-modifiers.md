---
title: Показ относительного количества модификаторов
layout: default
---

В API V7 для ресторана появилась возможность настроить способ отображения количества групповых модификаторов блюда.
Добавлено новое свойство [`bool IRestaurant.DisplayRelativeNumberOfModifiers`](https://iiko.github.io/front.api.sdk/v7/html/P_Resto_Front_Api_Data_Organization_IRestaurant_DisplayRelativeNumberOfModifiers.htm), обозначающее, что в случае `false` количество модификатора блюда должно отображаться в виде абсолютного количества (как было ранее), а в случае `true` как разница между абсолютным количеством модификатора и его количеством по умолчанию.

Например, у блюда есть модификатор _Сметана_, входящий в группу модификаторов. Для данного модификатора выполняется:
- количество зависит от количества основного блюда
- модификатор является бесплатным
- количество модификатора по умолчанию равно 3

Тогда при `IRestaurant.DisplayRelativeNumberOfModifiers` равном `true` отобразится:
- _+2 Сметана_, если увеличить количество модификатора на 2
- _- Сметана_, если уменьшаем количество на 1

При `IRestaurant.DisplayRelativeNumberOfModifiers` равном `false` отобразится абсолютное количество модификатора у блюда:
- _х5 Сметана_, если увеличить количество модификатора на 2 
- _х2 Сметана_, если уменьшить на 1

Данная настройка влияет на показ модификаторов на экранах редактирования заказа, закрытого заказа, списка доставок, списка заказов, КДС и в сервис-чеках.

С учетом значения настройки `IRestaurant.DisplayRelativeNumberOfModifiers` в iikoFront рассчитывается количество порций модификатора в строковом виде, которое отображается на UI.

Для удобства разработчиков плагинов и возможности перенести логику к себе на UI, приведем пример получения строки количества модификаторов здесь.

Метод CalculateModifierAmountString принимает

- `decimal modifierAmount` — количество порций модификатора,
- `int defaultAmount` — количество порций модификатора по умолчанию,
- `bool hideIfDefaultAmount` — настроено ли для данного группового модификатора "Скрывать, если количество по умолчанию",
- `bool isPaid` — является ли модификатор платным,
- `bool isAmountIndependentOfParentAmount` — настроено ли для данного модификатора "Количество не зависит от количества блюда".

И в результате возвращает строку вида `<знак><число>`, которую нужно отобразить на UI рядом с названием модификатора, чтобы пользователь увидел на экране `<знак><число> <имя модификатора>`.

```cs
public static string CalculateModifierAmountString(decimal modifierAmount, int defaultAmount, bool hideIfDefaultAmount, bool isPaid, bool isAmountIndependentOfParentAmount)
{
    var culture = CultureInfo.CurrentUICulture;

	// Настройка способа отображения количества групповых модификаторов блюда.
    var showDeltaAmount = ServiceFactory.Instance.Config.CafeSetup.Instance.DisplayRelativeNumberOfModifiers;

    // Если стоит галка "Количество не зависит от количества блюда", то всегда пишем "+N".
    if (isAmountIndependentOfParentAmount)
        return $"+{modifierAmount.ToString(culture)}";

    // Если модификатор платный или показываем абсолютное количество модификаторов, то пишем "×N".
    var multiplyAmountString = $"\u00D7{modifierAmount.ToString(culture)}";

    if (isPaid || !showDeltaAmount)
        return multiplyAmountString;

	// Относительное количество модификатора.
    var amount = modifierAmount - defaultAmount;

    // Показываем относительное количество модификаторов.
    switch (amount)
    {
        case 1:
            return "+";
        case -1:
            return "-";
        case 0 when hideIfDefaultAmount:
            return string.Empty;
        case 0:
            return multiplyAmountString;
        default:
            var amountFormatted= $"{amount:+#;-#;0}";
            return amountFormatted.ToString(culture);
    }
}
```