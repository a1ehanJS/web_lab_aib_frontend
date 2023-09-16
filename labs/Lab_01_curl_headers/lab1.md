# Лабораторная работа №1
### РГУПС
#### curl rgups.ru -I -L -v

`Trying 80.72.224.90:80...` ***попытка соединения по IP***
`Connected to rgups.ru (80.72.224.90) port 80 (#0)` ***соединено с сайтом РГУПС (его IP и номер порта)***

> HEAD / HTTP/1.1 --- HTTP-метод HEAD запрашивает заголовки, идентичные тем, что возвращаются, если указанный ресурс будет запрошен с помощью HTTP-метода
> Host: rgups.ru --- имя хоста
> User-Agent: curl/8.0.1 --- тип юзер агента, с которого был выполнен запрос, в данном случае юзер агент curl
> Accept: */*
>
< HTTP/1.1 301 Moved Permanently
HTTP/1.1 301 Moved Permanently
< Server: nginx/1.19.1
Server: nginx/1.19.1
< Date: Thu, 14 Sep 2023 19:48:07 GMT
Date: Thu, 14 Sep 2023 19:48:07 GMT
< Content-Type: text/html
Content-Type: text/html
< Content-Length: 169
Content-Length: 169
< Connection: keep-alive
Connection: keep-alive
< Location: <https://rgups.ru/>
Location: <https://rgups.ru/>

<

* Connection #0 to host rgups.ru left intact
* Clear auth, redirects to port from 80 to 443
* Issue another request to this URL: '<https://rgups.ru/>'
* Trying 80.72.224.90:443...
* Connected to rgups.ru (80.72.224.90) port 443 (#1)
* schannel: disabled automatic use of client certificate
* ALPN: offers http/1.1
* ALPN: server accepted http/1.1
* using HTTP/1.1

> HEAD / HTTP/1.1
> Host: rgups.ru
> User-Agent: curl/8.0.1
> Accept: */*
>
< HTTP/1.1 200 OK
HTTP/1.1 200 OK
< Server: nginx/1.19.1
Server: nginx/1.19.1
< Date: Thu, 14 Sep 2023 19:48:08 GMT
Date: Thu, 14 Sep 2023 19:48:08 GMT
< Content-Type: text/html; charset=utf-8
Content-Type: text/html; charset=utf-8
< Connection: keep-alive
Connection: keep-alive
< X-Powered-By: ProcessWire CMS
X-Powered-By: ProcessWire CMS
< Set-Cookie: wire=22919ceef6dbf12346142130cc5701a7; path=/; HttpOnly; SameSite=Lax
Set-Cookie: wire=22919ceef6dbf12346142130cc5701a7; path=/; HttpOnly; SameSite=Lax
< Expires: Thu, 19 Nov 1981 08:52:00 GMT
Expires: Thu, 19 Nov 1981 08:52:00 GMT
< Cache-Control: no-store, no-cache, must-revalidate
Cache-Control: no-store, no-cache, must-revalidate
< Pragma: no-cache
Pragma: no-cache

<

* Connection #1 to host rgups.ru left intact
* Could not resolve host: wp
* Closing connection 2
curl: (6) Could not resolve host: wp
