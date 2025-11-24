---
title: В метод ExecuteContinuousOperation добавлен параметр userId
layout: default
tags: v9preview8
---

Начиная с версии V9Preview8, в [`IOperationService`](https://iiko.github.io/front.api.sdk/v9/html/Methods_T_Resto_Front_Api_IOperationService.htm) расширен метод [`ExecuteContinuousOperation`](https://iiko.github.io/front.api.sdk/v9/html/Overload_Resto_Front_Api_Extensions_OperationServiceExtensions_ExecuteContinuousOperation.htm). Теперь метод позволяет указывать идентификатор пользователя, от имени которого выполняются операции.

Новая сигнатура метода:

```csharp
T ExecuteContinuousOperation<T>([NotNull] Func<IOperationService, T> continuousOperation, Guid? userId = null);
```

Новый параметр:
- `userId` — уникальный идентификатор пользователя, который выполняет операцию редактирования.

