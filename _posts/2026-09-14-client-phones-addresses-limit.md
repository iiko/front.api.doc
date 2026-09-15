---
title: Ограничение количества телефонов и адресов клиента
layout: default
tags: v8 v9 v10 v10preview1 v10preview2
---

Начиная с версии iikoFront 9.7 для клиентов БРД (банкеты, резервы, доставки) введено ограничение: клиент может иметь **не более 100 телефонов** и **не более 100 адресов**. Ограничение действует во всех актуальных версиях API: V8, V9, V10, V10Preview1 и V10Preview2.

## Затронутые методы

Ограничение действует в следующих методах интерфейса [`IEditSession`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Editors_IEditSession.htm):

* [`CreateClient`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_Editors_IEditSession_CreateClient.htm) — список телефонов `phones` не может содержать более 100 элементов;
* [`ChangeClientPhones`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_Editors_IEditSession_ChangeClientPhones.htm) — список телефонов `phones` не может содержать более 100 элементов;
* [`ChangeClientAddresses`](https://iiko.github.io/front.api.sdk/v10/html/M_Resto_Front_Api_Editors_IEditSession_ChangeClientAddresses.htm) — список адресов `addresses` не может содержать более 100 элементов.

## Новая причина исключения

Если при вызове методов `CreateClient`, `ChangeClientPhones` или `ChangeClientAddresses` передаётся список телефонов или адресов, количество элементов в котором превышает 100, выбрасывается [`ConstraintViolationException`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Exceptions_ConstraintViolationException.htm).

Причину нарушения можно определить по свойству [`Reason`](https://iiko.github.io/front.api.sdk/v10/html/P_Resto_Front_Api_Exceptions_ConstraintViolationException_Reason.htm). В перечисление [`ConstraintViolationExceptionReason`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Exceptions_ConstraintViolationExceptionReason.htm) добавлены два новых значения:

* `PhoneNumbersCountExceeded = 5` — количество телефонов превышает максимально допустимое;
* `AddressesCountExceeded = 6` — количество адресов превышает максимально допустимое.

## См. также

* [`ConstraintViolationException`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Exceptions_ConstraintViolationException.htm)
* [`ConstraintViolationExceptionReason`](https://iiko.github.io/front.api.sdk/v10/html/T_Resto_Front_Api_Exceptions_ConstraintViolationExceptionReason.htm)
