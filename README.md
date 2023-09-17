# nginx 미러

### running

```bash
$ docker-compose up --build
```

### test

* request / 

response: 200

```bash
$ curl http://localhost:8080
```

* request /server1 

response: 200

```bash
$ curl http://localhost:8080/server1
```

* request /server2 

response: 404

```bash
$ curl http://localhost:8080/server2
```