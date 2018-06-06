package grocery;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Grocery {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer ID;
	private String Description;
	private String lastSold;
	private String ShelfLife;
	private String Department;
	private String Price;
	private String Unit;
	private Integer xFor;
	private String Cost;

	public Integer getID() {
		return this.ID;
	}

	public void setID(Integer ID) {
		this.ID = ID;
	}

	public String getDescription() {
		return this.Description;
	}

	public void setDescription(String Description) {
		this.Description = Description;
	}

	public String getLastSold() {
		return this.lastSold;
	}

	public void setLastSold(String lastSold) {
		this.lastSold = lastSold;
	}

	public String getShelfLife() {
		return this.ShelfLife;
	}

	public void setShelfLife(String ShelfLife) {
		this.ShelfLife = ShelfLife;
	}

	public String getDepartment() {
		return this.Department;
	}

	public void setDepartment(String Department) {
		this.Department = Department;
	}

	public String getPrice() {
		return this.Price;
	}

	public void setPrice(String Price) {
		this.Price = Price;
	}

	public String getUnit() {
		return this.Unit;
	}

	public void setUnit(String Unit) {
		this.Unit = Unit;
	}

	public Integer getXFor() {
		return this.xFor;
	}

	public void setXFor(Integer xFor) {
		this.xFor = xFor;
	}

	public String getCost() {
		return this.Cost;
	}

	public void setCost(String Cost) {
		this.Cost = Cost;
	}

}