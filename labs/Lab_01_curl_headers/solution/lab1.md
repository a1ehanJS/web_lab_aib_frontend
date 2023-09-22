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

***Применив команду curl с использованием флагов -L -v и -I и указав в поле адреса rgups.ru, www.rgups.ru, http://rgups.ru и https://rgups.ru в наших HTTP заголовках вместо rgups.ru отображается www.rgups.ru, http://rgups.ru и https://rgups.ru соответственно. Если использовать команду curl без флагов и точно так же вводить разные варианты доменов, то помимо html разметки будут выводиться различные HTTP заголовки***

### Github

**использованная команда: curl github.com -I -L -v**

**предназначение используемых флагов:**\
`-I` ***выводит заголовок без основного текста документа***\
`-L` ***перенаправление (редирект) с HTTP на HTTPS***\
`-v` ***делает curl подробным***

**результат работы команды:**

`Trying 140.82.121.3:80...`\
`Connected to github.com (140.82.121.3) port 80 (#0)`\
`HEAD / HTTP/1.1`\
`Host: github.com`\
`User-Agent: curl/8.0.1`\
`Accept: */*`

`HTTP/1.1 301 Moved Permanently`\
`Content-Length: 0`\
`Location: https://github.com/`

`Connection #0 to host github.com left intact`\
`Clear auth, redirects to port from 80 to 443`\
`Issue another request to this URL: 'https://github.com/'`\
`Trying 140.82.121.3:443...`\
`Connected to github.com (140.82.121.3) port 443 (#1)`\
`schannel: disabled automatic use of client certificate`\
`ALPN: offers http/1.1`\
`ALPN: server accepted http/1.1`\
`using HTTP/1.1`\
`HEAD / HTTP/1.1`\
`Host: github.com`\
`User-Agent: curl/8.0.1`\
`Accept: */*`

`HTTP/1.1 200 OK`\
`Server: GitHub.com`\
`Date: Thu, 21 Sep 2023 15:38:58 GMT`\
`Content-Type: text/html; charset=utf-8`\
`Vary: X-PJAX, X-PJAX-Container, Turbo-Visit, Turbo-Frame, Accept-Language, Accept-Encoding, Accept, X-Requested-With` ***Заголовок ответа Vary определяет, как сопоставить будущие заголовки запроса, чтобы решить, можно ли использовать кешированный ответ, а не запрашивать новый с исходного сервера***\
`content-language: en-US` ***язык возвращаемого контента***\
`ETag: W/"0e30145b3cc34054cfa0e7ad9ceb43bc"` ***позволяет более эффективно использовать кеш и сохраняет пропускную способность, позволяя серверу отправлять не весь ответ, если содержимое не изменилось***\
`Cache-Control: max-age=0, private, must-revalidate`\
`Strict-Transport-Security: max-age=31536000; includeSubdomains; preload` ***заголовок ответа, позволяющий web-сайтам уведомить браузер о том, что доступ к ним должен быть осуществлён только посредством HTTPS вместо HTTP***\
`X-Frame-Options: deny` ***указывает, следует ли разрешить браузеру отображать страницу в различных форматах. Сайты могут использовать это, чтобы избежать атак с использованием взлома по клику, гарантируя, что их контент не будет внедрен на другие сайты. В данном случае - отклонено***\
`X-Content-Type-Options: nosniff` ***не позволяет браузеру выполнять перехват типа MIME***\
`X-XSS-Protection: 0` ***останавливает загрузку страниц при обнаружении XSS атаки. В данном случае 0 - отключает фильтрацию XSS***\
`Referrer-Policy: origin-when-cross-origin, strict-origin-when-cross-origin` ***заголовок, определяющий, какой объем информации о реферере (адрес запроса) следует включать в запросы. origin-when-cross-origin - при выполнении запроса того же источника на тот же уровень протокола отправляется источник, путь и строка запроса. strict-origin-when-cross-origin -  для запросов между источниками отправляется источник, когда уровень безопасности протокола остается прежним***\
`Content-Security-Policy: default-src 'none'; base-uri 'self'` ***Политика защиты содержимого***\
`Set-Cookie:_gh_sess=nkYXkF1sbQqk%; Path=/; HttpOnly; Secure; SameSite=Lax`\
`Set-Cookie: _octo=GH1.1.334305258.1695310744; Path=/; Domain=github.com; Expires=Sat, 21 Sep 2024 15:39:04 GMT; Secure; SameSite=Lax`\
`Set-Cookie: logged_in=no; Path=/; Domain=github.com; Expires=Sat, 21 Sep 2024 15:39:04 GMT; HttpOnly; Secure; SameSite=Lax`
`Accept-Ranges: bytes` ***указывает единицу измерения, которая может быть использована для определения диапазона чтения. В данном случае - байты***\
`X-GitHub-Request-Id: A5BB:5234:3AE15C8:3B7F5A5:650C6397` ***идентификатор запроса***

### РЖД

**использованная команда: curl rzd.ru -I -L -v --User-agent "Yandex"**

**предназначение используемых флагов:**\
`-I` ***выводит заголовок без основного текста документа***\
`-L` ***перенаправление (редирект) с HTTP на HTTPS***\
`-v` ***делает curl подробным***\
`--User-agent "Yandex"` ***указываем тип юзер-агента (в данном случае браузер, с помощью которого делается запрос) "Yandex", т.к. при обращении к РЖД через обычный curl, сайт прерывает соединение и продолжаются бесконечные попытки соединения с данным ресурсом***

**результат работы команды:**

`HEAD / HTTP/1.1`\
`Host: www.rzd.ru`\
`User-Agent: Yandex`\
`Accept: */*`

`HTTP/1.1 200`\
`Content-Type: text/html;charset=utf-8`\
`Content-Length: 210102`\
`Connection: keep-alive`\
`Date: Thu, 21 Sep 2023 20:24:35 GMT`\
`Vary: Accept-Encoding`\
`X-UCM-Pod-Name: inex-ucm-776d97f9d-4mqxf` ***имя устройства (пода) системы управления вызовами***\
`Strict-Transport-Security: max-age=15724800; includeSubDomains`\
`Via: nginx3` ***Via используется для ведения списка пересылаемых сообщений, что может помочь избежать повторного посещения одного и того же узла и создания сетевого цикла***\
`X-Frame-Options: sameorigin`\
`Set-Cookie:session-cookie=1783e109d75ab07a7230195f18991a243b5b5e67db63b1a4c0cd0129b3473d2627ead013828923624e868b9cc3b51475; Max-Age=86400; Path=/; secure`\
`X-XSS-Protection: 1; mode=block`   

### Яндекс

**использованная команда: curl yandex.ru -I -L -v**

**предназначение используемых флагов:**\
`-I` ***выводит заголовок без основного текста документа***\
`-L` ***перенаправление (редирект) с HTTP на HTTPS***\
`-v` ***делает curl подробным***

**результат работы команды:**

`HEAD / HTTP/1.1`\
`Host: yandex.ru`\
`User-Agent: curl/8.0.1`\
`Accept: */*`

`HTTP/1.1 302 Moved temporarily` ***временно перемещен***\
`Accept-CH: Sec-CH-UA-Platform-Version, Sec-CH-UA-Mobile` ***указывает, какие заголовки клиентских подсказок клиент должен включать в последующие запросы***\
`Cache-Control: max-age=1209600,private` \
`Date: Thu, 21 Sep 2023 20:10:49 GMT`\
`Location: https://dzen.ru/?yredirect=true` ***указывает URL, на который перенаправляется страница***\
`NEL: {"report_to": "network-errors", "max_age": 100, "success_fraction": 0.001, "failure_fraction": 0.1}` ***используется для настройки ведения журнала сетевых запросов***\
`P3P: policyref="/w3c/p3p.xml", CP="NON DSP ADM DEV PSD IVDo OUR IND STP PHY PRE NAV UNI"` ***позволяет веб-сайтам выражать свои правила конфиденциальности в стандартном формате, который может быть автоматически получен и интерпретирован агентами пользователей***\
`Portal: Home` ***главная страница***\
`Report-To: { "group": "network-errors", "max_age": 100, "endpoints"` ***указывает пользовательскому агенту хранить конечные точки отчётов для источника, издавшего этот заголовок***\
`X-Content-Type-Options: nosniff`\
`X-Robots-Tag: unavailable_after: 12 Sep 2022 00:00:00 PST` ***X-Robots-Tag - это заголовок HTTP, который дает указания о индексации сайта поисковым системам***\
`X-Yandex-Req-Id:1695327049336272-3444463721142783924-balancer-l7leveler-kubr-yp-sas-15-BAL-7648` ***идентификационный номер запроса***\
`set-cookie: is_gdpr=0; Path=/; Domain=.yandex.ru; Expires=Sat, 20 Sep 2025 20:10:49 GMT`\
`set-cookie: _yasc=rCR9IAyAaMgnU6eUvnkgDUnvTXdhAcEcmBcciNX73SMMr3TCvnbp`

`Connection #0 to host yandex.ru left intact`\
`Clear auth, redirects to port from 80 to 443`\
`Issue another request to this URL: 'https://dzen.ru/?yredirect=true'`\
`Trying 62.217.160.2:443...`\
`Connected to dzen.ru (62.217.160.2) port 443 (#1)`\
`schannel: disabled automatic use of client certificate`\
`ALPN: offers http/1.1`\
`ALPN: server accepted http/1.1`\
`using HTTP/1.1`\
`HEAD /?yredirect=true HTTP/1.1`\
`Host: dzen.ru`\
`User-Agent: curl/8.0.1`\
`Accept: */*`

`HTTP/1.1 200 Ok`\
`Cache-Control: no-cache, no-store, max-age=0, must-revalidate`\
`Content-Security-Policy-Report-Only: default-src 'none'; connect-src` ***Политика защиты данных. Позволяет распознавать и устранять определённые типы атак***\
`Content-Type: text/html; charset=utf-8`\
`Set-Cookie:_yasc=RV74HWrXCHGel2qbsXW6mwD5NfybDOmERt9oWLomcA4n9We1fs7II/KFHoGe1sI6y...`\
`X-Content-Type-Options: nosniff`\
`X-Frame-Options: deny`\
`X-Requestid: 195035001.222.1695327050226.62302` ***идентификатор запроса***\
`X-XSS-Protection: 1; mode=block`\
`X-Yandex-Req-Id:1695327050197883-865921491238175254200108-production-ap`***идентификатор запроса***

### Python

**использованная команда: curl python.org -I -L -v**

**предназначение используемых флагов:**\
`-I` ***выводит заголовок без основного текста документа***\
`-L` ***перенаправление (редирект) с HTTP на HTTPS***\
`-v` ***делает curl подробным***

**результат работы команды:**

`Trying 151.101.128.223:80...`\
`Connected to python.org (151.101.128.223) port 80 (#0)`\
`HEAD / HTTP/1.1`\
`Host: python.org`\
`User-Agent: curl/8.0.1`\
`Accept: */*`

`HTTP/1.1 301 Moved Permanently`\
`Connection: close`\
`Content-Length: 0`\
`Server: Varnish`\
`Retry-After: 0` ***показывает, как долго клиент должен подождать перед последующим запросом***\
`Accept-Ranges: bytes`\
`Date: Fri, 22 Sep 2023 11:27:12 GMT`\
`Via: 1.1 varnish`\
`X-Served-By: cache-bma1620-BMA` ***добавляется различными инструментами для указания сервера, предоставившего ответ***\
`X-Cache: HIT` ***это указывает, был ли файл обработан CDN или исходным сервером***\
`X-Cache-Hits: 0` ***это значение точно отражает значение "x-cache", значение "0" эквивалентно "промаху", а любое положительное значение эквивалентно "промаху"***\
`X-Timer: S1695382032.019276,VS0,VE0` ***содержит информацию о сроках ответа***\
`Location: https://www.python.org/`\
`Strict-Transport-Security: max-age=315360000; preload`

`Closing connection 0`\
`Clear auth, redirects to port from 80 to 443`\
`Issue another request to this URL: 'https://www.python.org/'`\
`Trying 151.101.244.223:443...`\
`Connected to www.python.org (151.101.244.223) port 443 (#1)`\
`schannel: disabled automatic use of client certificate`\
`ALPN: offers http/1.1`\
`ALPN: server accepted http/1.1`\
`using HTTP/1.1`\
`HEAD / HTTP/1.1`\
`Host: www.python.org`\
`User-Agent: curl/8.0.1`
`Accept: */*`

`HTTP/1.1 200 OK`\
`Connection: keep-alive`\
`Content-Length: 50042`\
`Server: nginx`\
`Content-Type: text/html; charset=utf-8`\
`X-Frame-Options: SAMEORIGIN`\
`Via: 1.1 vegur, 1.1 varnish, 1.1 varnish`\
`Accept-Ranges: bytes`\
`Date: Fri, 22 Sep 2023 11:27:12 GMT`\
`Age: 573` ***заголовок содержит время в секундах, в течение которого объект находился в кэше прокси-сервера***\
`X-Served-By: cache-iad-kiad7000025-IAD, cache-hel1410028-HEL`\
`X-Cache: HIT, HIT`\
`X-Cache-Hits: 23, 3`\
`X-Timer: S1695382033.884886,VS0,VE0`\
`Vary: Cookie`\
`Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`

### Git

**использованная команда: curl git-scm.com -I -L -v**

**предназначение используемых флагов:**\
`-I` ***выводит заголовок без основного текста документа***\
`-L` ***перенаправление (редирект) с HTTP на HTTPS***\
`-v` ***делает curl подробным***

**результат работы команды:**

`Trying 188.114.99.233:80...`\
`Connected to git-scm.com (188.114.99.233) port 80 (#0)`\
`HEAD / HTTP/1.1`\
`Host: git-scm.com`\
`User-Agent: curl/8.0.1`\
`Accept: */*`

`HTTP/1.1 301 Moved Permanently`\
`Date: Fri, 22 Sep 2023 13:22:04 GMT`\
`Connection: keep-alive`\
`Cache-Control: max-age=3600`\
`Expires: Fri, 22 Sep 2023 14:22:04 GMT`\
`Location: https://git-scm.com/`\
`Server: cloudflare`\
`CF-RAY: 80aadaccfb64199e-FRA` ***представляет собой хэшированное значение, в котором закодирована информация о дата-центре и запросе посетителя***

`Connection #0 to host git-scm.com left intact`\
`Clear auth, redirects to port from 80 to 443`\
`Issue another request to this URL: 'https://git-scm.com/'`\
`Trying 188.114.99.233:443...`\
`Connected to git-scm.com (188.114.99.233) port 443 (#1)`\
`schannel: disabled automatic use of client certificate`\
`ALPN: offers http/1.1`\
`ALPN: server accepted http/1.1`\
`using HTTP/1.1`\
`HEAD / HTTP/1.1`\
`Host: git-scm.com`\
`User-Agent: curl/8.0.1`\
`Accept: */*`

`HTTP/1.1 200 OK`\
`Date: Fri, 22 Sep 2023 13:22:05 GMT`\
`Content-Type: text/html; charset=utf-8`\
`Connection: keep-alive`\
`X-Frame-Options: SAMEORIGIN`\
`X-Xss-Protection: 1; mode=block`\
`X-Content-Type-Options: nosniff`\
`X-Download-Options: noopen` ***указывает, что браузер не должен отображать опцию «Открыть» файл, который был загружен из приложения, чтобы предотвратить фишинговые атаки, поскольку файл иначе получил бы доступ для выполнения в контекст приложения***\
`X-Permitted-Cross-Domain-Policies: none` ***указывает, разрешен ли файл междоменной политики***\
`Referrer-Policy: strict-origin-when-cross-origin`\
`Cache-Control: public, max-age=14400`\
`Etag: W/"db69273d9410cbf4536e9d4b3a59685d"`\
`X-Request-Id: 8e67cb1e-5e5c-49c2-aa95-7bbb9144e38a`\
`X-Runtime: 0.017893` ***используется для указания времени (в секундах), которое требуется приложению для обработки каждого запроса***\
`Via: 1.1 vegur`\
`CF-Cache-Status: HIT` ***указывает, был ли кэш возвращен из учетной записи Cloudflare***\
`Age: 1014`\
`Server: cloudflare`\
`CF-RAY: 80aadad03dc01e85-AMS`

### Jetbrains

**использованная команда: curl jetbrains.com -I -L -v**

**предназначение используемых флагов:**\
`-I` ***выводит заголовок без основного текста документа***\
`-L` ***перенаправление (редирект) с HTTP на HTTPS***\
`-v` ***делает curl подробным***\

**результат работы команды:**

`Trying 65.9.55.81:80...`\
`Connected to jetbrains.com (65.9.55.81) port 80 (#0)`\
`HEAD / HTTP/1.1`\
`Host: jetbrains.com`\
`User-Agent: curl/8.0.1`\
`Accept: */*`

`HTTP/1.1 301 Moved Permanently`\
`Server: CloudFront`\
`Date: Fri, 22 Sep 2023 13:59:43 GMT`\
`Content-Type: text/html`\
`Content-Length: 167`\
`Connection: keep-alive`\
`Location: https://jetbrains.com/`\
`X-Cache: Redirect from cloudfront`\
`Via: 1.1 92d4c1e39a34b2240dece0172216b542.cloudfront.net (CloudFront)`\
`X-Amz-Cf-Pop: ARN54-C1` ***указывает пограничное местоположение cloudfront***\
`Alt-Svc: h3=":443"; ma=86400` ***позволяет серверу указывать, что другое сетевое местоположение может рассматриваться как авторитетное для этого источника при выполнении будущих запросов***\
`X-Amz-Cf-Id: jfUUvKz254RA7mPlbdymmIDUcoRokmQ_8fjg4dpXJjZefqOnTJ6uHQ==` ***идентификатор запроса для внутреннего устранения неполадок***

`Connection #0 to host jetbrains.com left intact`\
`Clear auth, redirects to port from 80 to 443`\
`Issue another request to this URL: 'https://jetbrains.com/'`\
`Trying 65.9.55.81:443...`\
`Connected to jetbrains.com (65.9.55.81) port 443 (#1)`\
`schannel: disabled automatic use of client certificate`\
`ALPN: offers http/1.1`\
`ALPN: server accepted http/1.1`\
`using HTTP/1.1`\
`HEAD / HTTP/1.1`\
`Host: jetbrains.com`\
`User-Agent: curl/8.0.1`\
`Accept: */*`

`HTTP/1.1 308 Found`\
`Server: CloudFront`\
`Date: Fri, 22 Sep 2023 13:59:45 GMT`\
`Content-Length: 0`\
`Connection: keep-alive`\
`Location: https://www.jetbrains.com/`\
`Strict-Transport-Security: max-age=31536000;`\
`X-Cache: FunctionGeneratedResponse from cloudfront`\
`Via: 1.1 5a96272b81254403ef5ef083d36ce62a.cloudfront.net (CloudFront)`\
`X-Amz-Cf-Pop: ARN54-C1`\
`Alt-Svc: h3=":443"; ma=86400`\
`X-Amz-Cf-Id: f3pi2WaMargPEciklrDGKZKST6vW1Tu7faG9PcIlZKbGsKiPjT5qvQ==`

`Connection #1 to host jetbrains.com left intact`\
`Issue another request to this URL: 'https://www.jetbrains.com/'`\
`Trying 108.157.229.40:443...`\
`Connected to www.jetbrains.com (108.157.229.40) port 443 (#2)`\
`schannel: disabled automatic use of client certificate`\
`ALPN: offers http/1.1`\
`ALPN: server accepted http/1.1`\
`using HTTP/1.1`\
`HEAD / HTTP/1.1`\
`Host: www.jetbrains.com`\
`User-Agent: curl/8.0.1`\
`Accept: */*`

`HTTP/1.1 200 OK`\
`Content-Type: text/html; charset=utf-8`\
`Content-Length: 47213`\
`Connection: keep-alive`\
`Date: Fri, 22 Sep 2023 13:59:30 GMT`\
`Server: nginx`\
`X-Content-Type-Options: nosniff`\
`Referrer-Policy: same-origin`\
`Expires: Fri, 22 Sep 2023 13:59:30 GMT`\
`Cache-Control: max-age=0`\
`Pragma: no-cache`\
`X-Frame-Options: DENY`\
`X-Content-Type-Options: nosniff`\
`X-Xss-Protection: 1; mode=block`\
`Strict-Transport-Security: max-age=31536000;`\
`Vary: Accept-Encoding`\
`Via: 1.1 296d9c953cfde68911b6645bdd6877b2.cloudfront.net (CloudFront)`\
`Alt-Svc: h3=":443"; ma=86400`\
`Age: 15`\
`Set-Cookie: cf_country-region=RU-ROS; Domain=jetbrains.com; Path=/; Secure`\
`X-Cache: Hit from cloudfront`\
`X-Amz-Cf-Pop: ARN56-P2`\
`X-Amz-Cf-Id: KnE-lWga4FE6P0yepq1nhij5yYcKoMgM3UR9a0WZMz7SPleAsJqGdw==`

### Visual Studio Code

**использованная команда: curl code.visualstudio.com -I -L -v**

**предназначение используемых флагов:**\
`-I` ***выводит заголовок без основного текста документа***\
`-L` ***перенаправление (редирект) с HTTP на HTTPS***\
`-v` ***делает curl подробным***\

**результат работы команды:**

`Trying 13.107.246.53:80...`\
`Connected to code.visualstudio.com (13.107.246.53) port 80 (#0)`\
`HEAD / HTTP/1.1`\
`Host: code.visualstudio.com`\
`User-Agent: curl/8.0.1`\
`Accept: */*`

`HTTP/1.1 307 Temporary Redirect`\
`Date: Fri, 22 Sep 2023 17:20:05 GMT`\
`Content-Type: text/html`\
`Content-Length: 0`\
`Connection: keep-alive`\
`Location: https://code.visualstudio.com/`\
`x-azure-ref: 20230922T172005Z-p7fru1wh0923fec8sh1b95thr400000000ug00000001` ***Уникальная ссылочная строка, идентифицирующая запрос. Она используется для поиска в журналах доступа***\
`X-Cache: CONFIG_NOCACHE`

`Connection #0 to host code.visualstudio.com left intact`\
`Clear auth, redirects to port from 80 to 443`\
`Issue another request to this URL: 'https://code.visualstudio.com/'`\
`Trying 13.107.246.53:443...`\
`Connected to code.visualstudio.com (13.107.246.53) port 443 (#1)`\
`schannel: disabled automatic use of client certificate`\
`ALPN: offers http/1.1`\
`ALPN: server accepted http/1.1`\
`using HTTP/1.1`\
`HEAD / HTTP/1.1`\
`Host: code.visualstudio.com`\
`User-Agent: curl/8.0.1`\
`Accept: */*`

`HTTP/1.1 200 OK`\
`Content-Length: 50213`\
`Content-Type: text/html; charset=utf-8`\
`Accept-Ranges: bytes`\
`ETag: W/"c425-XBxswsHoV0dlJCAKuBbwZ9s5rjQ"`\
`Strict-Transport-Security: max-age=31536000; includeSubDomains`\
`Content-Security-Policy: frame-ancestors 'self'`\
`X-Frame-Options: SAMEORIGIN`\
`X-XSS-Protection: 1; mode=block`\
`X-Content-Type-Options: nosniff`\
`X-Content-Type-Options: nosniff`\
`X-Powered-By: ASP.NET`\
`x-azure-ref: 0xswNZQAAAAAloUrRw/OcTqzGYX4UwOOCQlJVMzBFREdFMDQxMABiZTg3ZGM2ZC00MGY5LTQ1YjAtODgxMC05OTEwODdlZjhiMjk=`\
`X-Cache: CONFIG_NOCACHE`\
`Date: Fri, 22 Sep 2023 17:20:05 GMT`