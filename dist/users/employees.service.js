"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const employees_entity_1 = require("../users/entites/employees.entity");
const auth_service_1 = require("../auth/auth.service");
let EmployeeService = class EmployeeService {
    constructor(employeeRepository, authService) {
        this.employeeRepository = employeeRepository;
        this.authService = authService;
    }
    async createEmployee(signupBody) {
        const hashedPassword = this.authService.generatePassword(signupBody.password);
        signupBody.password = hashedPassword;
        delete signupBody.passwordConfirm;
        const employee = await this.employeeRepository.save(signupBody);
        return employee;
    }
    async getEmployeeByUsername(username) {
        const employee = await this.employeeRepository.findOneBy({ username });
        return employee;
    }
    async getEmployeeById(id) {
        const employee = await this.employeeRepository.findOneBy({ id });
        return employee;
    }
    async getAllEmployees() {
        const employees = await this.employeeRepository.find();
        return employees;
    }
};
exports.EmployeeService = EmployeeService;
exports.EmployeeService = EmployeeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(employees_entity_1.Employee)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService])
], EmployeeService);
//# sourceMappingURL=employees.service.js.map