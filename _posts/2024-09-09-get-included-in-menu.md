---
title: Возможность узнать, что блюдо в конкретном размере доступно к продаже
layout: default
tags: v9preview3 v9
---

Начиная с V9Preview3 появилась возможность узнать включенность в меню блюда в указанном размере:
[`GetIncludedInMenu`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetIncludedInMenu.htm).
Однако перед вызовом необходимо убедиться, что блюдо не удалено:
[`IProduct.IsActive`](https://iiko.github.io/front.api.sdk/v9/html/P_Resto_Front_Api_Data_Assortment_IProduct_IsActive.htm) равно `true`.


Ранее в API уже была возможность получить список отделений, в которых продукт доступен к продаже хотя бы в одном размере:
[`GetIncludedInMenuSectionsByProduct`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetIncludedInMenuSectionsByProduct.htm),
а также возможность вызвать получение цены из приказа:
[`GetPrice`](https://iiko.github.io/front.api.sdk/v9/html/M_Resto_Front_Api_IOperationService_GetPrice.htm).
