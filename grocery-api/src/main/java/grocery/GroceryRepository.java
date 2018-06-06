package grocery;
import org.springframework.data.repository.PagingAndSortingRepository;

import grocery.Grocery;

public interface GroceryRepository extends PagingAndSortingRepository<Grocery, Long> {

}