---
title: Получение отчётов фронта
layout: default
---

В API V7 появилась возможность получить разметку некоторых фронтовых отчётов
[`GetReportMarkupById`](https://iiko.github.io/front.api.sdk/v7/html/M_Resto_Front_Api_IOperationService_GetReportMarkupById.htm).

В качестве идентификатора отчёта `reportId` можно передать любую из указанных в списке строк:

+ `"X_REPORT"` — X-отчет;
+ `"Z_REPORT"` — Z-отчет;
+ `"SALES_BY_TYPE_WITH_TAX_SERVER_REPORT"` — 011 Общая выручка по типам с налогами;
+ `"SERVER_HOURLY_REPORT"` — 012 Общая выручка почасовая;
+ `"SALES_BY_WAITER_SERVER_REPORT"` — 013 Общая выручка по официантам;
+ `"ORDERS_SUMMARY_REPORT"` — 015 Краткий отчет по открытым заказам и продажам в разрезе залов;
+ `"SALES_BY_PAYMENT_TYPE_SERVER_REPORT"` — 016 Чеки по типам оплаты;
+ `"DISH_EXPENSE_SERVER_REPORT"` — 021 Общий расход блюд;
+ `"SERVER_SALES_REPORT"` — 023 Общие продажи блюд;
+ `"SERVER_WRITEOFF_REPORT"` — 024 Общие списания блюд;
+ `"SUMMARY_REPORT"` — 031 Сводный отчет;
+ `"EMPLOYEES_NUTRITION_REPORT"` — 032 Питание персонала;
+ `"ORDER_GAP_REPORT"` — 033 Время от пречека до оплаты;
+ `"SESSION_WRITEOFF_REPORT"` — 034 Списания блюд;
+ `"EMPLOYEES_ATTENDANCES_REPORT"` — 035 Явки сотрудников;
+ `"SESSION_DISCOUNT_REPORT"` — 036 Отчет по скидкам и надбавкам;
+ `"PROBLEM_OPERATIONS_REPORT"` — 037 Опасные операции;
+ `"EMPLOYEE_DEBTS_REPORT"` — 038 Расчет сотрудникам;
+ `"EGAIS_PRODUCT_UNSEAL_REPORT"` — 039 Отчет по вскрытиям тары;
+ `"SALES_BY_TYPE_WITH_TAX_SESSION_REPORT"` — 041 Выручка по типам с налогами;
+ `"SESSION_HOURLY_REPORT"` — 042 Выручка почасовая;
+ `"SESSION_SALES_REPORT"` — 043 Продажи блюд;
+ `"DISH_EXPENSE_SESSION_REPORT"` — 044 Расход блюд;
+ `"CAFE_SESSION_FULL_REPORT"` — 045 Полный отчет кассовой смены;
+ `"CAFE_SESSION_SALES_REGISTER_REPORT"` — 046 Реестр счетов;
+ `"SALES_BY_PAYMENT_TYPE_SESSION_REPORT"` — 047 Чеки по типам оплаты за смену;
+ `"CAFE_SESSION_SUMMARY_REPORT"` — 048 Итого по смене;
+ `"CHEQUE_TAPE_REPORT"` — 049 Кассовая лента;
+ `"DELIVERY_REPORT"` — 050 Отчет по доставкам;
+ `"CAFE_SESSION_SALES_EXTENDED_REGISTER_REPORT"` — 051 Расширенный реестр счетов;
+ `"PAY_IN_OUT_REPORT"` — 052 Отчет по внесениям и изъятиям;
+ `"DELIVERY_DISHES_REPORT"` — 053 Блюда для приготовления доставок;
+ `"DONATIONS_REPORT"` — 054 Отчет по чаевым.