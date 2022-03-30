import { Web3Handler } from "../web3.handler";
import { Employees, Employees__factory } from "../../contracts";

const ADDRESS = process.env.REACT_APP_EMPLOYEE_ADDRESS as string;

type EmployeeModel = {
  name: string;
  id: number;
  age: number;
  city: string;
  note?: string;
  index: number;
};

class EmployeeWeb3Handler extends Web3Handler<Employees> {
  async getCount(): Promise<any> {
    return this.contract.getCount();
  }

  async getEmployees(): Promise<EmployeeModel[]> {
    const employees: EmployeeModel[] = [];
    const data = await this.contract.getEmployees();
    for (let i = 0; i < data.length; i += 1) {
      employees.push({
        id: data[i].id.toNumber(),
        city: data[i].city,
        age: data[i].age.toNumber(),
        name: data[i].name,
        note: data[i].note,
        index: i,
      });
    }
    return employees;
  }

  async addEmployee(data: EmployeeModel): Promise<any> {
    return this.contract.add(data.age, data.city, data.name, data.note || "");
  }
}
export default new EmployeeWeb3Handler(Employees__factory, ADDRESS);
