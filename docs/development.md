## Development

You want to develop API with spring boot and UI with Vue.js.
The spring boot application runs on an 8080 port. and the proxy server for UI development runs on the 8081 port.

### API Proxy
The Vue.js UI development server sets the spring boot application API to proxy.  
*vue.config.js*  
```js
module.exports = {
  devServer: {
    port: 8081,
    proxy: 'http://localhost:8080',
    disableHostCheck: true
  }
};
```

### Examples

For example, suppose you are developing the following APIs:
*SystemController.java*
```java
@RestController
@RequestMapping("/api/system")
public class SystemController {

    @GetMapping(value = "/info", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Object> info() {
        Map<String, Object> info = new HashMap<>();
        info.put("timestamp", System.currentTimeMillis());
        return ResponseEntity.ok(info);
    }
}
```

The API requested by the Vue UI component is called to the spring boot application because the UI development server has proxy settings.

*About.vue*
```vue
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.axios.get('/api/system/info').then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>
```

Now develop your own applications.