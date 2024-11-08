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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRole = void 0;
const typeorm_1 = require("typeorm");
const employees_entity_1 = require("./employees.entity");
const roles_entity_1 = require("./roles.entity");
let EmployeeRole = class EmployeeRole {
};
exports.EmployeeRole = EmployeeRole;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], EmployeeRole.prototype, "employee_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => employees_entity_1.Employee),
    __metadata("design:type", employees_entity_1.Employee)
], EmployeeRole.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], EmployeeRole.prototype, "role_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => roles_entity_1.Role),
    __metadata("design:type", roles_entity_1.Role)
], EmployeeRole.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], EmployeeRole.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], EmployeeRole.prototype, "updated_at", void 0);
exports.EmployeeRole = EmployeeRole = __decorate([
    (0, typeorm_1.Entity)()
], EmployeeRole);
//# sourceMappingURL=employees_roles.entity.js.map