
Browse for local web services with -B:

```bash
$ dns-sd -B _http._tcp local  
Browsing for _http._tcp.local  
Timestamp     A/R Flags if Domain                    Service Type              Instance Name  
16:30:59.870  Add     3  6 local.                    _http._tcp.               My Cool Web App  
16:30:59.871  Add     3  6 local.                    _http._tcp.               Someone Else's Web Service  
16:30:59.871  Add     3  6 local.                    _http._tcp.               A Third One  
^C
```


Look up the one I want, "My Cool Web App", with -L:

```bash
$ dns-sd -L "My Cool Web App" _http._tcp local  
Lookup My Cool Web App._http._tcp.local  
16:31:52.678  My\032Cool\032Web\032App._http._tcp.local. can be reached at MyWebServer.local.:80 (interface 6)  
^C  
```


Query the IP addresses for MyWebServer.local, with -Q:

```bash
$ dns-sd -Q MyWebServer.local  
Timestamp     A/R Flags if Name                             T   C Rdata  
16:32:40.786  Add     2  6 MyWebServer.local.               1   1 169.254.45.209  
^C  
```