# Лабораторная работа №1
### РГУПС
**использованная команда: curl rgups.ru -I -L -v**

**предназначение используемых флагов:**\
`-I` ***выводит заголовок без основного текста документа***\
`-L` ***перенаправление (редирект) с HTTP на HTTPS***\
`-v` ***делает curl подробным***

**результат работы команды:**

`Trying 80.72.224.90:80...` ***попытка соединения по IP к 80 порту***\
`Connected to rgups.ru (80.72.224.90) port 80 (#0)` ***соединено с сайтом РГУПС (его IP и номер порта)***\
`HEAD / HTTP/1.1` ***метод, который запрашивает HTTP-заголовки без тела ответа. 1.1 - версия протокола HTTP***\
`Host: rgups.ru` ***имя хоста сервера***\
`User-Agent: curl/8.0.1` ***тип юзер агента, с помощью которого был выполнен запрос, в данном случае юзер агент curl***\
`Accept: */*` ***определяет тип контента, принимаемый клиентом от сервера. В данном случае \*/\* означает, что клиент принимает контент любого типа*** 

`HTTP/1.1 301 Moved Permanently` ***код перенаправления 301 Moved Permanently протокола HTTP показывает, что запрошенный ресурс был окончательно перемещён в URL, указанный в заголовке***\
`Server: nginx/1.19.1` ***содержит информацию о программном обеспечении, используемом исходным сервером для обработки запроса***\
`Date: Thu, 14 Sep 2023 19:48:07 GMT` ***дата и время ответа***\
`Content-Type: text/html` ***сообщает клиенту о типе передаваемого контента***\
`Content-Length: 169` ***указывает размер отправленного получателю контента в байтах***\
`Connection: keep-alive` ***постоянное соединение HTTP. Позволяет соединению оставаться открытым***\
`Location: <https://rgups.ru/>` ***указывает URL, на который перенаправляется страница***

`Connection #0 to host rgups.ru left intact` ***означает, что сервер оставил соединение открытым***\
`Clear auth, redirects to port from 80 to 443` ***говорит о том, что запрос перенаправлен с 80 порта (HTTP) на 443 порт (HTTPS)***\
`Issue another request to this URL: '<https://rgups.ru/>'` ***перенаправляет запрос на https***\
`Trying 80.72.224.90:443...` ***попытка соединения по IP***\
`Connected to rgups.ru (80.72.224.90) port 443 (#1)` ***соединено с сайтом ргупс по 443 порту***\
`schannel: disabled automatic use of client certificate` ***т.к. мы не указали ключ -k в команде curl, демонстрируется ошибка SSL-сертификата***\
`ALPN: offers http/1.1` ***ALPN - это расширение, определяющее какой протокол согласовывает зашифрованное соединение. Вданном случае предложение перейти на HTTP версии 1.1***\
`ALPN: server accepted http/1.1` ***сервер принял протокол HTTP версии 1.1***\
`using HTTP/1.1` ***использование протокола HTTP версии 1.1***

`HEAD / HTTP/1.1` ***метод, который запрашивает HTTP-заголовки без тела ответа. 1.1 - версия протокола HTTP***\
`Host: rgups.ru` ***имя хоста сервера***\
`User-Agent: curl/8.0.1` ***тип юзер агента, с помощью которого был выполнен запрос, в данном случае юзер агент curl***\
`Accept: */*` ***определяет тип контента, принимаемый клиентом от сервера. В данном случае \*/\* означает, что клиент принимает контент любого типа***

`HTTP/1.1 200 OK` ***соединение по HTTP, 200 означает, что соединение успешно***\
`Server: nginx/1.19.1` ***содержит информацию о программном обеспечении, используемом исходным сервером для обработки запроса***\
`Date: Thu, 14 Sep 2023 19:48:08 GMT` ***дата и время ответа***\
`Content-Type: text/html; charset=utf-8` ***тип возвращаемого контента: текст/html. Кодировка: UTF-8***\
`Connection: keep-alive` ***постоянное соединение HTTP. Позволяет соединению оставаться открытым***\
`X-Powered-By: ProcessWire CMS` ***система управления контентом: ProgressWire. префикс X означает, что заголовок является нестандартным***\
`Set-Cookie: wire=22919ceef6dbf12346142130cc5701a7; path=/; HttpOnly; SameSite=Lax` ***используется для отправки cookie-файла с сервера пользовательскому агенту, чтобы пользовательский агент мог отправить его обратно на сервер позже***\
`Expires: Thu, 19 Nov 1981 08:52:00 GMT` ***попытка отключить кэширование. Дата - день рождения одного из разработчиков расширения session для PHP***\
`Cache-Control: no-store, no-cache, must-revalidate` ***Поле Cache-Control заголовка HTTP содержит директивы (инструкции), которые управляют кэшированием в браузерах и совместно используемых кэшах. В данном случае полное отсутствие кэширования***\
`Pragma: no-cache` ***Он используется для обратной совместимости с кешами HTTP / 1.0***

`Connection #1 to host rgups.ru left intact` ***означает, что сервер оставил соединение открытым***\
`Could not resolve host: wp` ***нет ответа от хоста***\
`Closing connection 2` ***закрытие соединения***
