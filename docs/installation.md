## Installation

Create a project to have the following directory structure:
```
src
 ├─ main
 │ ├─ java
 │ ├─ resources
 │ └─ vue
gradle
build.gradle
```

### Start spring-boot project

- [Spring initializr](https://start.spring.io/)
- [spring-boot-cli](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-cli.html)

We can download spring-boot-cli from [repo](https://repo.spring.io/release/org/springframework/boot/spring-boot-cli/2.4.2/).
if you use windows, download `spring-boot-cli-2.4.2-bin.zip`.

```sh
PS C:\Users\Mambo\> spring version
Spring CLI v2.4.2

spring init --build=gradle --java-version=11 --dependencies=devtools,configuration-processor,lombok,web,session,freemarker,security,jdbc,data-jdbc,h2,validation,mail,quartz,cache,actuator --packaging=jar app.zip
```

### Add vue.js project

- [vue-cli](https://cli.vuejs.org/)

You can easily add Vue projects through the vue-cli.
```sh
cd src/main
vue create --preset kdevkr/vue-preset vue
```