package net.javaguides.ems_backend.service;

import net.javaguides.ems_backend.dto.EmployeeDTO;
import net.javaguides.ems_backend.entity.Employee;
import net.javaguides.ems_backend.mapper.EmployeeMapper;
import net.javaguides.ems_backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    // Get all employees
    public List<EmployeeDTO> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream()
                .map(EmployeeMapper::toDTO)
                .collect(Collectors.toList());
    }

    // Get employee by ID
    public EmployeeDTO getEmployeeById(Long id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        return employee.map(EmployeeMapper::toDTO).orElse(null);
    }

    // Create a new employee
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {
        Employee employee = EmployeeMapper.toEntity(employeeDTO);
        employee = employeeRepository.save(employee);
        return EmployeeMapper.toDTO(employee);
    }

    // Update an existing employee
    public EmployeeDTO updateEmployee(Long id, EmployeeDTO employeeDTO) {
        Optional<Employee> existingEmployee = employeeRepository.findById(id);
        if (existingEmployee.isPresent()) {
            Employee employee = existingEmployee.get();
            employee.setFirstName(employeeDTO.getFirstName());
            employee.setLastName(employeeDTO.getLastName());
            employee.setEmail(employeeDTO.getEmail());
            employee = employeeRepository.save(employee);
            return EmployeeMapper.toDTO(employee);
        }
        return null;
    }

    // Delete an employee
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}
