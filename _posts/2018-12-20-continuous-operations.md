---
title: Добавлена возможность выполнения нескольких операций непрерываемой серией  
layout: default
---
В [`IOperationService`](https://iiko.github.io/front.api.sdk/v6/html/Methods_T_Resto_Front_Api_IOperationService.htm) добавлен метод [`ExecuteContinuousOperation`](https://iiko.github.io/front.api.sdk/v6/html/Overload_Resto_Front_Api_Extensions_OperationServiceExtensions_ExecuteContinuousOperation.htm), позволяющий последовательно выполнить несколько операций редактирования так, чтобы между ними не могли вклиниться чужие операции, которые могли бы спровоцировать [`EntityAlreadyInUseException`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_Exceptions_EntityAlreadyInUseException.htm) или [`EntityModifiedException`](https://iiko.github.io/front.api.sdk/v6/html/T_Resto_Front_Api_Exceptions_EntityModifiedException.htm).
Подробнее в статье про [редактирование данных]({{ site.baseurl }}/v6/ru/Data editing.html)