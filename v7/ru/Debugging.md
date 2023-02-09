---
title: Отладка
layout: default
---

В дополнение к статье [`Отладка`](https://iiko.github.io/front.api.doc/v6/ru/Debugging.html) версии v6: 

###Для отладки плагина в проекта на .Net Standard 2.0:
		
1.	В свойствах проекта проверить, что в Build=>Debug symbols генерируется PDB файл.
2.	Добавить в решение еще один проект Console App (.NET Framework) на фреймворке .Net Framework 4.7.2.
3.	В свойствах нового проекта указать следующие параметры отладки:
	- Start Action: Start external program: `C:\Program Files\iiko\iikoRMS\Front.Net\Resto.Front.Api.Host.exe`.
	- Start Options: Command line arguments: `/a="C:\Projects\Front.Api Sdk\Resto.Front.Api.SamplePlugin\bin\Debug\netstandard2.0\Resto.Front.Api.SamplePlugin.dll" /c=Resto.Front.Api.SamplePlugin.SamplePlugin /m=21005108 /l="C:\Projects\Front.Api Sdk\Logs\sample-plugin.log"`.
4.	Установить новый проект как стартовый (Set a Startup Project).

