---
title: Не загружать плагины с расширением имени файла, отличным от «dll»
layout: default
---
Иногда, желая временно отключить загрузку плагина, пользователи дописывали что-нибудь к расширению (например, «*file.dll_*») и удивлялись, что плагин все равно загружается. Теперь плагины с подобными именами будут игнорироваться при поиске.

Наследие времён DOS и имён файлов в формате 8.3 порождает побочный эффект: при поиске файлов по маске «\*.dll» возвращаются не только файлы вида «*file.dll*», но и «*file.dllabcd*» (обратная совместимость с преобразованием «*VeryLongFileName.VeryLongExtension*» → «*VERYLO~1.VER*»). В случае .Net-приложения это скорее окажется ловушкой для пользователя, нежели насущной необходимостью работы в старинном окружении.