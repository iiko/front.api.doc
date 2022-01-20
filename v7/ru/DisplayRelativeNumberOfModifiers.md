---
title: Показ относительного количества модификаторов
layout: default
---

С учетом значения настройки `IRestaurant.DisplayRelativeNumberOfModifiers` в iikoFront рассчитывается количество порций модификатора в строковом виде, которое отображается на UI.

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
    // Настройка способа отображения количества групповых модификаторов блюда.	
    var showDeltaAmount = PluginContext.Operations.GetHostRestaurant().DisplayRelativeNumberOfModifiers;

    // Если включена опция "Количество не зависит от количества блюда", то всегда пишем "+N".
    if (isAmountIndependentOfParentAmount)
        return $"+{modifierAmount}";

    // Если модификатор платный или показываем абсолютное количество модификаторов, то пишем "×N".

    const string charX = "\u00D7";
    var multiplyAmountString = $"{charX}{modifierAmount}";

    if (isPaid || !showDeltaAmount)
        return multiplyAmountString;

    // Показываем относительное количество модификаторов.

    var deltaAmount = modifierAmount - defaultAmount;

    switch (deltaAmount)
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
            return $"{deltaAmount:+#;-#;0}";
    }
}
```