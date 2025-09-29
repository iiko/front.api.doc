---
title: Добавлена информация о маппинге налоговых категорий
layout: default
tags: v8

---


В информацию о фискальном регистраторе [`ICashRegisterInfo`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Device_ICashRegisterInfo.htm) 
добавлено свойство [`TaxCategoryToFiscalRegisterTaxItems`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_ICashRegisterInfo_TaxCategoryToFiscalRegisterTaxItems.htm)
список из [`ITaxCategoryToFiscalRegisterTaxItem`](https://iiko.github.io/front.api.sdk/v8/html/T_Resto_Front_Api_Data_Device_ITaxCategoryToFiscalRegisterTaxItem.htm).
Представляет собой соответсвие налогового регистра ФР [`TaxId`](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_ITaxCategoryToFiscalRegisterTaxItem_TaxId.htm) 
и id налоговой категории [`TaxCategoryId `](https://iiko.github.io/front.api.sdk/v8/html/P_Resto_Front_Api_Data_Device_ITaxCategoryToFiscalRegisterTaxItem_TaxCategoryId.htm).