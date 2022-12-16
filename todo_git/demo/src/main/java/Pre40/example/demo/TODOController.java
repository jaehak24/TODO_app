package Pre40.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TODOController {

    @GetMapping("/")
    public String helloWorld() {
        return "To-do-application";
    }
}
