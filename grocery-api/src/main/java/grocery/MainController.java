package grocery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import grocery.Grocery;
import grocery.GroceryRepository;;

@Controller
@RequestMapping(path = "/grocery")
public class MainController {
    @Autowired
    private GroceryRepository groceryRepository;

    @GetMapping(path = "/search")
    public @ResponseBody Long searchGrocery(@RequestParam String value) {
        return groceryRepository.count();
    }

    @GetMapping(path = "/")
    public @ResponseBody Iterable<Grocery> getAllGroceries() {
        return groceryRepository.findAll();
    }

    @GetMapping(path = "/page")
    public @ResponseBody Iterable<Grocery> getGroceryFromRange(@RequestParam Integer pageNumber,
            @RequestParam Integer size) {
        return groceryRepository.findAll(PageRequest.of(pageNumber, size));
    }
}