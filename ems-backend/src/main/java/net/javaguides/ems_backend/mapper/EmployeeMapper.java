package net.javaguides.ems_backend.mapper;

import net.javaguides.ems_backend.dto.EmployeeDTO;
import net.javaguides.ems_backend.entity.Employee;

public class EmployeeMapper {

    // Convert Entity to DTO
    public static EmployeeDTO toDTO(Employee employee) {
        EmployeeDTO dto = new EmployeeDTO();
        dto.setId(employee.getId());
        dto.setFirstName(employee.getFirstName());
        dto.setLastName(employee.getLastName());
        dto.setEmail(employee.getEmail());
        return dto;
    }

    // Convert DTO to Entity
    public static Employee toEntity(EmployeeDTO employeeDTO) {
        Employee employee = new Employee();
        employee.setId(employeeDTO.getId());
        employee.setFirstName(employeeDTO.getFirstName());
        employee.setLastName(employeeDTO.getLastName());
        employee.setEmail(employeeDTO.getEmail());
        return employee;
    }
}
